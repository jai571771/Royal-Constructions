import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ChevronDown, CheckCircle2, Play, Users, Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import ProjectCard from '../components/ProjectCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CostEstimator from '../components/CostEstimator';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { blogData } from '../data/blogData';

export default function Home() {
  const navigate = useNavigate();
  const [activeProjectTab, setActiveProjectTab] = useState('All');
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

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
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        {/* Background Image / Overlay (Lighter settings) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/project_ecr_villa.png" 
            alt="Luxury Villa Construction" 
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-content mx-auto px-6 pt-16 flex flex-col items-center">
          <span className="text-orange text-xs md:text-sm uppercase tracking-[0.3em] font-extrabold mb-4 bg-orange/15 px-4 py-2 rounded-full border border-orange/20 animate-fade-in font-poppins">
            Transforming Spaces. Building Trust. Delivering Excellence.
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] max-w-4xl animate-fade-up">
            Building Dreams.<br className="hidden md:block"/> Designing Excellence.
          </h1>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Premium Residential Construction, Custom Interior Design & Commercial Projects Across Chennai, Chengalpattu & Maduranthakam.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link to="/contact" className="btn-primary w-full sm:w-auto h-14 text-base">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/projects" className="btn-secondary w-full sm:w-auto h-14 text-base">
              View Our Projects
            </Link>
          </div>

          {/* Redesigned Trust stats capsule */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-10 px-6 md:px-8 py-4 rounded-2xl md:rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-premium max-w-4xl w-full select-none">
            <div className="flex items-center gap-2 text-white font-inter text-xs md:text-sm font-semibold tracking-wide uppercase">
              <Star className="w-4 h-4 text-orange fill-orange flex-shrink-0" />
              <span>Top Rated Builder</span>
            </div>
            <div className="hidden sm:block w-[1px] h-5 bg-white/10" />
            <div className="flex items-center gap-2 text-white font-inter text-xs md:text-sm font-semibold tracking-wide uppercase">
              <Award className="w-4 h-4 text-gold fill-gold flex-shrink-0" />
              <span>10+ Years Trust</span>
            </div>
            <div className="hidden sm:block w-[1px] h-5 bg-white/10" />
            <div className="flex items-center gap-2 text-white font-inter text-xs md:text-sm font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-orange flex-shrink-0" />
              <span>10-Yr Structural Warranty</span>
            </div>
          </div>
        </div>

        {/* Scroll down mouse */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <span className="w-1 h-2 bg-orange rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <StatsCounter />

      {/* 3. ABOUT SECTION */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-orange text-xs md:text-sm uppercase tracking-[0.2em] font-extrabold block mb-3 font-poppins">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-poppins">
                Top Construction & Interior Design Company in <span className="text-orange">Chennai</span>
              </h2>
              <p className="text-black/75 font-inter text-base md:text-lg leading-relaxed mb-8">
                Established with a vision to streamline complex building processes, <strong className="text-black font-bold">Royal Construction & Interiors</strong> delivers premium architectural planning, structural engineering, interior decoration, and landscaping services under a single ceiling. We eliminate developer gaps to save you stress, time, and budget.
              </p>

              <div className="flex flex-col gap-5 mb-10 w-full">
                <div className="flex gap-4 p-6 bg-lightgray rounded-2xl border border-lightgray-border hover:border-orange/20 transition-all shadow-soft w-full group">
                  <div className="w-12 h-12 rounded-button bg-orange/15 text-orange flex items-center justify-center flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-base text-black mb-1.5">Our Mission</h4>
                    <p className="font-inter text-xs md:text-sm text-black/60 leading-relaxed">
                      To erect structural frameworks engineered for absolute seismic safety, and customize bespoke living spaces reflecting client lifestyle aesthetics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-lightgray rounded-2xl border border-lightgray-border hover:border-orange/20 transition-all shadow-soft w-full group">
                  <div className="w-12 h-12 rounded-button bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-base text-black mb-1.5">Our Vision</h4>
                    <p className="font-inter text-xs md:text-sm text-black/60 leading-relaxed">
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
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="section-padding bg-lightgray">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              Expert Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in">
              Our Structural & Service Solutions
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
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
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border border-white/5 shadow-premium flex-shrink-0 group ${
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
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        {/* Accent glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom">
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
              <span className="text-orange text-lg md:text-xl uppercase tracking-[0.2em] font-extrabold block mb-4 font-poppins">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight font-poppins">
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
        </div>
      </section>

      {/* 6. PROJECTS GALLERY PREVIEW */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
                Completed Portfolios
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
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
        </div>
      </section>

      {/* 7. BEFORE & AFTER SECTION */}
      <BeforeAfterSlider />

      {/* 8. INTERIOR SHOWCASE */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
              Premium Styling
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Interior Showcase Gallery
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
              Step inside some of our bespoke interior creations—featuring Italian kitchens, minimalist lounges, and executive workstation layouts.
            </p>
          </div>

          {/* Masonry Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorShowcase.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden h-72 shadow-soft border border-lightgray-border cursor-pointer">
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
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="section-padding bg-premium-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-orange/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Our Happy Clients Say
            </h2>
            <p className="text-white/50 font-inter leading-relaxed">
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
        </div>
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
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Meet Our Expert Professionals
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
              Accredited engineering minds and interior decorators dedicated to structural safety and aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {team.map((m, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-lightgray-border shadow-soft p-8 md:p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-premium group flex flex-col items-center">
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
        </div>
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
        <div className="relative z-10 text-center max-w-xl mx-auto px-6">
          <button 
            type="button"
            className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform shadow-glow focus:outline-none"
            aria-label="Play site walkthrough video"
          >
            <Play className="w-8 h-8 fill-white ml-1" />
          </button>
          <h3 className="font-poppins text-2xl font-extrabold text-white mb-3">
            Watch Our Construction Process
          </h3>
          <p className="font-inter text-sm text-white/70 leading-relaxed">
            Take a photorealistic 3D virtual walkthrough of our project layouts, highlighting steel column details and modular joineries.
          </p>
        </div>
      </section>

      {/* 12. COST ESTIMATOR SECTION */}
      <CostEstimator />

      {/* 13. FAQ SECTION */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
              Clear answers regarding construction permits, budgets, curation materials, and structural warranty scopes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-lightgray-border rounded-2xl overflow-hidden bg-white shadow-soft transition-all duration-300"
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
                
                {faqOpen === idx && (
                  <div className="px-6 pb-6 pt-2 font-inter text-xs md:text-sm text-black/60 leading-relaxed border-t border-lightgray-border animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. BLOG SECTION PREVIEW */}
      <section className="section-padding bg-lightgray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
                News & Guides
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
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
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden border border-lightgray-border shadow-soft flex flex-col h-full group">
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
                <div className="p-6 md:p-8 flex flex-col flex-grow">
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
        </div>
      </section>

      {/* 15. CONTACT CTA */}
      <section className="bg-orange py-20 text-white relative overflow-hidden">
        {/* Decorative circle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-poppins text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Ready to Discuss Your Construction or Interior Project?
            </h2>
            <p className="font-inter text-base md:text-lg text-white/85">
              Secure your free site survey and premium layout blueprint checklist today. Let's make your dream space happen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-shrink-0 justify-center">
            <Link 
              to="/contact" 
              className="h-14 px-8 bg-black hover:bg-white hover:text-black text-white rounded-button font-inter font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-soft w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+917305485051" 
              className="h-14 px-8 border-2 border-white hover:bg-white hover:text-orange text-white rounded-button font-inter font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Call Office
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
