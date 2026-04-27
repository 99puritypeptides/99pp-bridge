"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Command, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const searchableItems = [
  { name: "GHK-Cu", category: "Tripeptide", slug: "ghk-cu" },
  { name: "BPC-157", category: "Cellular Repair", slug: "bpc-157" },
  { name: "TB-500", category: "Regenerative", slug: "tb-500" },
  { name: "MOTS-c", category: "Mitochondrial", slug: "mots-c" },
  { name: "SS-31", category: "Mitochondrial", slug: "ss-31" },
  { name: "Epithalon", category: "Longevity", slug: "epithalon" },
  { name: "KPV", category: "Anti-inflammatory", slug: "kpv" },
  { name: "Sequence Database", category: "Resources", slug: "../../database" },
  { name: "Synthesis Methodology", category: "Lab", slug: "../../synthesis" },
  { name: "Laboratory Protocols", category: "Lab", slug: "../../protocols" },
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) onClose(); // This is handled by parent, but good to have
      }
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const results = query 
    ? searchableItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems.slice(0, 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-surface border border-border/50 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-6 py-4 border-b border-border/30">
              <Search className="text-muted mr-4" size={20} />
              <input 
                ref={inputRef}
                type="text"
                placeholder="Search compounds, protocols, or data..."
                className="flex-grow bg-transparent border-none outline-none text-primary font-light text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-muted border border-border/50 px-2 py-0.5 rounded-sm flex items-center gap-1">
                  <Command size={10} /> K
                </span>
                <button onClick={onClose} className="p-1 hover:text-accent transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              <div className="text-[9px] uppercase tracking-[0.2em] text-muted mb-4 px-2">
                {query ? `Search Results (${results.length})` : "Recent Research"}
              </div>

              <div className="space-y-1">
                {results.length > 0 ? (
                  results.map((item) => (
                    <Link
                      key={item.name}
                      href={item.slug.startsWith("..") ? item.slug.replace("../../", "/") : `/compounds/${item.slug}`}
                      onClick={onClose}
                      className="group flex items-center justify-between p-3 hover:bg-accent/5 transition-colors border border-transparent hover:border-accent/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-surface border border-border/50 group-hover:border-accent/30 transition-colors">
                          <FileText size={14} className="text-muted group-hover:text-accent" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-muted">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        Jump to Monograph →
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="py-12 text-center text-muted font-light text-sm italic">
                    No sequences found for "{query}"
                  </div>
                )}
              </div>
            </div>

            <div className="bg-surface/50 px-6 py-3 border-t border-border/30 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted">
                  <span className="border border-border/50 px-1.5 py-0.5 rounded-sm">↑↓</span> Navigate
                </div>
                <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted">
                  <span className="border border-border/50 px-1.5 py-0.5 rounded-sm">Enter</span> Select
                </div>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-muted italic">
                99PP.SYSTEM.SEARCH
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
