import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <div className="container-brand text-center">
        <span className="text-gold font-heading mb-4 block text-7xl font-bold">
          404
        </span>
        <h1 className="font-heading text-foreground mb-4 text-3xl font-bold">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <Search className="mr-2 h-4 w-4" />
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
