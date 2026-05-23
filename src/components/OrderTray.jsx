import { useState } from 'react'
import { createOrder } from '../services/orderService'

export function OrderTray({ customer, selectedItems, onOrderComplete }) {
  const [status, setStatus] = useState('idle')
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0)

  const handlePlaceOrder = async () => {
    if (!customer || selectedItems.length === 0) {
      return
    }

    setStatus('loading')
    try {
      await createOrder({
        customerMobileNumber: customer.mobileNumber,
        dishIds: selectedItems.map((item) => item.id),
        total,
      })
      setStatus('success')
      onOrderComplete()
      window.setTimeout(() => setStatus('idle'), 2200)
    } catch {
      setStatus('error')
    }
  }

  if (selectedItems.length === 0) {
    return null
  }

  return (
    <aside className="order-tray" aria-live="polite">
      <div>
        <span>{selectedItems.length} selected</span>
        <strong>₹{total}</strong>
      </div>
      <button
        type="button"
        onClick={handlePlaceOrder}
        disabled={!customer || status === 'loading'}
      >
        {status === 'loading' ? 'Placing...' : 'Send order'}
      </button>
      {!customer && <p>Register mobile number to place order.</p>}
      {status === 'success' && <p>Order captured for WhatsApp and Sheets.</p>}
      {status === 'error' && <p>Order failed. Please try again.</p>}
    </aside>
  )
}
