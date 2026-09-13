"use client";

import Image from "next/image";
import {
  Layers,
  Cpu,
  CheckCircle2,
  Sliders,
  Truck,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: Layers,
    title: "Premium Natural Stone",
    description:
      "Carefully selected granite blocks sourced directly from southern Indian quarries, vetted for rich pigmentation, high density, and structural soundness.",
    image: "/images/why-us/premium-stone.jpg",
    tag: "Quarry Sourced",
  },
  {
    icon: Cpu,
    title: "Precision Manufacturing",
    description:
      "Modern computerized bridge saws and automated multi-head polishers guarantee calibrated thickness (±0.5mm) and laser-sharp 90° edges.",
    image: "/images/why-us/precision-manufacturing.jpg",
    tag: "±0.5mm Tolerance",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    description:
      "Rigorous piece-by-piece inspection of surface gloss levels, diagonal squareness, planarity, and ultrasonic fissure detection before packing.",
    image: "/images/why-us/quality-control.jpg",
    tag: "Multi-Stage Tested",
  },
  {
    icon: Sliders,
    title: "Custom Solutions",
    description:
      "Tailored tile formats (600×600mm, 800×800mm, custom slabs), thickness choices (18mm to 30mm+), and diverse surface finishes for architects.",
    image: "/images/why-us/custom-solutions.jpg",
    tag: "Bespoke Cut-to-Size",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Heavy-duty export-grade fumigated wooden crating with protective polyethylene foam separators, ensuring safe transit to project sites and ports.",
    image: "/images/why-us/on-time-delivery.jpg",
    tag: "Protected Crating",
  },
  {
    icon: TrendingUp,
    title: "Direct Factory Value",
    description:
      "Direct-from-factory pricing delivering superior grade natural granite without intermediary markups or wholesale distributor inflation.",
    image: "/images/why-us/factory-value.jpg",
    tag: "Direct Pricing",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#F5F3EF] py-24 md:py-32 border-b border-[#DDD9D0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="Quality, Trust and Long-Term Value"
          description="At Sri Akshaya Granites, we combine earth's finest raw material with disciplined factory craftsmanship to deliver architectural reliability on every project."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-[#DDD9D0] hover:border-[#C99A4A] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(201,154,74,0.15)] hover:-translate-y-1.5 group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Icon & Tag */}
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0D1112]/80 backdrop-blur-md border border-[#C99A4A]/40 flex items-center justify-center text-[#E2C07A] shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#0D1112]/85 backdrop-blur-md border border-[#C99A4A]/30 text-[10px] font-semibold text-[#E2C07A] uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-xl font-semibold text-[#171C1E] mb-3 tracking-tight group-hover:text-[#C99A4A] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667078] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#171C1E] font-medium">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C99A4A]" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#667078]">
                        Verified Factory Standard
                      </span>
                    </div>
                    <span className="text-xs font-serif text-[#C99A4A] font-bold">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
