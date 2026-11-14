<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'purchases', label: 'Digital purchases' },
  { id: 'refunds', label: 'Refunds' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Return and Refund Policy"
    current="return"
    contact-about="this Return and Refund Policy"
    :toc="toc"
    lede="Captime is a digital app published by Leduc IT OÜ. We do not sell or ship physical goods. This policy explains refunds and how to cancel a subscription."
  >
    <h2 id="purchases">Digital purchases</h2>
    <p>
      A purchase is digital access to Captime: a subscription or lifetime access. Nothing is shipped. Do not mail goods, devices, or packages to the registered address. We cannot
      accept a physical return.
    </p>
    <p>
      Payments and subscriptions are processed only by the Apple App Store, Google Play, and RevenueCat. The price is shown in the app before you confirm. The purchase terms are in
      the <a href="/tos/">Terms of Service</a>.
    </p>

    <h2 id="refunds">Refunds</h2>
    <p>
      Refunds of App Store and Google Play purchases are handled by Apple or Google under their refund rules. Request a refund from the store where you bought Captime. We do not
      receive your full payment card number, and we cannot refund a store charge from this website.
    </p>
    <p>
      If the law gives you a refund right that the store does not handle, email <a href="mailto:victor@leduc.it">victor@leduc.it</a>. Tell us the store, the approximate date, and
      the product.
    </p>
    <p>Except where the law requires a refund, fees already charged are not refundable, and canceling a subscription does not refund the current period.</p>

    <h2 id="subscriptions">Subscriptions</h2>
    <p>
      Cancel a subscription in your Apple ID subscription settings or in Google Play's subscription settings. Canceling stops the next renewal. You can keep using the paid features
      until the end of the period you already paid for, unless the store ends that access sooner as part of a refund.
    </p>
    <p>Deleting the app does not cancel a subscription. Lifetime access is a one-time purchase. It does not renew, and there is nothing to send back.</p>
    <p>
      Leduc IT OÜ, registry code 14574207, publishes Captime. The registered address is Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia. That address is
      for the company register. It is not a returns desk.
    </p>
  </LegalDocument>
</template>
