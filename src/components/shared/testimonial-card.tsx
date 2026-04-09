import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types"

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className={cn("h-full border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300", className)}>
      <CardContent className="flex h-full flex-col p-6">
        <div className="text-gold/20 text-4xl font-serif leading-none mb-2">&ldquo;</div>
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="text-gold fill-gold h-4.5 w-4.5"
            />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-gold/30">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-foreground text-sm font-semibold">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs">
              {testimonial.year}, {testimonial.university}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
