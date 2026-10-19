import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { CardBody, cardClass, connectCards } from "@/components/ConnectGrid";
import { projects } from "@/components/ProjectsSection";
import { skillCategories } from "@/components/SkillsSection";
import { experiences } from "@/components/ExperienceSection";

const aboutHighlights = [
  { title: "3+ years", body: "Building production frontends for web apps, Shopify stores and mobile apps." },
  { title: "Current role", body: "Web Developer & Manager at Cultre Boat, leading frontend and technical coordination." },
  { title: "Core stack", body: "React, Next.js, TypeScript, Tailwind CSS, Shopify (Liquid) and React Native." },
];

const homeStats = [
  { value: "3+", label: "years building production frontends" },
  { value: "14+", label: "Shopify stores built and customised" },
  { value: "30%", label: "faster load time on a React/Next.js app" },
  { value: "12+", label: "reusable, responsive UI components" },
];

const skillPreview = skillCategories.slice(0, 4);
const experiencePreview = experiences.slice(0, 2);

const previewConnect = ["LinkedIn", "WhatsApp", "Email"].map((label) => connectCards.find((card) => card.label === label)!);

const sectionShell = "border-t border-zinc-900 bg-[#09090b] px-4 py-[var(--space-8)]";

function SectionHeader({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <div className="mb-[var(--space-6)] flex flex-col gap-[var(--space-4)] md:gap-[var(--space-5)] md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-white md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-zinc-400">{description}</p>
      </div>
      <Link
        to={to}
        className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/20"
      >
        Show more
        <ArrowRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

const reveal = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: index * 0.08 },
});

const Index = () => {
  const previewProjects = projects.slice(0, 3);

  return (
    <>
      <Seo
        title="Home"
        description="Saurav Singh is a frontend developer with 3+ years of experience building web applications with React, Next.js, TypeScript, Shopify, and React Native."
        path="/"
      />
      <Navbar />
      <main>
        <HeroSection />

        {/* ---------- Stats ---------- */}
        <section className="bg-[#09090b] px-4 py-16">
          <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {homeStats.map((stat, index) => (
              <motion.div key={stat.label} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]" {...reveal(index)}>
                <p className="text-4xl font-semibold tracking-tighter text-cyan-400 md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- Work preview ---------- */}
        <section className={sectionShell}>
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Selected work"
              description="Shopify storefronts, web platforms and mobile apps I have built and contributed to."
              to="/work"
            />
            <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-3">
              {previewProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.links[0]?.href}
                  target={project.links[0] ? "_blank" : undefined}
                  rel={project.links[0] ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 transition-colors duration-500 hover:border-zinc-600"
                  {...reveal(index)}
                >
                  <div className="relative aspect-video overflow-hidden bg-zinc-950">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className={`h-full w-full ${project.imageFit === "contain" ? "object-contain" : "object-cover object-top"}`}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <project.icon className="h-10 w-10 text-cyan-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-[var(--space-4)] md:p-[var(--space-5)]">
                    {project.period && <p className="text-xs text-zinc-500">{project.period}</p>}
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{project.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About preview ---------- */}
        <section className={sectionShell}>
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Frontend-focused developer"
              description="Frontend Software Developer with 3+ years of experience building modern web applications, Shopify storefronts and mobile apps."
              to="/about"
            />
            <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-3">
              {aboutHighlights.map((item, index) => (
                <motion.div key={item.title} className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]" {...reveal(index)}>
                  <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Skills preview ---------- */}
        <section className={sectionShell}>
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Skills & expertise"
              description="Frontend, e-commerce and mobile technologies used across my projects."
              to="/about"
            />
            <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-2">
              {skillPreview.map((category, index) => (
                <motion.div key={category.title} className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]" {...reveal(index)}>
                  <h3 className="mb-5 border-b border-zinc-800 pb-3 text-lg font-semibold tracking-tight text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Experience preview ---------- */}
        <section className={sectionShell}>
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Where I've worked"
              description="3+ years building web applications, Shopify storefronts and mobile apps."
              to="/about"
            />
            <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-2">
              {experiencePreview.map((exp, index) => (
                <motion.div key={exp.company} className="flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)]" {...reveal(index)}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white">{exp.role}</h3>
                      <p className="mt-1 text-sm text-zinc-300">
                        {exp.company}
                      </p>
                      <p className="text-sm text-zinc-500">{exp.location}</p>
                    </div>
                    <span className="w-fit whitespace-nowrap rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-400">{exp.period}</span>
                  </div>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                    {exp.highlights.slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Connect preview ---------- */}
        <section className={sectionShell}>
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Let's talk"
              description="Reach me on LinkedIn, WhatsApp or email."
              to="/connect"
            />
            <div className="grid gap-[var(--space-4)] md:gap-[var(--space-5)] md:grid-cols-3">
              {previewConnect.map((card, index) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href?.startsWith("http") ? "_blank" : undefined}
                  rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cardClass}
                  {...reveal(index)}
                >
                  <CardBody card={card} />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
