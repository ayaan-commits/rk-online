import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
    </svg>
  )
}

function Facebook({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function Youtube({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  )
}
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SITE, RECOGNITIONS } from "@/lib/constants"

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
  { label: "Facebook", href: SITE.social.facebook, icon: Facebook },
  { label: "YouTube", href: SITE.social.youtube, icon: Youtube },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
] as const

const fullAddress = `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}, ${SITE.address.country}`

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      <div className="container-brand section-padding">
        {/* Row 1: 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">RK Online</h3>
            <p className="text-sm leading-relaxed text-white/70">
              {SITE.tagline}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Study Destinations */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold">
              Study Destinations
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/mbbs-kazakhstan"
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  Kazakhstan
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  More coming soon
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-start gap-2.5 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/70">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>{fullAddress}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Recognitions */}
        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          {RECOGNITIONS.map((rec) => (
            <Badge
              key={rec.name}
              variant="outline"
              className="border-white/30 text-xs text-white/80"
            >
              {rec.label}
            </Badge>
          ))}
        </div>

        {/* Row 3: Copyright */}
        <Separator className="my-8 bg-white/10" />
        <p className="text-center text-sm text-white/70">
          &copy; 2026 RK Online. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
