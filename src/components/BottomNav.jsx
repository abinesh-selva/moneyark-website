import { Link, useLocation } from 'react-router-dom';

const BottomNav = ({ scrolled }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-2 p-1 sm:p-1.5 max-w-[calc(100vw-1rem)] bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,255,194,0.1)] transition-all duration-500 ${scrolled ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
      <Link
        className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-5 py-2 transition-all duration-300 ${isActive('/') ? 'bg-[#00FFC2] text-zinc-950' : 'text-zinc-400 hover:text-[#00FFC2]'}`}
        to="/"
      >
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="font-headline text-[10px] font-extrabold tracking-widest uppercase">Home</span>
      </Link>
      <Link
        className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-5 py-2 transition-all duration-300 ${isActive('/pricing') ? 'bg-[#00FFC2] text-zinc-950' : 'text-zinc-400 hover:text-[#00FFC2]'}`}
        to="/pricing"
      >
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: isActive('/pricing') ? "'FILL' 1" : "" }}>favorite</span>
        <span className="font-headline text-[10px] font-bold tracking-widest uppercase">Free</span>
      </Link>
      <Link
        className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-5 py-2 transition-all duration-300 ${isActive('/privacy') ? 'bg-[#00FFC2] text-zinc-950' : 'text-zinc-400 hover:text-[#00FFC2]'}`}
        to="/privacy"
      >
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: isActive('/privacy') ? "'FILL' 1" : "" }}>security</span>
        <span className="font-headline text-[10px] font-bold tracking-widest uppercase">Privacy</span>
      </Link>
      <a
        className="flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-5 py-2 transition-all duration-300 text-primary-container bg-primary-container/10 border border-primary-container/20 hover:bg-primary-container hover:text-zinc-950"
        href="/moneyark.apk"
        download="MoneyArk.apk"
      >
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
        <span className="font-headline text-[10px] font-bold tracking-widest uppercase">Download</span>
      </a>
    </nav>
  );
};

export default BottomNav;
