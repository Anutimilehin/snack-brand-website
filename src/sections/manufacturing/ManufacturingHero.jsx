import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import useParallax from '../../hooks/useParallax.js'
import { manufacturingImages, manufacturingPageContent } from '../../data/manufacturingPage.js'

function ManufacturingHero() {
  const photoRef = useParallax(8)
  const { hero } = manufacturingPageContent

  return (
    <section className="manufacturing-hero" aria-labelledby="manufacturing-hero-title">
      <div className="manufacturing-hero-media" ref={photoRef}>
        <img src={manufacturingImages.hero} alt="Industrial conveyor equipment in a factory, shown as illustrative manufacturing photography" width="1900" height="1267" fetchPriority="high" />
        <div className="manufacturing-hero-shade" />
        <p className="manufacturing-hero-caption">Illustrative industrial photography · not a Jidex Foods facility</p>
      </div>
      <div className="manufacturing-hero-inner page-shell">
        <div className="manufacturing-hero-copy">
          <ScrollReveal as="p" className="manufacturing-eyebrow" variant="soft"><span /> {hero.eyebrow}</ScrollReveal>
          <ScrollReveal as="h1" id="manufacturing-hero-title" className="manufacturing-hero-title" variant="lines" delay={40}>
            <span>{hero.title[0]}</span><em>{hero.title[1]}</em>
          </ScrollReveal>
          <ScrollReveal as="p" className="manufacturing-hero-description" variant="left" delay={170}>{hero.description}</ScrollReveal>
          <ScrollReveal as="a" className="manufacturing-hero-link" href="#production-journey" variant="soft" delay={250}>
            Follow the journey <span aria-hidden="true">↓</span>
          </ScrollReveal>
        </div>
        <span className="manufacturing-hero-mark" aria-hidden="true">J / F</span>
      </div>
      <div className="manufacturing-hero-index page-shell" aria-hidden="true">
        <span>FROM SOURCE</span><i /><span>TO SEALED PACK</span>
      </div>
    </section>
  )
}

export default ManufacturingHero
