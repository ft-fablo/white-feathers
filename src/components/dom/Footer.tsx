"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full p-4 pointer-events-auto pb-8">
      <div className="w-full max-w-7xl mx-auto rounded-[40px] bg-card flex flex-col items-center justify-between p-8 sm:p-12 border border-border shadow-sm">
        {/* Top Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-light tracking-widest text-foreground uppercase mb-2">
            White Feathers
          </h2>
          <p className="text-xs sm:text-sm text-accent-grey font-mono uppercase tracking-widest">
            Where imagination Meets print
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-foreground mb-8">
          <a href="tel:+971522309749" className="flex items-center gap-2 hover:text-[#c09757] transition-colors">
            <Phone className="w-4 h-4 text-[#c09757]" />
            <span>+971 522309749</span>
          </a>
          <a href="tel:+97165207131" className="flex items-center gap-2 hover:text-[#c09757] transition-colors">
            <Phone className="w-4 h-4 text-[#c09757]" />
            <span>+971 65207131</span>
          </a>
          <a href="mailto:sales@whitefeathers.com" className="flex items-center gap-2 hover:text-[#c09757] transition-colors">
            <Mail className="w-4 h-4 text-[#c09757]" />
            <span>sales@whitefeathers.com</span>
          </a>
          <div className="flex items-center gap-2 text-accent-grey">
            <MapPin className="w-4 h-4 text-[#c09757]" />
            <span>Ajman, UAE</span>
          </div>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="https://wa.me/971522309749"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/__white_feathers__"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-600 border border-pink-500/20 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-sm"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100090470451513"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center border-t border-border/60 pt-6 w-full max-w-xl">
          <img
            src="/logo-transparent.png"
            alt="White Feathers Logo"
            className="w-28 sm:w-36 h-auto object-contain mb-2 dark:hidden"
          />
          <img
            src="/logo-dark-theme.png"
            alt="White Feathers Logo"
            className="w-28 sm:w-36 h-auto object-contain mb-2 hidden dark:block"
          />
          <div className="text-xs font-mono tracking-widest text-accent-grey/50 select-none">
            © {new Date().getFullYear()} WHITE FEATHERS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
