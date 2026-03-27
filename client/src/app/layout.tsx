import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyDetails } from "@/data/company-details";
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
  title: companyDetails.name,
  description: companyDetails.description,
  icons: {
    icon: [{ url: companyDetails.logo, type: "image/png" }],
    shortcut: [{ url: companyDetails.logo, type: "image/png" }],
    apple: [{ url: companyDetails.logo, type: "image/png" }],
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
        <SiteHeader />
        <main className="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
