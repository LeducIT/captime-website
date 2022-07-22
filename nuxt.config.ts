import { defineNuxtConfig } from "nuxt";

const baseDomain = () => {
  if (process.env.VERCEL && process.env.domain) {
    return process.env.domain;
  }
  return "captime.app";
};
const baseUrl = () => {
  if (process.env.VERCEL) {
    return `https://${baseDomain()}`;
  }
  return "http://localhost:3000";
};
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify-edge',
    rollupConfig: {
      output: {
        generatedCode: {
          symbols: true
        }
      }
    },
  },
  generate: {
    fallback: "true",
  },
  ssr: true,
  target: "static",
  publicRuntimeConfig: {
    domain: baseDomain(),
    baseUrl: baseUrl(),
    handler: "captime",
  },
  runtimeConfig: {},
  buildModules: ["nuxt-windicss"],
  modules: ["@nuxt/content"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Captime - Crossfit Timer",
      script: [
        {
          src: "https://captime-pls.digitalshift-ee.workers.dev/js/script.js",
          "data-domain": "captime.app",
          async: true,
          defer: true,
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "title",
          name: "title",
          content: "Captime - Crossfit Timer",
        },
        {
          hid: "description",
          name: "description",
          content:
            "The Captime app offers a variety of workout timers for common CrossFit and high-intensity interval training workouts.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Captime - Crossfit Timer",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:locale", property: "og:locale", content: "en_EN" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: baseUrl(),
        },
        {
          hid: "og:article:author",
          property: "og:article:author",
          content: "Martin DONADIEU",
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "The Captime app offers a variety of workout timers for common CrossFit and high-intensity interval training workouts.",
        },
      ],
      link: [
        {
          rel: "alternate",
          title: "RSS captime",
          type: "application/rss+xml",
          href: `${baseUrl()}/rss.xml`,
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  build: {
    extractCSS: true,
    transpile: ["@headlessui/vue"],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/windi.css"],
});
