import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Home, Briefcase, Palette, Wrench, Compass, Layers, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  
  const iconMap = {
    Home: Home,
    Briefcase: Briefcase,
    Palette: Palette,
    Wrench: Wrench,
    Compass: Compass,
    Layers: Layers
  };

  return (
    <div className="pt-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/commercial_construction.png" 
            alt="Services provided by Royal Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 max-w-content mx-auto px-6 text-center">
          <span className="text-orange text-xs md:text-sm uppercase tracking-[0.25em] font-extrabold mb-3 bg-orange/15 px-4 py-2 rounded-full border border-orange/20 inline-block font-poppins">
            Transforming Spaces. Building Trust. Delivering Excellence.
          </span>
          <h1 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Building & Design Services
          </h1>
          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            High-grade materials execution, custom structural calculations, and luxury woodwork cabinetry layouts in Chennai.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Items Grid */}
      <section className="section-padding bg-blueprint bg-white">
        <div className="container-custom">
          <div className="flex flex-col gap-24">
            {servicesData.map((svc, idx) => {
              const ServiceIcon = iconMap[svc.icon] || Home;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-lightgray-border pb-20 last:border-0 last:pb-0 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Service Graphic Side */}
                  <div className={`relative rounded-2xl overflow-hidden h-[300px] md:h-[450px] shadow-premium ${
                    isEven ? 'lg:order-2' : ''
                  }`}>
                    <img 
                      src={svc.image} 
                      alt={svc.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-button bg-black/70 backdrop-blur-md text-orange flex items-center justify-center border border-white/10">
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Service Details Side */}
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <span className="text-orange text-xs font-bold uppercase tracking-widest font-inter block mb-2">
                      Package 0{idx + 1}
                    </span>
                    <h2 className="font-poppins text-2xl md:text-3xl font-extrabold text-black mb-4">
                      {svc.title}
                    </h2>
                    <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed mb-6">
                      {svc.longDesc}
                    </p>

                    {/* Features Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-black/70">
                          <Check className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                          <span className="font-inter text-xs md:text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA link */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <Link 
                        to="/contact" 
                        state={{ selectService: svc.title }}
                        className="btn-dark w-full sm:w-auto h-12 text-sm"
                      >
                        Request Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        to="/contact" 
                        state={{ scrollEstimator: true }}
                        className="font-inter text-sm font-bold text-orange hover:text-black transition-colors"
                      >
                        Calculate Est. Cost
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Materials Grade Section */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3 font-poppins">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Strict Curation of Branded Materials
            </h2>
            <p className="text-white/50 font-inter leading-relaxed">
              We never cut corners. Every building structure is erected using steel and concrete grades passing quality inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "RCC Structural Frameworks", desc: "We utilize certified Fe 550D TMT steel bars (Jindal/JSW) and premium structural OPC cements (Ultratech/Ramco) with rigorous curing supervisor audits." },
              { title: "Modular Cabinet Interior", desc: "High-density exterior-grade MDF and hardwood birch plywood layers, pressed with 1.0mm heat-resistant laminates and soft-close hardware (Hettich)." },
              { title: "Plumbing & Wiring Networks", desc: "Corrosion-proof CPVC plumbing grids (Supreme/Ashirvad) paired with flame-retardant multi-strand copper cables (Finolex/Havells) and safe MCB breakers." }
            ].map((pkg, idx) => (
              <div key={idx} className="glass-dark-card flex flex-col p-8 hover:border-orange/20 transition-colors">
                <div className="w-10 h-10 rounded-button bg-orange/15 text-orange flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-poppins font-bold text-base text-white mb-3">{pkg.title}</h4>
                <p className="font-inter text-xs md:text-sm text-white/55 leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Lead Trigger CTA */}
      <section className="bg-lightgray py-20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-poppins text-3xl font-extrabold mb-4 text-black">
            Looking for a Customized Design-and-Build Quote?
          </h2>
          <p className="font-inter text-sm md:text-base text-black/60 mb-8 max-w-xl mx-auto">
            Schedule a free site survey. Our engineers will audit soil conditions and review architectural layouts to draft an itemized estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link to="/contact" className="btn-primary w-full sm:w-auto h-12 text-sm">
              Start Free Consultation
            </Link>
            <Link to="/contact" state={{ scrollEstimator: true }} className="btn-dark w-full sm:w-auto h-12 text-sm">
              Launch Cost Estimator
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
