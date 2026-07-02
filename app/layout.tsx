import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Organization Schema for JSON-LD
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JAYAA IT Solution Pvt. Ltd.",
  "url": "https://www.jayaaitsolution.com",
  "logo": "https://www.jayaaitsolution.com/logo-jayaa.png",
  "description": "Enterprise cybersecurity and IT solutions provider specializing in Zero Trust architecture, digital transformation, and advanced IT consulting for BFSI, Healthcare, and Government sectors.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8268949507",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://in.linkedin.com/company/jayaaitsolution",
    "https://twitter.com/jayaaitsolution",
    "https://www.facebook.com/JayaaITSolution/"
  ],
  "areaServed": ["India", "Global"]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jayaaitsolution.com"),
  title: "VulSphere - Enterprise Vulnerability Management Platform | JAYAA IT Solution",
  description: "Comprehensive vulnerability management platform for modern security teams. Track 50K+ vulnerabilities, achieve 73% faster remediation, and ensure compliance across 15+ frameworks.",
  keywords: [
    "vulnerability management",
    "vulnerability scanner",
    "security compliance",
    "enterprise security",
    "vulnerability assessment",
    "cybersecurity platform",
    "SOC 2 compliance",
    "penetration testing",
    "risk management",
    "VulSphere"
  ],
  authors: [{ name: "JAYAA IT Solution" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.jayaaitsolution.com/products/vulsphere",
  },
  openGraph: {
    title: "VulSphere - Enterprise Vulnerability Management Platform",
    description: "Comprehensive vulnerability management platform for modern security teams.",
    url: "https://www.jayaaitsolution.com/products/vulsphere",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/products/vulsphere/og-image.png",
        width: 1200,
        height: 630,
        alt: "VulSphere Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VulSphere - Enterprise Vulnerability Management Platform",
    description: "Comprehensive vulnerability management platform for modern security teams.",
    images: ["/images/products/vulsphere/og-image.png"],
    site: "@jayaaitsolution",
    creator: "@jayaaitsolution",
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
