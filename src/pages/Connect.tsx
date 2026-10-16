import { motion } from "framer-motion";
import { ArrowRight, Download, Code } from "lucide-react";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import { WHATSAPP_URL } from "@/lib/contact";
import ConnectGrid from "@/components/ConnectGrid";
import { HoverButton } from "@/components/ui/animated-link";

export default function Connect() {
  return (
    <div className="bg-[#09090b] text-white">
      <Navbar />
      <HeroBanner
        title="Let's Connect"
        subtitle="Down for a coffee?"
        description="Open to full-time roles and freelance work. The fastest way to reach me is email."
        aside={{ label: "Availability", title: "Open to hire", detail: "Full-time & freelance", location: "New Delhi, India" }}
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

      {/* ---------- Social & direct contact cards ---------- */}
      <section className="bg-[#09090b] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <ConnectGrid />

          <motion.p
            className="mt-16 text-center text-sm font-bold italic uppercase tracking-widest text-cyan-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Currently based in Delhi, India
          </motion.p>
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
              Have a project? Let&apos;s build it. <Code className="mx-6 inline h-6 w-6 text-zinc-400" aria-hidden="true" />
            </p>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
