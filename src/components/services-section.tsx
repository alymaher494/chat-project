"use client";

import { MessageSquare, Coffee, HelpCircle, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const chatRooms = [
  {
    icon: MessageSquare,
    name: "#TheLobby",
    description:
      "The main meeting point. Perfect for general chit-chat, making new friends, and casual daily conversations.",
  },
  {
    icon: Coffee,
    name: "#CyberCafe",
    description:
      "Where developers, tech enthusiasts, and Linux geeks gather to discuss coding, networks, and the future of technology.",
  },
  {
    icon: HelpCircle,
    name: "#Helpdesk",
    description:
      "Need assistance with the network, setting up your own client, or registering a channel? Our operators are here 24/7.",
  },
  {
    icon: Users,
    name: "#ChitChat",
    description:
      "A relaxed environment for sharing music, movies, quotes, and hanging out with a global community.",
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
            Popular Chat Rooms
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Jump into some of our most active community rooms. No matter what your interests are, there's a space for you.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {chatRooms.map((room) => (
            <motion.div
              key={room.name}
              variants={itemVariants}
              className="p-5 rounded-lg border border-border/50 bg-card/20 hover:bg-card/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary shrink-0">
                  <room.icon className="size-4.5" />
                </div>
                <h3 className="font-semibold text-sm text-primary">{room.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {room.description}
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
          Looking for a specific topic? Connect to find more rooms or ask in{" "}
          <a
            href="irc://irc.libraryirc.net/%23helpdesk"
            className="text-primary hover:underline font-semibold"
          >
            #Helpdesk
          </a>
        </motion.p>
      </div>
    </section>
  );
}