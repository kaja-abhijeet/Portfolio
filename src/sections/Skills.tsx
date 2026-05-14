"use client";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup } from "@/components/Reveal";

const skills = [
  {
    category: "AI & LLMs",
    emoji: "🧠",
    color: "indigo",
    items: ["Artificial Intelligence", "Large Language Models", "Generative AI", "Transformers", "LangChain", "LangGraph"],
  },
  {
    category: "Machine Learning",
    emoji: "🤖",
    color: "purple",
    items: ["Machine Learning", "Deep Learning", "TensorFlow", "Artificial Neural Networks", "Scikit-Learn", "Keras"],
  },
  {
    category: "NLP & Data Science",
    emoji: "📊",
    color: "violet",
    items: ["Natural Language Processing", "Data Science", "Data Analysis", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
  },
  {
    category: "BI & Visualization",
    emoji: "📈",
    color: "blue",
    items: ["Microsoft Power BI", "Tableau", "Data Cleaning"],
  },
  {
    category: "Programming & Tools",
    emoji: "⌨️",
    color: "cyan",
    items: ["Python", "JavaScript", "Flask", "Streamlit", "Git", "GitHub"],
  },
  {
    category: "CS Fundamentals",
    emoji: "⚡",
    color: "amber",
    items: ["Data Structures", "Problem Solving", "Algorithms", "DSA (200+ Problems)"],
  },
];

const colorConfig: Record<string, { top: string; badge: string; tag: string }> = {
  indigo: {
    top: "from-indigo-500 to-indigo-700",
    badge: "bg-indigo-500/10 border-indigo-500/20",
    tag: "bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20 text-indigo-200",
  },
  purple: {
    top: "from-purple-500 to-purple-700",
    badge: "bg-purple-500/10 border-purple-500/20",
    tag: "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 text-purple-200",
  },
  violet: {
    top: "from-violet-500 to-violet-700",
    badge: "bg-violet-500/10 border-violet-500/20",
    tag: "bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20 text-violet-200",
  },
  blue: {
    top: "from-blue-500 to-blue-700",
    badge: "bg-blue-500/10 border-blue-500/20",
    tag: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 text-blue-200",
  },
  cyan: {
    top: "from-cyan-500 to-cyan-700",
    badge: "bg-cyan-500/10 border-cyan-500/20",
    tag: "bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 text-cyan-200",
  },
  amber: {
    top: "from-amber-500 to-amber-700",
    badge: "bg-amber-500/10 border-amber-500/20",
    tag: "bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20 text-amber-200",
  },
};

export function Skills() {
  const totalSkills = skills.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="section-label mb-5 inline-flex">
            <Code2 size={12} />
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="glow-bar mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto">
            {totalSkills}+ tools and technologies across AI, data science, and software development.
          </p>
        </Reveal>

        {/* Skills grid */}
        <RevealGroup
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group, groupIdx) => {
            const c = colorConfig[group.color];
            return (
              <div
                key={groupIdx}
                className="glass rounded-2xl overflow-hidden card-hover border border-white/7 group"
              >
                <div className={`h-1 w-full bg-gradient-to-r ${c.top}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-9 h-9 rounded-xl ${c.badge} border flex items-center justify-center text-base`}>
                      {group.emoji}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-sm">{group.category}</h3>
                      <p className="text-xs text-gray-600">{group.items.length} skills</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <motion.span
                        key={itemIdx}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-default transition-all ${c.tag}`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </RevealGroup>

        {/* All skills tag cloud */}
        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {skills.flatMap((g) => g.items).map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-[11px] font-medium text-gray-600 border border-white/5 bg-white/[0.02]"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
