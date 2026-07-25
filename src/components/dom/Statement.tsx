"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Statement() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "center center",
                    scrub: true,
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full h-[120vh] flex flex-col justify-center pointer-events-auto">
            <div className="container mx-auto px-6 z-10 max-w-6xl">
                <h2 ref={textRef} className="text-4xl md:text-7xl font-medium tracking-tight text-foreground text-right ml-auto max-w-4xl leading-tight">
                    Precision in every fiber. <br /><span className="text-accent-grey font-light">Uncompromising quality that commands attention.</span>
                </h2>
            </div>
        </section>
    );
}
