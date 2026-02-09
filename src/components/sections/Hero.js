import { ArrowRight, Check } from 'lucide-react';

export default function Hero({ data }) {
    const { badge, title, subtitle, primaryCta, bullets, snippet } = data;

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-brand-white text-black">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-linear-to-b from-brand-lime/20 to-transparent blur-[120px] rounded-full opacity-60 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-linear-to-r from-brand-lime-dim/20 to-transparent blur-[100px] rounded-full opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Column: Text Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                        {badge.label}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] font-display text-black">
                        {title.leading} <br />
                        <span className="text-brand-lime selection:bg-brand-lime selection:text-white">
                            {title.highlight}
                        </span>
                    </h1>

                    <p className="max-w-xl text-gray-500 text-lg leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <a href={primaryCta.href} className="flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl">
                            {primaryCta.label}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <div className="space-y-2">
                            {bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-brand-lime" />
                                    {bullet}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Code Snippet Visual */}
                <div className="relative">
                    <div className="relative z-10 bg-[#0F0F11] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden group">
                        {/* Window Controls */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#0F0F11]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <span className="text-xs text-gray-500 font-mono">{snippet.fileName}</span>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                            <div className="text-gray-500 mb-4">{snippet.comment}</div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {snippet.stack.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-brand-lime-dim">
                                        <span className="text-gray-600">import</span> {item}
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 border-t border-gray-800 pt-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">devs_needed:</span>
                                    <span className="text-brand-lime">{snippet.devNeeded}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">reward:</span>
                                    <span className="text-white">"{snippet.reward}"</span>
                                </div>
                            </div>

                            {/* Live Stats Badge */}
                            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center backdrop-blur-sm">
                                <div>
                                    <div className="text-xs text-gray-400">Waitlist</div>
                                    <div className="text-lg font-bold text-white">{snippet.stats.waitlist}</div>
                                </div>
                                <div className="h-8 w-[1px] bg-white/10" />
                                <div>
                                    <div className="text-xs text-gray-400">Projects</div>
                                    <div className="text-lg font-bold text-white">{snippet.stats.projects}</div>
                                </div>
                                <div className="h-8 w-[1px] bg-white/10" />
                                <div>
                                    <div className="px-3 py-1 rounded-full bg-brand-lime text-black text-xs font-bold">
                                        {snippet.stats.community}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-1 bg-brand-lime/30 rounded-2xl blur-2xl -z-10 opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>

            </div>
        </section>
    );
}
