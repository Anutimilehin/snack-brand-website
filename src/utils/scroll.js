export function getPreferredScrollBehavior() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

/** Scroll to a vertical position; route history restoration stays immediate. */
export function scrollToPosition(top, behavior = getPreferredScrollBehavior()) {
  if (behavior === 'smooth') {
    window.scrollTo({ top, behavior })
    return
  }

  // Inline auto overrides the site's smooth CSS for instant history restoration.
  const root = document.documentElement
  const previousBehavior = root.style.scrollBehavior
  root.style.scrollBehavior = 'auto'
  window.scrollTo({ top, behavior: 'auto' })
  root.style.scrollBehavior = previousBehavior
}
