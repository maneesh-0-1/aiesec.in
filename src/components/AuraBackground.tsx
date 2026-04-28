"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AuraBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] -z-10 overflow-hidden bg-background transition-colors duration-500">
      <motion.div
        animate={{
          x: mousePosition.x * -80,
          y: mousePosition.y * -80,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute rounded-full blur-[140px] opacity-70 dark:opacity-60"
        style={{
          width: "70vw",
          height: "70vw",
          background: "radial-gradient(circle, var(--aura-1) 0%, transparent 60%)",
          top: "-20%",
          left: "-10%",
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x * 80,
          y: mousePosition.y * 80,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute rounded-full blur-[140px] opacity-70 dark:opacity-60"
        style={{
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, var(--aura-2) 0%, transparent 60%)",
          bottom: "-20%",
          right: "-10%",
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute rounded-full blur-[140px] opacity-70 dark:opacity-60"
        style={{
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, var(--aura-3) 0%, transparent 60%)",
          top: "40%",
          left: "30%",
        }}
      />
    </div>
  );
}
