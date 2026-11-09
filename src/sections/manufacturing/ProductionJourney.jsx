import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import { manufacturingImages, manufacturingPageContent } from '../../data/manufacturingPage.js'

function ProductionJourney() {
  const { journey } = manufacturingPageContent

  return (
    <section className="production-journey" id="production-journey" aria-labelledby="journey-title">
      <div className="journey-heading page-shell">
        <ScrollReveal className="journey-heading-main">
          <p className="eyebrow"><span /> {journey.eyebrow}</p>
          <h2 id="journey-title">{journey.title}</h2>
        </ScrollReveal>
        <ScrollReveal className="journey-heading-note" delay={100}>
          <p>{journey.introduction}</p>
          <span className="journey-note-tag">ILLUSTRATIVE OVERVIEW</span>
        </ScrollReveal>
      </div>

      <ScrollReveal className="journey-source page-shell" delay={70}>
        <ScrollReveal as="figure" className="journey-source-image" variant="image">
          <img src={manufacturingImages.sourcing} alt="Market crates holding a variety of fresh produce, illustrating raw material sourcing" width="1200" height="800" loading="lazy" />
          <figcaption>Illustrative sourcing image</figcaption>
        </ScrollReveal>
        <div className="journey-source-copy">
          <span>THE STARTING POINT</span>
          <p>Ingredients and materials set the direction for the steps that follow.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="ol" className="journey-list page-shell" variant="soft">
        {journey.stages.map((stage, index) => (
          <ScrollReveal as="li" key={stage.number} className={`journey-item journey-item--${index + 1}`} delay={index * 55}>
            <span className="journey-stage-number">{stage.number}</span>
            <div className="journey-stage-heading">
              <p>{stage.note}</p>
              <h3>{stage.title}</h3>
            </div>
            <p className="journey-stage-description">{stage.text}</p>
          </ScrollReveal>
        ))}
      </ScrollReveal>
      <p className="journey-footnote page-shell">Production methods and sequence can vary by product. The steps shown are not confirmation of Jidex Foods’ specific operations.</p>
    </section>
  )
}

export default ProductionJourney
