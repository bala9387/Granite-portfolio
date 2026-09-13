"use client";

import { useState, useMemo } from "react";
import { PortfolioProject, PortfolioCategory } from "@/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioFilters } from "./PortfolioFilters";

interface PortfolioGridProps {
  initialProjects: PortfolioProject[];
}

export function PortfolioGrid({ initialProjects }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return initialProjects;
    return initialProjects.filter(
      (project) => project.category === selectedCategory
    );
  }, [initialProjects, selectedCategory]);

  return (
    <div>
      <PortfolioFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        totalCount={filteredProjects.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
