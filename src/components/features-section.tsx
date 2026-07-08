"use client";

import { Shield, Globe, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Anonymous & Secure",
    description:
      "No email, phone number, or real-name registration required. Enter a nickname and you're instantly in. Your privacy is protected by default.",
  },
  {
    icon: Globe,
    title: "Persistent & Always Online",
    description:
      "Our chat rooms never sleep. Whether you access them through a simple web browser or a persistent terminal app, the conversation is always active.",
  },
  {
    icon: Layers,
    title: "Complete Freedom of Choice",
    description:
      "We offer multiple beautifully tailored web apps (Gamja, Obby, The Lounge, Kiwi) so you can experience the chat rooms exactly the way you want.",
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
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            LibraryIRC brings back the simplicity of the early internet chat rooms with modern speeds, interfaces, and absolute security.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="font-bold text-base">{feature.title}</h3>
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