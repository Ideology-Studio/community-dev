"use client";

import { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About({ data }) {
    const { badge, title, subtitle, cta, code } = data;
    const [activeTab, setActiveTab] = useState(code[0]?.language);
    const [copied, setCopied] = useState(false);

    const activeCode = code.find(c => c.language === activeTab) || code[0];

    const handleCopy = () => {
        navigator.clipboard.writeText(activeCode.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="about" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[60%] h-[600px] bg-[var(--color-brand-lime)]/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start relative z-10">

                {/* Left Column: Text Content */}
                <div className="space-y-10 sticky top-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-lime)]/10 border border-[var(--color-brand-lime)]/20 text-[var(--color-brand-lime)] text-xs font-bold uppercase tracking-wider"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-lime)] animate-pulse" />
                        Features
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold font-display leading-[1.1]"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl leading-relaxed max-w-lg"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                    >
                        <span className="text-[var(--color-brand-lime)] text-sm font-mono block mb-2">{badge}</span>
                        <div className="text-sm text-gray-400">Optimized for performance and scalability.</div>
                    </motion.div>

                    <a href={cta.href} className="inline-flex items-center gap-3 text-[var(--color-brand-lime)] font-semibold text-lg hover:text-white transition-colors group">
                        {cta.label}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Right Column: Code Tabs */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                    <div className="rounded-2xl border border-white/10 bg-[#141414] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                        {/* Tab Header with MacOS Controls */}
                        <div className="flex items-center justify-between bg-white/5 border-b border-white/10 px-4 py-3">
                            <div className="flex gap-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="flex flex-1 overflow-x-auto no-scrollbar">
                                {code.map((item) => (
                                    <button
                                        key={item.language}
                                        onClick={() => setActiveTab(item.language)}
                                        className={`px-4 py-1 text-xs font-medium rounded-t-lg transition-colors mr-1 ${activeTab === item.language
                                            ? 'text-white bg-white/10'
                                            : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {item.language}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-3 px-2">
                                <button
                                    onClick={handleCopy}
                                    className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                                    title="Copy code"
                                >
                                    {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="overflow-x-auto max-h-[600px] custom-scrollbar bg-[#0F0F0F]">
                            <pre className="p-8 text-sm font-mono leading-relaxed text-gray-300">
                                <code>{activeCode.code}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-2 bg-[var(--color-brand-lime)]/20 rounded-2xl blur-3xl -z-10 opacity-40 pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
