"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub size={18} />, href: "https://github.com/kaja-abhijeet", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/abhijeet-kaja/", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:kajaabhijeet2004@gmail.com", label: "Email" },
];

const floatingTags = [
  { text: "LangChain", x: "8%", y: "20%", delay: 0 },
  { text: "Python", x: "78%", y: "15%", delay: 0.3 },
  { text: "LLMs", x: "85%", y: "55%", delay: 0.6 },
  { text: "RAG", x: "5%", y: "65%", delay: 0.9 },
  { text: "MLOps", x: "60%", y: "80%", delay: 1.2 },
  { text: "NLP", x: "25%", y: "82%", delay: 1.5 },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[55%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 translate-x-[-30%] -translate-y-[40%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-indigo-900/20 rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating tech tags */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tag.delay + 0.8, duration: 0.5 }}
          className="absolute hidden lg:flex items-center px-3 py-1.5 rounded-full glass text-xs font-mono text-indigo-300 border border-indigo-500/20 pointer-events-none"
          style={{ left: tag.x, top: tag.y }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse" />
          {tag.text}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center mb-8"
        >
          <span className="section-label">
            <Sparkles size={12} />
            Open to new opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05]"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Abhijeet</span>
          <br />
          <span className="text-gradient">Kaja</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-6"
        >
          <span className="text-xl md:text-2xl text-gray-300 font-medium">
            AI &amp; Data Intern
          </span>
          <span className="mx-3 text-indigo-500">·</span>
          <span className="text-xl md:text-2xl text-gray-300 font-medium">
            Aspiring AI Engineer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I specialize in building intelligent AI agents and working with Large Language Models.
          Focused on{" "}
          <span className="text-indigo-400 font-medium">NLP</span>,{" "}
          <span className="text-purple-400 font-medium">Agentic AI</span>, and{" "}
          <span className="text-blue-400 font-medium">Explainable AI</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-gray-300 hover:text-white font-semibold transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/8 border border-transparent hover:border-white/10 transition-all"
            >
              {s.icon}
            </a>
          ))}
          <div className="h-px w-12 bg-white/10 ml-2" />
          <span className="text-gray-600 text-sm font-mono">kaja-abhijeet</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-9 border-2 border-white/15 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </motion.div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">Scroll</span>
      </motion.div>
    </section>
  );
}
