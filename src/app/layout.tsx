import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
// import { GoogleAnalytics } from '@next/third-parties/google';
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Atharav Narang",
  description: "Designer & developer portfolio showcasing work, projects, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pressStart.variable} antialiased relative`}>
        <div className="bg-pulse-container" />
        <ClientLayout>
          {children}
        </ClientLayout>
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  );
}
