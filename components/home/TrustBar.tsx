"use client";

import { Gem, Cog, ShieldCheck, Leaf, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const TRUST_POINTS = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Only the finest natural granite, carefully selected.",
  },
  {
    icon: Cog,
    title: "Advanced Manufacturing",
    description: "Modern factory with precision cutting & finishing.",
  },
  {
    icon: ShieldCheck,
    title: "Durable & Long Lasting",
    description: "Built to withstand time, weather and heavy use.",
  },
  {
    icon: Leaf,
    title: "Consistent Quality",
    description: "Sustainable sourcing and reliable sizing standards.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description: "Serving builders, architects and homeowners worldwide.",
  },
];

export function TrustBar() {
  return (
    <section className="bg-[#F5F3EF] border-y border-[#DDD9D0] py-12 md:py-16 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-[#DDD9D0]">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 md:px-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#DDD9D0] flex items-center justify-center mb-4 text-[#C99A4A] group-hover:border-[#C99A4A] group-hover:shadow-[0_8px_25px_rgba(201,154,74,0.2)] group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#171C1E] mb-1.5 tracking-tight group-hover:text-[#C99A4A] transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs text-[#667078] leading-relaxed max-w-[200px]">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
