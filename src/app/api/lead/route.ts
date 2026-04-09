import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const leadSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  state: z.string().min(1),
  neetScore: z.number().min(0).max(720).optional(),
  email: z.string().email().optional(),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/).optional(),
  preferredUniversity: z.string().optional(),
  message: z.string().max(500).optional(),
  consent: z.literal(true),
  source: z.string().optional(),
})

// Simple in-memory rate limiter
const rateLimits = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 10
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimits.get(ip)

  if (!record || now > record.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (record.count >= RATE_LIMIT) {
    return true
  }

  record.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot check — if "website" field is filled, it's a bot
    if (body.website) {
      // Silently accept to not tip off the bot
      return NextResponse.json({ success: true })
    }

    const result = leadSchema.safeParse(body)

    if (!result.success) {
      const firstError = result.error.issues[0]
      return NextResponse.json(
        {
          success: false,
          message: firstError?.message ?? "Invalid form data",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const lead = result.data

    // TODO: Wire to production backend. Options:
    // 1. Send email via Resend: await resend.emails.send({ to: SITE.email, ... })
    // 2. Google Sheets: await fetch(SHEETS_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(lead) })
    // 3. CRM API (HubSpot/Zoho): await crmClient.contacts.create(lead)
    // For now: log and return success
    console.info("[LEAD]", {
      name: lead.fullName,
      phone: lead.phone,
      state: lead.state,
      source: lead.source,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Thank you! A senior will call you within 24 hours.",
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
