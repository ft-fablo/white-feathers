"use client";

import { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTexture } from "@react-three/drei";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function RigidBox() {
    const groupRef = useRef<THREE.Group>(null);
    const lidRef = useRef<THREE.Mesh>(null);
    const baseRef = useRef<THREE.Mesh>(null);
    const logoTexture = useTexture("/logo.jpg");

    useGSAP(() => {
        if (!groupRef.current || !lidRef.current || !baseRef.current) return;

        // Master 3D Timeline linked to scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: 1, // Smooth dragging interpolation
            },
        });

        // Initial State (Floating, angled perfectly for Hero)
        gsap.set(groupRef.current.rotation, { x: 0.6, y: -0.5, z: 0 });
        gsap.set(groupRef.current.position, { x: 0, y: 0, z: 0 });

        // 1. Scroll down to Statement / Material Macro view
        tl.to(
            groupRef.current.rotation,
            { x: Math.PI / 2.5, y: Math.PI, z: 0.1, ease: "none" },
            0
        )
            .to(
                groupRef.current.position,
                { z: 2.5, ease: "power1.inOut" }, // Macro zoom towards camera
                0
            );

        // 2. Scroll to CTA Section (Before Services) - Sink back and subtle rotation
        tl.to(
            groupRef.current.position,
            { z: 0, x: 0, ease: "power2.inOut" },
            0.3
        )
            .to(
                groupRef.current.rotation,
                { x: 0.2, y: Math.PI * 1.5, ease: "none" },
                0.3
            );

        // 3. Scroll through Services (Long list) - Explode Lid & rotate continuously
        tl.to(
            lidRef.current.position,
            { y: 3, ease: "power2.inOut" }, // Lid separates significantly
            0.5
        )
            .to(
                groupRef.current.rotation,
                { x: 0.2, y: Math.PI * 4, ease: "none" }, // Continuous spin through the services
                0.5
            )
            .to(
                groupRef.current.position,
                { z: -1, x: -1.5, ease: "power2.inOut" }, // Move out of the way of the service text
                0.5
            );
    }, { scope: groupRef });

    return (
        <group ref={groupRef}>
            {/* Box Base */}
            <mesh ref={baseRef} position={[0, -0.5, 0]}>
                <boxGeometry args={[2, 1, 2]} />
                <meshPhysicalMaterial
                    color="#1a1610"
                    metalness={0.7}
                    roughness={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>

            {/* Box Lid */}
            <mesh ref={lidRef} position={[0, 0.51, 0]}>
                <boxGeometry args={[2.05, 1, 2.05]} />
                <meshPhysicalMaterial
                    map={logoTexture}
                    color="#ffffff"
                    metalness={0.4}
                    roughness={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                />
            </mesh>
        </group>
    );
}
