<template>
  <div>
    <NavBar />
    <slot />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~~/components/Footer.vue";

const config = useRuntimeConfig();
const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "alternate",
      title: "Captime",
      href: `${config.baseUrl}${route.fullPath}`,
    },
    {
      rel: "canonical",
      title: "Captime",
      href: `${config.baseUrl}${route.fullPath}`,
    },
  ],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "keywords",
      property: "keywordse",
      content: "crossfit, captime, cross-fit, sport, timer, mobile, app",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "apple-mobile-web-app-title",
      name: "apple-mobile-web-app-title",
      content: config.domain,
    },
    { hid: "theme-color", name: "theme-color", content: "#0000" },
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: config.domain,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `${config.baseUrl}${route.fullPath}`,
    },
    { hid: "og:locale", property: "og:locale", content: "fr_FR" },
  ],
}));
</script>

<style>
body {
  overscroll-behavior: none;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 1);
}

img:not([src]) {
  display: none;
}
</style>
