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
    title: "Maximum Uptime & Reliability",
    description:
      "Our chat rooms never sleep. Whether you access them through a simple web browser or a persistent terminal app, the conversation is always active.",
  },
  {
    icon: Layers,
    title: "Complete Freedom of Choice",
    description:
      "We offer multiple beautifully tailored web clients (Gamja, Obby, The Lounge, KiwiIRC) so you can experience the chat rooms exactly the way you want.",
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
        {/* Core Features */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Why Choose <span className="text-primary">LibraIRC</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              LibraIRC brings back the simplicity of the early internet chat rooms with modern speeds, interfaces, and absolute security.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-8 rounded-xl border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary shrink-0">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="font-bold text-2xl">{feature.title}</h3>
                </div>
                <p className="text-base font-medium text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}