"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Mascotte from "@/components/ui/Mascotte";

export default function Hero({ data }) {
    const { badge, title, subtitle, primaryCta, bullets } = data; // snippet removed from destructing if not needed, or keep for safety
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden z-10 bg-transparent">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-500/5 blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-black text-xs font-semibold uppercase tracking-wider shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(30,52,183,0.5)]" />
                        {badge.label}
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-[4rem] font-bold font-display text-black leading-[0.9]">
                        <span className="block">{title.leading}</span>
                        <span className="block text-[var(--color-brand-blue)] relative mt-2 pb-2">
                            {title.highlight}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xl text-black/80 text-xl md:text-2xl leading-relaxed font-light"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA & Bullets */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-10"
                    >
                        <a href={primaryCta.href} className="group relative px-10 py-5 bg-black text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl hover:bg-[var(--color-brand-blue)] hover:text-white transition-all duration-500 hover:scale-[1.05]">
                            <span className="relative z-10 flex items-center gap-3">
                                {primaryCta.label}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <div className="space-y-3">
                            {bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-base font-bold text-black/90">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-accent stroke-[3px]" />
                                    </div>
                                    {bullet}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Mascotte */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative hidden lg:flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="scale-125">
                        <Mascotte />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
