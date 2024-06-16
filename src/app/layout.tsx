import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/section/navbar";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/section/footer";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Senshi Matsuri",
  description: "Let's make the best japanese festival in the world!",
  keywords:
    "event, agency, festival, japan, japanese, culture, food, music, dance, art, performance, entertainment, fun, family, friends, community, celebration, tradition, history",
  openGraph: {
    title: "Akita Japan Fest",
    description: "Let's make the best japanese festival in the world!",
    siteName: "Akita Japan Fest",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <link rel="icon" href="/icon.ico" sizes="16x16" />
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
