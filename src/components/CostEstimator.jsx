import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, ArrowLeft, Calculator, CheckCircle2, Phone, Calendar, Ruler, Home, Palette, Wrench, Briefcase, Box, Layout, Layers, Maximize, Shield, Award, Crown, ChevronDown, MapPin, Clock } from 'lucide-react';

export default function CostEstimator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    area: '',
    materialPackage: 'Premium',
    location: 'Chennai',
    timeline: '3-6 Months',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculationResult, setCalculationResult] = useState(null);
  const [locationOpen, setLocationOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);

  const propertyTypes = [
    { value: 'Residential', label: 'Residential Construction', desc: 'Duplex, Villas, Individual Houses' },
    { value: 'Commercial', label: 'Commercial Construction', desc: 'Offices, Retail, Showrooms' },
    { value: 'Interior', label: 'Interior Design', desc: 'Bespoke Home/Office Modular Design' },
    { value: 'Renovation', label: 'Renovation & Remodeling', desc: 'Upgrades & Structural Retrofits' }
  ];

  const areaRanges = [
    { value: '500-1000', label: '500 – 1,000 sq.ft', minVal: 750 },
    { value: '1000-2000', label: '1,000 – 2,000 sq.ft', minVal: 1500 },
    { value: '2000-3000', label: '2,000 – 3,000 sq.ft', minVal: 2500 },
    { value: '3000+', label: '3,000+ sq.ft', minVal: 4000 }
  ];

  const materialPackages = [
    { value: 'Standard', label: 'Standard Class', price: 1850, desc: 'Branded standard materials, standard tile fittings, basic sanitaryware.' },
    { value: 'Premium', label: 'Premium Class', price: 2200, desc: 'TMT structural steel, premium tile selection, smart UPVC windows, Kohler fittings.' },
    { value: 'Luxury', label: 'Ultra-Luxury Elite', price: 2750, desc: 'Imported marble, custom wood veneers, triple glazing, automated utility controls.' }
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    // Estimator Logic
    let basePricePerSqFt = 2200;
    
    const selectedPkg = materialPackages.find(p => p.value === formData.materialPackage);
    if (selectedPkg) basePricePerSqFt = selectedPkg.price;

    let areaSize = 1500; // default midpoint
    if (formData.area === '500-1000') areaSize = 750;
    else if (formData.area === '1000-2000') areaSize = 1500;
    else if (formData.area === '2000-3000') areaSize = 2500;
    else if (formData.area === '3000+') areaSize = 3500;

    // Interior & Renovation adjustment multiplier
    let multiplier = 1.0;
    if (formData.propertyType === 'Interior') multiplier = 0.45; // lower per sqft since brick structure exists
    if (formData.propertyType === 'Renovation') multiplier = 0.35; // selective structural repairs

    const rawTotal = areaSize * basePricePerSqFt * multiplier;
    
    // Create a range
    const lowEstimate = Math.round((rawTotal * 0.92) / 50000) * 50000;
    const highEstimate = Math.round((rawTotal * 1.08) / 50000) * 50000;

    const formatLakhs = (val) => {
      if (val >= 10000000) {
        return `₹${(val / 10000000).toFixed(2)} Cr`;
      }
      return `₹${(val / 100000).toFixed(1)} Lakhs`;
    };

    return {
      range: `${formatLakhs(lowEstimate)} - ${formatLakhs(highEstimate)}`,
      avgSqFtRate: Math.round(basePricePerSqFt * multiplier),
      totalArea: areaSize
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all contact details to generate your estimate.");
      return;
    }
    
    const result = calculateEstimate();
    setCalculationResult(result);
    setIsSubmitted(true);

    // Confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="cost-estimator" className="section-padding bg-black-rich text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange text-sm uppercase tracking-widest font-semibold block mb-3">
            Budget Planner
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Interactive Cost Estimator
          </h2>
          <p className="text-white/60 font-inter leading-relaxed">
            Specify your construction details below and get a localized, customized price bracket estimate instantly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-black-muted/60 border border-white/10 rounded-2xl p-6 md:p-10 shadow-premium backdrop-blur-md">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps Indicator */}
              <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
                {[1, 2, 3, 4, 5].map((i) => {
                  const stepLabels = ["Type", "Area", "Quality", "Site", "Price"];
                  const isActive = step >= i;
                  const isCurrent = step === i;
                  return (
                    <div key={i} className="flex items-center flex-1 last:flex-initial">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-poppins text-xs font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-orange text-white ring-4 ring-orange/20 shadow-glow' 
                            : 'bg-white/10 text-white/40'
                        } ${isCurrent ? 'scale-110 border border-white/20' : ''}`}>
                          {i}
                        </div>
                        <span className={`text-[9px] md:text-[10px] uppercase tracking-widest font-semibold mt-2 text-center transition-colors ${
                          isActive ? 'text-orange font-extrabold' : 'text-white/30'
                        }`}>
                          {stepLabels[i - 1]}
                        </span>
                      </div>
                      
                      {i < 5 && (
                        <div className="flex-1 mx-2 md:mx-4 h-[2px] -mt-5 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-orange transition-all duration-500`} style={{ width: step > i ? '100%' : '0%' }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* STEP 1: PROPERTY TYPE */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg md:text-xl font-bold font-poppins mb-6 flex items-center gap-2 text-white">
                    <Calculator className="w-5 h-5 text-orange" />
                    Step 1: Select Property Type
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {propertyTypes.map((type) => {
                      const iconMap = {
                        Residential: Home,
                        Commercial: Briefcase,
                        Interior: Palette,
                        Renovation: Wrench
                      };
                      const Icon = iconMap[type.value] || Home;
                      const isSelected = formData.propertyType === type.value;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleChange('propertyType', type.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:border-orange focus:outline-none flex gap-4 items-center ${
                            isSelected
                              ? 'bg-orange/10 border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.15)] scale-[1.02]'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? 'bg-orange text-white' : 'bg-white/5 text-white/50'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-poppins text-base font-bold text-white mb-0.5">{type.label}</h4>
                            <p className="font-inter text-xs text-white/55">{type.desc}</p>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] animate-fade-in shadow-glow">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: AREA SIZE */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg md:text-xl font-bold font-poppins mb-6 flex items-center gap-2 text-white">
                    <Ruler className="w-5 h-5 text-orange" />
                    Step 2: Define Built-up Area
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {areaRanges.map((r) => {
                      const iconMap = {
                        '500-1000': Box,
                        '1000-2000': Layout,
                        '2000-3000': Layers,
                        '3000+': Maximize
                      };
                      const Icon = iconMap[r.value] || Box;
                      const isSelected = formData.area === r.value;
                      return (
                        <button
                          key={r.value}
                          type="button"
                          onClick={() => handleChange('area', r.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:border-orange focus:outline-none flex gap-4 items-center ${
                            isSelected
                              ? 'bg-orange/10 border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.15)] scale-[1.02]'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected ? 'bg-orange text-white' : 'bg-white/5 text-white/50'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-poppins text-base font-bold text-white mb-0.5">{r.label}</h4>
                            <p className="font-inter text-xs text-white/55">Average size: ~{r.minVal} sq.ft</p>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] animate-fade-in shadow-glow">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: MATERIALS PACKAGE */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg md:text-xl font-bold font-poppins mb-6 flex items-center gap-2 text-white">
                    <Calculator className="w-5 h-5 text-orange" />
                    Step 3: Choose Material Quality Package
                  </h3>
                  <div className="flex flex-col gap-4">
                    {materialPackages.map((pkg) => {
                      const iconMap = {
                        Standard: Shield,
                        Premium: Award,
                        Luxury: Crown
                      };
                      const Icon = iconMap[pkg.value] || Shield;
                      const isSelected = formData.materialPackage === pkg.value;
                      return (
                        <button
                          key={pkg.value}
                          type="button"
                          onClick={() => handleChange('materialPackage', pkg.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:border-orange focus:outline-none flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                            isSelected
                              ? 'bg-orange/10 border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.15)] scale-[1.01]'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex gap-4 items-center">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                              isSelected ? 'bg-orange text-white' : 'bg-white/5 text-white/50'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="max-w-md">
                              <h4 className="font-poppins text-base font-bold text-white flex items-center gap-2">
                                {pkg.label}
                                {pkg.value === 'Premium' && (
                                  <span className="bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">
                                    Recommended
                                  </span>
                                )}
                              </h4>
                              <p className="font-inter text-xs text-white/55 mt-1">{pkg.desc}</p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0 flex items-center gap-4">
                            <div>
                              <span className="block font-poppins text-lg font-extrabold text-orange">
                                ₹{pkg.price}/sq.ft
                              </span>
                              <span className="block text-[10px] uppercase text-white/40 font-semibold tracking-wider">
                                Estimated rate
                              </span>
                            </div>
                            {isSelected && (
                              <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] animate-fade-in shadow-glow">
                                ✓
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: TIMELINE & LOCATION */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg md:text-xl font-bold font-poppins mb-6 flex items-center gap-2 text-white">
                    <Calendar className="w-5 h-5 text-orange" />
                    Step 4: Location & Timeline
                  </h3>

                  {/* Transparent click backdrop to close custom dropdowns */}
                  {(locationOpen || timelineOpen) && (
                    <div 
                      className="fixed inset-0 z-40 bg-transparent cursor-default" 
                      onClick={() => {
                        setLocationOpen(false);
                        setTimelineOpen(false);
                      }}
                    />
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-50">
                    {/* Location Selection */}
                    <div className="relative">
                      <label className="block text-sm font-semibold mb-2 text-white/70">Project Site Location</label>
                      <button
                        type="button"
                        onClick={() => {
                          setLocationOpen(!locationOpen);
                          setTimelineOpen(false);
                        }}
                        className={`w-full h-12 px-4 rounded-button bg-white/5 border transition-all flex items-center justify-between text-left focus:outline-none ${
                          locationOpen ? 'border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.1)]' : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="font-inter text-sm text-white flex items-center gap-2.5 min-w-0">
                          <MapPin className="w-4 h-4 text-orange flex-shrink-0" />
                          <span className="truncate">
                            {
                              [
                                { value: "Chennai", label: "Chennai Core (GCC Area)" },
                                { value: "Tambaram", label: "Tambaram / East Tambaram" },
                                { value: "Chengalpattu", label: "Chengalpattu District" },
                                { value: "Maduranthakam", label: "Maduranthakam Zone" },
                                { value: "Other", label: "Other (Kanchipuram, South Chennai)" }
                              ].find(loc => loc.value === formData.location)?.label || 'Select Location'
                            }
                          </span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-300 flex-shrink-0 ${locationOpen ? 'rotate-180 text-orange' : ''}`} />
                      </button>

                      {locationOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#141414] border border-white/10 rounded-xl shadow-premium z-50 max-h-60 overflow-y-auto animate-fade-in divide-y divide-white/5">
                          {[
                            { value: "Chennai", label: "Chennai Core (GCC Area)" },
                            { value: "Tambaram", label: "Tambaram / East Tambaram" },
                            { value: "Chengalpattu", label: "Chengalpattu District" },
                            { value: "Maduranthakam", label: "Maduranthakam Zone" },
                            { value: "Other", label: "Other (Kanchipuram, South Chennai)" }
                          ].map((loc) => {
                            const isSelected = formData.location === loc.value;
                            return (
                              <div
                                key={loc.value}
                                onClick={() => {
                                  handleChange('location', loc.value);
                                  setLocationOpen(false);
                                }}
                                className={`px-4 py-3.5 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                                  isSelected
                                    ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange'
                                    : 'text-white/80 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                                }`}
                              >
                                <MapPin className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-orange' : 'text-white/40'}`} />
                                <span className="truncate">{loc.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Timeline Selection */}
                    <div className="relative">
                      <label className="block text-sm font-semibold mb-2 text-white/70">Required Construction Speed</label>
                      <button
                        type="button"
                        onClick={() => {
                          setTimelineOpen(!timelineOpen);
                          setLocationOpen(false);
                        }}
                        className={`w-full h-12 px-4 rounded-button bg-white/5 border transition-all flex items-center justify-between text-left focus:outline-none ${
                          timelineOpen ? 'border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.1)]' : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="font-inter text-sm text-white flex items-center gap-2.5 min-w-0">
                          <Clock className="w-4 h-4 text-orange flex-shrink-0" />
                          <span className="truncate">
                            {
                              [
                                { value: "Under 3 Months", label: "Fast-track (Under 3 Months)" },
                                { value: "3-6 Months", label: "Standard speed (3-6 Months)" },
                                { value: "6-12 Months", label: "Flexible pacing (6-12 Months)" }
                              ].find(t => t.value === formData.timeline)?.label || 'Select Speed'
                            }
                          </span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-300 flex-shrink-0 ${timelineOpen ? 'rotate-180 text-orange' : ''}`} />
                      </button>

                      {timelineOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#141414] border border-white/10 rounded-xl shadow-premium z-50 max-h-60 overflow-y-auto animate-fade-in divide-y divide-white/5">
                          {[
                            { value: "Under 3 Months", label: "Fast-track (Under 3 Months)" },
                            { value: "3-6 Months", label: "Standard speed (3-6 Months)" },
                            { value: "6-12 Months", label: "Flexible pacing (6-12 Months)" }
                          ].map((t) => {
                            const isSelected = formData.timeline === t.value;
                            return (
                              <div
                                key={t.value}
                                onClick={() => {
                                  handleChange('timeline', t.value);
                                  setTimelineOpen(false);
                                }}
                                className={`px-4 py-3.5 text-sm cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                                  isSelected
                                    ? 'bg-orange/20 text-orange font-bold border-l-4 border-orange'
                                    : 'text-white/80 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                                }`}
                              >
                                <Clock className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-orange' : 'text-white/40'}`} />
                                <span className="truncate">{t.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: CONTACT INFORMATION */}
              {step === 5 && (
                <div className="animate-fade-in">
                  <h3 className="text-lg md:text-xl font-bold font-poppins mb-6 flex items-center gap-2 text-white">
                    <Phone className="w-5 h-5 text-orange" />
                    Step 5: Get Instant Estimate
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="estimator-name" className="block text-xs font-semibold uppercase text-white/60 mb-2">Full Name *</label>
                      <input
                        id="estimator-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Dr. Arvind Krishnan"
                        className="w-full h-12 px-4 rounded-button bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="estimator-phone" className="block text-xs font-semibold uppercase text-white/60 mb-2">Mobile Phone *</label>
                      <input
                        id="estimator-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+91 73054 85051"
                        className="w-full h-12 px-4 rounded-button bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="estimator-email" className="block text-xs font-semibold uppercase text-white/60 mb-2">Email Address *</label>
                    <input
                      id="estimator-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="arvind@gmail.com"
                      className="w-full h-12 px-4 rounded-button bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange font-inter text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="estimator-message" className="block text-xs font-semibold uppercase text-white/60 mb-2">Additional Specifications (Optional)</label>
                    <textarea
                      id="estimator-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Specify double heights, pool requirements, or modular kitchen details..."
                      className="w-full p-4 rounded-button bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange font-inter text-sm resize-none"
                    />
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`h-12 px-6 rounded-button font-inter font-semibold transition-all flex items-center gap-2 border border-white/10 text-white hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none ${
                    step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !formData.propertyType) ||
                      (step === 2 && !formData.area)
                    }
                    className="h-12 px-6 bg-gradient-to-r from-[#FF6B00] to-[#E05300] hover:from-[#E05300] hover:to-[#FF6B00] hover:-translate-y-0.5 active:translate-y-0 text-white rounded-button font-inter font-bold transition-all flex items-center gap-2 shadow-glow focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="h-12 px-8 bg-gradient-to-r from-[#FF6B00] to-[#E05300] hover:from-[#E05300] hover:to-[#FF6B00] hover:-translate-y-0.5 active:translate-y-0 text-white rounded-button font-inter font-bold transition-all flex items-center gap-2 shadow-glow focus:outline-none"
                  >
                    Calculate Estimate
                    <Calculator className="w-4 h-4 animate-bounce" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* SUCCESS ESTIMATE SPLASH */
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-orange/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-orange" />
              </div>
              <h3 className="font-poppins text-2xl font-extrabold mb-2 text-white">
                Calculation Completed!
              </h3>
              <p className="text-white/60 font-inter text-sm mb-8 max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Based on your selections, we calculated the following budgetary scope:
              </p>

              {/* Price Bracket Box */}
              <div className="max-w-md mx-auto bg-orange/10 border border-orange/20 rounded-2xl py-8 px-6 mb-8 shadow-glow">
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-inter font-medium">
                  Estimated Project Scope Bracket
                </span>
                <span className="block font-poppins text-3xl md:text-4xl font-extrabold text-orange mb-3 tracking-tight">
                  {calculationResult.range}
                </span>
                <div className="flex justify-around items-center text-xs text-white/65 font-inter pt-4 border-t border-white/10">
                  <div>
                    <span className="block text-white font-bold">{calculationResult.totalArea} sq.ft</span>
                    <span className="text-[10px] text-white/40 uppercase">Total Area</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <span className="block text-white font-bold">₹{calculationResult.avgSqFtRate}/sq.ft</span>
                    <span className="text-[10px] text-white/40 uppercase">Avg rate</span>
                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto text-center text-xs text-white/50 leading-relaxed font-inter mb-6">
                <span className="text-gold font-semibold block mb-1">★ Includes Site Visit Validation</span>
                Our technical manager will contact you at <span className="text-white font-semibold">{formData.phone}</span> within 24 hours to schedule a free site survey and deliver a fully itemized itemized proposal.
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    propertyType: '',
                    area: '',
                    materialPackage: 'Premium',
                    location: 'Chennai',
                    timeline: '3-6 Months',
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                  });
                }}
                className="h-12 px-6 border border-white/10 text-white rounded-button hover:bg-white/5 transition-colors font-inter text-sm font-semibold focus:outline-none"
              >
                Recalculate Estimate
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
