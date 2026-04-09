"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { NAV_LINKS, UNIVERSITY_NAV, SITE } from "@/lib/constants"
import { MobileNav } from "@/components/layout/mobile-nav"

export function Header() {
  const pathname = usePathname()

  function isActive(href: string): boolean {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const isUniversityActive = UNIVERSITY_NAV.some((uni) =>
    pathname.startsWith(uni.href)
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container-brand flex h-16 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-heading text-xl font-bold text-primary"
        >
          RK Online
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gold",
                isActive(link.href)
                  ? "font-medium text-gold"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Universities Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gold",
                isUniversityActive
                  ? "font-medium text-gold"
                  : "text-foreground/80"
              )}
            >
              Universities
              <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" sideOffset={8}>
              {UNIVERSITY_NAV.map((uni) => (
                <DropdownMenuItem
                  key={uni.href}
                  className={cn(
                    "cursor-pointer",
                    pathname === uni.href && "text-gold font-medium"
                  )}
                  render={<Link href={uni.href} />}
                >
                  {uni.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Phone Button - hidden on mobile */}
          <Button
            variant="ghost"
            className="hidden items-center gap-2 md:inline-flex"
            render={<a href={`tel:${SITE.phone}`} />}
          >
            <Phone className="size-4" />
            Call Now
          </Button>

          {/* Apply Now Button */}
          <Button
            className="hidden bg-gold text-navy hover:bg-gold-dark sm:inline-flex"
            render={<Link href="/contact" />}
          >
            Apply Now
          </Button>

          {/* Mobile Hamburger */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
