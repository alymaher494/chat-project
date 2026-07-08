"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check, Shield, Users, Eye, Lock, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface NetworkStats {
  users: number;
  channels: number;
  servers: number;
  uptime: string;
}

const defaultStats: NetworkStats = {
  users: 847,
  channels: 234,
  servers: 3,
  uptime: "99.9%",
};

const terminalLines = [
  { text: "$ ", cmd: "/join #general", type: "command" },
  { text: "» Joined #general (Topic: Welcome to LibraryIRC!)", type: "success" },
  { user: "Alice", text: "Hey everyone! Welcome to LibraryIRC 💬", type: "message" },
  { user: "Bob", text: "Is this really anonymous?", type: "message" },
  { user: "System", text: "Yes! Zero logging, zero trackers, pure chat.", type: "success" },
  { text: "$ ", cmd: "/msg Alice Hello from the terminal!", type: "command" },
  { user: "You", text: "Hello from the terminal!", type: "message" },
];

const trustBadges = [
  { icon: Lock, label: "Zero logging of private messages" },
  { icon: Shield, label: "Community-driven moderation" },
  { icon: Eye, label: "Privacy-first, no data harvesting" },
  { icon: Users, label: "Open source & transparent" },
];

export function HeroSection() {
  const [stats, setStats] = useState<NetworkStats>(defaultStats);
  const [copied, setCopied] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => { if (data?.users) setStats(data); })
      .catch(() => {});
  }, []);

  // Typewriter effect for terminal lines
  useEffect(() => {
    setVisibleLines(0);
    timerRef.current = setTimeout(() => setVisibleLines(1), 300);
    for (let i = 1; i < terminalLines.length; i++) {
      timerRef.current = setTimeout(() => setVisibleLines(i + 1), 300 + i * 180);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyCommand = useCallback(() => {
    navigator.clipboard.writeText("/connect irc.libraryirc.net");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const scrollToApps = () => {
    document.querySelector("#apps")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-14 pb-0 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_50%_-20%] from-primary/10 via-background to-background" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6">
              Vintage Chatting, <span className="text-primary">Modern Experience.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Welcome to <span className="text-foreground font-semibold">LibraryIRC</span>—the ultimate network of free, anonymous, and real-time chat rooms. No registration required, no algorithms tracking you, and absolutely no bloat. Just step in, choose a room, and start chatting with amazing people worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToApps} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 py-6 text-base">
                💬 Enter Chat Rooms Now
              </Button>
              <Button onClick={scrollToApps} variant="outline" size="lg" className="font-medium px-6 py-6 text-base">
                View Available Apps
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-xs text-muted-foreground font-medium"
                >
                  <badge.icon className="size-4 text-primary" />
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Terminal Retro Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-md overflow-hidden shadow-2xl shadow-primary/5">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">connection_wizard.exe</span>
                </div>
                <button
                  onClick={copyCommand}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1 rounded hover:bg-muted/50 font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-green-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      Copy host
                    </>
                  )}
                </button>
              </div>
              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-2 min-h-[220px] bg-black/40">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {line.type === "command" ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-green-400 select-none">{line.text}</span>
                        <span className="text-foreground">{line.cmd}</span>
                      </div>
                    ) : line.type === "message" ? (
                      <div className="flex items-start gap-1.5">
                        <span className="text-primary font-medium select-none">&lt;{line.user}&gt;</span>
                        <span className="text-foreground">{line.text}</span>
                      </div>
                    ) : line.type === "success" ? (
                      <div className="text-emerald-400/90">
                        {line.text}
                      </div>
                    ) : (
                      <div className="text-muted-foreground">{line.text}</div>
                    )}
                  </motion.div>
                ))}
                {visibleLines < terminalLines.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-2.5 h-4 bg-primary"
                  />
                )}
              </div>
            </div>

            {/* Retro Connection Note */}
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-1">
              <span>Host: irc.libraryirc.net</span>
              <span>Port: 6697 (SSL)</span>
            </div>
          </motion.div>

        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border/60 pt-10 mt-16"
        >
          {[
            { icon: Shield, label: "100% Anonymous", detail: "No Account Needed" },
            { icon: Users, label: "Real-time Rooms", detail: "Chat Instantly" },
            { icon: Globe, label: "Global Reach", detail: "Meet People Anywhere" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border/40 bg-card/20 hover:bg-card/30 transition-all duration-300 px-5 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}