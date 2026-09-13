import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  FileText,
} from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Sri Akshaya Granites" };
  }

  return {
    title: `${project.title} | Sri Akshaya Granites Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Sri Akshaya Granites`,
      description: project.description,
      images: [{ url: project.images.hero }],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-[#0D1112] text-white min-h-screen">
      {/* Top Breadcrumbs Bar */}
      <div className="border-b border-[#2A3034] bg-[#171C1E]/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
            theme="dark"
          />
        </div>
      </div>

      {/* Main Project Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Project Heading & Key Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="md">
                {project.categoryDisplay}
              </Badge>
              <span className="text-xs text-gray-400 font-mono">
                Completed {project.completionYear}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 py-3 border-y border-[#2A3034]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C99A4A]" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C99A4A]" />
                <span>Year: {project.completionYear}</span>
              </div>
            </div>

            <p className="text-base text-gray-300 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Stone Material Highlight Card */}
            <div className="p-5 rounded-xl bg-[#171C1E] border border-[#2A3034] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C99A4A] block mb-1">
                  Primary Granite Specified
                </span>
                <h3 className="font-serif text-lg font-semibold text-white">
                  {project.graniteUsed}
                </h3>
              </div>
              {project.graniteSlug && (
                <Button
                  href={`/products/${project.graniteSlug}`}
                  variant="gold-outline"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Granite Details
                </Button>
              )}
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E2C07A]">
                Key Project Highlights
              </h3>
              <div className="space-y-2.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A3034] shadow-2xl">
              <Image
                src={project.images.hero}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 rounded-xl bg-[#171C1E] border border-[#2A3034] text-xs text-gray-400">
              <strong className="text-white block mb-1">Project Scope:</strong>
              {project.scope}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {project.images.gallery.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#2A3034]">
            <h2 className="font-serif text-2xl font-semibold text-white mb-6">
              Installation Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.images.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-xl overflow-hidden border border-[#2A3034] shadow-lg group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} gallery detail ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner: Have a Similar Project? */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[#171C1E] border border-[#C99A4A]/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C99A4A] block mb-2">
              Plan Your Installation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
              Have a similar architectural project?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Our factory can furnish custom-sized tiles, bookmatched slabs, and edge profiles tailored to your structural drawings.
            </p>
          </div>

          <Button
            href={`/request-quote?stone=${project.graniteSlug || ""}`}
            variant="gold"
            size="lg"
            icon={<FileText className="w-4 h-4" />}
            className="shrink-0"
          >
            Request a Quote
          </Button>
        </div>

        {/* Related Projects */}
        <div className="mt-20 pt-12 border-t border-[#2A3034]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-semibold text-white">
              Related Projects
            </h2>
            <Link
              href="/portfolio"
              className="text-xs text-[#C99A4A] hover:text-[#E2C07A] flex items-center gap-1 font-medium"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProjects.map((p) => (
              <PortfolioCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
