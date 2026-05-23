import { companyInfo } from '../data/company'

export function AboutSection() {
  return (
    <section className="section-grid about-section" id="about">
      <div>
        <p className="eyebrow">About Mayon</p>
        <h2>{companyInfo.tagline}</h2>
      </div>
      <div className="story-panel">
        <p>{companyInfo.introduction}</p>
        <p>{companyInfo.story}</p>
        <div className="business-strip">
          {companyInfo.business.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
