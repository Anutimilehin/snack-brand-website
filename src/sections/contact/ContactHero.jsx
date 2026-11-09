import ArrowIcon from '../../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import useParallax from '../../hooks/useParallax.js'
import { contactDetails, contactPageContent } from '../../data/contactPage.js'

const heroImage = 'https://images.unsplash.com/photo-1784798455842-3a0be501172c?auto=format&fit=crop&w=1700&q=84'

function ContactHero() {
  const photoRef = useParallax(7)
  const { hero } = contactPageContent

  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="contact-hero-inner page-shell">
        <div className="contact-hero-copy">
          <ScrollReveal as="p" className="eyebrow" variant="soft"><span /> {hero.eyebrow}</ScrollReveal>
          <ScrollReveal as="h1" id="contact-hero-title" className="contact-hero-title" variant="lines" delay={40}>
            <span>{hero.title[0]}</span><em>{hero.title[1]}</em>
          </ScrollReveal>
          <ScrollReveal as="p" className="contact-hero-description" variant="left" delay={170}>{hero.description}</ScrollReveal>
          <ScrollReveal className="contact-hero-actions" variant="soft" delay={250}>
            <a className="button button-primary" href={contactDetails.phoneLink}>Call Jidex Foods <ArrowIcon /></a>
            <a className="contact-hero-secondary" href="#contact-options">Choose how to reach us <span aria-hidden="true">↓</span></a>
          </ScrollReveal>
          <ScrollReveal className="contact-hero-audience" variant="soft" delay={310}>
            <span>RETAIL</span><i /><span>TRADE</span><i /><span>PARTNERSHIPS</span>
          </ScrollReveal>
        </div>

        <div className="contact-hero-visual" ref={photoRef}>
          <ScrollReveal as="figure" className="contact-hero-photo" variant="image" delay={100}>
            <img src={heroImage} alt="Coffee, pastry and a notebook arranged on a table, suggesting a place to plan and talk" width="1700" height="1133" fetchPriority="high" />
            <figcaption>Good conversations start somewhere</figcaption>
            <span className="contact-hero-photo-number" aria-hidden="true">LET’S TALK / 01</span>
          </ScrollReveal>
        </div>
      </div>
      <span className="contact-hero-watermark" aria-hidden="true">J</span>
    </section>
  )
}

export default ContactHero
