import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  variant = "dark",
  showTagline = true,
  size = "md",
}: LogoProps) {
  const isDark = variant === "dark"; // on dark background

  const sizeStyles = {
    sm: {
      mark: "w-8 h-8",
      primaryText: "text-sm tracking-wider",
      secondaryText: "text-[9px] tracking-widest",
      tagline: "text-[7px] tracking-widest",
    },
    md: {
      mark: "w-10 h-10",
      primaryText: "text-base tracking-widest font-semibold",
      secondaryText: "text-[11px] tracking-[0.25em] font-medium",
      tagline: "text-[8px] tracking-[0.2em]",
    },
    lg: {
      mark: "w-14 h-14",
      primaryText: "text-xl tracking-widest font-bold",
      secondaryText: "text-xs tracking-[0.3em] font-semibold",
      tagline: "text-[9px] tracking-[0.25em]",
    },
  }[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]", className)}
      aria-label="Sri Akshaya Granites - Home"
    >
      {/* Geometric Natural Stone / Triple Peak Granite Mark */}
      <div className={cn("relative flex items-center justify-center shrink-0", sizeStyles.mark)}>
        <svg
          viewBox="0 0 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          {/* Base stone foundation line */}
          <path
            d="M2 38H46"
            stroke="#C99A4A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Main Central Mountain / Pyramid Peak */}
          <path
            d="M24 6L38 34H10L24 6Z"
            fill="url(#goldGradient)"
            opacity="0.95"
          />
          {/* Left Angular Stone Ridge */}
          <path
            d="M14 16L24 34H4L14 16Z"
            fill="#C99A4A"
            opacity="0.75"
          />
          {/* Right Precision Stone Facet */}
          <path
            d="M34 16L44 34H24L34 16Z"
            fill="#E2C07A"
            opacity="0.85"
          />
          {/* Inner Light Chisel Line */}
          <path
            d="M24 6V34"
            stroke="#0D1112"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="goldGradient" x1="10" y1="6" x2="38" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2C07A" />
              <stop offset="1" stopColor="#C99A4A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-serif uppercase leading-tight tracking-wider transition-colors",
            sizeStyles.primaryText,
            isDark ? "text-white group-hover:text-[#E2C07A]" : "text-[#171C1E] group-hover:text-[#C99A4A]"
          )}
        >
          Sri Akshaya
        </span>
        <span
          className={cn(
            "uppercase font-sans tracking-[0.25em] text-[#C99A4A] leading-none mt-0.5",
            sizeStyles.secondaryText
          )}
        >
          Granites
        </span>
        {showTagline && (
          <span
            className={cn(
              "uppercase font-sans tracking-[0.2em] mt-1 text-[#667078] leading-none",
              sizeStyles.tagline
            )}
          >
            Natural Stone. Lasting Value.
          </span>
        )}
      </div>
    </Link>
  );
}
