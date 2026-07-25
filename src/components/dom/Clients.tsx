"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogo {
  id: number;
  name: string;
  jpegImage: string;
  jpgImage: string;
  pngImage: string;
}

// 11 Client / Company Partners (aligned 4 - 4 - 3 centered)
const CLIENTS: ClientLogo[] = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: `Partner Brand ${i + 1}`,
  jpegImage: `/clients/client-${i + 1}.jpeg`,
  jpgImage: `/clients/client-${i + 1}.jpg`,
  pngImage: `/clients/client-${i + 1}.png`,
}));

function ClientCard({ client }: { client: ClientLogo }) {
  // Try .jpeg first, fallback to .jpg, then .png, then text
  const [imgSrc, setImgSrc] = useState<string>(client.jpegImage);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (imgSrc === client.jpegImage) {
      setImgSrc(client.jpgImage);
    } else if (imgSrc === client.jpgImage) {
      setImgSrc(client.pngImage);
    } else {
      setHasError(true);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[calc(50%-0.5rem)] sm:w-[calc(25%-1.25rem)] aspect-[16/9] rounded-2xl bg-card border border-border hover:border-[#c09757] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative w-full h-full">
        {!hasError ? (
          <Image
            src={imgSrc}
            alt={client.name}
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            onError={handleError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-grey group-hover:text-[#c09757] transition-colors select-none text-center">
              {client.name}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Clients() {
  return (
    <section id="clients" className="relative w-full py-16 p-4 pointer-events-auto">
      <div className="w-full max-w-7xl mx-auto rounded-[40px] bg-card shadow-xl p-8 sm:p-12 md:p-16 border border-border">
        
        {/* Header Container (Centered) */}
        <div className="relative flex flex-col items-center text-center mx-auto mb-12 max-w-3xl">
          <div className="relative inline-block mb-3">
            <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay" />
            <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
              Who We Work With
            </h2>
          </div>
          <p className="text-base sm:text-lg text-accent-grey font-normal text-center">
            Trusted by leading brands, retail pioneers, and corporate enterprises across the UAE and globally.
          </p>
        </div>

        {/* 11 Client Logos Aligned 4 - 4 - 3 (Centered Row 3) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
          {CLIENTS.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
