import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadgeProps {
  label: string
  className?: string
  variant?: "default" | "outline" | "light"
}

export function TrustBadge({
  label,
  className,
  variant = "default",
}: TrustBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "border-border bg-white text-foreground",
        variant === "outline" &&
          "border-white/30 bg-transparent text-white",
        variant === "light" &&
          "border-gold/30 bg-gold/10 text-gold-dark",
        className
      )}
    >
      <CheckCircle className="h-3 w-3" />
      {label}
    </Badge>
  )
}
