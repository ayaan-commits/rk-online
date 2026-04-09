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
    <Card className={cn("h-full border-border bg-white", className)}>
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="text-gold fill-gold h-4 w-4"
            />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
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
