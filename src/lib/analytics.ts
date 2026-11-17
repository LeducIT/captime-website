import posthog from 'posthog-js'
import { posthogApiHost, posthogKey, posthogUiHost } from '../config/posthog'
import { storeClickFromHref } from './store-click'

let started = false

export function initAnalytics(): void {
  if (started || typeof window === 'undefined')
    return
  started = true

  const browser = window as Window & { posthog?: typeof posthog }
  browser.posthog = posthog

  posthog.init(posthogKey, {
    api_host: posthogApiHost,
    ui_host: posthogUiHost,
    cookieless_mode: 'always',
    person_profiles: 'identified_only',
    autocapture: true,
    // Full page loads. This site does not use Astro view transitions.
    capture_pageview: true,
    capture_dead_clicks: true,
    capture_heatmaps: true,
    capture_performance: true,
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true,
    },
    // Surveys would inject UI. Leave them off.
    disable_surveys: true,
  })

  document.addEventListener('click', onStoreClick, true)
}

function onStoreClick(event: MouseEvent): void {
  const target = event.target
  if (!(target instanceof Element))
    return
  const anchor = target.closest('a')
  if (!(anchor instanceof HTMLAnchorElement))
    return
  const href = anchor.getAttribute('href')
  if (!href)
    return

  const props = storeClickFromHref(href, window.location.pathname, {
    placement: anchor.dataset.placement,
    platform: anchor.dataset.platform,
    ct: anchor.dataset.ct,
    userAgent: navigator.userAgent,
  })
  if (!props)
    return

  posthog.capture('store_click', props, { send_instantly: true })
}
