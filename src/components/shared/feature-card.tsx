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
        "group rounded-lg border border-border/50 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/30 hover:bg-white",
        className
      )}
    >
      <div className="bg-gradient-to-br from-gold/20 to-gold/5 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
        <IconComponent className="text-gold h-7 w-7" />
      </div>
      <h3 className="font-heading text-foreground mb-2 text-lg font-bold group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
