"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { NAV_LINKS, UNIVERSITY_NAV, SITE } from "@/lib/constants"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg font-bold text-primary">
            RK Online
          </SheetTitle>
        </SheetHeader>

        <nav
          className="flex flex-col gap-1 px-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                pathname === link.href
                  ? "text-gold bg-muted font-semibold"
                  : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Separator className="my-2" />

          <p className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Universities
          </p>

          {UNIVERSITY_NAV.map((uni) => (
            <Link
              key={uni.href}
              href={uni.href}
              onClick={handleLinkClick}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted",
                pathname === uni.href
                  ? "text-gold bg-muted font-semibold"
                  : "text-foreground"
              )}
            >
              {uni.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t p-4">
          <Button
            variant="outline"
            className="w-full justify-center gap-2"
            render={<a href={`tel:${SITE.phone}`} />}
            onClick={handleLinkClick}
          >
            <Phone className="size-4" />
            Call Now
          </Button>

          <Button
            className="w-full justify-center bg-gold text-navy hover:bg-gold-dark"
            render={<Link href="/contact" />}
            onClick={handleLinkClick}
          >
            Apply Now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
