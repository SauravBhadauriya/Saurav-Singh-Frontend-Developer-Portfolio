
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RevealOnScroll, ZoomIn } from "./RevealAnimation";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "Redux Persist", "Context API"]
  },
  {
    title: "UI Frameworks",
    skills: ["Material UI", "Shadcn UI", "Bootstrap"]
  },
  {
    title: "Tools & Practices",
    skills: ["GitLab", "Redux DevTools", "Detailed SEO Extension", "Agile (Kanban, Scrum)", "ClickUp"]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-50">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-20 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <RevealOnScroll>
            <h2 className="section-heading text-center mx-auto">Skills & Expertise</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Specialized in modern frontend technologies and frameworks to create 
              exceptional user experiences.
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={0.2 * index}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-full">
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold mb-5 text-sky-700 border-b border-sky-100 pb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.1 * skillIndex, 
                          duration: 0.4,
                          type: "spring",
                          stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className={cn(
                          "px-3 py-1.5 rounded-md text-sm font-medium flex items-center",
                          index % 2 === 0 
                            ? "bg-sky-100 text-sky-700 hover:bg-sky-200 transition-colors" 
                            : "bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                        )}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="mt-12">
          <RevealOnScroll delay={0.4}>
            <h3 className="text-2xl font-semibold mb-6 font-poppins text-sky-700 text-center">Professional Strengths</h3>
          </RevealOnScroll>
          
          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              // "Team Leadership", 
              "Problem Solving", 
              "SEO Optimization", 
              "Performance Optimization",
              'Accessibility',
              'Clean Code'
            ].map((strength, index) => (
              <ZoomIn key={index} delay={0.2 + (index * 0.15)}>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-4 text-center">
                    <motion.p 
                      className="font-medium text-slate-800" 
                      whileHover={{ scale: 1.05 }}
                    >
                      {strength}
                    </motion.p>
                  </CardContent>
                </Card>
              </ZoomIn>
            ))}
          </div>
          <div className="flex md:hidden justify-center items-center flex-wrap gap-4">
          {[
              // "Team Leadership", 
              "Problem Solving", 
              "SEO Optimization", 
              "Performance Optimization",
              'Accessibility',
              'Clean Code'
            ].map((strength, index) => (
              <ZoomIn key={index} delay={0.2 + (index * 0.15)}>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white basis-[50%]">
                  <CardContent className="p-4 text-center">
                    <motion.p 
                      className="font-medium text-slate-800" 
                      whileHover={{ scale: 1.05 }}
                    >
                      {strength}
                    </motion.p>
                  </CardContent>
                </Card>
              </ZoomIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
