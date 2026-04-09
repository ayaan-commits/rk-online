import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "MBBS Abroad Blog — Guides, News & Student Stories",
  description:
    "Latest guides, fee updates, admission news and student stories about studying MBBS in Kazakhstan and other top destinations for Indian students.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient py-16 md:py-20">
        <div className="container-brand text-center">
          <span className="text-gold mb-3 block text-sm font-semibold uppercase tracking-widest">
            Blog
          </span>
          <h1 className="font-heading mb-4 text-3xl font-bold text-white md:text-5xl">
            Guides, News & Student Stories
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Honest insights about studying MBBS abroad — written by people who
            actually know.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <AnimateOnScroll>
            {posts.length === 0 ? (
              <p className="text-muted-foreground text-center">
                No posts yet. Check back soon!
              </p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="bg-muted flex h-48 items-center justify-center rounded-t-lg">
                        <span className="text-muted-foreground text-sm">
                          Cover image placeholder
                        </span>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="mb-2 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="font-heading text-lg leading-tight">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="text-muted-foreground flex items-center gap-4 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime}
                          </span>
                        </div>
                        <span className="text-gold mt-3 inline-flex items-center text-sm font-medium">
                          Read more
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
