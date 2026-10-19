import { RevealOnScroll } from "./RevealAnimation";

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js 15", "React Native", "Expo", "React Query", "React Hook Form", "React Router"]
  },
  {
    title: "E-Commerce",
    skills: ["Shopify", "Liquid", "Theme Customization (Impulse, Minimog)", "Structured Data / Schema Markup", "SEO"]
  },
  {
    title: "Styling Libraries",
    skills: ["Tailwind CSS", "shadcn/ui", "Bootstrap", "Responsive Design", "Flexbox", "CSS Grid", "Media Queries"]
  },
  {
    title: "State Management & API",
    skills: ["Redux", "React Context API", "REST APIs", "Axios", "Fetch API"]
  },
  {
    title: "Routing & Responsive Design",
    skills: ["React Router", "Next.js File-based Routing", "Media Queries", "Flexbox", "CSS Grid"]
  },
  {
    title: "Monorepo & Build Tools",
    skills: ["Turborepo", "Yarn Workspaces", "EAS Build", "Code Splitting", "Lazy Loading", "Performance Optimization"]
  },
  {
    title: "Version Control & Deployment",
    skills: ["Git", "GitHub", "Sourcetree", "Vercel", "npm", "Yarn", "Chrome DevTools"]
  },
];

export const strengths = [
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Client Coordination",
  "Code Reviews",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[var(--space-8)] border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-[var(--space-6)] text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">Skills &amp; Expertise</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Specialized in modern frontend technologies and frameworks to create
              exceptional user experiences.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-[var(--space-4)] md:gap-[var(--space-5)]">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={category.title} delay={0.1 * index}>
              <div className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)] transition-colors duration-500 hover:border-zinc-600">
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
