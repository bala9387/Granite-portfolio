"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SPACES = [
  {
    title: "Residential Architecture",
    subtitle: "Villas & Living Galleries",
    description: "Living halls, cantilevered stairs, master suites & luxury open-plan flooring.",
    image: "/images/portfolio/luxury-villa.jpg",
    filter: "residential",
    tag: "800×800mm Tiles",
  },
  {
    title: "Commercial & Corporate",
    subtitle: "Headquarters & Atriums",
    description: "Expansive high-traffic monolithic lobbies, elevator jambs & building facades.",
    image: "/images/portfolio/commercial-building.jpg",
    filter: "commercial",
    tag: "High Traffic Rated",
  },
  {
    title: "Hospitality & Dining",
    subtitle: "Grand Receptions & Foyers",
    description: "Feature walls, bespoke reception desks, bookmatched lounges & bar counters.",
    image: "/images/portfolio/hotel-lobby.jpg",
    filter: "hospitality",
    tag: "Bookmatched Slabs",
  },
  {
    title: "Outdoor & Landscapes",
    subtitle: "Terraces & Pool Decks",
    description: "Thermal flamed slip-resistant pavers, pedestrian walkways & vehicular plazas.",
    image: "/images/portfolio/outdoor-flooring.jpg",
    filter: "outdoor",
    tag: "Flamed Non-Slip",
  },
];

export function ApplicationsSection() {
  return (
    <section className="bg-[#171C1E] py-24 md:py-32 border-b border-[#2A3034] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-[#C99A4A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Architectural Versatility"
          title="Granite for Every Space"
          description="Engineered by nature and refined by precision craftsmanship, our granite surfaces provide unmatched resilience and grandeur across diverse architectural typologies."
          align="left"
          theme="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPACES.map((space, index) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={`/portfolio?category=${space.filter}`}
                className="group relative h-[420px] rounded-2xl overflow-hidden block border border-[#2A3034] hover:border-[#C99A4A] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1.5"
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1112] via-[#0D1112]/60 to-transparent group-hover:via-[#0D1112]/40 transition-all duration-500" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1112]/80 backdrop-blur-md border border-[#C99A4A]/30 text-[10px] font-semibold uppercase tracking-wider text-[#E2C07A]">
                    <Sparkles className="w-3 h-3 text-[#C99A4A]" />
                    <span>{space.tag}</span>
                  </span>
                </div>

                {/* Floating Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C99A4A] mb-1">
                    {space.subtitle}
                  </span>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#E2C07A] transition-colors leading-tight">
                      {space.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#0D1112]/90 border border-[#C99A4A]/40 flex items-center justify-center text-[#E2C07A] group-hover:bg-[#C99A4A] group-hover:text-[#0D1112] group-hover:rotate-45 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-normal">
                    {space.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
