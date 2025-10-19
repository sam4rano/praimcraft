import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/seo/structured-data";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Praimcraft - Digital Agency",
  description: "Multi-service digital agency specializing in software development, social media management, analytics, automation, and AI integration.",
  keywords: ["digital agency", "software development", "social media management", "analytics", "automation", "AI integration"],
  authors: [{ name: "Praimcraft Team" }],
  creator: "Praimcraft",
  publisher: "Praimcraft",
  metadataBase: new URL("https://praimcraft.com"),
  alternates: {
    canonical: "https://praimcraft.com",
  },
  openGraph: {
    title: "Praimcraft - Digital Agency",
    description: "Multi-service digital agency specializing in software development, social media management, analytics, automation, and AI integration.",
    type: "website",
    url: "https://praimcraft.com",
    siteName: "Praimcraft",
    images: [
      {
        url: "https://praimcraft.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Praimcraft - Digital Agency",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praimcraft - Digital Agency",
    description: "Multi-service digital agency specializing in software development, social media management, analytics, automation, and AI integration.",
    images: ["https://praimcraft.com/images/og-default.jpg"],
    creator: "@praimcraft",
    site: "@praimcraft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
