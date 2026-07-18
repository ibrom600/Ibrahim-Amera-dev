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

export const metadata = {
  title: "Ibrahim Amera | Front-End Developer Portfolio",
  description:
    "Professional portfolio of a Front-End Developer passionate about creating exceptional web experiences with React, Next.js and modern technologies.",
  keywords: [
    "front-end developer",
    "react developer",
    "next.js",
    "portfolio",
    "web developer",
    "UI/UX",
  ],
  authors: [{ name: "Ibrahim Amera" }],
  openGraph: {
    title: "Ibrahim Amera | Front-End Developer Portfolio",
    description:
      "Professional portfolio of a Front-End Developer creating exceptional web experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}