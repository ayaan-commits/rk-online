import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "@/types"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const filePath = path.join(BLOG_DIR, filename)
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      author: data.author ?? "RK Online",
      category: data.category ?? "General",
      image: data.image ?? "/images/brand/og-default.jpg",
      readingTime: data.readingTime ?? "5 min read",
    } satisfies BlogPost
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(
  slug: string
): { meta: BlogPost; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContents)

  return {
    meta: {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      author: data.author ?? "RK Online",
      category: data.category ?? "General",
      image: data.image ?? "/images/brand/og-default.jpg",
      readingTime: data.readingTime ?? "5 min read",
    },
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}
