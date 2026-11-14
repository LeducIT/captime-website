<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'agreement', label: 'The agreement' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'refunds', label: 'Cancellation and refunds' },
  { id: 'license', label: 'License and acceptable use' },
  { id: 'liability', label: 'Disclaimers and liability' },
  { id: 'law', label: 'Governing law' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Terms of Service"
    current="tos"
    contact-about="these Terms of Service"
    :toc="toc"
    lede="These Terms of Service, also called Terms and Conditions, are the agreement between you and Leduc IT OÜ for the Captime app and the captime.app website. Please read them before you buy a subscription."
  >
    <h2 id="agreement">The agreement</h2>
    <p>
      These terms govern your use of Captime. By downloading, accessing, or using the app or the website, you agree to these terms and to the
      <a href="/privacy/">Privacy Policy</a>. If you do not agree, do not use the Service.
    </p>
    <p>
      The <a href="/eula/">End-User License Agreement</a> is the software license for the app. If you downloaded Captime from the Apple App Store, Apple's Licensed Application End
      User License Agreement also applies:
      <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="external nofollow noopener" target="_blank">Apple's standard EULA</a>. Apple's standard EULA
      governs the store relationship between you and Apple. These terms govern the relationship between you and Leduc IT OÜ.
    </p>
    <p>In these terms:</p>
    <ul>
      <li>
        <strong>Company</strong> means Leduc IT OÜ, registry code 14574207, registered at Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia. "We" and "us"
        mean the Company.
      </li>
      <li><strong>Application</strong> means the Captime app for iOS and Android.</li>
      <li><strong>Application Store</strong> means the Apple App Store or Google Play, depending on where you downloaded the app.</li>
      <li><strong>Service</strong> means the Application and the website at <a href="https://captime.app/">https://captime.app</a>.</li>
      <li><strong>You</strong> means the person using the Service.</li>
    </ul>
    <p>
      You must be at least 13 years old to use the Service. Captime does not ask you to create an account. Videos you record stay on your device and are not uploaded. We do not
      send marketing emails, and we do not send marketing push notifications. Our <a href="/privacy/">Privacy Policy</a> explains what we do if a child under 13 provides personal
      data.
    </p>

    <h2 id="subscriptions">Subscriptions</h2>
    <p>
      Some features of Captime require a purchase. The app offers the plans below. The price, including any free trial or introductory price and the price after that period, is
      shown in the app before you confirm the purchase. Store prices can differ by country and can change. This page does not list a currency amount because the store shows you the
      price that applies to you.
    </p>
    <ul class="legal-cards">
      <li>
        <strong>Yearly subscription.</strong>
        Includes a 7-day free trial when the store shows that trial to you. Unless you cancel, it renews as a paid yearly subscription at the yearly price shown in the app.
      </li>
      <li>
        <strong>Monthly subscription.</strong>
        Renews each month at the monthly price shown in the app until you cancel.
      </li>
      <li>
        <strong>Weekly subscription.</strong>
        The first week can be charged at a discounted price shown in the app. After that week, it renews at the regular weekly price shown in the app unless you cancel.
      </li>
      <li>
        <strong>Lifetime access.</strong>
        A one-time purchase. It is not a subscription, it does not auto-renew, and you are charged once.
      </li>
    </ul>
    <p>
      Payments and subscriptions are processed only by the Apple App Store, Google Play, and RevenueCat. Payment is charged to your Apple ID or your Google Play account when you
      confirm the purchase. We do not receive your full payment card number. RevenueCat receives the purchase and subscription status so the app can unlock the plan you bought. See
      the <a href="/privacy/">Privacy Policy</a> for how that data is used.
    </p>
    <h3>Auto-renewal</h3>
    <p>The yearly, monthly, and weekly subscriptions renew automatically. Lifetime access does not.</p>
    <ul>
      <li>The subscription renews for the same length of time unless you turn off auto-renewal at least 24 hours before the end of the current period.</li>
      <li>
        Your account is charged for the renewal within 24 hours before the current period ends. The renewal price is the price of that plan shown in the app, unless the store has
        already told you about a price change.
      </li>
      <li>
        You can manage or cancel auto-renewal in your Apple ID subscription settings, or in Google Play's subscription settings. Deleting the app does not cancel a subscription.
      </li>
      <li>If you do not cancel at least 24 hours before a free trial ends, the yearly subscription renews at the paid yearly price shown in the app.</li>
      <li>If you do not cancel at least 24 hours before a discounted first week ends, the weekly subscription renews at the regular weekly price shown in the app.</li>
      <li>
        If a free trial is offered and the paid subscription starts before the trial ends, any unused part of the trial is forfeited when the paid period starts, where Apple or
        Google applies that rule.
      </li>
    </ul>
    <h3>Trials and introductory prices</h3>
    <p>
      A free trial or a discounted first week is available only if the app and the store show it for your account. The store decides eligibility, for example one introductory offer
      per Apple ID. We may change or stop a trial or introductory offer for new purchases. That change does not shorten a trial or introductory period you have already started.
    </p>
    <p>
      You may need to confirm a payment method with the store before a free trial starts. You are not charged for the trial period itself. You are charged when the trial ends
      unless you canceled in time.
    </p>
    <h3>Lifetime access</h3>
    <p>
      Lifetime access unlocks the paid features of Captime as they are offered in the app, for a single purchase. It is not a promise that every feature, device, or store listing
      will exist forever. If we stop offering the app, we will not charge you again for that lifetime purchase.
    </p>
    <h3>Fee changes</h3>
    <p>
      We may change the price of a subscription. A price change applies to the next renewal, not to a period you have already paid for. The store shows the new price and, where the
      store's rules require it, asks you to agree before the new price is charged. If you do not agree to a higher price, cancel before the renewal.
    </p>

    <h2 id="refunds">Cancellation and refunds</h2>
    <p>
      Cancel a subscription in your Apple ID subscription settings or in Google Play's subscription settings. Canceling stops the next renewal. You can keep using the paid features
      until the end of the period you already paid for, unless the store ends that access sooner as part of a refund.
    </p>
    <p>
      Refunds of App Store and Google Play purchases are handled by Apple or Google under their refund rules. To request a refund, contact the store where you bought Captime. If
      the law gives you a refund right that the store does not handle, email <a href="mailto:victor@leduc.it">victor@leduc.it</a>.
    </p>
    <p>Except where the law requires a refund, fees already charged are not refundable, and canceling a subscription does not refund the current period.</p>
    <p>
      If a purchase does not unlock inside the app, contact us and we will help you restore it. Restoration uses the store account you bought with. We will not charge you again to
      restore a purchase the store already shows as active.
    </p>

    <h2 id="license">License and acceptable use</h2>
    <p>
      We grant you a personal, limited, non-exclusive, non-transferable, revocable license to download and use Captime on devices you own or control, as the Application Store
      allows. The app is licensed, not sold. The full license, including the Apple terms, is the <a href="/eula/">End-User License Agreement</a>.
    </p>
    <p>You agree not to:</p>
    <ul>
      <li>
        Sell, rent, sublicense, or commercially exploit the app, or make it available to others except through a store feature such as Family Sharing where the store allows it.
      </li>
      <li>Copy the app except as needed to use it under this license.</li>
      <li>Modify the app, or reverse engineer it, except where applicable law does not allow that restriction.</li>
      <li>Remove copyright or trademark notices.</li>
      <li>Use the Service to break the law, to interfere with the Service, or to misuse support.</li>
    </ul>
    <h3>Intellectual property</h3>
    <p>
      The app, the Captime name, the site design, and our original content are owned by Leduc IT OÜ or its licensors and are protected by copyright, trademark, and other laws. You
      may not use our trademarks without prior written permission.
    </p>
    <p>Names of workouts and the word CrossFit belong to their owners. Using those names to describe a timer mode does not transfer any trademark.</p>
    <h3>Feedback</h3>
    <p>
      If you send us ideas or suggestions about Captime, you assign to us the rights in that feedback. If that assignment is not effective, you grant us a non-exclusive, perpetual,
      irrevocable, royalty-free, worldwide license to use, modify, and share the feedback without restriction or payment.
    </p>
    <h3>Other websites</h3>
    <p>
      The Service may link to third-party sites and services we do not control. We are not responsible for their content, terms, or privacy practices. Read their terms before you
      rely on them.
    </p>

    <h2 id="liability">Disclaimers and liability</h2>
    <p>Captime is a workout timer. It is not medical advice, and it is not a coach. You are responsible for how you train and for whether a workout is safe for you.</p>
    <p>
      The Service is provided "AS IS" and "AS AVAILABLE", with all faults. To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a
      particular purpose, title, and non-infringement, and we do not warrant that the Service will be uninterrupted, error free, or fit for a particular workout.
    </p>
    <p>
      To the maximum extent permitted by law, the total liability of Leduc IT OÜ and its suppliers under these terms is limited to the greater of (a) the amount you paid for
      Captime in the 12 months before the claim and (b) 100 USD.
    </p>
    <p>
      To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or
      personal injury, even if we were advised of the possibility. Some places do not allow these limits. In those places, our liability is limited to the greatest extent the law
      allows.
    </p>
    <p>
      If you are a consumer in the European Union, you keep any mandatory rights of the country where you live. Those rights are not reduced by the disclaimers in this section.
    </p>

    <h2 id="law">Governing law</h2>
    <p>
      The laws of Estonia, excluding conflict-of-law rules, govern these terms and your use of the Service. Your use of the app may also be subject to the laws of the place where
      you live.
    </p>
    <p>
      If you have a dispute about the Service, contact us first and we will try to resolve it informally. If you are a consumer in the European Union, you can also use the
      mandatory protections and the courts available in your country of residence.
    </p>
    <p>
      You represent that you are not located in a country that is subject to a United States government embargo or that has been designated as "terrorist supporting", and that you
      are not listed on a United States government list of prohibited or restricted parties.
    </p>
    <p>
      If any part of these terms is held invalid, the rest stays in effect, and the invalid part is read as far as the law allows. If we do not enforce a term, that does not waive
      our right to enforce it later. If we provide a translation, the English text controls if there is a conflict.
    </p>

    <h2 id="changes">Changes</h2>
    <p>
      We may update these terms. We will post the new terms on this page and change the Last updated date. If a change is material, we will make a reasonable effort to give at
      least 30 days' notice in the app or on the website before the new terms take effect. What counts as a material change is decided by us in good faith.
    </p>
    <p>
      If you keep using Captime after the new terms take effect, you agree to them. If you do not agree, stop using the Service and cancel any subscription in your store account
      settings.
    </p>
    <p>
      We may also change, suspend, or discontinue features of the Service. The <a href="/eula/">End-User License Agreement</a> explains the license, including updates delivered
      over the air.
    </p>
  </LegalDocument>
</template>
