import HeroSection from '../sections/HeroSection.jsx'
import pageMetadata from '../data/pageMetadata.js'
import usePageMetadata from '../hooks/usePageMetadata.js'

function HomePage() {
  usePageMetadata(pageMetadata.home)
  return <HeroSection />
}

export default HomePage
