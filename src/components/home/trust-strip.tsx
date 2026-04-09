import { RECOGNITIONS } from "@/lib/constants"
import { TrustBadge } from "@/components/shared/trust-badge"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-white py-6">
      <div className="container-brand">
        <AnimateOnScroll direction="none" delay={0}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {RECOGNITIONS.map((rec) => (
              <TrustBadge key={rec.name} label={rec.label} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
