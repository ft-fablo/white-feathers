"use client";

import React from "react";
import Image from "next/image";

interface CapabilityItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  tag: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 1,
    title: "Paper Digital Printing",
    desc: "High-speed, high-resolution digital printing for short runs, corporate stationery, brochures, and marketing collaterals.",
    image: "/capabilities/paper-digital-printing.jpg",
    tag: "High Precision"
  },
  {
    id: 2,
    title: "Offset Printing",
    desc: "Commercial high-volume printing delivering razor-sharp text, consistent Pantone color accuracy, and premium finishing.",
    image: "/capabilities/offset-printing.jpg",
    tag: "High Volume"
  },
  {
    id: 3,
    title: "Large Format Printing",
    desc: "Vibrant outdoor billboards, retail window decals, trade show backdrops, and weather-resistant vinyl banners.",
    image: "/capabilities/large-format.jpg",
    tag: "Outdoor & POS"
  },
  {
    id: 4,
    title: "Sublimation Printing",
    desc: "Deep dye-sublimation fused into performance fabrics, sportswear, soft signage, and custom textiles with zero fading.",
    image: "/capabilities/sublimation-printing.jpg",
    tag: "Textiles & Apparel"
  },
  {
    id: 5,
    title: "UV Printing",
    desc: "Direct-to-substrate UV ink curing on acrylic, anodized metal, bamboo, glass, and specialty promotional items.",
    image: "/capabilities/uv-printing.jpg",
    tag: "Multi-Substrate"
  },
  {
    id: 6,
    title: "Screen Printing",
    desc: "Artisanal high-density ink application for luxury packaging, apparel, tote bags, and textured custom surfaces.",
    image: "/capabilities/screen-printing.jpeg",
    tag: "Tactile Finish"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="relative w-full py-16 p-4 pointer-events-auto">
      <div className="w-full max-w-7xl mx-auto rounded-[40px] bg-card shadow-xl p-8 sm:p-12 md:p-20 border border-border">
        
        {/* Header Container */}
        <div className="relative inline-block mb-12 sm:mb-16">
          <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay"></span>
          <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-accent-grey font-normal max-w-2xl">
            Explore our state-of-the-art print engineering technologies and production capabilities.
          </p>
        </div>

        {/* What We Do Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {CAPABILITIES.map((item) => (
            <div key={item.id} className="flex flex-col gap-3.5 group">
              {/* 1. SEPARATE SERVICE TITLE */}
              <div className="px-1 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-[#c09757] transition-colors leading-tight text-center">
                  {item.title}
                </h3>
              </div>

              {/* 2. IMAGE CARD */}
              <div className="relative w-full aspect-[3.5/2] rounded-[30px] overflow-hidden bg-card border border-border group-hover:border-[#c09757] shadow-sm group-hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Default State: ONLY the Service Image */}
                <div className="absolute inset-0 w-full h-full z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Hover State: Service Description */}
                <div className="absolute inset-0 z-20 p-6 sm:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 ease-out bg-background/95 dark:bg-card/95">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#c09757]/15 border border-[#c09757]/30 text-[#c09757] text-xs font-semibold uppercase mb-3">
                      <span>{item.tag}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
