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
  title: "Drive-in - Kursus Mengemudi Terpercaya",
  description:
    "Kursus mengemudi terpercaya dengan instruktur berpengalaman. Raih SIM Anda dengan mudah dan aman bersama Drive-in.",
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "facebook-domain-verification": "1zpv9dhucdmiou4g431y8cso4ronqe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
