import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-12 md:py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-sky-400 text-lg md:text-xl mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="gradient-text mr-4">Saurav</span>
              <span className="gradient-text">Singh</span>
            </motion.h1>

            <motion.div
              className="h-1 w-20 bg-sky-500 mb-6 hidden md:block"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 1 }}
            />

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Typewriter
                words={[
                  "Frontend Software Developer specializing in modern web technologies and creating exceptional user experiences.",
                ]}
                loop={false}
                cursor
                cursorStyle="."
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={62000}
              />
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
           
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-md px-8 py-6 font-medium"
              >
                Explore My Portfolio <ArrowDown className="ml-2" />
              </Button>
              <a href="/Saurav_Singh_Frontend_Developer_resume.pdf" download>
              <Button
                size="lg"
                className="bg-white border-sky-500 hover:bg-sky-600 text-sky-500 hover:text-white rounded-md px-8 py-6 font-medium"
              >
              Download My Resume <Download className="ml-2" />
              </Button>
              </a>
            

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <motion.a
                  href="https://github.com/SauravBhadauriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/saurav-singh-163a9223a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:sauravbhadauriya17@gmail.com"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-400/30 relative z-10  mt-[30px] md:mt-auto">
                <img
                  src="/lovable-uploads/DP.png"
                  alt="Shweta Saxena"
                  className=" object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}
