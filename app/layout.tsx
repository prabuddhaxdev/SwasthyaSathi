import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets:['latin']});

export const metadata: Metadata = {
  title: "SwasthyaSathi",
  description: "Digital health companion for rural communities – AI assistant + doctor finder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
