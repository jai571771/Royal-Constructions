import React from 'react';

export default function FloatingWhatsApp() {
  const phoneNumber = "917305485051"; 
  const message = encodeURIComponent(
    "Hello Royal Construction,\n\nI'm interested in your construction services.\n\nProject Type:\nLocation:\nBudget:\n\nPlease contact me."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 w-14 h-14 items-center justify-center transition-all duration-300 hover:scale-110 group focus:outline-none"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-[20%] bg-[#25D366]/30 animate-ping pointer-events-none" />
      <span className="absolute inset-[-4px] rounded-[20%] bg-[#25D366]/10 animate-pulse pointer-events-none" />
      
      {/* Image Icon */}
      <img 
        src="/assets/images/whatsapp_logo.png" 
        alt="WhatsApp" 
        className="w-full h-full object-contain relative z-10"
      />

      {/* Floating Help Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-button opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-soft">
        Chat with Us
      </span>
    </a>
  );
}
