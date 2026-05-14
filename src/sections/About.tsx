"use client";

import { Brain, Terminal, Server } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/Reveal";

export function About() {
  const cards = [
    {
      icon: <Brain size={28} />,
      color: "indigo",
      title: "AI & Machine Learning",
      description:
        "Building predictive models and deploying Large Language Models (LLMs) in production-grade pipelines.",
    },
    {
      icon: <Terminal size={28} />,
      color: "purple",
      title: "AI Agents",
      description:
        "Designing autonomous multi-agent systems using LangChain, RAG, and advanced prompt engineering.",
    },
    {
      icon: <Server size={28} />,
      color: "blue",
      title: "Data Pipelines",
      description:
        "End-to-end ML pipelines with cloud deployment, feature stores, and scalable model serving.",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; glow: string; border: string }> = {
    indigo: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      glow: "shadow-indigo-500/20",
      border: "group-hover:border-indigo-500/30",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      glow: "shadow-purple-500/20",
      border: "group-hover:border-purple-500/30",
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      glow: "shadow-blue-500/20",
      border: "group-hover:border-blue-500/30",
    },
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="section-label mb-5 inline-flex">About Me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Turning ideas into{" "}
            <span className="text-gradient">intelligent systems</span>
          </h2>
          <div className="glow-bar mb-8" />
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a passionate engineer at the intersection of AI and software development.
            My focus is on bridging cutting-edge AI research with practical, user-facing applications —
            building tools that solve complex problems elegantly and efficiently.
          </p>
        </Reveal>

        {/* Cards */}
        <RevealGroup
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => {
            const c = colorMap[card.color];
            return (
              <div
                key={index}
                className={`glass p-8 rounded-2xl card-hover group border border-white/7 ${c.border} transition-all`}
              >
                <div className={`w-12 h-12 ${c.bg} ${c.text} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg ${c.glow}`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{card.description}</p>
              </div>
            );
          })}
        </RevealGroup>

        {/* Stats row */}
        <RevealGroup
          stagger={0.08}
          delay={0.1}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "4+", label: "AI Projects" },
            { value: "200+", label: "DSA Problems" },
            { value: "8.1", label: "CGPA" },
            { value: "3+", label: "Certifications" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl px-6 py-5 text-center border border-white/5">
              <div className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
