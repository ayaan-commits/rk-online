import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeader } from "@/components/shared/section-header"
import { LeadForm } from "@/components/shared/lead-form"
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
  CheckCircle,
  FileText,
  MessageSquare,
  FileSearch,
  FileCheck,
  Ticket,
  PlaneTakeoff,
  CalendarDays,
  ArrowRight,
  GraduationCap,
  Banknote,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "MBBS Admission Process in Kazakhstan — Eligibility, Documents, Fees",
  description:
    "Step-by-step MBBS admission guide for Indian students in Kazakhstan. Learn about eligibility criteria, required documents, fee structure, payment schedule, scholarships, and the complete admission timeline for 2026.",
  keywords: [
    "MBBS admission Kazakhstan",
    "MBBS admission process",
    "Kazakhstan MBBS eligibility",
    "documents for MBBS abroad",
    "MBBS Kazakhstan fees",
    "NEET cutoff Kazakhstan",
    "MBBS abroad admission 2026",
  ],
  openGraph: {
    title:
      "MBBS Admission Process in Kazakhstan — Eligibility, Documents, Fees",
    description:
      "Complete admission guide for Indian students. Eligibility, documents, fees, payment schedule, and month-by-month timeline.",
    url: "/admission",
    type: "article",
  },
}

/* ---------------------------------------------------------------------------
 * Data
 * --------------------------------------------------------------------------- */

const ELIGIBILITY_ITEMS = [
  {
    label: "NEET Qualified",
    detail: "Must have appeared for and qualified NEET as per NMC norms",
  },
  {
    label: "50% in PCB (10+2)",
    detail:
      "Minimum 50% aggregate in Physics, Chemistry & Biology (40% for SC/ST/OBC)",
  },
  {
    label: "Age 17 to 25 Years",
    detail:
      "Must be at least 17 years old on or before 31 December of admission year",
  },
  {
    label: "Valid Indian Passport",
    detail: "Passport must have at least 18 months validity from date of travel",
  },
  {
    label: "Medical Fitness Certificate",
    detail:
      "From a registered medical practitioner, including HIV and drug screening",
  },
] as const

const DOCUMENTS = [
  "NEET Scorecard",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "Passport Copy (all pages)",
  "Birth Certificate",
  "Passport-size Photos (6 copies, white background)",
  "Medical Fitness Certificate",
  "Migration Certificate",
  "Character Certificate from School",
] as const

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    step: 1,
    title: "Free Counseling & Assessment",
    description:
      "Book a free counseling session with a senior student who actually studied in Kazakhstan. We assess your NEET score, academic profile, and preferences to recommend the right university. No pressure, no hidden commitments — just honest, first-hand guidance.",
    timeline: "Day 1 - 3",
  },
  {
    icon: FileSearch,
    step: 2,
    title: "Document Collection & Verification",
    description:
      "Submit your academic documents, passport, and photographs. Our admissions team verifies every document against university and NMC requirements. We flag any issues early so there are no surprises later. You receive a detailed checklist and submission confirmation.",
    timeline: "Week 1 - 2",
  },
  {
    icon: FileCheck,
    step: 3,
    title: "University Application & Admission Letter",
    description:
      "We submit your complete application to the university on your behalf. The university reviews your profile and issues an official admission offer letter within 7-14 working days. Once received, you confirm your seat by paying the admission fee.",
    timeline: "Week 2 - 4",
  },
  {
    icon: Ticket,
    step: 4,
    title: "Visa Processing & Travel Preparation",
    description:
      "With your admission letter in hand, we initiate the student visa application. This includes invitation letter from the university, embassy appointment booking, and document preparation. Simultaneously, we help with flight booking, forex exchange, and a comprehensive pre-departure orientation.",
    timeline: "Week 4 - 8",
  },
  {
    icon: PlaneTakeoff,
    step: 5,
    title: "Arrival, Hostel & Campus Orientation",
    description:
      "Our on-ground team in Kazakhstan receives you at the airport. We handle hostel check-in, local SIM card, bank account opening, university registration, and a full campus orientation. Senior Indian students introduce you to campus life, local stores, and everything you need to settle in.",
    timeline: "Month 2 - 3",
  },
] as const

const FEE_ROWS: { component: string; usd: string; inr: string; bold?: boolean }[] = [
  { component: "Annual Tuition Fee", usd: "$3,800", inr: "~₹3.2 Lakh" },
  { component: "Annual Hostel Fee", usd: "$800", inr: "~₹67,000" },
  {
    component: "Admission Fee (one-time)",
    usd: "$300",
    inr: "~₹25,000",
  },
  {
    component: "Total Annual Cost",
    usd: "$4,900",
    inr: "~₹4.1 Lakh",
    bold: true,
  },
  {
    component: "Total 6-Year Cost",
    usd: "$27,600",
    inr: "~₹23 Lakh",
    bold: true,
  },
] as const

const PAYMENT_SCHEDULE = [
  {
    when: "Before Departure",
    what: "Admission fee + first semester tuition",
    amount: "~$4,100",
  },
  {
    when: "Semester 1 Arrival",
    what: "Hostel fee for the year",
    amount: "~$800",
  },
  {
    when: "Each Subsequent Semester",
    what: "Tuition + hostel (paid semester-wise or annually)",
    amount: "~$2,300/sem",
  },
] as const

const TIMELINE_MONTHS = [
  {
    month: "May 2026",
    title: "Applications Open",
    description:
      "Start your application early. Book a free counseling call and begin document preparation.",
  },
  {
    month: "June 2026",
    title: "Document Preparation",
    description:
      "Collect all required documents. Get passport renewed if needed. Obtain medical fitness certificate.",
  },
  {
    month: "July - August 2026",
    title: "Admission Letters Issued",
    description:
      "University reviews applications and issues official admission offer letters. Confirm your seat.",
  },
  {
    month: "August - September 2026",
    title: "Visa Processing",
    description:
      "Submit visa application at the Kazakhstan embassy or VFS centre. Book flights and prepare for departure.",
  },
  {
    month: "September - October 2026",
    title: "Travel & Arrival",
    description:
      "Fly to Kazakhstan. Airport pickup, hostel check-in, registration, and campus orientation.",
  },
] as const

const FAQS = [
  {
    question: "What is the minimum NEET cutoff score for MBBS in Kazakhstan?",
    answer:
      "There is no specific NEET cutoff for Kazakhstan universities. You need to have qualified NEET — meaning you meet the NMC-mandated minimum percentile (50th percentile for General, 40th for SC/ST/OBC, 45th for PwD). Unlike Indian private colleges, there is no merit-based competitive cutoff. If you have qualified NEET, you are eligible.",
  },
  {
    question: "Is there an upper age limit for MBBS admission in Kazakhstan?",
    answer:
      "Most Kazakhstan universities accept students aged 17 to 25. You must be at least 17 years old on or before 31 December of the admission year. Some universities may consider applications from students above 25 on a case-by-case basis. There is no upper age limit set by NMC for studying MBBS abroad.",
  },
  {
    question: "Can I apply if I have a gap year after 12th?",
    answer:
      "Yes. Gap years are not a disqualifying factor for admission to Kazakhstan universities. Whether you took a gap year for NEET preparation or personal reasons, you can apply as long as your NEET score is valid (NEET scores are valid for the year of the exam). You will need to explain the gap in your application, but it does not affect your eligibility.",
  },
  {
    question: "How long does the complete admission process take?",
    answer:
      "From initial counseling to arrival at campus, the entire process typically takes 8-12 weeks. Document verification takes 1-2 weeks, the admission letter is issued in 2-3 weeks, and visa processing takes another 2-4 weeks. We recommend starting the process at least 3 months before the September intake to allow buffer time.",
  },
  {
    question: "Can I pay fees in installments?",
    answer:
      "Yes. Most Kazakhstan universities allow semester-wise fee payments. The admission fee and first semester tuition are paid before departure. After that, fees can be paid at the start of each semester. We help coordinate the payment schedule and provide guidance on the most cost-effective transfer methods.",
  },
  {
    question: "Are education loans available for MBBS in Kazakhstan?",
    answer:
      "Yes. Several Indian banks and NBFCs offer education loans for MBBS abroad, including programs in Kazakhstan. Banks like SBI, Bank of Baroda, and Credila typically finance up to ₹20-30 Lakhs. You will need your admission letter, fee structure, and co-borrower documents. We can connect you with loan advisors who specialize in MBBS abroad financing.",
  },
  {
    question: "Are there any scholarships available?",
    answer:
      "Some Kazakhstan universities offer merit-based scholarships or fee waivers for top-performing students. Additionally, the Kazakhstan government offers the Bolashak scholarship for international students, though it is highly competitive. We recommend applying early and maintaining strong academic performance to maximize scholarship opportunities.",
  },
  {
    question: "When should I start my application for the 2026 intake?",
    answer:
      "The ideal time to begin is May-June 2026, immediately after your NEET results. Early applicants get priority for hostel allocation and seat confirmation. However, applications are accepted until August as long as seats are available. We recommend booking a free counseling call now to understand the process and prepare your documents in advance.",
  },
] as const

/* ---------------------------------------------------------------------------
 * Page Component
 * --------------------------------------------------------------------------- */

export default function AdmissionPage() {
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
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="text-gold mb-4 inline-block text-sm font-semibold uppercase tracking-widest">
              Admission Guide &middot; 2026 Intake
            </span>
            <h1 className="font-heading mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Your Admission Journey &mdash; Step by Step
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
              From NEET result to your first day at a Kazakhstan university, we
              guide you through every stage. Transparent process, honest
              counseling, and zero hidden costs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold"
            >
              <Link href="#apply-form">
                Start Your Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. Eligibility Checklist                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Am I Eligible?"
              title="Eligibility Checklist"
              subtitle="You need to meet all of the following criteria to be eligible for MBBS admission in Kazakhstan."
            />

            <div className="mx-auto max-w-2xl">
              <Card>
                <CardContent className="pt-2">
                  <ul className="space-y-5">
                    {ELIGIBILITY_ITEMS.map(({ label, detail }) => (
                      <li key={label} className="flex items-start gap-3">
                        <CheckCircle className="text-success mt-0.5 h-5 w-5 shrink-0" />
                        <div>
                          <p className="text-foreground font-semibold">
                            {label}
                          </p>
                          <p className="text-muted-foreground mt-0.5 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gold/5 border-gold/20 mt-6 rounded-lg border p-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      <strong>Reserved categories:</strong> SC, ST, and OBC
                      candidates need only 40% aggregate in PCB (10+2) as per NMC
                      guidelines. NEET qualification remains mandatory for all
                      categories.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. Documents Required                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="What You Need"
              title="Documents Required"
              subtitle="Prepare these documents before starting your application. We verify everything for you."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DOCUMENTS.map((doc) => (
                <Card key={doc} className="transition-shadow hover:shadow-md">
                  <CardContent className="flex items-center gap-3 pt-2">
                    <div className="bg-gold/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <FileText className="text-gold h-5 w-5" />
                    </div>
                    <p className="text-foreground text-sm font-medium">{doc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed">
              All documents should be original or notarized copies. Apostille
              (MEA attestation) may be required for some documents. We guide you
              through the attestation process.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. Detailed 5-Step Process                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="The Complete Process"
              title="5-Step Admission Journey"
              subtitle="We handle the logistics so you can focus on starting your medical career."
            />
          </AnimateOnScroll>

          <div className="mx-auto max-w-3xl space-y-8">
            {PROCESS_STEPS.map(
              ({ icon: Icon, step, title, description, timeline }) => (
                <AnimateOnScroll key={step} delay={step * 0.1}>
                  <Card className="transition-shadow hover:shadow-md">
                    <CardContent className="pt-2">
                      <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                          <Icon className="text-gold h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-3">
                            <span className="bg-navy text-primary-foreground inline-flex h-6 items-center rounded-full px-2.5 text-xs font-semibold">
                              Step {step}
                            </span>
                            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                              {timeline}
                            </span>
                          </div>
                          <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                            {title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {description}
                          </p>
                        </div>
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
      {/* 5. Fee Structure + Payment Schedule                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Transparent Pricing"
              title="Fee Structure & Payment Schedule"
              subtitle="What you see is what you pay. No donations, no capitation, no hidden charges."
            />

            <div className="mx-auto max-w-3xl space-y-10">
              {/* Fee table */}
              <div className="overflow-hidden rounded-lg border border-border bg-white">
                <Table>
                <TableHeader>
                  <TableRow className="bg-[#0A1F44] hover:bg-[#0A1F44]">
                    <TableHead className="text-white font-semibold">
                      Component
                    </TableHead>
                    <TableHead className="text-white text-right font-semibold">
                      USD
                    </TableHead>
                    <TableHead className="text-white text-right font-semibold">
                      INR
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {FEE_ROWS.map((row) => (
                    <TableRow key={row.component} className={row.bold ? "bg-[#C9A227]/5 border-l-4 border-l-[#C9A227]" : ""}>
                      <TableCell
                        className={row.bold ? "font-bold text-[#0A1F44]" : undefined}
                      >
                        {row.component}
                      </TableCell>
                      <TableCell
                        className={`text-right ${row.bold ? "text-[#0A1F44] font-bold" : ""}`}
                      >
                        {row.usd}
                      </TableCell>
                      <TableCell
                        className={`text-right ${row.bold ? "text-[#0A1F44] font-bold text-lg" : ""}`}
                      >
                        {row.inr}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Payment schedule */}
            <div>
              <h3 className="font-heading text-foreground mb-4 text-xl font-bold">
                Payment Schedule
              </h3>
              <div className="overflow-hidden rounded-lg border border-border bg-white">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead className="font-semibold">When</TableHead>
                      <TableHead className="font-semibold">What</TableHead>
                      <TableHead className="text-right font-semibold">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PAYMENT_SCHEDULE.map((row) => (
                      <TableRow key={row.when}>
                        <TableCell className="font-medium">
                          {row.when}
                        </TableCell>
                        <TableCell>{row.what}</TableCell>
                        <TableCell className="text-gold text-right font-semibold">
                          {row.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

              <p className="text-muted-foreground text-center text-sm">
                Fees are indicative for the 2026 intake and subject to minor
                variations based on exchange rates. All payments are made directly
                to the university.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. Scholarships & Loans (PLACEHOLDER)                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Financial Support"
              title="Scholarships & Education Loans"
              subtitle="Explore financing options to fund your MBBS journey in Kazakhstan."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Scholarships */}
            <Card>
              <CardContent className="pt-2">
                <div className="bg-gold/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <GraduationCap className="text-gold h-6 w-6" />
                </div>
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  University Scholarships
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Some Kazakhstan universities offer merit-based scholarships or
                  tuition fee waivers for academically outstanding students.
                  Eligibility criteria vary by university and are typically based
                  on NEET scores and 10+2 performance.
                </p>
                <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-xs text-amber-800">
                    PLACEHOLDER: Specific scholarship details and amounts will
                    be updated once confirmed with partner universities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education loans */}
            <Card>
              <CardContent className="pt-2">
                <div className="bg-gold/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <Banknote className="text-gold h-6 w-6" />
                </div>
                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                  Education Loan Options
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Several Indian banks and NBFCs provide education loans for
                  MBBS abroad programs. Banks like SBI, Bank of Baroda, and
                  Credila offer loans of up to ₹20-30 Lakhs with competitive
                  interest rates. We can connect you with experienced loan
                  advisors.
                </p>
                <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-xs text-amber-800">
                    PLACEHOLDER: Specific bank partnerships and loan terms will
                    be updated with confirmed details.
                  </p>
                </div>
              </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. Timeline Calendar                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Plan Your Year"
              title="2026 Admission Timeline"
              subtitle="Month-by-month roadmap from application to arrival."
            />
          </AnimateOnScroll>

          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-0">
              {/* Vertical connector line */}
              <div
                className="absolute left-[27px] top-6 bottom-6 hidden w-[2px] bg-border md:block"
                aria-hidden="true"
              />

              {TIMELINE_MONTHS.map(({ month, title, description }, index) => (
                <AnimateOnScroll key={month} delay={index * 0.1}>
                  <div className="group relative flex gap-5 py-5">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                      <CalendarDays className="text-gold h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                        {month}
                      </span>
                      <h3 className="font-heading text-foreground mt-1 text-lg font-semibold">
                        {title}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 8. FAQ                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            <SectionHeader
              kicker="Common Questions"
              title="Admission FAQs"
              subtitle="Answers to the most common questions about the MBBS admission process."
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
      {/* 9. Apply CTA with LeadForm                                         */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="apply-form"
        className="bg-navy-gradient relative overflow-hidden py-16 md:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-brand relative z-10">
          <AnimateOnScroll>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Start Your MBBS Application?
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Fill in your details below and a senior student will call you
                within 24 hours with honest, first-hand guidance.
              </p>

              <Card className="border-0 text-left shadow-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading text-center text-xl">
                    Apply for 2026 Intake
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LeadForm source="admission_page" />
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
