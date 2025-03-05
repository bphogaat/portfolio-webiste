import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhavna Phogaat | Portfolio",
  description:
    "Bhavna Phogaat is a Ph.D. candidate in Marketing at the Darla Moore School of Business, University of South Carolina. Explore research, teaching, and publications.",
  alternates: {
    canonical: "https://bhavnaphogaat.vercel.app",
  },
  verification: {
    google: "eNMR8_C6V9coaT8Iw8eJGG5Z8ikWSQxSQeijIsS4nI4",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
