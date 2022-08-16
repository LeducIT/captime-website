<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import Footer from '~~/components/Footer.vue'
import { createMetaImage } from '~~/services/meta'

const config = useRuntimeConfig()
const route = useRoute()
const image = `${config.baseUrl}/app-demo.webp`
useHead(() => ({
  link: [
    {
      rel: 'alternate',
      title: 'Captime',
      href: `${config.baseUrl}${route.fullPath}`,
    },
    {
      rel: 'canonical',
      title: 'Captime',
      href: `${config.baseUrl}${route.fullPath}`,
    },
  ],
  meta: [
    {
      hid: 'og:url',
      property: 'og:url',
      content: `${config.baseUrl}${route.fullPath}`,
    },
    ...createMetaImage(image),
  ],
}))
</script>

<template>
  <div>
    <NavBar />
    <slot />

    <Footer />
  </div>
</template>

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
