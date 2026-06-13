import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import CostEstimator from '../components/CostEstimator';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Contact() {
  const routerLocation = useLocation();
  const estimatorSectionRef = useRef(null);
  const contactFormRef = useRef(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Residential',
    budget: '10-25 Lakhs',
    area: '',
    message: ''
  });

  // Handle URL states and scrolls
  useEffect(() => {
    if (routerLocation.state?.scrollEstimator && estimatorSectionRef.current) {
      setTimeout(() => {
        estimatorSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else if (routerLocation.state?.scrollContactForm && contactFormRef.current) {
      setTimeout(() => {
        contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }

    if (routerLocation.state?.selectService) {
      setFormData(prev => ({ 
        ...prev, 
        projectType: routerLocation.state.selectService.includes('Interior') ? 'Interior' : 'Residential',
        message: `Interested in: ${routerLocation.state.selectService}`
      }));
    }
  }, [routerLocation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Simulate API Submission
    console.log("Form Lead Data:", formData);
    setFormSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/project_ecr_villa.png" 
            alt="Contact Royal Construction and Interiors" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-content mx-auto px-6 text-center"
        >
          <span className="text-orange text-xs md:text-sm uppercase tracking-[0.25em] font-extrabold mb-3 bg-orange/15 px-4 py-2 rounded-full border border-orange/20 inline-block font-poppins">
            Transforming Spaces. Building Trust. Delivering Excellence.
          </span>
          <h1 className="text-h1 text-white mb-4">
            Contact Our Office
          </h1>
          <p className="text-body text-white/60 max-w-xl mx-auto mb-6">
            Schedule a site consultation or request a structural proposal. We respond within 24 business hours.
          </p>
        </motion.div>
      </section>

      {/* 2. Split Layout Form & Details */}
      <section ref={contactFormRef} className="section-padding bg-blueprint bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Qualified Contact Form */}
            <div className="bg-lightgray p-8 rounded-2xl border border-lightgray-border shadow-soft">
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="relative">
                  {/* Transparent click backdrop to close custom dropdowns */}
                  {(projectTypeOpen || budgetOpen) && (
                    <div 
                      className="fixed inset-0 z-40 bg-transparent cursor-default" 
                      onClick={() => {
                        setProjectTypeOpen(false);
                        setBudgetOpen(false);
                      }}
                    />
                  )}

                  <h2 className="text-h3 text-black mb-2">
                    Inquire About Your Project
                  </h2>
                  <p className="text-body text-black/50 mb-6">
                    Fill in your details below. This helps our engineers qualify your request before the sales call.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Arvind Krishnan"
                        className="w-full h-11 px-4 rounded-button bg-white border border-lightgray-border focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 73054 85051"
                        className="w-full h-11 px-4 rounded-button bg-white border border-lightgray-border focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="arvind@gmail.com"
                        className="w-full h-11 px-4 rounded-button bg-white border border-lightgray-border focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-location" className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Project Location *</label>
                      <input
                        id="contact-location"
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="ECR, Chennai"
                        className="w-full h-11 px-4 rounded-button bg-white border border-lightgray-border focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 relative z-50">
                    <div className="relative">
                      <label className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Project Type</label>
                      <button
                        type="button"
                        onClick={() => {
                          setProjectTypeOpen(!projectTypeOpen);
                          setBudgetOpen(false);
                        }}
                        className={`w-full h-11 px-4 rounded-button bg-white border transition-all flex items-center justify-between text-left focus:outline-none text-black font-inter text-sm ${
                          projectTypeOpen ? 'border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.1)]' : 'border-lightgray-border hover:border-black/20'
                        }`}
                      >
                        <span className="truncate">
                          {
                            [
                              { value: 'Residential', label: 'Residential Construction' },
                              { value: 'Commercial', label: 'Commercial Construction' },
                              { value: 'Interior', label: 'Interior Design' },
                              { value: 'Renovation', label: 'Renovation & Remodeling' }
                            ].find(p => p.value === formData.projectType)?.label || 'Select Project Type'
                          }
                        </span>
                        <ChevronDown className={`w-4 h-4 text-black/60 transition-transform duration-300 flex-shrink-0 ${projectTypeOpen ? 'rotate-180 text-orange' : ''}`} />
                      </button>

                      {projectTypeOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-lightgray-border rounded-xl shadow-premium z-50 max-h-60 overflow-y-auto animate-fade-in divide-y divide-lightgray-border">
                           {[
                            { value: 'Residential', label: 'Residential Construction' },
                            { value: 'Commercial', label: 'Commercial Construction' },
                            { value: 'Interior', label: 'Interior Design' },
                            { value: 'Renovation', label: 'Renovation & Remodeling' }
                          ].map((type) => {
                            const isSelected = formData.projectType === type.value;
                            return (
                              <div
                                key={type.value}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, projectType: type.value }));
                                  setProjectTypeOpen(false);
                                }}
                                className={`px-4 py-3.5 text-sm cursor-pointer transition-all duration-200 flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-orange/10 text-orange font-bold border-l-4 border-orange'
                                    : 'text-black/80 hover:bg-lightgray hover:text-black border-l-4 border-transparent'
                                }`}
                              >
                                <span>{type.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-area" className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Approx. Area Size (Sq.ft)</label>
                      <input
                        id="contact-area"
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g. 1500 sq.ft"
                        className="w-full h-11 px-4 rounded-button bg-white border border-lightgray-border focus:outline-none focus:border-orange font-inter text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-6 relative z-50">
                    <label className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Estimated Budget Bracket</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          setBudgetOpen(!budgetOpen);
                          setProjectTypeOpen(false);
                        }}
                        className={`w-full h-11 px-4 rounded-button bg-white border transition-all flex items-center justify-between text-left focus:outline-none text-black font-inter text-sm ${
                          budgetOpen ? 'border-orange ring-1 ring-orange/30 shadow-[0_0_20px_rgba(255,107,0,0.1)]' : 'border-lightgray-border hover:border-black/20'
                        }`}
                      >
                        <span className="truncate">
                          {
                            [
                              { value: '5-10 Lakhs', label: '₹5 Lakhs – ₹10 Lakhs' },
                              { value: '10-25 Lakhs', label: '₹10 Lakhs – ₹25 Lakhs' },
                              { value: '25-50 Lakhs', label: '₹25 Lakhs – ₹50 Lakhs' },
                              { value: '50 Lakhs+', label: '₹50 Lakhs +' }
                            ].find(b => b.value === formData.budget)?.label || 'Select Budget Bracket'
                          }
                        </span>
                        <ChevronDown className={`w-4 h-4 text-black/60 transition-transform duration-300 flex-shrink-0 ${budgetOpen ? 'rotate-180 text-orange' : ''}`} />
                      </button>

                      {budgetOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-lightgray-border rounded-xl shadow-premium z-50 max-h-60 overflow-y-auto animate-fade-in divide-y divide-lightgray-border">
                          {[
                            { value: '5-10 Lakhs', label: '₹5 Lakhs – ₹10 Lakhs' },
                            { value: '10-25 Lakhs', label: '₹10 Lakhs – ₹25 Lakhs' },
                            { value: '25-50 Lakhs', label: '₹25 Lakhs – ₹50 Lakhs' },
                            { value: '50 Lakhs+', label: '₹50 Lakhs +' }
                          ].map((b) => {
                            const isSelected = formData.budget === b.value;
                            return (
                              <div
                                key={b.value}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, budget: b.value }));
                                  setBudgetOpen(false);
                                }}
                                className={`px-4 py-3.5 text-sm cursor-pointer transition-all duration-200 flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-orange/10 text-orange font-bold border-l-4 border-orange'
                                    : 'text-black/80 hover:bg-lightgray hover:text-black border-l-4 border-transparent'
                                }`}
                              >
                                <span>{b.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase text-black/50 mb-1.5">Describe Requirements</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding architectural elevations, soil piling, or modular layouts..."
                      className="w-full p-4 rounded-button bg-white border border-lightgray-border focus:outline-none focus:border-orange font-inter text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full shadow-soft uppercase tracking-wider font-bold"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 animate-fade-in">
                  <div className="w-14 h-14 bg-orange/15 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="text-h3 text-black mb-2">Inquiry Submitted Successfully!</h3>
                  <p className="text-body text-black/55 mb-6 max-w-sm mx-auto">
                    Thank you, <span className="text-black font-semibold">{formData.name}</span>. Our technical coordinator will call you within 24 business hours to validation details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="h-10 px-6 border border-black/10 hover:bg-black/5 transition-all text-black rounded-button text-xs font-bold font-inter focus:outline-none"
                  >
                    Submit New Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right Side: Contact Info & Maps */}
            <div className="flex flex-col gap-10 lg:pl-6 w-full">
              <div>
                <span className="label-uppercase">
                  Head Office
                </span>
                <h2 className="text-h2 text-black mb-6">
                  Get in Touch With Us
                </h2>
                
                <div className="flex flex-col gap-6 text-black/75 font-inter text-sm md:text-base">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-poppins font-bold text-black text-sm md:text-base mb-1">Corporate Address</h4>
                      <p className="leading-relaxed text-black/60 text-xs md:text-sm">
                        Royal Complex, Meenakshi Amman Kovil Street,<br />
                        Maduranthakam - 603306, TN, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-poppins font-bold text-black text-sm md:text-base mb-1">Call Channels</h4>
                      <p className="text-black/60 text-xs md:text-sm">
                        <a href="tel:+917305485051" className="hover:text-orange block transition-colors">+91 73054 85051</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-poppins font-bold text-black text-sm md:text-base mb-1">Email Queries</h4>
                      <p className="text-black/60 text-xs md:text-sm">
                        <a href="mailto:royalconstructiondm@gmail.com" className="hover:text-orange transition-colors">
                          royalconstructiondm@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-poppins font-bold text-black text-sm md:text-base mb-1">Business Hours</h4>
                      <p className="text-black/60 text-xs md:text-sm">
                        Monday – Saturday: 9:00 AM – 6:30 PM<br />
                        <span className="text-orange font-semibold">Sunday: Closed (Prior Appointment Only)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed iframe */}
              <div className="rounded-2xl overflow-hidden h-72 border border-lightgray-border shadow-soft w-full">
                <iframe 
                  title="Royal Construction & Interiors Location Map"
                  src="https://maps.google.com/maps?q=Royal%20Complex%2C%20Meenakshi%20Amman%20Kovil%20Street%2C%20Maduranthakam%20-%20603306&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </motion.div>
      </section>

      {/* 3. Bottom Block Cost Estimator */}
      <div ref={estimatorSectionRef} className="border-t border-lightgray-border">
        <CostEstimator />
      </div>

    </div>
  );
}
