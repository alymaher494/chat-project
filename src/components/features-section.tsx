"use client";

import { Shield, Globe, Layers, Hash, Coffee, LifeBuoy, MessageSquare } from "lucide-react";
import { motion, Variants } from "framer-motion";

const featuredRooms = [
  {
    icon: Hash,
    title: "#TheLobby",
    description: "The main meeting point. Perfect for general chit-chat, making new friends, and casual daily conversations.",
  },
  {
    icon: Coffee,
    title: "#CyberCafe",
    description: "Where developers, tech enthusiasts, and Linux geeks gather to discuss coding, networks, and the future of technology.",
  },
  {
    icon: LifeBuoy,
    title: "#Helpdesk",
    description: "Need assistance with the network, setting up your own client, or registering a channel? Our operators are here 24/7.",
  },
  {
    icon: MessageSquare,
    title: "#ChitChat",
    description: "A relaxed environment for sharing music, movies, quotes, and hanging out with a global community.",
  },
];

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
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Featured Chat Rooms */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Featured Chat Rooms
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
              Jump right into the conversation. Here are some of the most active channels on the LibraIRC network.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredRooms.map((room) => (
              <motion.div
                key={room.title}
                variants={itemVariants}
                className="group p-6 rounded-xl border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary shrink-0">
                    <room.icon className="size-6" />
                  </div>
                  <h3 className="font-bold text-xl">{room.title}</h3>
                </div>
                <p className="text-base font-medium text-muted-foreground leading-relaxed">
                  {room.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Features */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Why Choose LibraIRC?
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
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