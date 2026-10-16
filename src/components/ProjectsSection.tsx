import React from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";
import { HoverButton } from "@/components/ui/animated-link";
import { ArrowUpRight, Globe, ShoppingBag, Smartphone } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Storefronts",
    period: "14+ Shopify Stores",
    icon: ShoppingBag,
    description:
      "Shopify storefront builds and customizations for fashion, jewellery, beauty, wellness, and D2C brands, covering responsive UI, product presentation, and SEO/schema markup.",
    contributions: [
      "Built and customized Shopify storefronts using Liquid and theme customization (Impulse & Minimog themes)",
      "Integrated Fastrr COD/RTO, Meta Pixel, and Wigzo to support commerce and marketing workflows",
      "Implemented Product, LocalBusiness, and FAQPage structured data to improve SEO and AI search visibility",
      "Delivered responsive product pages, collection pages, and product discovery experiences",
    ],
    technologies: ["Shopify", "Liquid", "Theme Customization", "Responsive UI", "SEO/Schema Markup"],
    links: [],
  },
  {
    title: "KL University Website",
    period: null,
    icon: Globe,
    description:
      "The university website built with Next.js, presenting academic programs, admissions information, and institutional content.",
    contributions: [
      "Worked on the university website built with Next.js, supporting the presentation of academic programs, admissions information, and institutional content",
      "Contributed to frontend page development and responsive UI improvements to help users navigate university information across devices",
    ],
    technologies: ["Next.js", "React.js", "JavaScript", "HTML", "CSS"],
    links: [{ label: "Live Site", href: "https://www.kluniversity.in/" }],
  },
  {
    title: "RewardsPlus Android App",
    period: "Android",
    icon: Smartphone,
    description:
      "RewardsPlus mobile app listed on Google Play, supporting the company's digital customer and rewards experience.",
    contributions: [
      "Contributed to frontend development and maintenance as part of work on the RewardsPlus platform",
      "Supported the company's digital customer and rewards experience on Android",
    ],
    technologies: ["Android", "Mobile App", "Frontend"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more",
      },
    ],
  },
];

const storefronts = [
  { name: "zevar by Geeta", href: "https://zevarbygeeta.com", label: "zevarbygeeta.com", description: "Built and customized the Shopify storefront and integrated Fastrr COD/RTO, Meta Pixel, and Wigzo." },
  { name: "Lizpaul", href: "https://lizpaul.in", label: "lizpaul.in", description: "Developed the storefront and worked on Product, LocalBusiness, and FAQPage structured data and AI search visibility." },
  { name: "Amayra Jewellery", href: "https://amayrajewellery.com", label: "amayrajewellery.com", description: "Developed and customized the online jewellery storefront and its product collections." },
  { name: "The Koe Beauty", href: "https://thekoebeauty.com", label: "thekoebeauty.com", description: "Built and customized the Shopify storefront for a beauty brand, focused on responsive product browsing." },
  { name: "Kelby Huston", href: "https://kelbyhuston.com", label: "kelbyhuston.com", description: "Developed the Shopify storefront and customized the shopping experience across key store pages." },
  { name: "Canadian Pine Pollen", href: "https://canadianpinepollen.com", label: "canadianpinepollen.com", description: "Worked on the storefront and its product-focused shopping pages." },
  { name: "Nature's Soul Shop / Miri Kiri", href: "https://naturessoulshop.com", label: "naturessoulshop.com", description: "Worked on the collection page and product discovery experience." },
  { name: "Amiraah India", href: "https://amiraahindia.com", label: "amiraahindia.com", description: "Worked on the storefront and a consistent product presentation across the website." },
  { name: "Healix Scrubs", href: "https://healixscrubs.com", label: "healixscrubs.com", description: "Worked on the online storefront for medical apparel, focused on product browsing." },
  { name: "Samatvam", href: "https://samatvam.in", label: "samatvam.in", description: "Worked on the e-commerce website and its product-focused pages." },
  { name: "Aashima Behl", href: "https://www.aashimabehl.com", label: "aashimabehl.com", description: "Worked on the fashion storefront and product presentation across store pages." },
  { name: "Kalista Studio", href: "https://kalistastudio.in", label: "kalistastudio.in", description: "Worked on the terms and conditions page and its integration with the storefront." },
  { name: "NeverOwned", href: "https://neverowned.in", label: "neverowned.in", description: "Worked on an e-commerce marketplace for open-box products and its browsing experience." },
  { name: "Knick Knack", href: "https://knickknack.online", label: "knickknack.online", description: "Worked on the online shopping storefront, website customization, and product discovery." },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">Featured Projects</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Shopify storefronts, web platforms, and mobile apps I have built and contributed to.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 transition-colors duration-500 hover:border-zinc-600"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Visual header: icon panel that zooms subtly on hover */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-12 w-12 text-zinc-500" />
                  </div>
                  {project.period && (
                    <span className="absolute top-4 right-4 rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300">
                      {project.period}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                  <h4 className="mt-6 text-xs font-medium uppercase tracking-widest text-zinc-500">Key Contributions</h4>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-relaxed text-zinc-400">
                    {project.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="mt-auto pt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <HoverButton
                          key={link.href}
                          href={link.href}
                          external
                          variant="solid"
                          icon={ArrowUpRight}
                          className="px-5 py-2.5"
                        >
                          {link.label}
                        </HoverButton>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-24">
          <RevealOnScroll>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white text-center mb-2">
              Shopify Storefronts
            </h3>
            <p className="text-zinc-400 text-center mb-10">
              Shopify · Liquid · Theme Customization · Responsive UI · SEO/Schema Markup
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {storefronts.map((store, index) => (
              <motion.a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition-colors duration-300 hover:border-zinc-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * (index % 6) }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white">{store.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{store.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors group-hover:text-white">
                  {store.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
