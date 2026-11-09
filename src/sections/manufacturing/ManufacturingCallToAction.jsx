import { Link } from 'react-router-dom'
import ArrowIcon from '../../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

function ManufacturingCallToAction() {
  return (
    <section className="manufacturing-cta" aria-labelledby="manufacturing-cta-title">
      <div className="manufacturing-cta-inner page-shell">
        <ScrollReveal className="manufacturing-cta-copy">
          <p>THE JIDEX FOODS STORY</p>
          <h2 id="manufacturing-cta-title">See what’s<br /><em>on the table.</em></h2>
        </ScrollReveal>
        <ScrollReveal className="manufacturing-cta-actions" delay={100}>
          <Link className="button button-light" to="/products">Explore our products <ArrowIcon /></Link>
          <Link className="manufacturing-cta-contact" to="/contact">Contact Jidex Foods <span aria-hidden="true">↗</span></Link>
        </ScrollReveal>
        <span className="manufacturing-cta-watermark" aria-hidden="true">J</span>
      </div>
    </section>
  )
}

export default ManufacturingCallToAction
