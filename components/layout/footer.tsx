import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { href: "https://www.jayaaitsolution.com/services/zero-trust", label: "Zero Trust Security" },
    { href: "https://www.jayaaitsolution.com/services/digital-transformation", label: "Digital Transformation" },
    { href: "https://www.jayaaitsolution.com/services/advanced-it", label: "Advanced IT Solutions" },
    { href: "https://www.jayaaitsolution.com/services/professional", label: "Professional Services" },
  ],
  solutions: [
    { href: "https://www.jayaaitsolution.com/solutions", label: "Cloud Security" },
    { href: "https://www.jayaaitsolution.com/solutions", label: "Threat Detection" },
    { href: "https://www.jayaaitsolution.com/solutions", label: "Compliance" },
    { href: "https://www.jayaaitsolution.com/solutions", label: "SOC Services" },
  ],
  company: [
    { href: "https://www.jayaaitsolution.com/about", label: "About Us" },
    { href: "https://www.jayaaitsolution.com/team", label: "Our Team" },
    { href: "https://www.jayaaitsolution.com/blogs", label: "Blog" },
    { href: "https://www.jayaaitsolution.com/clients-partners", label: "Clients & Partners" },
  ],
  legal: [
    { href: "https://www.jayaaitsolution.com/privacy-policy", label: "Privacy Policy" },
    { href: "https://www.jayaaitsolution.com/terms-of-service", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://in.linkedin.com/company/jayaaitsolution", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/jayaaitsolution", icon: Twitter, label: "Twitter" },
  { href: "https://www.instagram.com/jayaaitsolution/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/JayaaITSolution/", icon: Facebook, label: "Facebook" },
];

const coreServices = [
  { title: "Zero Trust Security", desc: "Never Trust, Always Verify — Secure Every Access Point" },
  { title: "Digital Transformation", desc: "Intelligent Automation & Digital-First Strategies" },
  { title: "Advanced IT Solutions", desc: "Future-Ready Tech Solutions Built Around You" },
  { title: "Professional Services", desc: "IT Expertise, Delivered On-Demand" },
];

const keyFeatures = [
  "Identity & Access Management (IAM)",
  "Legacy-to-Cloud Modernization",
  "Secure Network Architecture Design",
  "Strategic IT Consulting",
  "Continuous Risk-Based Authentication",
  "API & System Integration",
];

const bottomBadges = [
  "Cybersecurity Experts",
  "24/7 SOC Monitoring",
  "Made in India",
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="https://www.jayaaitsolution.com/" className="flex items-center gap-2">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo-jayaa.png"
                  alt="JAYAA IT Solution"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Leading cybersecurity provider delivering comprehensive protection through advanced threat detection and security awareness.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@jayaaitsolution.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                info@jayaaitsolution.com
              </a>
              <a
                href="tel:+918268949507"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                +91 8268949507
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5" />
                <span>803/8, Ekatva Onyx, Wagle Estate Thane West-400604, India</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
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

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
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
        </div>

        {/* Core Services Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreServices.map((service) => (
              <div key={service.title} className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-1">{service.title}</h4>
                <p className="text-xs text-white/50">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Key Features
          </h3>
          <div className="flex flex-wrap gap-2">
            {keyFeatures.map((feature) => (
              <span key={feature} className="px-3 py-1 text-xs text-white/60 bg-white/5 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} JAYAA IT SOLUTION PVT. LTD. All rights reserved.
          </p>

          {/* Bottom Badges */}
          <div className="flex items-center gap-3">
            {bottomBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full border border-white/10"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
