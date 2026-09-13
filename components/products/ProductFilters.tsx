"use client";

import { Search, X } from "lucide-react";
import { ColorCategory } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  selectedColor: ColorCategory;
  onSelectColor: (color: ColorCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

const COLOR_TABS: { label: string; value: ColorCategory }[] = [
  { label: "All Stones", value: "all" },
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
  { label: "Brown", value: "brown" },
  { label: "Grey", value: "grey" },
  { label: "Red", value: "red" },
  { label: "Other", value: "other" },
];

export function ProductFilters({
  selectedColor,
  onSelectColor,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6 mb-10">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Color Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {COLOR_TABS.map((tab) => {
            const isSelected = selectedColor === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => onSelectColor(tab.value)}
                className={cn(
                  "px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 shrink-0",
                  isSelected
                    ? "bg-[#C99A4A] text-[#0D1112] shadow-sm font-semibold"
                    : "bg-[#171C1E] text-gray-300 hover:text-white hover:bg-[#222729] border border-[#2A3034]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search stones, finishes, sizes..."
            className="w-full pl-10 pr-10 py-2 text-xs bg-[#171C1E] border border-[#2A3034] rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#C99A4A] focus:ring-1 focus:ring-[#C99A4A]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results summary & Active filter tags */}
      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-[#2A3034]/60 pt-3">
        <span>
          Showing <strong className="text-[#E2C07A]">{filteredCount}</strong> of{" "}
          {totalCount} granite varieties
        </span>

        {(selectedColor !== "all" || searchQuery) && (
          <button
            onClick={() => {
              onSelectColor("all");
              onSearchChange("");
            }}
            className="text-[#C99A4A] hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
