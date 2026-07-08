"use client";

import { Zap, Shield, Users, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Absolute Privacy & Security",
    description:
      "Your data belongs to you. We respect your anonymity with fully encrypted connection options, secure channel modes, and a strict no-tracking policy.",
  },
  {
    icon: Users,
    title: "Community-Driven Ecosystem",
    description:
      "Whether you are looking to host an official project channel, run a community hub, or just hang out with friends, LibraryIRC provides the perfect space to grow your community.",
  },
  {
    icon: Globe,
    title: "Dynamic Web Clients",
    description:
      "No need to install heavy software. Access our network instantly from any modern web browser using our curated selection of high-performance, responsive web clients.",
  },
  {
    icon: Zap,
    title: "24/7 Stability & Support",
    description:
      "Built on time-tested architecture, our network ensures maximum uptime. Need help? Our dedicated operators and helpdesk are always around to assist you.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
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
            Why <span className="text-primary">LibraryIRC</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            We believe real conversation should feel calm, open, and human. LibraryIRC is a community-first network built for privacy, freedom of speech, and a genuinely enjoyable user experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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