'use client'

import { useEffect } from 'react'

/**
 * Listens for clicks on #open-cookie-settings links (e.g. in Datenschutz page)
 * and forwards them to the adhasi:open-cookie-settings event that CookieBanner handles.
 */
export default function CookieConsent() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('#open-cookie-settings')) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('adhasi:open-cookie-settings'))
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
