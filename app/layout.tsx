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
  "name": "VulSphere",
  "url": "https://vulsphere.com",
  "logo": "https://vulsphere.com/logo.png",
  "description": "End-to-end vulnerability management platform running the entire security-testing lifecycle: Request, Test, Review, Fix, Verify, Report.",
  "areaServed": ["India", "Global"]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vulsphere.com"),
  title: "VulSphere - Enterprise Vulnerability Management Platform",
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
  authors: [{ name: "VulSphere" }],
  icons: {
    icon: [
      { url: "/logo-circle.png", type: "image/png" },
    ],
    shortcut: "/logo-circle.png",
    apple: "/logo-circle.png",
  },
  alternates: {
    canonical: "https://vulsphere.com",
  },
  openGraph: {
    title: "VulSphere - Enterprise Vulnerability Management Platform",
    description: "Comprehensive vulnerability management platform for modern security teams.",
    url: "https://vulsphere.com",
    siteName: "VulSphere",
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
