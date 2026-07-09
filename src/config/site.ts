export const siteConfig = {
  name: "LibraIRC",
  tagline: "Modern IRC network for community-driven chat",
  description:
    "Connect to LibraIRC, a modern IRC network with multiple web clients, real-time channels, and a welcoming community.",
  url: "https://libraircnet.vercel.app",
  keywords: [
    "LibraIRC",
    "IRC",
    "IRC chat",
    "web IRC client",
    "real-time chat",
    "open source chat",
    "Gamja",
    "KiwiIRC",
    "The Lounge",
    "Obby",
  ],
  navigation: [
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Apps", href: "#apps" },
    { label: "How it Works", href: "#how-it-works" },
  ],
  contact: {
    email: "support@librairc.net",
    ircServer: "irc.librairc.net",
    ircPort: 6697,
  },
  social: {
    github: "https://github.com/alymaher494/chat-project",
    x: "https://x.com",
  },
} as const;
