"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0D1112]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#2A3034]/60"
            : "bg-gradient-to-b from-[#0D1112]/90 via-[#0D1112]/50 to-transparent py-5"
        )}
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C99A4A] via-[#E2C07A] to-[#C99A4A] origin-left shadow-[0_0_12px_rgba(201,154,74,0.8)] z-50"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:text-[#E2C07A]",
                    isActive
                      ? "text-[#E2C07A] font-medium"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C99A4A]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${companyData.phone.primary.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs text-gray-300 hover:text-[#E2C07A] transition-colors py-1.5 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-[#2A3034]"
              aria-label={`Call factory at ${companyData.phone.primary}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C99A4A]" />
              <span className="font-medium tracking-wider">{companyData.phone.displayPrimary}</span>
            </a>

            <Button
              href="/request-quote"
              variant="gold"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu & Quote Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              href="/request-quote"
              variant="gold"
              size="sm"
              className="text-xs px-3.5 py-1.5"
            >
              Quote
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A] bg-[#171C1E] border border-[#2A3034]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#E2C07A]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0D1112] border-l border-[#2A3034] p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#2A3034]">
                  <Logo variant="dark" size="sm" showTagline={false} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white rounded-lg"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
                  {NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between text-base py-3 px-4 rounded-lg transition-colors",
                          isActive
                            ? "bg-[#C99A4A]/10 text-[#E2C07A] font-semibold border-l-2 border-[#C99A4A]"
                            : "text-gray-300 hover:bg-[#171C1E] hover:text-white"
                        )}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-40" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#2A3034] space-y-4">
                <Button
                  href="/request-quote"
                  variant="gold"
                  size="md"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Quote
                </Button>

                <div className="text-center pt-2">
                  <a
                    href={`tel:${companyData.phone.primary.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#E2C07A]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C99A4A]" />
                    <span>{companyData.phone.displayPrimary}</span>
                  </a>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {companyData.address.city}, {companyData.address.state}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
