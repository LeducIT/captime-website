<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'data', label: 'Data' },
  { id: 'rights', label: 'Your rights' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    current="privacy"
    contact-about="this Privacy Policy"
    :toc="toc"
    lede="This policy describes, in general terms, how Leduc IT OÜ handles personal data when you use Captime."
  >
    <h2 id="who-we-are">Who we are</h2>
    <p>
      Leduc IT OÜ, established in Estonia, is the controller of the personal data described here. Email <a href="mailto:victor@leduc.it">victor@leduc.it</a>. You must be at least
      13. We do not knowingly collect personal data from children under 13. If you are a parent and believe a child under 13 has provided personal data, email us and we will delete
      it.
    </p>

    <h2 id="data">Data</h2>
    <p>
      We may process account or contact information if you provide it, purchase status, device and usage data, and messages you send to support. Website usage is measured without
      cookies and without identifying you. We use this data to provide and improve the service, to support you, for security, and for legal compliance. We rely on contract, legitimate
      interests, legal duty, and your request when you contact us.
    </p>
    <p>
      We keep personal data only for as long as we need it for these purposes, or longer where the law requires us to keep it. We use trusted service providers, and payment
      processors such as the app stores, acting on our behalf. Some of them may process data outside the European Economic Area, with safeguards where the law requires them. We do
      not sell personal data, and we do not send marketing emails or marketing push notifications.
    </p>
    <p>
      The Captime app may record anonymous usage sessions (screens and taps, via PostHog EU) to improve the app. No account, typed text, or camera footage is recorded. The camera
      feed in video mode is never sent anywhere and stays on the device.
    </p>

    <h2 id="rights">Your rights</h2>
    <p>
      You may ask to access, correct, delete, restrict, or receive a copy of your personal data, and you may object to processing based on legitimate interests. You may complain to
      a data protection supervisory authority. Email <a href="mailto:victor@leduc.it">victor@leduc.it</a>.
    </p>
    <p>We may update this policy at any time. We will change the Last updated date. Where the law requires notice, we will give it.</p>
  </LegalDocument>
</template>
