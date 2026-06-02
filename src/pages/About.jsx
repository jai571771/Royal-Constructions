import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Heart, Users, HardHat } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';

export default function About() {
  const coreValues = [
    { icon: Heart, title: "Uncompromising Quality", desc: "We utilize double-tested Fe 550 TMT steel reinforcing structures and premium OPC cements, maintaining structural strength protocols rigorously." },
    { icon: ShieldCheck, title: "Absolute Transparency", desc: "No hidden charges, clear materials checklists. We detail per square foot costs and itemize modular joineries transparently." },
    { icon: HardHat, title: "Site Safety First", desc: "Our supervisors execute daily safety checks. Concrete mixtures, formwork scaffolds, and structural welds follow safe protocols." },
    { icon: Users, title: "Client-Centric Process", desc: "Customer satisfaction is our benchmark. We adjust spatial details dynamically during masonry layouts to meet lifestyle needs." }
  ];

  const processSteps = [
    { step: "01", title: "Site Survey & Soil Test", desc: "We analyze soil bearing capacity and perform topographical checks to design foundation footing depth (pile vs isolated footings)." },
    { step: "02", title: "2D & 3D Blueprints", desc: "Our architects map spatial layouts, column arrangements, and photorealistic 3D elevations, securing client approval on designs." },
    { step: "03", title: "Municipal Permissions", desc: "We handle local Panchayat or Greater GCC Corporation permits, planning sanctions, and structural stability certifications." },
    { step: "04", title: "Core RCC & Masonry", desc: "Concrete frame construction, beam installations, and blockwork are completed under strict, wet-curing supervisions." },
    { step: "05", title: "Utility Routing & Plaster", desc: "We integrate internal copper wiring pipelines and corrosion-resistant CPVC plumbing joints before plastering walls." },
    { step: "06", title: "Premium Finishes & Handover", desc: "Cabinet installations, Italian marble floor polishing, final paints, and site clean-up before delivery." }
  ];

  const leadership = [
    { name: "Mr. Fazil Ahamed", role: "MD & Founder", bio: "Graduated with honors in Civil Engineering. Over 12 years of hands-on structural construction oversight, managing over 150 project handovers across Chennai.", img: "/assets/images/team_1.png" },
    { name: "Mrs. Meenakshi Sundaram", role: "Head Interior Architect", bio: "10+ years specializing in high-end Scandinavian layouts, modular kitchen ergonomics, and custom space optimisations.", img: "/assets/images/team_2.png" },
    { name: "Er. Rajesh Kumar", role: "Chief Project Manager", bio: "Manages logistical streams, concrete batch consistency, and site supervisor scheduling to maintain strict timelines.", img: "/assets/images/team_3.png" }
  ];

  const certifications = [
    { title: "ISO 9001:2015 Certified", issuer: "Quality Management Systems" },
    { title: "Registered Corporate Builder", issuer: "CMDA & GCC Approved" },
    { title: "Structural Stability Licensee", issuer: "Class-1 Engineering Board" },
    { title: "Premium Interior Partner", issuer: "Laminated Panel Manufacturers League" }
  ];

  return (
    <div className="pt-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/residential_construction.png" 
            alt="About Royal Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-6 text-center">
          <span className="text-orange text-xs md:text-sm uppercase tracking-[0.25em] font-extrabold mb-3 bg-orange/15 px-4 py-2 rounded-full border border-orange/20 inline-block font-poppins">
            Transforming Spaces. Building Trust. Delivering Excellence.
          </span>
          <h1 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Story & Values
          </h1>
          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Delivering premium individual villa construction, commercial spaces, and custom luxury interiors across Chennai for over a decade.
          </p>
        </div>
      </section>

      {/* 2. Company Story Split */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Text */}
            <div>
              <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
                Decade of Trust
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
                From Scaffolds to Grand Villas
              </h2>
              <p className="text-black/60 font-inter leading-relaxed mb-6">
                Royal Construction & Interiors was founded by <strong className="text-black font-semibold">Mr. Fazil Ahamed</strong> with a single objective: to rescue homeowners from unorganized contractors by presenting a professional, engineering-focused design-and-build company. 
              </p>
              <p className="text-black/60 font-inter leading-relaxed mb-6">
                Over the past 10 years, we have scaled our services from small renovations in Maduranthakam to building multi-crore luxury oceanfront villas along ECR and corporate software parks in OMR. We operate our own modular cabinetry manufacturing factory, allowing us to maintain 100% control over design alignments and paint finishes.
              </p>
              <p className="text-black/60 font-inter leading-relaxed">
                By uniting structural civil engineers, creative architects, and detailing interior designers under one company, we qualify leads, expedite permits, and manage projects under rigorous safety guidelines.
              </p>
            </div>

            {/* Side Image */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[450px] shadow-premium">
              <img 
                src="/assets/images/project_ecr_villa.png" 
                alt="Royal construction premium villa handover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <StatsCounter />

      {/* 4. Core Values Grid */}
      <section className="section-padding bg-lightgray">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              Our Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Core Principles We Stand By
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
              Every concrete batch we mix and blueprint we draw aligns with our standards of safety and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-lightgray-border shadow-soft hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange/15 text-orange rounded-button flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-poppins text-lg font-bold text-black mb-3">{val.title}</h3>
                  <p className="font-inter text-xs md:text-sm text-black/55 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Construction Process Checklist */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              Work Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our Structured Build Process
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
              We guide you smoothly through design milestones to municipal approvals and physical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-8 border border-lightgray-border bg-white rounded-2xl shadow-soft relative overflow-hidden group hover:border-orange/20 transition-all">
                <span className="absolute top-4 right-6 font-poppins font-extrabold text-5xl text-orange/10 group-hover:text-orange/20 transition-colors select-none">
                  {step.step}
                </span>
                <h3 className="font-poppins text-base font-bold text-black mb-3 pr-8">{step.title}</h3>
                <p className="font-inter text-xs text-black/55 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership Profiles */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              The Directors
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Accredited Core Engineering Minds
            </h2>
            <p className="text-white/50 font-inter leading-relaxed">
              Meet the licensed engineering minds directing site workflows and customizing architectural plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {leadership.map((member, idx) => (
              <div key={idx} className="glass-dark-card flex flex-col items-center text-center p-10 hover:border-orange/20 transition-colors duration-300">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-orange/25 mb-8 flex-shrink-0">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-poppins text-xl md:text-2xl font-extrabold text-white mb-2">{member.name}</h3>
                <span className="font-inter text-xs md:text-sm uppercase tracking-widest text-orange font-extrabold block mb-4">{member.role}</span>
                <p className="font-inter text-sm md:text-base text-white/75 leading-relaxed max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Certifications & Affiliations */}
      <section className="section-padding bg-lightgray">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
              Licensing
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Registered Credentials & Licences
            </h2>
            <p className="text-black/60 font-inter leading-relaxed">
              We comply with building codes, securing zoning permits, and structural stability certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-lightgray-border shadow-soft flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-button bg-orange/15 text-orange flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-black leading-snug">{cert.title}</h4>
                  <span className="font-inter text-[10px] text-black/45 uppercase tracking-wide">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
