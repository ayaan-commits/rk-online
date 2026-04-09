"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { INDIAN_STATES } from "@/lib/constants"
import { leadFormSchema, type LeadFormValues } from "@/lib/validations/lead-form"
import { cn } from "@/lib/utils"
import { ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"

interface LeadFormProps {
  source: string
  className?: string
  variant?: "default" | "compact"
  buttonText?: string
}

export function LeadForm({
  source,
  className,
  variant = "default",
  buttonText = "Get Free Counseling",
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      state: "",
      consent: false as unknown as true,
    },
  })

  async function onSubmit(data: LeadFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message ?? "Something went wrong")
      }

      toast.success("Thanks! A senior will call you within 24 hours.", {
        description: "Check your WhatsApp for updates.",
      })
      form.reset()
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        aria-label="Lead inquiry form"
        className={cn("space-y-4", className)}
      >
        {/* Honeypot field for spam protection */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {INDIAN_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {variant === "default" && (
          <FormField
            control={form.control}
            name="neetScore"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  NEET Score{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0 - 720"
                    min={0}
                    max={720}
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        e.target.value ? Number(e.target.value) : undefined
                      )
                    }
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex items-start gap-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={!!field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-muted-foreground text-xs font-normal leading-relaxed">
                I agree to receive counseling updates via WhatsApp and phone
                calls.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gold hover:bg-gold-dark text-navy w-full font-semibold"
          size="lg"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {buttonText}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>

        <p className="text-muted-foreground text-center text-xs">
          No spam. Direct call from a senior within 24 hours.
        </p>
      </form>
    </Form>
  )
}
