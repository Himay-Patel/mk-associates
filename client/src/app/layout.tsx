import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Suspense } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M K Associates",
  description: "M K Associates manufactures and supplies cashew and walnut shelling machinery with high efficiency and robust industrial performance.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        <main className="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
