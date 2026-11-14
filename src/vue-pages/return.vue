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
    lede="Captime is a digital app from Leduc IT OÜ. We do not ship physical goods, and there is nothing to return by mail."
  >
    <h2 id="purchases">Purchases</h2>
    <p>
      The app may offer free and paid features, one-time purchases, and auto-renewing subscriptions. The store shows the terms, the price, and the billing details before you pay.
      We may change offerings and prices at any time. See the <a href="/tos/">Terms of Service</a>.
    </p>

    <h2 id="refunds">Refunds</h2>
    <p>
      Refunds are handled under the app store's policies. Request a refund from the store where you bought the app. If the law gives you a right the store does not handle, email
      <a href="mailto:victor@leduc.it">victor@leduc.it</a>.
    </p>

    <h2 id="cancel">Cancellation</h2>
    <p>
      Cancel an auto-renewing purchase in the store. Deleting the app does not cancel it. You can keep using what you already paid for until that period ends, unless the store ends
      it sooner.
    </p>
  </LegalDocument>
</template>
