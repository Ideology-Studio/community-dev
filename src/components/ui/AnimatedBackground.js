"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function StarField({ color = "#333333", count = 2000, size = 0.003, radius = 1.5 }) {
    const ref = useRef();
    // Generate new positions based on unique count/radius to avoid overlap if strict uniqueness is needed, 
    // but random.inSphere is random enough.
    // We wrap useMemo with the count/radius dependencies.
    const sphere = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius }), [count, radius]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#FDFBF7]">
            {/* Subtle Gradient Blob implementation with CSS */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] animate-pulse opacity-40 mix-blend-multiply" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-accent-light/5 rounded-full blur-[100px] animate-pulse opacity-40 mix-blend-multiply delay-1000" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                {/* Main dark particles */}
                <StarField color="#333333" count={2500} size={0.002} radius={1.5} />
                {/* Brand Blue Accent particles */}
                <StarField color="#1e34b7" count={300} size={0.004} radius={1.6} />
                {/* Brand Lime Accent particles */}
                <StarField color="#CCFF00" count={300} size={0.004} radius={1.4} />
            </Canvas>

            {/* Noise Overlay for texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        </div>
    );
}
