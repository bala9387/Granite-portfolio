import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
  className?: string;
  theme?: "dark" | "light";
}

export function PortfolioCard({
  project,
  className,
  theme = "dark",
}: PortfolioCardProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300",
        isDark
          ? "bg-[#171C1E] border border-[#2A3034] hover:border-[#C99A4A]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          : "bg-white border border-[#DDD9D0] hover:border-[#C99A4A] hover:shadow-[0_16px_30px_rgba(201,154,74,0.1)]",
        className
      )}
    >
      {/* Project Image */}
      <Link
        href={`/portfolio/${project.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 block"
        aria-label={`View architectural project ${project.title}`}
      >
        <Image
          src={project.images.hero}
          alt={`${project.title} featuring ${project.graniteUsed}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1112]/90 via-[#0D1112]/20 to-transparent" />

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <Badge variant="stone" size="sm">
            {project.categoryDisplay}
          </Badge>
        </div>

        {/* Granite Used Callout */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D1112]/80 backdrop-blur-md border border-[#C99A4A]/30 text-[11px] text-[#E2C07A]">
            <Sparkles className="w-3 h-3 text-[#C99A4A]" />
            <span className="font-medium truncate">{project.graniteUsed}</span>
          </div>

          <div className="text-[11px] text-gray-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C99A4A]" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={cn(
              "font-serif text-xl font-semibold tracking-wide group-hover:text-[#C99A4A] transition-colors mb-2",
              isDark ? "text-white" : "text-[#171C1E]"
            )}
          >
            <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
          </h3>
          <p
            className={cn(
              "text-xs line-clamp-2 leading-relaxed mb-4",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {project.description}
          </p>
        </div>

        <div
          className={cn(
            "pt-4 border-t flex items-center justify-between mt-auto",
            isDark ? "border-[#2A3034]" : "border-gray-100"
          )}
        >
          <span className="text-[11px] text-gray-500 font-mono">
            {project.completionYear} • {project.scope.split(" ").slice(0, 3).join(" ")}...
          </span>

          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C99A4A] group-hover:text-[#E2C07A] transition-colors"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
