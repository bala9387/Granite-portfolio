"use client";

import { PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioFiltersProps {
  selectedCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
  totalCount: number;
}

const CATEGORIES: { label: string; value: PortfolioCategory }[] = [
  { label: "All Projects", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Interior", value: "interior" },
  { label: "Outdoor", value: "outdoor" },
];

export function PortfolioFilters({
  selectedCategory,
  onSelectCategory,
  totalCount,
}: PortfolioFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#2A3034]/60">
      <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onSelectCategory(cat.value)}
              className={cn(
                "px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 shrink-0",
                isSelected
                  ? "bg-[#C99A4A] text-[#0D1112] font-semibold shadow-sm"
                  : "bg-[#171C1E] text-gray-300 hover:text-white hover:bg-[#222729] border border-[#2A3034]"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <span className="text-xs text-gray-400 self-start sm:self-center">
        {totalCount} Case Studies
      </span>
    </div>
  );
}
