"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { ArrowRight } from "lucide-react";
import homeData from "@/content/home.json";
import { POSTS } from "@/content/posts";

// ─── Stagger animation config ─────────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen relative overflow-hidden selection:bg-accent selection:text-white">
            <AnimatedBackground />
            <Navbar />

            <div className="relative z-10">
                {/* ── Hero Header ─────────────────────────────────────── */}
                <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 blur-[120px] -z-10 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[25%] h-[25%] bg-purple-500/5 blur-[100px] -z-10" />

                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6 max-w-3xl"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-black text-xs font-semibold uppercase tracking-wider shadow-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(30,52,183,0.5)]" />
                                JohnnyDEV Blog
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-[4rem] font-bold font-display text-black leading-[0.95]">
                                <span className="block">Idee, storie</span>
                                <span className="block text-(--color-brand-blue) mt-2">
                                    e tool per developer.
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-black/70 text-xl md:text-2xl leading-relaxed font-light max-w-2xl"
                            >
                                Articoli su community, AI, carriera e mindset — scritti da chi
                                vive la programmazione ogni giorno.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ── Posts Grid ──────────────────────────────────────── */}
                <section className="pb-28 md:pb-36">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {POSTS.map((post) => (
                                <motion.article key={post.id} variants={cardVariants}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group relative flex flex-col h-full bg-white/80 backdrop-blur-xl border border-black/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {/* Top accent line */}
                                        <span
                                            className="absolute top-0 left-0 w-full h-[3px]"
                                            style={{ background: post.accent }}
                                        />

                                        <div className="flex flex-col flex-1 p-7 pt-8 space-y-4">
                                            {/* Tag + meta */}
                                            <div className="flex items-center justify-between">
                                                <span
                                                    className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                                    style={{
                                                        background: `${post.accent}18`,
                                                        color: post.accent === "#CCFF00" ? "#5a7200" : post.accent,
                                                    }}
                                                >
                                                    {post.tag}
                                                </span>
                                                <span className="text-[11px] text-black/40 font-mono">
                                                    {post.readTime} read
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-lg font-bold font-display text-black leading-snug group-hover:text-(--color-brand-blue) transition-colors duration-300">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-black/60 text-sm leading-relaxed flex-1">
                                                {post.excerpt}
                                            </p>

                                            {/* Card footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-black/6">
                                                <span className="text-xs text-black/40 font-mono">
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-xs font-semibold text-black group-hover:gap-2.5 transition-all duration-300">
                                                    Leggi
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>

                        {/* Coming soon notice */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-16 text-center"
                        >
                            <p className="text-black/40 text-sm font-mono tracking-widest uppercase">
                                Nuovi articoli in arrivo — stay tuned 🚀
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <Footer data={homeData.footer} />
            </div>
        </main>
    );
}
