export default function Footer({ data }) {
    const { navigation, social, legal, siteTitle } = data;

    return (
        <footer className="pt-24 pb-12 bg-black text-white relative z-50 rounded-t-[3rem] -mt-10 border-t border-gray-900" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    {/* Section Title */}
                    <div className="max-w-xl">
                        <h2 className="text-5xl md:text-7xl font-bold font-display leading-[0.9]">
                            Lets Clean <br /> <span className="text-brand-lime selection:bg-brand-lime selection:text-black">Code</span> Together.
                        </h2>
                        <p className="mt-8 text-gray-500 text-lg max-w-sm leading-relaxed">
                            Feel free to reach out if you want to collaborate with me, or simply have a chat.
                        </p>
                        <a href="mailto:hello@devlop.me" className="inline-block mt-8 text-2xl border-b border-brand-lime hover:text-brand-lime transition-colors pb-1">
                            hello@devlop.me
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-6">Navigation</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                {navigation.map((item, idx) => (
                                    <li key={idx}><a href={item.href} className="hover:text-brand-lime transition-colors">{item.name}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-6">Socials</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                {social.map((item, idx) => (
                                    <li key={idx}><a href={item.href} className="hover:text-brand-lime transition-colors">{item.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-medium uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {legal.map((item, idx) => (
                            <a key={idx} href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
