import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LibraryIRC — Modern IRC Network",
  description:
    "Connect to LibraryIRC, a modern and open IRC network. Access multiple web chat clients, real-time messaging, and a vibrant community.",
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
  authors: [{ name: "LibraryIRC" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "LibraryIRC — Modern IRC Network",
    description:
      "Connect to LibraryIRC, a modern and open IRC network with multiple web chat clients.",
    siteName: "LibraryIRC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LibraryIRC — Modern IRC Network",
    description:
      "Connect to LibraryIRC, a modern and open IRC network with multiple web chat clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}