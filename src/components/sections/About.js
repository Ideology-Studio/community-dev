"use client";

import { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';

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
        <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[80%] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">

                {/* Left Column: Text Content */}
                <div className="space-y-8 sticky top-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                        Features
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.1]">
                        {title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                        <span className="text-brand-lime text-sm font-mono block mb-2">{badge}</span>
                    </div>

                    <a href={cta.href} className="inline-flex items-center gap-2 text-brand-lime font-medium hover:underline decoration-brand-lime decoration-2 underline-offset-4 transition-all">
                        {cta.label}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Right Column: Code Tabs */}
                <div className="relative">
                    <div className="rounded-2xl border border-gray-800 bg-[#0F0F11] overflow-hidden shadow-2xl">
                        {/* Tab Header */}
                        <div className="flex items-center justify-between bg-gray-900/50 border-b border-gray-800 px-4">
                            <div className="flex">
                                {code.map((item) => (
                                    <button
                                        key={item.language}
                                        onClick={() => setActiveTab(item.language)}
                                        className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === item.language
                                                ? 'border-brand-lime text-white bg-white/5'
                                                : 'border-transparent text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {item.language}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-brand-lime-dim font-mono hidden sm:block">{activeCode.filename}</span>
                                <button
                                    onClick={handleCopy}
                                    className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                                    title="Copy code"
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="overflow-x-auto max-h-[600px] custom-scrollbar bg-[#0F0F11]">
                            <pre className="p-6 text-sm font-mono leading-relaxed text-gray-300">
                                <code>
                                    {activeCode.code}
                                </code>
                            </pre>
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-1 bg-brand-lime/20 rounded-2xl blur-2xl -z-10 opacity-30 pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
