import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import { SITE } from "@/lib/constants"
import { ArrowRight, Phone } from "lucide-react"

export function FinalCta() {
  return (
    <section className="bg-navy-gradient py-16 md:py-20">
      <div className="container-brand text-center">
        <AnimateOnScroll direction="up">
          <h2 className="font-heading mb-4 text-4xl font-bold text-white md:text-5xl">
            2026 intake is filling fast.
            <br className="hidden sm:block" />
            Book your free counseling call today.
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Talk to a senior student and a counselor. Get clarity on fees,
            admission timeline, and what life at Kokshetau actually looks like.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold btn-fill-effect"
            >
              <Link href="/contact">
                Book Free Counseling
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="!bg-white !text-black !border-white hover:!bg-gray-100 font-medium"
            >
              <a href={`tel:${SITE.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {SITE.phone}
              </a>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
