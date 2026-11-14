import { appDescription, appName } from '../constants/index'

const scope = '/'

export const pwa = {
  scope,
  base: scope,
  registerType: 'autoUpdate',
  manifest: {
    scope,
    id: scope,
    name: appName,
    short_name: appName,
    description: appDescription,
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globDirectory: 'dist',
    navigateFallback: null,
    globPatterns: [
      '**/*.{js,css}',
      'manifest.webmanifest',
      'favicon.ico',
      'favicon.svg',
      'safari-pinned-tab.svg',
      'icon.webp',
      'fonts/*.woff2',
    ],
    globIgnores: ['**/*.map', '**/_headers', '**/app.*.js'],
    cleanupOutdatedCaches: true,
    navigateFallbackDenylist: [/^\/api\//],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|gif|webp|avif|svg)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'images-runtime',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /\.(?:woff2|woff|ttf)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'fonts-runtime',
          expiration: {
            maxEntries: 8,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts.googleapis.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts.gstatic.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  writePlugin: true,
  registerWebManifestInRouteRules: true,
  devOptions: {
    enabled: import.meta.env.VITE_PLUGIN_PWA === 'true',
    navigateFallback: scope,
  },
}
