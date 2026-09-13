import { Metadata } from "next";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Architectural Portfolio | Sri Akshaya Granites",
  description:
    "View our architectural granite portfolio: high-end villas, corporate atriums, luxury hotels, and exterior stone plazas crafted with Sri Akshaya Granites.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Hero Banner */}
      <section className="relative py-16 md:py-24 bg-[#0D1112] border-b border-[#2A3034] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/hero-granite-mansion.jpg"
            alt="Sri Akshaya Granites portfolio projects"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/90 to-[#0D1112]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Portfolio" }]}
            theme="dark"
            className="mb-6"
          />
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C99A4A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
              Our Work
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Spaces Defined by Stone
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            A curated showcase of our granite tiles across luxury private residences, prominent commercial developments, and outdoor landscape plazas.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-16 md:py-24 bg-[#0D1112] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid initialProjects={portfolioProjects} />
        </div>
      </section>
    </div>
  );
}
