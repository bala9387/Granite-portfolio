import { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { ShieldCheck, Layers, Truck, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Sri Akshaya Granites",
  description:
    "Request factory-direct pricing on granite tiles and cut-to-size stone slabs from Sri Akshaya Granites. Fast quotation for residential and commercial projects.",
};

export const dynamic = "force-static";

export default function RequestQuotePage() {
  return (
    <div className="pt-24 pb-20 bg-[#0D1112] text-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 bg-[#0D1112] border-b border-[#2A3034] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/factory/granite-slabs-detail.jpg"
            alt="Granite slabs texture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/90 to-[#0D1112]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Request a Quote" }]}
            theme="dark"
            className="mb-6"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-2">
            B2B & Architectural Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Request a Factory Quotation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Tell us your project scope, granite variety, tile format, and quantity. Our estimating team will furnish a comprehensive quotation.
          </p>

          {/* Quick Assurance Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C99A4A]" />
              <span>Direct Manufacturer Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C99A4A]" />
              <span>Standard & Cut-to-Size Formats</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C99A4A]" />
              <span>Protected Export Crating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="text-center py-20 text-gray-400">
                Loading quotation form...
              </div>
            }
          >
            <QuoteForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
