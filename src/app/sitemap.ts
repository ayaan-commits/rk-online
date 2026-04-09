import type { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/blog"
import { SITE } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs()

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/mbbs-kazakhstan", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/universities/kokshetau", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/universities", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/admission", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...staticPages.map((page) => ({
      url: `${SITE.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPages,
  ]
}
