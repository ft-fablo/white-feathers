"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-12 p-4 pointer-events-auto">
      <div className="w-full max-w-7xl mx-auto min-h-[80vh] rounded-[40px] bg-card shadow-lg flex flex-col md:flex-row overflow-hidden border border-border">
        {/* Left Side: Company Details & Interactive Buttons */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-20 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900 border-b md:border-b-0 md:border-r border-border relative">
          <div>
            {/* Title Container */}
            <div className="relative inline-block mb-10 self-start">
              <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay" />
              <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
                Get in Touch
              </h2>
            </div>

            {/* Detailed Info Cards with Direct Action Buttons */}
            <div className="space-y-6 text-accent-grey mb-10">
              {/* Phone Item */}
              <div className="p-4 rounded-2xl bg-background border border-border/80 flex items-center justify-between group hover:border-[#c09757] transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c09757]/15 text-[#c09757] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70 block">
                      Phone Call
                    </span>
                    <a href="tel:+971522309749" className="text-base sm:text-lg font-medium text-foreground hover:text-[#c09757] transition-colors">
                      +971 522309749
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+971522309749"
                  className="px-4 py-2 rounded-xl bg-[#c09757] hover:bg-[#a88244] text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>

              {/* Email Item */}
              <div className="p-4 rounded-2xl bg-background border border-border/80 flex items-center justify-between group hover:border-[#c09757] transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c09757]/15 text-[#c09757] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70 block">
                      Email Address
                    </span>
                    <a href="mailto:sales@whitefeathers.com" className="text-base sm:text-lg font-medium text-foreground hover:text-[#c09757] transition-colors">
                      sales@whitefeathers.com
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:sales@whitefeathers.com"
                  className="px-4 py-2 rounded-xl bg-foreground text-background hover:bg-foreground/80 text-xs font-semibold shadow-md transition-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>

              {/* WhatsApp Item */}
              <div className="p-4 rounded-2xl bg-background border border-border/80 flex items-center justify-between group hover:border-emerald-500 transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70 block">
                      WhatsApp Chat
                    </span>
                    <a
                      href="https://wa.me/971522309749"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-medium text-foreground hover:text-emerald-600 transition-colors"
                    >
                      +971 522309749
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/971522309749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

              {/* Address Item */}
              <div className="p-4 rounded-2xl bg-background border border-border/80 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#c09757]/15 text-[#c09757] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground uppercase tracking-widest opacity-70 block">
                    Location
                  </span>
                  <p className="text-base sm:text-lg font-medium text-foreground">
                    Ajman, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xs font-bold mb-3 text-foreground uppercase tracking-widest opacity-80">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/971522309749"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/__white_feathers__"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-600 hover:bg-pink-600 hover:text-white transition-all text-xs font-semibold shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090470451513"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold shadow-sm"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Message Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-20 flex flex-col justify-center bg-background relative">
          <div className="relative inline-block mb-8 self-start">
            <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay" />
            <h2 className="relative text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
              Start a Project
            </h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-5">
            <div className="flex flex-col group">
              <label className="text-xs font-bold text-foreground mb-2 uppercase tracking-widest opacity-80 group-focus-within:opacity-100 transition-opacity">
                Your Name
              </label>
              <input
                type="text"
                suppressHydrationWarning
                placeholder="John Doe"
                className="bg-card border border-border rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-[#c09757] focus:ring-4 focus:ring-[#c09757]/10 transition-all shadow-sm text-sm"
              />
            </div>
            <div className="flex flex-col group">
              <label className="text-xs font-bold text-foreground mb-2 uppercase tracking-widest opacity-80 group-focus-within:opacity-100 transition-opacity">
                Email Address
              </label>
              <input
                type="email"
                suppressHydrationWarning
                placeholder="sales@whitefeathers.com"
                className="bg-card border border-border rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-[#c09757] focus:ring-4 focus:ring-[#c09757]/10 transition-all shadow-sm text-sm"
              />
            </div>
            <div className="flex flex-col group">
              <label className="text-xs font-bold text-foreground mb-2 uppercase tracking-widest opacity-80 group-focus-within:opacity-100 transition-opacity">
                Message &amp; Project Requirements
              </label>
              <textarea
                rows={4}
                suppressHydrationWarning
                placeholder="Tell us about your printing or packaging project..."
                className="bg-card border border-border rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-[#c09757] focus:ring-4 focus:ring-[#c09757]/10 transition-all shadow-sm resize-none text-sm"
              />
            </div>
            <button
              type="submit"
              suppressHydrationWarning
              className="bg-[#c09757] text-white font-bold py-4 rounded-2xl hover:bg-[#a88244] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl mt-2 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
