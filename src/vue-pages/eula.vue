<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'license', label: 'This license' },
  { id: 'apple', label: 'Apple standard EULA' },
  { id: 'scope', label: 'Scope and restrictions' },
  { id: 'purchases', label: 'Purchases' },
  { id: 'updates', label: 'Updates and support' },
  { id: 'liability', label: 'Warranties and liability' },
  { id: 'law', label: 'Governing law' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="End-User License Agreement"
    current="eula"
    contact-about="this End-User License Agreement"
    :toc="toc"
    lede="This agreement licenses the Captime app from Leduc IT OÜ. The app is licensed, not sold. Please read this agreement before you download or use Captime."
  >
    <h2 id="license">This license</h2>
    <p>
      This End-User License Agreement ("Agreement") is between you and Leduc IT OÜ only. Leduc IT OÜ is established in Estonia, in the European Union. It is not an agreement with
      the Apple App Store or Google Play, except that Apple may enforce it as a third-party beneficiary when you download the app from the App Store, as described below.
    </p>
    <p>
      By downloading, installing, or using Captime, you agree to this Agreement, to the <a href="/tos/">Terms of Service</a>, and to the <a href="/privacy/">Privacy Policy</a>. If
      you do not agree, do not download or use the app.
    </p>
    <p>
      The Application means the Captime software you download from an Application Store to a device. Application Store means the Apple App Store or Google Play. Device means a
      phone, tablet, or other device the store allows.
    </p>

    <h2 id="apple">Apple standard EULA</h2>
    <p>
      If you get Captime from the Apple App Store, you also agree to Apple's Licensed Application End User License Agreement (the standard EULA):
      <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="external nofollow noopener" target="_blank"
        >https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a
      >.
    </p>
    <p>
      That standard EULA is between you and Apple for the store license. This Agreement is between you and Leduc IT OÜ for the app. The following terms are included because Apple
      requires them when a developer uses its own license:
    </p>
    <ul>
      <li>This Agreement is between you and Leduc IT OÜ only, and not with Apple. Leduc IT OÜ, not Apple, is solely responsible for the app and its content.</li>
      <li>
        The license is non-transferable. On Apple devices, you may use the app on Apple-branded products that you own or control, as permitted by the usage rules in Apple's Media
        Services terms.
      </li>
      <li>Apple has no obligation to provide maintenance or support for the app.</li>
      <li>
        If the app fails to conform to an applicable warranty, you may notify Apple, and Apple may refund the purchase price. To the maximum extent permitted by law, Apple has no
        other warranty obligation. Any other claim, loss, liability, damage, cost, or expense from a failure to conform to a warranty is the responsibility of Leduc IT OÜ.
      </li>
      <li>
        Leduc IT OÜ, not Apple, is responsible for addressing claims about the app, including product liability claims, legal or regulatory claims, and consumer protection claims.
      </li>
      <li>
        If a third party claims that the app, or your possession and use of it, infringes intellectual property rights, Leduc IT OÜ, not Apple, is responsible for the
        investigation, defense, settlement, and discharge of that claim.
      </li>
      <li>
        You represent and warrant that you are not located in a country subject to a United States government embargo or designated as "terrorist supporting", and that you are not
        listed on any United States government list of prohibited or restricted parties.
      </li>
      <li>You must comply with third-party terms when you use the app, for example your wireless data service agreement.</li>
      <li>Apple and Apple's subsidiaries are third-party beneficiaries of this Agreement. Once you accept it, Apple has the right to enforce it against you.</li>
    </ul>
    <p>
      If you download Captime from Google Play, Google's Play terms also apply to that download. Google is not responsible for the app. This Agreement remains between you and Leduc
      IT OÜ.
    </p>

    <h2 id="scope">Scope and restrictions</h2>
    <p>
      We grant you a revocable, non-exclusive, non-transferable, limited license to download, install, and use Captime for your personal, non-commercial use, on devices you own or
      control, and only as the Application Store's terms allow.
    </p>
    <p>If the store lets other people use the app through Family Sharing, a family group, or volume purchasing, their use is also subject to this Agreement.</p>
    <p>You agree not to, and you will not permit others to:</p>
    <ul>
      <li>
        License, sell, rent, lease, assign, distribute, host, or otherwise commercially exploit the app, or make it available to a third party, except through a store feature the
        store itself allows.
      </li>
      <li>Copy the app or use it for any purpose other than this license.</li>
      <li>
        Modify, translate, or make derivative works of the app, or disassemble, decrypt, reverse compile, or reverse engineer any part of it, except where applicable law does not
        allow that restriction.
      </li>
      <li>Remove, alter, or hide any copyright, trademark, or other proprietary notice.</li>
    </ul>
    <h3>Intellectual property</h3>
    <p>
      The app, including its copyrights, trademarks, and other intellectual property, remains the property of Leduc IT OÜ and its licensors. This Agreement does not sell you any
      ownership in the app.
    </p>
    <p>
      Suggestions you send us about the app may be used by Leduc IT OÜ for any purpose, without credit or payment. The same feedback terms in the
      <a href="/tos/">Terms of Service</a> apply.
    </p>

    <h2 id="purchases">Purchases</h2>
    <p>
      The app offers a yearly subscription with a 7-day free trial, a monthly subscription, a weekly subscription with a discounted first week, and lifetime access as a one-time
      purchase. The price, including any trial or introductory price, is shown in the app before you confirm. The full purchase terms are in the
      <a href="/tos/">Terms of Service</a>. The points below are the auto-renewal terms Apple and Google require you to see:
    </p>
    <ul>
      <li>Payment is charged to your Apple ID or Google Play account at confirmation of purchase.</li>
      <li>A yearly, monthly, or weekly subscription renews automatically unless you turn off auto-renewal at least 24 hours before the end of the current period.</li>
      <li>Your account is charged for renewal within 24 hours before the end of the current period, at the renewal price shown for that plan.</li>
      <li>You can manage and cancel a subscription in your Apple ID subscription settings or in Google Play's subscription settings. Deleting the app does not cancel it.</li>
      <li>
        If you start a paid subscription before a free trial ends, any unused part of the trial is forfeited when the paid subscription starts, where the store applies that rule.
      </li>
      <li>Lifetime access is charged once and does not auto-renew.</li>
    </ul>
    <p>
      Billing is handled by the Application Store, not by Leduc IT OÜ. We do not store your full payment card number. If a payment fails or you want a refund, contact the store.
      Store refund rules apply, except where the law requires otherwise.
    </p>

    <h2 id="updates">Updates and support</h2>
    <p>
      We may provide patches, bug fixes, and other updates, including over-the-air updates through CapGo and updates from the Application Store. Updates are part of the app and are
      covered by this Agreement. An update may change or remove features.
    </p>
    <p>
      We do not promise to provide every update, or to keep a particular feature available. We may modify, suspend, or discontinue the app, with or without notice, to the extent
      the law allows.
    </p>
    <p>
      To the extent maintenance or support is required by applicable law, Leduc IT OÜ provides it, not the Application Store. You can contact us through
      <a href="/#support">Captime support</a>.
    </p>
    <h3>Third-party services</h3>
    <p>
      The app relies on third-party services named in the <a href="/privacy/">Privacy Policy</a>, including RevenueCat, Apple, Google, PostHog, Sentry, and CapGo. Their terms apply
      to their services. We are not responsible for third-party services, and you use them at your own risk and under their terms.
    </p>
    <h3>Termination</h3>
    <p>
      This Agreement stays in effect until you or we end it. We may suspend or end it if you breach it. You may end it by deleting the app and all copies from your devices and
      stopping use.
    </p>
    <p>
      When this Agreement ends, you must stop using the app and delete the copies. Ending the license does not by itself cancel a store subscription or refund a purchase. Cancel
      subscriptions in the store settings described above.
    </p>
    <p>Termination does not limit our rights if you breached this Agreement while it was in effect.</p>

    <h2 id="liability">Warranties and liability</h2>
    <p>The app is a workout timer. It is not medical advice. You are responsible for your training.</p>
    <p>
      The app is provided "AS IS" and "AS AVAILABLE", with all faults and without warranty of any kind, to the maximum extent permitted by law. We disclaim implied warranties of
      merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the app will be uninterrupted or error free, or that it will meet a
      particular training goal.
    </p>
    <p>
      To the maximum extent permitted by law, our total liability under this Agreement is limited to the amount you actually paid for the app or through the app, or 100 USD if you
      have not paid anything. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost data, lost profits, or personal injury, even
      if we were advised of the possibility.
    </p>
    <p>
      Some jurisdictions do not allow these exclusions. In those places, the exclusions apply only as far as the law allows. If a warranty exists that cannot be disclaimed, Leduc
      IT OÜ, not the Application Store, is responsible for it.
    </p>
    <p>
      The Application Store and its affiliates are not liable to you for damages arising from the app. If you are a consumer in the European Union, you keep the mandatory consumer
      rights of the country where you live.
    </p>
    <p>
      You will indemnify Leduc IT OÜ and its officers, employees, and licensors against claims, damages, and reasonable attorneys' fees arising out of your misuse of the app, your
      breach of this Agreement, or your violation of another person's rights, to the extent the law allows that indemnity.
    </p>

    <h2 id="law">Governing law</h2>
    <p>
      The laws of Estonia, excluding conflict-of-law rules, govern this Agreement and your use of the app. Other local laws can also apply, including mandatory consumer laws in the
      country where you live.
    </p>
    <p>
      If a provision of this Agreement is held unenforceable, it is modified to the minimum extent needed to make it enforceable, and the rest stays in effect. A failure to enforce
      a provision is not a waiver.
    </p>
    <p>
      This Agreement, together with the <a href="/tos/">Terms of Service</a> and the <a href="/privacy/">Privacy Policy</a>, is the entire agreement between you and Leduc IT OÜ
      about the app and replaces earlier agreements about the same subject. Apple's standard EULA also applies to App Store downloads, as stated above. If we provide a translation,
      the English text controls.
    </p>
    <h3>Changes to this license</h3>
    <p>
      We may update this Agreement. We will post the new version on this page and change the Last updated date. If a change is material, we will give at least 30 days' notice in
      the app or on the website before it takes effect, where that is reasonable. If you keep using the app after the new terms take effect, you agree to them. If you do not agree,
      stop using the app and delete it.
    </p>
  </LegalDocument>
</template>
