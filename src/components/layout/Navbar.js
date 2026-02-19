"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 pointer-events-none"
        >
            <div className="pointer-events-auto max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="w-full relative">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border border-white/10 shadow-sm rounded-full h-14 top-1 flex items-center justify-between px-8 transition-all duration-300 ease-in-out hover:bg-black/90 hover:shadow-md">
                        {/* Logo */}
                        <div className="text-xl font-bold font-mono uppercase tracking-widest text-white flex items-center gap-3 cursor-pointer">
                            <Logo className="w-8 h-8 text-[var(--color-brand-lime)]" fill="currentColor" />
                            Johnny<span className="text-gray-400 font-normal">DEV</span>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 font-mono">
                            {["Manifesto", "Projects", "Hackathons", "Resources"].map((link) => (
                                <a key={link} href="#" className="relative hover:text-white transition-colors group">
                                    {link}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-brand-lime)] transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--color-brand-lime)] text-black hover:bg-white transition-colors duration-300 text-sm font-bold font-mono shadow-md hover:shadow-lg transform active:scale-95">
                            Join Waitlist
                        </button>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden flex flex-col justify-center items-end gap-1.5 cursor-pointer">
                            <div className="w-6 h-0.5 bg-white" />
                            <div className="w-6 h-0.5 bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
