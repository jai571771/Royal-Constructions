import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import { useRef } from 'react';
import Lenis from 'lenis';

// Smooth Scroll Wrapper using Lenis
function SmoothScrollWrapper({ children }) {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <SmoothScrollWrapper>
        {/* Global Navigation Header */}
        <Navbar />
        
        {/* Main Routed Content */}
        <main className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Fallback route */}
            <Route path="*" element={
              <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="font-poppins text-3xl font-extrabold text-black mb-4">Page Not Found</h2>
                <p className="font-inter text-black/55 text-sm mb-6">The page you are looking for does not exist.</p>
                <a href="/" className="btn-primary text-sm font-semibold">Back to Home</a>
              </div>
            } />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Elements & CTA Funnels */}
        <FloatingWhatsApp />
        <MobileStickyBar />
      </SmoothScrollWrapper>
    </Router>
  );
}
