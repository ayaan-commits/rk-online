import { StatBlock } from "@/components/shared/stat-block"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"

const stats = [
  { value: 62, suffix: "+", label: "Years of Legacy" },
  { value: 50000, suffix: "+", label: "Alumni Worldwide" },
  { value: 500, suffix: "+", label: "Indian MBBS Students" },
  { value: 41, suffix: "st", label: "Ranked in Kazakhstan" },
]

export function StatsBand() {
  return (
    <section className="bg-navy-gradient py-12 md:py-16">
      <div className="container-brand">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
