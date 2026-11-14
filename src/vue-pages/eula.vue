<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'license', label: 'License' },
  { id: 'stores', label: 'App stores' },
  { id: 'purchases', label: 'Purchases' },
  { id: 'liability', label: 'Liability' },
  { id: 'law', label: 'Law' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="End-User License Agreement"
    current="eula"
    contact-about="this End-User License Agreement"
    :toc="toc"
    lede="This license is between you and Leduc IT OÜ for the Captime app. The app is licensed, not sold."
  >
    <h2 id="license">License</h2>
    <p>
      This agreement is between you and Leduc IT OÜ, Estonia, only. By downloading or using the app you agree to this license, the <a href="/tos/">Terms of Service</a>, and the
      <a href="/privacy/">Privacy Policy</a>. You must be at least 13.
    </p>
    <p>
      We grant you a personal, non-transferable license to use the app on devices you own or control, as the store allows. Do not copy, sell, or reverse engineer the app, except
      where the law does not allow that limit. The app remains our property. We may change, update, or stop the app at any time, where the law allows.
    </p>

    <h2 id="stores">App stores</h2>
    <p>
      If you download the app from the Apple App Store, you also agree to
      <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="external nofollow noopener" target="_blank">Apple's standard EULA</a>. Apple requires these
      points in this license:
    </p>
    <ul>
      <li>This license is with Leduc IT OÜ only, not with Apple. We are responsible for the app and its content.</li>
      <li>You may use the app on Apple devices you own or control, as Apple's usage rules allow. You may not transfer the license.</li>
      <li>Apple has no duty to maintain or support the app.</li>
      <li>If the app fails an applicable warranty, you may notify Apple, and Apple may refund the purchase price. Any other warranty claim is our responsibility.</li>
      <li>We, not Apple, are responsible for product claims, legal claims, and intellectual property claims about the app.</li>
      <li>You are not in a country under a US embargo, and you are not on a US list of prohibited parties.</li>
      <li>You must follow other terms that apply when you use the app.</li>
      <li>Apple and its subsidiaries may enforce this license against you.</li>
    </ul>
    <p>If you download the app from Google Play, Google's store terms also apply to that download. Google is not responsible for the app.</p>

    <h2 id="purchases">Purchases</h2>
    <p>
      The app may offer free and paid features, one-time purchases, and auto-renewing subscriptions. The store shows the terms, the price, and the billing details before you pay.
      We may change offerings and prices at any time. An auto-renewing purchase continues until you cancel it in the store. Deleting the app does not cancel it. Refunds follow the
      app store's policies.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      The app is a workout timer, not medical advice. Consult a doctor before you train, and use it at your own risk. The app is provided "as is" and "as available", with no
      warranty. To the maximum extent permitted by law, our total liability is limited to the amount you paid us for the app. We are not liable for indirect or consequential
      damages, as far as the law allows. The app store is not liable for the app. If you are a consumer in the European Union, you keep the mandatory rights of your country.
    </p>

    <h2 id="law">Law</h2>
    <p>
      The laws of Estonia govern this license. Mandatory consumer laws where you live may also apply. This license, the Terms, and the Privacy Policy are the whole agreement about
      the app. If a term is invalid, the rest still applies. The English text controls. We may update this license at any time and will change the Last updated date. If you do not
      agree, stop using the app and delete it.
    </p>
  </LegalDocument>
</template>
