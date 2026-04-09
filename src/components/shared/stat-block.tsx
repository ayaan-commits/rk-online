"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface StatBlockProps {
  value: number
  suffix?: string
  label: string
  className?: string
}

export function StatBlock({ value, suffix = "", label, className }: StatBlockProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount(0, value, 2000)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  function animateCount(start: number, end: number, duration: number) {
    const startTime = performance.now()

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = Math.floor(start + (end - start) * eased)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <span className="font-heading text-gold text-4xl font-bold md:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-2 text-sm font-medium text-white/80">{label}</p>
    </div>
  )
}
