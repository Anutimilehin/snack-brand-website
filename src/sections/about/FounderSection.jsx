import { aboutPageContent } from '../../data/aboutPage.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'
import ResponsiveImage from '../../components/ui/ResponsiveImage.jsx'
import { imageSources } from '../../data/imageSources.js'

function FounderSection() {
  const { founder } = aboutPageContent

  return (
    <section className="founder-section" id="founder" aria-labelledby="founder-title">
      <div className="founder-inner page-shell">
        <div className="founder-copy">
          <ScrollReveal as="p" className="section-eyebrow">{founder.eyebrow}</ScrollReveal>
          <ScrollReveal as="h2" id="founder-title" className="section-title" variant="left" delay={70}>
            The person behind the purpose.
          </ScrollReveal>
          <ScrollReveal as="p" className="founder-name" delay={120}>
            {founder.name}
          </ScrollReveal>
          <ScrollReveal as="p" className="founder-known-as" delay={160}>
            Founder · known as {founder.knownAs}
          </ScrollReveal>
          {founder.paragraphs.map((paragraph, index) => (
            <ScrollReveal
              key={paragraph}
              as="p"
              className="section-paragraph founder-paragraph"
              delay={200 + index * 70}
            >
              {paragraph}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="founder-photo-placeholder" variant="depth" delay={150}>
          <ResponsiveImage
            className="founder-photo"
            image={imageSources.jidex}
            sizes="(max-width: 700px) min(100vw, 480px), 42vw"
            alt="Olajide Abubakar Rasak, founder of Jidex Foods Nigeria Limited"
            loading="lazy"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FounderSection
