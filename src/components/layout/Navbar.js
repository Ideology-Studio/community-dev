export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold font-display uppercase tracking-wider text-black flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    Community<span className="text-gray-400">.dev</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
                    <a href="#" className="hover:text-black transition-colors">Hackathons</a>
                    <a href="#" className="hover:text-black transition-colors">Projects</a>
                    <a href="#" className="hover:text-black transition-colors">Manifesto</a>
                    <a href="#" className="hover:text-black transition-colors">Resources</a>
                </div>

                <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-all text-sm font-medium shadow-lg hover:shadow-xl">
                    Join Waitlist
                </button>
            </div>
        </nav>
    );
}
