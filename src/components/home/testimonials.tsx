"use client"

import { SectionHeader } from "@/components/shared/section-header"
import { TestimonialCard } from "@/components/shared/testimonial-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Testimonial } from "@/types"

// PLACEHOLDER — replace with real student testimonials before launch
const placeholderTestimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    year: "Year 4",
    university: "Kokshetau State University",
    quote:
      "The mentorship from RK Online made all the difference. They didn't just help with admission — they called me every week during my first semester to make sure I was settling in.",
    avatar: "/images/testimonials/placeholder-1.jpg",
    rating: 5,
  },
  {
    name: "Priya Menon",
    year: "Year 3",
    university: "Kokshetau State University",
    quote:
      "I was nervous about food and weather. Turns out, there's a whole Indian community here. The hostel even serves dal and rice. It feels like a small piece of home.",
    avatar: "/images/testimonials/placeholder-2.jpg",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    year: "Year 5",
    university: "Kokshetau State University",
    quote:
      "The fees are genuinely what they told me. No surprises, no hidden charges. My parents checked with three other consultancies, and RK Online was the most transparent.",
    avatar: "/images/testimonials/placeholder-3.jpg",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    year: "Graduate",
    university: "Kokshetau State University",
    quote:
      "I cleared FMGE in my first attempt. The clinical training at Kokshetau is solid — real patients, real hospitals, not just theory. That's what made the difference.",
    avatar: "/images/testimonials/placeholder-4.jpg",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    year: "Year 2",
    university: "Kokshetau State University",
    quote:
      "Coming from a small town, I never thought studying abroad was possible. RK Online handled everything — visa, tickets, even my hostel room was ready when I landed.",
    avatar: "/images/testimonials/placeholder-5.jpg",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    year: "Year 3",
    university: "Kokshetau State University",
    quote:
      "The campus is safe, the teachers are approachable, and there's a strong sense of community among Indian students. I genuinely recommend it.",
    avatar: "/images/testimonials/placeholder-6.jpg",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        <SectionHeader
          kicker="Student Voices"
          title="What our students say."
          subtitle="Real experiences from Indian MBBS students at Kokshetau State University."
        />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {placeholderTestimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 hidden md:flex" />
          <CarouselNext className="-right-4 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
