import React from "react";
import { MapPin, Calendar, Code } from "lucide-react";
import { RevealOnScroll, SlideInFromLeft, SlideInFromRight } from "./RevealAnimation";
import { motion } from "framer-motion";

const details = [
  { icon: MapPin, label: "Location", value: "New Delhi, Delhi - 110016" },
  { icon: Calendar, label: "Experience", value: "3+ Years" },
  { icon: Code, label: "Main Tech Stack", value: "React, Next.js, TypeScript, Shopify, React Native" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">About Me</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Frontend-focused Software Developer with 3+ years of experience building modern web
              applications, Shopify storefronts, and mobile apps.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <SlideInFromLeft width="100%" delay={0.3} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 lg:p-10 transition-colors duration-500 hover:border-zinc-600">
              <div className="space-y-5 text-base lg:text-lg leading-relaxed text-zinc-300">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  I am a frontend-focused software developer with 3+ years of experience building modern web
                  applications with React, Next.js, and TypeScript, alongside Shopify storefront development
                  and React Native/Expo mobile apps.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  I currently lead web development and technical coordination at Cultre Boat, working across
                  client Shopify stores, a cross-platform mobile app, and web deployments.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  I'm a strong problem-solver and team player with a track record of shipping reliable,
                  well-tested features, and I care about web performance, SEO, and clean, maintainable code.
                </motion.p>
              </div>
            </div>
          </SlideInFromLeft>

          <SlideInFromRight width="100%" delay={0.5} className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 lg:p-10 transition-colors duration-500 hover:border-zinc-600">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-8">Personal Details</h3>

              <div className="space-y-6">
                {details.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full border border-zinc-800 bg-zinc-950 p-3">
                      <item.icon className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{item.label}</h4>
                      <p className="text-zinc-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </div>
    </section>
  );
}
