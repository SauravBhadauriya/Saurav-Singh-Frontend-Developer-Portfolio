import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";
import { HoverButton } from "@/components/ui/animated-link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Globe, ShoppingBag, Smartphone, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  period: string | null;
  icon: LucideIcon;
  description: string;
  contributions: string[];
  technologies: string[];
  links: { label: string; href: string }[];
  /** Screenshot shown in the card header; falls back to the icon when missing */
  image?: string;
  /** Use "contain" for tall screenshots such as phone screens so the whole image shows */
  imageFit?: "cover" | "contain";
  /** Shows a button that reveals the full list of Shopify storefronts */
  storefrontToggle?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Storefronts",
    period: "14+ Shopify Stores",
    icon: ShoppingBag,
    image: "/projects/web/Shopify.jpg",
    description:
      "Shopify storefront builds and customizations for fashion, jewellery, beauty, wellness, and D2C brands, covering responsive UI, product presentation, and SEO/schema markup.",
    contributions: [
      "Built and customized Shopify storefronts for fashion, jewellery, beauty, wellness, and D2C brands using Liquid and theme customization (Impulse & Minimog themes)",
      "Integrated Fastrr COD/RTO, Meta Pixel, and Wigzo to support commerce and marketing workflows",
      "Implemented Product, LocalBusiness, and FAQPage structured data to improve SEO and AI search visibility",
      "Delivered responsive product pages, collection pages, and product discovery experiences",
    ],
    technologies: ["Shopify", "Liquid", "Theme Customization", "Responsive UI", "SEO/Schema Markup"],
    links: [],
    storefrontToggle: true,
  },
  {
    title: "KL University Website",
    period: null,
    icon: Globe,
    image: "/projects/web/kluniversity.jpg",
    description:
      "The university website built with Next.js, presenting academic programs, admissions information, and institutional content.",
    contributions: [
      "Developed frontend pages and responsive UI improvements for the Next.js university website, presenting academic programs, admissions information, and institutional content across devices",
    ],
    technologies: ["Next.js", "React.js", "JavaScript", "HTML", "CSS"],
    links: [{ label: "Live Site", href: "https://www.kluniversity.in/" }],
  },
  {
    title: "RewardsPlus Android App",
    period: "Android",
    icon: Smartphone,
    image: "/projects/web/rewardsplus.jpg",
    imageFit: "contain",
    description:
      "RewardsPlus mobile app listed on Google Play, supporting the company's digital customer and rewards experience.",
    contributions: [
      "Contributed to frontend development and maintenance of the RewardsPlus Android app, published on Google Play, supporting the company's digital customer and rewards experience",
    ],
    technologies: ["Android", "Mobile App", "Frontend"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more&pcampaignid=web_share",
      },
    ],
  },
];

/** Screenshots keyed by storefront name; stores without one show text only */
export const storefrontImages: Record<string, string> = {
  "zevar by Geeta": "/projects/web/zevarbygeeta.jpg",
  "Lizpaul": "/projects/web/lizpaul.jpg",
  "Amayra Jewellery": "/projects/web/amayrajewellery.jpg",
  "The Koe Beauty": "/projects/web/Koebeauty.jpg",
  "Kelby Huston": "/projects/web/Kelbyhusun.jpg",
  "Canadian Pine Pollen": "/projects/web/CPP.jpg",
  "Amiraah India": "/projects/web/amiraah.jpg",
  "Aashima Behl": "/projects/web/aashimabhel.jpg",
  "Kalista Studio": "/projects/web/Kalista.jpg",
};

export const storefronts = [
  { name: "zevar by Geeta", href: "https://zevarbygeeta.com", label: "zevarbygeeta.com", description: "Ongoing development and maintenance of the Shopify storefront, with Fastrr COD/RTO, Meta Pixel, and Wigzo integrated for commerce and marketing." },
  { name: "Lizpaul", href: "https://lizpaul.in", label: "lizpaul.in", description: "Ongoing development and maintenance of the storefront, including Product, LocalBusiness, and FAQPage structured data for SEO and AI search visibility." },
  { name: "Amayra Jewellery", href: "https://amayrajewellery.com", label: "amayrajewellery.com", description: "Ongoing development and maintenance of the online jewellery storefront and its product collections." },
  { name: "The Koe Beauty", href: "https://thekoebeauty.com", label: "thekoebeauty.com", description: "Ongoing development and maintenance of the Shopify storefront for a beauty brand, focused on responsive product browsing." },
  { name: "Kelby Huston", href: "https://kelbyhuston.com", label: "kelbyhuston.com", description: "Ongoing development and maintenance of the Shopify storefront and the shopping experience across key store pages." },
  { name: "Canadian Pine Pollen", href: "https://canadianpinepollen.com", label: "canadianpinepollen.com", description: "Ongoing development and maintenance of the storefront and its product-focused shopping pages." },
  { name: "Amiraah India", href: "https://amiraahindia.com", label: "amiraahindia.com", description: "Ongoing development and maintenance of the storefront and a consistent product presentation across the website." },
  { name: "Aashima Behl", href: "https://www.aashimabehl.com", label: "aashimabehl.com", description: "Ongoing development and maintenance of the fashion storefront and its product presentation across store pages." },
  { name: "Kalista Studio", href: "https://kalistastudio.in", label: "kalistastudio.in", description: "Ongoing development and maintenance of the Shopify storefront: product and collection pages, feature updates, and the terms and conditions page." },
];

export default function ProjectsSection() {
  const [showStorefronts, setShowStorefronts] = useState(false);
  const storefrontsRef = useRef<HTMLDivElement>(null);

  // Bring the list into view when it opens
  useEffect(() => {
    if (showStorefronts) {
      storefrontsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showStorefronts]);

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
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105",
                        project.imageFit === "contain" ? "object-contain bg-zinc-950" : "object-cover object-top"
                      )}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-12 w-12 text-cyan-400" />
                    </div>
                  )}
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

                  {project.storefrontToggle && (
                    <div className="mt-auto pt-6 flex flex-wrap gap-3">
                      <HoverButton
                        onClick={() => setShowStorefronts((open) => !open)}
                        variant="solid"
                        icon={ArrowUpRight}
                        className="px-5 py-2.5"
                      >
                        {showStorefronts ? "Hide Shopify projects" : "View all Shopify projects"}
                      </HoverButton>
                    </div>
                  )}

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

        <AnimatePresence initial={false}>
        {showStorefronts && (
        <motion.div
          ref={storefrontsRef}
          className="mt-24 scroll-mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">
              Shopify Storefronts
            </h3>
            <p className="text-zinc-400">
              Shopify · Liquid · Theme Customization · Responsive UI · SEO/Schema Markup
            </p>
          </div>

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
                {storefrontImages[store.name] && (
                  <div className="relative mb-5 h-40 overflow-hidden rounded-xl bg-zinc-950">
                    <img
                      src={storefrontImages[store.name]}
                      alt={`${store.name} storefront`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <h4 className="font-semibold text-white">{store.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{store.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors group-hover:text-white">
                  {store.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  );
}
