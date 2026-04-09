import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] ?? LucideIcons.Star

  return (
    <div
      className={cn(
        "group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="bg-gold/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
        <IconComponent className="text-gold h-6 w-6" />
      </div>
      <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
