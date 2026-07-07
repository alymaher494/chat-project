"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Users, Hash, Server } from "lucide-react";
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
    let start = 0;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
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

export function HeroSection() {
  const [stats, setStats] = useState<NetworkStats>(defaultStats);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.users) setStats(data);
      })
      .catch(() => {
        // Use default stats on fetch failure
      });
  }, []);

  const scrollToApps = () => {
    document.querySelector("#apps")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
            <Activity className="size-3" />
            <span>Network Online &mdash; InspIRCd v3.4.0</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          The Modern{" "}
          <span className="text-gradient-orange">IRC Network</span>
          <br />
          <span className="text-muted-foreground font-medium text-3xl sm:text-4xl md:text-5xl">
            Real-time. Open. Yours.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          LibraryIRC is a community-driven IRC network built for the modern era.
          Choose from four web clients, connect instantly, and join the conversation.
          No sign-ups. No trackers. Just chat.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={scrollToApps}
            size="lg"
            className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-orange transition-all cursor-pointer"
          >
            Connect to Chat
            <ArrowRight className="size-5" />
          </Button>
          <Button
            onClick={() =>
              document
                .querySelector("#features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base border-border hover:bg-muted/50 cursor-pointer"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            {
              icon: Users,
              label: "Users Online",
              value: stats.users,
              suffix: "+",
            },
            {
              icon: Hash,
              label: "Active Channels",
              value: stats.channels,
              suffix: "+",
            },
            {
              icon: Server,
              label: "Servers",
              value: stats.servers,
              suffix: "",
            },
            {
              icon: Activity,
              label: "Uptime",
              value: 99.9,
              suffix: "%",
              isStatic: true,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <stat.icon className="size-5 text-primary" />
              <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                {stat.isStatic ? (
                  `${stat.value}${stat.suffix}`
                ) : (
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}