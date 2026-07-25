"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import {
  Home,
  User,
  Briefcase,
  Image as ImageIcon,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track active section via IntersectionObserver when on home page
  useEffect(() => {
    if (!mounted || pathname !== "/") return;

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mounted, pathname]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);

    // If on subpage (e.g. /services/[slug]), navigate to main page section
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
      setActiveSection("home");
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      if (lenis) {
        lenis.scrollTo(targetElement, { offset: -20, duration: 1.2 });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(id);
    }
  };

  if (!mounted) {
    return (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto px-6 py-3 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10" />
    );
  }

  return (
    <>
      {/* Desktop Floating Navigation Dock */}
      <header
        aria-label="Main Navigation"
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl pointer-events-auto"
      >
        <nav className="relative flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-black/5 transition-all duration-300">
          {/* Brand Badge */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors group cursor-pointer focus:outline-none"
          >
            <div className="w-7 h-7 rounded-full bg-[#f8f3e6] dark:bg-zinc-900 border border-[#c09757]/40 flex items-center justify-center shadow-sm overflow-hidden p-0.5 group-hover:scale-110 transition-transform">
              <img src="/logo-icon.png" alt="White Feathers Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-tight text-foreground whitespace-nowrap">
              White Feathers
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === "/" && activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-[#c09757] text-white shadow-md font-semibold scale-105"
                      : "text-foreground/75 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Actions: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer focus:outline-none hover:rotate-45"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-4 sm:h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-4 sm:h-4 text-zinc-700" />
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-all cursor-pointer focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-3xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === "/" && activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all text-left cursor-pointer ${
                    isActive
                      ? "bg-[#c09757] text-white font-semibold shadow-sm"
                      : "text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
