import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "dark" | "light";
}

export function Breadcrumbs({
  items,
  className,
  theme = "dark",
}: BreadcrumbsProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-xs", className)}
    >
      <Link
        href="/"
        className={cn(
          "flex items-center gap-1 transition-colors hover:text-[#C99A4A]",
          isDark ? "text-gray-400" : "text-gray-500"
        )}
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center space-x-2">
            <ChevronRight
              className={cn(
                "w-3.5 h-3.5 shrink-0",
                isDark ? "text-gray-600" : "text-gray-400"
              )}
            />
            {isLast || !item.href ? (
              <span
                aria-current="page"
                className={cn(
                  "font-medium",
                  isDark ? "text-[#E2C07A]" : "text-[#C99A4A]"
                )}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-[#C99A4A]",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
