<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'advice', label: 'Advice' },
  { id: 'content', label: 'Content' },
  { id: 'liability', label: 'Liability' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Disclaimer"
    current="disclaimer"
    contact-about="this Disclaimer"
    :toc="toc"
    lede="Captime gives general information about a workout timer. This disclaimer is published by Leduc IT OÜ."
  >
    <h2 id="advice">Advice</h2>
    <p>
      Information in the app, on captime.app, and on the blog is general. It is not medical, legal, or coaching advice. You train at your own risk. Leduc IT OÜ is not responsible
      for how you train.
    </p>

    <h2 id="content">Content</h2>
    <p>
      Links may go to other sites, which we do not operate. We may make mistakes, and information can go out of date. Blog posts are the author's opinion. Workout names, including
      CrossFit, belong to their owners.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      Liability for the app and the website is limited as stated in the <a href="/tos/">Terms of Service</a>: the greater of the amount you paid for Captime in the 12 months before
      the claim and 100 USD. If you are a consumer in the European Union, you keep the mandatory rights of your country.
    </p>
  </LegalDocument>
</template>
