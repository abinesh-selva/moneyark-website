import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PRICING_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MoneyArk",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Full access to all features at no cost"
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Pricing = () => {
    return (
        <>
        <Helmet>
            <title>MoneyArk Is Free — No Cost, No Catch</title>
            <meta name="description" content="MoneyArk is completely free to download. No subscriptions, no premium tiers, no hidden fees. Get full access to every feature on Android at zero cost." />
            <meta name="keywords" content="free finance app, free budget tracker, no subscription expense tracker, moneyark free, android finance app free" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://moneyark.vercel.app/pricing" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://moneyark.vercel.app/pricing" />
            <meta property="og:title" content="MoneyArk Is Free — No Cost, No Catch" />
            <meta property="og:description" content="No subscriptions, no premium tiers. Every feature, free forever." />
            <meta property="og:image" content="https://moneyark.vercel.app/og-image.png" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="MoneyArk Is Free — No Cost, No Catch" />
            <meta name="twitter:description" content="No subscriptions, no premium tiers. Every feature, free." />
            <script type="application/ld+json">{JSON.stringify(PRICING_SCHEMA)}</script>
        </Helmet>
        <motion.section 
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden"
        >
            <motion.header variants={staggerContainer} className="mb-24 space-y-4">
                <motion.div variants={fadeIn} className="flex items-center gap-4 text-primary-container font-mono text-xs tracking-widest uppercase mb-4">
                    <span className="w-12 h-px bg-primary-container"></span>
                    <span>No Cost. No Catch.</span>
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-7xl md:text-9xl font-headline font-black leading-[0.85] tracking-tighter text-white">
                    100% <br/> <span className="text-primary-container">Free</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-on-surface-variant max-w-lg text-lg font-light leading-relaxed pt-8">
                    Every feature, zero cost. MoneyArk is completely free to download and use — no hidden fees, no premium tiers, no data selling.
                </motion.p>
            </motion.header>

            {/* Free Tier Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl mx-auto mb-32"
            >
                <div className="glass-card group p-12 flex flex-col justify-between relative bg-primary-container/5 border-primary-container/20 shadow-[0_0_80px_rgba(240,160,145,0.12)]">
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-container text-zinc-950 px-4 py-1 rounded-full text-[9px] font-black tracking-widest uppercase">All Features Included</div>
                    <div className="space-y-10">
                        <div className="flex justify-between items-start">
                            <h3 className="font-headline font-bold text-3xl text-white">Universal Tier</h3>
                            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary-container bg-primary-container/10 px-2 py-1 rounded">V2024.1</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-7xl font-headline font-black text-white">$0</span>
                            <span className="text-xs text-primary-container font-bold tracking-tight uppercase">/ Right Now</span>
                        </div>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                            Full access to every feature at no cost. Download, track, and analyse your finances without spending a rupee.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                                {[
                                    'Real-time Sync',
                                    'Recurring Transactions',
                                    'CSV Export',
                                    'Biometric App Lock',
                                    'Offline-First Storage',
                                    'Calendar View'
                                ].map((feature, i) => (
                                    <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-sm text-on-primary font-medium group-hover:text-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-lg text-primary-container">check_circle</span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
                                {[
                                    'Unlimited Budgets & Accounts',
                                    'Reports & Analytics Charts',
                                    '15 Currencies Supported',
                                    'Smart Transaction Filters'
                                ].map((feature, i) => (
                                    <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-sm text-on-primary font-medium group-hover:text-primary-container transition-colors">
                                        <span className="material-symbols-outlined text-lg text-primary-container">check_circle</span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="/moneyark.apk" download="MoneyArk.apk" className="mt-12 w-full py-5 rounded bg-primary-container text-zinc-950 font-label font-bold text-sm tracking-[0.3em] uppercase hover:bg-white transition-all shadow-lg flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>android</span>
                        DOWNLOAD FOR FREE
                    </motion.a>
                </div>
            </motion.div>

            {/* Why Free Section */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-24 border-t border-white/5"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div variants={fadeIn} className="space-y-4">
                        <h4 className="text-primary-container font-headline font-bold text-xl">No Data Selling</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Your privacy is our product. We don't sell your data because your sovereignty is what we build for.</p>
                    </motion.div>
                    <motion.div variants={fadeIn} className="space-y-4">
                        <h4 className="text-primary-container font-headline font-bold text-xl">Privacy First</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Your data stays yours. Local SQLite storage means your history is never locked behind a server.</p>
                    </motion.div>
                    <motion.div variants={fadeIn} className="space-y-4">
                        <h4 className="text-primary-container font-headline font-bold text-xl">No Subscriptions</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">No monthly bills, no paywalls. Get the full app experience without any recurring charges.</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
        </>
    );
};

export default Pricing;
