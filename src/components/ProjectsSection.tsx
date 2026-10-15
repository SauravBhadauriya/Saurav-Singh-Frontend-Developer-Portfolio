import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";
import { ExternalLink, ShoppingBag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "E-Commerce Storefronts",
    period: "14+ Shopify Stores",
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
  { name: "Nature's Soul Shop / Miri Kiri", href: "https://naturessoulshop.com/collections/miri-kiri", label: "Miri Kiri collection", description: "Worked on the collection page and product discovery experience." },
  { name: "Amiraah India", href: "https://amiraahindia.com", label: "amiraahindia.com", description: "Worked on the storefront and a consistent product presentation across the website." },
  { name: "Healix Scrubs", href: "https://healixscrubs.com", label: "healixscrubs.com", description: "Worked on the online storefront for medical apparel, focused on product browsing." },
  { name: "Samatvam", href: "https://samatvam.in", label: "samatvam.in", description: "Worked on the e-commerce website and its product-focused pages." },
  { name: "Aashima Behl", href: "https://www.aashimabehl.com", label: "aashimabehl.com", description: "Worked on the fashion storefront and product presentation across store pages." },
  { name: "Kalista Studio", href: "https://kalistastudio.in/pages/terms-and-conditions", label: "Terms and Conditions page", description: "Worked on the terms and conditions page and its integration with the storefront." },
  { name: "NeverOwned", href: "https://neverowned.in", label: "neverowned.in", description: "Worked on an e-commerce marketplace for open-box products and its browsing experience." },
  { name: "Knick Knack", href: "https://knickknack.online", label: "knickknack.online", description: "Worked on the online shopping storefront, website customization, and product discovery." },
];


export default function ProjectsSection() {
  // ✅ Hooks must be HERE
  const [api, setApi] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // autoplay every 4s

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section id="projects" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <RevealOnScroll>
            <h2 className="section-heading text-white">Featured Projects</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Shopify storefronts, web platforms, and mobile apps I have built and contributed to.
            </p>
          </RevealOnScroll>
        </div>

       <div
  className="relative"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onTouchStart={() => setIsHovered(true)}
  onTouchEnd={() => setIsHovered(false)}
>
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex justify-center px-4">
                  <motion.div
                    className="group w-full max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="w-full border-none shadow-lg bg-white/95 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <CardTitle className="text-2xl font-bold text-slate-800">
                            {project.title}
                          </CardTitle>
                          {project.period && (
                            <Badge variant="outline" className="bg-sky-50 text-sky-600">
                              {project.period}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="mt-2 text-slate-600">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <h4 className="font-semibold mb-3">Key Contributions:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-6">
                          {project.contributions.map((item, i) => (
                            <li key={i} className="text-slate-600">
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} className="bg-slate-100 text-slate-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      {project.links.length > 0 && (
                        <CardFooter className="flex gap-3 flex-wrap">
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                                {link.label} <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </a>
                          ))}
                        </CardFooter>
                      )}

                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="top-1/2 -translate-y-1/2 left-2 md:-left-12" />
            <CarouselNext className="top-1/2 -translate-y-1/2 right-2 md:-right-12" />
          </Carousel>
        </div>

        <div className="mt-16">
          <RevealOnScroll>
            <h3 className="text-2xl font-semibold mb-2 font-poppins text-white text-center">
              Shopify Storefronts
            </h3>
            <p className="text-slate-400 text-center mb-8">
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
                className="group block rounded-lg bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-sky-400/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * (index % 6) }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-sky-500/15 p-2 rounded-full">
                    <ShoppingBag className="h-4 w-4 text-sky-400" />
                  </div>
                  <h4 className="font-semibold text-white">{store.name}</h4>
                </div>
                <p className="text-slate-400 text-sm mb-3">{store.description}</p>
                <span className="text-sky-400 text-sm inline-flex items-center gap-1 group-hover:text-sky-300">
                  {store.label} <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
