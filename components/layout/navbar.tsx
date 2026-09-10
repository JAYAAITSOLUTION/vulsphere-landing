"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

const VULSPHERE_URL = "https://vulsphere.com";
const GRADIENT = "linear-gradient(90deg, #2E7CF6, #8B5CF6, #E84FA0)";

const navLinks = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#integrations", label: "Integrations" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-40 h-10 lg:w-48 lg:h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="VulSphere"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1E2242] hover:text-[#7B61C9] transition-colors duration-200 py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={VULSPHERE_URL}
              className="text-sm font-medium text-[#1E2242] hover:text-[#7B61C9] transition-colors duration-200"
            >
              Sign In
            </Link>
            <ShimmerButton
              className="h-10 px-6 rounded-full text-sm font-medium"
              shimmerColor="#ffffff"
              background={GRADIENT}
            >
              <Link href={VULSPHERE_URL}>Request Demo</Link>
            </ShimmerButton>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-[#7B61C9]/10"
              >
                <Menu className="h-5 w-5 text-[#1E2242]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] bg-white border-l border-[#E8E8E8] overflow-y-auto"
            >
              <div className="flex flex-col gap-6 mt-8 pb-8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative w-40 h-10">
                    <Image
                      src="/logo.png"
                      alt="VulSphere"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="px-4 py-3 text-sm font-medium text-[#1E2242] hover:text-[#7B61C9] hover:bg-[#7B61C9]/5 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="border-t border-[#E8E8E8] pt-4">
                  <SheetClose asChild>
                    <Link
                      href={VULSPHERE_URL}
                      className="block px-4 py-3 text-sm font-medium text-[#1E2242] hover:text-[#7B61C9] transition-colors"
                    >
                      Sign In
                    </Link>
                  </SheetClose>
                </div>

                <ShimmerButton
                  className="h-12 rounded-full text-base font-medium"
                  shimmerColor="#ffffff"
                  background={GRADIENT}
                >
                  <Link href={VULSPHERE_URL} onClick={() => setIsOpen(false)}>
                    Request Demo
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
