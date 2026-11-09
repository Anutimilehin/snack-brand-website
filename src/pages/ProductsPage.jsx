import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ArrowIcon from '../components/ui/ArrowIcon.jsx'
import ScrollReveal from '../components/ui/ScrollReveal.jsx'
import ResponsiveImage from '../components/ui/ResponsiveImage.jsx'
import useParallax from '../hooks/useParallax.js'
import { products, productsHeroImage } from '../data/products.js'
import '../styles/products-page.css'
import pageMetadata from '../data/pageMetadata.js'
import usePageMetadata from '../hooks/usePageMetadata.js'
import { getPreferredScrollBehavior } from '../utils/scroll.js'

function ProductsPage() {
  usePageMetadata(pageMetadata.products)
  const location = useLocation()
  const initialProduct = products.find((product) => product.id === location.hash.slice(1))
  const [selectedProductId, setSelectedProductId] = useState(initialProduct?.id ?? products[0].id)
  const heroImageRef = useParallax(8)
  const selectedProduct = products.find((product) => product.id === selectedProductId)

  // Homepage gallery links can open the matching product and bring it into view.
  useEffect(() => {
    const requestedId = location.hash.slice(1)
    const requestedProduct = products.find((product) => product.id === requestedId)
    if (!requestedProduct) return undefined

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(requestedProduct.id)?.scrollIntoView({
        behavior: getPreferredScrollBehavior(),
        block: 'center',
      })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash])

  function selectProduct(productId) {
    setSelectedProductId(productId)
  }

  function updateProductCardTilt(event) {
    if (event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--product-tilt-x', `${(horizontal * 0.7).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--product-tilt-y', `${(vertical * -0.7).toFixed(2)}deg`)
  }

  function resetProductCardTilt(event) {
    event.currentTarget.style.setProperty('--product-tilt-x', '0deg')
    event.currentTarget.style.setProperty('--product-tilt-y', '0deg')
  }

  return (
    <div className="products-page">
      <section className="products-hero" aria-labelledby="products-hero-title">
        <div className="products-hero-inner page-shell">
          <div className="products-hero-copy">
            <ScrollReveal as="p" className="eyebrow" variant="soft"><span /> The Jidex Foods range</ScrollReveal>
            <ScrollReveal as="h1" id="products-hero-title" className="products-hero-title" variant="lines" delay={40}>
              <span>Good things</span><em>to snack on.</em>
            </ScrollReveal>
            <ScrollReveal as="p" className="products-hero-description" variant="left" delay={170}>
              Meet the familiar snacks in our range, made for little breaks, good company and everything in between.
            </ScrollReveal>
            <ScrollReveal className="products-hero-actions" variant="soft" delay={250}>
              <a className="button button-primary" href="#product-range">Meet the range <ArrowIcon /></a>
              <span className="products-hero-note">Five favourites. One growing range.</span>
            </ScrollReveal>
          </div>

          <div className="products-hero-visual" ref={heroImageRef}>
            <ScrollReveal as="figure" className="products-hero-photo" variant="image" delay={100}>
              <img src={productsHeroImage} alt="A bowl of ridged potato chips, photographed as illustrative snack imagery" width="1800" height="1200" fetchPriority="high" />
              <figcaption>Illustrative snack photography</figcaption>
            </ScrollReveal>
            <span className="products-hero-orbit" aria-hidden="true">GOOD FOOD<br />GOOD COMPANY</span>
            <span className="products-hero-index" aria-hidden="true">A TASTE OF JIDEX&nbsp; / &nbsp;01—05</span>
          </div>
        </div>
        <div className="products-hero-bottom page-shell" aria-hidden="true">
          <span>MADE FOR EVERYDAY MOMENTS</span><span className="products-hero-bottom-rule" /><span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="product-range" id="product-range" aria-labelledby="product-range-title">
        <div className="product-range-heading page-shell">
          <ScrollReveal className="product-range-intro">
            <p className="eyebrow"><span /> The snack collection</p>
            <h2 id="product-range-title">A little something<br /><em>for every moment.</em></h2>
          </ScrollReveal>
          <ScrollReveal className="product-range-note" delay={100}>
            <p>Five familiar snacks, each with its own character. Choose a product to learn a little more.</p>
            <span>01 — 05</span>
          </ScrollReveal>
        </div>

        <div className="product-list page-shell">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} className={`product-item-shell product-item-shell--${index + 1}`} variant={index % 2 === 0 ? 'left' : 'right'} delay={index * 55}>
              <article
                id={product.id}
                className={`product-row product-row--position-${index + 1} product-row--${product.tone} ${selectedProductId === product.id ? 'is-selected' : ''}`}
                onPointerMove={updateProductCardTilt}
                onPointerLeave={resetProductCardTilt}
              >
                <div className="product-row-number"><span>{product.number}</span><i /></div>
                <button
                  className="product-image-button"
                  type="button"
                  onClick={() => selectProduct(product.id)}
                  aria-label={`View details for ${product.name}`}
                  aria-pressed={selectedProductId === product.id}
                >
                  <ResponsiveImage image={product.image} sizes="(max-width: 700px) 82vw, (max-width: 1100px) 46vw, 40vw" alt={product.alt} loading="lazy" />
                  <span className="product-image-open" aria-hidden="true">↗</span>
                </button>
                <div className="product-row-copy">
                  <p className="product-row-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-row-description">{product.description}</p>
                  <button
                    className="product-details-button"
                    type="button"
                    onClick={() => selectProduct(product.id)}
                    aria-pressed={selectedProductId === product.id}
                  >
                    {selectedProductId === product.id ? 'Selected for details' : 'Explore this product'} <span aria-hidden="true">↗</span>
                  </button>
                </div>
                <span className="product-row-watermark" aria-hidden="true">{product.number}</span>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="product-detail-wrap page-shell">
          <ScrollReveal className="product-detail" aria-live="polite" aria-atomic="true">
            <div className="product-detail-label"><span className="product-detail-dot" /> SELECTED PRODUCT <span>{selectedProduct.number}</span></div>
            <div className="product-detail-content" key={selectedProduct.id}>
              <h3>{selectedProduct.name}</h3>
              <p>{selectedProduct.detail}</p>
            </div>
            <Link to="/contact" className="product-detail-link">Ask us about this product <ArrowIcon /></Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="products-cta" aria-labelledby="products-cta-title">
        <div className="products-cta-inner page-shell">
          <ScrollReveal className="products-cta-copy">
            <p className="products-cta-overline">HAVE A PRODUCT QUESTION?</p>
            <h2 id="products-cta-title">Let’s talk<br /><em>snacks.</em></h2>
          </ScrollReveal>
          <ScrollReveal className="products-cta-action" delay={100}>
            <p>Our team would be glad to hear from you.</p>
            <Link className="button button-light" to="/contact">Contact Jidex Foods <ArrowIcon /></Link>
            <Link className="products-cta-about" to="/about">A little more about us <span aria-hidden="true">↗</span></Link>
          </ScrollReveal>
          <span className="products-cta-watermark" aria-hidden="true">J</span>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
