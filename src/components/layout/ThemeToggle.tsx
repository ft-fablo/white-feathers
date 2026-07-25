"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Mail, Sun, Moon } from "lucide-react";

interface NavPillProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  isThemeToggle?: boolean;
  isDark?: boolean;
}

function NavPillButton({ label, icon: Icon, onClick, isThemeToggle, isDark }: NavPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      layout
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
        {isThemeToggle ? (
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#3e1c13] dark:text-[#f7f2de]" />
          </motion.div>
        ) : (
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#3e1c13] dark:text-[#f7f2de]" />
        )}

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
    </motion.button>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2.5 sm:gap-3 pointer-events-none">
        <div className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>
    );
  }

  const scrollToSection = (id: string) => {
    // If user is on a service subpage, route back to main page section
    if (pathname !== "/") {
      if (id === "home") {
        router.push("/");
      } else {
        router.push(`/#${id}`);
      }
      return;
    }

    if (id === "home") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, { offset: -20, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isDark = resolvedTheme === "dark";

  return (
    <nav
      aria-label="Floating Navigation"
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2.5 sm:gap-3 pointer-events-auto"
    >
      {/* 1. Home */}
      <NavPillButton
        label="Home"
        icon={Home}
        onClick={() => scrollToSection("home")}
      />

      {/* 2. Services */}
      <NavPillButton
        label="Services"
        icon={Briefcase}
        onClick={() => scrollToSection("services")}
      />

      {/* 3. Contact */}
      <NavPillButton
        label="Contact"
        icon={Mail}
        onClick={() => scrollToSection("contact")}
      />

      {/* 4. Dark/Light Theme Toggle */}
      <NavPillButton
        label={isDark ? "Light Mode" : "Dark Mode"}
        icon={isDark ? Sun : Moon}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        isThemeToggle
        isDark={isDark}
      />
    </nav>
  );
}
