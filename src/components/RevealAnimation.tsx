
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  customVariants?: {
    hidden: Variant;
    visible: Variant;
  };
  delay?: number;
  className?: string; // Added className property to the interface
}

export const RevealOnScroll: React.FC<RevealProps> = ({
  children,
  width = "100%",
  customVariants,
  delay = 0.25,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const defaultVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const variants = customVariants || defaultVariants;

  return (
    <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const SlideInFromLeft: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0.25,
  className,
}) => {
  const customVariants = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <RevealOnScroll width={width} customVariants={customVariants} delay={delay} className={className}>
      {children}
    </RevealOnScroll>
  );
};

export const SlideInFromRight: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0.25,
  className,
}) => {
  const customVariants = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <RevealOnScroll width={width} customVariants={customVariants} delay={delay} className={className}>
      {children}
    </RevealOnScroll>
  );
};

export const ZoomIn: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0.25,
  className,
}) => {
  const customVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  
  return (
    <RevealOnScroll width={width} customVariants={customVariants} delay={delay} className={className}>
      {children}
    </RevealOnScroll>
  );
};

export const FadeIn: React.FC<RevealProps> = ({ 
  children, 
  width = "100%",
  delay = 0.25,
  className,
}) => {
  const customVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  return (
    <RevealOnScroll width={width} customVariants={customVariants} delay={delay} className={className}>
      {children}
    </RevealOnScroll>
  );
};
