import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ClipboardList } from 'lucide-react';

export default function MobileStickyBar() {
  const navigate = useNavigate();
  
  // WhatsApp Link Config
  const phoneNumber = "917305485051"; 
  const message = encodeURIComponent(
    "Hello Royal Construction,\n\nI'm interested in your construction services.\n\nProject Type:\nLocation:\nBudget:\n\nPlease contact me."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black border-t border-white/10 shadow-premium z-50 grid grid-cols-3 h-16 divide-x divide-white/10">
      
      {/* Call button */}
      <a
        href="tel:+917305485051"
        className="flex flex-col items-center justify-center text-white hover:text-orange transition-colors"
      >
        <Phone className="w-5 h-5 text-orange mb-1" />
        <span className="text-[10px] font-semibold tracking-wide uppercase font-inter">
          Call Now
        </span>
      </a>

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center text-white hover:text-orange transition-colors"
      >
        <img 
          src="/assets/images/whatsapp_logo.png" 
          alt="WhatsApp" 
          className="w-5 h-5 mb-1 object-contain"
        />
        <span className="text-[10px] font-semibold tracking-wide uppercase font-inter">
          WhatsApp
        </span>
      </a>

      {/* Get Quote button */}
      <button
        onClick={() => navigate('/contact', { state: { scrollContactForm: true } })}
        className="flex flex-col items-center justify-center text-white hover:text-orange transition-colors focus:outline-none"
      >
        <ClipboardList className="w-5 h-5 text-orange mb-1" />
        <span className="text-[10px] font-semibold tracking-wide uppercase font-inter">
          Get Quote
        </span>
      </button>
      
    </div>
  );
}
