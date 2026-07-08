export const siteConfig = {
  name: "LibraryIRC",
  tagline: "Modern IRC network for community-driven chat",
  description:
    "Connect to LibraryIRC, a modern IRC network with multiple web clients, real-time channels, and a welcoming community.",
  url: "https://libraryirc.example.com",
  keywords: [
    "LibraryIRC",
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
    email: "hello@libraryirc.example.com",
    ircServer: "irc.libraryirc.example.com",
    ircPort: 6697,
  },
  social: {
    github: "https://github.com",
    x: "https://x.com",
  },
} as const;
