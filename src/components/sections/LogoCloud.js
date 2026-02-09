export default function LogoCloud({ data }) {
    const { items } = data;

    return (
        <section className="py-24 bg-brand-white text-black relative z-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-grayscale duration-500">
                {items.map((logo) => (
                    <div key={logo.id} className="group relative flex flex-col items-center gap-2">
                        <img
                            src={logo.image}
                            alt={logo.description}
                            className={`h-8 object-contain ${logo.className} transition-transform group-hover:scale-110 duration-300 dark:invert-0`}
                        />
                        <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap">
                            {logo.description}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
