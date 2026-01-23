// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devarsh Radadia | AI/ML Engineer",
  description:
    "AI/ML engineer focused on LLM systems, RAG pipelines and backend ML platforms.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://devarsh.tech"),
  openGraph: {
    title: "Devarsh Radadia | AI/ML Engineer",
    description:
      "Production grade AI systems, RAG pipelines and ML engineering for modern teams.",
    url: "https://devarsh.tech",
    siteName: "Devarsh Radadia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devarsh Radadia, AI/ML Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devarsh Radadia | AI/ML Engineer",
    description: "AI systems, RAG pipelines and ML backend engineering.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
