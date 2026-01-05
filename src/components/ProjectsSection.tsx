import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "Software-Innovation",
    period: "Jan 2025 - Present",
    description:
      "A comprehensive patient management system with robust features for managing patient records, appointments, and medical histories.",
    contributions: [
      "Developed using Next.js 14, Tailwind CSS, and TypeScript",
      "Implemented React Hook Form and Zod for form validation",
      "Utilized Shadcn UI for modern UI components",
      "Employed Redux Toolkit and Redux Persist for state management",
      "Led a team of 3 developers, coordinating tasks and setting milestones",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Shadcn UI",
      "Redux Toolkit",
    ],
    link: "https://software-innovation.vercel.app/",
  },
  {
    title: "Possible Money",
    period: "Aug 2025 - Aug 2025",
    description:
      "Possible Money is a digital loan application platform designed to streamline the process of applying for and managing loans.",
    contributions: [
      "Leveraged AI tools to speed up front-end development by 30%",
      "Integrated AI-assisted debugging into daily workflows",
      "Used AI for rapid prototyping and UI/UX suggestions",
      "Built using React 19, Tailwind CSS, and JavaScript",
      "Implemented React Hook Form and Formik",
      "Used Redux Toolkit and Redux Persist",
    ],
    technologies: [
      "React 19",
      "JavaScript",
      "Tailwind CSS",
      "React Hook Form",
      "Formik",
      "Redux Toolkit",
    ],
    link: "https://github.com/SauravBhadauriya/Possible-Money",
  },
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
    <section id="projects" className="py-20 min-h-screen flex items-center relative">
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
              A selection of my recent work and contributions to impactful projects.
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
                          <Badge variant="outline" className="bg-sky-50 text-sky-600">
                            {project.period}
                          </Badge>
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

                      <CardFooter>
                        <Link to={project.link}>
                          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                            View Project Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="top-1/2 -translate-y-1/2 left-2 md:-left-12" />
            <CarouselNext className="top-1/2 -translate-y-1/2 right-2 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
