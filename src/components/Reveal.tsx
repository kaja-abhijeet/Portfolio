"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

/**
 * Reliable scroll-triggered reveal for Framer Motion v12 + Next.js 16 App Router.
 * Uses useInView + animate instead of whileInView to avoid SSR hydration issues.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 0.5,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: React.ReactNode[];
  stagger?: number;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

/**
 * Staggered reveal for lists of items.
 */
export function RevealGroup({
  children,
  stagger = 0.1,
  delay = 0,
  direction = "up",
  className,
  duration = 0.5,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  return (
    <div ref={ref} className={cn(className)}>
      {(children as React.ReactNode[]).map((child, i) => (
        <motion.div
          key={i}
          initial={initial}
          animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
