<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'advice', label: 'Not professional advice' },
  { id: 'training', label: 'Training is your responsibility' },
  { id: 'links', label: 'External links' },
  { id: 'errors', label: 'Errors and opinions' },
  { id: 'names', label: 'Workout names' },
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
    lede="This disclaimer explains the limits of the information in the Captime app, on captime.app, and on the blog. It is published by Leduc IT OÜ."
  >
    <h2 id="advice">Not professional advice</h2>
    <p>
      Captime and the pages on captime.app give general information about a workout timer and about training. That information is not medical advice, legal advice, or coaching. It
      is not a substitute for advice from a doctor, a lawyer, or a coach who knows you.
    </p>

    <h2 id="training">Training is your responsibility</h2>
    <p>
      You decide whether a workout is safe for you, and you train at your own risk. Stop if you feel pain, dizziness, or any other warning sign, and get medical help when you need
      it. Leduc IT OÜ is not responsible for how you train.
    </p>

    <h2 id="links">External links</h2>
    <p>The app and the website may link to other sites. Those sites are not operated by Leduc IT OÜ. Their content and policies are their own. A link is not an endorsement.</p>

    <h2 id="errors">Errors and opinions</h2>
    <p>
      We try to keep the app and the site accurate, and we may still make mistakes. Information can become out of date. Blog posts are the opinion of their author. They are not a
      promise about the app, and they are not a promise about a result you will get from training.
    </p>

    <h2 id="names">Workout names</h2>
    <p>
      Names of workouts, and the word CrossFit, belong to their owners. Using a name to describe a timer mode or a blog post does not transfer any trademark, and it does not mean
      the owner sponsors Captime.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      To the extent the law allows a limit, the liability of Leduc IT OÜ for the app and the website is the limit stated in the <a href="/tos/">Terms of Service</a>: the greater of
      the amount you paid for Captime in the 12 months before the claim, and 100 USD. If you are a consumer in the European Union, you keep the mandatory rights of the country
      where you live.
    </p>
    <p>Leduc IT OÜ, registry code 14574207, publishes Captime. The registered address is Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia.</p>
  </LegalDocument>
</template>
