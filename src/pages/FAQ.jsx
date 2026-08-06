import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: "Is MoneyArk really free?",
    a: "Yes. MoneyArk is 100% free with every feature included — no premium tiers, no subscriptions, no hidden fees, and no ads. We don't sell your data; the app is offline-first, secure, and self-contained."
  },
  {
    q: "Can MoneyArk track expenses with voice?",
    a: "Yes. Tap the microphone and say something like \"Spent twenty dollars on coffee\" — MoneyArk parses the amount, category, and merchant automatically and creates the transaction instantly."
  },
  {
    q: "Does MoneyArk scan SMS messages from my bank?",
    a: "Yes. With your permission, MoneyArk reads transactional SMS alerts from your bank and UPI services on Android and auto-creates matching debit, credit, and transfer entries. SMS parsing happens entirely on-device for total privacy."
  },
  {
    q: "How does the receipt scanner work?",
    a: "Snap any paper or digital receipt in the app. On-device OCR text recognition (Google ML Kit) extracts the vendor, total amount, date, and suggests a category in seconds so you can review and save with one tap."
  },
  {
    q: "Can I import bank statements from PDF files?",
    a: "Yes. MoneyArk includes a native PDF statement parser. Upload your bank statement PDF directly into the smart creation modal, and MoneyArk automatically extracts and structures your transaction entries."
  },
  {
    q: "What is the Personal Finance AI?",
    a: "It's an interactive AI assistant powered by Google Gemini built into MoneyArk. It studies up to 90 days of your financial history to answer questions in natural language — \"Where did I overspend this month?\", \"How much went to dining?\", or \"Can I afford a $300 purchase?\"."
  },
  {
    q: "Does MoneyArk support Savings Goals and Bill Reminders?",
    a: "Yes! You can set up custom Savings Goals with target amounts and deadlines to track progress, as well as track recurring Bills and subscriptions with automatic local notifications so you never miss a payment."
  },
  {
    q: "Can I manage family or group finances?",
    a: "Yes. MoneyArk includes a dedicated Family & Shared Finances module allowing you to track shared budgets, joint expenses, and individual member contributions."
  },
  {
    q: "Does MoneyArk work offline?",
    a: "Yes. MoneyArk is offline-first. All your transactions, budgets, and analytics are stored locally on your device using SQLite — you don't need an internet connection to track expenses or view your data. Optional cloud sync powered by Supabase is available if you want to sync across devices."
  },
  {
    q: "Is my financial data secure?",
    a: "Yes. On-device storage uses encrypted local databases and secure storage with keys tied to your device's biometric identity. The app supports biometric fingerprint and Face-ID lock. We never sell or share your financial data with third parties."
  },
  {
    q: "What Android version do I need?",
    a: "MoneyArk requires Android 8.0 (Oreo) or newer. The APK installer download is roughly 96 MB."
  },
  {
    q: "How do I install the APK file?",
    a: "Download moneyark.apk from this site, open it on your Android device, and approve installation. You may need to enable \"Install from unknown sources\" in your device's security settings the first time. The app is signed and verified."
  },
  {
    q: "How many currencies does MoneyArk support?",
    a: "15+ major currencies including USD, EUR, GBP, JPY, INR, CAD, AUD, AED, and more. Default currency is automatically detected based on your location and can be customized anytime."
  },
  {
    q: "How do I export my data?",
    a: "Open the app → Reports / Settings → Export. You can generate professional, branded PDF financial statements or export raw transaction history as CSV for spreadsheets."
  },
  {
    q: "How do I delete my account and data?",
    a: "Visit our Account Deletion page for step-by-step instructions on how to delete your in-app data and any cloud-synced backups."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ — MoneyArk Money Manager</title>
        <meta name="description" content="Frequently asked questions about MoneyArk — how to install the APK, security, offline usage, syncing, supported currencies, and more." />
        <meta name="keywords" content="moneyark faq, money manager help, expense tracker questions, android budget app help, free finance app faq" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://moneyark.vercel.app/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneyark.vercel.app/faq" />
        <meta property="og:title" content="FAQ — MoneyArk Money Manager" />
        <meta property="og:description" content="Common questions about installing, securing, and using MoneyArk on Android." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 text-primary-container font-mono text-xs tracking-widest uppercase mb-6">
            <span className="w-12 h-px bg-primary-container"></span>
            <span>Help Center</span>
            <span className="w-12 h-px bg-primary-container"></span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-black leading-none tracking-tighter text-on-surface mb-6">
            Frequently asked <span className="text-primary-container">questions</span>
          </h1>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Everything you need to know about MoneyArk — installation, privacy, syncing, and more.
          </p>
        </header>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-surface-container/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline font-bold text-lg text-on-surface">{item.q}</span>
                  <span
                    className={`material-symbols-outlined text-primary-container transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-6 text-on-surface-variant leading-relaxed"
                  >
                    {item.a}
                    {i === faqs.length - 1 && (
                      <Link to="/account-deletion" className="inline-block mt-3 text-primary-container hover:underline font-medium">
                        Go to Account Deletion →
                      </Link>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 p-10 rounded-2xl bg-surface-container/40 border border-white/5 text-center">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Still need help?</h2>
          <p className="text-on-surface-variant mb-6">
            Reach out and we'll get back to you within 1–2 business days.
          </p>
          <a
            href="mailto:support@moneyark.app"
            className="inline-flex items-center gap-2 bg-primary-container text-zinc-950 px-6 py-3 rounded-xl font-headline font-bold hover:bg-primary-fixed transition-all"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            Contact support
          </a>
        </div>
      </section>
    </>
  );
};

export default FAQ;
