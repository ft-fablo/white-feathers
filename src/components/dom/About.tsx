"use client";

import React from "react";

export function About() {
    return (
        <section id="about" className="relative w-full py-12 p-4 pointer-events-auto">
            <div className="w-full max-w-7xl mx-auto min-h-[70vh] rounded-[40px] bg-card shadow-lg flex flex-col md:flex-row overflow-hidden border border-border">

                {/* Left Side: Brand Logo Card */}
                <div className="w-full md:w-1/2 bg-[#efe8d1] dark:bg-[#18140f] flex items-center justify-center p-8 md:p-12 relative">
                    <div className="w-72 h-44 sm:w-80 sm:h-48 bg-card rounded-2xl shadow-2xl skew-y-3 sm:skew-y-6 transform hover:skew-y-0 hover:scale-105 transition-all duration-700 flex flex-col items-center justify-center p-6 border border-border/80 group">
                        <img 
                            src="/logo-transparent.png" 
                            alt="White Feathers Logo" 
                            className="w-full max-w-[220px] h-auto object-contain dark:hidden group-hover:scale-105 transition-transform" 
                        />
                        <img 
                            src="/logo-dark-theme.png" 
                            alt="White Feathers Logo" 
                            className="w-full max-w-[220px] h-auto object-contain hidden dark:block group-hover:scale-105 transition-transform" 
                        />
                    </div>
                </div>

                {/* Right Side: Copy */}
                <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative">
                    {/* Liquid Glass Font Styling Container */}
                    <div className="relative inline-block mb-8">
                        <span className="absolute inset-0 blur-xl bg-white/10 dark:bg-black/10 rounded-full w-full h-full mix-blend-overlay"></span>
                        <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#3e1c13] via-[#c09757] to-[#3e1c13] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
                            Who We Are
                        </h2>
                    </div>
                    <p className="text-lg md:text-2xl font-light text-accent-grey leading-relaxed">
                        White Feathers is a premier printing and design studio dedicated to elevating brands through tactile excellence. We merge cutting-edge technology with artisanal craftsmanship to deliver materials that don&apos;t just speak—they resonate.
                    </p>
                </div>

            </div>
        </section>
    );
}
