"use client"

import { RECOGNITIONS } from "@/lib/constants"
import { CheckCircle } from "lucide-react"

export function TrustStrip() {
  // Double the items for seamless loop
  const items = [...RECOGNITIONS, ...RECOGNITIONS]

  return (
    <section className="border-y border-border bg-white py-4 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee flex shrink-0 items-center gap-12">
          {items.map((rec, i) => (
            <div key={`${rec.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-foreground">{rec.label}</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-12" aria-hidden="true">
          {items.map((rec, i) => (
            <div key={`dup-${rec.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-semibold text-foreground">{rec.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
