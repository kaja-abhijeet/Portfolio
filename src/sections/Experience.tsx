"use client";

import { Briefcase, GraduationCap, Award, CheckCircle2, Trophy } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/Reveal";

const experiences = [
  {
    type: "work",
    role: "AI and Data Intern",
    company: "Fortune Minds INC",
    period: "Jan 2026 – Present",
    description:
      "End-to-end ML pipelines including data preprocessing, feature engineering, and model evaluation. Hands-on experience with supervised learning algorithms using real-world datasets.",
  },
  {
    type: "education",
    role: "B.Tech — Computer Science",
    company: "CVR College of Engineering",
    period: "2022 – 2026",
    description:
      "CGPA: 8.02 / 10. Focused on Data Structures, Algorithms, Artificial Intelligence, and scalable problem-solving.",
  },
];

const achievements = [
  "🏆 Winner — College Hackathon 2024 (AI-based problem-solving solution)",
  "💻 Solved 200+ DSA problems across LeetCode and competitive platforms",
  "🥋 Black Belt in Taekwondo — demonstrates discipline & leadership",
];

const certificates = [
  { name: "Machine Learning", issuer: "Stanford University (Andrew Ng)", color: "indigo" },
  { name: "Google Data Analytics Specialization", issuer: "Google", color: "blue" },
  { name: "IBM Data Science Professional Certificate", issuer: "IBM", color: "purple" },
];

const certColor: Record<string, string> = {
  indigo: "border-indigo-500/30 bg-indigo-500/5",
  blue: "border-blue-500/30 bg-blue-500/5",
  purple: "border-purple-500/30 bg-purple-500/5",
};
const certBadge: Record<string, string> = {
  indigo: "text-indigo-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
};

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[300px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="section-label mb-5 inline-flex">
            <Briefcase size={12} />
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <div className="glow-bar" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Timeline */}
          <div>
            <Reveal>
              <h3 className="text-base font-semibold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-600" /> Timeline
              </h3>
            </Reveal>
            <div className="relative border-l-2 border-white/[0.07] ml-4 pb-4">
              <RevealGroup stagger={0.15} direction="left" className="space-y-10">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute -left-[13px] top-4 flex items-center justify-center w-6 h-6 rounded-full bg-[#060609] border-2 border-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]">
                      {exp.type === "work" ? (
                        <Briefcase size={11} className="text-indigo-400" />
                      ) : (
                        <GraduationCap size={11} className="text-indigo-400" />
                      )}
                    </div>
                    <div className="glass p-6 rounded-2xl border border-white/7 hover:border-indigo-500/25 card-hover transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-base font-bold text-white">{exp.role}</h4>
                          <p className="text-indigo-400 text-sm font-semibold mt-0.5">{exp.company}</p>
                        </div>
                        <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/7 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </RevealGroup>
            </div>
          </div>

          {/* Achievements & Certs */}
          <div className="space-y-10">
            {/* Achievements */}
            <Reveal direction="right" delay={0.1}>
              <h3 className="text-base font-semibold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Trophy size={14} className="text-amber-400" />
                Achievements
              </h3>
              <RevealGroup stagger={0.1} className="space-y-3">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300 glass p-4 rounded-xl border border-white/5 hover:border-amber-500/25 transition-all">
                    <span className="mt-0.5 shrink-0">{item.split(" ")[0]}</span>
                    <span className="leading-relaxed text-gray-400">{item.split(" ").slice(1).join(" ")}</span>
                  </div>
                ))}
              </RevealGroup>
            </Reveal>

            {/* Certificates */}
            <Reveal direction="right" delay={0.2}>
              <h3 className="text-base font-semibold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Award size={14} className="text-purple-400" />
                Certifications
              </h3>
              <RevealGroup stagger={0.1} className="space-y-3">
                {certificates.map((cert, i) => (
                  <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border ${certColor[cert.color]} transition-all hover:brightness-110`}>
                    <CheckCircle2 size={16} className={`shrink-0 ${certBadge[cert.color]}`} />
                    <div>
                      <p className="text-sm font-semibold text-white">{cert.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </RevealGroup>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
