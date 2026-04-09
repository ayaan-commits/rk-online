import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  DollarSign,
  FileText,
  ClipboardList,
  Home,
  BookOpen,
  HelpCircle,
  CheckCircle,
  Users,
  Globe,
  FlaskConical,
  Handshake,
} from "lucide-react"
import { kokshetau } from "@/content/universities/kokshetau"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { TrustBadge } from "@/components/shared/trust-badge"
import { StickyApplyBar } from "@/components/universities/sticky-apply-bar"
import type { University } from "@/types"

/* ------------------------------------------------------------------ */
/*  University registry                                               */
/* ------------------------------------------------------------------ */

const universities: Record<string, University> = {
  kokshetau,
}

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                          */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return [{ slug: "kokshetau" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const uni = universities[slug]

  if (!uni) {
    return { title: "University Not Found" }
  }

  return {
    title: `${uni.name} — MBBS in ${uni.country}`,
    description: uni.description,
  }
}

/* ------------------------------------------------------------------ */
/*  Page component (server)                                           */
/* ------------------------------------------------------------------ */

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const uni = universities[slug]

  if (!uni) {
    notFound()
  }

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="bg-navy-gradient section-padding text-white">
        <div className="container-brand">
          <p className="text-gold mb-3 text-sm font-semibold uppercase tracking-widest">
            Partner University
          </p>
          <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            {uni.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {uni.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Established {uni.established}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {uni.indianStudents}+ Indian Students
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {uni.recognitions.slice(0, 5).map((rec) => (
              <TrustBadge key={rec} label={rec} variant="outline" />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TABS                                                        */}
      {/* ============================================================ */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <AnimateOnScroll>
            <Tabs defaultValue="overview">
            <TabsList
              variant="line"
              className="mb-8 flex w-full flex-wrap gap-1"
            >
              <TabsTrigger value="overview" className="gap-1.5">
                <GraduationCap className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="fees" className="gap-1.5">
                <DollarSign className="h-4 w-4" />
                Fees
              </TabsTrigger>
              <TabsTrigger value="admission" className="gap-1.5">
                <FileText className="h-4 w-4" />
                Admission
              </TabsTrigger>
              <TabsTrigger value="hostel" className="gap-1.5">
                <Home className="h-4 w-4" />
                Hostel &amp; Life
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="gap-1.5">
                <BookOpen className="h-4 w-4" />
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="faq" className="gap-1.5">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </TabsTrigger>
            </TabsList>

            {/* ------ OVERVIEW ------ */}
            <TabsContent value="overview">
              <OverviewTab uni={uni} />
            </TabsContent>

            {/* ------ FEES ------ */}
            <TabsContent value="fees">
              <FeesTab uni={uni} />
            </TabsContent>

            {/* ------ ADMISSION ------ */}
            <TabsContent value="admission">
              <AdmissionTab uni={uni} />
            </TabsContent>

            {/* ------ HOSTEL & LIFE ------ */}
            <TabsContent value="hostel">
              <HostelTab uni={uni} />
            </TabsContent>

            {/* ------ CURRICULUM ------ */}
            <TabsContent value="curriculum">
              <CurriculumTab uni={uni} />
            </TabsContent>

            {/* ------ FAQ ------ */}
            <TabsContent value="faq">
              <FaqTab uni={uni} />
            </TabsContent>
            </Tabs>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STICKY BOTTOM APPLY BAR (client component)                  */}
      {/* ============================================================ */}
      <StickyApplyBar universityShortName={uni.shortName} />
    </>
  )
}

/* ================================================================== */
/*  TAB: Overview                                                     */
/* ================================================================== */

function OverviewTab({ uni }: { uni: University }) {
  return (
    <div className="space-y-10">
      {/* Description */}
      <div>
        <h2 className="font-heading text-foreground mb-4 text-2xl font-bold">
          About {uni.shortName} State University
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {uni.description}
        </p>
      </div>

      <Separator />

      {/* Vision */}
      <div>
        <h3 className="font-heading text-foreground mb-2 text-xl font-semibold">
          Vision
        </h3>
        <p className="text-muted-foreground italic">
          &ldquo;{uni.vision}&rdquo;
        </p>
      </div>

      <Separator />

      {/* Rankings */}
      <div>
        <h3 className="font-heading text-foreground mb-4 text-xl font-semibold">
          Rankings &amp; Recognition
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <RankingCard label="QS Asia" value={`#${uni.ranking.qsAsia}`} />
          <RankingCard
            label="Central Asia"
            value={`#${uni.ranking.centralAsia}`}
          />
          <RankingCard
            label="Kazakhstan"
            value={`#${uni.ranking.kazakhstan}`}
          />
          <RankingCard label="World" value={`#${uni.ranking.world}`} />
        </div>
      </div>

      <Separator />

      {/* Programs */}
      <div>
        <h3 className="font-heading text-foreground mb-4 text-xl font-semibold">
          Academic Programs
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <ProgramCard
            icon={<GraduationCap className="h-5 w-5" />}
            label="Bachelor's"
            count={uni.programs.bachelor}
          />
          <ProgramCard
            icon={<Award className="h-5 w-5" />}
            label="Master's"
            count={uni.programs.master}
          />
          <ProgramCard
            icon={<FlaskConical className="h-5 w-5" />}
            label="PhD"
            count={uni.programs.phd}
          />
        </div>
      </div>

      <Separator />

      {/* International Partnerships */}
      <div>
        <h3 className="font-heading text-foreground mb-4 text-xl font-semibold">
          International Partnerships
        </h3>
        <div className="flex flex-wrap gap-3">
          {uni.partnerships.map((partner) => (
            <Badge
              key={partner}
              variant="outline"
              className="gap-1.5 px-4 py-2 text-sm"
            >
              <Handshake className="h-4 w-4" />
              {partner}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground mt-3 text-sm">
          Active collaborations enabling student exchange, joint research, and
          international exposure.
        </p>
      </div>

      <Separator />

      {/* Research */}
      <div>
        <h3 className="font-heading text-foreground mb-2 text-xl font-semibold">
          Research &amp; Funding
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          The university receives state-funded research grants and participates
          in international research programs through Erasmus+ and other
          partnerships. Students benefit from modern laboratories, simulation
          centers, and a digital library with 24/7 access.
        </p>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  TAB: Fees                                                         */
/* ================================================================== */

function FeesTab({ uni }: { uni: University }) {
  const yearlyTuition = uni.fees.tuitionPerYear
  const yearlyHostel = uni.fees.hostelPerYear
  const yearlyTotal = yearlyTuition + yearlyHostel

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-foreground mb-2 text-2xl font-bold">
          Fee Structure (6-Year MBBS)
        </h2>
        <p className="text-muted-foreground">
          All fees in {uni.fees.currency}. One-time admission fee of $
          {uni.fees.admissionFee} applies.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-navy text-white hover:bg-navy">
            <TableHead className="text-white">Year</TableHead>
            <TableHead className="text-right text-white">Tuition</TableHead>
            <TableHead className="text-right text-white">Hostel</TableHead>
            <TableHead className="text-right text-white">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((year) => (
            <TableRow key={year}>
              <TableCell className="font-medium">Year {year}</TableCell>
              <TableCell className="text-right">
                ${yearlyTuition.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                ${yearlyHostel.toLocaleString()}
              </TableCell>
              <TableCell className="text-right font-semibold">
                ${yearlyTotal.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-gold/10 font-bold">
            <TableCell>6-Year Total</TableCell>
            <TableCell className="text-right">
              ${(yearlyTuition * 6).toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              ${(yearlyHostel * 6).toLocaleString()}
            </TableCell>
            <TableCell className="text-right text-gold-dark">
              ${uni.fees.totalSixYear.toLocaleString()}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="rounded-lg border border-border bg-white p-6">
        <h3 className="font-heading text-foreground mb-3 text-lg font-semibold">
          Payment Information
        </h3>
        <ul className="text-muted-foreground space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-success mt-0.5 h-4 w-4 shrink-0" />
            Fees payable annually at the start of each academic year
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-success mt-0.5 h-4 w-4 shrink-0" />
            Bank transfer accepted in USD or equivalent INR
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-success mt-0.5 h-4 w-4 shrink-0" />
            One-time admission fee of ${uni.fees.admissionFee} paid before
            enrollment
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-success mt-0.5 h-4 w-4 shrink-0" />
            No hidden charges — total cost includes tuition + hostel
          </li>
        </ul>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  TAB: Admission                                                    */
/* ================================================================== */

function AdmissionTab({ uni }: { uni: University }) {
  return (
    <div className="space-y-10">
      {/* Eligibility */}
      <div>
        <h2 className="font-heading text-foreground mb-4 text-2xl font-bold">
          Eligibility Criteria
        </h2>
        <ul className="space-y-3">
          {uni.eligibility.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="text-success mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-muted-foreground text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Documents */}
      <div>
        <h2 className="font-heading text-foreground mb-4 text-2xl font-bold">
          Required Documents
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {uni.documents.map((doc) => (
            <li key={doc} className="flex items-start gap-3">
              <ClipboardList className="text-gold mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-muted-foreground text-sm">{doc}</span>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Admission Process */}
      <div>
        <h2 className="font-heading text-foreground mb-6 text-2xl font-bold">
          5-Step Admission Process
        </h2>
        <div className="space-y-6">
          {uni.admissionSteps.map((step) => (
            <div key={step.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-gold flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                  {step.step}
                </div>
                {step.step < uni.admissionSteps.length && (
                  <div className="bg-gold/30 mt-2 w-0.5 flex-1" />
                )}
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-foreground text-lg font-semibold">
                    {step.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {step.timeline}
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  TAB: Hostel & Life                                                */
/* ================================================================== */

function HostelTab({ uni }: { uni: University }) {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="font-heading text-foreground mb-4 text-2xl font-bold">
          Hostel &amp; Campus Life
        </h2>
        <p className="text-muted-foreground mb-6">
          Comfortable, secure, and student-friendly accommodation with Indian
          food and all essential amenities.
        </p>
      </div>

      {/* Hostel info */}
      <div>
        <h3 className="font-heading text-foreground mb-4 text-xl font-semibold">
          Hostel Amenities
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {uni.hostelInfo.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="text-success mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-muted-foreground text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Indian Food */}
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
        <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
          Indian Food on Campus
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The university hostel has a dedicated Indian mess serving both
          vegetarian and non-vegetarian meals, including North Indian and South
          Indian cuisine. Indian grocery stores in Kokshetau city allow students
          to buy ingredients for home cooking as well.
        </p>
      </div>

      <Separator />

      {/* Facilities */}
      <div>
        <h3 className="font-heading text-foreground mb-4 text-xl font-semibold">
          Campus Facilities
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {uni.facilities.map((facility) => (
            <li key={facility} className="flex items-start gap-3">
              <Globe className="text-gold mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-muted-foreground text-sm">{facility}</span>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Safety */}
      <div className="rounded-lg border border-border bg-white p-6">
        <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
          Safety &amp; Security
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Kokshetau is a peaceful, low-crime city with a population of about
          150,000. The campus provides 24/7 security with CCTV surveillance.
          Kazakhstan is welcoming to Indian students, and the Indian Embassy in
          Astana (300 km away) offers consular support. RK Online maintains a
          local coordinator for emergencies.
        </p>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  TAB: Curriculum                                                   */
/* ================================================================== */

function CurriculumTab({ uni }: { uni: University }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-foreground mb-2 text-2xl font-bold">
          Year-by-Year Curriculum
        </h2>
        <p className="text-muted-foreground">
          6-year MBBS program structure with progressive clinical exposure.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-navy text-white hover:bg-navy">
            <TableHead className="text-white">Year</TableHead>
            <TableHead className="text-white">Phase</TableHead>
            <TableHead className="text-white">Subjects</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {uni.curriculum.map((yr) => (
            <TableRow key={yr.year}>
              <TableCell className="font-heading font-bold">
                Year {yr.year}
              </TableCell>
              <TableCell className="font-medium">{yr.title}</TableCell>
              <TableCell>
                <ul className="list-inside list-disc space-y-1">
                  {yr.subjects.map((subject) => (
                    <li
                      key={subject}
                      className="text-muted-foreground text-sm"
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

/* ================================================================== */
/*  TAB: FAQ                                                          */
/* ================================================================== */

function FaqTab({ uni }: { uni: University }) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-foreground mb-2 text-2xl font-bold">
        Frequently Asked Questions
      </h2>

      <Accordion className="space-y-2">
        {uni.faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            className="rounded-lg border border-border bg-white px-4"
          >
            <AccordionTrigger className="py-4 text-sm font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

/* ================================================================== */
/*  Helper components                                                 */
/* ================================================================== */

function RankingCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 text-center">
      <p className="font-heading text-gold-text text-2xl font-bold">{value}</p>
      <p className="text-muted-foreground mt-1 text-xs font-medium">{label}</p>
    </div>
  )
}

function ProgramCard({
  icon,
  label,
  count,
}: {
  icon: React.ReactNode
  label: string
  count: number
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 text-center">
      <div className="text-gold mx-auto mb-2 flex justify-center">{icon}</div>
      <p className="font-heading text-foreground text-2xl font-bold">
        {count}
      </p>
      <p className="text-muted-foreground text-xs">{label}</p>
    </div>
  )
}
