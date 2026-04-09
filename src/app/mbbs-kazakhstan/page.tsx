import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeader } from "@/components/shared/section-header"
import { LeadForm } from "@/components/shared/lead-form"
import { TrustBadge } from "@/components/shared/trust-badge"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  Clock,
  Globe,
  IndianRupee,
  ShieldCheck,
  GraduationCap,
  CalendarDays,
  CheckCircle,
  Building,
  MessageSquare,
  FileSearch,
  FileCheck,
  Ticket,
  PlaneTakeoff,
} from "lucide-react"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "MBBS in Kazakhstan 2026 — Fees, Admission & Top Universities",
  description:
    "Complete guide to studying MBBS in Kazakhstan for Indian students in 2026. Learn about fees (from ₹23L total), NMC-approved universities, eligibility, admission process, and student life. Free counseling available.",
  keywords: [
    "MBBS in Kazakhstan",
    "MBBS Kazakhstan for Indian students",
    "MBBS abroad 2026",
    "Kokshetau State University",
    "NMC approved MBBS Kazakhstan",
    "MBBS Kazakhstan fees",
    "study medicine Kazakhstan",
  ],
  openGraph: {
    title: "MBBS in Kazakhstan 2026 — Fees, Admission & Top Universities",
    description:
      "Complete guide to studying MBBS in Kazakhstan for Indian students. NMC approved, English medium, ₹23L total cost for 6 years.",
    url: "/mbbs-kazakhstan",
    type: "article",
  },
}

/* ---------------------------------------------------------------------------
 * Data
 * --------------------------------------------------------------------------- */

const QUICK_FACTS = [
  {
    icon: Clock,
    value: "6 Years",
    label: "Program Duration (5 + 1 Internship)",
  },
  {
    icon: Globe,
    value: "English",
    label: "Medium of Instruction",
  },
  {
    icon: IndianRupee,
    value: "~₹23L",
    label: "Total 6-Year Cost",
  },
  {
    icon: ShieldCheck,
    value: "NMC / WHO / FAIMER",
    label: "Full Recognition",
  },
  {
    icon: GraduationCap,
    value: "NEET + 50% PCB",
    label: "Eligibility Criteria",
  },
  {
    icon: CalendarDays,
    value: "September 2026",
    label: "Next Intake",
  },
] as const

const COMPARISON_ROWS = [
  {
    metric: "Avg Annual Tuition",
    kazakhstan: "$3,800 (~₹3.2L)",
    russia: "$5,500 (~₹4.6L)",
    kyrgyzstan: "$3,500 (~₹2.9L)",
    georgia: "$6,000 (~₹5.0L)",
  },
  {
    metric: "Teaching Language",
    kazakhstan: "English",
    russia: "Russian / English",
    kyrgyzstan: "English",
    georgia: "English",
  },
  {
    metric: "NMC Approved",
    kazakhstan: "Yes (all listed)",
    russia: "Selective",
    kyrgyzstan: "Selective",
    georgia: "Selective",
  },
  {
    metric: "Safety Rating",
    kazakhstan: "High",
    russia: "Moderate",
    kyrgyzstan: "Moderate",
    georgia: "High",
  },
  {
    metric: "Indian Community",
    kazakhstan: "500+ students",
    russia: "Large but scattered",
    kyrgyzstan: "Growing",
    georgia: "Small",
  },
  {
    metric: "Winter Weather",
    kazakhstan: "-15°C avg (dry cold)",
    russia: "-20°C avg",
    kyrgyzstan: "-5°C avg",
    georgia: "0°C avg (mild)",
  },
] as const

const ELIGIBILITY_ITEMS = [
  "Qualified NEET (mandatory for NMC eligibility)",
  "10+2 with Physics, Chemistry & Biology — minimum 50% aggregate (40% for SC/ST/OBC reserved categories)",
  "Minimum age 17 years on or before 31 December of admission year",
  "Valid Indian passport (or applied before departure)",
  "Medical fitness certificate from a registered practitioner",
] as const

const ADMISSION_STEPS = [
  {
    icon: MessageSquare,
    step: 1,
    title: "Free Counseling Call",
    description:
      "Speak with a senior student who studied in Kazakhstan. Get honest answers about campus life, academics, and career prospects after graduation.",
  },
  {
    icon: FileSearch,
    step: 2,
    title: "Document Verification",
    description:
      "Submit your NEET scorecard, 10+2 mark sheets, passport copy, and other documents. Our team verifies everything and prepares your university application.",
  },
  {
    icon: FileCheck,
    step: 3,
    title: "Admission Letter",
    description:
      "The university reviews your application and issues an official admission offer letter within 7-14 working days.",
  },
  {
    icon: Ticket,
    step: 4,
    title: "Visa & Travel Prep",
    description:
      "We handle your visa application, flight booking, forex, and complete pre-departure orientation so you arrive prepared.",
  },
  {
    icon: PlaneTakeoff,
    step: 5,
    title: "Arrival & Campus Welcome",
    description:
      "Airport pickup in Kazakhstan, hostel check-in, SIM card, bank account setup, and full campus orientation by our local team.",
  },
] as const

const KOKSHETAU_STATS = [
  { label: "Established", value: "1962" },
  { label: "Indian Students", value: "500+" },
  { label: "Annual Tuition", value: "~₹3.2L" },
  { label: "Program Duration", value: "6 Years" },
  { label: "Medium", value: "English" },
  { label: "Recognition", value: "NMC / WHO" },
] as const

const FEE_BREAKDOWN = [
  { year: "Year 1", tuition: "$3,800", hostel: "$800", total: "$4,600" },
  { year: "Year 2", tuition: "$3,800", hostel: "$800", total: "$4,600" },
  { year: "Year 3", tuition: "$3,800", hostel: "$800", total: "$4,600" },
  { year: "Year 4", tuition: "$3,800", hostel: "$800", total: "$4,600" },
  { year: "Year 5", tuition: "$3,800", hostel: "$800", total: "$4,600" },
  { year: "Year 6 (Internship)", tuition: "$3,800", hostel: "$800", total: "$4,600" },
] as const

const FAQS = [
  {
    question: "What is the visa process for Indian students going to Kazakhstan?",
    answer:
      "Indian students need an invitation letter from the university, which we help obtain. Kazakhstan offers a streamlined student visa process — you submit your passport, admission letter, medical reports, and bank statement to the Kazakhstan embassy or VFS centre. Processing takes 10-20 working days. We guide you through every step, including document preparation and appointment booking.",
  },
  {
    question: "Is Indian food available in Kokshetau?",
    answer:
      "Yes. With 500+ Indian students already at Kokshetau, there is strong demand for Indian food. The university hostel cafeteria offers Indian meal options. Local stores stock Indian spices, rice, lentils, and other essentials. Many students cook their own meals in shared hostel kitchens. There are also Indian restaurants and eateries near campus run by Indian entrepreneurs.",
  },
  {
    question: "How cold does it get in Kazakhstan, and can Indian students handle it?",
    answer:
      "Kokshetau experiences dry continental winters with temperatures dropping to -15°C to -25°C between December and February. However, all university buildings, hostels, classrooms, and hospitals have central heating. Students wear warm winter clothing (available locally at affordable prices). The cold is dry, not humid, making it more tolerable than wet Indian winters. Hundreds of Indian students adapt comfortably every year.",
  },
  {
    question: "Is Kazakhstan safe for Indian students?",
    answer:
      "Kazakhstan is one of the safest countries in Central Asia. Kokshetau is a peaceful university city with very low crime rates. The university campus has 24/7 security, CCTV surveillance, and controlled hostel access. Local people are welcoming and respectful toward international students. India and Kazakhstan share strong diplomatic ties, and the Indian embassy in Nur-Sultan provides consular support.",
  },
  {
    question: "How easy is it to fly home from Kazakhstan?",
    answer:
      "Students can fly home during semester breaks and holidays. There are direct flights from Nur-Sultan (Astana) to Delhi, and connecting flights via Dubai, Istanbul, or Almaty to all major Indian cities. Flight duration is typically 4-6 hours for direct routes or 8-10 hours with a layover. Round-trip tickets cost between ₹20,000 and ₹40,000 depending on the season.",
  },
  {
    question: "What is the monthly living cost in Kokshetau?",
    answer:
      "Monthly living expenses (food, transport, phone, personal items) range between $150-$250 USD (₹12,000-₹20,000). This is significantly lower than living costs in Indian metros. Hostel accommodation is included in the annual fee. The Kazakh Tenge (KZT) is the local currency, and you can easily exchange INR or USD at local banks and exchange counters.",
  },
  {
    question: "What currency is used, and how do students manage money?",
    answer:
      "Kazakhstan uses the Kazakh Tenge (KZT). 1 USD is approximately 450-470 KZT. Students typically open a local bank account for daily expenses and receive money via international transfers (wire, Wise, or Western Union). ATMs and card payments are widely available in Kokshetau. We help students set up banking during the arrival orientation.",
  },
  {
    question: "Is there a language barrier since locals speak Kazakh and Russian?",
    answer:
      "All academic instruction is in English, so there is no language barrier in the classroom. For daily life, basic Russian phrases are helpful and most students pick them up naturally within 2-3 months. The university offers an optional Russian language course in the first year. With 500+ Indian students on campus, you will always have Hindi-speaking peers around.",
  },
  {
    question: "How large is the Indian student community at Kokshetau?",
    answer:
      "Kokshetau State University has one of the largest Indian student communities among Kazakh medical universities — over 500 Indian students from across India. There are active Indian student associations, cultural celebrations (Diwali, Holi, Independence Day), cricket matches, and community kitchens. New students are paired with senior mentors from their home states.",
  },
  {
    question: "What is the NMC screening test after returning to India?",
    answer:
      "After completing your 6-year MBBS in Kazakhstan, you need to clear the FMGE (Foreign Medical Graduate Examination) or NExT (National Exit Test, which will replace FMGE) to obtain a license to practice medicine in India. The exam tests medical knowledge across all subjects. Kokshetau's curriculum is aligned with NMC standards, and the university provides FMGE preparation support during the final year.",
  },
] as const

/* ---------------------------------------------------------------------------
 * Page Component
 * --------------------------------------------------------------------------- */

export default function MbbsKazakhstanPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* 1. Hero                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy-gradient relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-brand relative z-10 py-16 md:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="text-white">
              <span className="text-gold mb-4 inline-block text-sm font-semibold uppercase tracking-widest">
                Complete Guide &middot; 2026 Intake
              </span>
              <h1 className="font-heading mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-[56px] lg:leading-[1.1]">
                MBBS in Kazakhstan &mdash; A Complete 2026 Guide for Indian
                Students
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
                Kazakhstan has become one of the most popular destinations for
                Indian students pursuing MBBS abroad. With NMC-approved
                universities, English-medium teaching, affordable fees, and a
                safe student environment, thousands of Indian students now
                choose Kazakhstan over other countries every year.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <TrustBadge label="NMC Approved" variant="outline" />
                <TrustBadge label="WHO Listed" variant="outline" />
                <TrustBadge label="FAIMER" variant="outline" />
                <TrustBadge label="English Medium" variant="outline" />
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
              >
                <Link href="#apply">
                  Apply for 2026 Intake
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-center text-xl">
                  Free Counseling &mdash; Talk to a Senior
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeadForm source="mbbs_kazakhstan_hero" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Quick Facts Grid                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="At a Glance"
              title="Quick Facts — MBBS in Kazakhstan"
              subtitle="Everything you need to know before you start your application."
            />
          </AnimateOnScroll>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_FACTS.map(({ icon: Icon, value, label }, index) => (
              <AnimateOnScroll key={label} delay={index * 0.08}>
                <Card className="text-center">
                  <CardContent className="pt-2">
                    <div className="bg-gold/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                      <Icon className="text-gold h-6 w-6" />
                    </div>
                    <p className="font-heading text-foreground text-xl font-bold">
                      {value}
                    </p>
                    <p className="text-muted-foreground mt-1 text-sm">{label}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. Why Kazakhstan vs Other Countries                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Country Comparison"
              title="Why Kazakhstan Beats the Competition"
              subtitle="See how Kazakhstan compares to other popular MBBS destinations for Indian students."
            />

            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-lg border border-border bg-white">
                <Table>
                <TableHeader>
                  <TableRow className="bg-[#0A1F44] hover:bg-[#0A1F44]">
                    <TableHead className="text-white font-semibold">
                      Factor
                    </TableHead>
                    <TableHead className="text-white font-semibold">
                      Kazakhstan
                    </TableHead>
                    <TableHead className="text-white font-semibold">
                      Russia
                    </TableHead>
                    <TableHead className="text-white font-semibold">
                      Kyrgyzstan
                    </TableHead>
                    <TableHead className="text-white font-semibold">
                      Georgia
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {COMPARISON_ROWS.map((row) => (
                    <TableRow key={row.metric}>
                      <TableCell className="font-medium">
                        {row.metric}
                      </TableCell>
                      <TableCell className="text-gold font-semibold">
                        {row.kazakhstan}
                      </TableCell>
                      <TableCell>{row.russia}</TableCell>
                      <TableCell>{row.kyrgyzstan}</TableCell>
                      <TableCell>{row.georgia}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

              <p className="text-muted-foreground mt-6 text-center text-sm leading-relaxed">
                Kazakhstan offers the best combination of affordability, quality of
                education, NMC recognition, and student safety among all major
                MBBS-abroad destinations. The growing Indian community and
                English-medium instruction make the transition significantly
                smoother.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. Eligibility Criteria                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Am I Eligible?"
              title="Eligibility Criteria for Indian Students"
              subtitle="Meet these requirements to pursue MBBS in Kazakhstan for the 2026 intake."
            />

            <div className="mx-auto max-w-2xl">
              <Card>
                <CardContent className="pt-2">
                  <ul className="space-y-4">
                    {ELIGIBILITY_ITEMS.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="text-success mt-0.5 h-5 w-5 shrink-0" />
                        <span className="text-foreground text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gold/5 border-gold/20 mt-6 rounded-lg border p-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      <strong>Note for reserved categories:</strong> SC, ST, and
                      OBC candidates need a minimum of 40% aggregate in Physics,
                      Chemistry, and Biology in 10+2, as per NMC guidelines. A
                      valid NEET scorecard is still mandatory regardless of
                      category.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. Admission Process (Vertical Card List)                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Step by Step"
              title="Admission Process — NEET to Campus in 5 Steps"
              subtitle="We handle the paperwork. You focus on your future."
            />
          </AnimateOnScroll>

          <div className="mx-auto max-w-3xl space-y-6">
            {ADMISSION_STEPS.map(
              ({ icon: Icon, step, title, description }) => (
                <AnimateOnScroll key={step} delay={step * 0.1}>
                  <Card className="transition-shadow hover:shadow-md">
                    <CardContent className="flex items-start gap-5 pt-2">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                        <Icon className="text-gold h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-gold mb-1 text-xs font-semibold uppercase tracking-wider">
                          Step {step}
                        </p>
                        <h3 className="font-heading text-foreground mb-1 text-lg font-semibold">
                          {title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              )
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. Partner University Card                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Our Partner University"
              title="Kokshetau State University"
              subtitle="Est. 1962 — One of Kazakhstan's most established universities with 62+ years of academic excellence."
            />

            <div className="mx-auto max-w-3xl">
              <Card className="overflow-hidden">
              <div className="bg-muted flex aspect-[16/7] items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <Building className="mx-auto mb-3 h-16 w-16 opacity-30" />
                  <p className="text-sm">University campus photo</p>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-heading text-foreground mb-4 text-xl font-bold">
                  Shokan Ualikhanov Kokshetau State University
                </h3>
                <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {KOKSHETAU_STATS.map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-gold font-heading text-lg font-bold">
                        {value}
                      </p>
                      <p className="text-muted-foreground text-xs">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Kokshetau State University is recognized by NMC, WHO, FAIMER,
                  and WDOMS. The university offers a 6-year English-medium MBBS
                  program with modern simulation labs, hospital training from
                  Year 3, and a dedicated international student support team.
                  With over 500 Indian students, you will never feel far from
                  home.
                </p>
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/universities/kokshetau">
                    Explore Kokshetau in Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. Fee Breakdown by Year                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="fees" className="section-padding bg-white">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Transparent Pricing"
              title="Year-by-Year Fee Breakdown"
              subtitle="Complete fee structure for MBBS at Kokshetau State University. No hidden charges, no donations."
            />

            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-lg border border-border bg-white">
                <Table>
                <TableHeader>
                  <TableRow className="bg-[#0A1F44] hover:bg-[#0A1F44]">
                    <TableHead className="text-white font-semibold">
                      Year
                    </TableHead>
                    <TableHead className="text-white text-right font-semibold">
                      Tuition (USD)
                    </TableHead>
                    <TableHead className="text-white text-right font-semibold">
                      Hostel (USD)
                    </TableHead>
                    <TableHead className="text-white text-right font-semibold">
                      Total (USD)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {FEE_BREAKDOWN.map((row) => (
                    <TableRow key={row.year}>
                      <TableCell className="font-medium">{row.year}</TableCell>
                      <TableCell className="text-right">
                        {row.tuition}
                      </TableCell>
                      <TableCell className="text-right">{row.hostel}</TableCell>
                      <TableCell className="text-gold text-right font-semibold">
                        {row.total}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-bold">
                    <TableCell className="font-bold">
                      Total (6 Years)
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      $22,800
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      $4,800
                    </TableCell>
                    <TableCell className="text-gold text-right font-bold">
                      $27,600 (~₹23L)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

              <p className="text-muted-foreground mt-4 text-center text-sm">
                Fees shown are indicative for the 2026 intake. Actual amounts may
                vary slightly based on exchange rates. One-time admission fee of
                ~$300 applies in Year 1. No donation or capitation fees.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 8. FAQ                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Your Questions Answered"
              title="Frequently Asked Questions — MBBS in Kazakhstan"
              subtitle="Detailed answers to the most common questions from Indian students and parents."
            />

            <div className="mx-auto max-w-3xl">
              <Accordion className="w-full">
                {FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-foreground text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 9. Final CTA                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="apply" className="bg-navy-gradient py-16 md:py-20">
        <div className="container-brand text-center">
          <AnimateOnScroll>
            <h2 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your MBBS Journey in Kazakhstan?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              The September 2026 intake is open. Speak with a senior student who
              studied in Kazakhstan and get honest, first-hand guidance on
              everything from fees to campus life.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
              >
                <Link href="/contact">
                  Apply Now &mdash; Free Counseling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="!bg-white !text-black !border-white hover:!bg-gray-100 font-medium"
              >
                <a href={`tel:${SITE.phone}`}>
                  Call {SITE.phone}
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
