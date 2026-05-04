import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const AccountDeletion = () => {
  return (
    <>
      <Helmet>
        <title>Delete Your Account — MoneyArk</title>
        <meta name="description" content="How to delete your MoneyArk account and remove all associated data. Step-by-step instructions for in-app deletion and data retention details." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://moneyark.vercel.app/account-deletion" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneyark.vercel.app/account-deletion" />
        <meta property="og:title" content="Delete Your Account — MoneyArk" />
        <meta property="og:description" content="How to permanently delete your MoneyArk account and all associated data." />
      </Helmet>

      <motion.section
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6 py-24"
      >
        <motion.header variants={fadeIn} className="mb-16">
          <div className="flex items-center gap-4 text-primary-container font-mono text-xs tracking-widest uppercase mb-6">
            <span className="w-12 h-px bg-primary-container"></span>
            <span>Data Rights</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-black leading-none tracking-tighter text-on-surface mb-6">
            Delete your <span className="text-primary-container">account</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            You can delete your MoneyArk account and all associated data at any time. This page explains exactly how, what gets deleted, and how long it takes.
          </p>
        </motion.header>

        <motion.div variants={fadeIn} className="space-y-12">
          <section>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
              <span className="text-primary-container font-mono text-sm mr-3">01</span>
              In-app deletion (recommended)
            </h2>
            <ol className="space-y-3 text-on-surface-variant leading-relaxed list-decimal list-inside ml-2">
              <li>Open the MoneyArk app on your Android device.</li>
              <li>Go to <strong className="text-on-surface">Settings → Account</strong>.</li>
              <li>Tap <strong className="text-on-surface">Delete Account</strong>.</li>
              <li>Confirm with your biometric or device passcode.</li>
            </ol>
            <p className="mt-4 text-sm text-on-surface-variant/70">
              Once confirmed, your account and all cloud-synced data are scheduled for deletion immediately.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
              <span className="text-primary-container font-mono text-sm mr-3">02</span>
              Email request (alternative)
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              If you can't access the app, send a deletion request from the email address associated with your account to:
            </p>
            <a
              href="mailto:privacy@moneyark.app?subject=Account%20Deletion%20Request"
              className="inline-flex items-center gap-2 bg-primary-container/10 border border-primary-container/30 text-primary-container px-5 py-3 rounded-xl font-mono text-sm hover:bg-primary-container/20 transition-colors"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              privacy@moneyark.app
            </a>
            <p className="mt-4 text-sm text-on-surface-variant/70">
              Include "Account Deletion Request" in the subject line. We'll process the request within 7 business days and confirm by email.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">
              <span className="text-primary-container font-mono text-sm mr-3">03</span>
              What gets deleted
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-surface-container-low rounded-xl border border-white/5">
                <h3 className="font-headline font-bold text-on-surface mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                  Deleted immediately
                </h3>
                <ul className="text-sm text-on-surface-variant space-y-1 leading-relaxed">
                  <li>• Account profile</li>
                  <li>• Cloud-synced transactions</li>
                  <li>• Budget categories and goals</li>
                  <li>• Synced device list</li>
                </ul>
              </div>
              <div className="p-6 bg-surface-container-low rounded-xl border border-white/5">
                <h3 className="font-headline font-bold text-on-surface mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">schedule</span>
                  Retained briefly
                </h3>
                <ul className="text-sm text-on-surface-variant space-y-1 leading-relaxed">
                  <li>• Anonymized access logs (90 days, for security audit)</li>
                  <li>• Backup snapshots (30 days, then permanently destroyed)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-on-surface-variant/70">
              Local on-device data (SQLite database) is removed when you uninstall the app or wipe app storage in your device settings.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-primary-container/5 border border-primary-container/20">
            <h2 className="font-headline text-xl font-bold text-on-surface mb-3">Important notes</h2>
            <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed">
              <li>• Account deletion is <strong className="text-on-surface">permanent and irreversible</strong>.</li>
              <li>• If you only want to stop syncing without deleting, disable cloud sync in <strong className="text-on-surface">Settings → Sync</strong>.</li>
              <li>• Need a copy of your data first? Export it via <strong className="text-on-surface">Settings → Export Data</strong> before deleting.</li>
            </ul>
          </section>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AccountDeletion;
