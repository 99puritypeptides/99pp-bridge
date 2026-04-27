"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function InteractiveCard({ children, className = "", onClick }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position relative to card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight effect (gradient following mouse)
  const spotlightX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const spotlightY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  // Tilt effect
  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates for tilt (centered at 0,0)
    const normalizedX = x - rect.width / 2;
    const normalizedY = y - rect.height / 2;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    // Update custom properties for the background gradient
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        group relative overflow-hidden bg-surface border border-border/50 p-10
        transition-colors duration-500 hover:border-accent/30
        ${className}
      `}
    >
      {/* Dynamic Spotlight Background */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 210, 255, 0.08), transparent 40%)`
        }}
      />

      {/* Modern Border Glow (Linear style) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(0, 210, 255, 0.4), transparent 80%)`,
          maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          maskClip: `content-box, border-box`,
          maskComposite: `exclude`,
          WebkitMaskComposite: `destination-out`,
          padding: '1px'
        }}
      />

      {/* Content Container (Lifts on hover) */}
      <motion.div 
        style={{ transform: "translateZ(30px)" }}
        className="relative z-20"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
