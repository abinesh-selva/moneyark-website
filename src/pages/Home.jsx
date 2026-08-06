import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useCurrency } from '../hooks/useCurrency';
import { useAppStats } from '../hooks/useAppStats';
import DownloadButton from '../components/DownloadButton';
import RatingSection from '../components/RatingSection';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

const APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "MoneyArk",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Track income, expenses, and budgets all in one place. MoneyArk keeps your finances clear, private, and always up to date.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "184"
  },
  "featureList": [
    "Gemini AI Finance Assistant",
    "Voice Expense Logging",
    "Bank SMS Auto-Scan",
    "Receipt OCR Scanner",
    "PDF Bank Statement Import",
    "Smart Budget Management",
    "Savings Goals Tracker",
    "Bill & Subscription Reminders",
    "Family & Shared Finances",
    "Calendar View",
    "Biometric App Lock",
    "Offline Storage & Cloud Sync",
    "15 Currency Support",
    "PDF & CSV Financial Reports"
  ]
};

const Home = () => {
    const { symbol } = useCurrency();
    const { downloads, avgRating, totalRatings } = useAppStats();
    return (
        <>
            <Helmet>
                <title>MoneyArk — Money Manager & Personal Finance Tracker</title>
                <meta name="description" content={`The easiest way to master your assets. MoneyArk is a free Android money manager with ${downloads || "growing"} downloads. Track expenses, manage budgets, and analyze your finances with asset management features.`} />
                <meta name="keywords" content="money manager, expense tracker, personal finance app, asset management, budget tracker, free finance manager, moneyark android, monthly budget, ai finance assistant, voice expense tracker, sms expense scan, receipt scanner app, smart budget planner, ai budget app" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://moneyark.vercel.app/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://moneyark.vercel.app/" />
                <meta property="og:title" content="MoneyArk — Money Manager & Expense Tracker" />
                <meta property="og:description" content="Master the flow of your assets. Track income, expenses, and manage budgets in one secure, private app for Android." />
                <meta property="og:image" content="/og-image.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MoneyArk — Personal Finance Manager" />
                <meta name="twitter:description" content="Track expenses and manage budgets on the go. master the flow of your assets." />
                <meta name="twitter:image" content="/og-image.png" />

                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(APP_SCHEMA)}</script>
            </Helmet>

            {/* Section 1: Hero Portal */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="wrapper flex flex-col md:flex-row items-center gap-12 min-h-[819px] overflow-hidden pt-8"
            >
                <div className="md:w-1/2 space-y-8">
                    <motion.h1 
                      variants={fadeIn}
                      className="text-6xl md:text-8xl font-headline font-black leading-[0.9] tracking-tighter"
                    >
                        MASTER THE <br/>
                        <span className="text-gradient">FLOW</span> OF <br/>
                        YOUR ASSETS
                    </motion.h1>
                    <motion.p 
                      variants={fadeIn}
                      className="text-on-surface-variant max-w-md text-lg leading-relaxed"
                    >
                        Track income, expenses, and budgets all in one place. MoneyArk keeps your finances clear, private, and always up to date.
                    </motion.p>
                    <motion.div variants={fadeIn} className="pt-4 flex flex-col sm:flex-row gap-4">
                        <DownloadButton className="group flex items-center gap-3 bg-surface-container-high border border-white/10 hover:border-primary-container/50 px-5 py-3 rounded-xl transition-all">
                            <span className="material-symbols-outlined text-2xl text-primary-container flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>android</span>
                            <div className="text-left">
                                <div className="text-[9px] font-label uppercase tracking-widest text-on-surface-variant">Direct Download</div>
                                <div className="text-sm font-headline font-bold text-on-surface">Download APK</div>
                            </div>
                        </DownloadButton>
                    </motion.div>

                    <motion.div variants={fadeIn} className="flex items-center gap-6 pt-2">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map(s => (
                                    <span key={s} className={`material-symbols-outlined text-sm ${s <= Math.round(avgRating || 4) ? 'text-primary-container' : 'text-on-surface-variant/30'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <span className="text-[10px] font-label text-on-surface-variant mt-0.5">
                                {totalRatings > 0 ? `${(avgRating).toFixed(1)} · ${totalRatings} ratings` : 'Be the first to rate'}
                            </span>
                        </div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="font-headline font-black text-base text-on-surface">
                                {downloads > 0 ? `${downloads >= 1000 ? (downloads/1000).toFixed(1)+'K' : downloads}` : '—'}
                            </span>
                            <span className="text-[10px] font-label text-on-surface-variant">Downloads</span>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="md:w-1/2 relative"
                >
                    <div className="relative w-full max-w-[400px] mx-auto perspective-1000">
                        {/* Phone Mockup Container */}
                        <div className="glass-card rounded-[3rem] p-4 border border-white/10 shadow-2xl rotate-3 transform-gpu">
                            <div className="bg-surface-container-lowest rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
                                {/* In-App Display */}
                                <div className="p-6 space-y-6">
                                    <div className="flex justify-between items-center pt-4">
                                        <span className="text-xs font-label text-on-surface-variant">TOTAL BALANCE</span>
                                        <span className="material-symbols-outlined text-primary-fixed">contactless</span>
                                    </div>
                                    <div className="font-data text-4xl font-bold tracking-tighter">{symbol}84,320.00</div>
                                    <div className="h-32 w-full relative">
                                        <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(240,160,145,0.4)]" viewBox="0 0 100 40">
                                            <path d="M0 35 Q 20 5, 40 25 T 80 10 T 100 5" fill="none" stroke="#F0A091" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs text-on-surface-variant uppercase tracking-widest border-b border-white/5 pb-2">
                                            <span>Recent Activity</span>
                                            <span>Today</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold">Play Store</div>
                                                    <div className="text-[10px] text-on-surface-variant">Hardware</div>
                                                </div>
                                            </div>
                                            <div className="font-data text-sm text-on-tertiary-container">-{symbol}1,299.00</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-sm">payments</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold">Stripe Payout</div>
                                                    <div className="text-[10px] text-on-surface-variant">Income</div>
                                                </div>
                                            </div>
                                            <div className="font-data text-sm text-primary-fixed">+{symbol}4,500.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Section 2: Trust Strip */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-full bg-surface-container-lowest/50 py-6 border-y border-white/5 mt-20"
            >
                <div className="wrapper">
                    <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap justify-center md:justify-between items-center gap-8"
                    >
                        <motion.div variants={fadeIn} className="flex items-center gap-3">
                            <div className="flex">
                                {[1,2,3,4,5].map(s => (
                                    <span key={s} className="material-symbols-outlined text-base text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <div>
                                <div className="font-headline font-black text-lg text-on-surface">{avgRating > 0 ? avgRating.toFixed(1) : '4.9'} Rating</div>
                                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">User Rating</div>
                            </div>
                        </motion.div>
                        <div className="w-px h-10 bg-white/5 hidden md:block"></div>
                        <motion.div variants={fadeIn} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                            <div>
                                <div className="font-headline font-black text-lg text-on-surface">Free Download</div>
                                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Android</div>
                            </div>
                        </motion.div>
                        <div className="w-px h-10 bg-white/5 hidden md:block"></div>
                        <motion.div variants={fadeIn} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                            <div>
                                <div className="font-headline font-black text-lg text-on-surface">Biometric Secure</div>
                                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Fingerprint & Face ID</div>
                            </div>
                        </motion.div>
                        <div className="w-px h-10 bg-white/5 hidden md:block"></div>
                        <motion.div variants={fadeIn} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>wifi_off</span>
                            <div>
                                <div className="font-headline font-black text-lg text-on-surface">Works Offline</div>
                                <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">No connection needed</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Section 3: App Screenshots Carousel */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="py-32 overflow-hidden"
            >
                <div className="wrapper mb-12">
                    <motion.div 
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                    >
                        <div>
                            <div className="inline-flex items-center gap-4 text-primary-container font-label text-xs tracking-widest uppercase mb-4">
                                <span className="w-12 h-px bg-primary-container"></span>
                                <span>Inside the App</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-headline font-black">See it in action</h2>
                        </div>
                        <p className="text-on-surface-variant text-sm max-w-xs">Every screen built for speed and clarity. No clutter, no confusion.</p>
                    </motion.div>
                </div>

                {/* Scrollable phone strip */}
                <div className="flex gap-8 px-8 overflow-x-auto pb-12 no-scrollbar scroll-smooth snap-x">
                    {[
                        { 
                            label: 'Dashboard', 
                            desc: 'Total balance at a glance', 
                            img: '/assets/dashboard.jpg' 
                        },
                        { 
                            label: 'History', 
                            desc: 'Deep transaction search', 
                            img: '/assets/history.jpg' 
                        },
                        { 
                            label: 'Budgets', 
                            desc: 'Category-specific limits', 
                            img: '/assets/budget.jpg' 
                        },
                        { 
                            label: 'Analytics', 
                            desc: 'Advanced spending charts', 
                            img: '/assets/analytics.jpg' 
                        }
                    ].map((screen, i) => (
                        <div key={screen.label} className="flex-shrink-0 w-[240px] md:w-[280px] snap-center">
                            <div className="relative group transition-all duration-700 hover:-translate-y-4">
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary-container/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative glass-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={screen.img} alt={screen.label} className="w-full aspect-[9/19] object-cover" />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm font-headline font-black uppercase tracking-tighter text-on-surface">{screen.label}</p>
                                <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest mt-1 opacity-60">{screen.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-[10px] font-label text-on-surface-variant/40 uppercase tracking-widest">← swipe to explore →</p>
            </motion.section>

            {/* Feature Bento Grid */}
            <section className="wrapper py-32">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">Features</h2>
                    <p className="text-on-surface-variant font-body">Built for clarity. Designed for control.</p>
                </motion.div>
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 md:grid-cols-10 gap-6"
                >
                    {/* Card 1 (60%) */}
                    <motion.div variants={fadeIn} className="md:col-span-6 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
                        <div className="z-10">
                            <h3 className="text-2xl font-headline font-bold mb-2">Real-time Sync</h3>
                            <p className="text-on-surface-variant text-sm max-w-xs">Your data moves as fast as you do. Encrypted and instantaneous across all nodes.</p>
                        </div>
                        <div className="flex items-center justify-center gap-8 py-12">
                            <span className="material-symbols-outlined text-4xl text-on-surface-variant">smartphone</span>
                            <div className="flex gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed/40 animate-pulse delay-75"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed/20 animate-pulse delay-150"></span>
                            </div>
                            <span className="material-symbols-outlined text-4xl text-primary-fixed">cloud</span>
                            <div className="flex gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed/20 animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed/40 animate-pulse delay-75"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse delay-150"></span>
                            </div>
                            <span className="material-symbols-outlined text-4xl text-on-surface-variant">laptop_mac</span>
                        </div>
                    </motion.div>
                    {/* Card 2 (40%) */}
                    <motion.div variants={fadeIn} className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between bg-surface-container-highest/20 group">
                        <div>
                            <h3 className="text-2xl font-headline font-bold mb-2">App Lock</h3>
                            <p className="text-on-surface-variant text-sm">Biometric fortress for your finances.</p>
                        </div>
                        <div className="relative flex justify-center py-8">
                            <span className="material-symbols-outlined text-8xl text-primary-container/20" style={{ fontVariationSettings: "'FILL' 1" }}>fingerprint</span>
                            <div className="absolute top-1/2 left-0 w-full h-px bg-primary-container/50 shadow-[0_0_15px_rgba(240,160,145,0.8)] animate-scan"></div>
                        </div>
                    </motion.div>
                    {/* Card 3 (30%) */}
                    <motion.div variants={fadeIn} className="md:col-span-3 glass-card rounded-xl p-8 flex flex-col justify-between border-primary-container/10">
                        <div>
                            <h3 className="text-2xl font-headline font-bold mb-2">Local First</h3>
                            <p className="text-on-surface-variant text-sm">SQLite-backed offline storage. Your data is always available, even without a connection.</p>
                        </div>
                        <div className="pt-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-white/5 hover:border-primary-container transition-all cursor-pointer">
                                <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                                <span className="text-[10px] font-label font-bold uppercase tracking-widest">Status: Offline-Ready</span>
                            </div>
                        </div>
                    </motion.div>
                    {/* Card 4 (70%) */}
                    <motion.div variants={fadeIn} className="md:col-span-7 glass-card rounded-xl p-8 flex flex-col justify-between bg-surface-container-high/10">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-headline font-bold mb-2">Reports & Analytics</h3>
                                <p className="text-on-surface-variant text-sm max-w-sm">Monthly summaries and trend analysis with interactive line, bar, pie, and area charts.</p>
                            </div>
                        </div>
                        <div className="h-40 w-full flex items-end gap-1 mt-8">
                            <div className="flex-1 bg-primary-container/20 h-1/2 rounded-t hover:h-2/3 transition-all duration-500"></div>
                            <div className="flex-1 bg-on-tertiary-container/20 h-1/3 rounded-t hover:h-1/2 transition-all duration-500"></div>
                            <div className="flex-1 bg-primary-container/20 h-3/4 rounded-t hover:h-full transition-all duration-500"></div>
                            <div className="flex-1 bg-on-tertiary-container/20 h-2/3 rounded-t hover:h-3/4 transition-all duration-500"></div>
                            <div className="flex-1 bg-primary-container/20 h-1/2 rounded-t hover:h-2/3 transition-all duration-500"></div>
                            <div className="flex-1 bg-on-tertiary-container/20 h-1/4 rounded-t hover:h-1/3 transition-all duration-500"></div>
                            <div className="flex-1 bg-primary-container/20 h-2/3 rounded-t hover:h-3/4 transition-all duration-500"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Smart & Automated — AI / Voice / SMS / Receipt / Budget Planner */}
            <section className="wrapper py-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16 max-w-2xl"
                >
                    <div className="inline-flex items-center gap-4 text-primary-container font-label text-xs tracking-widest uppercase mb-4">
                        <span className="w-12 h-px bg-primary-container"></span>
                        <span>Smart & Automated</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-headline font-black mb-4">AI that does the work for you</h2>
                    <p className="text-on-surface-variant font-body">Stop typing every expense. Let MoneyArk capture, categorize, and plan automatically.</p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 md:grid-cols-6 gap-6"
                >
                    {/* 1. Personal Finance AI — large hero card */}
                    <motion.div variants={fadeIn} className="md:col-span-4 glass-card rounded-2xl p-10 flex flex-col justify-between bg-primary-container/5 border-primary-container/20 relative overflow-hidden min-h-[320px]">
                        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/15 border border-primary-container/30 w-fit mb-6">
                                <span className="material-symbols-outlined text-sm text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">AI Coach</span>
                            </div>
                            <h3 className="text-3xl font-headline font-black mb-3">Personal Finance AI</h3>
                            <p className="text-on-surface-variant max-w-md leading-relaxed">Ask anything in plain English. <em>"How much did I spend on food this month?"</em> Your private AI assistant analyses up to 90 days of activity to answer instantly with full context.</p>
                        </div>
                        <div className="relative z-10 mt-8 space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-base text-on-surface-variant/60 mt-1">person</span>
                                <div className="flex-1 px-4 py-2.5 rounded-2xl rounded-tl-sm bg-surface-container-high/40 border border-white/5 text-sm text-on-surface-variant">
                                    Where am I overspending?
                                </div>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <div className="flex-1 px-4 py-2.5 rounded-2xl rounded-tr-sm bg-primary-container/15 border border-primary-container/30 text-sm text-primary-container max-w-md">
                                    Dining is up 32% vs. last month — mostly weekend takeout.
                                </div>
                                <span className="material-symbols-outlined text-base text-primary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Voice Tracking */}
                    <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container/10 border border-on-tertiary-container/25 w-fit mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-tertiary-container">Hands-Free</span>
                            </div>
                            <h3 className="text-2xl font-headline font-black mb-2">Voice Tracking</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Say <em>"Spent twenty on coffee"</em>. We do the rest.</p>
                        </div>
                        <div className="flex items-center justify-center pt-8">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-primary-container/20 blur-xl animate-pulse"></div>
                                <div className="relative w-20 h-20 rounded-full bg-primary-container/15 border border-primary-container/40 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. SMS Auto-Scan */}
                    <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/25 w-fit mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">Auto-Detect</span>
                            </div>
                            <h3 className="text-2xl font-headline font-black mb-2">SMS Auto-Scan</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Bank & UPI alerts logged the moment they arrive — zero manual entry.</p>
                        </div>
                        <div className="mt-6 space-y-2">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-high/40 border border-white/5">
                                <span className="material-symbols-outlined text-sm text-on-surface-variant/60">sms</span>
                                <span className="text-[10px] font-mono text-on-surface-variant/80 truncate">Debited ₹450 to Cafe...</span>
                                <span className="material-symbols-outlined text-sm text-primary-container ml-auto" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-container/10 border border-primary-container/30">
                                <span className="material-symbols-outlined text-sm text-primary-container">sms</span>
                                <span className="text-[10px] font-mono text-primary-container truncate">Credited ₹50,000 Salary...</span>
                                <span className="material-symbols-outlined text-sm text-primary-container ml-auto" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. Receipt Scanner */}
                    <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container/10 border border-on-tertiary-container/25 w-fit mb-6">
                                <span className="material-symbols-outlined text-sm text-on-tertiary-container">document_scanner</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-tertiary-container">Vision AI</span>
                            </div>
                            <h3 className="text-2xl font-headline font-black mb-2">Receipt Scanner</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Snap any receipt. Vendor, amount, and date are parsed in seconds.</p>
                        </div>
                        <div className="mt-6 flex items-center justify-center">
                            <div className="relative w-24 h-32 rounded-lg bg-surface-container-high/40 border border-white/10 overflow-hidden">
                                <div className="p-2 space-y-1">
                                    <div className="h-1 w-3/4 bg-on-surface-variant/30 rounded"></div>
                                    <div className="h-1 w-full bg-on-surface-variant/30 rounded"></div>
                                    <div className="h-1 w-2/3 bg-on-surface-variant/30 rounded"></div>
                                    <div className="h-1 w-5/6 bg-on-surface-variant/30 rounded"></div>
                                    <div className="h-1 w-1/2 bg-primary-container/60 rounded mt-2"></div>
                                </div>
                                <div className="absolute inset-x-0 top-1/2 h-px bg-primary-container/60 shadow-[0_0_10px_rgba(240,160,145,0.6)] animate-scan"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 5. Smart Budget Planner */}
                    <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/25 w-fit mb-6">
                                <span className="material-symbols-outlined text-sm text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">AI Suggested</span>
                            </div>
                            <h3 className="text-2xl font-headline font-black mb-2">Smart Budget Planner</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Realistic budgets generated from your last 90 days of spending.</p>
                        </div>
                        <div className="mt-6 space-y-2">
                            {[
                                { label: 'Food', pct: 70 },
                                { label: 'Transport', pct: 45 },
                                { label: 'Bills', pct: 88 },
                            ].map(b => (
                                <div key={b.label} className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-on-surface-variant/70">
                                        <span>{b.label}</span>
                                        <span>{b.pct}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-surface-container-high/40 overflow-hidden">
                                        <div className="h-full bg-primary-container rounded-full" style={{ width: `${b.pct}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 6. PDF Bank Statement Import */}
                    <motion.div variants={fadeIn} className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between min-h-[280px]">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container/10 border border-on-tertiary-container/25 w-fit mb-6">
                                <span className="material-symbols-outlined text-sm text-on-tertiary-container">picture_as_pdf</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-tertiary-container">PDF Parser</span>
                            </div>
                            <h3 className="text-2xl font-headline font-black mb-2">PDF Statement Import</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Parse bank statements directly from PDF files with automatic entry extraction.</p>
                        </div>
                        <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-high/40 border border-white/5">
                            <span className="material-symbols-outlined text-xl text-primary-container">description</span>
                            <div className="flex-1 truncate text-xs font-mono text-on-surface-variant">Bank_Statement.pdf</div>
                            <span className="text-[10px] font-label text-primary-container font-bold uppercase">Parsed</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Zig-Zag Feature Rows */}
            <section className="wrapper py-8 space-y-6">

                {/* Row 1 — Calendar View: Visual LEFT, Text RIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-container/8 rounded-full blur-3xl group-hover:bg-primary-container/15 transition-all duration-700 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row items-stretch min-h-[280px]">
                        {/* Visual */}
                        <div className="md:w-1/2 bg-surface-container-lowest/60 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
                            <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
                                {['M','T','W','T','F','S','S'].map((d,i) => (
                                    <div key={i} className="text-[9px] font-label font-bold uppercase text-on-surface-variant/40">{d}</div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-1.5">
                                {[...Array(28)].map((_,i) => {
                                    const day = i + 1;
                                    const isToday = day === 15;
                                    const hasEntry = [3,7,10,18,22,25].includes(day);
                                    return (
                                        <div key={i} className={`h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300
                                            ${isToday ? 'bg-primary-container text-background shadow-[0_0_16px_rgba(240,160,145,0.6)]' :
                                            hasEntry ? 'bg-primary-container/15 text-primary-container border border-primary-container/30' :
                                            'bg-surface-container-high/20 text-on-surface-variant/40'}`}>
                                            {day}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/25 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">Day-by-Day</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-headline font-black mb-3">Calendar View</h3>
                                <p className="text-on-surface-variant leading-relaxed">Navigate your entire transaction history on a full month calendar. Tap any day to see exactly what moved — income, expenses, and transfers at a glance.</p>
                            </div>
                            <div className="flex items-center gap-3 text-primary-container/60">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest">Full Month View</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Row 2 — Smart Filters: Text LEFT, Visual RIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-on-tertiary-container/8 rounded-full blur-3xl group-hover:bg-on-tertiary-container/15 transition-all duration-700 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[280px]">
                        {/* Visual */}
                        <div className="md:w-1/2 bg-surface-container-lowest/60 p-10 flex flex-col justify-center gap-4 border-b md:border-b-0 md:border-l border-white/5">
                            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-high/60 border border-white/8">
                                <span className="material-symbols-outlined text-base text-on-surface-variant/50">search</span>
                                <span className="text-sm text-on-surface-variant/40 font-label flex-1">Search transactions...</span>
                                <span className="material-symbols-outlined text-base text-on-surface-variant/30">tune</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { label: 'Income', active: true, color: 'primary-container' },
                                    { label: 'Expense', active: false },
                                    { label: 'This Month', active: true, color: 'primary-container' },
                                    { label: 'Food', active: false },
                                    { label: 'Salary', active: true, color: 'primary-container' },
                                    { label: 'Bills', active: false },
                                ].map(tag => (
                                    <span key={tag.label} className={`px-3 py-1.5 rounded-full text-[10px] font-label font-bold uppercase tracking-widest
                                        ${tag.active ? 'bg-primary-container/20 border border-primary-container/50 text-primary-container' : 'bg-surface-container-high/40 border border-white/5 text-on-surface-variant/50'}`}>
                                        {tag.active && '✓ '}{tag.label}
                                    </span>
                                ))}
                            </div>
                            <div className="space-y-2 mt-1">
                                {['+₹4,500 Salary', '+₹342 Dividends'].map(tx => (
                                    <div key={tx} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-primary-container/8 border border-primary-container/15">
                                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                                        <span className="text-xs font-label text-primary-container/80">{tx}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container/10 border border-on-tertiary-container/25 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-tertiary-container">Precision Search</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-headline font-black mb-3">Smart Filters</h3>
                                <p className="text-on-surface-variant leading-relaxed">Filter your transactions by date range, category, account, or amount. Find any entry in seconds — no matter how large your history grows.</p>
                            </div>
                            <div className="flex items-center gap-3 text-on-tertiary-container/60">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest">Instant Results</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Row 3 — Theme Switcher: Visual LEFT, Text RIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                    <div className="absolute top-0 left-1/2 w-80 h-40 bg-white/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row items-stretch min-h-[280px]">
                        {/* Visual */}
                        <div className="md:w-1/2 bg-surface-container-lowest/60 p-10 flex items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-white/5">
                            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900 border-2 border-primary-container shadow-[0_0_30px_rgba(240,160,145,0.25)] flex-1 cursor-pointer">
                                <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>dark_mode</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">Dark</span>
                                <span className="text-[8px] text-primary-container/50 font-label">Active</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-100/10 border border-white/10 flex-1 cursor-pointer hover:border-white/25 transition-all">
                                <span className="material-symbols-outlined text-3xl text-white/50" style={{ fontVariationSettings: "'FILL' 1" }}>light_mode</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-white/30">Light</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 flex-1 cursor-pointer hover:border-white/15 transition-all">
                                <span className="material-symbols-outlined text-3xl text-on-surface-variant/50" style={{ fontVariationSettings: "'FILL' 1" }}>brightness_auto</span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface-variant/30">System</span>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Appearance</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-headline font-black mb-3">Theme Switcher</h3>
                                <p className="text-on-surface-variant leading-relaxed">Dark, Light, or System — switch your visual environment in one tap. The app adapts instantly, remembering your preference across every session.</p>
                            </div>
                            <div className="flex items-center gap-3 text-on-surface-variant/50">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest">3 Modes</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Row 4 — Multi-Currency: Text LEFT, Visual RIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl overflow-hidden relative group bg-primary-container/5 border-primary-container/20"
                >
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all duration-700 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[280px]">
                        {/* Visual */}
                        <div className="md:w-1/2 bg-surface-container-lowest/40 p-10 flex flex-col justify-center gap-3 border-b md:border-b-0 md:border-l border-primary-container/10">
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { flag: '🇺🇸', code: 'USD', sym: '$' },
                                    { flag: '🇪🇺', code: 'EUR', sym: '€' },
                                    { flag: '🇬🇧', code: 'GBP', sym: '£' },
                                    { flag: '🇮🇳', code: 'INR', sym: '₹' },
                                    { flag: '🇦🇪', code: 'AED', sym: 'د.إ' },
                                    { flag: '🇯🇵', code: 'JPY', sym: '¥' },
                                ].map((c, i) => (
                                    <div key={c.code} className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300
                                        ${i === 3 ? 'bg-primary-container/20 border-primary-container/50 shadow-[0_0_12px_rgba(240,160,145,0.2)]' : 'bg-surface-container-high/30 border-primary-container/10 group-hover:border-primary-container/20'}`}>
                                        <span className="text-xl">{c.flag}</span>
                                        <div>
                                            <div className="text-xs font-label font-bold text-primary-container">{c.code}</div>
                                            <div className="text-[10px] text-on-surface-variant/50">{c.sym}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-center gap-2 pt-1">
                                <div className="h-px flex-1 bg-primary-container/15"></div>
                                <span className="text-[9px] font-label font-bold uppercase tracking-[0.2em] text-primary-container/40">+ 9 more</span>
                                <div className="h-px flex-1 bg-primary-container/15"></div>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/15 border border-primary-container/30 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">15 Currencies</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-headline font-black mb-3">Multi-Currency</h3>
                                <p className="text-on-surface-variant leading-relaxed">Automatically detected from your location on first launch. Switch between 15 global currencies anytime — all formatting and symbols update instantly.</p>
                            </div>
                            <div className="flex items-center gap-3 text-primary-container/60">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>currency_exchange</span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest">Auto-Detected</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Row 5 — Savings Goals & Bill Reminders: Visual LEFT, Text RIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                    <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary-container/8 rounded-full blur-3xl group-hover:bg-primary-container/15 transition-all duration-700 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row items-stretch min-h-[280px]">
                        {/* Visual */}
                        <div className="md:w-1/2 bg-surface-container-lowest/60 p-10 flex flex-col justify-center gap-4 border-b md:border-b-0 md:border-r border-white/5">
                            <div className="p-4 rounded-xl bg-surface-container-high/40 border border-white/5 space-y-2">
                                <div className="flex justify-between items-center text-xs font-headline font-bold">
                                    <span>Emergency Fund Goal</span>
                                    <span className="text-primary-container">{symbol}5,000 / {symbol}10,000</span>
                                </div>
                                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-full bg-primary-container rounded-full w-1/2"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/30 border border-white/5 text-xs">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary-container">notifications_active</span>
                                    <div>
                                        <div className="font-bold">Electric Bill Due</div>
                                        <div className="text-[10px] text-on-surface-variant/60">In 3 days • {symbol}120.00</div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-label font-bold text-primary-container uppercase bg-primary-container/10 px-2 py-1 rounded">Reminder On</span>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/25 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary-container">Goals & Bills</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-headline font-black mb-3">Savings & Reminders</h3>
                                <p className="text-on-surface-variant leading-relaxed">Set up savings goals with visual target tracking and deadline counters. Never miss a recurring bill with automated local notifications and payment status tracking.</p>
                            </div>
                            <div className="flex items-center gap-3 text-primary-container/60">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>savings</span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest">Automated Tracking</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Row 6 — Family Finances & PDF Statement Export: Text LEFT, Visual RIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-on-tertiary-container/8 rounded-full blur-3xl group-hover:bg-on-tertiary-container/15 transition-all duration-700 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[280px]">
                        {/* Visual */}
                        <div className="md:w-1/2 bg-surface-container-lowest/60 p-10 flex flex-col justify-center gap-4 border-b md:border-b-0 md:border-l border-white/5">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high/40 border border-white/5">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl text-primary-container">groups</span>
                                    <div>
                                        <div className="text-xs font-headline font-bold">Family Budget Shared</div>
                                        <div className="text-[10px] text-on-surface-variant/60">Household Expenses</div>
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-bold text-primary-container">Active</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-primary-container/10 border border-primary-container/25">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-xl text-primary-container">picture_as_pdf</span>
                                    <div>
                                        <div className="text-xs font-headline font-bold text-primary-container">PDF Statement Export</div>
                                        <div className="text-[10px] text-primary-container/70">Branded Monthly Report</div>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-lg text-primary-container">download</span>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center gap-6 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-tertiary-container/10 border border-on-tertiary-container/25 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
                                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-on-tertiary-container">Shared & Exportable</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-headline font-black mb-3">Family & Export Reports</h3>
                                <p className="text-on-surface-variant leading-relaxed">Manage joint family finances with member contribution breakdowns. Generate branded PDF financial statements or export raw CSV data anytime.</p>
                            </div>
                            <div className="flex items-center gap-3 text-on-tertiary-container/60">
                                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>file_download</span>
                                <span className="text-xs font-label font-bold uppercase tracking-widest">PDF & CSV Ready</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </section>

            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="wrapper py-32"
            >
                <div className="mb-16 text-center">
                    <motion.div 
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-4 text-primary-container font-label text-xs tracking-widest uppercase mb-6"
                    >
                        <span className="w-12 h-px bg-primary-container"></span>
                        <span>Simple by Design</span>
                        <span className="w-12 h-px bg-primary-container"></span>
                    </motion.div>
                    <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-headline font-black mb-4">How It Works</motion.h2>
                    <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-on-surface-variant font-body max-w-md mx-auto">Get full control of your finances in three steps. No setup headaches.</motion.p>
                </div>
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                >
                    {/* Connector line (desktop only) */}
                    <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary-container/10 via-primary-container/50 to-primary-container/10"></div>
                    {/* Step 1 */}
                    <motion.div variants={fadeIn} className="glass-card rounded-xl p-8 flex flex-col items-center text-center gap-6 relative">
                        <div className="w-16 h-16 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-2xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                        </div>
                        <div className="absolute top-7 left-8 font-headline font-black text-6xl text-white/5 select-none">01</div>
                        <div>
                            <h3 className="text-xl font-headline font-bold mb-2">Create Your Account</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Sign up with email or Google in seconds. Your profile is secured from day one.</p>
                        </div>
                    </motion.div>
                    {/* Step 2 */}
                    <motion.div variants={fadeIn} className="glass-card rounded-xl p-8 flex flex-col items-center text-center gap-6 relative bg-primary-container/5 border-primary-container/20">
                        <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary-container/50 flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-2xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>add_card</span>
                        </div>
                        <div className="absolute top-7 left-8 font-headline font-black text-6xl text-white/5 select-none">02</div>
                        <div>
                            <h3 className="text-xl font-headline font-bold mb-2">Log Your Transactions</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Add income and expenses with categories, accounts, and notes. Fast and frictionless.</p>
                        </div>
                    </motion.div>
                    {/* Step 3 */}
                    <motion.div variants={fadeIn} className="glass-card rounded-xl p-8 flex flex-col items-center text-center gap-6 relative">
                        <div className="w-16 h-16 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center relative z-10">
                            <span className="material-symbols-outlined text-2xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                        </div>
                        <div className="absolute top-7 left-8 font-headline font-black text-6xl text-white/5 select-none">03</div>
                        <div>
                            <h3 className="text-xl font-headline font-bold mb-2">Track & Analyse</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">View monthly reports, trend charts, and budget progress. Stay ahead of your money.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Rating & Stats Section */}
            <RatingSection />

            {/* Section 5: Final CTA */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="wrapper py-32 overflow-hidden"
            >
                <div className="glass-card rounded-xl p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-5xl md:text-7xl font-headline font-black mb-8 relative z-10 leading-tight"
                    >
                        Your finances. <br/>
                        <span className="text-gradient">Finally in focus.</span>
                    </motion.h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                        <DownloadButton className="flex items-center gap-3 bg-on-surface text-background px-6 py-3 rounded-xl font-headline font-bold hover:bg-primary transition-all">
                            <span className="material-symbols-outlined text-xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>android</span>
                            <div className="text-left">
                                <div className="text-[9px] font-label uppercase tracking-widest opacity-60">Direct Download</div>
                                <div className="text-sm font-headline font-bold">Download APK</div>
                            </div>
                        </DownloadButton>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Home;
