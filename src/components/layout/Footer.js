"use client";

import { motion } from "framer-motion";

export default function Footer({ data }) {
    const { navigation, social, legal, siteTitle, cta, labels } = data;

    return (
        <footer className="pt-32 pb-0 bg-[#0a0a0a] text-white relative z-50 rounded-t-[3rem] -mt-10 border-t border-white/5 overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
                    {/* Left Side: Call to Action */}
                    <div className="md:col-span-6 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] tracking-tight">
                            {cta?.title?.split('build').map((part, i) => (
                                <span key={i}>
                                    {part}
                                    {i === 0 && <span className="text-accent">build</span>}
                                </span>
                            ))}
                        </h2>
                        <div className="flex flex-col space-y-4">
                            <p className="text-gray-500 text-lg max-w-sm">
                                {cta?.subtitle}
                            </p>
                            <a href={`mailto:${cta?.email}`} className="text-xl md:text-2xl font-medium border-b border-accent/30 hover:border-accent transition-all pb-1 inline-block w-fit">
                                {cta?.email}
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Links */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
                        <div className="md:text-right">
                            <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest opacity-50">{labels?.explore}</h4>
                            <ul className="space-y-4 text-[0.95rem] text-gray-400">
                                {navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:text-right">
                            <h4 className="text-white text-sm font-bold mb-6 uppercase tracking-widest opacity-50">{labels?.social}</h4>
                            <ul className="space-y-4 text-[0.95rem] text-gray-400">
                                {social.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Privacy & Copyright */}
                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-medium uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} {siteTitle}. {labels?.tagline}</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        {legal.map((item, idx) => (
                            <a key={idx} href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Massive Brand Footer Title - Clean Mask Fade */}
            <div className="relative mt-20 mb-[-1vw] overflow-hidden">
                <motion.h3
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0.3 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-[10vw] font-black uppercase tracking-tighter leading-none text-center bg-clip-text text-transparent pointer-events-none select-none"
                    style={{
                        backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(128, 128, 128, 1) 51%, rgba(0, 0, 0, 1) 100%)'
                    }}
                >
                    {siteTitle}
                </motion.h3>
            </div>
        </footer>
    );
}
