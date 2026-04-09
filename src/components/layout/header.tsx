"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, ChevronDown, Menu, X } from "lucide-react"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const filteredLinks = useMemo(
    () => NAV_LINKS.filter((link) => link.href !== "/"),
    []
  )

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white"
      )}
    >
      <div className="container-brand flex h-18 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group relative flex flex-col items-start">
          <span className="font-heading text-2xl font-bold tracking-tight text-primary">
            RK Online
          </span>
          <span className="mt-0.5 h-[3px] w-6 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gold",
                isActive(link.href)
                  ? "text-gold"
                  : "text-foreground/80"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gold" />
              )}
            </Link>
          ))}

          {/* Universities Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gold",
                isUniversityActive
                  ? "text-gold"
                  : "text-foreground/80"
              )}
            >
              Universities
              <ChevronDown className="size-3.5" />
              {isUniversityActive && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gold" />
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" sideOffset={8}>
              {UNIVERSITY_NAV.map((uni) => (
                <DropdownMenuItem
                  key={uni.href}
                  className={cn(
                    "cursor-pointer border-l-2 border-transparent pl-3 transition-colors hover:border-gold",
                    pathname === uni.href && "text-gold font-medium border-gold"
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
            className="hidden rounded-full bg-gold text-navy shadow-md hover:bg-gold-dark hover:shadow-lg sm:inline-flex"
            render={<Link href="/contact" />}
          >
            Apply Now
          </Button>

          {/* Mobile Hamburger — toggles between Menu and X */}
          <MobileNav open={mobileOpen} onOpenChange={setMobileOpen}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </MobileNav>
        </div>
      </div>
    </header>
  )
}
