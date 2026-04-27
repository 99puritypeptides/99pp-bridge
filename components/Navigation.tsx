"use client";

import Link from "next/link";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Command, Menu, X, ChevronRight } from "lucide-react";
import SearchModal from "./ui/SearchModal";

const navLinks = [
  { name: "Homepage", href: "/" },
  { name: "Blog", href: "https://99puritypeptides.com/blog/", external: true },
  { name: "Database", href: "/database" },
  { name: "Synthesis", href: "/synthesis" },
  { name: "Protocols", href: "/protocols" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-4 md:top-8 z-50 w-full px-4 md:px-6 flex justify-center">
        <nav className="relative flex items-center justify-between md:justify-start gap-2 md:gap-4 p-2.5 md:p-3.5 bg-surface/80 md:bg-surface/40 backdrop-blur-xl border border-border/50 rounded-none shadow-2xl w-full md:w-fit max-w-[95vw] md:max-w-none">
          {/* Brand Section */}
          <div className="px-2 md:px-6 md:pr-10 md:border-r border-border/30">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex h-8 w-8 items-center justify-center">
                {/* Logo Icon with double hex frame */}
                <div className="absolute inset-0 border border-accent/20 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                <div className="absolute inset-1 border border-accent/40 -rotate-12 group-hover:rotate-12 transition-transform duration-700"></div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" className="relative z-10">
                  <path d="M12 2l9 4.9V17l-9 5-9-5V6.9z" />
                </svg>
              </div>
              <div className="flex flex-col -gap-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-[15px] font-black tracking-tight text-primary leading-none uppercase">99</span>
                  <span className="font-display text-[15px] font-bold uppercase tracking-[0.2em] text-primary leading-none">Purity</span>
                </div>
                <span className="font-display text-[8px] font-medium uppercase tracking-[0.4em] text-accent/80 leading-none mt-1">Research</span>
              </div>
            </Link>
          </div>

          {/* Search Trigger (Icon) */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 md:px-4 py-2 hover:bg-accent/5 transition-colors md:border-l md:border-r border-border/30 group ml-auto md:ml-0"
          >
            <Search size={14} className="text-muted group-hover:text-accent transition-colors" />
            <div className="hidden lg:flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
              <Command size={10} className="text-muted" />
              <span className="text-[9px] uppercase tracking-widest text-muted">K</span>
            </div>
          </button>

          {/* Desktop Links Section */}
          <div className="hidden md:flex items-center relative">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-6 lg:px-8 py-3 text-[12px] uppercase tracking-[0.2em] transition-colors duration-500 z-10 ${
                  pathname === link.href ? "text-accent" : "text-secondary hover:text-primary"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span 
                    layoutId="active-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <AnimatePresence>
                  {hoveredPath === link.href && (
                    <motion.span
                      layoutId="hover-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-accent/5 -z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

          {/* Desktop Action Section */}
          <div className="hidden md:block pl-4 lg:pl-6 border-l border-border/30">
            <Button 
              href="/database" 
              variant="outline"
              className="!px-6 !py-2.5 !gap-2 !text-[12px] border-none hover:bg-accent/10 whitespace-nowrap"
            >
              Access Portal
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center gap-2 px-3 py-2 text-primary hover:text-accent transition-colors"
          >
            <span className="text-[9px] uppercase tracking-widest font-medium">Menu</span>
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-[calc(100%+8px)] left-0 right-0 bg-surface border border-border/50 p-6 flex flex-col gap-4 shadow-2xl z-[60]"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="flex items-center justify-between py-2 border-b border-border/10 group"
                  >
                    <span className={`text-xs uppercase tracking-[0.2em] ${pathname === link.href ? "text-accent" : "text-secondary group-hover:text-primary"}`}>
                      {link.name}
                    </span>
                    <ChevronRight size={14} className="text-muted group-hover:text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
                <Button 
                  href="/database" 
                  className="w-full mt-4 !py-4"
                >
                  Access Portal
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
