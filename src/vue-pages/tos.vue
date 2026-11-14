<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'purchases', label: 'Purchases' },
  { id: 'license', label: 'License' },
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
    lede="These terms are the agreement between you and Leduc IT OÜ for the Captime app and website."
  >
    <h2 id="agreement">Agreement</h2>
    <p>
      By using Captime you agree to these terms and the <a href="/privacy/">Privacy Policy</a>. The app license is the <a href="/eula/">End-User License Agreement</a>. If you
      downloaded the app from the Apple App Store,
      <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="external nofollow noopener" target="_blank">Apple's standard EULA</a> also applies between
      you and Apple.
    </p>
    <p>
      Leduc IT OÜ, registry code 14574207, is registered at Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia. You must be at least 13. Captime has no user
      account. Videos you record stay on your device and are not uploaded. We do not send marketing emails or marketing push notifications.
    </p>

    <h2 id="purchases">Purchases</h2>
    <p>The price is shown in the app before you pay. The plans are:</p>
    <ul>
      <li>Yearly, with a 7-day free trial when the store offers it.</li>
      <li>Monthly.</li>
      <li>Weekly, with a discounted first week when the store offers it.</li>
      <li>Lifetime, a one-time purchase that does not renew.</li>
    </ul>
    <p>
      Payment is charged to your Apple ID or Google Play account. A subscription renews unless you cancel at least 24 hours before the period ends. The store charges the renewal
      within those 24 hours, at the price shown for that plan. Manage or cancel in your Apple or Google subscription settings. Deleting the app does not cancel a subscription. If
      you start a paid plan before a free trial ends, any unused trial is forfeited where the store applies that rule.
    </p>
    <p>Payments are handled by Apple, Google, and RevenueCat. We do not receive your full card number.</p>
    <p>
      Refunds are handled by the store where you bought Captime. If the law gives you a refund the store does not handle, email
      <a href="mailto:victor@leduc.it">victor@leduc.it</a>. Except where the law requires a refund, fees already charged are not refundable.
    </p>

    <h2 id="license">License</h2>
    <p>
      We license Captime to you for personal use. The app is licensed, not sold. Do not copy, sell, or reverse engineer it, except where the law does not allow that limit. Captime
      and our content belong to Leduc IT OÜ. Workout names, including CrossFit, belong to their owners. If you send us ideas, we may use them without payment.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      Captime is a workout timer, not medical advice. You are responsible for how you train. The service is provided "as is" and "as available". To the maximum extent permitted by
      law, the total liability of Leduc IT OÜ is limited to the greater of the amount you paid for Captime in the 12 months before the claim and 100 USD. We are not liable for
      indirect or consequential damages where the law allows that limit. If you are a consumer in the European Union, you keep the mandatory rights of your country.
    </p>

    <h2 id="law">Law</h2>
    <p>
      The laws of Estonia govern these terms. Mandatory consumer laws of the country where you live can also apply. Contact us first if there is a dispute. You confirm that you are
      not in a country under a US embargo and that you are not on a US list of prohibited parties.
    </p>
    <p>
      We may update these terms and will change the Last updated date. For an important change we will try to give 30 days' notice in the app or on the website. If you keep using
      Captime, you agree. If you do not, stop using it and cancel any subscription in the store. If a term is invalid, the rest still applies. The English text controls.
    </p>
  </LegalDocument>
</template>
