import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

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

const Privacy = () => {
    return (
        <>
        <Helmet>
            <title>Privacy Policy — MoneyArk</title>
            <meta name="description" content="MoneyArk's commitment to your financial privacy. We categorize data collection, specify retention periods, and ensure your data stays on your device." />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://moneyark.vercel.app/privacy" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://moneyark.vercel.app/privacy" />
            <meta property="og:title" content="Privacy Policy — MoneyArk" />
            <meta property="og:description" content="We don't sell your data. Your finances stay on your device." />
        </Helmet>
        <motion.section 
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6 py-24 relative overflow-hidden"
        >
            <motion.header variants={staggerContainer} className="mb-24 space-y-6">
                <motion.div variants={fadeIn} className="flex items-center gap-4 text-primary-container font-mono text-xs tracking-widest uppercase mb-4">
                    <span className="w-12 h-px bg-primary-container"></span>
                    <span>Legal Framework v2.4</span>
                </motion.div>
                <motion.h1 variants={fadeIn} className="font-headline text-7xl md:text-9xl font-black leading-none tracking-tighter text-white">
                    Privacy <br/> & <span className="text-primary-container">Policy</span>
                </motion.h1>
                <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-8 border-t border-white/5">
                    <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-lg">
                        We believe in radical transparency. Our protocols are designed to protect your digital sovereignty while enabling seamless high-frequency fintech experiences.
                    </p>
                    <div className="flex flex-col justify-end gap-2 font-mono text-sm text-zinc-500">
                        <p>LAST UPDATED: <span className="text-primary-container">MARCH 20, 2026</span></p>
                        <p>STATUS: <span className="text-primary-container">COMPLIANT</span></p>
                    </div>
                </motion.div>
            </motion.header>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40">
                <motion.article variants={fadeIn} className="md:col-span-8 space-y-16">
                    {/* Section 1: Data Collection */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary-container font-mono text-sm mb-4 block">01</span>
                            <h2 className="font-headline text-3xl font-bold text-white tracking-tight">Information Collection</h2>
                        </div>
                        <div className="space-y-6 text-on-surface-variant leading-relaxed">
                            <p>To provide MoneyArk's high-fidelity financial features, we categorize collected data as follows:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-surface-container-low rounded-xl border border-white/5">
                                    <h3 className="font-headline font-bold text-white mb-2">User-Provided</h3>
                                    <p className="text-xs">Account credentials, transaction descriptions, budget categories, and manual entries.</p>
                                </div>
                                <div className="p-6 bg-surface-container-low rounded-xl border border-white/5">
                                    <h3 className="font-headline font-bold text-white mb-2">Automatically Collected</h3>
                                    <p className="text-xs">Device IDs, OS versions, access logs, and anonymous analytics to improve the app.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Retention & Rights */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary-container font-mono text-sm mb-4 block">02</span>
                            <h2 className="font-headline text-3xl font-bold text-white tracking-tight">Your Rights & Control</h2>
                        </div>
                        <div className="space-y-6 text-on-surface-variant leading-relaxed">
                            <p>Under GDPR and CCPA, you have significant rights regarding your data:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm text-primary-container">check_circle</span>
                                    <span>Right of Access: Request a copy of all data stored on your account.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm text-primary-container">check_circle</span>
                                    <span>Right of Erasure: Permanently delete your entire financial history.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-sm text-primary-container">check_circle</span>
                                    <span>Right of Withdrawal: Revoke data-sharing consent at any time.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 3: Third-Party Services */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary-container font-mono text-sm mb-4 block">03</span>
                            <h2 className="font-headline text-3xl font-bold text-white tracking-tight">Third-Party Disclosure</h2>
                        </div>
                        <div className="space-y-6 text-on-surface-variant leading-relaxed">
                            <p>Your sensitive financial data (like bank credentials for sync) is never stored on MoneyArk's servers. We use premium, industry-standard third-party processors that handle the secure handshake with your financial institutions. Payment for the "Universal Tier" is managed exclusively by the Apple App Store and Google Play Store.</p>
                        </div>
                    </div>
                </motion.article>

                <motion.aside variants={fadeIn} className="md:col-span-4 space-y-8">
                    <div className="bg-surface-container-lowest p-10 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-container/10 transition-colors"></div>
                        <h3 className="font-headline font-bold text-xl text-white mb-8 border-b border-white/5 pb-4">Data Protection</h3>
                        <div className="space-y-8 relative z-10">
                            <div className="flex gap-6">
                                <span className="text-primary-container font-mono text-sm">RE</span>
                                <div>
                                    <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-1">Retention</h4>
                                    <p className="text-[11px] text-zinc-400 leading-relaxed font-body">Access logs are purged every 3 months. Inactive account data is destroyed after 1 year of total inactivity.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="text-primary-container font-mono text-sm">EN</span>
                                <div>
                                    <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-1">Encryption</h4>
                                    <p className="text-[11px] text-zinc-400 leading-relaxed font-body">All on-device storage uses AES-256 protocols, with keys tied to your device biometric identity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.aside>
            </motion.div>
        </motion.section>
        </>
    );
};

export default Privacy;
