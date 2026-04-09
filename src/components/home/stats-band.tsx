import { StatBlock } from "@/components/shared/stat-block"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import { Building2, GraduationCap, Trophy, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface StatWithIcon {
  value: number
  suffix: string
  label: string
  icon: LucideIcon
}

const stats: readonly StatWithIcon[] = [
  { value: 62, suffix: "+", label: "Years of Legacy", icon: Building2 },
  { value: 50000, suffix: "+", label: "Alumni Worldwide", icon: Users },
  { value: 500, suffix: "+", label: "Indian MBBS Students", icon: GraduationCap },
  { value: 41, suffix: "st", label: "Ranked in Kazakhstan", icon: Trophy },
]

export function StatsBand() {
  return (
    <section className="relative bg-navy-gradient border-t-2 border-gold/30 py-12 md:py-16">
      {/* Subtle repeating dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-brand relative z-10">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center">
                  <Icon className="h-8 w-8 text-gold/60 mx-auto mb-2" />
                  <StatBlock value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              )
            })}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
