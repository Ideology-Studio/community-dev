"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
    { label: "Features", href: "#about" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Community", href: "#community" },
    { label: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsMobileMenuOpen(false);
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
                            <Logo className="w-8 h-8" priority />
                            Johnny<span className="text-gray-400 font-normal">DEV</span>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 font-mono">
                            {NAV_LINKS.map(({ label, href }) => (
                                <a key={label} href={href} className="relative hover:text-white transition-colors group">
                                    {label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-brand-lime)] transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <a href="/onboarding" className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-[var(--color-brand-lime)] text-black hover:bg-white transition-colors duration-300 text-sm font-bold font-mono shadow-md hover:shadow-lg transform active:scale-95">
                            Join Waitlist
                        </a>

                        {/* Mobile Menu Icon */}
                        <div
                            className="md:hidden flex flex-col justify-center items-end gap-[6px] cursor-pointer p-2 -mr-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <motion.div
                                animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-white origin-center"
                            />
                            <motion.div
                                animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-white origin-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="pointer-events-auto absolute top-[72px] left-6 right-6 bg-black/95 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {NAV_LINKS.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="text-gray-300 hover:text-white text-base font-medium font-mono px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}
                            <div className="h-[1px] w-full bg-white/10 my-2" />
                            <a
                                href="/onboarding"
                                className="mt-2 text-center w-full px-6 py-3 rounded-xl bg-[var(--color-brand-lime)] text-black hover:bg-white transition-colors duration-300 text-sm font-bold font-mono shadow-md transform active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Join Waitlist
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
