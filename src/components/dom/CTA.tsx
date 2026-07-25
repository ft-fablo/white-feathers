"use client";

import React from "react";

export function CTA() {
    return (
        <section id="cta" className="relative w-full py-32 p-4 pointer-events-auto overflow-hidden">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                {/* Liquid Glass Font Styling Container */}
                <div className="relative inline-block mb-12 px-4">
                    <span className="absolute inset-0 blur-2xl bg-white/10 dark:bg-black/10 rounded-[3rem] w-full h-full mix-blend-overlay"></span>
                    <h2 className="relative text-5xl md:text-8xl font-black tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-[#3e1c13] via-[#c09757] to-[#3e1c13] dark:from-[#c09757] dark:via-[#f7f2de] dark:to-[#c09757] drop-shadow-md">
                        Make it <br /> <span className="text-[#6b5247] dark:text-[#bfa899]">unforgettable.</span>
                    </h2>
                </div>
                <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-10 py-5 bg-[#c09757] text-[#3e1c13] font-bold rounded-full text-xl hover:bg-[#3e1c13] hover:text-[#f7f2de] hover:scale-105 transition-all duration-300 shadow-lg border border-[#c09757]"
                >
                    Explore Services
                </button>
            </div>
        </section>
    );
}
