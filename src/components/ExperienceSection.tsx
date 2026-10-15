
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";
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
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <RevealOnScroll>
            <h2 className="section-heading text-center mx-auto">Experience</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              3+ years building web applications, Shopify storefronts, and mobile apps.
            </p>
          </RevealOnScroll>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-sky-100 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative md:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-6 bg-sky-100 p-2.5 rounded-full hidden md:block">
                  <Briefcase className="h-5 w-5 text-sky-600" />
                </div>

                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold font-poppins text-slate-800">
                          {exp.role}
                        </h3>
                        <p className="text-sky-700 font-medium">
                          {exp.company} · <span className="text-slate-600 font-normal">{exp.location}</span>
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge variant="outline" className="bg-sky-50 text-sky-600 w-fit">
                          {exp.period}
                        </Badge>
                        <a
                          href={exp.website.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-500 hover:text-sky-600 transition-colors inline-flex items-center gap-1"
                        >
                          {exp.website.label} <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    {exp.note && (
                      <p className="text-slate-500 italic text-sm mb-4">{exp.note}</p>
                    )}

                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="text-slate-600">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
