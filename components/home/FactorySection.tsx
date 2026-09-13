"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FactorySection() {
  return (
    <section className="bg-[#0D1112] text-white py-24 md:py-32 relative overflow-hidden border-b border-[#2A3034]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C99A4A]/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Factory Manufacturing Imagery (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#2A3034] shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/factory/factory-floor.jpg"
                alt="Sri Akshaya Granites state-of-the-art tile cutting and polishing factory floor"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1112]/70 via-transparent to-transparent" />

              {/* Live factory status pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1112]/90 border border-[#C99A4A]/40 backdrop-blur-md text-[11px] text-[#E2C07A]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono uppercase tracking-wider font-semibold">
                  Active Manufacturing Facility
                </span>
              </div>
            </div>

            {/* Floating Factory Telemetry Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:block absolute -bottom-6 -right-6 bg-[#171C1E]/95 border border-[#C99A4A]/50 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-xs"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <Cpu className="w-4 h-4 text-[#C99A4A]" />
                <span className="text-[10px] uppercase tracking-widest text-[#E2C07A] font-semibold">
                  Factory Calibration
                </span>
              </div>
              <div className="text-sm text-white font-medium">
                ±0.5mm Thickness Sizing
              </div>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                Computer-controlled bridge saws ensure dead-square 90° edges for tight mortar joints.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Factory Story & Values (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#C99A4A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
                Our Factory
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.12] text-white">
              Precision.
              <br />
              Quality. Scale.
            </h2>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-normal">
              From carefully selected natural stone blocks to precision cutting and finishing, every stage of our production process is strictly controlled for dimensional accuracy and structural consistency.
            </p>

            {/* Checklist */}
            <div className="space-y-3 py-2">
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span>Multi-blade diamond gang sawing for parallel slab surfaces</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span>Multi-head progressive line polishing achieving mirror gloss</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span>Piece-by-piece diagonal and surface planarity inspection</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="gold-outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Factory
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
