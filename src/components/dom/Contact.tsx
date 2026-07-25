"use client";

import React from "react";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-12 p-4 pointer-events-auto">
      <div className="w-full max-w-7xl mx-auto min-h-[80vh] rounded-[40px] bg-card shadow-lg flex flex-col md:flex-row overflow-hidden border border-border">
        {/* Left Side: Company Details */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900 border-b md:border-b-0 md:border-r border-border relative">
          {/* Liquid Glass Font Styling Container for Details */}
          <div className="relative inline-block mb-10 self-start">
            <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay" />
            <h2 className="relative text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
              Get in Touch
            </h2>
          </div>

          <div className="space-y-8 text-accent-grey mb-16">
            <div className="flex flex-col space-y-1">
              <span className="text-xs font-bold text-foreground mb-1 uppercase tracking-widest opacity-80">Phone</span>
              <a href="tel:+971522309749" className="text-lg hover:text-[#c09757] transition-colors">
                +971 522309749
              </a>
              <a href="tel:+97165207131" className="text-lg hover:text-[#c09757] transition-colors">
                +971 65207131
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground mb-1 uppercase tracking-widest opacity-80">Email</span>
              <a href="mailto:sales@whitefeathers.com" className="text-lg hover:text-[#c09757] transition-colors">
                sales@whitefeathers.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground mb-1 uppercase tracking-widest opacity-80">Address</span>
              <p className="text-lg max-w-[250px]">Ajman, UAE</p>
            </div>
          </div>

          <h3 className="text-sm font-bold mb-4 text-foreground uppercase tracking-widest opacity-80">Connect</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/971522309749"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border bg-card hover:bg-border/50 hover:scale-[1.02] transition-all text-foreground font-medium text-sm shadow-sm"
            >
              WhatsApp
            </a>
            <a
              href="mailto:sales@whitefeathers.com"
              className="px-6 py-3 rounded-full border border-border bg-card hover:bg-border/50 hover:scale-[1.02] transition-all text-foreground font-medium text-sm shadow-sm"
            >
              Email / Gmail
            </a>
            <a
              href="https://www.instagram.com/__white_feathers__"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border bg-card hover:bg-border/50 hover:scale-[1.02] transition-all text-foreground font-medium text-sm shadow-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090470451513"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border bg-card hover:bg-border/50 hover:scale-[1.02] transition-all text-foreground font-medium text-sm shadow-sm"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-background relative">
          {/* Liquid Glass Font Styling Container for Form */}
          <div className="relative inline-block mb-10 self-start">
            <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay" />
            <h2 className="relative text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
              Start a Project
            </h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-6">
            <div className="flex flex-col group">
              <label className="text-xs font-bold text-foreground mb-2 uppercase tracking-widest opacity-80 group-focus-within:opacity-100 transition-opacity">Name</label>
              <input type="text" suppressHydrationWarning placeholder="John Doe" className="bg-card border border-border rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" />
            </div>
            <div className="flex flex-col group">
              <label className="text-xs font-bold text-foreground mb-2 uppercase tracking-widest opacity-80 group-focus-within:opacity-100 transition-opacity">Email</label>
              <input type="email" suppressHydrationWarning placeholder="john@example.com" className="bg-card border border-border rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" />
            </div>
            <div className="flex flex-col group">
              <label className="text-xs font-bold text-foreground mb-2 uppercase tracking-widest opacity-80 group-focus-within:opacity-100 transition-opacity">Message</label>
              <textarea rows={4} suppressHydrationWarning placeholder="Tell us about your project..." className="bg-card border border-border rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm resize-none"></textarea>
            </div>
            <button type="submit" suppressHydrationWarning className="bg-[#c09757] text-[#3e1c13] font-bold py-4 rounded-2xl hover:bg-[#3e1c13] hover:text-[#f7f2de] transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4 border border-transparent">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
