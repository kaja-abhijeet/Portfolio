"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { BookOpen, Database, MonitorPlay, MessageSquare } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/Reveal";

const projects = [
  {
    title: "LLM Book Recommender",
    description:
      "LLM-powered recommendation system using LangChain and HuggingFace embeddings for semantic similarity search. Built an interactive Streamlit interface with metadata-based filtering and ranked recommendations.",
    tech: ["LangChain", "HuggingFace", "Streamlit", "Vector DB"],
    github: "https://github.com/kaja-abhijeet/book-recommender-llm",
    live: "https://bookrecommenderllm.streamlit.app",
    icon: BookOpen,
    gradient: "from-indigo-600 via-indigo-500 to-purple-600",
    glow: "shadow-indigo-500/20",
    accent: "indigo",
    featured: true,
  },
  {
    title: "QueryMint",
    description:
      "Natural Language to SQL conversion agent that helps non-technical users query databases effortlessly. Supports complex JOIN queries and natural conversational context.",
    tech: ["Python", "SQL", "LangChain", "NLP"],
    github: "https://github.com/kaja-abhijeet/QueryMint",
    live: "https://querymint.streamlit.app/",
    icon: Database,
    gradient: "from-emerald-600 via-teal-500 to-cyan-600",
    glow: "shadow-emerald-500/20",
    accent: "emerald",
    featured: false,
  },
  {
    title: "DeepDiver",
    description:
      "Multi-agent AI research system that autonomously searches, reads, writes, and critiques research reports. Features a clean minimal Streamlit UI with agent thought visibility.",
    tech: ["Python", "LangChain", "LLMs", "Multi-Agent"],
    github: "https://github.com/kaja-abhijeet/DeepDiver",
    live: "https://deepdiver.streamlit.app/",
    icon: MonitorPlay,
    gradient: "from-rose-600 via-red-500 to-orange-600",
    glow: "shadow-rose-500/20",
    accent: "rose",
    featured: false,
  },
  {
    title: "TubeTalk",
    description:
      "AI-powered tool that processes YouTube videos and allows users to chat with the video content interactively using RAG and semantic chunking.",
    tech: ["Python", "NLP", "Vector DB", "RAG"],
    github: "https://github.com/kaja-abhijeet/TubeTalk",
    icon: MessageSquare,
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    glow: "shadow-amber-500/20",
    accent: "amber",
    featured: false,
  },
];

const accentBorder: Record<string, string> = {
  indigo: "hover:border-indigo-500/40",
  emerald: "hover:border-emerald-500/40",
  rose: "hover:border-rose-500/40",
  amber: "hover:border-amber-500/40",
};
const accentTag: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  rose: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="section-label mb-5 inline-flex">
            <Layers size={12} />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="glow-bar mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            A curated selection of my work in AI, NLP, and intelligent systems.
          </p>
        </Reveal>

        {/* Project cards */}
        <RevealGroup
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`glass rounded-2xl overflow-hidden group card-hover flex flex-col border border-white/7 ${accentBorder[project.accent]} transition-all ${project.featured ? `shadow-2xl ${project.glow}` : ""}`}
              >
                {/* Banner */}
                <div className={`relative w-full h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </div>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 p-4 rounded-2xl bg-white/15 backdrop-blur-sm"
                  >
                    <Icon size={36} className="text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${accentTag[project.accent]}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 pt-4 border-t border-white/5 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium">
                      <FaGithub size={16} />
                      Source
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </RevealGroup>

        {/* View all CTA */}
        <Reveal delay={0.3} className="text-center mt-12">
          <a
            href="https://github.com/kaja-abhijeet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            <FaGithub size={16} />
            View all projects on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
