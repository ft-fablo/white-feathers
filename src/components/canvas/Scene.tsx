"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Environment } from "@react-three/drei";
import React from "react";

export function Scene({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-0">
            <Canvas
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {/* Environment Map for photorealism */}
                <Environment preset="studio" />

                {children}

                <Preload all />
            </Canvas>
        </div>
    );
}
