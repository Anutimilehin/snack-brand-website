import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import useParallax from '../../hooks/useParallax.js'
import { manufacturingImages, manufacturingPageContent } from '../../data/manufacturingPage.js'

function FacilitiesSection() {
  const facilityImagesRef = useParallax(6)
  const { facilities } = manufacturingPageContent

  return (
    <section className="facilities-section" aria-labelledby="facilities-title">
      <div className="facilities-heading page-shell">
        <ScrollReveal className="facilities-heading-copy">
          <p className="eyebrow"><span /> {facilities.eyebrow}</p>
          <h2 id="facilities-title">{facilities.title}</h2>
        </ScrollReveal>
        <ScrollReveal className="facilities-heading-note" delay={90}>
          <p>{facilities.introduction}</p>
          <span>VISUAL NOTES ON PRODUCTION</span>
        </ScrollReveal>
      </div>

      <div className="facility-photo-story page-shell" ref={facilityImagesRef}>
        <ScrollReveal as="figure" className="facility-photo facility-photo--line" variant="image">
          <img src={manufacturingImages.facilityLine} alt="Industrial processing equipment in a clean production environment" width="1400" height="933" loading="lazy" />
          <figcaption><span>01</span> Equipment and process</figcaption>
        </ScrollReveal>
        <ScrollReveal as="figure" className="facility-photo facility-photo--floor" variant="image" delay={140}>
          <img src={manufacturingImages.facilityFloor} alt="An industrial machine filling a plain bag as an example of packaging equipment" width="1400" height="933" loading="lazy" />
          <figcaption><span>02</span> Filling and packaging</figcaption>
        </ScrollReveal>
        <p className="facility-photo-note">These are illustrative photographs of industrial environments. They do not depict Jidex Foods premises or equipment.</p>
      </div>
    </section>
  )
}

export default FacilitiesSection
