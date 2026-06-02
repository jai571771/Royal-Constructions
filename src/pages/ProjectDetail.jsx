import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, User, Calendar, Ruler, Award, CheckCircle2, ArrowLeft, Star, Phone } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { projectId } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-poppins text-3xl font-extrabold text-black mb-4">Project Not Found</h2>
        <p className="font-inter text-black/50 text-sm mb-6 max-w-sm">The portfolio ID you requested does not exist or may have been updated.</p>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolios
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      
      {/* 1. Hero Cover */}
      <section className="relative h-[55vh] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-content mx-auto w-full px-6 pb-12 text-white">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-1.5 text-xs md:text-sm uppercase tracking-wider font-bold text-orange hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolios
          </Link>
          <span className="bg-orange text-white text-[10px] font-bold px-3 py-1 rounded-button uppercase tracking-wider block w-max mb-3">
            {project.category}
          </span>
          <h1 className="font-poppins text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/70 font-inter">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-orange" />
              <span>{project.location}</span>
            </div>
            <span className="hidden md:inline text-white/30">|</span>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4 text-orange" />
              <span>Client: {project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Highlights Bar */}
      <section className="bg-lightgray py-6 border-b border-lightgray-border font-inter text-xs md:text-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            <div className="pt-4 md:pt-0">
              <span className="block text-black/45 uppercase text-[10px] tracking-wider font-semibold">Total Area</span>
              <span className="block text-black font-extrabold text-base mt-1">{project.area}</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block text-black/45 uppercase text-[10px] tracking-wider font-semibold">Duration</span>
              <span className="block text-black font-extrabold text-base mt-1">{project.duration}</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block text-black/45 uppercase text-[10px] tracking-wider font-semibold">Budget Scale</span>
              <span className="block text-black font-extrabold text-base mt-1">{project.cost}</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block text-black/45 uppercase text-[10px] tracking-wider font-semibold">Curation Quality</span>
              <span className="block text-orange font-extrabold text-base mt-1">ISO Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detail Columns (Overview, Requirements, Challenges, Solution) */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Content (2 Cols) */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              
              {/* Overview */}
              <div>
                <h2 className="font-poppins text-xl md:text-2xl font-bold mb-4 text-black border-b border-lightgray-border pb-3">
                  Project Overview
                </h2>
                <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Client Requirements */}
              <div>
                <h2 className="font-poppins text-xl md:text-2xl font-bold mb-4 text-black border-b border-lightgray-border pb-3">
                  Client Requirements
                </h2>
                <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed">
                  {project.requirements}
                </p>
              </div>

              {/* Challenges & Solutions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-red-50/20 border border-red-100 rounded-2xl">
                  <h3 className="font-poppins font-bold text-red-800 text-base mb-3">The Challenges</h3>
                  <p className="font-inter text-xs md:text-sm text-red-950/70 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                <div className="p-6 bg-emerald-50/20 border border-emerald-100 rounded-2xl">
                  <h3 className="font-poppins font-bold text-emerald-800 text-base mb-3">Our Solutions</h3>
                  <p className="font-inter text-xs md:text-sm text-emerald-950/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Result Summary */}
              <div>
                <h2 className="font-poppins text-xl md:text-2xl font-bold mb-4 text-black border-b border-lightgray-border pb-3">
                  Final Result
                </h2>
                <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed">
                  {project.result}
                </p>
              </div>

            </div>

            {/* Right Sidebar (1 Col) - Process & Testimonial */}
            <div className="flex flex-col gap-10">
              
              {/* Construction Process */}
              <div className="p-6 md:p-8 bg-lightgray rounded-2xl border border-lightgray-border">
                <h3 className="font-poppins font-bold text-black text-lg mb-6">Construction Process</h3>
                <div className="flex flex-col gap-5">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow">
                        {idx + 1}
                      </div>
                      <span className="font-inter text-xs md:text-sm text-black/75 leading-tight">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="p-6 md:p-8 bg-orange/5 border border-orange/15 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-4 right-6 font-poppins font-extrabold text-7xl text-orange/5 select-none pointer-events-none">
                    “
                  </div>
                  <div className="flex gap-0.5 text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-inter text-sm text-black/70 italic leading-relaxed mb-6">
                    "{project.testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-black">{project.testimonial.author}</h4>
                    <span className="font-inter text-[10px] text-black/45 uppercase tracking-wide">
                      {project.testimonial.role}
                    </span>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 4. Project Photos Gallery */}
      <section className="section-padding bg-lightgray">
        <div className="container-custom">
          <h2 className="font-poppins text-2xl md:text-3xl font-extrabold mb-8 text-black text-center">
            Case Study Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {project.gallery.map((imgUrl, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-soft h-64 border border-lightgray-border">
                <img 
                  src={imgUrl} 
                  alt={`${project.title} interior or exterior elevation-${idx}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Project Inquiry */}
      <section className="bg-black text-white py-16 text-center relative overflow-hidden border-t border-white/10">
        <div className="container-custom relative z-10 max-w-2xl mx-auto">
          <h3 className="font-poppins text-2xl font-bold text-white mb-4">
            Inspired by this Project?
          </h3>
          <p className="font-inter text-sm text-white/60 mb-8">
            Schedule a site consultation. Let's discuss plans, material choices, and timeline configurations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link to="/contact" className="btn-primary w-full sm:w-auto h-12 text-sm">
              Discuss Similar Project
              <Phone className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="btn-secondary w-full sm:w-auto h-12 text-sm">
              View Other Portfolios
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
