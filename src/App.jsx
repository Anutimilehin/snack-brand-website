import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ManufacturingPage from './pages/ManufacturingPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import RoutePreview from './pages/RoutePreview.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="manufacturing" element={<ManufacturingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<RoutePreview eyebrow="Page not found" title="Let’s get you back on track." description="That address does not match one of the current Jidex Foods pages." />} />
      </Route>
    </Routes>
  )
}

export default App
