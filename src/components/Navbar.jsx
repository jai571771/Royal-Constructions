import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowUpRight, MapPin, Clock, Mail, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setSidebarOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 max-w-site mx-auto px-4 md:px-6 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'top-3' : 'top-6'
      }`}>
        {/* Floating White Pill Container */}
        <div className="w-full bg-white rounded-full h-[72px] pl-6 pr-2.5 flex items-center justify-between shadow-premium border border-black/5 pointer-events-auto">
          
          {/* Left Block: Logo */}
          <div className="flex items-center">
            {/* Logo Image */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <div className="w-[145px] h-[72px] flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden p-1.5">
                <img 
                  src="/assets/images/logo_v2.png" 
                  alt="Royal Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Center Block: Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-inter text-xs md:text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 hover:text-orange ${
                    isActive ? 'text-orange font-extrabold' : 'text-black/85 font-bold'
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Block: Search + CTA + Menu Grid */}
          <div className="flex items-center gap-3">


            {/* CTA Button */}
            <Link
              to="/contact"
              state={{ scrollContactForm: true }}
              className="hidden md:flex items-center h-[52px] bg-orange hover:bg-black text-white rounded-full font-inter text-[12px] font-extrabold tracking-wider pl-6 pr-2 transition-all duration-300 shadow-glow hover:shadow-none select-none flex-shrink-0 group"
            >
              <span>GET A QUOTE</span>
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center ml-4 transition-colors group-hover:bg-orange">
                <ArrowUpRight className="w-[18px] h-[18px] text-white" />
              </div>
            </Link>

            {/* Grid Button Menu */}
            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsOpen(!isOpen);
                } else {
                  setSidebarOpen(!sidebarOpen);
                }
              }}
              className="w-12 h-12 bg-black text-white hover:bg-orange rounded-full flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 shadow-soft focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="1.5" />
                <circle cx="12" cy="6" r="1.5" />
                <circle cx="18" cy="6" r="1.5" />
                <circle cx="6" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="18" cy="12" r="1.5" />
                <circle cx="6" cy="18" r="1.5" />
                <circle cx="12" cy="18" r="1.5" />
                <circle cx="18" cy="18" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-black/10 rounded-2xl shadow-premium lg:hidden overflow-hidden p-6 animate-fade-in flex flex-col gap-4 pointer-events-auto z-50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-inter text-base font-bold transition-colors ${
                    isActive ? 'text-orange' : 'text-black/85 hover:text-orange'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="w-full h-[1px] bg-black/10 my-1" />
            <div className="flex flex-col gap-4">
              <a 
                href="tel:+917305485051" 
                className="flex items-center gap-2 font-inter text-sm font-bold text-black/80 hover:text-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-orange" />
                <span>+91 73054 85051</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full h-11 bg-orange hover:bg-black text-white rounded-full font-inter text-sm font-bold transition-colors flex items-center justify-center shadow-glow"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Slide-out Sidebar Panel (Desktop Overlay) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 pointer-events-auto animate-fade-in">
          {/* Blur backdrop overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          
          {/* Slide panel */}
          <div className="absolute top-0 right-0 h-full w-85 max-w-full bg-[#0b0b0b] border-l border-white/10 text-white p-8 flex flex-col justify-between shadow-premium z-50 animate-slide-in">
            <div>
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange flex items-center justify-center text-white transition-colors focus:outline-none"
                  aria-label="Close sidebar panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Logo */}
              <div className="w-[140px] h-[78px] bg-white border border-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-glow overflow-hidden p-2.5">
                <img 
                  src="/assets/images/logo_v2.png" 
                  alt="Royal Construction & Contractors" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Company Info */}
              <h3 className="font-poppins text-lg font-extrabold mb-3 text-white">Royal Construction & Contractors</h3>
              <p className="font-inter text-xs text-white/55 leading-relaxed mb-8">
                Chennai's premier design-and-build company delivering end-to-end villa construction, commercial hubs, modern renovations, and bespoke luxury interior designs.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 text-sm font-inter text-white/85 border-t border-white/5 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-white uppercase tracking-wider mb-1">Corporate Address</h5>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Royal Complex, Meenakshi Amman Kovil Street,<br />
                      Maduranthakam - 603306, TN, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-white uppercase tracking-wider mb-1">Call Channels</h5>
                    <a href="tel:+917305485051" className="hover:text-orange text-xs text-white/60 block transition-colors">+91 73054 85051</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-white uppercase tracking-wider mb-1">Email Queries</h5>
                    <a href="mailto:royalconstructiondm@gmail.com" className="hover:text-orange text-xs text-white/60 block transition-colors">
                      royalconstructiondm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-white uppercase tracking-wider mb-1">Business Hours</h5>
                    <p className="text-xs text-white/60">
                      Mon – Sat: 9:00 AM – 6:30 PM<br />
                      <span className="text-orange font-semibold">Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-white/5 pt-6 mt-8">
              <Link
                to="/contact"
                onClick={() => setSidebarOpen(false)}
                className="w-full h-12 bg-orange hover:bg-white hover:text-black text-white rounded-button font-inter text-sm font-bold flex items-center justify-center shadow-glow transition-all"
              >
                Schedule Site Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
