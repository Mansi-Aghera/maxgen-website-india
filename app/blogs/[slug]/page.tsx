

import { notFound } from "next/navigation"
import BlogDetailClient from "@/components/blog/BlogDetailClient"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slug) return notFound()

  const res = await fetch(
    "https://maxproject.pythonanywhere.com/blogs/",
    { cache: "no-store" }
  )

  if (!res.ok) throw new Error("Failed to fetch blogs")

  const json = await res.json()
  const apiBlogs = json?.data || []

  const blogData = apiBlogs.find(
    (b: any) => b.slug === slug
  )

  if (!blogData) return notFound()

  const blog = {
    slug: blogData.slug,
    title: blogData.title,
    category: blogData.status || "Blog",
    image: blogData.featured_image
      ? `https://maxproject.pythonanywhere.com${blogData.featured_image}`
      : "/images/blog/blog1.jpg",
    content: [blogData.content],
  }

  return <BlogDetailClient blog={blog} />

}