<template>
  <div class="bg-mesh">
    <Hero />
    <Features />
    <CallToAction />
    <Testimonials />
  </div>
</template>

<script setup lang="ts">
import { createMeta } from "~/services/meta";
import Hero from "~/components/home/Hero.vue";
import Features from "~/components/home/Features.vue";
import CallToAction from "~/components/home/CallToAction.vue";
import Testimonials from "~/components/home/Testimonials.vue";
import { crispLoader } from "~~/services/crisp";

const image =
  "https://res.cloudinary.com/forgr/image/upload/v1621181948/captime/bot_cover-im_akq50z.jpg";
const title = "🚀 Le podcast des entrepreneurs indépendant";
const messages = [
  "J'échange avec ceux qui ont su transformer leurs idées en business florissant.",
  "Au-delà des belles histoires, je décrypte leur passé, leur stratégie, leurs challenges, afin de comprendre comment ils ont réussi à devenir profitables en indépendant.",
  "J’interroge différents types de Makers, des novices, des aguerris, toujours dans le but de comprendre comment ils se sont lancés et comment ils ont rendu leur projet profitable.",
  "Un épisode toute les semaines",
];

useHead(() => ({
  titleTemplate: "The Crossfit Timer",
  meta: createMeta(title, messages[0] + messages[3], image, "Martin Donadieu"),
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
