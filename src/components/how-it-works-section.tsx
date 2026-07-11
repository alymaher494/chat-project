"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Pick a Client",
    description:
      "Choose any of the web chat clients above. They all connect to the same LibraIRC network.",
  },
  {
    number: "2",
    title: "Enter a Nickname",
    description:
      "Type in the nickname you'd like to use. If you have a registered account, you can log in with your password.",
  },
  {
    number: "3",
    title: "Join a Channel",
    description:
      "You'll be dropped into #lounge by default. From there you can join any channel or explore the full list.",
  },
  {
    number: "4",
    title: "Start Chatting",
    description:
      "That's it! You're connected. Say hello, ask for help, or just hang out with the community.",
  },
];

const nativeClients = [
  { name: "KVIrc", href: "ircs://irc.librairc.net:6697/#lounge", external: false },
  { name: "AdiIRC", href: "ircs://irc.librairc.net:6697/#lounge", external: false },
  { name: "Quassel", href: "ircs://irc.librairc.net:6697/#lounge", external: false },
  { name: "Halloy", href: "ircs://irc.librairc.net:6697/#lounge", external: false },
  { name: "IRCCloud", href: "ircs://irc.librairc.net:6697/#lounge", external: false },
  { name: "HexDroid", href: "ircs://irc.librairc.net:6697/#lounge", external: false },
  { name: "mIRC", href: "https://www.mirc.com/index.html", external: true },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border/40">
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
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Getting started takes seconds — no registration required.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                  {step.number}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {/* Connector line (not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(2.5rem+16px)] w-[calc(100%-2.5rem-16px)] h-px bg-border/60 -z-0" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop client note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-10 border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            <span className="font-bold text-foreground">Prefer a native client?</span> Connect securely using:
            <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
              {nativeClients.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="px-2.5 py-1 rounded bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-xs font-semibold text-foreground border border-border inline-flex items-center gap-1"
                >
                  {c.name}
                  {c.external && <ExternalLink className="size-2.5" />}
                </a>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="https://librairc.net/helpdesk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1 bg-primary/10 border border-primary/20 px-3.5 py-2 rounded-lg"
            >
              Old Helpdesk Resource &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}