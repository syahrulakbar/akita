import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/section/navbar";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/section/footer";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Akita Japan Fest",
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
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} style={{ scrollBehavior: "smooth" }}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Analytics />
            <link rel="icon" href="/icon.ico" sizes="16x16" />
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}