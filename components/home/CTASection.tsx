"use client";

import Image from "next/image";
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-[#0D1112] py-24 md:py-32 relative overflow-hidden text-white border-b border-[#2A3034]">
      {/* Background Graphic Image of Stacked Granite Slabs with Ambient Motion */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <Image
          src="/images/factory/granite-slabs-detail.jpg"
          alt="Stacked cut granite slabs showcasing beveled edges and polished natural stone textures"
          fill
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/92 to-[#0D1112]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1112] via-transparent to-[#0D1112]" />
      </div>

      {/* Atmospheric Gold Spotlight */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#C99A4A]/10 rounded-full blur-[170px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171C1E] border border-[#C99A4A]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A4A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E2C07A]">
                Let&apos;s Build Together
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.12] text-white max-w-2xl">
              Looking for the right granite tiles for your project?
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-xl">
              Tell us about your granite requirements and our team will help you find the perfect stone solution. Reach out for custom dimensions, finish samples, and factory-direct quotations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/request-quote"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </Button>

              <Button
                href="/contact"
                variant="gold-outline"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Contact Factory
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Factory Guarantees Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-[#171C1E]/90 border border-[#2A3034] p-8 rounded-2xl shadow-2xl backdrop-blur-md space-y-5"
          >
            <h3 className="font-serif text-xl font-semibold text-white border-b border-[#2A3034] pb-4">
              Factory Direct Commitments
            </h3>

            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span><strong>Authentic Indian Granite:</strong> High-density igneous rock cut directly from southern stone quarries.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span><strong>Calibrated Formats:</strong> 600×600mm, 800×800mm, and custom cut-to-size specifications.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span><strong>Export & Domestic Crating:</strong> Heavy-duty fumigated wooden crates with foam cushioning.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span><strong>Sample Dispatch:</strong> Physical tile swatches available upon project inquiry.</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#E2C07A] font-mono">
              ★ Direct Manufacturer Assistance: Mon – Sat
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
