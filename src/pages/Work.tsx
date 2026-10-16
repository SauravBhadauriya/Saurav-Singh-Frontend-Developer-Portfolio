import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download, Code } from "lucide-react";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import { WHATSAPP_URL } from "@/lib/contact";
import { HoverButton } from "@/components/ui/animated-link";
import { projects, storefronts, storefrontImages, type Project } from "@/components/ProjectsSection";
import { cn } from "@/lib/utils";

/** Image panel with a zoom on hover. Falls back to the icon when there is no screenshot. */
function Thumbnail({
  Icon,
  image,
  alt,
  tall = false,
  contain = false,
}: {
  Icon: React.ElementType;
  image?: string;
  alt: string;
  tall?: boolean;
  contain?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950",
        tall ? "h-72 md:h-96" : "h-56"
      )}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105",
            contain ? "object-contain bg-zinc-950" : "object-cover object-top"
          )}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <Icon className="h-14 w-14 text-cyan-400" />
        </div>
      )}
    </div>
  );
}

/** Featured, full-width project: image on top, metadata underneath */
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 transition-colors duration-500 hover:border-zinc-600 md:p-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
    >
      <Thumbnail Icon={project.icon} image={project.image} alt={`${project.title} screenshot`} tall />
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">{project.period ?? "Web application"}</p>
          <h3 className="mt-1 text-3xl font-semibold tracking-tight text-white md:text-4xl">{project.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <HoverButton key={link.href} href={link.href} external variant="solid" icon={ArrowUpRight} className="px-5 py-2.5">
              {link.label}
            </HoverButton>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Work() {
  const [first, second, third] = projects;
  return (
    <div className="bg-zinc-950 text-white">
      <Navbar />
      <HeroBanner
        title="Selected Work"
        subtitle="Passionate about clean code & scale"
        description="Shopify storefronts, a React Native app and web platforms I have built and contributed to."
        aside={{ label: "Experience", title: "3+ years of client work", detail: "Shopify, React & React Native", location: "New Delhi, India" }}
        actions={
          <>
            <HoverButton href={WHATSAPP_URL} external icon={ArrowRight}>
              Start a Project
            </HoverButton>
            <HoverButton href="/Resume/Saurav_Singh_Resume.pdf" download icon={Download}>
              Download Resume
            </HoverButton>
          </>
        }
      />

      {/* ---------- 2. Featured showcase ---------- */}
      <section className="bg-zinc-950 px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Full-width featured projects */}
          {first && <FeaturedProject project={first} index={0} />}
          {second && <FeaturedProject project={second} index={1} />}

          {/* Multi-column grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {third && (
              <motion.a
                href={third.links[0]?.href}
                target={third.links[0] ? "_blank" : undefined}
                rel={third.links[0] ? "noopener noreferrer" : undefined}
                className="group block rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 transition-colors duration-500 hover:border-zinc-600"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <Thumbnail
                  Icon={third.icon}
                  image={third.image}
                  alt={`${third.title} screenshot`}
                  contain={third.imageFit === "contain"}
                />
                <p className="mt-5 text-sm text-zinc-400">{third.period}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">{third.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{third.description}</p>
              </motion.a>
            )}

            {storefronts.map((store, index) => (
              <motion.a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 transition-colors duration-500 hover:border-zinc-600"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.04 * (index % 6) }}
              >
                <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
                  {storefrontImages[store.name] ? (
                    <img
                      src={storefrontImages[store.name]}
                      alt={`${store.name} storefront`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <span className="text-lg font-semibold text-zinc-500">{store.label}</span>
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-semibold text-white">{store.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{store.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors group-hover:text-white">
                  Visit store <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. Ticker banner ---------- */}
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
              Let&apos;s make something great together <Code className="mx-6 inline h-6 w-6 text-zinc-400" aria-hidden="true" />
            </p>
          ))}
        </motion.div>
      </section>

      {/* ---------- 4. Footer (shared) ---------- */}
      <Footer />

    </div>
  );
}
