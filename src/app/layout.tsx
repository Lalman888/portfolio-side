import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lalman Thakur - Full-Stack Developer",
description:
  "Lalman Thakur is a full-stack developer with 2 years of experience. He is passionate about solving real-world problems through web applications. Currently in the final year of his bachelor's program, Lalman is dedicated to mastering his craft while working on both frontend and backend development, utilizing cloud platforms and Docker for deployment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden"
        )}
      >
        <Sidebar />
        <div className="flex-1 bg-white min-h-screen overflow-y-auto">
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
