import { Link } from 'react-router-dom'
import ArrowIcon from '../../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

function AboutCallToAction() {
  return (
    <section className="about-cta-section" aria-labelledby="about-cta-title">
      <div className="about-cta-inner page-shell">
        <ScrollReveal className="about-cta-copy">
          <p className="cta-overline">THE STORY CONTINUES</p>
          <h2 id="about-cta-title">Come see what we’re building.</h2>
        </ScrollReveal>
        <ScrollReveal className="about-cta-actions" delay={100}>
          <Link className="button button-light" to="/products">
            Explore our products <ArrowIcon />
          </Link>
          <Link className="about-cta-secondary" to="/contact">
            Contact Jidex Foods <span aria-hidden="true">↗</span>
          </Link>
        </ScrollReveal>
        <span className="about-cta-watermark" aria-hidden="true">J</span>
      </div>
    </section>
  )
}

export default AboutCallToAction
