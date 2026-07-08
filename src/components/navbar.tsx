"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Hash,
  MessageSquare,
  BarChart3,
  Info,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", icon: null },
  {
    label: "Chat Now",
    href: "#apps",
    icon: MessageSquare,
  },
  { label: "Features", href: "#features", icon: null },
  { label: "Services", href: "#services", icon: null },
  { label: "Clients", href: "#apps", icon: null },
  { label: "Help", href: "#how-it-works", icon: Info },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.classList.toggle("light", !next);
      return next;
    });
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between h-14 px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <Hash className="size-5 text-primary" strokeWidth={2.5} />
          <span className="font-bold text-base tracking-tight">
            Library<span className="text-primary">IRC</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <button
              key={link.label + link.href}
              onClick={() => handleNav(link.href)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              {link.icon && <link.icon className="size-3.5" />}
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <div className="w-px h-5 bg-border mx-1" />
          <Button
            onClick={() => handleNav("#apps")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 text-sm"
          >
            <MessageSquare className="size-3.5" />
            Connect
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 px-4 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.label + link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50 text-left"
                >
                  {link.icon && <link.icon className="size-4" />}
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-3 pt-3 border-t border-border/50 mt-2">
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                >
                  {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </Button>
                <Button
                  onClick={() => handleNav("#apps")}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <MessageSquare className="size-3.5" />
                  Connect to Chat
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}