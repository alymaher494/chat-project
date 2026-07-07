"use client";

import {
  Shield,
  Zap,
  Globe,
  Eye,
  Lock,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "No data harvesting, no ad tracking, no analytics. Your conversations stay yours.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Real-time messaging powered by IRC protocol. Low latency, zero bloat, instant delivery.",
  },
  {
    icon: Globe,
    title: "Multiple Clients",
    description:
      "Four web chat clients to choose from. Pick the interface that fits your style.",
  },
  {
    icon: Eye,
    title: "Open Source",
    description:
      "Built on open-source technology. InspIRCd core, Atheme services, and transparent operations.",
  },
  {
    icon: Lock,
    title: "Nick Registration",
    description:
      "Register your identity with Atheme Services. Secure your nickname and channels.",
  },
  {
    icon: Code2,
    title: "Bot Friendly",
    description:
      "Full support for IRC bots, scripts, and integrations. Extend your experience.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-4 sm:px-6">
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
              Why LibraryIRC
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
              Built for the Modern User
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We combined decades of IRC reliability with modern web technology.
              The result is a chat experience that respects your time and privacy.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border/60 bg-card/40 hover:bg-card/70 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}