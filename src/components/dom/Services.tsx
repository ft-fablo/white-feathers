"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { SERVICES_DATA, ServiceDetail } from "@/data/servicesData";
import { getAllServices } from "@/lib/wordpress";

// Mathematical wrap function to ensure infinite continuity without jumps
function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [services, setServices] = useState<ServiceDetail[]>(SERVICES_DATA);
    const [activeCard, setActiveCard] = useState<ServiceDetail | null>(null);

    useEffect(() => {
        async function fetchWPServices() {
            try {
                const liveServices = await getAllServices();
                if (liveServices && liveServices.length > 0) {
                    setServices(liveServices);
                }
            } catch (err) {
                console.error("Error loading WP services:", err);
            }
        }
        fetchWPServices();
    }, []);

    const totalItems = services.length; // items count = 1 full loop

    // Track the scroll progress of the entire section natively on the page
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"] // Precisely track when sticky is active
    });

    // We take the continuous 0->1 scroll progress and snap it to exactly 7 intervals (1 full loop)
    const roundedTarget = useTransform(scrollYProgress, (v) => {
        return Math.round(v * totalItems) / totalItems;
    });

    // Gently spring towards that rounded target for a smooth "snap to center" feel
    const smoothProgress = useSpring(roundedTarget, {
        stiffness: 150,
        damping: 30,
        mass: 0.8,
        restDelta: 0.0001
    });

    // Map the 0-1 vertical scroll progress to 0-7 (1 full cycle)
    const scrollOffset = useTransform(smoothProgress, [0, 1], [0, totalItems]);

    // Lock body scroll when a card is active
    useEffect(() => {
        if (activeCard) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [activeCard]);

    // Handle escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveCard(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        // 250vh height gives smooth scroll timing for 1 single loop
        <section
            id="services"
            ref={containerRef}
            className="relative w-full h-[250vh] bg-transparent pointer-events-auto"
        >
            {/* The sticky element holds the screen while we scroll */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10">

                {/* Header Title explicitly placed above the Cover Flow */}
                <div className="relative w-full text-center z-50 px-4 mt-8 mb-6 flex-shrink-0">
                    <div className="relative inline-block mb-10 w-full">
                        <h2 className="relative text-5xl md:text-7xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br from-[#8a6834] via-[#c09757] to-[#8a6834] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
                            Our Services
                        </h2>
                    </div>
                    <p className="text-zinc-400 text-lg"></p>
                </div>

                {/* Circular Track container. */}
                <div className="relative w-full flex-1 flex items-center justify-center pb-16 md:pb-24 pointer-events-none">
                    <div className="pointer-events-auto flex items-center justify-center w-full h-full">
                        {services.map((service, index) => (
                            <CoverFlowCard
                                key={service.id}
                                service={service}
                                index={index}
                                totalItems={services.length}
                                scrollOffset={scrollOffset}
                                setActiveCard={setActiveCard}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Expanded Overlay */}
            <AnimatePresence>
                {activeCard && (
                    <ExpandedCard
                        service={activeCard}
                        onClose={() => setActiveCard(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

// ----------------------------------------------------------------------
// COLLAPSED CARD COMPONENT (Solid Theme Styling, No Glass Effect)
// ----------------------------------------------------------------------
function CoverFlowCard({ service, index, totalItems, scrollOffset, setActiveCard }: { service: ServiceDetail, index: number, totalItems: number, scrollOffset: MotionValue<number>, setActiveCard: (val: ServiceDetail) => void }) {

    const rawPos = useTransform(scrollOffset, (offset) => {
        const half = totalItems / 2; // 3.5
        return wrap(-half, half, index - offset);
    });

    const distance = useTransform(rawPos, (pos) => Math.abs(pos));
    const x = useTransform(rawPos, (pos) => `calc(${pos} * clamp(270px, 22vw, 420px))`);
    const scale = useTransform(distance, [0, 1, 2, 3], [1, 0.82, 0.64, 0.44]);
    const opacity = useTransform(distance, [0, 1, 2, 3], [1, 0.9, 0.5, 0]);
    const zIndex = useTransform(distance, (d) => Math.round(100 - d * 10));
    const filter = useTransform(distance, [0, 1, 2, 3], ["blur(0px)", "blur(0px)", "blur(4px)", "blur(12px)"]);

    return (
        <motion.div
            style={{
                x,
                scale,
                opacity,
                zIndex,
                filter,
                position: "absolute"
            }}
            className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] aspect-[9/16] max-h-[68vh]"
        >
            <motion.div
                layoutId={`card-${service.id}`}
                onClick={() => setActiveCard(service)}
                className="w-full h-full rounded-[40px] border border-border bg-card flex flex-col cursor-pointer group shadow-xl overflow-hidden relative"
            >
                {/* Background Image filling top 72% */}
                <motion.div layoutId={`image-${service.id}`} className="absolute top-0 left-0 right-0 h-[72%] w-full z-0 overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </motion.div>

                {/* Solid Theme Bottom Title Banner */}
                <div className="absolute bottom-0 left-0 right-0 h-[28%] z-10 flex flex-col items-center justify-center p-4 bg-card text-card-foreground border-t border-border">
                    <motion.h3 layoutId={`title-${service.id}`} className="text-xl sm:text-2xl font-bold tracking-tight text-card-foreground text-balance text-center">
                        {service.title}
                    </motion.h3>
                </div>
            </motion.div>
        </motion.div>
    );
}


// ----------------------------------------------------------------------
// EXPANDED OVERLAY COMPONENT (Solid Theme Layout, Full Details)
// ----------------------------------------------------------------------
function ExpandedCard({ service, onClose }: { service: ServiceDetail, onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 pointer-events-auto">

            {/* Backdrop Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/75 cursor-pointer"
            />

            {/* Active Postcard expansion */}
            <motion.div
                layoutId={`card-${service.id}`}
                className="relative z-10 w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] max-h-[85vh] bg-card text-card-foreground rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-border"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-background border border-border hover:bg-accent-grey/20 flex items-center justify-center transition-colors text-foreground shadow-md"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left Side: Large Image & Title */}
                <div className="w-full md:w-1/2 h-[50%] md:h-full relative overflow-hidden bg-card">
                    <motion.div layoutId={`image-${service.id}`} className="absolute inset-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </motion.div>

                    {/* Title anchored to the bottom of the image area */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <motion.h3 layoutId={`title-${service.id}`} className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-xl">
                            {service.title}
                        </motion.h3>
                    </div>
                </div>

                {/* Right Side: Details (Solid background with theme colors) */}
                <div className="w-full md:w-1/2 h-[50%] md:h-full p-8 md:p-16 flex flex-col justify-center overflow-y-auto bg-card text-card-foreground">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-grey mb-6">Service Detail</h4>
                        <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-10">
                            {service.desc}
                        </p>

                        <div className="w-full h-px bg-border my-8" />

                        <h4 className="text-sm font-mono uppercase tracking-widest text-accent-grey mb-4">Premium Materials</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed font-serif italic mb-8">
                            {service.materials}
                        </p>

                        <div className="pt-4 border-t border-border flex items-center">
                            <Link
                                href={`/services/${service.slug}`}
                                onClick={onClose}
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#c09757] hover:bg-[#a88244] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:gap-3.5 group cursor-pointer"
                            >
                                <span>See More Details</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
