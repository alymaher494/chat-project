"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MonitorSmartphone,
  Layers,
  MessageSquare,
  Radio,
  Check,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clients = [
  {
    name: "Gamja Client",
    tagline: "Recommended & Modern",
    description:
      "An ultra-lightweight, high-performance web interface. Optimized for low-bandwidth, lightning-fast loading, and a clean, clutter-free chatting environment. Perfect for quick connections.",
    url: "https://gamja.libraryirc.net",
    icon: MonitorSmartphone,
    status: "new" as const,
    buttonLabel: "Launch Gamja Chat",
    features: [
      "Fast on low-bandwidth connections",
      "Clean, distraction-free layout",
      "Great for quick conversations",
      "No heavy setup required",
    ],
  },
  {
    name: "Obby Client",
    tagline: "Next-Gen Interface",
    description:
      "A gorgeous, modern web client built on cutting-edge web technologies. Features a sleek dashboard layout, smooth responsive animations, and a premium visual aesthetic.",
    url: "https://obby.libraryirc.net",
    icon: Layers,
    status: "new" as const,
    buttonLabel: "Launch Obby Chat",
    features: [
      "Elegant, polished interface",
      "Smooth and responsive experience",
      "Built for modern browsers",
      "A premium feel without the fuss",
    ],
  },
  {
    name: "The Lounge",
    tagline: "Feature-Rich",
    description:
      "A modern self-hosted chat client that stays connected in the background. It remembers where you left off, supports rich media previews, push notifications, and multiple layouts.",
    url: "https://lounge.libraryirc.net",
    icon: MessageSquare,
    status: "stable" as const,
    buttonLabel: "Launch The Lounge",
    features: [
      "Stay connected in the background",
      "Rich media previews and history",
      "Helpful notifications",
      "Flexible layouts for every mood",
    ],
  },
  {
    name: "KiwiIRC",
    tagline: "Classic Chat",
    description:
      "The time-tested, familiar, and highly reliable web chat client. Intuitive for IRC newcomers and packed with all the standard features a veteran chatter expects.",
    url: "https://kiwi.libraryirc.net",
    icon: Radio,
    status: "legacy" as const,
    buttonLabel: "Launch Classic Kiwi",
    features: [
      "Familiar and dependable",
      "Easy for newcomers",
      "All the essentials in one place",
      "A trusted classic experience",
    ],
  },
];

const statusConfig = {
  new: { label: "NEW", className: "bg-primary/15 text-primary border-primary/20" },
  stable: { label: "STABLE", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
  legacy: { label: "LEGACY", className: "bg-muted text-muted-foreground border-border" },
};

export function AppsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? clients.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === clients.length - 1 ? 0 : i + 1));

  const client = clients[activeIndex];
  const status = statusConfig[client.status];

  return (
    <section id="apps" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Choose Your <span className="text-primary">Chat Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            We believe in choice. LibraryIRC offers multiple web interfaces tailored to your preferences—whether you prefer an ultra-minimalist single-page chat or a feature-rich client with persistent bouncers.
          </p>
        </motion.div>

        {/* Carousel / Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={prev}
              className="p-2 rounded-md border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition-colors disabled:opacity-30"
              aria-label="Previous client"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-md border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition-colors disabled:opacity-30"
              aria-label="Next client"
            >
              <ChevronRight className="size-4" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {clients.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === activeIndex
                      ? "bg-primary w-5"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Active Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-border/60 bg-card/40 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:gap-8">
                  {/* Left: Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <client.icon className="size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold">{client.name}</h3>
                          <Badge variant="outline" className={status.className}>
                            {status.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium">{client.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-5">
                      {client.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {client.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {client.buttonLabel}
                        <ExternalLink className="size-3.5" />
                      </a>
                    </Button>
                  </div>

                  {/* Right: All Clients Quick List */}
                  <div className="lg:w-72 shrink-0 mt-6 lg:mt-0 pt-6 lg:pt-0 lg:border-l lg:border-border/40 lg:pl-8">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      All Clients
                    </p>
                    <div className="space-y-1">
                      {clients.map((c, i) => (
                        <button
                          key={c.name}
                          onClick={() => {
                            setActiveIndex(i);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm text-left ${
                            i === activeIndex
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <c.icon className="size-4 shrink-0" />
                          <span className="font-medium">{c.name}</span>
                          <Badge
                            variant="outline"
                            className={`ml-auto text-[10px] px-1.5 py-0 ${statusConfig[c.status].className}`}
                          >
                            {statusConfig[c.status].label}
                          </Badge>
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
                      All clients connect to the same open, welcoming network—just choose the interface that feels right for you.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}