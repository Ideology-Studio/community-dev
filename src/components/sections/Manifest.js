import { Quote, User, Building } from 'lucide-react';

export default function Manifest({ data }) {
    const { body, hoverTerms } = data;

    const parts = body.split(/(\{\{\d+\}\})/g);

    return (
        <section id="manifesto" className="py-24 bg-transparent text-brand-black relative z-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-normal font-display leading-[1.3] text-gray-900 block">
                    {parts.map((part, index) => {
                        const match = part.match(/\{\{(\d+)\}\}/);
                        if (match) {
                            const idx = parseInt(match[1]);
                            const term = hoverTerms[idx];
                            if (!term) return null;
                            return (
                                <span key={index} className="relative inline-block px-1 mx-1 group cursor-default font-bold text-brand-black transition-colors duration-300 hover:text-accent align-baseline">
                                    <span className="relative z-10 border-b-2 border-accent/30 group-hover:border-accent transition-all">{term.label}</span>

                                    {/* Floating Image Preview on Hover */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-16 h-16 bg-white rounded-xl shadow-xl border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all p-2 pointer-events-none z-50">
                                        <img src={term.image} alt={term.label} className="w-full h-full object-contain" />
                                    </div>
                                </span>
                            );
                        }
                        return <span key={index} className="align-baseline">{part}</span>;
                    })}
                </h2>
            </div>
        </section>
    );
}
