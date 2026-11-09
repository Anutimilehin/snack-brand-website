import { ViewTransition } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import ScrollManager from './ScrollManager.jsx'

function SiteLayout() {
  const location = useLocation()

  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <ViewTransition enter="route-enter" exit="route-exit" update="route-update">
        <main id="main-content" key={location.pathname} className="route-stage" tabIndex={-1}>
          <Outlet />
        </main>
      </ViewTransition>
      <SiteFooter />
    </>
  )
}

export default SiteLayout
