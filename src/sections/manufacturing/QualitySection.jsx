import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import { manufacturingPageContent } from '../../data/manufacturingPage.js'

function QualitySection() {
  const { quality } = manufacturingPageContent

  return (
    <section className="quality-section" aria-labelledby="quality-title">
      <div className="quality-layout page-shell">
        <ScrollReveal className="quality-intro">
          <p className="eyebrow"><span /> {quality.eyebrow}</p>
          <h2 id="quality-title">{quality.title}</h2>
          <p className="quality-introduction">{quality.introduction}</p>
          <div className="verification-note">
            <span className="verification-note-mark" aria-hidden="true">i</span>
            <p>{quality.verificationNote}</p>
          </div>
        </ScrollReveal>

        <ol className="quality-values">
          {quality.values.map((value, index) => (
            <ScrollReveal as="li" key={value.number} className="quality-value" delay={index * 55}>
              <span className="quality-value-number">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default QualitySection
