import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { getServiceBySlug, getAllServices } from "@/lib/wordpress";
import { ProductShowcase } from "@/components/dom/ProductShowcase";
import { Footer } from "@/components/dom/Footer";

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | White Feathers`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = await getAllServices();

  // Find index for next/prev service navigation
  const currentIndex = allServices.findIndex((s) => s.slug === slug);
  const prevService = allServices[(currentIndex - 1 + allServices.length) % allServices.length];
  const nextService = allServices[(currentIndex + 1) % allServices.length];

  return (
    <main className="relative text-foreground w-full min-h-screen selection:bg-foreground selection:text-background">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center gap-2">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs sm:text-sm font-medium transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Services</span>
          </Link>
          <span className="text-foreground/30">/</span>
          <span className="text-xs sm:text-sm font-semibold text-[#c09757]">{service.title}</span>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c09757]/15 border border-[#c09757]/30 text-[#c09757] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Craftsmanship</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl font-light text-[#c09757] leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-normal">
              {service.longDesc}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#c09757] hover:bg-[#a88244] text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              >
                <span>Request a Quote for {service.title}</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[36px] overflow-hidden border border-border shadow-2xl group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Interactive Product Showcase */}
      <ProductShowcase products={service.products} serviceTitle={service.title} />

      {/* Service Navigator (Previous / Next Service) */}
      <section className="py-12 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/services/${prevService.slug}`}
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-foreground group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-grey block">Previous Service</span>
              <span className="text-base font-bold text-foreground">{prevService.title}</span>
            </div>
          </Link>

          <Link
            href={`/services/${nextService.slug}`}
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-right group"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-grey block">Next Service</span>
              <span className="text-base font-bold text-foreground">{nextService.title}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#c09757] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
