import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react"
import { SITE } from "@/lib/constants"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `${SITE.url}/blog/${slug}`,
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      images: [{ url: post.meta.image, width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient py-12 md:py-16">
        <div className="container-brand max-w-3xl">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4">
            {post.meta.category}
          </Badge>
          <h1 className="font-heading mb-4 text-3xl font-bold text-white md:text-4xl">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.meta.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.meta.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.meta.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-background">
        <div className="container-brand max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-table:border prose-th:bg-primary prose-th:text-primary-foreground prose-th:p-3 prose-td:p-3 prose-td:border">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          <Separator className="my-12" />

          {/* Author Box */}
          <div className="flex items-center gap-4 rounded-lg border border-border bg-white p-6">
            <div className="bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              <User className="text-primary-foreground h-7 w-7" />
            </div>
            <div>
              <p className="font-heading text-foreground font-semibold">
                {post.meta.author}
              </p>
              <p className="text-muted-foreground text-sm">
                Helping Indian students build medical careers at NMC-approved
                universities in Kazakhstan.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-foreground mb-6 text-2xl font-bold">
                Related Articles
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-lg border border-border bg-white p-4 transition-all hover:shadow-sm"
                  >
                    <p className="font-heading text-foreground mb-2 text-sm font-semibold leading-tight group-hover:text-gold">
                      {related.title}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {related.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-lg bg-navy-gradient p-8 text-center">
            <h3 className="font-heading mb-3 text-xl font-bold text-white">
              Talk to us about MBBS in Kazakhstan
            </h3>
            <p className="mb-4 text-sm text-white/80">
              Free counseling from seniors who actually studied there.
            </p>
            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-navy font-semibold"
            >
              <Link href="/contact">
                Get Free Counseling
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
