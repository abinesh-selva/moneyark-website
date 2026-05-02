import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-t-2 border-primary-container animate-spin"></div>
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
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <BottomNav scrolled={scrolled} />
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
