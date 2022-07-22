import { defineNuxtConfig } from "nuxt";

const baseDomain = () => {
  if (process.env.NETLIFY && process.env.domain) {
    return process.env.domain;
  }
  return "captime.app";
};
const baseUrl = () => {
  if (process.env.NETLIFY) {
    return `https://${baseDomain()}`;
  }
  return "http://localhost:3000";
};
const name = "Captime - Crossfit WOD Timer";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // nitro: {
  //   preset: 'netlify-edge',
  //   rollupConfig: {
  //     output: {
  //       generatedCode: {
  //         symbols: true
  //       }
  //     }
  //   },
  // },
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
      title: name,
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
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: 'keywords',
          property: 'keywords',
          content: 'crossfit, AMRAP, TABATA, HIIT, EMOM, SALLY, WOD, TIMER, INTERVAL, FOR TIME, FIGHT GONE BAD, ROXANNE',
        },
        {
          hid: "title",
          name: "title",
          content: name,
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
          content: name,
        },
        { hid: 'theme-color', name: 'theme-color', content: '#ff2222' },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: baseDomain(),
        },
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
          hid: "twitter:app:id:iphone",
          property: "twitter:app:id:iphone",
          content: name,
        },
        {
          hid: "twitter:app:id:googleplay",
          property: "twitter:app:id:googleplay",
          content: "ee.forgr.captime",
        },
        {
          hid: "twitter:app:name:iphone",
          property: "twitter:app:name:iphone",
          content: name,
        },
        {
          hid: "twitter:app:name:googleplay",
          property: "twitter:app:name:googleplay",
          content: "ee.forgr.captime",
        },
        {
          hid: "twitter:creator",
          property: "twitter:creator",
          content: "@martindonadieu",
        }, 
        {
          hid: "og:description",
          property: "og:description",
          content:
            "The Captime app offers a variety of workout timers for common CrossFit and high-intensity interval training workouts.",
        },
      ],
      link: [
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
