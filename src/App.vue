<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Captime | Crossfit timer',
  meta: [
    { name: 'description', content: 'The best crossfit timer you can find' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: 'Captime | Crossfit timer' },
    { name: 'twitter:title', content: 'Captime | Crossfit timer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:domain', content: 'captime.app' },
    { name: 'twitter:image', content: 'https://captime.app/alternative_to_1.png' },
    { name: 'og:image', content: 'https://captime.app/alternative_to_1.png' },
    { name: 'og:alt', content: 'crossfit image' },
  ],
})
</script>

<template>
  <router-view />
</template>
