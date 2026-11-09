import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'

function RoutePreview({ eyebrow, title, description }) {
  return (
    <section className="route-preview page-shell" aria-labelledby="preview-title">
      <ScrollReveal className="preview-copy">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1 id="preview-title">{title}</h1>
        <p className="preview-description">{description}</p>
        <Link className="button button-primary" to="/">
          Back to home <ArrowIcon />
        </Link>
      </ScrollReveal>
      <div className="preview-decoration" aria-hidden="true">
        <span>J</span>
      </div>
    </section>
  )
}

export default RoutePreview
