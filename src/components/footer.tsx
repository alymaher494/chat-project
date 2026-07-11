"use client";

import { Hash, ExternalLink } from "lucide-react";

const footerNav = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Web Clients", href: "#apps" },
  ],
  Network: [
    { label: "FAQ", href: "https://librairc.net/faq", external: true },
    { label: "Quotes", href: "https://librairc.net/quotes", external: true },
    { label: "Forums", href: "https://librairc.net/forums", external: true },
    { label: "Guestbook", href: "https://librairc.net/guestbook", external: true },
    { label: "Gallery", href: "https://librairc.net/gallery", external: true },
  ],
  Clients: [
    { label: "Gamja", href: "https://gamja.librairc.net", external: true },
    { label: "Obby", href: "https://obby.librairc.net", external: true },
    { label: "The Lounge", href: "https://lounge.librairc.net", external: true },
    { label: "KiwiIRC", href: "https://kiwi.librairc.net", external: true },
  ],
  Resources: [
    { label: "IRC Commands", href: "#how-it-works" },
    { label: "Help / Support", href: "ircs://irc.librairc.net:6697/%23help" },
    { label: "GitHub", href: "https://github.com", external: true },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/40 bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-10">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="size-5 text-primary" strokeWidth={2.5} />
              <span className="font-bold tracking-tight">
                Libra<span className="text-primary">IRC</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/40 pl-3">
              "Welcome to LibraIRC.net! Do not enter here if you are sane, the management can not be held responsible should you have entered the realms of insanity when you quit the server. :)"
            </p>
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
            Connect Info
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
            <a 
              href="https://www.inspircd.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              InspIRCd
            </a>{" "}
            &amp;{" "}
            <a 
              href="https://atheme.github.io/atheme.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              Atheme
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}