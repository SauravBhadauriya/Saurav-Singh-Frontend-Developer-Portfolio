import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { HoverButton } from "@/components/ui/animated-link";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-end relative overflow-hidden pt-32 pb-20 md:pb-28">
      {/* Background image with a left-side scrim so the headline reads clearly */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#09090b] via-[#09090b]/70 to-[#09090b]/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-[#09090b] to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-white">
              Saurav
              <br />
              Singh
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-medium tracking-tight text-white">
              Frontend Software Engineer &amp; Shopify/Web Expert
            </p>

            <p className="mt-3 max-w-lg text-base md:text-lg leading-relaxed text-zinc-400">
              3+ years of experience building modern web apps, Shopify storefronts, and React Native mobile apps.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <HoverButton onClick={scrollToAbout} icon={ArrowDown}>
                Explore My Portfolio
              </HoverButton>

              <HoverButton href="/Saurav_Singh_Frontend_Developer_resume.pdf" download icon={Download}>
                Download My Resume
              </HoverButton>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="https://github.com/SauravBhadauriya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saurav-singh-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:sauravbhadauriya17@gmail.com"
                aria-label="Email"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:justify-self-end w-full max-w-xs rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">Currently</p>
            <p className="font-medium text-white">Web Developer &amp; Manager</p>
            <p className="mt-1 text-sm text-zinc-400">Cultre Boat</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="h-4 w-4" />
              New Delhi, India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
