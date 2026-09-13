"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, FileText, ChevronDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden bg-[#0D1112]"
    >
      {/* Background Architectural Image with Parallax & Cinematic Gradients */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <Image
          src="/images/hero/hero-granite-mansion.jpg"
          alt="Luxury architectural residence showcasing polished black granite tile flooring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75] contrast-[1.12]"
        />
        {/* Cinematic dark gradients for crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112]/95 via-[#0D1112]/75 to-[#0D1112]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1112] via-[#0D1112]/30 to-[#0D1112]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D1112]/40 to-[#0D1112]" />
      </motion.div>

      {/* Atmospheric Ambient Gold Spotlight */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#C99A4A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#171C1E]/90 border border-[#C99A4A]/40 backdrop-blur-md mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C99A4A] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E2C07A]">
              Granite Tiles Factory
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="text-[11px] text-gray-400 font-medium">
              Tamil Nadu, India
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.08] mb-6"
          >
            Nature&apos;s Beauty,{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E2C07A] via-[#F5F3EF] to-[#C99A4A] block sm:inline">
              Crafted for Your Space
            </span>
          </motion.h1>

          {/* Supporting Brand Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            Premium granite tiles crafted with precision, consistency and care
            for residential, commercial and architectural spaces.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Button
              href="/products"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Products
            </Button>

            <Button
              href="/request-quote"
              variant="gold-outline"
              size="lg"
              icon={<FileText className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </motion.div>

          {/* Quick Manufacturing Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl text-xs"
          >
            <div className="border-l-2 border-[#C99A4A] pl-3.5">
              <div className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-0.5 tabular-nums">
                9<span className="text-[#C99A4A]">+</span>
              </div>
              <div className="text-gray-400 text-[11px] uppercase tracking-wider font-medium leading-snug">
                Signature Stone Varieties
              </div>
            </div>
            <div className="border-l-2 border-[#C99A4A] pl-3.5">
              <div className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-0.5 tabular-nums">
                ±0.5<span className="text-xs text-[#E2C07A] font-normal ml-0.5">mm</span>
              </div>
              <div className="text-gray-400 text-[11px] uppercase tracking-wider font-medium leading-snug">
                Calibrated Laser Tolerance
              </div>
            </div>
            <div className="border-l-2 border-[#C99A4A] pl-3.5">
              <div className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-0.5">
                B2B <span className="text-[#C99A4A] font-normal">&amp;</span> B2C
              </div>
              <div className="text-gray-400 text-[11px] uppercase tracking-wider font-medium leading-snug">
                Cut-to-Size Custom Slabs
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#C99A4A]">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#C99A4A]/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[#E2C07A]"
          />
        </div>
      </motion.div>
    </section>
  );
}
