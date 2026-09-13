import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Phone,
  FileText,
} from "lucide-react";
import { graniteProducts } from "@/data/products";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return graniteProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = graniteProducts.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Granite Not Found | Sri Akshaya Granites" };
  }

  return {
    title: `${product.name} Granite Tiles | Sri Akshaya Granites`,
    description: product.description,
    openGraph: {
      title: `${product.name} Granite | Sri Akshaya Granites`,
      description: product.tagline,
      images: [{ url: product.images.texture }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = graniteProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = graniteProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-[#0D1112] text-white min-h-screen">
      {/* Top Breadcrumbs Bar */}
      <div className="border-b border-[#2A3034] bg-[#171C1E]/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
            theme="dark"
          />
        </div>
      </div>

      {/* Main Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Visual Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary High-Resolution Texture Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#2A3034] shadow-2xl bg-stone-900 group">
              <Image
                src={product.images.texture}
                alt={`${product.name} granite surface texture macro`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="gold" size="md">
                  {product.colorCategory.toUpperCase()} GRANITE
                </Badge>
              </div>
            </div>

            {/* Architectural Application Preview */}
            <div className="p-4 rounded-xl bg-[#171C1E] border border-[#2A3034] flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#2A3034]">
                <Image
                  src={product.images.application}
                  alt={`${product.name} installed in architectural project`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C99A4A]">
                  Real Installation Preview
                </span>
                <h4 className="font-serif text-sm font-semibold text-white mt-0.5">
                  Installed in Architectural Spaces
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  High-gloss light reflection and consistent seam joints.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Quote CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C99A4A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
                  {product.colorDisplay}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white mb-3">
                {product.name}
              </h1>

              <p className="text-base text-[#E2C07A] leading-relaxed font-normal mb-6">
                {product.tagline}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed font-normal mb-8">
                {product.description}
              </p>

              {/* Stone Attributes Table */}
              <div className="bg-[#171C1E] rounded-xl border border-[#2A3034] p-6 space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#2A3034] text-xs gap-1">
                  <span className="text-gray-400">Available Surface Finishes</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.finishes.map((finish) => (
                      <Badge key={finish} variant="stone" size="sm">
                        {finish}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#2A3034] text-xs gap-1">
                  <span className="text-gray-400">Standard Tile Sizes</span>
                  <span className="font-medium text-white">
                    {product.standardSizes.join(" • ")}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#2A3034] text-xs gap-1">
                  <span className="text-gray-400">Calibrated Thicknesses</span>
                  <span className="font-medium text-white">
                    {product.thicknesses.join(" / ")}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="text-gray-400">Custom Slabs</span>
                  <span className="font-medium text-[#E2C07A]">
                    Bespoke cut-to-size available on request
                  </span>
                </div>
              </div>

              {/* Characteristics Checklist */}
              <div className="space-y-2.5 mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A]">
                  Key Stone Characteristics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {product.characteristics.map((char) => (
                    <div key={char} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C99A4A] shrink-0" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#2A3034] space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button
                  href={`/request-quote?stone=${product.slug}`}
                  variant="gold"
                  size="lg"
                  className="flex-1 min-w-[220px]"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Request a Quote for this Granite
                </Button>

                <Button
                  href="/contact"
                  variant="dark"
                  size="lg"
                  icon={<Phone className="w-4 h-4" />}
                >
                  Contact Factory
                </Button>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                Need physical stone samples? Inquire with our team for dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Applications */}
        <div className="mt-20 pt-12 border-t border-[#2A3034]">
          <h2 className="font-serif text-2xl font-semibold text-white mb-6">
            Recommended Architectural Applications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {product.applications.map((app) => (
              <div
                key={app}
                className="p-4 rounded-xl bg-[#171C1E] border border-[#2A3034] text-center"
              >
                <Layers className="w-5 h-5 text-[#C99A4A] mx-auto mb-2" />
                <span className="text-xs font-medium text-gray-200">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Granite Stones */}
        <div className="mt-20 pt-12 border-t border-[#2A3034]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C99A4A] block mb-1">
                More Natural Stones
              </span>
              <h2 className="font-serif text-2xl font-semibold text-white">
                Related Granite Varieties
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs text-[#C99A4A] hover:text-[#E2C07A] flex items-center gap-1 font-medium"
            >
              <span>View All Stones</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
