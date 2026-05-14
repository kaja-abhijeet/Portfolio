"use client";

import { Mail, Send, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Reveal, RevealGroup } from "@/components/Reveal";

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/kaja-abhijeet",
    label: "GitHub",
    username: "@kaja-abhijeet",
    color: "hover:border-white/30 hover:bg-white/8",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/abhijeet-kaja/",
    label: "LinkedIn",
    username: "abhijeet-kaja",
    color: "hover:border-blue-500/40 hover:bg-blue-500/8",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:kajaabhijeet2004@gmail.com",
    label: "Email",
    username: "kajaabhijeet2004@gmail.com",
    color: "hover:border-indigo-500/40 hover:bg-indigo-500/8",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/8 blur-[140px] pointer-events-none rounded-t-full" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="section-label mb-5 inline-flex">
            <MessageCircle size={12} />
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Let's <span className="text-gradient">work together</span>
          </h2>
          <div className="glow-bar mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a project idea, an opportunity, or just want to chat about AI —
            I'm always open for a conversation!
          </p>
        </Reveal>

        {/* Main contact card */}
        <Reveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-10 mb-10 text-center border border-white/8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-purple-600/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
                <Send size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Say hello 👋</h3>
              <p className="text-gray-500 mb-8 text-sm">Reach me at</p>
              <a
                href="mailto:kajaabhijeet2004@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                kajaabhijeet2004@gmail.com
              </a>
              <p className="mt-6 text-gray-600 text-sm">
                or call{" "}
                <a href="tel:+919392585534" className="text-gray-400 hover:text-white transition-colors font-mono">
                  +91-9392585534
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Social links */}
        <RevealGroup stagger={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 glass rounded-2xl border border-white/7 text-gray-400 hover:text-white transition-all ${s.color}`}
            >
              <span className="shrink-0">{s.icon}</span>
              <div>
                <p className="text-white text-sm font-semibold">{s.label}</p>
                <p className="text-xs text-gray-600 mt-0.5">{s.username}</p>
              </div>
            </a>
          ))}
        </RevealGroup>

        {/* Footer */}
        <Reveal className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Abhijeet Kaja. All rights reserved.
          </p>
          <p className="text-gray-700">
            Built with <span className="text-gray-500">Next.js</span> &{" "}
            <span className="text-gray-500">Framer Motion</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
