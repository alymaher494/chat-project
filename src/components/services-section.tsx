"use client";

import { MessageSquare, Coffee, HelpCircle, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const chatRooms = [
  {
    icon: MessageSquare,
    name: "#TheLobby",
    activeUsers: 412,
    topic: "General Chat",
    description:
      "The main meeting point. Perfect for general chit-chat, making new friends, and casual daily conversations.",
  },
  {
    icon: Coffee,
    name: "#CyberCafe",
    activeUsers: 289,
    topic: "Tech & Coding",
    description:
      "Where developers, tech enthusiasts, and Linux geeks gather to discuss coding, networks, and the future of technology.",
  },
  {
    icon: HelpCircle,
    name: "#Helpdesk",
    activeUsers: 104,
    topic: "Support 24/7",
    description:
      "Need assistance with the network, setting up your own client, or registering a channel? Our operators are here to help.",
  },
  {
    icon: Users,
    name: "#ChitChat",
    activeUsers: 435,
    topic: "Entertainment",
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
        <div className="flex flex-col items-center text-center mb-10">
          {/* Live Network Status Widget */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live Network Status: 1,240 Chatters | 412 Channels</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          >
            Popular <span className="text-primary">Chat Rooms</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-muted-foreground max-w-2xl leading-relaxed"
          >
            Jump into some of our most active community rooms. No registration required, just enter your nickname and join the conversation.
          </motion.p>
        </div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {chatRooms.map((room) => (
            <motion.div
              key={room.name}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border/50 bg-card/20 hover:bg-card/40 hover:border-primary/30 transition-all duration-350"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <room.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">{room.name}</h3>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{room.topic}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {room.description}
              </p>
              <div className="flex items-center justify-between border-t border-border/30 pt-3 mt-auto">
                <span className="text-xs text-muted-foreground font-semibold">Active Now</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {room.activeUsers} online
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Help link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Looking for a specific topic? Connect to find more rooms or ask in{" "}
          <a
            href="irc://irc.librairc.net/%23helpdesk"
            className="text-primary hover:underline font-semibold"
          >
            #Helpdesk
          </a>
        </motion.p>
      </div>
    </section>
  );
}