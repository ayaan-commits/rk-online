import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  kicker?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <span className="text-gold mb-3 block text-sm font-semibold uppercase tracking-wider">
          {kicker}
        </span>
      )}
      <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl lg:text-[40px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
      )}
    </div>
  )
}
