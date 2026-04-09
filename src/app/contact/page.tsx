import type { Metadata } from "next"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { SITE, WHATSAPP_MESSAGE } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/section-header"
import { LeadForm } from "@/components/shared/lead-form"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Contact RK Online — Free MBBS Counseling for Kazakhstan 2026",
  description:
    "Get in touch with RK Online for free, no-obligation MBBS abroad counseling. Call, WhatsApp, or fill out our inquiry form. Expert guidance from senior students and mentors.",
}

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    description: "Speak directly with a counselor",
  },
  {
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    value: "Send a message",
    href: `https://wa.me/${SITE.whatsapp.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    description: "Quick replies, usually within minutes",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    description: "For detailed queries and documents",
  },
]

const faqItems = [
  {
    question: "What happens on the free call?",
    answer:
      "During the free counseling call, a senior student or counselor will understand your profile — NEET score, budget, preferred location — and give you an honest assessment of your options. There is no sales pressure. We will answer all your questions about university life, fees, eligibility, and the admission timeline.",
  },
  {
    question: "How long does the process take?",
    answer:
      "From the initial inquiry to receiving your admission letter, the process typically takes 2 to 4 weeks. Visa processing adds another 2 to 3 weeks. We handle the entire timeline for you and keep you updated at every step so there are no surprises.",
  },
  {
    question: "Is there any cost for counseling?",
    answer:
      "No. Our counseling is completely free, with no hidden charges. We earn through our direct partnership with the university, not from students. You will never be asked to pay for advice, guidance, or eligibility checks.",
  },
  {
    question: "Can my parents join the call?",
    answer:
      "Absolutely. We encourage parents to join the counseling call. Most of our conversations involve both the student and their family. Parents usually have important questions about safety, food, costs, and career outcomes — and we are happy to address all of them.",
  },
]

const fullAddress = [SITE.address.line1, SITE.address.city, SITE.address.state, SITE.address.pincode].join(", ")

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-gradient py-20 md:py-28">
        <div className="container-brand text-center">
          <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Let&apos;s Talk. Free Counseling, No Obligation.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Whether you have questions about admission, fees, or life in
            Kazakhstan — we are here to help. No pressure, no strings attached.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <AnimateOnScroll key={card.label} delay={index * 0.1}>
                  <a
                    href={card.href}
                    target={card.icon === MessageCircle ? "_blank" : undefined}
                    rel={
                      card.icon === MessageCircle
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex flex-col items-center rounded-xl border border-border bg-white p-8 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="font-heading mb-1 text-lg font-semibold text-foreground">
                      {card.label}
                    </h3>
                    <p className="mb-2 font-medium text-foreground">
                      {card.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </a>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Lead Form ── */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Inquiry Form"
              title="Send Us an Inquiry"
              subtitle="Fill out the form below and a senior student will reach out within 24 hours."
            />
            <div className="mx-auto max-w-lg rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <LeadForm source="contact_page" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Office Map Placeholder ── */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Our Office"
              title="Visit Us"
            />
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-xl border border-border bg-muted p-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <MapPin className="h-7 w-7 text-gold" />
              </div>
              <p className="mb-2 font-semibold text-foreground">{fullAddress}</p>
              <p className="text-sm text-muted-foreground">
                Google Maps embed coming soon
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Pre-counseling FAQ ── */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Before You Call"
              title="Pre-counseling FAQ"
            />
            <div className="mx-auto max-w-3xl">
              <Accordion className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
