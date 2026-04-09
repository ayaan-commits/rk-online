"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/constants"

interface StickyApplyBarProps {
  universityShortName: string
}

export function StickyApplyBar({ universityShortName }: StickyApplyBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="complementary"
      aria-label="Apply now"
    >
      <div className="bg-navy-gradient border-t border-white/10 px-4 py-3">
        <div className="container-brand flex items-center justify-between gap-4">
          <div className="hidden text-white sm:block">
            <p className="font-heading text-sm font-semibold">
              Ready to start your MBBS journey?
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="text-gold text-xs hover:underline"
            >
              <Phone className="mr-1 inline h-3 w-3" />
              {SITE.phone}
            </a>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark h-11 shrink-0 px-6 text-sm font-semibold text-white"
          >
            <Link href="/admission">
              Apply to {universityShortName}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
