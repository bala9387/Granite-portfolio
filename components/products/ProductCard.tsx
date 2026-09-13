import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { GraniteProduct } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: GraniteProduct;
  className?: string;
  theme?: "dark" | "light";
}

export function ProductCard({
  product,
  className,
  theme = "dark",
}: ProductCardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300",
        isDark
          ? "bg-[#171C1E] border border-[#2A3034] hover:border-[#C99A4A]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          : "bg-white border border-[#DDD9D0] hover:border-[#C99A4A] hover:shadow-[0_12px_30px_rgba(201,154,74,0.12)]",
        className
      )}
    >
      {/* Granite Image Preview */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square w-full overflow-hidden bg-stone-900 block"
        aria-label={`View details for ${product.name} granite tile`}
      >
        <Image
          src={product.images.texture}
          alt={`${product.name} granite tile texture preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Color Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="gold" size="sm">
            {product.colorCategory.toUpperCase()}
          </Badge>
        </div>
      </Link>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3
              className={cn(
                "font-serif text-xl font-semibold tracking-wide group-hover:text-[#C99A4A] transition-colors",
                isDark ? "text-white" : "text-[#171C1E]"
              )}
            >
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>

          <p
            className={cn(
              "text-xs line-clamp-2 leading-relaxed mb-4",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {product.tagline}
          </p>

          {/* Finishes Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.finishes.slice(0, 3).map((finish) => (
              <Badge key={finish} variant={isDark ? "stone" : "outline"} size="sm">
                {finish}
              </Badge>
            ))}
            {product.finishes.length > 3 && (
              <span className="text-[10px] text-gray-400 self-center">
                +{product.finishes.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Size Spec & CTA Link */}
        <div
          className={cn(
            "pt-4 border-t flex items-center justify-between mt-auto",
            isDark ? "border-[#2A3034]" : "border-gray-100"
          )}
        >
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Layers className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span>{product.standardSizes[0]}</span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C99A4A] group-hover:text-[#E2C07A] transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
