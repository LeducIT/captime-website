import { defineNuxtConfig } from 'nuxt/config'
import { pwa } from './config/pwa'
import { appDescription, appName } from './constants/index'
import keys from './configs.json'

function getRightKey(branch: string, keyname: 'base_domain'): string {
  if (branch === 'development')
    return keys[keyname].development
  else if (branch === 'local')
    return keys[keyname].local
  return keys[keyname].prod
}

function getUrl(branch = ''): string {
  if (branch === 'local')
    return `http://${getRightKey(branch, 'base_domain')}`
  else if (branch === 'development')
    return `https://${getRightKey(branch, 'base_domain')}`
  else
    return `https://${getRightKey('prod', 'base_domain')}`
}

function baseDomain(branch = '') {
  if (branch)
    return getRightKey(branch, 'base_domain')
  else
    return getRightKey('prod', 'base_domain')
}

// <script type="application/ld+json" class="yoast-schema-graph">
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${getUrl(process.env.BRANCH)}/#website`,
      'url': getUrl(process.env.BRANCH),
      'name': appName,
      'isPartOf': {
        '@id': `${getUrl(process.env.BRANCH)}/#website`,
      },
      'datePublished': '2022-01-30T22:51:56+00:00',
      'dateModified': new Date().toISOString(),
      'description': appDescription,
      'breadcrumb': {
        '@id': `${getUrl(process.env.BRANCH)}/#breadcrumb`,
      },
      'inLanguage': 'en-US',
      'potentialAction': [
        {
          '@type': 'ReadAction',
          'target': [
            getUrl(process.env.BRANCH),
          ],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${getUrl(process.env.BRANCH)}#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'WebPage',
            '@id': getUrl(process.env.BRANCH),
            'url': getUrl(process.env.BRANCH),
            'name': 'Home',
          },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'WebPage',
            '@id': `${getUrl(process.env.BRANCH)}/blog`,
            'url': `${getUrl(process.env.BRANCH)}/blog`,
            'name': 'Blog',
          },
        },
      ],
    },
  ],
}
// </script>
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      baseUrl: getUrl(process.env.BRANCH),
      domain: baseDomain(),
      handler: 'captime',
    },
  },
  modules: [
    '@nuxt/content',
    ['nuxt-jsonld', { disableOptionsAPI: true }],
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/devtools',
  ],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    preset: 'netlify-edge',
    prerender: {
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      title: appName,
      script: [
        {
          'src': 'https://pls.digitalshift-ee.workers.dev/js/script.js',
          'data-api': 'https://pls.digitalshift-ee.workers.dev/api/event',
          'data-domain': 'captime-web.app',
          'async': true,
          'defer': true,
        },
        {
          hid: 'seo-schema-graph',
          type: 'application/ld+json',
          children: JSON.stringify(structuredData),
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'keywords',
          property: 'keywords',
          content: 'crossfit, AMRAP, TABATA, HIIT, EMOM, SALLY, WOD, TIMER, INTERVAL, FOR TIME, FIGHT GONE BAD, ROXANNE',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: appName,
        },
        { hid: 'theme-color', name: 'theme-color', content: '#ff2222' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: baseDomain(),
        },
        { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: baseDomain(),
        },
        {
          hid: 'og:article:author',
          property: 'og:article:author',
          content: 'Martin DONADIEU',
        },
        {
          hid: 'twitter:app:id:iphone',
          property: 'twitter:app:id:iphone',
          content: appName,
        },
        {
          hid: 'twitter:app:id:googleplay',
          property: 'twitter:app:id:googleplay',
          content: 'ee.forgr.captime',
        },
        {
          hid: 'twitter:app:name:iphone',
          property: 'twitter:app:name:iphone',
          content: appName,
        },
        {
          hid: 'twitter:app:name:googleplay',
          property: 'twitter:app:name:googleplay',
          content: 'ee.forgr.captime',
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@martindonadieu',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: appDescription,
        },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '~/assets/css/global.css',
    '@unocss/reset/tailwind.css',
  ],
  pwa,
})
