"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import homeData from "@/content/home.json";
import { getPostBySlug } from "@/content/posts";
import { use } from "react";

// ─── Block renderer ───────────────────────────────────────────────────────────
function BlockRenderer({ block }) {
    switch (block.type) {
        case "heading":
            return (
                <h2 className="text-2xl md:text-3xl font-bold font-display text-black mt-12 mb-4 leading-snug">
                    {block.content}
                </h2>
            );
        case "paragraph":
            return (
                <p className="text-black/75 text-lg leading-[1.85] mb-6">
                    {block.content}
                </p>
            );
        case "quote":
            return (
                <blockquote className="relative my-10 pl-6 border-l-4 border-(--color-brand-blue)">
                    <p className="text-xl md:text-2xl font-medium text-black/80 italic leading-relaxed">
                        {block.content}
                    </p>
                </blockquote>
            );
        case "code":
            return (
                <div className="my-8 rounded-2xl overflow-hidden border border-black/8 shadow-sm">
                    {/* Header bar */}
                    <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a]">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                        <span className="ml-3 text-xs text-gray-500 font-mono">{block.lang}</span>
                    </div>
                    <pre className="bg-[#111] text-[#a3e635] text-sm font-mono p-6 overflow-x-auto leading-relaxed">
                        <code>{block.content}</code>
                    </pre>
                </div>
            );
        default:
            return null;
    }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArticlePage({ params }) {
    const { slug } = use(params);
    const post = getPostBySlug(slug);

    if (!post) notFound();

    const accentIsLime = post.accent === "#CCFF00";
    const tagColor = accentIsLime ? "#5a7200" : post.accent;

    return (
        <main className="min-h-screen relative overflow-hidden selection:bg-accent selection:text-white">
            <AnimatedBackground />
            <Navbar />

            <div className="relative z-10">
                {/* ── Article Hero ──────────────────────────────────────── */}
                <section className="relative pt-36 pb-12 md:pt-44 md:pb-16">
                    {/* Glow */}
                    <div
                        className="absolute top-0 right-0 w-[45%] h-[60%] blur-[140px] -z-10 opacity-20"
                        style={{ background: post.accent }}
                    />

                    <div className="max-w-3xl mx-auto px-6">
                        {/* Back link */}
                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-10"
                        >
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-mono text-black/50 hover:text-black transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Tutti gli articoli
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            {/* Tag */}
                            <span
                                className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                                style={{
                                    background: `${post.accent}20`,
                                    color: tagColor,
                                }}
                            >
                                {post.tag}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display text-black leading-[1.05]">
                                {post.title}
                            </h1>

                            {/* Meta row */}
                            <div className="flex flex-wrap items-center gap-5 text-sm text-black/50 font-mono pt-2">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime} di lettura
                                </span>
                                <span className="flex items-center gap-2">
                                    <Tag className="w-4 h-4" />
                                    {post.author.name} — {post.author.role}
                                </span>
                            </div>

                            {/* Divider */}
                            <div
                                className="w-16 h-1 rounded-full mt-6"
                                style={{ background: post.accent }}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ── Article Body ──────────────────────────────────────── */}
                <section className="pb-28 md:pb-36">
                    <div className="max-w-3xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/80 backdrop-blur-xl border border-black/8 rounded-3xl p-8 md:p-12 shadow-sm"
                        >
                            {post.body.map((block, idx) => (
                                <BlockRenderer key={idx} block={block} />
                            ))}
                        </motion.div>

                        {/* Bottom nav */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex justify-between items-center"
                        >
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 text-sm font-semibold font-mono text-black hover:bg-black hover:text-white transition-all duration-300 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Torna al blog
                            </Link>

                            <span className="text-xs text-black/30 font-mono uppercase tracking-widest hidden sm:block">
                                JohnnyDEV · {post.date}
                            </span>
                        </motion.div>
                    </div>
                </section>

                <Footer data={homeData.footer} />
            </div>
        </main>
    );
}
