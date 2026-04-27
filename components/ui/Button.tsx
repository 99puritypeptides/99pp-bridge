"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

export default function Button({ children, href, onClick, className = "", variant = "primary" }: ButtonProps) {
  const content = (
    <motion.button
      whileTap={{ y: 1 }}
      className={`
        group relative flex items-center justify-center gap-4 px-10 py-5 
        transition-all duration-500 rounded-none
        ${variant === "primary" 
          ? "bg-accent text-black font-bold hover:brightness-110" 
          : "bg-transparent border border-border text-primary hover:border-accent hover:text-accent"}
        ${className}
      `}
      onClick={onClick}
    >
      <span className="font-display text-[11px] uppercase tracking-[0.25em]">
        {children}
      </span>
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Plus 
          size={14} 
          strokeWidth={3} 
          className="transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:rotate-90" 
        />
      </div>
    </motion.button>
  );

  if (href) {
    return <Link href={href} className="inline-block">{content}</Link>;
  }

  return content;
}
