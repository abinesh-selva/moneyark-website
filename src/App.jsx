import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component that matches the brand identity
const PageLoader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[9999]">
    <div className="relative">
      <img src="/logo.png" alt="MoneyArk" className="w-16 h-16 animate-pulse" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary-container/10 rounded-full overflow-hidden">
        <div className="w-full h-full bg-primary-container animate-loading-bar"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.8;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <HelmetProvider>
    <Router>
      <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden relative">
        <div className="mesh-gradient"></div>
        <div className="noise-overlay"></div>

        <Header scrolled={scrolled} />

        <main className="relative pt-32">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<RouteWrappers.ScrollToTop><Pricing /></RouteWrappers.ScrollToTop>} />
              <Route path="/privacy" element={<RouteWrappers.ScrollToTop><Privacy /></RouteWrappers.ScrollToTop>} />
              <Route path="/terms" element={<RouteWrappers.ScrollToTop><Terms /></RouteWrappers.ScrollToTop>} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <BottomNav scrolled={scrolled} />

        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
    </HelmetProvider>
  );
}

// Helper to scroll to top on route change
const RouteWrappers = {
  ScrollToTop: ({ children }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return children;
  }
};

export default App;
