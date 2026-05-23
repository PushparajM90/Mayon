import { companyInfo } from '../data/company'

export function ContactSection() {
  return (
    <section className="section-grid contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Visit, call, or message Mayon</h2>
      </div>
      <div className="contact-grid">
        <article>
          <span>Address</span>
          <p>{companyInfo.address}</p>
        </article>
        <article>
          <span>Phone</span>
          <p>{companyInfo.phone}</p>
        </article>
        <article>
          <span>Email</span>
          <p>{companyInfo.email}</p>
        </article>
        <article>
          <span>Hours</span>
          <p>{companyInfo.hours}</p>
        </article>
      </div>
    </section>
  )
}
