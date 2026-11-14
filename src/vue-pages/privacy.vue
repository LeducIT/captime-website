<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'data-we-collect', label: 'Data we collect' },
  { id: 'how-we-use-data', label: 'How we use data' },
  { id: 'processors', label: 'Processors' },
  { id: 'your-rights', label: 'Your rights and deletion' },
  { id: 'children', label: 'Children' },
  { id: 'california', label: 'California residents' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    current="privacy"
    contact-about="this Privacy Policy"
    :toc="toc"
    lede="This policy explains what Leduc IT OÜ collects when you use the Captime app and the captime.app website, why we collect it, who processes it, and the rights you have under the GDPR."
  >
    <h2 id="who-we-are">Who we are</h2>
    <p>
      Leduc IT OÜ ("we", "us", "the Company") publishes the Captime workout timer. Leduc IT OÜ is a private limited company established in Estonia, in the European Union. The
      registry code is 14574207. The registered address is Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia. The GDPR applies because we are established in
      the EU.
    </p>
    <p>
      We are the data controller for the personal data described in this policy. Email us at <a href="mailto:victor@leduc.it">victor@leduc.it</a>. The Service means the Captime
      mobile application and the website at <a href="https://captime.app/">https://captime.app</a>, including the blog.
    </p>
    <p>
      You must be at least 13 years old to use the Service. Captime does not ask you to create an account, and we do not create one for you. This policy sits alongside our
      <a href="/tos/">Terms of Service</a> and our <a href="/eula/">End-User License Agreement</a>.
    </p>

    <h2 id="data-we-collect">Data we collect</h2>
    <p>We collect the following categories of information. We do not receive your full payment card number.</p>
    <ul class="legal-cards">
      <li>
        <strong>Purchases and subscriptions.</strong>
        The Apple App Store, Google Play, and RevenueCat are the payment and subscription processors. Apple or Google charges your store account. RevenueCat receives purchase and
        subscription status so the app can unlock what you bought. That status can include the product, whether a subscription is active, and whether a trial or introductory period
        is in progress.
      </li>
      <li>
        <strong>Apple Search Ads attribution.</strong>
        RevenueCat may receive attribution data from Apple Search Ads, including whether an install or purchase is associated with one of our ads. We use that to measure our own
        advertising.
      </li>
      <li>
        <strong>Website analytics.</strong>
        captime.app uses Plausible-compatible analytics, loaded from
        <a href="https://pls.digitalshift-ee.workers.dev/js/script.js" rel="external nofollow noopener" target="_blank">pls.digitalshift-ee.workers.dev</a> for the domain
        captime.app. It can record pages viewed and basic technical data about the visit, such as browser type and referrer.
      </li>
      <li>
        <strong>Crash and error reports.</strong>
        Sentry processes crash and error diagnostics from the iPhone app, the Apple Watch app, and the watch complication. Those reports are hosted in the EU at de.sentry.io.
      </li>
      <li>
        <strong>App updates.</strong>
        CapGo delivers over-the-air updates to the app. It processes the technical data needed to choose and install an update, such as platform, app version, and an app-scoped
        device identifier. We do not list an IP address or a country for CapGo.
      </li>
      <li>
        <strong>Support chat.</strong>
        The help button in the app's Settings opens a web view with Crisp chat. If you use it, Crisp processes the messages you choose to send. That can include an email address if
        you provide one.
      </li>
      <li>
        <strong>Email you send us.</strong>
        If you email <a href="mailto:victor@leduc.it">victor@leduc.it</a>, we receive the address you write from and the message you send.
      </li>
    </ul>
    <p>
      Videos you record in the app stay on your device. We do not upload them, and we do not receive them. Apple, Google, RevenueCat, the website analytics service, Sentry, or
      Crisp may process an IP address as part of delivering their service. We do not knowingly collect precise location, government identity numbers, or health records.
    </p>

    <h2 id="how-we-use-data">How we use data</h2>
    <p>We use personal data for these purposes:</p>
    <ul>
      <li>To provide Captime and to unlock a subscription or lifetime purchase you requested.</li>
      <li>To tell which plan is active, including a free trial or a discounted first period.</li>
      <li>To understand which pages on the website are read, and to improve the site.</li>
      <li>To measure Apple Search Ads that we run.</li>
      <li>To diagnose crashes and errors in the iPhone app, the Apple Watch app, and the watch complication.</li>
      <li>To deliver app updates and to keep the app working.</li>
      <li>To answer an email you send us, or a support chat you open from the app's Settings.</li>
      <li>To comply with law, to keep records we are required to keep, and to prevent abuse.</li>
    </ul>
    <h3>Legal bases under the GDPR</h3>
    <ul>
      <li><strong>Contract.</strong> Processing a purchase is needed to deliver the subscription or lifetime access you requested.</li>
      <li>
        <strong>Legitimate interests.</strong> Website analytics, diagnosing crashes and errors, measuring our own ads, delivering updates, securing the service, and improving
        Captime. You can object to processing that relies on legitimate interests.
      </li>
      <li><strong>Legal obligation.</strong> Records we must keep under tax, accounting, or other law.</li>
      <li><strong>Your request.</strong> Information you choose to send when you email us or use the in-app support chat, so we can reply.</li>
    </ul>
    <p>We do not sell personal data for money. We do not send marketing emails, and we do not send marketing push notifications.</p>

    <h2 id="processors">Processors</h2>
    <p>
      The companies below process personal data so we can run Captime. Their own privacy policies describe how they handle that data. For the GDPR, service providers that process
      data on our behalf are processors. Apple and Google also act as independent controllers for store billing.
    </p>
    <ul class="legal-cards">
      <li>
        <strong>RevenueCat.</strong>
        Payment and subscription processor. It receives purchase and subscription status, and Apple Search Ads attribution.
        <a href="https://www.revenuecat.com/privacy" rel="external nofollow noopener" target="_blank">RevenueCat privacy policy</a>
      </li>
      <li>
        <strong>Apple App Store.</strong>
        Payment and subscription processor for iOS purchases, and Apple Search Ads.
        <a href="https://www.apple.com/legal/privacy/en-ww/" rel="external nofollow noopener" target="_blank">Apple privacy policy</a>
      </li>
      <li>
        <strong>Google Play.</strong>
        Payment and subscription processor for Android purchases.
        <a href="https://policies.google.com/privacy" rel="external nofollow noopener" target="_blank">Google privacy policy</a>
      </li>
      <li>
        <strong>Website analytics.</strong>
        Plausible-compatible page analytics for captime.app, loaded from pls.digitalshift-ee.workers.dev.
      </li>
      <li>
        <strong>Sentry.</strong>
        Crash and error diagnostics for the iPhone app, the Apple Watch app, and the watch complication. Hosted in the EU (de.sentry.io).
        <a href="https://sentry.io/privacy/" rel="external nofollow noopener" target="_blank">Sentry privacy policy</a>
      </li>
      <li>
        <strong>CapGo.</strong>
        Over-the-air update service for the app.
        <a href="https://capgo.app/privacy/" rel="external nofollow noopener" target="_blank">CapGo privacy policy</a>
      </li>
      <li>
        <strong>Crisp.</strong>
        Support chat opened from the help button in the app's Settings.
        <a href="https://crisp.chat/en/privacy/" rel="external nofollow noopener" target="_blank">Crisp privacy policy</a>
      </li>
    </ul>
    <h3>International transfers</h3>
    <p>
      Sentry stores crash and error reports in the European Union (de.sentry.io). Some of the other providers are located outside the European Economic Area, including in the
      United States, where data protection laws can differ from Estonian and EU law. Contact us if you want the details of a particular transfer.
    </p>
    <h3>Other sharing</h3>
    <p>We may also share personal data in these cases:</p>
    <ul>
      <li>If we sell, merge, or reorganize the business, and the data is part of that transfer. We will tell you before a different privacy policy applies.</li>
      <li>If the law, a court, or a public authority requires it.</li>
      <li>To protect the rights, safety, and property of users, the public, or Leduc IT OÜ.</li>
    </ul>
    <p>The website and the app can link to other sites. Those sites have their own privacy policies. We are not responsible for them.</p>

    <h2 id="your-rights">Your rights and deletion</h2>
    <p>If you are in the EU or the EEA, you can ask us to:</p>
    <ul>
      <li><strong>Access</strong> the personal data we hold about you, and receive a copy.</li>
      <li><strong>Correct</strong> data that is inaccurate or incomplete.</li>
      <li><strong>Delete</strong> personal data when there is no good reason for us to keep processing it.</li>
      <li><strong>Restrict</strong> processing in the cases the GDPR allows.</li>
      <li><strong>Object</strong> to processing based on legitimate interests, including analytics and ad measurement.</li>
      <li><strong>Port</strong> data you provided, where the right to data portability applies, in a structured, commonly used, machine-readable format.</li>
      <li><strong>Withdraw consent</strong> where processing is based on consent. Withdrawing consent does not affect processing that already happened.</li>
    </ul>
    <p>
      You can also complain to a supervisory authority. Our lead authority is the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon),
      <a href="https://www.aki.ee/en" rel="external nofollow noopener" target="_blank">aki.ee</a>. If you live elsewhere in the EEA, you can contact your local authority.
    </p>
    <h3>How to ask for deletion</h3>
    <p>
      Email <a href="mailto:victor@leduc.it">victor@leduc.it</a>. Tell us what you want deleted and enough detail for us to find the data, such as the store you used and the
      approximate date of a purchase. We may ask you to confirm that you are the person the data is about before we act.
    </p>
    <p>
      We will delete personal data we hold, or ask our processors to delete it, unless we must keep it to comply with the law, to establish or defend a legal claim, or to finish a
      transaction you asked for. Apple, Google, and RevenueCat may keep transaction records under their own rules. Deleting the app from your phone does not delete data those
      providers already hold, and it does not cancel a subscription.
    </p>
    <p>
      We aim to reply within one month of a valid request. If a request is complex, the GDPR allows us to extend that by up to two further months, and we will tell you if we do.
    </p>
    <h3>How long we keep data</h3>
    <p>We keep personal data only for as long as we need it for the purposes in this policy.</p>
    <ul>
      <li>Purchase and subscription records are kept for 7 years after the end of the financial year in which they were recorded, so we can meet Estonian accounting rules.</li>
      <li>Website analytics are kept for 24 months, then deleted or aggregated.</li>
      <li>Crash and error reports are kept for up to 90 days, unless we need a particular report to investigate a problem you emailed us about.</li>
      <li>Update-delivery data is kept only while we need it to deliver over-the-air updates.</li>
      <li>Emails you send to victor@leduc.it, and support chat messages, are kept for 24 months after we close the request, or longer if we need them for a legal claim.</li>
    </ul>
    <p>Videos you record are not uploaded, so we do not store them. When we no longer need personal data, we delete it or anonymize it.</p>
    <h3>Security</h3>
    <p>We use commercially reasonable measures to protect personal data. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
    <h3>Changes to this policy</h3>
    <p>
      We may update this policy from time to time. We will post the new version on this page and change the Last updated date. If a change is material, we will also give a notice
      in the app or on the website before it takes effect, where that is reasonable.
    </p>

    <h2 id="children">Children</h2>
    <p>
      You must be at least 13 years old to use Captime. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and you believe a child
      under 13 has used the Service or provided personal data, email <a href="mailto:victor@leduc.it">victor@leduc.it</a>. We will delete that data.
    </p>

    <h2 id="california">California residents</h2>
    <p>This section applies if you are a California resident. It adds to the rest of this policy.</p>
    <p>In the 12 months before the date above, the categories of personal information we collect and disclose for business purposes are:</p>
    <ul>
      <li>
        <strong>Identifiers and device data</strong>, such as an IP address where a provider receives one, website analytics data, an app-scoped device identifier used for updates,
        or crash and error diagnostics.
      </li>
      <li><strong>Commercial information</strong>, such as the product you bought and whether a subscription is active.</li>
      <li><strong>Internet activity</strong>, such as pages viewed on the website.</li>
      <li><strong>Information you send us</strong>, including email to victor@leduc.it and messages in the in-app support chat.</li>
    </ul>
    <p>
      We do not knowingly collect precise geolocation, biometric data, government identity numbers, account profiles, or videos. Videos recorded in the app stay on the device. We
      do not sell personal information for money. We do not send marketing emails or marketing push notifications. We do not knowingly sell the personal information of anyone under
      16.
    </p>
    <p>
      Sharing attribution data with RevenueCat and Apple so we can measure our own Apple Search Ads can be treated as "sharing" under California law. Email
      <a href="mailto:victor@leduc.it">victor@leduc.it</a> and ask us to stop that measurement for data we control.
    </p>
    <p>You can ask us to:</p>
    <ul>
      <li>Tell you the categories of personal information we collected, the sources, the purpose, and the categories of third parties we disclosed it to.</li>
      <li>Provide the specific pieces of personal information we hold about you.</li>
      <li>Delete personal information, subject to the exceptions the law allows, including finishing a transaction, security, debugging, and legal duties.</li>
    </ul>
    <p>
      We will not deny the service, charge a different price, or provide a different quality of service because you exercised these rights. Only you, or a person authorized to act
      for you, may make a request. We will try to verify the request before we act. We do not charge a fee for a request unless the law allows it.
    </p>
    <p>The service does not respond to browser Do Not Track signals. Some third-party sites do. You can set a Do Not Track preference in your browser for those sites.</p>
  </LegalDocument>
</template>
