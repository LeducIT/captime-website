import { defineNuxtConfig } from 'nuxt'

const baseDomain = () => {
  if (process.env.NETLIFY && process.env.domain)
    return process.env.domain

  return 'captime.app'
}
const baseUrl = () => {
  if (process.env.NETLIFY)
    return `https://${baseDomain()}`

  return 'http://localhost:3000'
}
const name = 'Captime - Crossfit WOD Timer'
const description = 'All workout timers for CrossFit and high-intensity interval training. App with intuitive interface enables you to select HIIT, AMRAP, TABATA, EMOM, and more.'
// <script type="application/ld+json" class="yoast-schema-graph">
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${baseUrl()}/#website`,
      'url': baseUrl(),
      'name': name,
      'isPartOf': {
        '@id': `${baseUrl()}/#website`,
      },
      'datePublished': '2018-01-12T22:51:56+00:00',
      'dateModified': '2020-03-17T22:30:14+00:00',
      'description': description,
      'breadcrumb': {
        '@id': `${baseUrl()}/#breadcrumb`,
      },
      'inLanguage': 'en-US',
      'potentialAction': [
        {
          '@type': 'ReadAction',
          'target': [
            baseUrl(),
          ],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${baseUrl()}#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'WebPage',
            '@id': baseUrl(),
            'url': baseUrl(),
            'name': 'Home',
          },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'WebPage',
            '@id': `${baseUrl()}/blog`,
            'url': `${baseUrl()}/blog`,
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
  generate: {
    fallback: 'true',
  },
  ssr: true,
  target: 'static',
  publicRuntimeConfig: {
    domain: baseDomain(),
    baseUrl: baseUrl(),
    handler: 'captime',
  },
  runtimeConfig: {},
  buildModules: [],
  modules: [
    '@nuxt/content',
    ['nuxt-jsonld', { disableOptionsAPI: true }],
    '@unocss/nuxt',
  ],
  nitro: {
    preset: 'netlify-edge',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: name,
      script: [
        {
          'src': 'https://pls.digitalshift-ee.workers.dev',
          'data-domain': 'captime.app',
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
          hid: 'title',
          name: 'title',
          content: name,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: name,
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
          content: baseUrl(),
        },
        {
          hid: 'og:article:author',
          property: 'og:article:author',
          content: 'Martin DONADIEU',
        },
        {
          hid: 'twitter:app:id:iphone',
          property: 'twitter:app:id:iphone',
          content: name,
        },
        {
          hid: 'twitter:app:id:googleplay',
          property: 'twitter:app:id:googleplay',
          content: 'ee.forgr.captime',
        },
        {
          hid: 'twitter:app:name:iphone',
          property: 'twitter:app:name:iphone',
          content: name,
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
          content: description,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  build: {
    extractCSS: true,
    transpile: ['@headlessui/vue', '@heroicons/vue'],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '~/assets/css/global.css',
  ],
})
