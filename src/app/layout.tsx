import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingCtas } from "@/components/layout/floating-ctas"
import { Toaster } from "@/components/ui/sonner"
import { SITE } from "@/lib/constants"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | MBBS Abroad Consultancy for Indian Students 2026`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Study MBBS in Kazakhstan with direct university tie-ups. NMC approved, English medium, ₹4.5L/year. Free counseling by senior students.",
  keywords: [
    "MBBS abroad",
    "MBBS Kazakhstan",
    "Kokshetau University",
    "NMC approved MBBS",
    "MBBS for Indian students",
    "study MBBS abroad 2026",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | MBBS Abroad Consultancy for Indian Students 2026`,
    description:
      "Study MBBS in Kazakhstan with direct university tie-ups. NMC approved, English medium, ₹4.5L/year.",
    images: [
      {
        url: "/images/brand/og-default.jpg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | MBBS Abroad Consultancy`,
    description:
      "Study MBBS in Kazakhstan with direct university tie-ups. NMC approved, English medium.",
    images: ["/images/brand/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground sr-only z-50 rounded px-4 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCtas />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}
