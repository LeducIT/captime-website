<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'purchases', label: 'Purchases' },
  { id: 'liability', label: 'Liability' },
  { id: 'law', label: 'Law' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Terms of Service"
    current="tos"
    contact-about="these Terms of Service"
    :toc="toc"
    lede="These terms are the agreement between you and Leduc IT OÜ for Captime. Please read them before you use the app or the website."
  >
    <h2 id="agreement">Agreement</h2>
    <p>
      By using Captime you agree to these terms and the <a href="/privacy/">Privacy Policy</a>. The license for the app is the <a href="/eula/">End-User License Agreement</a>.
      Leduc IT OÜ, Estonia, provides the service. You must be at least 13.
    </p>
    <p>
      We may change, suspend, or stop the service, and we may change these terms, at any time. We will post updated terms on this page and change the Last updated date. Where the
      law requires notice before a change, we will give it. If you keep using Captime after a change, you accept it. If you do not agree, stop using the service.
    </p>

    <h2 id="purchases">Purchases</h2>
    <p>
      The app may offer free and paid features, one-time purchases, and auto-renewing subscriptions. The store shows the terms, the price, and the billing details before you pay.
      We may change offerings and prices at any time. Payment is handled by the app store.
    </p>
    <p>
      An auto-renewing purchase continues until you cancel it in the store. Deleting the app does not cancel it. Refunds follow the app store's policies. If the law gives you a
      right the store does not handle, email <a href="mailto:victor@leduc.it">victor@leduc.it</a>.
    </p>
    <p>
      We grant you a personal license to use the app. It is licensed, not sold. Do not copy, resell, or misuse it. Our name and content belong to us. Other names belong to their
      owners.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      Captime is a workout timer. It is not medical advice. Consult a doctor before you train, and use the app at your own risk. The service is provided "as is" and "as available",
      with no warranty of any kind.
    </p>
    <p>
      To the maximum extent permitted by law, our total liability is limited to the amount you paid us for the app. We are not liable for indirect, incidental, or consequential
      damages. These limits apply only as far as the law allows. If you are a consumer in the European Union, you keep the mandatory rights of your country.
    </p>

    <h2 id="law">Law</h2>
    <p>
      The laws of Estonia govern these terms and your use of the service. Mandatory consumer laws of the country where you live may also apply. If a term is invalid, the rest still
      applies. The English text controls.
    </p>
  </LegalDocument>
</template>
