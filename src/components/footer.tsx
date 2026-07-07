"use client";

import { Hash, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/40 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-primary/15 text-primary">
                <Hash className="size-3.5" strokeWidth={2.5} />
              </div>
              <span className="font-semibold tracking-tight">
                Library<span className="text-primary">IRC</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A modern, community-driven IRC network. Open source, privacy
              focused, and built to last.
            </p>
          </div>

          {/* Network */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Network</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Clients */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Clients</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://gamja.libraryirc.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gamja
                </a>
              </li>
              <li>
                <a
                  href="https://obby.libraryirc.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Obby
                </a>
              </li>
              <li>
                <a
                  href="https://lounge.libraryirc.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  The Lounge
                </a>
              </li>
              <li>
                <a
                  href="https://kiwi.libraryirc.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  KiwiIRC
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <code className="px-1.5 py-0.5 rounded bg-muted/60 text-xs font-mono">
                  irc.libraryirc.net
                </code>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <code className="px-1.5 py-0.5 rounded bg-muted/60 text-xs font-mono">
                  +6697 (TLS)
                </code>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <code className="px-1.5 py-0.5 rounded bg-muted/60 text-xs font-mono">
                  6667 (Plain)
                </code>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} LibraryIRC Network. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="mailto:admin@libraryirc.net"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}