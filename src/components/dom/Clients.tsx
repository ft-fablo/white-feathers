"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

// 13 Client / Company Partners
const CLIENTS: ClientLogo[] = [
  { id: 1, name: "Partner Brand 1", image: "/clients/client-1.png" },
  { id: 2, name: "Partner Brand 2", image: "/clients/client-2.png" },
  { id: 3, name: "Partner Brand 3", image: "/clients/client-3.png" },
  { id: 4, name: "Partner Brand 4", image: "/clients/client-4.png" },
  { id: 5, name: "Partner Brand 5", image: "/clients/client-5.png" },
  { id: 6, name: "Partner Brand 6", image: "/clients/client-6.png" },
  { id: 7, name: "Partner Brand 7", image: "/clients/client-7.png" },
  { id: 8, name: "Partner Brand 8", image: "/clients/client-8.png" },
  { id: 9, name: "Partner Brand 9", image: "/clients/client-9.png" },
  { id: 10, name: "Partner Brand 10", image: "/clients/client-10.png" },
  { id: 11, name: "Partner Brand 11", image: "/clients/client-11.png" },
  { id: 12, name: "Partner Brand 12", image: "/clients/client-12.png" },
  { id: 13, name: "Partner Brand 13", image: "/clients/client-13.png" },
];

export function Clients() {
  return (
    <section id="clients" className="relative w-full py-16 p-4 pointer-events-auto">
      <div className="w-full max-w-7xl mx-auto rounded-[40px] bg-card shadow-xl p-8 sm:p-12 md:p-16 border border-border">
        
        {/* Header Container */}
        <div className="relative inline-block mb-12 text-center sm:text-left">
          <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay" />
          <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md mb-3">
            Who We Work With
          </h2>
          <p className="text-base sm:text-lg text-accent-grey font-normal max-w-2xl">
            Trusted by leading brands, retail pioneers, and corporate enterprises across the UAE and globally.
          </p>
        </div>

        {/* 13 Client Logos Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {CLIENTS.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[16/9] rounded-2xl bg-background/80 dark:bg-background/40 border border-border/80 hover:border-[#c09757] p-4 flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              {/* Fallback & Custom Logo Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    // Fallback to stylized logo text if image is not yet uploaded
                    const target = e.target as HTMLElement;
                    target.style.display = "none";
                  }}
                />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-grey group-hover:text-[#c09757] transition-colors select-none text-center">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
