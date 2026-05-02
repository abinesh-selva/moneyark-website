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

const Terms = () => {
    return (
        <>
        <Helmet>
            <title>Terms & Conditions — Zentally</title>
            <meta name="description" content="Read Zentally's Terms and Conditions of Use. Understand your rights and responsibilities when using our personal finance management software." />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://zentally.app/terms" />
        </Helmet>
        <motion.section 
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 py-24 relative overflow-hidden"
        >
            <motion.header variants={staggerContainer} className="mb-24 space-y-6 text-center">
                <motion.div variants={fadeIn} className="inline-flex items-center gap-4 text-primary-container font-mono text-xs tracking-widest uppercase mb-4">
                    <span className="w-12 h-[1px] bg-primary-container"></span>
                    <span>Service Agreement</span>
                    <span className="w-12 h-[1px] bg-primary-container"></span>
                </motion.div>
                <motion.h1 variants={fadeIn} className="font-headline text-5xl md:text-7xl font-black leading-none tracking-tighter text-white">
                    Terms of <span className="text-primary-container">Service</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-sm font-mono text-zinc-500 uppercase tracking-widest pt-4">
                    Last Updated: March 20, 2026
                </motion.p>
            </motion.header>

            <motion.div variants={staggerContainer} className="space-y-16">
                <motion.section variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-white">1. Acceptance of Terms</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        By accessing or using Zentally ("the Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the Service. Zentally is a personal finance management tool developed to provide architectural clarity to your finances.
                    </p>
                </motion.section>

                <motion.section variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-white">2. User Accounts</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        To access certain features, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We reserve the right to refuse service or terminate accounts at our sole discretion.
                    </p>
                </motion.section>

                <motion.section variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-white">3. Service Provision & Modifications</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        Zentally provides finance tracking software. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with or without notice. For significant changes, we will attempt to provide a notice period of at least 7 days through app-banner or email.
                    </p>
                </motion.section>

                <motion.section variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-white">4. Intellectual Property</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        The Service and its original content, features, and functionality (including but not limited to all software, UI design, code, and branding) are and will remain the exclusive property of Zentally and its licensors. Our design system and "Digital Architect" aesthetic are protected by copyright and intellectual property laws.
                    </p>
                </motion.section>

                <motion.section variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-white">5. Limitation of Liability</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        In no event shall Zentally, nor its directors or employees, be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Service. This includes data loss, financial errors, or service interruptions. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
                    </p>
                </motion.section>

                <motion.section variants={fadeIn} className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-white">6. Governing Law</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Zentally operates, without regard to its conflict of law provisions. Any legal disputes shall be handled within local courts designated by Zentally.
                    </p>
                </motion.section>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-24 pt-12 border-t border-white/5 text-center">
                <p className="text-zinc-500 text-sm">Have questions about our terms? Contact us at legal@zentally.app</p>
            </motion.div>
        </motion.section>
        </>
    );
};

export default Terms;
