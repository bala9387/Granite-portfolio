import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "stone" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "stone",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    gold: "bg-[#C99A4A]/15 text-[#E2C07A] border border-[#C99A4A]/30",
    dark: "bg-[#171C1E] text-white/80 border border-[#2A3034]",
    stone: "bg-[#222729] text-gray-200 border border-[#2A3034]",
    outline: "bg-transparent text-gray-400 border border-[#2A3034]",
  }[variant];

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide",
    md: "text-xs px-3 py-1 font-medium tracking-wide",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md transition-colors",
        variantStyles,
        sizeStyles,
        className
      )}
    >
      {children}
    </span>
  );
}
