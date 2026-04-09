import { SectionHeader } from "@/components/shared/section-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is MBBS from Kokshetau recognized in India?",
    answer:
      "Yes. Shokan Ualikhanov Kokshetau State University is recognized by the National Medical Commission (NMC), WHO, FAIMER, and WDOMS. Graduates are eligible to take the FMGE (Foreign Medical Graduate Examination) to practice medicine in India. The degree is also eligible for USMLE (USA) and PLAB (UK) pathways.",
  },
  {
    question: "What is the total cost for 6 years at Kokshetau?",
    answer:
      "The total estimated cost for the full 6-year MBBS program (including tuition, hostel, and living expenses) is approximately $27,600 USD or ₹23 Lakhs. Annual tuition is around $3,800 and hostel is about $800 per year. There are no donation or capitation fees.",
  },
  {
    question: "Do I need IELTS or any language test?",
    answer:
      "No. Kokshetau State University does not require IELTS, TOEFL, or any other language proficiency test for admission to the English-medium MBBS program. The entire course is taught in English.",
  },
  {
    question: "Is Indian food available in the hostel?",
    answer:
      "Yes. The university hostel provides diverse meal options including Indian cuisine. There is a strong Indian student community of 500+ students, and Indian spices and ingredients are available in local stores. Many students also cook in shared hostel kitchens.",
  },
  {
    question: "Can my child come home during holidays?",
    answer:
      "Yes. Students get regular semester breaks and holidays during which they can travel home. Direct and connecting flights from Kazakhstan to major Indian cities are available. The typical flight duration is 4-6 hours depending on the route.",
  },
  {
    question: "What happens after MBBS — FMGE, USMLE, PG in India?",
    answer:
      "After completing your 6-year MBBS, you can take the FMGE screening test to practice medicine in India. You can also pursue USMLE (for USA), PLAB (for UK), or apply for PG (MD/MS) entrance exams in India. Many Kokshetau graduates successfully clear FMGE and practice across India.",
  },
  {
    question: "Is Kokshetau safe for Indian students?",
    answer:
      "Yes. Kazakhstan is considered one of the safest Central Asian countries. Kokshetau is a peaceful university city with low crime rates. The university provides 24/7 security with CCTV surveillance, controlled hostel entry, and a dedicated support team for international students.",
  },
  {
    question: "What if my NEET score is low?",
    answer:
      "Kokshetau accepts students who have qualified NEET (passed the cutoff), regardless of how high the score is. Unlike Indian private colleges, there's no competitive merit-based cutoff beyond the NMC-mandated minimum. If you've passed NEET with 50% in PCB (40% for reserved categories), you're eligible.",
  },
]

export function FaqSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <SectionHeader
          kicker="Questions Parents Ask"
          title="Everything you're wondering, answered."
        />

        <div className="mx-auto max-w-3xl">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
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
      </div>
    </section>
  )
}
