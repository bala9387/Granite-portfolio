"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/data/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function PortfolioPreview() {
  const previewProjects = portfolioProjects.slice(0, 4);

  return (
    <section className="bg-[#0D1112] py-24 md:py-32 border-b border-[#2A3034] text-white relative overflow-hidden">
      {/* Background Subtle Stone Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#C99A4A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Beautiful Spaces, Enduring Impressions."
          description="A glimpse of our granite tiles in real architectural projects — from contemporary private villas to high-traffic commercial landmarks."
          align="left"
          theme="dark"
          action={
            <Button
              href="/portfolio"
              variant="gold-outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Portfolio
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
