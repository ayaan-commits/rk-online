import { SectionHeader } from "@/components/shared/section-header"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const fees = [
  { component: "Annual Tuition Fee", usd: "$3,800", inr: "~₹3.2 Lakh" },
  { component: "Annual Hostel Fee", usd: "$800", inr: "~₹67,000" },
  { component: "Admission / One-time", usd: "$300", inr: "~₹25,000" },
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
]

export function FeeTable() {
  return (
    <section id="fees" className="section-padding bg-background">
      <div className="container-brand">
        <SectionHeader
          kicker="Transparent Pricing"
          title="No hidden fees. Ever."
          subtitle="Complete fee breakdown for MBBS at Kokshetau State University. What you see is what you pay."
        />

        <AnimateOnScroll>
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-lg border border-border bg-white shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy-dark hover:bg-navy-dark">
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
                {fees.map((row) => (
                  <TableRow
                    key={row.component}
                    className={row.bold ? "bg-gold/5 border-l-4 border-l-gold" : undefined}
                  >
                    <TableCell
                      className={row.bold ? "font-bold text-foreground" : undefined}
                    >
                      {row.component}
                    </TableCell>
                    <TableCell
                      className={`text-right ${row.bold ? "text-gold-text font-bold text-lg" : ""}`}
                    >
                      {row.usd}
                    </TableCell>
                    <TableCell
                      className={`text-right ${row.bold ? "text-gold-text font-bold text-lg" : ""}`}
                    >
                      {row.inr}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-muted-foreground mt-4 text-center text-sm">
            Fees shown are indicative for 2026 intake. No donation. No
            capitation. No agent commissions baked in.
          </p>

          <div className="mt-6 text-center">
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Full Fee Structure (PDF)
            </Button>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
