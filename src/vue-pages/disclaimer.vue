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
    lede="Captime is a workout timer published by Leduc IT OÜ. The information in the app and on this website is general."
  >
    <h2 id="advice">Advice</h2>
    <p>
      Nothing in the app, on the website, or on the blog is medical, legal, or coaching advice. Consult a doctor before you train. You use Captime at your own risk. Leduc IT OÜ is
      not responsible for how you train.
    </p>

    <h2 id="content">Content</h2>
    <p>
      We may change or remove content at any time. Information may be incomplete or out of date. Opinions on the blog are the author's. Links may lead to other sites, which we do
      not control. Names used to describe workouts belong to their owners.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      To the maximum extent permitted by law, liability for the app and the website is limited as stated in the <a href="/tos/">Terms of Service</a>. If you are a consumer in the
      European Union, you keep the mandatory rights of your country.
    </p>
  </LegalDocument>
</template>
