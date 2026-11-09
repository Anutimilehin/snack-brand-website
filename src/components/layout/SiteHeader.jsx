import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../data/navigation.js'
import ArrowIcon from '../ui/ArrowIcon.jsx'

function SiteHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const menuToggleRef = useRef(null)

  useEffect(() => {
    function closeOnHistoryNavigation() {
      setMenuIsOpen(false)
    }

    window.addEventListener('popstate', closeOnHistoryNavigation)
    return () => window.removeEventListener('popstate', closeOnHistoryNavigation)
  }, [])

  useEffect(() => {
    if (!menuIsOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuIsOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuIsOpen])

  function closeMenu(event) {
    setMenuIsOpen(false)
    if (event.currentTarget.closest('#primary-navigation') && window.matchMedia('(max-width: 860px)').matches) {
      menuToggleRef.current?.focus()
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <NavLink className="brand" to="/" aria-label="Jidex Foods home" onClick={closeMenu}>
          <span className="brand-name">JIDEX</span>
          <span className="brand-caption">FOODS NIGERIA LIMITED</span>
        </NavLink>

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuIsOpen}
          aria-controls="primary-navigation"
          aria-label={menuIsOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuIsOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuIsOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => [
                'navigation-link',
                isActive ? 'is-active' : '',
                item.variant === 'cta' ? 'nav-cta' : '',
              ].filter(Boolean).join(' ')}
              onClick={closeMenu}
            >
              {item.label}
              {item.variant === 'cta' && <ArrowIcon />}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
