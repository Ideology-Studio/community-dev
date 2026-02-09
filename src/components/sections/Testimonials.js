export default function Testimonials({ data }) {
    const { title, eyebrow, cta, testimonials } = data;

    return (
        <section className="py-24 bg-brand-white text-black relative z-30">

            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
                <span className="text-brand-lime text-xs font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
                    {eyebrow}
                </span>
                <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight mb-8 max-w-2xl">
                    {title}
                </h2>
                <a href={cta.href} className="text-sm font-bold border-b-2 border-brand-lime hover:bg-brand-lime/10 transition-colors px-1">
                    {cta.label} →
                </a>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-brand-lime/10 transition-all group flex flex-col justify-between h-full">

                        <div>
                            <div className="flex items-center gap-3 mb-6 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                                <img src={testimonial.logo} alt={testimonial.company} className="h-6 w-auto" />
                                <span className="h-4 w-[1px] bg-gray-300"></span>
                                <img src={testimonial.wordmark} alt="" className="h-4 w-auto opacity-70" />
                            </div>

                            <blockquote className="text-lg font-medium leading-relaxed text-gray-800 mb-6">
                                {testimonial.quote}
                            </blockquote>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-6 border-t border-gray-200 pt-6">
                                <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                <div>
                                    <cite className="not-italic font-bold block text-sm text-black">{testimonial.author}</cite>
                                    <span className="text-xs text-gray-500 font-medium">{testimonial.role}</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 text-xs shadow-sm border border-gray-100">
                                <span className="text-gray-500 font-medium">{testimonial.outcome.text}</span>
                                <span className="text-brand-lime-dim font-bold block mt-1 text-sm">{testimonial.outcome.highlight}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
