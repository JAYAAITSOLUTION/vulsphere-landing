"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  Shield,
  Cloud,
  Cpu,
  Users,
  FileSearch,
  FileCheck,
  Lock,
  Mail,
  Code,
  Globe,
  Zap,
  AlertTriangle,
  Search,
  GraduationCap,
  Monitor,
  ChevronDown,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "https://www.jayaaitsolution.com/about", label: "About" },
  { href: "https://www.jayaaitsolution.com/blogs", label: "Blog" },
];

// Services data for mega menu
const serviceCategories = [
  {
    title: "Core Services",
    items: [
      {
        icon: Shield,
        title: "Zero Trust Security",
        description: "Comprehensive Security Framework",
        href: "https://www.jayaaitsolution.com/services/zero-trust",
        color: "text-red-600",
        bgColor: "bg-red-500/10",
      },
      {
        icon: Cloud,
        title: "Digital Transformation",
        description: "Modernize & Streamline Operations",
        href: "https://www.jayaaitsolution.com/services/digital-transformation",
        color: "text-amber-600",
        bgColor: "bg-amber-500/10",
      },
      {
        icon: Cpu,
        title: "Advanced IT Solutions",
        description: "Cutting-Edge Technology Solutions",
        href: "https://www.jayaaitsolution.com/services/advanced-it",
        color: "text-orange-600",
        bgColor: "bg-orange-500/10",
      },
      {
        icon: Users,
        title: "Professional Services",
        description: "Expert Consulting & Support",
        href: "https://www.jayaaitsolution.com/services/professional",
        color: "text-red-600",
        bgColor: "bg-red-500/10",
      },
    ],
  },
];

// Products data for mega menu
const productItems = [
  {
    icon: Box,
    title: "Vulsphere",
    description: "Enterprise-grade Vulnerability Lifecycle Management System (VMS) with advanced orchestration and Nessus integration.",
    href: "https://vulsphere.com",
    logo: "/logos/products/vulsphere.png",
  },
];

// Solutions data for mega menu - split into two columns
const solutionCategories = [
  {
    title: "Data & Email Security",
    items: [
      {
        icon: FileSearch,
        title: "Data Classification",
        description: "Automated sensitive data identification",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: FileCheck,
        title: "Document Rights Management",
        description: "Advanced DRM controls",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: Lock,
        title: "Data Loss Prevention",
        description: "Prevent unauthorized transmission",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: Mail,
        title: "DMARC Email Protection",
        description: "Prevent email spoofing & phishing",
        href: "https://www.jayaaitsolution.com/solutions",
      },
    ],
  },
  {
    title: "Security & Testing",
    items: [
      {
        icon: Globe,
        title: "Attack Surface Management",
        description: "Monitor external attack vectors",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: Zap,
        title: "Breach & Attack Simulation",
        description: "Continuous security validation",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: AlertTriangle,
        title: "Red Teaming",
        description: "Advanced threat simulation",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: Search,
        title: "VA & Penetration Testing",
        description: "Vulnerability assessment",
        href: "https://www.jayaaitsolution.com/solutions",
      },
    ],
  },
  {
    title: "Management & Training",
    items: [
      {
        icon: Code,
        title: "Source Code Review",
        description: "Quarterly security analysis",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: Shield,
        title: "API Security",
        description: "Comprehensive threat protection",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: GraduationCap,
        title: "Security Awareness",
        description: "Training & education",
        href: "https://www.jayaaitsolution.com/solutions",
      },
      {
        icon: Monitor,
        title: "Managed Services",
        description: "24/7 security operations",
        href: "https://www.jayaaitsolution.com/solutions",
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#E8E8E8] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="https://www.jayaaitsolution.com/" className="flex items-center gap-2 group">
            <div className="relative w-36 h-10 lg:w-40 lg:h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-jayaa.png"
                alt="JAYAA IT Solution"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2",
                  isScrolled
                    ? "text-[#1A1A1A] hover:text-[#9A1B21]"
                    : "text-[#1A1A1A] hover:text-[#9A1B21]",
                  activeDropdown === 'services' && "text-[#9A1B21]"
                )}
              >
                Services
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'services' && "rotate-180"
                )} />
              </button>

              {/* Services Mega Menu */}
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E8E8E8] overflow-hidden min-w-[600px] p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="col-span-2">
                          <h3 className="text-xs font-semibold text-[#6A6A6A] uppercase tracking-wider mb-4">
                            {category.title}
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {category.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#9A1B21]/5 transition-colors group"
                              >
                                <div className={cn(
                                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                  item.bgColor
                                )}>
                                  <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#9A1B21] transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-[#6A6A6A] mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#E8E8E8]">
                      <Link
                        href="https://www.jayaaitsolution.com/services"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-[#9A1B21] hover:text-[#7A1519] transition-colors"
                      >
                        View All Services
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2",
                  isScrolled
                    ? "text-[#1A1A1A] hover:text-[#9A1B21]"
                    : "text-[#1A1A1A] hover:text-[#9A1B21]",
                  activeDropdown === 'solutions' && "text-[#9A1B21]"
                )}
              >
                Solutions
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'solutions' && "rotate-180"
                )} />
              </button>

              {/* Solutions Mega Menu */}
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => handleDropdownEnter('solutions')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E8E8E8] overflow-hidden min-w-[800px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {solutionCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-xs font-semibold text-[#6A6A6A] uppercase tracking-wider mb-4">
                            {category.title}
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#9A1B21]/5 transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-[#9A1B21]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A1B21]/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-[#9A1B21]" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#9A1B21] transition-colors leading-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-[#6A6A6A] mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#E8E8E8]">
                      <Link
                        href="https://www.jayaaitsolution.com/solutions"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-[#9A1B21] hover:text-[#7A1519] transition-colors"
                      >
                        Explore All Solutions
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2",
                  isScrolled
                    ? "text-[#1A1A1A] hover:text-[#9A1B21]"
                    : "text-[#1A1A1A] hover:text-[#9A1B21]",
                  activeDropdown === 'products' && "text-[#9A1B21]"
                )}
              >
                Products
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'products' && "rotate-180"
                )} />
              </button>

              {/* Products Mega Menu */}
              {activeDropdown === 'products' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => handleDropdownEnter('products')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#E8E8E8] overflow-hidden min-w-[400px] p-6">
                    <h3 className="text-xs font-semibold text-[#6A6A6A] uppercase tracking-wider mb-4">
                      Our Products
                    </h3>
                    <div className="space-y-3">
                      {productItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl bg-[#9A1B21]/5 border border-[#E8E8E8] hover:bg-[#9A1B21]/10 hover:border-[#9A1B21]/30 transition-all cursor-pointer group"
                        >
                          <div className="relative w-16 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <Image
                              src={item.logo}
                              alt={item.title}
                              width={56}
                              height={56}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-semibold text-[#1A1A1A] group-hover:text-[#9A1B21] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-[#6A6A6A] mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#E8E8E8]">
                      <span className="flex items-center justify-center gap-2 text-sm font-medium text-[#6A6A6A]">
                        More products coming soon
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 py-2",
                  isScrolled
                    ? "text-[#1A1A1A] hover:text-[#9A1B21]"
                    : "text-[#1A1A1A] hover:text-[#9A1B21]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ShimmerButton
              className="h-10 px-6 rounded-full text-sm font-medium"
              shimmerColor="#ffffff"
              background="#9A1B21"
            >
              <Link href="https://www.jayaaitsolution.com/contact">Consult with us</Link>
            </ShimmerButton>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-[#9A1B21]/10"
              >
                <Menu className="h-5 w-5 text-[#1A1A1A]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[360px] bg-white border-l border-[#E8E8E8] overflow-y-auto"
            >
              <div className="flex flex-col gap-6 mt-8 pb-8">
                <Link
                  href="https://www.jayaaitsolution.com/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative w-36 h-10">
                    <Image
                      src="/logo-jayaa.png"
                      alt="JAYAA IT Solution"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                {/* Mobile Services Section */}
                <div className="space-y-3">
                  <h3 className="px-4 text-xs font-semibold text-[#6A6A6A] uppercase tracking-wider">
                    Services
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {serviceCategories.map((category) =>
                      category.items.map((item) => (
                        <SheetClose asChild key={item.title}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#9A1B21] hover:bg-[#9A1B21]/5 rounded-xl transition-colors"
                          >
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", item.bgColor)}>
                              <item.icon className={cn("w-4 h-4", item.color)} />
                            </div>
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))
                    )}
                    <SheetClose asChild>
                      <Link
                        href="https://www.jayaaitsolution.com/services"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#9A1B21] hover:text-[#7A1519] transition-colors"
                      >
                        View All Services
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </SheetClose>
                  </nav>
                </div>

                {/* Mobile Solutions Section */}
                <div className="space-y-3">
                  <h3 className="px-4 text-xs font-semibold text-[#6A6A6A] uppercase tracking-wider">
                    Solutions
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {solutionCategories.flatMap((cat) => cat.items).slice(0, 6).map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#1A1A1A] hover:text-[#9A1B21] hover:bg-[#9A1B21]/5 rounded-xl transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#9A1B21]/10 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-[#9A1B21]" />
                          </div>
                          <span className="truncate">{item.title}</span>
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link
                        href="https://www.jayaaitsolution.com/solutions"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#9A1B21] hover:text-[#7A1519] transition-colors"
                      >
                        Explore All Solutions
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </SheetClose>
                  </nav>
                </div>

                {/* Mobile Products Section */}
                <div className="space-y-3">
                  <h3 className="px-4 text-xs font-semibold text-[#6A6A6A] uppercase tracking-wider">
                    Products
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {productItems.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#9A1B21]/5 hover:bg-[#9A1B21]/10 transition-colors"
                        >
                          <div className="relative w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <Image
                              src={item.logo}
                              alt={item.title}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-[#1A1A1A]">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#6A6A6A] truncate">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-[#E8E8E8] pt-4">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="px-4 py-3 text-sm font-medium text-[#1A1A1A] hover:text-[#9A1B21] hover:bg-[#9A1B21]/5 rounded-xl transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <ShimmerButton
                  className="h-12 rounded-full text-base font-medium"
                  shimmerColor="#ffffff"
                  background="#9A1B21"
                >
                  <Link href="https://www.jayaaitsolution.com/contact" onClick={() => setIsOpen(false)}>
                    Consult with us
                  </Link>
                </ShimmerButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
