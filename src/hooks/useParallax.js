import { useEffect, useRef } from 'react'

// All parallax targets share one passive scroll listener and one animation frame.
const targets = new Map()
let frameId = null

function updateTargets() {
  frameId = null
  const viewportHeight = window.innerHeight
  const measurements = []

  targets.forEach((maxOffset, element) => {
    if (!element.isConnected) {
      targets.delete(element)
      return
    }

    const bounds = element.getBoundingClientRect()
    if (bounds.bottom < -100 || bounds.top > viewportHeight + 100) {
      measurements.push([element, 0])
      return
    }

    const centerDistance = bounds.top + bounds.height / 2 - viewportHeight / 2
    const offset = Math.max(-maxOffset, Math.min(maxOffset, centerDistance * -0.018))
    measurements.push([element, offset])
  })

  measurements.forEach(([element, offset]) => {
    element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
  })
}

function scheduleUpdate() {
  if (frameId === null) frameId = window.requestAnimationFrame(updateTargets)
}

function addParallaxTarget(element, maxOffset) {
  targets.set(element, maxOffset)

  if (targets.size === 1) {
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
  }

  scheduleUpdate()

  return () => {
    targets.delete(element)
    if (targets.size > 0) return

    window.removeEventListener('scroll', scheduleUpdate)
    window.removeEventListener('resize', scheduleUpdate)
    if (frameId !== null) window.cancelAnimationFrame(frameId)
    frameId = null
  }
}

function useParallax(maxOffset = 10) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const smallOrTouch = window.matchMedia('(max-width: 700px), (pointer: coarse)')
    let removeTarget

    function syncParallax() {
      const shouldMove = !reducedMotion.matches && !smallOrTouch.matches
      if (shouldMove && !removeTarget) {
        element.style.willChange = 'transform'
        removeTarget = addParallaxTarget(element, maxOffset)
      }
      if (!shouldMove && removeTarget) {
        removeTarget()
        removeTarget = undefined
        element.style.setProperty('--parallax-y', '0px')
      }
      if (!shouldMove) element.style.willChange = 'auto'
    }

    syncParallax()
    reducedMotion.addEventListener('change', syncParallax)
    smallOrTouch.addEventListener('change', syncParallax)

    return () => {
      reducedMotion.removeEventListener('change', syncParallax)
      smallOrTouch.removeEventListener('change', syncParallax)
      removeTarget?.()
      element.style.removeProperty('--parallax-y')
      element.style.removeProperty('will-change')
    }
  }, [maxOffset])

  return elementRef
}

export default useParallax
