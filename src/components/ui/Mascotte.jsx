"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Mascotte() {
    const ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance from center
            const x = (e.clientX - centerX) / (window.innerWidth / 2);
            const y = (e.clientY - centerY) / (window.innerHeight / 2);

            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Limit the eye movement range
    const eyeX = mousePosition.x * 15; // Max 15px movement
    const eyeY = mousePosition.y * 15;

    return (
        <div className="w-full flex justify-center py-20 bg-transparent">
            <motion.div
                ref={ref}
                className="relative w-64 h-64 bg-[var(--color-brand-blue)] rounded-[5rem] shadow-[0_20px_50px_rgba(30,52,183,0.3),inset_0_-10px_20px_rgba(0,0,0,0.1),inset_0_10px_20px_rgba(255,255,255,0.5)] flex items-center justify-center gap-8 border-4 border-black/5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
            >
                {/* Left Eye */}
                <motion.div
                    className="w-12 h-12 bg-white rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                    animate={{ x: eyeX, y: eyeY }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />

                {/* Right Eye */}
                <motion.div
                    className="w-12 h-12 bg-white rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                    animate={{ x: eyeX, y: eyeY }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />

                {/* Shine/Reflection for realism */}
                <div className="absolute top-6 left-8 w-16 h-8 bg-white/30 rounded-full rotate-[-20deg] blur-md pointer-events-none" />
            </motion.div>
        </div>
    );
}
