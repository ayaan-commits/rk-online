import { RECOGNITIONS } from "@/lib/constants"
import { TrustBadge } from "@/components/shared/trust-badge"

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-white py-6">
      <div className="container-brand">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {RECOGNITIONS.map((rec) => (
            <TrustBadge key={rec.name} label={rec.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
