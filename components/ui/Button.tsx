import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "gold-outline" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "gold",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide rounded-full";

    const variantStyles = {
      gold: "bg-[#C99A4A] text-[#0D1112] hover:bg-[#E2C07A] hover:shadow-[0_4px_20px_rgba(201,154,74,0.3)] focus-visible:ring-[#C99A4A] font-semibold active:scale-[0.98]",
      "gold-outline":
        "border border-[#C99A4A] text-[#E2C07A] hover:bg-[#C99A4A] hover:text-[#0D1112] focus-visible:ring-[#C99A4A] active:scale-[0.98]",
      dark: "bg-[#171C1E] text-white border border-[#2A3034] hover:bg-[#222729] hover:border-[#C99A4A] focus-visible:ring-[#C99A4A] active:scale-[0.98]",
      outline:
        "border border-[#DDD9D0] text-[#171C1E] bg-transparent hover:bg-white hover:border-[#C99A4A] focus-visible:ring-[#C99A4A] active:scale-[0.98]",
      ghost:
        "text-[#C99A4A] hover:text-[#E2C07A] hover:bg-white/5 active:scale-[0.98]",
    }[variant];

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-4 gap-2.5",
    }[size];

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, variantStyles, sizeStyles, "group", className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles, sizeStyles, "group", className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
