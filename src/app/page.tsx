import { Hero } from "@/components/dom/Hero";
import { About } from "@/components/dom/About";
import { CTA } from "@/components/dom/CTA";
import { Services } from "@/components/dom/Services";
import { Gallery } from "@/components/dom/Gallery";
import { Contact } from "@/components/dom/Contact";
import { Footer } from "@/components/dom/Footer";

export default function Home() {
  return (
    <main className="relative w-full selection:bg-foreground selection:text-background min-h-screen">
      {/* Scrollable DOM Content - V2 Modular Flow */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <CTA />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
