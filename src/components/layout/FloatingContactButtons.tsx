"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { trackGoogleConversion } from "@/lib/gtag";

interface FloatingPillProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  accentColor?: string;
  isExternal?: boolean;
  onClick?: () => void;
}

function FloatingPillButton({ label, icon: Icon, href, accentColor, isExternal, onClick }: FloatingPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      layout
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      className="relative flex items-center h-10 sm:h-12 px-3 sm:px-3.5 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-[#3e1c13]/40 hover:border-[#c09757] dark:hover:border-[#c09757] hover:shadow-lg cursor-pointer text-foreground focus:outline-none overflow-hidden select-none pointer-events-auto"
      aria-label={label}
    >
      <motion.div layout className="flex items-center justify-center">
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${accentColor || "text-[#3e1c13] dark:text-[#f7f2de]"}`} />

        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden whitespace-nowrap font-medium text-xs sm:text-sm text-[#3e1c13] dark:text-[#f7f2de]"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.a>
  );
}

export function FloatingContactButtons() {
  return (
    <div
      aria-label="Floating Quick Contact"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2.5 sm:gap-3 pointer-events-auto"
    >
      {/* 1. Call Button */}
      <FloatingPillButton
        label="Call Us"
        icon={Phone}
        href="tel:+971522309749"
        onClick={() => trackGoogleConversion()}
      />

      {/* 2. WhatsApp Button */}
      <FloatingPillButton
        label="WhatsApp"
        icon={MessageCircle}
        href="https://wa.me/971522309749"
        accentColor="text-emerald-600 dark:text-emerald-400"
        isExternal
        onClick={() => trackGoogleConversion()}
      />
    </div>
  );
}
