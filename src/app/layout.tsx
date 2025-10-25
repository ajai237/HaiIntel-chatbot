import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HaiIntel Chat Companion | Human-Centered AI Experiences",
  description:
    "Experience HaiIntel's AI chat companion - a demonstration of our commitment to building human-centered AI experiences that merge design, performance, and intelligence.",
  keywords: [
    "AI",
    "chat",
    "assistant",
    "HaiIntel",
    "Vibrant Capital",
    "human-centered AI",
    "artificial intelligence",
  ],
  authors: [{ name: "HaiIntel" }],
  creator: "HaiIntel",
  publisher: "Vibrant Capital",
  robots: "index, follow",
  openGraph: {
    title: "HaiIntel Chat Companion | Human-Centered AI Experiences",
    description:
      "Experience HaiIntel's AI chat companion - a demonstration of our commitment to building human-centered AI experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HaiIntel Chat Companion | Human-Centered AI Experiences",
    description:
      "Experience HaiIntel's AI chat companion - a demonstration of our commitment to building human-centered AI experiences.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
