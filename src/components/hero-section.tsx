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

function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const defaultStats: NetworkStats = {
  users: 847,
  channels: 234,
  servers: 3,
  uptime: "99.9%",
};

const terminalLines = [
  { text: "$ ", cmd: "/connect irc.libraryirc.net +6697", type: "command" },
  { text: "Resolving irc.libraryirc.net...", type: "info" },
  { text: "\u2713 Connecting to 192.168.1.100:+6697", type: "success" },
  { text: "\u2713 TLS handshake \u2014 TLS 1.3 [ECDHE-RSA-AES-256-GCM-SHA384]", type: "success" },
  { text: "\u2713 SASL SCRAM-SHA-256 authentication successful", type: "success" },
  { text: "\u2713 Welcome to the LibraryIRC Network \u2014 MOTD loaded", type: "success" },
  { text: "\u2713 Joined #libraryirc \u2014 ", users: true, type: "success" },
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
      className="relative pt-14 pb-0 overflow-hidden"
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
            Your Gateway to <span className="text-primary">Open, Real-Time Conversations</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
            Welcome to <span className="text-foreground font-semibold">LibraryIRC</span>—a free, secure, and resilient IRC network dedicated to bringing communities, developers, and chat enthusiasts together from all around the globe. <span className="text-primary font-semibold">No trackers, no bloat.</span> Just pure text communication.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="irc://irc.libraryirc.net/">
                <span className="mr-2">🚀</span> Connect to Chat
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#apps">Explore Web Apps</a>
            </Button>
          </div>
        </motion.div>

        {/* Terminal Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mb-4"
        >
          <div className="rounded-lg border border-border bg-card overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="text-xs text-muted-foreground ml-2 font-mono">Terminal</span>
              </div>
              <button
                onClick={copyCommand}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-muted/50"
              >
                {copied ? (
                  <>
                    <Check className="size-3 text-green-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    Copy command
                  </>
                )}
              </button>
            </div>
            {/* Terminal Body */}
            <div className="p-4 font-mono text-sm space-y-1.5 min-h-[200px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {line.type === "command" ? (
                    <div className="flex items-center gap-1">
                      <span className="text-green-400 select-none">{line.text}</span>
                      <span className="text-foreground">{line.cmd}</span>
                    </div>
                  ) : line.type === "success" ? (
                    <div className="text-emerald-400/90">
                      {line.text}
                      {line.users && (
                        <span className="text-muted-foreground">{stats.users} users</span>
                      )}
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
                  className="inline-block w-2 h-4 bg-primary"
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* No client link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-sm text-muted-foreground">
            Prefer a browser-based experience?{" "}
            <button
              onClick={scrollToApps}
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Browse our web clients <ArrowRight className="size-3" />
            </button>
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-x-6 gap-y-2 max-w-3xl mb-12"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <badge.icon className="size-3.5 text-primary" />
              {badge.label}
            </div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-8"
        >
          {[
            { icon: Shield, label: "100% Free", detail: "Open Source Forever" },
            { icon: Users, label: "24/7/365", detail: "Guaranteed Uptime" },
            { icon: Globe, label: "Global", detail: "Multi-Region Servers" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border/60 bg-card/30 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <stat.icon className="size-4.5" />
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight text-foreground">{stat.label}</div>
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