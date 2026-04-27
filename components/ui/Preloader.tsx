"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Molecular Animation */}
            <div className="relative h-24 w-24 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-accent/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border-b-2 border-accent/20 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2">
                  <path d="M12 2l9 4.9V17l-9 5-9-5V6.9z" />
                </svg>
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="text-primary font-display text-[10px] uppercase tracking-[0.4em] font-bold">Initializing</span>
                <span className="text-accent font-display text-[10px] uppercase tracking-[0.4em] font-bold">Research Portal</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="mt-6 h-[1px] w-48 bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
