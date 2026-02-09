import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Manifest from "@/components/sections/Manifest";
import LogoCloud from "@/components/sections/LogoCloud";

import homeData from "@/content/home.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white text-black font-sans antialiased overflow-hidden selection:bg-brand-lime selection:text-white">
      <Navbar />
      <Hero data={homeData.hero} />
      <LogoCloud data={homeData.logos} />
      <About data={homeData.about} />
      <Manifest data={homeData.manifesto} />
      <Testimonials data={homeData.community} />

      {/* Passing footer data */}
      <Footer data={homeData.footer} />
    </main>
  );
}
