import React from "react";
import { RevealOnScroll } from "./RevealAnimation";

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js 15", "React Native (Expo)", "React Query", "React Hook Form + Validation"]
  },
  {
    title: "E-Commerce",
    skills: ["Shopify", "Liquid", "Theme Customization", "Impulse & Minimog Themes", "Schema/SEO Markup"]
  },
  {
    title: "Styling Libraries",
    skills: ["Tailwind CSS", "shadcn/ui", "Bootstrap"]
  },
  {
    title: "State Management & API",
    skills: ["React Context API", "Redux", "REST APIs", "Fetch/Axios"]
  },
  {
    title: "Routing & Responsive Design",
    skills: ["React Router", "Next.js File-based Routing", "Media Queries", "Flexbox", "CSS Grid"]
  },
  {
    title: "Monorepo & Build Tools",
    skills: ["Yarn Workspaces", "Turborepo", "EAS Build", "Code Splitting", "Lazy Loading"]
  },
  {
    title: "Version Control & Deployment",
    skills: ["Git", "GitHub", "Sourcetree", "Vercel", "npm", "Yarn"]
  },
];

export const strengths = [
  "Effective Communication",
  "Problem Solving",
  "Team Collaboration",
  "SEO Optimization",
  "Performance Optimization",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">Skills &amp; Expertise</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Specialized in modern frontend technologies and frameworks to create
              exceptional user experiences.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={category.title} delay={0.1 * index}>
              <div className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 transition-colors duration-500 hover:border-zinc-600">
                <h3 className="mb-5 pb-3 border-b border-zinc-800 text-lg font-semibold tracking-tight text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-16">
          <RevealOnScroll delay={0.4}>
            <h3 className="mb-6 text-center text-2xl font-semibold tracking-tight text-white">Professional Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-zinc-800/80 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  {strength}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
