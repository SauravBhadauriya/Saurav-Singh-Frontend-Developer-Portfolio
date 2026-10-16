import { ArrowRight, Download } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import { HoverButton } from "@/components/ui/animated-link";

export default function HeroSection() {
  return (
    <HeroBanner
      id="home"
      title={
        <>
          Saurav
          <br />
          Singh
        </>
      }
      subtitle="Frontend Software Engineer & Shopify/Web Expert"
      description="Saurav Singh is a frontend developer with 3+ years of experience building web applications with React, Next.js, and TypeScript. He also works with Shopify storefronts and React Native mobile apps."
      actions={
        <>
          <HoverButton href="/work" icon={ArrowRight}>
            Explore Work
          </HoverButton>
          <HoverButton href="/Resume/Saurav_Singh_Resume.pdf" download icon={Download}>
            Download Resume
          </HoverButton>
        </>
      }
      aside={{
        label: "Currently",
        title: "Web Developer & Manager",
        detail: "Cultre Boat",
        location: "New Delhi, India",
      }}
    />
  );
}
