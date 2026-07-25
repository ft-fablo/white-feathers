"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 pointer-events-auto">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971522309749"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-110 border border-emerald-400/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/10" />
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-black/80 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-white/10">
          WhatsApp Us (+971 522309749)
        </span>
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+971522309749"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#c09757] hover:bg-[#a88244] text-white shadow-xl hover:shadow-[#c09757]/30 transition-all duration-300 hover:scale-110 border border-[#f7f2de]/30"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-black/80 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-white/10">
          Call +971 522309749
        </span>
      </a>
    </div>
  );
}
