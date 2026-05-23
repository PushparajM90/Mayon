import { useMemo, useState } from 'react'
import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FeedbackSection } from './components/FeedbackSection'
import { FoodSection } from './components/FoodSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { OrderTray } from './components/OrderTray'
import { RegistrationGate } from './components/RegistrationGate'
import { ThemeToggle } from './components/ThemeToggle'
import { menuItems } from './data/menu'
import { useTheme } from './hooks/useTheme'
import { fetchRegisteredCustomer, saveRegisteredCustomer } from './services/userService'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [customer, setCustomer] = useState(() => fetchRegisteredCustomer())
  const [selectedDishIds, setSelectedDishIds] = useState([])

  const selectedItems = useMemo(
    () => menuItems.filter((item) => selectedDishIds.includes(item.id)),
    [selectedDishIds],
  )

  const handleRegistration = (mobileNumber) => {
    const registeredCustomer = saveRegisteredCustomer(mobileNumber)
    setCustomer(registeredCustomer)
  }

  const handleToggleDish = (dishId) => {
    setSelectedDishIds((currentIds) =>
      currentIds.includes(dishId)
        ? currentIds.filter((id) => id !== dishId)
        : [...currentIds, dishId],
    )
  }

  const handleOrderComplete = () => {
    setSelectedDishIds([])
  }

  return (
    <div className="app-shell" data-theme={theme}>
      {!customer && <RegistrationGate onRegister={handleRegistration} />}

      <Navbar customer={customer} />
      <main>
        <HeroSection customer={customer} />
        <AboutSection />
        <FoodSection
          selectedDishIds={selectedDishIds}
          menuItems={menuItems}
          onToggleDish={handleToggleDish}
        />
        <FeedbackSection customer={customer} />
        <ContactSection />
      </main>
      <Footer />

      <OrderTray
        customer={customer}
        selectedItems={selectedItems}
        onOrderComplete={handleOrderComplete}
      />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  )
}

export default App
