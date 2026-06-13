import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ChevronDown, CheckCircle2, Play, Users, Award, Calendar, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StatsCounter from '../components/StatsCounter';
import ProjectCard from '../components/ProjectCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CostEstimator from '../components/CostEstimator';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { blogData } from '../data/blogData';

// Reusable motion variants for section reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export default function Home() {
  const navigate = useNavigate();
  const [activeProjectTab, setActiveProjectTab] = useState('All');
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [email, setEmail] = useState('');
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      navigate('/contact', { state: { email: email.trim() } });
    } else {
      navigate('/contact');
    }
  };

  // FAQ Dataset
  const faqs = [
    { q: "What is the average construction cost per sq.ft in Chennai?", a: "The average residential construction cost varies between ₹1,800 to ₹2,500+ per sq.ft depending on concrete grades, structural design, tiling finishes, and location profiles (marshy soil vs. rocky strata)." },
    { q: "How long does it take to construct a 3,000 sq.ft villa?", a: "Generally, individual villas take between 10 to 14 months to construct. This includes design approvals, excavation, RCC structure framing, curing cycles, bricklaying, utility fittings, and interior finishes." },
    { q: "Do you provide custom interior designs with construction?", a: "Yes! We specialize in integrated design-and-build. Our interior design studio drafts custom false ceilings, custom modular kitchens, and woodwork blueprints that are executed in our own factory." },
    { q: "Is the initial consultation and quote generation free?", a: "Absolutely. We offer a free, no-obligation initial consultation. We'll audit your plot location, discuss requirements, and provide a rough budget estimate." },
    { q: "What materials do you use? Can we inspect them?", a: "We only use certified branded items (like Ramco/UltraTech cement, FE 550D TMT steel, Finolex wires, Kohler fixtures). We facilitate client inspections at concrete casting stages." },
    { q: "What warranty do you offer on new builds?", a: "We provide a comprehensive 10-year structural warranty on all residential projects and a 1-year general maintenance warranty covering plumbing, waterproofing, and electrical switches." }
  ];

  // Filtering projects
  const filteredProjects = activeProjectTab === 'All' 
    ? projectsData.slice(0, 3) 
    : projectsData.filter(p => p.category === activeProjectTab).slice(0, 3);

  // Testimonials Dataset
  const testimonials = [
    {
      name: "Er. Senthil Kumar",
      type: "Residential Build",
      stars: 5,
      review: "Building my villa with Royal Construction was seamless. Their transparency in material billing and strict adhesion to structural curing timelines impressed me. Absolute professionals.",
      img: "/assets/images/project_ecr_villa.png"
    },
    {
      name: "Mrs. Revathi Ramanan",
      type: "Home Interior",
      stars: 5,
      review: "The Scandinavian penthouse makeover in Anna Nagar exceeded our expectations. The factory-finish on our modular kitchen cabinets and quartz countertops is truly premium.",
      img: "/assets/images/project_scandic_penthouse.png"
    },
    {
      name: "Mr. Anand R.",
      type: "Commercial Office",
      stars: 5,
      review: "They managed our tech park HQ construction from soil excavation to final glass glazing. Delivered on time and helped secure municipal stability certs without issues.",
      img: "/assets/images/project_zenith_hq.png"
    }
  ];

  // Team Dataset
  const team = [
    { name: "Mr. Fazil Ahamed", role: "Managing Director & Founder", desc: "12+ years experience in structural engineering and premium project management.", img: "/assets/images/team_1.png" },
    { name: "Meenakshi Sundaram", role: "Head of Interior Design", desc: "Expert interior architect specialized in modular layouts and Scandinavian designs.", img: "/assets/images/team_2.png" },
    { name: "Er. Rajesh Kumar", role: "Senior Site Engineer", desc: "Directs site safety, foundation engineering, and concrete curing compliance.", img: "/assets/images/team_3.png" }
  ];

  // Masonry images for showcase
  const interiorShowcase = [
    { title: "Elegant Living Lounge", cat: "Home Interior", img: "/assets/images/project_scandic_penthouse.png" },
    { title: "Bespoke Modular Kitchen", cat: "Home Interior", img: "/assets/images/project_scandic_penthouse.png" },
    { title: "Sleek Executive Boardroom", cat: "Corporate Interior", img: "/assets/images/project_zenith_hq.png" },
    { title: "Modern Open Workspaces", cat: "Commercial Interior", img: "/assets/images/project_zenith_hq.png" },
    { title: "Double-Height Lounge", cat: "Home Interior", img: "/assets/images/project_ecr_villa.png" },
    { title: "Minimalist Master Bedroom", cat: "Home Interior", img: "/assets/images/project_scandic_penthouse.png" }
  ];

  return (
    <div className="overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 flex items-center bg-[#0B0B0B] overflow-hidden">
        {/* Background Image (Fully Visible as Original) with smooth crossfade shuffle */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/hero_bg_optimized.png" 
            alt="Luxury Villa Under Construction" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 animate-kenburns ${
              bgIndex === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img 
            src="/assets/images/hero_bg_completed.png" 
            alt="Completed Luxury Villa" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 animate-kenburns ${
              bgIndex === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>        {/* Content Container */}
        <div className="relative z-10 max-w-content mx-auto px-6 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl flex flex-col items-start text-left"
          >
            
            {/* Hiring/Consultation Badge */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-semibold text-white mb-6 select-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Chennai's Premier Builder</span>
              <span className="text-white/20">|</span>
              <span className="text-white/80">Book a Site Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/50" />
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              className="text-h1 text-white mb-8 max-w-[22ch]"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-block">We Use Expert Engineering&nbsp;</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-block">to Deliver&nbsp;</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-block text-orange">Stronger, Smarter&nbsp;</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-block">Construction in Chennai</motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-body text-white/70 mb-10 max-w-[50ch]"
            >
              From ECR to OMR, we've been Chennai's trusted builders for 10+ years—delivering on-time, budget-friendly projects with concrete-strength reliability.
            </motion.p>

            {/* Glassmorphic Consultation capsule */}
            <motion.form 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleConsultationSubmit} 
              className="relative flex flex-col sm:flex-row items-center p-2 rounded-[24px] sm:rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-premium max-w-lg mb-[60px] gap-2 w-full"
            >
              <div className="flex items-center gap-3 px-3 flex-grow w-full">
                <Mail className="w-5 h-5 text-white/40 flex-shrink-0" />
                <input 
                  type="email"
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none outline-none text-white text-sm placeholder-white/40 w-full focus:ring-0 py-2"
                />
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 h-12 bg-white hover:bg-orange hover:text-white text-black font-inter font-semibold text-sm rounded-full transition-all duration-300 ease-in-out flex-shrink-0 flex items-center justify-center gap-2 shadow-soft hover:-translate-y-0.5"
              >
                Book a Consultation
              </button>

              {/* Hand-drawn SVG Arrow pointing at button */}
              <div className="absolute right-[-110px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
                <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60">
                  {/* Stem Curve */}
                  <path d="M 92 10 C 84 -2 72 0 68 18 C 65 32 52 34 46 22 C 40 8 53 4 55 18 C 56 28 30 36 10 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Arrowhead Outline */}
                  <path d="M 10 30 C 14 26 19 22 25 18 C 23.5 22 22 26.5 21 30 C 22 33.5 23.5 38 25 42 C 19 38 14 34 10 30 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  {/* Hatching Lines */}
                  <path d="M 13 27.5 L 14 32.5 M 15 26 L 17 34 M 17 24.5 L 19 35.5 M 19 22.8 L 21 37.2 M 21 21.2 L 23 38.8 M 23 19.6 L 24 28 M 23 40.4 L 24 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
            </motion.form>

            {/* Specialists Team Avatars */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8 select-none"
            >
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white/10">
                  <img src="/assets/images/team_1.png" alt="Mr. Fazil Ahamed" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white/10">
                  <img src="/assets/images/team_2.png" alt="Meenakshi Sundaram" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white/10">
                  <img src="/assets/images/team_3.png" alt="Er. Rajesh Kumar" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white/10 flex items-center justify-center bg-orange text-white text-xs font-bold">
                  +12
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-semibold text-white">15+ Construction Specialists</span>
                <span className="text-xs md:text-sm text-white/60">Dedicated to Your Project's Success</span>
              </div>
            </motion.div>

            {/* Rating metrics row */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-8 w-full max-w-lg pt-6 border-t border-white/10 mb-8 select-none"
            >
              {/* Google / Reviews.io Column */}
              <div>
                <div className="flex gap-0.5 mb-2 text-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                  ))}
                </div>
                <span className="block text-sm md:text-base font-bold text-white mb-1">4.9/5 (25k+ Reviews)</span>
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-[9px] font-inter">★</div>
                  <span className="text-xs tracking-wider uppercase text-white/70 font-bold font-inter">Reviews.io</span>
                </div>
              </div>

              {/* Trustpilot Column */}
              <div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4.5 h-4.5 bg-emerald-500 flex items-center justify-center rounded-[2px]">
                      <Star className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                  ))}
                </div>
                <span className="block text-sm md:text-base font-bold text-white mb-1">4.8/5 (54k+ Reviews)</span>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4.5 h-4.5 fill-emerald-500 text-emerald-500" />
                  <span className="text-xs tracking-wider uppercase text-white/70 font-bold font-inter">Trustpilot</span>
                </div>
              </div>
            </motion.div>

            {/* Grayscale Partner Logos */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-white/10 w-full select-none"
            >
              <span className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 block">
                Trusted by hundreds of property owners in Chennai
              </span>
              <div className="flex flex-wrap items-center gap-8 md:gap-10 opacity-55 hover:opacity-80 transition-opacity duration-300">
                {/* Ramco Cement typography logo */}
                <div className="text-white font-poppins font-extrabold text-base tracking-wider uppercase flex items-center gap-1.5">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 22,8.5 22,20 12,14 2,20 2,8.5" />
                  </svg>
                  <span>RAMCO</span>
                </div>
                {/* UltraTech logo style */}
                <div className="text-white font-poppins font-black text-base tracking-tighter uppercase">
                  Ultra<span className="text-orange">Tech</span>
                </div>
                {/* JSW Steel */}
                <div className="text-white font-inter font-black text-lg tracking-widest italic uppercase">
                  JSW <span className="font-normal not-italic text-sm text-white/70">STEEL</span>
                </div>
                {/* Ramco Cements logoipsum Clover styling */}
                <div className="text-white font-poppins font-extrabold text-base tracking-wider uppercase flex items-center gap-1.5">
                  <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="12" r="4" />
                    <circle cx="18" cy="12" r="4" />
                    <circle cx="12" cy="6" r="4" />
                    <circle cx="12" cy="18" r="4" />
                  </svg>
                  <span>ROYAL</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none pointer-events-none">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold font-inter">Scroll</span>
          <div className="w-[24px] h-[40px] rounded-full border border-white/20 flex justify-center p-1.5">
            <motion.div 
              animate={{ 
                y: [0, 12, 0], 
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{ 
                duration: 1.8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-1.5 h-1.5 bg-orange rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <StatsCounter />

      {/* 3. ABOUT SECTION */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="label-uppercase">Who We Are</span>
              <h2 className="text-h2">
                Top Construction & Interior Design Company in <span className="text-orange">Chennai</span>
              </h2>
              <p className="text-body text-black/75 mb-8">
                Established with a vision to streamline complex building processes, <strong className="text-black font-bold">Royal Construction & Interiors</strong> delivers premium architectural planning, structural engineering, interior decoration, and landscaping services under a single ceiling. We eliminate developer gaps to save you stress, time, and budget.
              </p>

              <div className="flex flex-col gap-6 mb-10 w-full">
                <div className="flex gap-6 p-8 md:p-10 bg-lightgray rounded-[24px] border border-lightgray-border hover:border-orange/20 transition-all shadow-soft w-full group">
                  <div className="w-12 h-12 rounded-button bg-orange/15 text-orange flex items-center justify-center flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-lg text-black mb-1.5">Our Mission</h4>
                    <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed">
                      To erect structural frameworks engineered for absolute seismic safety, and customize bespoke living spaces reflecting client lifestyle aesthetics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 md:p-10 bg-lightgray rounded-[24px] border border-lightgray-border hover:border-orange/20 transition-all shadow-soft w-full group">
                  <div className="w-12 h-12 rounded-button bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-lg text-black mb-1.5">Our Vision</h4>
                    <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed">
                      To be Chennai's most trusted builder synonymous with quality material inspections, transparency in scheduling, and certified structural handovers.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn-dark inline-flex self-start">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Collage */}
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Background accent panel */}
              <div className="absolute inset-4 border-2 border-orange/10 rounded-2xl -z-10 translate-x-2 translate-y-2" />
              
              <img 
                src="/assets/images/residential_construction.png" 
                alt="Construction Site Site Work" 
                className="rounded-2xl h-64 object-cover w-full shadow-soft"
              />
              <img 
                src="/assets/images/project_ecr_villa.png" 
                alt="Completed Luxury Villa Design" 
                className="rounded-2xl h-48 object-cover w-full shadow-soft mt-16"
              />
              <img 
                src="/assets/images/interior_design.png" 
                alt="Contemporary Kitchen Setup" 
                className="rounded-2xl h-48 object-cover w-full shadow-soft -mt-16"
              />
              <img 
                src="/assets/images/commercial_construction.png" 
                alt="Corporate Office Building Facade" 
                className="rounded-2xl h-64 object-cover w-full shadow-soft"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="section-padding bg-lightgray">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-uppercase mx-auto text-center">Expert Solutions</span>
            <h2 className="text-h2 animate-fade-in text-center">
              Our Structural & Service Solutions
            </h2>
            <p className="text-body mx-auto text-center text-black/60">
              Click on any card below to smoothly expand its structural specifications, modular parameters, and consult links.
            </p>
          </div>

          {/* Expanding Accordion Gallery */}
          <div className="flex flex-col md:flex-row w-full gap-4 h-[650px] md:h-[500px] overflow-hidden select-none">
            {servicesData.map((svc, idx) => {
              const isActive = activeServiceIdx === idx;
              return (
                <div
                  key={svc.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border border-white/5 shadow-premium flex-shrink-0 group ${
                    isActive 
                      ? 'flex-[4.5] md:flex-[5] bg-black' 
                      : 'flex-[1] bg-black-rich md:hover:bg-black/90'
                  }`}
                >
                  {/* Card Background Image */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isActive ? 'opacity-65 scale-100' : 'opacity-35 group-hover:opacity-45 scale-105 filter grayscale'
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${
                    isActive 
                      ? 'from-black/95 via-black/50 to-black/25' 
                      : 'from-black/80 via-black/65 to-black/40'
                  }`} />

                  {/* ACTIVE CARD CONTENT */}
                  <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 ease-in-out ${
                    isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}>
                    <span className="text-orange text-xs font-bold uppercase tracking-widest mb-2 font-inter">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="font-poppins text-xl md:text-2xl font-extrabold text-white mb-3">
                      {svc.title}
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-white/70 max-w-lg mb-6 leading-relaxed">
                      {svc.longDesc}
                    </p>

                    {/* Features list */}
                    <div className="hidden sm:grid grid-cols-2 gap-x-6 gap-y-2 mb-6 max-w-xl">
                      {svc.features.slice(0, 4).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-white/80 font-inter text-xs">
                           <span className="text-orange text-xs">✔</span>
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 items-center">
                      <Link
                        to="/contact"
                        state={{ selectService: svc.title }}
                        className="h-11 px-6 bg-orange text-white rounded-button font-inter text-xs font-bold transition-all duration-300 flex items-center justify-center hover:bg-white hover:text-black shadow-glow"
                      >
                        Request Consultation
                      </Link>
                      <Link
                        to="/contact"
                        state={{ scrollEstimator: true }}
                        className="font-inter text-xs font-bold text-white/80 hover:text-orange transition-colors"
                      >
                        Calculate Est. Cost
                      </Link>
                    </div>
                  </div>

                  {/* INACTIVE CARD CONTENT */}
                  <div className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}>
                    {/* Mobile title (horizontal) */}
                    <span className="md:hidden font-poppins font-extrabold text-sm text-white/80 uppercase tracking-widest text-center">
                      {svc.title}
                    </span>
                    {/* Desktop title (vertical reading bottom-to-top) */}
                    <span 
                      className="hidden md:block font-poppins font-extrabold text-lg text-white/80 uppercase tracking-widest text-center select-none rotate-180"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      {svc.title}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        {/* Accent glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[500px]">
              <img 
                src="/assets/images/commercial_construction.png" 
                alt="Expert Structural Construction site" 
                className="w-full h-full object-cover opacity-80"
              />
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 left-8 glass-dark-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center font-bold text-white shadow-glow">
                  ✓
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-white text-base">Quality Certified</h4>
                  <p className="font-inter text-white/50 text-xs">Standard materials, strict timelines</p>
                </div>
              </div>
            </div>

            {/* Right Benefits */}
            <div className="flex flex-col justify-center">
              <span className="label-uppercase">Our Advantage</span>
              <h2 className="text-h2 text-white">
                Engineering Custom Spaces with Certified Materials
              </h2>

              <div className="flex flex-col gap-6">
                {[
                  { title: "Trusted Expertise", desc: "Our civil engineers and architects hold accreditation and bring a collective experience of 10+ years." },
                  { title: "End-to-End Solutions", desc: "No subcontractors, no middleman markups. We handle design, zoning permits, concrete, carpentry, plumbing, and handover." },
                  { title: "Quality Assurance", desc: "Rigorous quality control checklists on-site, concrete curing checks, and multi-tier soil foundation safety designs." },
                  { title: "Timely Delivery", desc: "We bind completion dates contractually, drafting a weekly progress chart to secure your move-in date." },
                  { title: "Sustainable Construction", desc: "We utilize eco-friendly AAC blocks and structural fly-ash components optimizing thermal insulation in Chennai's climate." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-orange font-poppins font-extrabold text-lg mt-0.5">
                      0{idx + 1}.
                    </span>
                    <div>
                      <h4 className="font-poppins font-bold text-base text-white mb-1">{benefit.title}</h4>
                      <p className="font-inter text-xs md:text-sm text-white/55 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. PROJECTS GALLERY PREVIEW */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label-uppercase">Completed Portfolios</span>
              <h2 className="text-h2">
                Featured Projects Showcase
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Residential', 'Commercial', 'Interior', 'Renovation'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveProjectTab(tab)}
                  className={`px-4 py-2 rounded-button font-inter text-xs font-semibold uppercase tracking-wider transition-all border focus:outline-none ${
                    activeProjectTab === tab
                      ? 'bg-orange text-white border-orange shadow-glow'
                      : 'border-lightgray-border text-black/50 hover:bg-lightgray hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-dark inline-flex">
              View All Portfolios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. BEFORE & AFTER SECTION */}
      <BeforeAfterSlider />

      {/* 8. INTERIOR SHOWCASE */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-uppercase mx-auto text-center">Premium Styling</span>
            <h2 className="text-h2 text-center">
              Interior Showcase Gallery
            </h2>
            <p className="text-body mx-auto text-center text-black/60">
              Step inside some of our bespoke interior creations—featuring Italian kitchens, minimalist lounges, and executive workstation layouts.
            </p>
          </div>

          {/* Masonry Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {interiorShowcase.map((item, idx) => (
              <div key={idx} className="group relative rounded-[24px] overflow-hidden h-72 shadow-soft border border-lightgray-border cursor-pointer">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-orange text-[10px] font-bold uppercase tracking-widest mb-1.5 font-inter">
                    {item.cat}
                  </span>
                  <h4 className="font-poppins text-lg font-bold text-white leading-tight mb-1">
                    {item.title}
                  </h4>
                  <span className="text-white/60 text-xs font-inter flex items-center gap-1">
                    Inspect details <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="section-padding bg-premium-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-orange/5 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-uppercase mx-auto text-center">Testimonials</span>
            <h2 className="text-h2 text-center text-white">
              What Our Happy Clients Say
            </h2>
            <p className="text-body mx-auto text-center text-white/50">
              Client satisfaction is our primary benchmark. Read reviews from property owners across Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-dark-card flex flex-col h-full hover:border-orange/20 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-inter text-sm md:text-base text-white/75 italic leading-relaxed mb-8 flex-grow">
                  "{t.review}"
                </p>

                {/* Profile row */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-orange bg-white/10">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white">{t.name}</h4>
                    <span className="font-inter text-[11px] uppercase tracking-wider text-orange font-semibold">
                      {t.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9.5. DYNAMIC SCROLLING MARQUEE */}
      <section className="py-16 bg-blueprint bg-white overflow-hidden border-y border-lightgray-border select-none">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Row 1: Scrolling Left */}
          <div className="flex w-full overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-left flex items-center gap-8 md:gap-12 text-4xl sm:text-5xl md:text-7xl font-extrabold font-poppins tracking-wider pr-8 md:pr-12">
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-outline-gray">MANAGEMENT</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">DESIGN</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">CONSTRUCTION</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-black">DEVELOPMENT</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">QUALITY</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">SAFETY</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-full overflow-hidden whitespace-nowrap">
            <div className="animate-marquee-right flex items-center gap-8 md:gap-12 text-4xl sm:text-5xl md:text-7xl font-extrabold font-poppins tracking-wider pr-8 md:pr-12">
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-outline-gray">SAFETY</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">QUALITY</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-black">DEVELOPMENT</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">CONSTRUCTION</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">DESIGN</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                  <span className="text-outline-gray">MANAGEMENT</span>
                  <span className="text-orange text-2xl md:text-4xl">○</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TEAM SECTION */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-uppercase mx-auto text-center">Our Leadership</span>
            <h2 className="text-h2 text-center">
              Meet Our Expert Professionals
            </h2>
            <p className="text-body mx-auto text-center text-black/60">
              Accredited engineering minds and interior decorators dedicated to structural safety and aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((m, idx) => (
              <div key={idx} className="bg-white rounded-[24px] border border-lightgray-border shadow-soft p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-premium group flex flex-col items-center">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-orange/20 mb-8 group-hover:border-orange transition-colors flex-shrink-0">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-poppins text-xl md:text-2xl font-extrabold text-black mb-2">{m.name}</h3>
                <span className="font-inter text-xs md:text-sm uppercase tracking-widest text-orange font-extrabold block mb-4">
                  {m.role}
                </span>
                <p className="font-inter text-sm md:text-base text-black/70 leading-relaxed max-w-xs">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 11. COMPANY VIDEO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/project_ecr_villa.png" 
            alt="Royal Construction site work process video thumbnail" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative z-10 text-center max-w-xl mx-auto px-6"
        >
          <button 
            type="button"
            className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform shadow-glow focus:outline-none"
            aria-label="Play site walkthrough video"
          >
            <Play className="w-8 h-8 fill-white ml-1" />
          </button>
          <h3 className="text-h3 text-white mb-3 text-center">
            Watch Our Construction Process
          </h3>
          <p className="text-body text-white/70 text-center mx-auto">
            Take a photorealistic 3D virtual walkthrough of our project layouts, highlighting steel column details and modular joineries.
          </p>
        </motion.div>
      </section>

      {/* 12. COST ESTIMATOR SECTION */}
      <CostEstimator />

      {/* 13. FAQ SECTION */}
      <section className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-uppercase mx-auto text-center">Common Questions</span>
            <h2 className="text-h2 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-body mx-auto text-center text-black/60">
              Clear answers regarding construction permits, budgets, curation materials, and structural warranty scopes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-lightgray-border rounded-[24px] overflow-hidden bg-white shadow-soft transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full p-6 text-left font-poppins font-bold text-black text-sm md:text-base flex justify-between items-center focus:outline-none hover:bg-lightgray transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-orange transition-transform duration-300 flex-shrink-0 ${
                    faqOpen === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {faqOpen === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-inter text-xs md:text-sm text-black/60 leading-relaxed border-t border-lightgray-border">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 14. BLOG SECTION PREVIEW */}
      <section className="section-padding bg-lightgray">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label-uppercase">News & Guides</span>
              <h2 className="text-h2">
                Latest Resources & Tips
              </h2>
            </div>
            <Link to="/blog" className="btn-dark inline-flex self-start md:self-end">
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((article) => (
              <div key={article.id} className="bg-white rounded-[24px] overflow-hidden border border-lightgray-border shadow-soft flex flex-col h-full group">
                <div className="h-56 overflow-hidden w-full relative flex-shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-button uppercase font-inter tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="block text-[11px] font-semibold text-black/40 uppercase tracking-widest font-inter mb-2">
                    {article.date} · {article.readTime}
                  </span>
                  <h3 className="font-poppins text-lg font-bold text-black mb-3 leading-snug group-hover:text-orange transition-colors">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-black/55 mb-6 leading-relaxed flex-grow">
                    {article.shortDesc}
                  </p>
                  <Link 
                    to={`/blog/${article.id}`} 
                    className="flex items-center gap-1.5 font-inter text-sm font-bold text-orange mt-auto group-hover:text-black transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 15. CONTACT CTA */}
      <section className="bg-orange py-24 md:py-28 lg:py-32 text-white relative overflow-hidden">
        {/* Decorative circle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-h2 text-white">
              Ready to Discuss Your Construction or Interior Project?
            </h2>
            <p className="text-body text-white/85 max-w-[65ch]">
              Secure your free site survey and premium layout blueprint checklist today. Let's make your dream space happen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0 justify-center">
            <Link 
              to="/contact" 
              className="h-[60px] px-8 bg-black hover:bg-white hover:text-black text-white rounded-[16px] font-inter font-semibold transition-all duration-400 ease-in-out flex items-center justify-center gap-2 shadow-soft w-full sm:w-auto hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+917305485051" 
              className="h-[60px] px-8 border-2 border-white hover:bg-white hover:text-orange text-white rounded-[16px] font-inter font-semibold transition-all duration-400 ease-in-out flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1"
            >
              Call Office
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
