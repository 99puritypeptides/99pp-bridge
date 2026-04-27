"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #00D2FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 border border-accent/30 bg-accent/5 mb-8">
            <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">Error 404</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-thin text-primary mb-6">Sequence <span className="italic">Lost</span></h1>
          <p className="text-secondary font-light max-w-md mx-auto mb-12 text-lg leading-relaxed">
            The experimental node you are looking for has been decommissioned or moved to a different sector.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/" variant="outline" className="border-accent/20 hover:bg-accent/10">
              Return to Hub
            </Button>
            <Button href="/database" className="bg-primary text-black hover:bg-white transition-colors">
              Browse Database
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>
    </div>
  );
}
