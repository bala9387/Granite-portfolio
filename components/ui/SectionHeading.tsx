import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
  className,
  action,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isRight = align === "right";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-10 md:mb-14",
        isCenter && "items-center text-center mx-auto max-w-3xl",
        isRight && "items-end text-right",
        !isCenter && !isRight && "items-start text-left",
        action && "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn(action ? "max-w-2xl" : "w-full")}>
        {eyebrow && (
          <div className="flex items-center gap-2 mb-3">
            {!isCenter && <span className="w-6 h-[1.5px] bg-[#C99A4A]" />}
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99A4A]">
              {eyebrow}
            </span>
            {isCenter && <span className="w-6 h-[1.5px] bg-[#C99A4A]" />}
          </div>
        )}
        <h2
          className={cn(
            "font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]",
            isDark ? "text-white" : "text-[#171C1E]"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base md:text-lg leading-relaxed max-w-2xl font-normal",
              isDark ? "text-[#A0AAB0]" : "text-[#667078]"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="mt-6 md:mt-0 shrink-0">{action}</div>}
    </div>
  );
}
