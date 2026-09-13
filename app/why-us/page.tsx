import { Metadata } from "next";
import Image from "next/image";
import {
  Layers,
  Cpu,
  CheckCircle2,
  Sliders,
  Truck,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Why Choose Sri Akshaya Granites | Factory Direct Quality",
  description:
    "Discover what sets Sri Akshaya Granites apart: premium natural stone blocks, computerized cutting precision, strict quality inspection, and dependable direct factory service.",
};

const PILLARS_DETAILED = [
  {
    icon: Layers,
    title: "1. Premium Natural Material",
    subtitle: "Carefully Selected Raw Blocks",
    description:
      "We source high-density granite blocks directly from renowned geological quarries across southern India. Every block is vetted for structural soundness, rich pigmentation, and minimal micro-fissures before cutting begins.",
    image: "/images/why-us/premium-stone.jpg",
    tag: "Quarry Sourced",
  },
  {
    icon: Cpu,
    title: "2. Precision Manufacturing",
    subtitle: "Sub-Millimeter Calibration",
    description:
      "Equipped with modern multi-wire gang saws, computerized bridge cutting machines, and automated multi-head polishers, our facility achieves ±0.5mm thickness calibration and laser-square 90-degree edges on every tile format.",
    image: "/images/why-us/precision-manufacturing.jpg",
    tag: "±0.5mm Calibration",
  },
  {
    icon: CheckCircle2,
    title: "3. Multi-Stage Quality Control",
    subtitle: "Rigorous Piece-by-Piece Checks",
    description:
      "Every finished tile undergoes multi-point inspection examining surface gloss reflectance, dimensional squareness, surface planarity, and uniform grain distribution. Sub-standard tiles are strictly rejected.",
    image: "/images/why-us/quality-control.jpg",
    tag: "Tested & Inspected",
  },
  {
    icon: Sliders,
    title: "4. Custom Architectural Solutions",
    subtitle: "Tailored Formats & Finishes",
    description:
      "We cater to unique architectural designs with cut-to-size specifications, bookmatched slabs, and varied surface treatments including Mirror Polished, Honed, Thermal Flamed, Leathered, and Bush-Hammered.",
    image: "/images/why-us/custom-solutions.jpg",
    tag: "Bespoke Cut-to-Size",
  },
  {
    icon: Truck,
    title: "5. Dependable Order Fulfillment",
    subtitle: "Safe Crating & Timely Transit",
    description:
      "Tiles are packed in heavy-duty, fumigated wooden crates with foam separators to prevent transit abrasion. Our logistics management ensures deliveries reach project sites or ports on schedule.",
    image: "/images/why-us/on-time-delivery.jpg",
    tag: "Fumigated Crating",
  },
  {
    icon: TrendingUp,
    title: "6. Direct Factory Value",
    subtitle: "Honest Commercial Relationship",
    description:
      "By purchasing directly from our manufacturing facility, architects and builders eliminate multiple distributor layers, securing prime natural stone at transparent, competitive rates.",
    image: "/images/why-us/factory-value.jpg",
    tag: "Direct Value",
  },
];

export function generateStaticParams() {
  return [];
}

export default function WhyUsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Hero Banner */}
      <section className="relative py-16 md:py-24 bg-[#0D1112] border-b border-[#2A3034] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/factory/factory-floor.jpg"
            alt="Sri Akshaya Granites factory"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/90 to-[#0D1112]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Why Us" }]}
            theme="dark"
            className="mb-6"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-2">
            The Manufacturer Advantage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Why Sri Akshaya Granites
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Quality, trust, and long-term value. We bridge geological authenticity with industrial precision to support enduring architectural visions.
          </p>
        </div>
      </section>

      {/* SECTION: 6 Core Pillars */}
      <section className="py-20 md:py-28 bg-[#F5F3EF] border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitments"
            title="Six Pillars of Our Manufacturing Standard"
            description="Explore how our material selection, factory capabilities, and customer focus translate into reliable project outcomes."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS_DETAILED.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-[#DDD9D0] shadow-sm hover:border-[#C99A4A] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(201,154,74,0.15)] hover:-translate-y-1.5 group flex flex-col justify-between overflow-hidden"
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

                      {/* Floating Icon */}
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

                    <div className="p-6 sm:p-7">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C99A4A] block mb-1">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#171C1E] mb-3 leading-snug group-hover:text-[#C99A4A] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#667078] leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-6 pt-2">
                    <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#171C1E] font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#C99A4A]" />
                      <span>Verified Factory Standard</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison & Factory Verification */}
      <section className="py-20 bg-[#0D1112] text-white border-b border-[#2A3034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C99A4A] block">
                Consistent Performance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
                Designed to Meet Demanding Architectural Specifications
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Natural stone surfaces must endure decades of footfall, climate changes, and cleaning regimens. Our granite tiles offer high flexural density, near-zero porosity, and natural scratch resistance that synthetic alternatives cannot match.
              </p>
              <div className="space-y-3 text-xs text-gray-300">
                <div className="p-3 rounded-lg bg-[#171C1E] border border-[#2A3034] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C99A4A]" />
                  <span><strong>Zero Artificial Resins:</strong> 100% natural stone without synthetic fading over time.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171C1E] border border-[#2A3034] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C99A4A]" />
                  <span><strong>Thermal Stability:</strong> Suitable for direct equatorial sunlight and cold climates alike.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171C1E] border border-[#2A3034] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C99A4A]" />
                  <span><strong>Dimensional Precision:</strong> Consistent tile thickness simplifies tiling mortar beds.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#2A3034] shadow-2xl">
                <Image
                  src="/images/factory/granite-slabs-detail.jpg"
                  alt="Granite slabs edge quality"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#171C1E] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-4">
            Partner with Sri Akshaya Granites
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto font-normal">
            Discuss your upcoming project requirements with our factory engineering team.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href="/request-quote"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>
            <Button href="/contact" variant="dark" size="lg">
              Contact Factory
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
