import { Link, useLocation } from 'react-router-dom';

const Header = ({ scrolled }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
      <div className="wrapper py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Zentally" className="w-9 h-9" />
            <span className="text-2xl font-black text-[#FBFFFA] tracking-tighter">Zentally</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`${isActive('/') ? 'text-[#00FFC2]' : 'text-[#FBFFFA]/60'} font-bold transition-all duration-200 hover:text-[#00FFC2]`}>Home</Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'text-[#00FFC2]' : 'text-[#FBFFFA]/60 hover:text-[#00FFC2]'} transition-colors duration-300`}>Free</Link>
          <Link to="/privacy" className={`${isActive('/privacy') ? 'text-[#00FFC2]' : 'text-[#FBFFFA]/60 hover:text-[#00FFC2]'} transition-colors duration-300`}>Privacy</Link>
          <Link to="/terms" className={`${isActive('/terms') ? 'text-[#00FFC2]' : 'text-[#FBFFFA]/60 hover:text-[#00FFC2]'} transition-colors duration-300`}>Terms</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/zentally.apk" download="Zentally.apk" className="bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,255,194,0.4)] transition-all">Download</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
