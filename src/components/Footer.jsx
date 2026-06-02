import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#050505] text-white pt-24 pb-24 relative overflow-hidden border-t border-white/5"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(212, 160, 23, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 160, 23, 0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* Background Ambient Glow Accents (Left and Right Corners) */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Left Bottom Architectural Blueprint Wireframe Graphic */}
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-no-repeat bg-contain opacity-[0.04] pointer-events-none select-none mix-blend-lighten" 
        style={{ 
          backgroundImage: "url('/assets/images/blueprint_pattern.png')", 
          backgroundPosition: 'left bottom' 
        }}
      />



      <div className="max-w-site mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          
          {/* Column 1: Branding & Logo */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,160,23,0.06)] hover:-translate-y-1 rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden flex flex-col gap-8 group/card">
            <Link to="/" className="inline-block group w-[180px]">
              <div className="w-[180px] h-[100px] bg-white border border-white/5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-glow overflow-hidden p-2.5">
                <img 
                  src="/assets/images/logo_v2.png" 
                  alt="Royal Construction & Contractors" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 font-inter text-[16px] md:text-[17px] leading-loose">
              our clients, our employees, and our community through our commitment to leadership, excellence in craft, and attention to detail.
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,160,23,0.06)] hover:-translate-y-1 rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden flex flex-col gap-8 group/card">
            <h4 className="font-poppins text-[18px] md:text-[20px] font-extrabold text-white uppercase tracking-wider relative after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-orange">
              Our Services
            </h4>
            <ul className="flex flex-col gap-5 text-white/80 font-inter text-[16px] md:text-[17px]">
              <li className="flex items-center gap-2.5 hover:text-orange transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                <Link to="/services">Residential Construction</Link>
              </li>
              <li className="flex items-center gap-2.5 hover:text-orange transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                <Link to="/services">Commercial Construction</Link>
              </li>
              <li className="flex items-center gap-2.5 hover:text-orange transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                <Link to="/services">Interior Architecture</Link>
              </li>
              <li className="flex items-center gap-2.5 hover:text-orange transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                <Link to="/services">Renovation & Strengthening</Link>
              </li>
              <li className="flex items-center gap-2.5 hover:text-orange transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                <Link to="/services">Landscape Design</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Contact */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,160,23,0.06)] hover:-translate-y-1 rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden flex flex-col gap-8 group/card">
            <h4 className="font-poppins text-[18px] md:text-[20px] font-extrabold text-white uppercase tracking-wider relative after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-orange">
              Our Contact
            </h4>
            <ul className="flex flex-col gap-6 text-white/80 font-inter text-[16px] md:text-[17px]">
              <li className="flex items-start gap-3.5">
                <MapPin className="w-[22px] h-[22px] text-orange flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Royal Complex, Meenakshi Amman Kovil Street, Maduranthakam - 603306
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone className="w-[22px] h-[22px] text-orange flex-shrink-0" />
                <a href="tel:+917305485051" className="hover:text-orange transition-colors">+91 73054 85051</a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail className="w-[22px] h-[22px] text-orange flex-shrink-0" />
                <a href="mailto:royalconstructiondm@gmail.com" className="hover:text-orange transition-colors truncate">
                  royalconstructiondm@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-auto">
              <span className="font-inter text-xs font-bold text-white uppercase tracking-wider mr-2">Follow Us:</span>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange hover:text-white transition-colors flex items-center justify-center text-white/80" aria-label="Facebook">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/royal_constructions_contractor/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange hover:text-white transition-colors flex items-center justify-center text-white/80" aria-label="Instagram">
                <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange hover:text-white transition-colors flex items-center justify-center text-white/80" aria-label="X (Twitter)">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4: Our News */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,160,23,0.06)] hover:-translate-y-1 rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden flex flex-col gap-8 group/card">
            <h4 className="font-poppins text-[18px] md:text-[20px] font-extrabold text-white uppercase tracking-wider relative after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-orange">
              Our News
            </h4>
            <div className="flex flex-col gap-6">
              {/* Blog Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-[90px] h-[72px] rounded-[10px] overflow-hidden bg-white/5 flex-shrink-0">
                  <img 
                    src="/assets/images/blog_construction_cost.png" 
                    alt="Blog Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Link 
                    to="/blog/cost-to-build-house-chennai" 
                    className="font-inter text-[15px] md:text-[16px] font-bold text-white/95 hover:text-orange transition-colors leading-snug line-clamp-2"
                  >
                    Exploring Construction Cost Estimation in 2026
                  </Link>
                  <span className="text-white/40 text-[13px] font-medium font-inter">12 January, 2026</span>
                </div>
              </div>

              {/* Blog Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-[90px] h-[72px] rounded-[10px] overflow-hidden bg-white/5 flex-shrink-0">
                  <img 
                    src="/assets/images/blog_kitchen_trends.png" 
                    alt="Blog Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Link 
                    to="/blog/modern-modular-kitchen-trends" 
                    className="font-inter text-[15px] md:text-[16px] font-bold text-white/95 hover:text-orange transition-colors leading-snug line-clamp-2"
                  >
                    10 Modern Modular Kitchen Design Trends
                  </Link>
                  <span className="text-white/40 text-[13px] font-medium font-inter">09 May, 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Option A: Premium Glowing Metallic gold/orange capsule tab */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#D4A017] to-[#FF6B00] text-black font-inter text-[11px] font-extrabold tracking-wider px-10 py-3.5 shadow-premium rounded-t-[20px] select-none text-center whitespace-nowrap hidden sm:flex items-center justify-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
        <span>COPYRIGHT {currentYear} - ALL RIGHTS RESERVED BY ROYAL CONSTRUCTION & CONTRACTORS</span>
      </div>
      
      {/* Fallback copyright layout for mobile screens */}
      <div className="w-full text-center text-white/40 font-inter text-xs mt-8 pt-6 border-t border-white/5 sm:hidden pb-6 px-6">
        Copyright {currentYear} - Royal Construction & Contractors
      </div>

    </footer>
  );
}
