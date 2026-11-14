<script setup lang="ts">
import LegalDocument from '../components/LegalDocument.vue'

const toc = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'data', label: 'Data we collect' },
  { id: 'providers', label: 'Providers' },
  { id: 'rights', label: 'Your rights' },
  { id: 'california', label: 'California' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <LegalDocument
    title="Privacy Policy"
    current="privacy"
    contact-about="this Privacy Policy"
    :toc="toc"
    lede="This policy explains what personal data Leduc IT OÜ collects when you use Captime, and the rights you have."
  >
    <h2 id="who-we-are">Who we are</h2>
    <p>
      Leduc IT OÜ publishes the Captime app and the website at <a href="https://captime.app/">captime.app</a>. We are the controller of the personal data in this policy. Our
      registry code is 14574207. Our address is Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551, Estonia. Email
      <a href="mailto:victor@leduc.it">victor@leduc.it</a>.
    </p>
    <p>
      You must be at least 13. Captime has no user account. Videos you record stay on your device and are not uploaded. We do not send marketing emails or marketing push
      notifications.
    </p>

    <h2 id="data">Data we collect</h2>
    <p>We collect only what we need to run Captime:</p>
    <ul>
      <li>Purchase and subscription status.</li>
      <li>Basic website visit data, such as pages viewed.</li>
      <li>Crash reports.</li>
      <li>Information needed to deliver app updates.</li>
      <li>Messages you send by email or in the support chat.</li>
    </ul>
    <p>We do not receive your full payment card number. We do not collect precise location. We do not store your videos.</p>
    <p>
      We use this data to provide Captime, unlock a purchase, keep the app working, understand the website, measure our own ads, and reply to you. We do this to perform a purchase
      you requested, for our legitimate interest in running Captime, to meet legal duties, and because you asked us to reply. You can object where we rely on legitimate interests.
    </p>
    <p>We do not sell personal data.</p>
    <p>
      We keep purchase records for 7 years after the financial year they relate to. We keep website analytics for 24 months, crash reports for up to 90 days, and messages you send
      us for 24 months after we close the request. Other data is kept only as long as we need it, then deleted.
    </p>

    <h2 id="providers">Providers</h2>
    <p>These providers process personal data for us. Some may be outside the European Union.</p>
    <ul>
      <li>App stores and payments: Apple, Google, RevenueCat.</li>
      <li>Crash reports: Sentry.</li>
      <li>Support chat: Crisp.</li>
      <li>Privacy-friendly website analytics.</li>
      <li>App updates: CapGo.</li>
    </ul>
    <p>We may also share data if the law requires it, or if we sell the business. We will tell you before a different privacy policy applies.</p>

    <h2 id="rights">Your rights</h2>
    <p>
      You can ask to access, correct, delete, or restrict your personal data, to object to certain processing, and to receive a copy of data you provided. Email
      <a href="mailto:victor@leduc.it">victor@leduc.it</a>. We may ask you to confirm who you are. We aim to reply within one month.
    </p>
    <p>
      You can complain to the Estonian Data Protection Inspectorate (<a href="https://www.aki.ee/en" rel="external nofollow noopener" target="_blank">aki.ee</a>) or to your local
      authority. Deleting the app does not cancel a subscription.
    </p>
    <p>If you are a parent and a child under 13 has used Captime, email us and we will delete that data.</p>
    <p>We may update this policy. We will change the Last updated date. If a change matters, we will also give notice in the app or on the website.</p>

    <h2 id="california">California</h2>
    <p>
      If you live in California, you can ask what personal information we hold, ask for a copy, and ask us to delete it. The categories are identifiers, purchase information,
      website activity, and messages you send us.
    </p>
    <p>
      We do not sell personal information, and we do not knowingly sell the personal information of anyone under 16. Measuring our own ads can count as "sharing" under California
      law. Email <a href="mailto:victor@leduc.it">victor@leduc.it</a> to opt out of measurement we control. This service does not respond to Do Not Track signals.
    </p>
  </LegalDocument>
</template>
