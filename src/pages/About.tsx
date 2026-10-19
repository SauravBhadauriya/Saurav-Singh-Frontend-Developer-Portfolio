import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Code } from "lucide-react";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/contact";
import { details } from "@/components/AboutSection";
import { skillCategories, strengths } from "@/components/SkillsSection";
import { experiences } from "@/components/ExperienceSection";
import { education } from "@/components/EducationSection";
import { GraduationCap } from "lucide-react";
import { HoverButton } from "@/components/ui/animated-link";

const stats = [
  { value: "3+", label: "years building production frontends" },
  { value: "14+", label: "Shopify stores built and customised" },
  { value: "30%", label: "faster load time on a React/Next.js app" },
  { value: "12+", label: "reusable, responsive UI components" },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const sectionTitle = "mt-3 text-3xl font-semibold tracking-tighter text-white md:text-4xl";
const chip =
  "rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400";

export default function About() {
  return (
    <div className="bg-zinc-950 text-white">
      <Seo
        title="About"
        description="Background, experience, and skills of Saurav Singh, a frontend developer with 3+ years of experience."
        path="/about"
      />
      <Navbar />
      <HeroBanner
        title="About Me"
        subtitle="Every project has a story"
        description="Frontend software engineer and web developer with 3+ years building modern web apps, Shopify storefronts and React Native mobile apps."
        aside={{ label: "Currently", title: "Web Developer & Manager", detail: "Cultre Boat", location: "New Delhi, India" }}
        actions={
          <>
            <HoverButton href={WHATSAPP_URL} external icon={ArrowRight}>
              Let&apos;s talk
            </HoverButton>
            <HoverButton href="/Resume/Saurav_Singh_Resume.pdf" download icon={Download}>
              Download Resume
            </HoverButton>
          </>
        }
      />

      {/* ---------- Stats ---------- */}
      <section className="px-4 py-[var(--space-8)]">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...reveal} className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]">
                <p className="text-4xl font-semibold tracking-tighter text-cyan-400 md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------- About & personal details ---------- */}
      <section className="px-4 pb-24 md:pb-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...reveal} className="mb-[var(--space-6)] max-w-2xl">
            <h2 className={sectionTitle}>Frontend-focused developer</h2>
            <p className="mt-4 text-zinc-400">
              Frontend-focused Software Developer with 3+ years of experience building modern web applications,
              Shopify storefronts, and mobile apps.
            </p>
          </motion.div>

          <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] lg:grid-cols-12">
            <motion.div
              {...reveal}
              className="space-y-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)] text-base leading-relaxed text-zinc-300 lg:col-span-7 lg:p-10 lg:text-lg"
            >
              <p>
                I am a frontend-focused software developer with 3+ years of experience building modern web
                applications with React, Next.js, and TypeScript, alongside Shopify storefront development and
                React Native/Expo mobile apps.
              </p>
              <p>
                I currently lead web development and technical coordination at Cultre Boat, working across client
                Shopify stores, a cross-platform mobile app, and web deployments.
              </p>
              <p>
                I&apos;m a strong problem-solver and team player with a track record of shipping reliable,
                well-tested features, and I care about web performance, SEO, and clean, maintainable code.
              </p>
            </motion.div>

            <motion.div {...reveal} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)] lg:col-span-5 lg:p-10">
              <h3 className="mb-8 text-xl font-semibold tracking-tight text-white md:text-2xl">Personal Details</h3>
              <div className="space-y-6">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="rounded-full border border-zinc-800 bg-zinc-950 p-3">
                      <item.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{item.label}</h4>
                      <p className="text-zinc-400">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Skills & expertise ---------- */}
      <section className="px-4 pb-24 md:pb-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...reveal} className="mb-[var(--space-6)]">
            <h2 className={sectionTitle}>Skills &amp; Expertise</h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Specialized in modern frontend technologies and frameworks to create exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-2">
            {skillCategories.map((category) => (
              <motion.div key={category.title} {...reveal} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]">
                <h3 className="mb-5 border-b border-zinc-800 pb-3 text-lg font-semibold tracking-tight text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={chip}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="mt-16">
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
          </motion.div>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="px-4 pb-24 md:pb-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...reveal} className="mb-[var(--space-6)]">
            <h2 className={sectionTitle}>Experience</h2>
            <p className="mt-4 text-zinc-400">3+ years building web applications, Shopify storefronts, and mobile apps.</p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <motion.article
                key={exp.company}
                {...reveal}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)] md:p-10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{exp.role}</h3>
                    <p className="mt-1 text-zinc-300">
                      {exp.company} <span className="text-zinc-500">· {exp.location}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="w-fit rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-400">
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

                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400 md:text-base">
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

      {/* ---------- Education ---------- */}
      <section className="px-4 pb-24 md:pb-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...reveal} className="mb-[var(--space-6)]">
            <h2 className={sectionTitle}>Education &amp; Awards</h2>
            <p className="mt-4 text-zinc-400">My academic journey and professional recognition.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-3">
            {education.map((edu) => (
              <motion.article
                key={`${edu.degree}-${edu.period}`}
                {...reveal}
                className="flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]"
              >
                <div className="mb-6 w-fit rounded-full border border-zinc-800 bg-zinc-950 p-3">
                  <GraduationCap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{edu.degree}</h3>
                <p className="mt-2 text-zinc-300">{edu.institution}</p>
                <p className="text-sm text-zinc-500">{edu.location}</p>

                <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-5 mt-8">
                  <span className="text-sm text-zinc-400">{edu.period}</span>
                  <span className="font-medium text-white">{edu.score}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Currently ---------- */}
      <section className="px-4 pb-24 md:pb-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            {...reveal}
            className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-8 md:grid-cols-2 md:p-12"
          >
            <div>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-white">Web Developer &amp; Manager</p>
              <p className="mt-1 text-zinc-400">Cultre Boat · New Delhi, India</p>
            </div>
            <div className="flex flex-wrap items-start gap-2 md:justify-end">
              {["Constant learner", "Tech enthusiast", "Continuous builder"].map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Ticker banner ---------- */}
      <section className="overflow-hidden bg-[#e5e5e5] py-8 md:py-10">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="px-8 text-4xl font-bold italic uppercase tracking-tight text-zinc-900 md:text-6xl"
            >
              Clean code, fast interfaces, shipped to production. <Code className="mx-6 inline h-6 w-6 text-zinc-400" aria-hidden="true" />
            </p>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
