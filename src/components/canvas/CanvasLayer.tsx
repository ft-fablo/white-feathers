"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Scene } from "@/components/canvas/Scene";
import { RigidBox } from "@/components/canvas/RigidBox";

// Dynamically import the Scene holding WebGL to avoid Next.js Server Rendering crashes
const CanvasWrapper = dynamic(() => Promise.resolve(({ children }: { children: React.ReactNode }) => (
    <Scene>{children}</Scene>
)), { ssr: false });

export function CanvasLayer() {
    return (
        <CanvasWrapper>
            <RigidBox />
        </CanvasWrapper>
    );
}
