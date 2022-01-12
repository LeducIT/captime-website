<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { usePages } from '../../composables';

usePages().then((pages) => {
  console.log('pages', pages);
})
</script>
<template>
  <Header/>
  <Content /><!-- this is where markdown content will be rendered -->
  <Footer/>
</template>
