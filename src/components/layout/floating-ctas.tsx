"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { SITE, WHATSAPP_MESSAGE } from "@/lib/constants"

const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function FloatingCtas() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
      >
        <MessageCircle className="size-6" />
      </a>

      {/* Mobile Apply Button */}
      <Link
        href="/contact"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center rounded-lg bg-gold px-4 py-2.5 text-sm font-medium text-navy shadow-lg transition-colors hover:bg-gold-dark focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 md:hidden"
      >
        Apply Now &rarr;
      </Link>
    </>
  )
}
