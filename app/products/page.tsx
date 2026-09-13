import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { graniteProducts } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Granite Tiles Collection | Sri Akshaya Granites",
  description:
    "Explore our collection of premium Indian granite tiles in distinctive colours, textures and finishes. Black Galaxy, White Crystal, Tan Brown, Steel Grey and more.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Hero Banner */}
      <section className="relative py-16 md:py-24 bg-[#0D1112] border-b border-[#2A3034] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/granite/black-galaxy-slab.jpg"
            alt="Granite slabs texture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1112] via-[#0D1112]/90 to-[#0D1112]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Products", href: "/products" }, { label: "Granite Tiles" }]}
            theme="dark"
            className="mb-6"
          />
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C99A4A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
              Our Collection
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Granite Tiles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Explore our extensive collection of granite tiles, crafted for durability, elegance and timeless appeal. Available in various colours, sizes and finishes to suit every project.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-16 md:py-24 bg-[#0D1112] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid initialProducts={graniteProducts} />
        </div>
      </section>

      {/* Custom Sizes & Finishes Callout Banner */}
      <section className="relative py-16 bg-[#171C1E] border-y border-[#2A3034] overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 hidden lg:block">
          <Image
            src="/images/factory/granite-slabs-detail.jpg"
            alt="Granite slab edge detail"
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A] block mb-2">
              Bespoke Manufacturing
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-3">
              Custom Sizes & Finishes Available
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              Need non-standard tile dimensions, bookmatched slabs, or specific edge chamfering for your architectural project? Tell us your requirements and we&apos;ll help you formulate the perfect stone solution.
            </p>
          </div>

          <Button
            href="/request-quote"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Get a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
