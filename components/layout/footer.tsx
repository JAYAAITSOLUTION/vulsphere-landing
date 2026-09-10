import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const VULSPHERE_URL = "https://vulsphere.com";

const footerLinks = {
  product: [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#integrations", label: "Integrations" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  getStarted: [
    { href: VULSPHERE_URL, label: "Request Demo" },
    { href: VULSPHERE_URL, label: "Start Free Trial" },
    { href: VULSPHERE_URL, label: "Sign In" },
  ],
};

const bottomBadges = [
  "SOC 2 Type II",
  "ISO 27001",
  "PCI DSS",
  "HIPAA",
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-circle.png"
                  alt="VulSphere"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">VulSphere</span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              End-to-end vulnerability management, from discovery to verified fix. Every step tracked, every decision recorded, every fix verified.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Get Started
            </h3>
            <ul className="space-y-3">
              {footerLinks.getStarted.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} VulSphere. All rights reserved.
          </p>

          {/* Compliance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {bottomBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full border border-white/10"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
