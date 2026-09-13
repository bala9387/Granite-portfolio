import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  ShieldCheck,
  ArrowRight,
  Pickaxe,
  Scissors,
  Cpu,
  Sparkles,
  ClipboardCheck,
  PackageCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Sri Akshaya Granites",
  description:
    "Learn about Sri Akshaya Granites: our natural stone craftsmanship, precision cutting, rigorous quality standards, and vision for timeless architectural spaces.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Quarry Selection",
    description: "Carefully sourcing premium natural granite blocks with uniform density, rich pigmentation, and minimal natural fissures.",
    icon: Pickaxe,
  },
  {
    step: "02",
    title: "Precision Cutting",
    description: "Processing raw blocks with multi-wire gang saws and bridge cutters into calibrated slabs and standard tile dimensions.",
    icon: Scissors,
  },
  {
    step: "03",
    title: "Epoxy & Stabilization",
    description: "Reinforcing natural stone structure and filling micro-pores under controlled industrial environments.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Polishing & Finishing",
    description: "Multi-head sequential grinding and polishing to achieve high-gloss reflective finishes or tactile honed/flamed textures.",
    icon: Sparkles,
  },
  {
    step: "05",
    title: "Grading & Quality Check",
    description: "Individual slab inspection verifying diagonal accuracy, surface flatness, color uniformity, and strict thickness tolerances.",
    icon: ClipboardCheck,
  },
  {
    step: "06",
    title: "Packing & Dispatch",
    description: "Sturdy fumigated timber crating with polyethylene foam separators ensuring zero breakage during transport and export.",
    icon: PackageCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Hero Banner */}
      <section className="relative py-16 md:py-24 bg-[#0D1112] border-b border-[#2A3034] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/factory/factory-floor.jpg"
            alt="Sri Akshaya Granites processing factory"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/90 to-[#0D1112]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            theme="dark"
            className="mb-6"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-2">
            Natural Stone. Lasting Value.
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            About Sri Akshaya Granites
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Bridging the raw splendor of earth&apos;s ancient geology with modern industrial cutting precision to create enduring stone surfaces.
          </p>
        </div>
      </section>

      {/* SECTION 1: Our Story */}
      <section className="py-20 bg-white text-[#171C1E] border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#C99A4A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.2]">
                From Nature&apos;s Depths
                <br />
                to Your Spaces
              </h2>
              <p className="text-base text-[#667078] leading-relaxed">
                Sri Akshaya Granites was established with a focused purpose: to deliver high-quality, authentic Indian natural granite tiles to architects, builders, and discerning property owners.
              </p>
              <p className="text-sm text-[#667078] leading-relaxed">
                Natural granite represents one of the most durable and aesthetically rich building materials created by geological forces over millions of years. At our manufacturing facility, we respect this inherent raw quality. Through precision calibrated sawing, surface finishing, and quality inspection, we transform raw blocks into finely finished tiles that define prestigious residences and commercial landmarks.
              </p>
              <div className="pt-4">
                <Button href="/products" variant="dark" size="md">
                  Explore Granite Collection
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#DDD9D0] shadow-xl">
                <Image
                  src="/images/factory/factory-floor.jpg"
                  alt="Sri Akshaya Granites manufacturing facility and cutting machinery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Vision, Mission & Values */}
      <section className="py-20 bg-[#F5F3EF] border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Vision, Mission & Values"
            description="Our foundation is built on uncompromising product standards, transparent relationships, and dependable craftsmanship."
            align="center"
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#DDD9D0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F3EF] text-[#C99A4A] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#171C1E] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-[#667078] leading-relaxed font-normal">
                  To be a reputable, globally recognized manufacturer and supplier of Indian granite tiles, celebrated for dimensional accuracy and enduring stone quality.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DDD9D0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F3EF] text-[#C99A4A] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#171C1E] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-[#667078] leading-relaxed font-normal">
                  Deliver superior quality granite products with integrity, innovative manufacturing processes, and attentive customer service tailored to project specifications.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#DDD9D0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F3EF] text-[#C99A4A] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#171C1E] mb-3">
                  Our Values
                </h3>
                <p className="text-sm text-[#667078] leading-relaxed font-normal">
                  Quality at every cut. Honesty in commercial commitments. Customer-first flexibility in dimensions and finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Manufacturing Process (6 Steps) */}
      <section className="py-20 md:py-28 bg-[#0D1112] text-white border-b border-[#2A3034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Disciplined Workflow"
            title="Our Manufacturing Process"
            description="From raw stone blocks to finished, inspected tiles, we follow a rigorous 6-step manufacturing workflow to guarantee structural and visual excellence."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-[#171C1E] p-8 rounded-2xl border border-[#2A3034] hover:border-[#C99A4A]/60 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#0D1112] border border-[#2A3034] flex items-center justify-center text-[#C99A4A] group-hover:border-[#C99A4A] group-hover:scale-110 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-3xl font-bold text-[#C99A4A]/30 group-hover:text-[#C99A4A] transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-[#E2C07A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#2A3034] text-[11px] text-[#C99A4A] font-medium flex items-center gap-1">
                    <span>Quality Controlled Stage</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Quality Commitment & CTA */}
      <section className="py-20 bg-[#171C1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-3">
            Architectural Reliability
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Ready to discuss your granite requirements?
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-normal">
            Whether you need standard calibrated 600×600mm tiles or bespoke cut-to-size slabs for an architectural project, our team is ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/request-quote"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>
            <Button href="/contact" variant="gold-outline" size="lg">
              Contact Factory
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
