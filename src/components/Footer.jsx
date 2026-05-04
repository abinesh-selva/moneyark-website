import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative w-full pb-24 overflow-hidden mt-auto">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[140px] -translate-y-1/2 opacity-50"></div>
            <div className="wrapper relative z-10">
                {/* Footer Bottom */}
                <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="font-mono-premium text-[11px] text-on-primary/40 uppercase tracking-[0.2em]">
                            Copyright © {new Date().getFullYear()} MONEYARK. All rights reserved
                        </p>
                        <div className="flex gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary-container/20"></span>
                            <span className="w-1 h-1 rounded-full bg-primary-container/40"></span>
                            <span className="w-1 h-1 rounded-full bg-primary-container/60"></span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
                        <Link className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" to="/">Home</Link>
                        <Link className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" to="/pricing">Pricing</Link>
                        <Link className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" to="/faq">FAQ</Link>
                        <Link className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" to="/privacy">Privacy</Link>
                        <Link className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" to="/terms">Terms</Link>
                        <Link className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" to="/account-deletion">Delete Account</Link>
                        <a className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-primary/30 hover:text-primary-container transition-colors" href="https://twitter.com/moneyark">Twitter</a>
                    </div>
                </div>
            </div>
            {/* Giant Brand Wordmark */}
            <div className="relative w-full overflow-hidden mt-12 select-none pointer-events-none">
                <p className="text-6xl md:text-9xl lg:text-[230px] font-headline font-black leading-none tracking-tighter text-center whitespace-nowrap bg-gradient-to-b from-on-primary/10 to-transparent bg-clip-text text-transparent">
                    MONEYARK
                </p>
            </div>
        </footer>
    );
};

export default Footer;
