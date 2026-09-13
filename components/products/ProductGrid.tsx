"use client";

import { useState, useMemo } from "react";
import { GraniteProduct, ColorCategory } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";

interface ProductGridProps {
  initialProducts: GraniteProduct[];
}

export function ProductGrid({ initialProducts }: ProductGridProps) {
  const [selectedColor, setSelectedColor] = useState<ColorCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesColor =
        selectedColor === "all" || product.colorCategory === selectedColor;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.colorDisplay.toLowerCase().includes(query) ||
        product.finishes.some((f) => f.toLowerCase().includes(query)) ||
        product.applications.some((a) => a.toLowerCase().includes(query)) ||
        product.standardSizes.some((s) => s.toLowerCase().includes(query));

      return matchesColor && matchesSearch;
    });
  }, [initialProducts, selectedColor, searchQuery]);

  return (
    <div>
      <ProductFilters
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={initialProducts.length}
        filteredCount={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#171C1E] rounded-2xl border border-[#2A3034] p-8">
          <p className="text-lg font-serif text-white mb-2">
            No matching granite varieties found
          </p>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
            We offer custom quarry sourcing and bespoke finishes for architectural orders. Contact our factory with your requirements.
          </p>
          <button
            onClick={() => {
              setSelectedColor("all");
              setSearchQuery("");
            }}
            className="text-xs text-[#C99A4A] underline hover:text-[#E2C07A]"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
