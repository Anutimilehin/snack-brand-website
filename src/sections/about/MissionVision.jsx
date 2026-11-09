import { aboutPageContent } from '../../data/aboutPage.js'
import ScrollReveal from '../../components/ui/ScrollReveal.jsx'

function MissionVision() {
  const { mission, vision } = aboutPageContent

  return (
    <section className="mission-vision-section" aria-label="Our mission and vision">
      <div className="mission-vision-inner page-shell">
        <ScrollReveal className="purpose-intro">
          <p className="purpose-overline">WHAT GUIDES US</p>
          <h2>Purpose in every step.</h2>
        </ScrollReveal>

        <div className="purpose-statements">
          <ScrollReveal className="purpose-statement">
            <span className="purpose-number">01</span>
            <div>
              <p className="purpose-label">{mission.title}</p>
              <h3>{mission.text}</h3>
            </div>
            <span className="purpose-mark" aria-hidden="true">✳</span>
          </ScrollReveal>
          <ScrollReveal className="purpose-statement" delay={120}>
            <span className="purpose-number">02</span>
            <div>
              <p className="purpose-label">{vision.title}</p>
              <h3>{vision.text}</h3>
            </div>
            <span className="purpose-mark" aria-hidden="true">✳</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
