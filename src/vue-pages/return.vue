<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'purchases', label: 'Purchases' },
  { id: 'refunds', label: 'Refunds' },
  { id: 'cancel', label: 'Cancellation' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Return and Refund Policy"
    current="return"
    contact-about="this Return and Refund Policy"
    :toc="toc"
    lede="Captime is a digital app from Leduc IT OÜ. We do not ship physical goods."
  >
    <h2 id="purchases">Purchases</h2>
    <p>
      A purchase is a subscription or lifetime access. Nothing is shipped. Do not mail anything to our address. Apple, Google, and RevenueCat handle payment. The price is shown
      before you pay. See the <a href="/tos/">Terms of Service</a>.
    </p>

    <h2 id="refunds">Refunds</h2>
    <p>
      Ask the store for a refund. We do not receive your full card number. If the law requires a refund the store does not handle, email
      <a href="mailto:victor@leduc.it">victor@leduc.it</a>. Fees already paid are not refundable except where the law says so.
    </p>

    <h2 id="cancel">Cancellation</h2>
    <p>Cancel in your Apple or Google subscription settings. Deleting the app does not cancel a subscription. Lifetime access does not renew.</p>
  </LegalDocument>
</template>
