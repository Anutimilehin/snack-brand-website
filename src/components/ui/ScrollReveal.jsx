import { useLayoutEffect, useRef } from 'react'

let revealObserver

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
  }

  return revealObserver
}

// One observer serves every reveal. Content stays visible unless animation setup succeeds.
function ScrollReveal({
  as: Element = 'div',
  children,
  className = '',
  delay = 0,
  variant = 'up',
  style,
  ...elementProps
}) {
  const elementRef = useRef(null)

  useLayoutEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return undefined
    }

    try {
      const observer = getRevealObserver()
      element.classList.add('is-pending')
      observer.observe(element)
      return () => observer.unobserve(element)
    } catch {
      element.classList.remove('is-pending')
      element.classList.add('is-visible')
      return undefined
    }
  }, [])

  return (
    <Element
      {...elementProps}
      ref={elementRef}
      data-reveal={variant}
      className={`scroll-reveal scroll-reveal--${variant} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  )
}

export default ScrollReveal
