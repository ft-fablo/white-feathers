"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, ChevronRight, Layers, Sparkles } from "lucide-react";
import { ProductItem } from "@/data/servicesData";

interface ProductShowcaseProps {
  products: ProductItem[];
  serviceTitle: string;
}

export function ProductShowcase({ products, serviceTitle }: ProductShowcaseProps) {
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // When active product changes, reset photo index to 0
  useEffect(() => {
    setActivePhotoIndex(0);
  }, [activeProduct]);

  // Lock body scroll when expanded session modal is open
  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeProduct]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-card/50 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c09757]/15 border border-[#c09757]/30 text-[#c09757] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-base sm:text-lg text-accent-grey">
            Hover over any product to expand the interactive gallery session and view detailed product photos & specifications.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              onMouseEnter={() => {
                setHoveredCardId(product.id);
              }}
              onMouseLeave={() => {
                setHoveredCardId(null);
              }}
              onClick={() => {
                setActiveProduct(product);
              }}
              className="rounded-3xl bg-background border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#c09757] transition-all duration-300 group flex flex-col cursor-pointer relative"
            >
              {/* Product Photo & Hover Trigger */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c09757] text-white text-xs sm:text-sm font-semibold shadow-lg group-hover:scale-105 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Expand Photo Gallery</span>
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 sm:p-6 text-center bg-background border-t border-border flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-[#c09757] transition-colors">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Product Session Modal / Lightbox */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-background text-foreground rounded-[36px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-border"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-card border border-border hover:bg-accent-grey/20 flex items-center justify-center transition-colors text-foreground shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Photo Gallery Viewer */}
              <div className="w-full md:w-3/5 p-6 sm:p-8 bg-card flex flex-col justify-between border-b md:border-b-0 md:border-r border-border overflow-y-auto">
                {/* Main Hero Photo View */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-background shadow-inner mb-4">
                  <Image
                    src={activeProduct.gallery[activePhotoIndex] || activeProduct.image}
                    alt={activeProduct.name}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-mono">
                    Photo {activePhotoIndex + 1} of {activeProduct.gallery.length}
                  </div>
                </div>

                {/* Thumbnails Strip */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-grey block mb-2">
                    Hover to switch view
                  </span>
                  <div className="grid grid-cols-4 gap-3">
                    {activeProduct.gallery.map((photoUrl, idx) => (
                      <button
                        key={idx}
                        onMouseEnter={() => setActivePhotoIndex(idx)}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activePhotoIndex === idx
                            ? "border-[#c09757] scale-105 shadow-md"
                            : "border-border opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={photoUrl}
                          alt={`${activeProduct.name} angle ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Product Session Details */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto bg-background">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c09757]/15 border border-[#c09757]/30 text-[#c09757] text-xs font-semibold uppercase mb-4">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{serviceTitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-4">
                    {activeProduct.name}
                  </h3>

                  <p className="text-base text-foreground/80 leading-relaxed font-normal mb-6">
                    {activeProduct.desc}
                  </p>

                  <div className="w-full h-px bg-border my-6" />

                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-grey block mb-2">
                      Key Highlights
                    </span>
                    <div className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#c09757]" />
                      <span>Custom precision manufacturing &amp; finishes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#c09757]" />
                      <span>Multiple material &amp; substrate variations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#c09757]" />
                      <span>Full branding &amp; Pantone color matching</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-border">
                  <Link
                    href="/#contact"
                    onClick={() => setActiveProduct(null)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#c09757] hover:bg-[#a88244] text-white font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl group"
                  >
                    <span>Request Quote for {activeProduct.name}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
