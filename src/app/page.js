import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Manifest from "@/components/sections/Manifest";
import LogoCloud from "@/components/sections/LogoCloud";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

import homeData from "@/content/home.json";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-clip selection:bg-accent selection:text-white">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero data={homeData.hero} />
        <LogoCloud data={homeData.logos} />
        <About data={homeData.about} />
        <Manifest data={homeData.manifesto} />
        <Testimonials data={homeData.community} />
        <Footer data={homeData.footer} />
      </div>
    </main>
  );
}

