"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    useGSAP(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!video || !canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let duration = 6;
        const MAX_VIDEO_TIME = 6;
        let isSeeking = false;
        let pendingTime: number | null = null;
        let targetProgress = 0;
        let currentProgress = 0;
        let animationFrameId: number;

        // Frame Caching array for instant 60FPS playback
        const totalFrames = 180;
        const framesCache: (ImageBitmap | HTMLCanvasElement)[] = new Array(totalFrames);

        const resizeCanvas = () => {
            if (!canvas) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const renderBitmapToCanvas = (
            context: CanvasRenderingContext2D,
            cEl: HTMLCanvasElement,
            source: ImageBitmap | HTMLCanvasElement | HTMLVideoElement
        ) => {
            const cw = cEl.width;
            const ch = cEl.height;
            const sw = source.width || (source as HTMLVideoElement).videoWidth || cw;
            const sh = source.height || (source as HTMLVideoElement).videoHeight || ch;

            if (!sw || !sh) return;

            // Calculate object-cover aspect ratio positioning
            const scale = Math.max(cw / sw, ch / sh);
            const x = (cw - sw * scale) / 2;
            const y = (ch - sh * scale) / 2;

            context.clearRect(0, 0, cw, ch);
            context.drawImage(source, x, y, sw * scale, sh * scale);
        };

        const requestVideoSeek = (time: number) => {
            if (!video || !video.duration) return;
            const targetTime = Math.min(time, MAX_VIDEO_TIME);
            if (isSeeking) {
                pendingTime = targetTime;
                return;
            }
            if (Math.abs(video.currentTime - targetTime) < 0.02) return;

            isSeeking = true;
            video.currentTime = targetTime;
        };

        const drawFrame = () => {
            if (!canvas || !ctx || !video) return;

            // Smooth interpolation (lerp) towards target progress
            const diff = targetProgress - currentProgress;
            currentProgress += diff * 0.18;

            const safeProgress = Math.max(0, Math.min(1, currentProgress));
            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(safeProgress * (totalFrames - 1))
            );

            // 1. If frame is cached, render instantly at 60-120 FPS
            const cachedFrame = framesCache[frameIndex];
            if (cachedFrame) {
                renderBitmapToCanvas(ctx, canvas, cachedFrame);
            } else {
                // 2. Otherwise request video seek safely without seek-cancellation stutter
                const seekTime = safeProgress * duration;
                requestVideoSeek(seekTime);
            }

            animationFrameId = requestAnimationFrame(drawFrame);
        };

        const onSeeked = () => {
            isSeeking = false;
            if (video && ctx && canvas) {
                renderBitmapToCanvas(ctx, canvas, video);

                // Cache frame asynchronously
                const safeProg = duration ? Math.min(video.currentTime, duration) / duration : 0;
                const idx = Math.min(
                    totalFrames - 1,
                    Math.floor(safeProg * (totalFrames - 1))
                );

                if (!framesCache[idx] && typeof createImageBitmap === "function") {
                    createImageBitmap(video)
                        .then((bitmap) => {
                            framesCache[idx] = bitmap;
                        })
                        .catch(() => {});
                }
            }

            if (pendingTime !== null) {
                const nextTime = pendingTime;
                pendingTime = null;
                requestVideoSeek(nextTime);
            }
        };

        video.addEventListener("seeked", onSeeked);

        const onLoadedMetadata = () => {
            duration = Math.min(video.duration || MAX_VIDEO_TIME, MAX_VIDEO_TIME);
            video.currentTime = 0.01;
        };

        video.addEventListener("loadedmetadata", onLoadedMetadata);

        if (video.readyState >= 1) {
            onLoadedMetadata();
        }

        // Start render loop
        animationFrameId = requestAnimationFrame(drawFrame);

        // Bind GSAP ScrollTrigger to hero section scroll (250vh)
        const trigger = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                targetProgress = self.progress;
            },
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
            video.removeEventListener("seeked", onSeeked);
            video.removeEventListener("loadedmetadata", onLoadedMetadata);
            trigger.kill();
        };
    }, { scope: containerRef });

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative w-full h-[250vh] bg-transparent pointer-events-auto"
        >
            {/* Hidden Video element used strictly as frame decoder */}
            <video
                ref={videoRef}
                src="/hero-video.mp4"
                muted
                playsInline
                preload="auto"
                className="hidden"
            />

            {/* Sticky 100vh viewport container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-center p-4 md:p-12 overflow-hidden z-10">
                
                {/* Canvas Background (Hardware-accelerated 60FPS scrub) */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-100 transition-opacity duration-700"
                />

                {/* Ambient Visual Overlays for optimal text contrast & cinematic feel */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/60 via-background/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 text-left w-full max-w-7xl mx-auto px-4 md:px-12 pointer-events-auto">
                    <div className="z-10 text-left">
                        {/* Company Logo Container */}
                        <div className="relative inline-block mb-4 max-w-lg w-full">
                            <span className="absolute inset-0 blur-3xl bg-[#c09757]/30 rounded-full w-[120%] h-[120%] -left-[10%] -top-[10%] pointer-events-none"></span>
                            
                            <img
                                src={isDark ? "/logo-dark-theme.png" : "/logo-transparent.png"}
                                alt="White Feathers Logo"
                                className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain drop-shadow-2xl transition-all duration-300"
                            />
                        </div>
                        <p className="text-lg sm:text-xl md:text-3xl font-light text-foreground tracking-wide max-w-3xl ml-5 sm:ml-10 md:ml-16 -mt-2 sm:-mt-3 md:-mt-4 drop-shadow-md">
                            Where imagination Meets print
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 animate-bounce pointer-events-none">
                    <span className="text-xs font-mono uppercase tracking-widest text-foreground/80">Scroll to Explore</span>
                    <div className="w-5 h-8 rounded-full border-2 border-foreground/50 flex justify-center pt-1">
                        <div className="w-1 h-2 rounded-full bg-[#c09757]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
