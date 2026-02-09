import { Quote, User, Building } from 'lucide-react';

export default function Manifest({ data }) {
    const { body, hoverTerms } = data;

    const parts = body.split(/(\{\{\d+\}\})/g);

    return (
        <section className="py-24 bg-brand-white text-black relative z-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-black font-display leading-[1.3] tracking-tight text-gray-900 inline-block">
                    {parts.map((part, index) => {
                        const match = part.match(/\{\{(\d+)\}\}/);
                        if (match) {
                            const idx = parseInt(match[1]);
                            const term = hoverTerms[idx];
                            if (!term) return null;
                            return (
                                <span key={index} className="relative inline-block px-1 mx-1 group cursor-default text-brand-lime selection:bg-brand-lime selection:text-white transition-colors duration-300 hover:text-brand-lime-dim align-baseline">
                                    <span className="relative z-10 border-b-4 border-brand-lime/30 group-hover:border-brand-lime transition-all">{term.label}</span>

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
