<template>
  <div class="bg-mesh">
    <Hero />
    <Features />
    <CallToAction />
    <!-- <CrossfitModes /> -->
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
import { createMeta } from "~/services/meta";
import Hero from "~/components/home/Hero.vue";
import Features from "~/components/home/Features.vue";
import CallToAction from "~/components/home/CallToAction.vue";
// import CrossfitModes from "~~/components/home/CrossfitModes.vue";
import Testimonials from "~/components/home/Testimonials.vue";
import { crispLoader } from "~~/services/crisp";

const image = "/icon.webp";
const title = "Captime | CrossFit Timer";
const messages = [
  "The Captime app offers a variety of workout timers for common CrossFit and high-intensity interval training workouts.",
  "A user-friendly interface enables you to select advanced timers within seconds.",
  "Captime includes a built-in timer for HIIT, AMRAP, TABATA, EMOM, and more.",
];

useHead(() => ({
  titleTemplate: "The Crossfit Timer",
  meta: createMeta(title, messages[0], image, "Martin Donadieu"),
}));

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      crispLoader();
    },
    { capture: true, once: true, passive: true }
  );
});
</script>
