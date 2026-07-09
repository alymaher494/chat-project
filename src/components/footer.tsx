"use client";

import { Hash, Github, Mail, ExternalLink } from "lucide-react";

const footerNav = {
  Network: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Web Clients", href: "#apps" },
  ],
  Clients: [
    { label: "Gamja", href: "https://gamja.librairc.net", external: true },
    { label: "Obby", href: "https://obby.librairc.net", external: true },
    { label: "The Lounge", href: "https://lounge.librairc.net", external: true },
    { label: "KiwiIRC", href: "https://kiwi.librairc.net", external: true },
  ],
  Resources: [
    { label: "IRC Commands", href: "#how-it-works" },
    { label: "Help / Support", href: "irc://irc.librairc.net/%23help" },
    { label: "GitHub", href: "https://github.com", external: true },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/40 bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="size-5 text-primary" strokeWidth={2.5} />
              <span className="font-bold tracking-tight">
                Library<span className="text-primary">IRC</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-4">
              A modern, community-driven IRC network. Open source, privacy focused,
              and built to last. Connect instantly and chat freely.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
              <a
                href="mailto:admin@librairc.net"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && <ExternalLink className="size-2.5" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Connect Info Bar */}
        <div className="border-t border-border/30 pt-6 mb-6">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Connect
          </h4>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card/20 text-sm">
              <code className="font-mono text-xs">irc.librairc.net</code>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card/20 text-sm">
              <code className="font-mono text-xs">+6697</code>
              <span className="text-xs text-muted-foreground">TLS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card/20 text-sm">
              <code className="font-mono text-xs">6667</code>
              <span className="text-xs text-muted-foreground">Plain</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} LibraIRC Network. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by{" "}
            <span className="text-foreground font-medium">InspIRCd</span> &{" "}
            <span className="text-foreground font-medium">Atheme</span>
          </p>
        </div>
      </div>
    </footer>
  );
}