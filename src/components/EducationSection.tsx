import { GraduationCap } from "lucide-react";
import { RevealOnScroll } from "./RevealAnimation";
import { motion } from "framer-motion";

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Future Institute of Engineering and Technology",
    location: "Bareilly, India",
    period: "2019 – 2023",
    score: "68%"
  },
  {
    degree: "12th Grade",
    institution: "SVM Inter College",
    location: "Bareilly, India",
    period: "2018",
    score: "66%"
  },
  {
    degree: "10th Grade",
    institution: "SVM Inter College",
    location: "Bareilly, India",
    period: "2016",
    score: "84%"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-[var(--space-8)] border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-[var(--space-6)] text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">Education &amp; Awards</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              My academic journey and professional recognition.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-4)] md:gap-[var(--space-5)]">
          {education.map((edu, index) => (
            <motion.article
              key={index}
              className="flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-[var(--space-4)] md:p-[var(--space-5)] transition-colors duration-500 hover:border-zinc-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
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
  );
}
