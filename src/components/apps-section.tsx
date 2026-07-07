"use client";

import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  MonitorSmartphone,
  Layers,
  MessageSquare,
  Radio,
} from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Gamja",
    tagline: "Modern & Minimalist",
    description:
      "A sleek, lightweight IRC client built with vanilla JS. Clean UI with zero clutter — perfect for focused conversations.",
    url: "https://gamja.libraryirc.net",
    icon: MonitorSmartphone,
    status: "new" as const,
    tech: ["Vanilla JS", "Lightweight"],
  },
  {
    name: "Obby",
    tagline: "Next-Gen React Client",
    description:
      "Built on React and the Next.js stack. A modern, component-driven interface with cutting-edge web technology.",
    url: "https://obby.libraryirc.net",
    icon: Layers,
    status: "new" as const,
    tech: ["React", "Next.js"],
  },
  {
    name: "The Lounge",
    tagline: "Feature-Rich & Persistent",
    description:
      "The most full-featured web IRC client. Persistent connections, push notifications, and extensive customization.",
    url: "https://lounge.libraryirc.net",
    icon: MessageSquare,
    status: "stable" as const,
    tech: ["Node.js", "Persistent"],
  },
  {
    name: "KiwiIRC",
    tagline: "Classic Web Chat",
    description:
      "The original web IRC experience. Simple, reliable, and familiar — a trusted choice for IRC communities worldwide.",
    url: "https://kiwi.libraryirc.net",
    icon: Radio,
    status: "legacy" as const,
    tech: ["Classic", "Reliable"],
  },
];

const statusConfig = {
  new: { label: "New", className: "bg-primary/15 text-primary border-primary/20" },
  stable: { label: "Stable", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
  legacy: { label: "Legacy", className: "bg-muted text-muted-foreground border-border" },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function AppsSection() {
  return (
    <section id="apps" className="relative py-24 sm:py-32 px-4 sm:px-6">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Web Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
              Choose Your Client
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every client connects to the same network. Pick the interface that
              matches your style and start chatting instantly.
            </p>
          </motion.div>
        </div>

        {/* Client Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {clients.map((client) => {
            const status = statusConfig[client.status];
            return (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative flex flex-col p-6 sm:p-7 rounded-xl border border-border/60 bg-card/40 hover:bg-card/60 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-orange-sm pointer-events-none" />

                {/* Top Row: Icon + Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    <client.icon className="size-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className={status.className}
                  >
                    {status.label}
                  </Badge>
                </div>

                {/* Name & Tagline */}
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {client.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {client.description}
                </p>

                {/* Bottom Row: Tech tags + Arrow */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                  <div className="flex gap-2">
                    {client.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground px-2 py-0.5 rounded-md bg-muted/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Launch
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          All clients connect to{" "}
          <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
            irc.libraryirc.net:+6697
          </code>{" "}
          &mdash; TLS encrypted.
        </motion.p>
      </div>
    </section>
  );
}