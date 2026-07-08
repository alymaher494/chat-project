"use client";

import { User, Hash, Bot, AtSign, Mail, Globe, HelpCircle, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: User,
    name: "NickServ",
    description:
      "Register and protect your nickname, manage passwords, set up email recovery, and group multiple nicks under one account.",
  },
  {
    icon: Hash,
    name: "ChanServ",
    description:
      "Register channels, manage access lists, set auto-ops, configure topic locks, and control channel modes with ease.",
  },
  {
    icon: Bot,
    name: "BotServ",
    description:
      "Assign network bots to your channel for automated moderation, greetings, fantasy commands, and custom responses.",
  },
  {
    icon: AtSign,
    name: "HostServ",
    description:
      "Request and manage virtual hosts (vhosts) to customize your displayed hostname and mask your real address on the network.",
  },
  {
    icon: Mail,
    name: "MemoServ",
    description:
      "Send and receive offline messages to other registered users. Read, delete, and manage your memos from anywhere.",
  },
  {
    icon: Globe,
    name: "Global",
    description:
      "Network-wide announcement service used by staff to broadcast important messages, maintenance notices, and policy updates.",
  },
  {
    icon: HelpCircle,
    name: "HelpServ",
    description:
      "Automated help system providing quick reference guides, command syntax, and usage tips for all IRC services.",
  },
  {
    icon: ShieldCheck,
    name: "OperServ",
    description:
      "Network operations service for administrators. Manage server connections, AKILL lists, SGLINES, and network-wide settings.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border/40">
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
            Powered by Atheme Services
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to manage identity, channels, bots, and network tools.
            Atheme Services provides a complete suite for IRC account and channel management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="p-4 rounded-lg border border-border/50 bg-card/20 hover:bg-card/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary shrink-0">
                  <service.icon className="size-4" />
                </div>
                <h3 className="font-semibold text-sm">{service.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Help link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Need help with services?{" "}
          <a
            href="irc://irc.libraryirc.net/%23help"
            className="text-primary hover:underline"
          >
            Ask in #help
          </a>
        </motion.p>
      </div>
    </section>
  );
}