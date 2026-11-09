import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { getPreferredScrollBehavior, scrollToPosition } from '../../utils/scroll.js'

/** Keeps normal route navigation at the top and restores known positions on Back/Forward. */
function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const previousLocation = useRef(location)
  const scrollPositions = useRef(new Map())

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const previous = previousLocation.current

    if (previous.key !== location.key) {
      // Store the page we are leaving so browser Back/Forward can restore it.
      scrollPositions.current.set(previous.key, window.scrollY)

      if (navigationType === 'POP') {
        const savedPosition = scrollPositions.current.get(location.key)
        if (savedPosition !== undefined) scrollToPosition(savedPosition, 'auto')
        else if (!location.hash) scrollToPosition(0, 'auto')
      } else if (previous.pathname !== location.pathname && !location.hash) {
        // New internal pages scroll to the top; hash destinations keep anchor behavior.
        scrollToPosition(0, getPreferredScrollBehavior())
        if (navigationType !== 'POP') {
          window.requestAnimationFrame(() => {
            document.getElementById('main-content')?.focus({ preventScroll: true })
          })
        }
      }
    }

    previousLocation.current = location
  }, [location, navigationType])

  return null
}

export default ScrollManager
