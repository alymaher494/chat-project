"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MonitorSmartphone,
  Layers,
  MessageSquare,
  Radio,
  Check,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clients = [
  {
    id: "gamja",
    name: "Gamja Client",
    tagline: "Recommended & Modern",
    description:
      "An ultra-lightweight, high-performance web interface. Optimized for low-bandwidth, lightning-fast loading, and a clean, clutter-free chatting environment. Perfect for quick connections.",
    url: "https://gamja.librairc.net",
    icon: MonitorSmartphone,
    status: "new" as const,
    buttonLabel: "Launch Gamja Chat",
    features: [
      "Fast on low-bandwidth connections",
      "Clean, distraction-free layout",
      "Great for quick conversations",
      "No heavy setup required",
    ],
  },
  {
    id: "obby",
    name: "Obby Client",
    tagline: "Next-Gen Interface",
    description:
      "A gorgeous, modern web client built on cutting-edge web technologies. Features a sleek dashboard layout, smooth responsive animations, and a premium visual aesthetic.",
    url: "https://obby.librairc.net",
    icon: Layers,
    status: "new" as const,
    buttonLabel: "Launch Obby Chat",
    features: [
      "Elegant, polished interface",
      "Smooth and responsive experience",
      "Built for modern browsers",
      "A premium feel without the fuss",
    ],
  },
  {
    id: "lounge",
    name: "The Lounge",
    tagline: "Feature-Rich",
    description:
      "A modern self-hosted chat client that stays connected in the background. It remembers where you left off, supports rich media previews, push notifications, and multiple layouts.",
    url: "https://lounge.librairc.net",
    icon: MessageSquare,
    status: "stable" as const,
    buttonLabel: "Launch The Lounge",
    features: [
      "Stay connected in the background",
      "Rich media previews and history",
      "Helpful notifications",
      "Flexible layouts for every mood",
    ],
  },
  {
    id: "kiwi",
    name: "KiwiIRC",
    tagline: "Classic Chat",
    description:
      "The time-tested, familiar, and highly reliable web chat client. Intuitive for IRC newcomers and packed with all the standard features a veteran chatter expects.",
    url: "https://kiwi.librairc.net",
    icon: Radio,
    status: "legacy" as const,
    buttonLabel: "Launch Classic Kiwi",
    features: [
      "Familiar and dependable",
      "Easy for newcomers",
      "All the essentials in one place",
      "A trusted classic experience",
    ],
  },
  {
    id: "qwebirc",
    name: "Qwebirc Client",
    tagline: "Traditional Web Chat",
    description:
      "A highly compatible, traditional web interface. Best for older browsers and users who prefer a classic, retro IRC web chat feel without additional overhead.",
    url: "https://webchat.librairc.net",
    icon: MonitorSmartphone,
    status: "stable" as const,
    buttonLabel: "Launch Qwebirc",
    features: [
      "Highly compatible with older browsers",
      "Traditional IRC look and feel",
      "Fast and direct connection",
      "Sensible retro styling",
    ],
  },
];

const statusConfig = {
  new: { label: "NEW", className: "bg-primary/15 text-primary border-primary/20" },
  stable: { label: "STABLE", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
  legacy: { label: "LEGACY", className: "bg-muted text-muted-foreground border-border" },
};

export function AppsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? clients.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === clients.length - 1 ? 0 : i + 1));

  const client = clients[activeIndex];
  const status = statusConfig[client.status];

  // Helper to render client mockup UIs
  const renderClientMockup = (clientId: string) => {
    switch (clientId) {
      case "gamja":
        return (
          <div className="flex flex-col h-full bg-[#080b0f] font-mono text-[10px] sm:text-xs text-slate-300 p-4">
            {/* Gamja Ultra-Minimalist UI */}
            <div className="flex-1 space-y-2 overflow-y-auto">
              <div><span className="text-primary font-bold">#lobby:</span> Gamja minimalist web client.</div>
              <div><span className="text-primary">&lt;Alice&gt;</span> Anyone online?</div>
              <div><span className="text-primary">&lt;Bob&gt;</span> Yes, this Gamja client is incredibly fast.</div>
              <div><span className="text-emerald-400">* Guest331 joined #lobby</span></div>
              <div><span className="text-primary">&lt;Guest331&gt;</span> Wow, it loaded in like 50ms.</div>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-900 flex gap-2">
              <span className="text-slate-600 font-bold">&gt;</span>
              <span className="text-slate-500">Type message here...</span>
            </div>
          </div>
        );
      case "obby":
        return (
          <div className="grid grid-cols-12 h-full bg-[#0d1219] font-sans text-[10px] sm:text-xs">
            {/* Obby Sleek Dashboard UI */}
            <div className="col-span-3 bg-[#090d12] border-r border-slate-800 p-2 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Rooms</div>
                <div className="bg-primary/15 text-primary rounded px-1.5 py-0.5 font-semibold">#lobby</div>
                <div className="text-slate-400 px-1.5 py-0.5">#tech</div>
              </div>
              <div className="text-[9px] text-slate-500 font-mono">Obby NextGen</div>
            </div>
            <div className="col-span-9 flex flex-col justify-between p-3 bg-[#0d1219]">
              <div className="space-y-2.5">
                <div className="font-semibold text-slate-200 border-b border-slate-800/60 pb-1.5 flex justify-between items-center">
                  <span>#lobby</span>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1 rounded">289 online</span>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="font-bold text-primary">Alice</span>
                    <span className="text-slate-300">Loving the glassmorphism dashboard of Obby!</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-400">Bob</span>
                    <span className="text-slate-300">Super clean animations on client swap.</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#070a0e] border border-slate-800 rounded px-2 py-1 text-slate-500">
                Message #lobby...
              </div>
            </div>
          </div>
        );
      case "lounge":
        return (
          <div className="grid grid-cols-12 h-full bg-[#0d1117] font-sans text-[10px] sm:text-xs">
            {/* The Lounge Rich Media UI */}
            <div className="col-span-3 bg-[#090c10] border-r border-slate-800 p-2">
              <div className="space-y-1">
                <div className="text-primary font-bold text-[11px] px-1.5 py-0.5">LibraIRC</div>
                <div className="bg-slate-800 text-slate-200 rounded px-1.5 py-0.5">#lobby</div>
                <div className="text-slate-400 px-1.5 py-0.5">#helpdesk</div>
              </div>
            </div>
            <div className="col-span-9 flex flex-col justify-between p-3 bg-[#0f141c]">
              <div className="space-y-2">
                <div className="font-bold text-slate-200 border-b border-slate-800 pb-1 flex items-center justify-between">
                  <span>#lobby</span>
                  <span className="text-[9px] text-slate-400">The Lounge Client</span>
                </div>
                <div className="space-y-2 overflow-y-auto max-h-[140px]">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2"><span className="font-bold text-primary">Alice</span><span className="text-slate-300">Check out this link:</span></div>
                    <div className="ml-7 p-2 rounded bg-card/60 border border-border/60 max-w-[200px]">
                      <div className="font-bold text-[9px] text-primary">LibraIRC Network</div>
                      <div className="text-[8px] text-muted-foreground truncate">https://librairc.net</div>
                    </div>
                  </div>
                  <div className="flex gap-2"><span className="font-bold text-sky-400">Bob</span><span className="text-slate-300">Rich preview cards look amazing here!</span></div>
                </div>
              </div>
              <div className="bg-[#0b0e14] border border-slate-800 rounded px-2 py-1 text-slate-500">
                Write a message...
              </div>
            </div>
          </div>
        );
      case "kiwi":
        return (
          <div className="grid grid-cols-12 h-full bg-[#0f131a] font-sans text-[10px] sm:text-xs">
            {/* KiwiIRC Classic UI */}
            <div className="col-span-12 flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 bg-[#0a0d14] px-3 py-1.5 border-b border-slate-800">
                <span className="bg-primary/20 text-primary font-bold px-1.5 py-0.5 rounded text-[9px]">Tab 1</span>
                <span className="text-slate-300 font-bold">#lobby</span>
                <span className="text-slate-500 font-bold">#cybercafe</span>
              </div>
              <div className="grid grid-cols-12 flex-1 p-2 bg-[#0f131a]">
                <div className="col-span-9 space-y-1.5">
                  <div className="text-slate-400 font-mono text-[9px]">* Connected to irc.librairc.net</div>
                  <div className="flex gap-1.5"><span className="text-primary font-semibold">Alice:</span><span className="text-slate-300">Classic layout is so cozy.</span></div>
                  <div className="flex gap-1.5"><span className="text-sky-400 font-semibold">Bob:</span><span className="text-slate-300">Yes, it has the standard users panel on the right.</span></div>
                </div>
                <div className="col-span-3 border-l border-slate-800/80 pl-2 space-y-1">
                  <div className="text-[9px] font-bold text-slate-500 uppercase">Users (2)</div>
                  <div className="text-primary font-semibold">@Alice</div>
                  <div className="text-sky-400 font-semibold">@Bob</div>
                </div>
              </div>
              <div className="bg-[#090b10] border-t border-slate-800/60 p-1.5 flex gap-2">
                <input type="text" placeholder="Start typing..." className="bg-transparent text-slate-200 outline-none flex-1 text-[10px]" disabled />
                <button className="bg-primary text-primary-foreground font-bold px-2 py-0.5 rounded text-[9px]">Send</button>
              </div>
            </div>
          </div>
        );
      case "qwebirc":
        return (
          <div className="flex flex-col h-full bg-[#0a0d14] font-mono text-[9px] sm:text-xs text-emerald-400 p-4">
            {/* Qwebirc Classic Retro Monospace UI */}
            <div className="flex-1 space-y-1.5 overflow-y-auto">
              <div>*** Connecting to irc.librairc.net [port 6697]...</div>
              <div>*** Connected securely using TLSv1.3</div>
              <div>*** Welcome to LibraIRC! Type /join #lounge to start chatting.</div>
              <div><span className="text-slate-300 font-bold">&lt;Alice&gt;</span> Anyone using the webchat client?</div>
              <div><span className="text-slate-300 font-bold">&lt;Bob&gt;</span> Yes, this is qwebirc running on webchat.librairc.net!</div>
              <div className="text-slate-400">*** Guest928 [Guest928@librairc-client.net] has joined #lounge</div>
            </div>
            <div className="mt-2 pt-2 border-t border-emerald-950 flex gap-2 text-slate-300">
              <span className="font-bold text-emerald-400">[Guest928]</span>
              <span className="text-slate-500">Type message here...</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="apps" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center max-w-xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            Choose Your <span className="text-primary">Chat Portal</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            Pick the web client that fits your style and dive directly into the conversation.
          </p>
        </motion.div>

        {/* Carousel / Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4 justify-between sm:justify-start">
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-md border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition-colors disabled:opacity-30"
                aria-label="Previous client"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-md border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card transition-colors disabled:opacity-30"
                aria-label="Next client"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {clients.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === activeIndex
                      ? "bg-primary w-5"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Active Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-border/60 bg-card/40 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left: Quick List Selector */}
                  <div className="lg:col-span-3 lg:border-r lg:border-border/40 lg:pr-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        All Clients
                      </p>
                      <div className="space-y-1">
                        {clients.map((c, i) => (
                          <button
                            key={c.name}
                            onClick={() => {
                              setActiveIndex(i);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm text-left ${
                              i === activeIndex
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                          >
                            <c.icon className="size-4 shrink-0" />
                            <span className="font-medium">{c.name}</span>
                            <Badge
                              variant="outline"
                              className={`ml-auto text-[10px] px-1.5 py-0 ${statusConfig[c.status].className}`}
                            >
                              {statusConfig[c.status].label}
                            </Badge>
                          </button>
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed lg:mt-0 pt-4 border-t lg:border-none border-border/40">
                      All clients connect to the same open, welcoming network—just choose the interface that feels right for you.
                    </p>
                  </div>

                  {/* Center: Info */}
                  <div className="lg:col-span-4 lg:border-r lg:border-border/40 lg:pr-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                          <client.icon className="size-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">{client.name}</h3>
                            <Badge variant="outline" className={status.className}>
                              {status.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-primary font-medium">{client.tagline}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {client.description}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {client.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm">
                            <Check className="size-4 text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6">
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                      >
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {client.buttonLabel}
                          <ExternalLink className="size-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right: Dynamic Browser Mockup preview */}
                  <div className="lg:col-span-5 flex flex-col justify-center min-h-[260px] lg:min-h-0">
                    <div className="rounded-lg border border-border/80 bg-[#070a0e] overflow-hidden flex flex-col h-full min-h-[240px] shadow-lg shadow-black/35">
                      {/* Mockup Header */}
                      <div className="flex items-center justify-between px-3 py-1.5 bg-muted/40 border-b border-border/40">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/80" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                          <div className="w-2 h-2 rounded-full bg-green-500/80" />
                        </div>
                        <div className="bg-background/80 border border-border/40 rounded px-2 py-0.5 text-[9px] text-muted-foreground text-center font-mono w-40 truncate">
                          {client.url}
                        </div>
                        <div className="w-8" />
                      </div>
                      {/* Mockup Content */}
                      <div className="flex-1 relative overflow-hidden">
                        {renderClientMockup(client.id)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}