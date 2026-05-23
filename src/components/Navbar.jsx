export function Navbar({ customer }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Mayon home">
        <span className="brand-symbol">M</span>
        <span>Mayon</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#feedback">Feedback</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-action" href="#menu">
        {customer ? `Hi, ${customer.mobileNumber.slice(-4)}` : 'Start order'}
      </a>
    </header>
  )
}
