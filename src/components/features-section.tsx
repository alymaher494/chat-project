"use client";

import {
  Zap,
  Shield,
  Users,
  Lock,
  Globe,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Low-latency connections optimized for speed. Real-time messaging powered by IRC protocol with zero bloat.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "TLS encryption on all connections, SASL authentication, and privacy-first policies to keep your conversations safe.",
  },
  {
    icon: Lock,
    title: "Privacy by Principle",
    description:
      "We do not log private messages. Clear, transparent privacy standards protect every personal conversation on our network.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built by and for the community with open-source tools, active support channels, and transparent network operations.",
  },
  {
    icon: Globe,
    title: "IRCv3 Support",
    description:
      "Modern protocol extensions including SASL, message tags, server-time, account-tracking, and batch capabilities.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description:
      "Built on InspIRCd core and Atheme Services. Fully open-source stack with no vendor lock-in or hidden dependencies.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Why LibraryIRC
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need for a great IRC experience. LibraryIRC is an independent
            network built for those who value privacy, speed, and open communication.
            No corporate oversight. No data harvesting. No algorithmic manipulation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-5 rounded-lg border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
                  <feature.icon className="size-4.5" />
                </div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
              </div>
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