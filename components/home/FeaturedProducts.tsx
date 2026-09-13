"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { graniteProducts } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FINISH_DETAILS: Record<string, { label: string; desc: string; sheen: string }> = {
  Polished: {
    label: "Mirror Polished",
    desc: "Diamond-buffed high gloss surface with maximum light reflection, accentuating natural crystal depth.",
    sheen: "95+ Gloss Units",
  },
  Honed: {
    label: "Honed Matte",
    desc: "Silky, glare-free satin touch ideal for contemporary architectural interiors and calm spaces.",
    sheen: "Satin Smooth Finish",
  },
  Flamed: {
    label: "Thermal Flamed",
    desc: "High-temperature torch applied to pop quartz crystals, creating an authentic non-slip outdoor texture.",
    sheen: "High Slip Resistance",
  },
  Leathered: {
    label: "Leathered / Brushed",
    desc: "Diamond-brushed tactile undulating relief that closes pores while retaining deep color tones.",
    sheen: "Tactile Antique Feel",
  },
};

export function FeaturedProducts() {
  const featured = graniteProducts.filter((p) => p.featured).slice(0, 4);
  const [selectedFinish, setSelectedFinish] = useState("Polished");

  return (
    <section className="bg-white py-24 md:py-32 border-b border-[#DDD9D0] relative overflow-hidden">
      {/* Background Decorative Ambient Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[180px] font-bold text-[#F5F3EF] select-none pointer-events-none -z-0 opacity-60 leading-none">
        GRANITE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Heading & Finish Explorer (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#C99A4A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
                  Curated Collection
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#171C1E] tracking-tight leading-[1.12] mb-5">
                Natural Stone.
                <br />
                Endless Possibilities.
              </h2>

              <p className="text-sm md:text-base text-[#667078] leading-relaxed font-normal mb-8">
                From deep interstellar obsidian to pristine crystalline quartzite, our granite tiles come in distinctive natural color families, calibrated thicknesses, and architectural surface treatments.
              </p>

              {/* Interactive Surface Finish Selector */}
              <div className="p-5 rounded-2xl bg-[#F5F3EF] border border-[#DDD9D0] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#171C1E] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#C99A4A]" />
                    <span>Select Surface Finish</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#C99A4A] font-semibold">
                    {FINISH_DETAILS[selectedFinish]?.sheen}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {Object.keys(FINISH_DETAILS).map((finishKey) => (
                    <button
                      key={finishKey}
                      onClick={() => setSelectedFinish(finishKey)}
                      className={cn(
                        "px-3.5 py-1.5 text-xs rounded-full font-medium transition-all duration-200",
                        selectedFinish === finishKey
                          ? "bg-[#171C1E] text-white shadow-sm"
                          : "bg-white text-[#667078] hover:text-[#171C1E] border border-[#DDD9D0]"
                      )}
                    >
                      {finishKey}
                    </button>
                  ))}
                </div>

                <p className="text-xs text-[#667078] leading-relaxed pt-1 border-t border-[#DDD9D0]/60">
                  {FINISH_DETAILS[selectedFinish]?.desc}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/products"
                variant="dark"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-[#C99A4A]" />}
              >
                View All 9+ Granite Stones
              </Button>
            </div>
          </motion.div>

          {/* Right Column: 4 Granite Sample Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featured.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex flex-col bg-[#F5F3EF] p-4 rounded-2xl border border-[#DDD9D0] hover:border-[#C99A4A] transition-all duration-500 hover:shadow-[0_16px_40px_rgba(201,154,74,0.15)] hover:-translate-y-1 block relative"
                >
                  {/* Tile Texture Image Container */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-900 border border-[#DDD9D0] mb-4 shadow-sm">
                    <Image
                      src={product.images.texture}
                      alt={`${product.name} granite tile surface`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Specular glare sweep effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Quick View Tag on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#0D1112] text-xs font-semibold shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[#C99A4A]" />
                        <span>Inspect Stone</span>
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#0D1112]/80 backdrop-blur-md text-[10px] font-semibold text-[#E2C07A] uppercase tracking-wider">
                      {product.colorCategory}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="px-1 flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#171C1E] group-hover:text-[#C99A4A] transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#667078] mt-1 font-normal line-clamp-1">
                        {product.tagline}
                      </p>
                    </div>

                    <span className="text-[11px] font-medium text-[#C99A4A] group-hover:translate-x-0.5 transition-transform shrink-0 pt-0.5">
                      →
                    </span>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#DDD9D0] flex items-center justify-between text-[11px] text-[#667078]">
                    <span>{selectedFinish} Finish</span>
                    <span className="font-mono text-[10px]">{product.standardSizes[0]}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
