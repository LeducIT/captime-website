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
        lang: "fr",
      },
      title:
        "Le 1er podcast francais qui aide les independants a vivre de leur business.",
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
          content:
            "Le 1er podcast francais qui aide les independants a vivre de leur business.",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Ici, tu trouveras des podcasts où j'échange avec ceux qui ont su transformer leurs idées en business florissant.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Le 1er podcast francais qui aide les independants a vivre de leur business.",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:locale", property: "og:locale", content: "fr_FR" },
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
            "Ici, tu trouveras des podcasts où j'échange avec ceux qui ont su transformer leurs idées en business florissant.",
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
