import AboutHero from '../sections/about/AboutHero.jsx'
import OurStory from '../sections/about/OurStory.jsx'
import FounderSection from '../sections/about/FounderSection.jsx'
import MissionVision from '../sections/about/MissionVision.jsx'
import CommitmentSection from '../sections/about/CommitmentSection.jsx'
import AboutCallToAction from '../sections/about/AboutCallToAction.jsx'
import '../styles/about-page.css'
import pageMetadata from '../data/pageMetadata.js'
import usePageMetadata from '../hooks/usePageMetadata.js'

function AboutPage() {
  usePageMetadata(pageMetadata.about)

  return (
    <div className="about-page">
      <AboutHero />
      <OurStory />
      <FounderSection />
      <MissionVision />
      <CommitmentSection />
      <AboutCallToAction />
    </div>
  )
}

export default AboutPage
