import ManufacturingHero from '../sections/manufacturing/ManufacturingHero.jsx'
import ProductionJourney from '../sections/manufacturing/ProductionJourney.jsx'
import FacilitiesSection from '../sections/manufacturing/FacilitiesSection.jsx'
import QualitySection from '../sections/manufacturing/QualitySection.jsx'
import ManufacturingCallToAction from '../sections/manufacturing/ManufacturingCallToAction.jsx'
import '../styles/manufacturing-page.css'
import pageMetadata from '../data/pageMetadata.js'
import usePageMetadata from '../hooks/usePageMetadata.js'

function ManufacturingPage() {
  usePageMetadata(pageMetadata.manufacturing)

  return (
    <div className="manufacturing-page">
      <ManufacturingHero />
      <ProductionJourney />
      <FacilitiesSection />
      <QualitySection />
      <ManufacturingCallToAction />
    </div>
  )
}

export default ManufacturingPage
