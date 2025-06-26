// app/layout.tsx
import "./globals.css"; // ✅ Corrected path
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devarsh Radadia | Portfolio",
  description:
    "Hi, I'm Devarsh Radadia — a passionate full-stack developer building modern web experiences.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Devarsh Radadia | Portfolio",
    description:
      "A frontend-focused developer passionate about building elegant web apps.",
    url: "https://yourdomain.com",
    siteName: "Devarsh Radadia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devarsh Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devarsh Radadia | Portfolio",
    description: "Explore projects and skills of Devarsh Radadia.",
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
