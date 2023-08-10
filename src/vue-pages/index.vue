<script setup lang="ts">
import { onMounted } from 'vue'
import { crispLoader } from '../services/crisp'
import Hero from '../components/home/Hero.vue'
import Features from '../components/home/Features.vue'
import CallToAction from '../components/home/CallToAction.vue'
import Trust from '../components/home/Trust.vue'
import FAQ from '../components/home/FAQ.vue'
import Testimonials from '../components/home/Testimonials.vue'

onMounted(() => {
  window.addEventListener(
    'scroll',
    () => {
      crispLoader()
    },
    { capture: true, once: true, passive: true },
  )
})
</script>

<template>
  <div>
    <Hero />
    <Features />
    <CallToAction />
    <Testimonials />
    <Trust />
    <FAQ />
  </div>
</template>
