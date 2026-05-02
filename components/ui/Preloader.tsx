"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 15);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const text = "INITIALIZING RESEARCH PORTAL";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader-surface"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Ambient Background Accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-scan-reverse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo Centerpiece */}
            <div className="relative h-48 w-48 mb-12 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"
              />
              
              <div className="relative z-20 flex items-center justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <img
                    src="/99Logo.png"
                    alt="99 Purity"
                    className="w-full h-full object-contain relative z-30"
                  />
                </div>
              </div>
            </div>

            {/* Staggered Text Reveal */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-[0.2em]">
                {text.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.03,
                      ease: "easeOut"
                    }}
                    className={`text-[10px] uppercase tracking-[0.3em] font-display ${
                      char === " " ? "w-2" : ""
                    } ${
                      i > 11 ? "text-accent font-bold" : "text-primary/70 font-medium"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Technical Metadata */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-6 text-[8px] uppercase tracking-[0.4em] text-muted font-mono"
              >
                <span>SYS.VER: 4.0.2</span>
                <span className="w-1 h-1 bg-accent/40 rounded-full"></span>
                <span>ENC: AES-256</span>
                <span className="w-1 h-1 bg-accent/40 rounded-full"></span>
                <span>{progress}%</span>
              </motion.div>

              {/* Progress Bar */}
              <div className="relative mt-8 w-64 h-[2px] bg-white/5 overflow-hidden rounded-full">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-scan-reverse {
          animation: scan 4s linear infinite reverse;
        }
      `}</style>
    </AnimatePresence>
  );
}
