"use client";

import React from "react";

export function Footer() {
    return (
        <footer className="relative w-full p-4 pointer-events-auto pb-8">
            <div className="w-full max-w-7xl mx-auto h-[50vh] rounded-[40px] bg-card flex flex-col items-center justify-between py-16 overflow-hidden border border-border shadow-sm">
                <div className="flex-1 flex items-center justify-center">
                    <h2 className="text-4xl md:text-6xl font-light tracking-widest text-foreground uppercase">
                        Thank You
                    </h2>
                </div>

                <div className="flex flex-col items-center">
                    <img 
                        src="/logo-transparent.png" 
                        alt="White Feathers Logo" 
                        className="w-36 sm:w-44 h-auto object-contain mb-3 dark:hidden" 
                    />
                    <img 
                        src="/logo-dark-theme.png" 
                        alt="White Feathers Logo" 
                        className="w-36 sm:w-44 h-auto object-contain mb-3 hidden dark:block" 
                    />
                    <p className="text-xl font-semibold tracking-tighter text-foreground mb-2">White Feathers</p>
                    <div className="text-sm font-mono tracking-widest text-accent-grey/40 select-none">
                        © {new Date().getFullYear()} WHITE FEATHERS.
                    </div>
                </div>
            </div>
        </footer>
    );
}
