<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'license', label: 'License' },
  { id: 'apple', label: 'Apple' },
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
      This agreement is between you and Leduc IT OÜ only. Leduc IT OÜ, registry code 14574207, is registered at Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551,
      Estonia. By downloading or using Captime you agree to this license, the <a href="/tos/">Terms of Service</a>, and the <a href="/privacy/">Privacy Policy</a>.
    </p>
    <p>You must be at least 13. The app has no user account. Videos you record stay on your device and are not uploaded.</p>
    <p>
      We grant you a personal, non-transferable license to use Captime on devices you own or control, as the store allows. Do not sell, copy, or reverse engineer the app, except
      where the law does not allow that limit. The app remains the property of Leduc IT OÜ. Suggestions you send us may be used without payment.
    </p>

    <h2 id="apple">Apple</h2>
    <p>
      If you download Captime from the Apple App Store, you also agree to
      <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="external nofollow noopener" target="_blank">Apple's standard EULA</a>. Apple requires these
      terms in this license:
    </p>
    <ul>
      <li>This license is with Leduc IT OÜ only, not with Apple. We are responsible for the app and its content.</li>
      <li>The license cannot be transferred. You may use the app on Apple devices you own or control, as Apple's usage rules allow.</li>
      <li>Apple has no duty to maintain or support the app.</li>
      <li>If the app fails an applicable warranty, you may notify Apple, and Apple may refund the purchase price. Any other warranty claim is our responsibility.</li>
      <li>We, not Apple, are responsible for product claims, legal claims, and intellectual property claims about the app.</li>
      <li>You are not in a country under a US embargo, and you are not on a US list of prohibited parties.</li>
      <li>You must follow other terms that apply to your use, such as your wireless data agreement.</li>
      <li>Apple and its subsidiaries may enforce this license against you.</li>
    </ul>
    <p>If you download Captime from Google Play, Google's terms apply to that download. Google is not responsible for the app.</p>

    <h2 id="purchases">Purchases</h2>
    <p>
      The app may offer a yearly plan with a 7-day free trial, a monthly plan, a weekly plan with a discounted first week, and lifetime access. The price is shown before you
      confirm. Full terms are in the <a href="/tos/">Terms of Service</a>.
    </p>
    <ul>
      <li>Payment is charged to your Apple ID or Google Play account when you confirm.</li>
      <li>A subscription renews unless you turn off auto-renew at least 24 hours before the period ends.</li>
      <li>The store charges the renewal within 24 hours before the period ends.</li>
      <li>Manage or cancel in your Apple or Google subscription settings. Deleting the app does not cancel it.</li>
      <li>If a paid plan starts before a free trial ends, any unused trial is forfeited where the store applies that rule.</li>
      <li>Lifetime access is charged once and does not renew.</li>
    </ul>
    <p>
      Payments are handled by Apple, Google, and RevenueCat. For help, email <a href="mailto:victor@leduc.it">victor@leduc.it</a> or use the Crisp support chat in the app. We may
      update or stop the app where the law allows. Ending this license does not cancel a store subscription.
    </p>

    <h2 id="liability">Liability</h2>
    <p>
      The app is a workout timer, not medical advice. It is provided "as is" and "as available". To the maximum extent permitted by law, the total liability of Leduc IT OÜ is
      limited to the greater of the amount you paid for Captime in the 12 months before the claim and 100 USD. We are not liable for indirect or consequential damages where the law
      allows that limit. The app store is not liable for the app. If you are a consumer in the European Union, you keep the mandatory rights of your country. You are responsible
      for claims caused by your misuse of the app, where the law allows that.
    </p>

    <h2 id="law">Law</h2>
    <p>
      The laws of Estonia govern this license. Mandatory consumer laws where you live can also apply. This license, the Terms, and the Privacy Policy are the whole agreement about
      the app. Apple's standard EULA also applies to App Store downloads. If a term is invalid, the rest still applies. The English text controls.
    </p>
    <p>
      We may update this license and will change the Last updated date. For an important change we will try to give 30 days' notice. If you do not agree, stop using the app and
      delete it.
    </p>
  </LegalDocument>
</template>
