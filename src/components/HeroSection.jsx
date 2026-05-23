import { companyInfo } from '../data/company'

export function HeroSection({ customer }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1100&q=85"
          alt=""
        />
      </div>
      <div className="hero-content">
        <p className="eyebrow">Premium comfort food, cooked fresh</p>
        <h1>Mayon</h1>
        <p className="hero-copy">
          Chef-led bowls, grills, wraps, and desserts with fast ordering,
          thoughtful service, and flavors built for everyday cravings.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#menu">
            Order now
          </a>
          <a className="secondary-button" href="#about">
            Our story
          </a>
        </div>
        <dl className="hero-stats" aria-label="Mayon highlights">
          {companyInfo.highlights.map((highlight) => (
            <div key={highlight.label}>
              <dt>{highlight.value}</dt>
              <dd>{highlight.label}</dd>
            </div>
          ))}
        </dl>
        {customer && (
          <p className="returning-note">
            Welcome back. Orders will use {customer.mobileNumber}.
          </p>
        )}
      </div>
    </section>
  )
}
