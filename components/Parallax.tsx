"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
};

export default function Parallax({ children, offset = 40, className = "" }: ParallaxProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], [0, offset]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
