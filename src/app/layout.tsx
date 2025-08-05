import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperHattricks - Professional Software Development Agency",
  description: "SuperHattricks is a leading software development agency specializing in custom web applications, mobile apps, and digital solutions. We transform ideas into powerful, scalable software solutions.",
  keywords: "software development, web development, mobile apps, custom software, digital solutions, technology agency",
  authors: [{ name: "SuperHattricks" }],
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
