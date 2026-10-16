import React from "react";
import { ExternalLink } from "lucide-react";
import { RevealOnScroll } from "./RevealAnimation";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer & Manager",
    company: "Cultre Boat",
    location: "Delhi, India",
    period: "Apr 2026 – Present",
    website: { label: "cultreboat.in", href: "https://www.cultreboat.in/" },
    note: null,
    highlights: [
      "Lead frontend development and day-to-day technical coordination across multiple concurrent client engagements spanning Shopify storefronts, a React Native mobile app, and web deployments.",
      "Manage and maintain multiple live Shopify stores concurrently, handling ongoing feature requests, bug fixes, and performance improvements across clients.",
      "Delivered end-to-end Shopify storefront builds, product-page redesigns, and SEO/schema markup improvements for multiple fashion and D2C brand clients.",
      "Contributed to a React Native/Expo mobile app built in a Yarn/Turbo monorepo, resolving API integration and build/dependency issues, implementing KYC step-navigation logic, and configuring EAS builds.",
      "Managed a client website's deployment pipeline on Vercel, diagnosing and resolving Git/GitHub authentication issues blocking auto-deployments.",
    ],
    tags: ["Shopify", "Liquid", "React Native", "Expo", "Turborepo", "EAS Build", "Vercel"],
  },
  {
    role: "Web Developer",
    company: "Appziaa Softlabs Pvt. Ltd.",
    location: "Delhi, India",
    period: "Oct 2023 – Mar 2026",
    website: { label: "rewardsplus.in", href: "https://rewardsplus.in/" },
    note: "Frontend Developer (Oct – Dec 2023), promoted to Web Developer (Jan 2024 – Mar 2026).",
    highlights: [
      "Built 12+ reusable, responsive UI components using React, Next.js, and TypeScript, improving load time by 30% and team productivity by 40%.",
      "Optimized Redux state management, boosting performance by 25% and reducing bundle size by 15%.",
      "Resolved 20+ UI issues using Git and browser DevTools, maintaining 99% feature stability.",
      "Contributed to code reviews across 15+ pull requests, helping improve overall code quality.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Redux"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">Experience</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              3+ years building web applications, Shopify storefronts, and mobile apps.
            </p>
          </RevealOnScroll>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 md:p-10 transition-colors duration-500 hover:border-zinc-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{exp.role}</h3>
                  <p className="mt-1 text-zinc-300">
                    {exp.company} <span className="text-zinc-500">· {exp.location}</span>
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="w-fit rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    {exp.period}
                  </span>
                  <a
                    href={exp.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {exp.website.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {exp.note && <p className="mt-4 text-sm italic text-zinc-500">{exp.note}</p>}

              <ul className="mt-6 list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed text-zinc-400">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
