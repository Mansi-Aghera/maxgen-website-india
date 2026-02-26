

// // import { notFound } from "next/navigation"
// // import BlogDetailClient from "@/components/blog/BlogDetailClient"

// // export default async function Page({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>
// // }) {
// //   const { slug } = await params

// //   if (!slug) return notFound()

// //   const res = await fetch(
// //     "https://maxproject.pythonanywhere.com/blogs/",
// //     { cache: "no-store" }
// //   )

// //   if (!res.ok) throw new Error("Failed to fetch blogs")

// //   const json = await res.json()
// //   const apiBlogs = json?.data || []

// //   const blogData = apiBlogs.find(
// //     (b: any) => b.slug === slug
// //   )

// //   if (!blogData) return notFound()

// //   const blog = {
// //     slug: blogData.slug,
// //     title: blogData.title,
// //     category: blogData.status || "Blog",
// //     image: blogData.featured_image
// //       ? `https://maxproject.pythonanywhere.com${blogData.featured_image}`
// //       : "/images/blog/blog1.jpg",
// //     content: [blogData.content],
// //   }

// //   return <BlogDetailClient blog={blog} />

// // }

// import { notFound } from "next/navigation"
// import BlogDetailClient from "@/components/blog/BlogDetailClient"
// import { API, mediaUrl } from "@/lib/api"

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params

//   if (!slug) return notFound()

//   const res = await fetch(API.blogs, {
//     cache: "no-store",
//   })

//   if (!res.ok) throw new Error("Failed to fetch blogs")

//   const json = await res.json()
//   const apiBlogs = json?.data || []

//   const blogData = apiBlogs.find(
//     (b: any) => b.slug === slug
//   )

//   if (!blogData) return notFound()

//   const blog = {
//     slug: blogData.slug,
//     title: blogData.title,
//     category: blogData.status || "Blog",
//     image: blogData.featured_image
//       ? mediaUrl(blogData.featured_image)
//       : "/images/blog/blog1.jpg",
//     content: [blogData.content],
//   }

//   return <BlogDetailClient blog={blog} />
// }

// import { notFound } from "next/navigation"
// import BlogDetailClient from "@/components/blog/BlogDetailClient"
// import HomeBlogCard from "@/components/blog/HomeBlogCard"
// import { API, mediaUrl } from "@/lib/api"

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params

//   if (!slug) return notFound()

//   const res = await fetch(API.blogs, {
//     cache: "no-store",
//   })

//   if (!res.ok) throw new Error("Failed to fetch blogs")

//   const json = await res.json()
//   const apiBlogs = json?.data || []

//   const blogData = apiBlogs.find((b: any) => b.slug === slug)

//   if (!blogData) return notFound()

//   type BlogCard = {
//   title: string
//   description: string
//   slug: string
//   image: string
// }

// const related: BlogCard[] = apiBlogs
//   .filter((b: any) => b.slug !== slug)
//   .slice(0, 3)
//   .map((b: any) => ({
//     title: b.title,
//     description: b.short_description || "",
//     slug: b.slug,
//     image: b.featured_image
//       ? mediaUrl(b.featured_image)
//       : "/images/blog/blog1.jpg",
//   }))

//   return (
//     <>
//       <BlogDetailClient blog={blog} />

//       {/* ✅ RELATED BLOGS */}
//       <section className="bg-[#f4f6f9] py-12">
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-2xl font-semibold mb-8">
//             Related Blogs
//           </h3>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//   {related?.map((b) => (
//     <HomeBlogCard key={b.slug} blog={b} />
//   ))}
// </div>
//         </div>
//       </section>
//     </>
//   )
// }

import { notFound } from "next/navigation"
import BlogDetailClient from "@/components/blog/BlogDetailClient"
import HomeBlogCard from "@/components/blog/HomeBlogCard"
import { API, mediaUrl } from "@/lib/api"

type BlogCard = {
  title: string
  description: string
  slug: string
  image: string
}

type BlogDetail = {
  slug: string
  title: string
  category: string
  image: string
  content: string[]
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slug) return notFound()

  const res = await fetch(API.blogs, {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Failed to fetch blogs")

  const json = await res.json()
  const apiBlogs = json?.data || []

  const blogData = apiBlogs.find((b: any) => b.slug === slug)
  if (!blogData) return notFound()

  // ✅ main blog (detail page)
  const blog: BlogDetail = {
    slug: blogData.slug,
    title: blogData.title,
    category: blogData.status || "Blog",
    image: blogData.featured_image
      ? mediaUrl(blogData.featured_image)
      : "/images/blog/blog1.jpg",
    content: [blogData.content],
  }

  // ✅ related blogs
  const related: BlogCard[] = apiBlogs
    .filter((b: any) => b.slug !== slug)
    .slice(0, 3)
    .map((b: any) => ({
      title: b.title,
      description: b.short_description || "",
      slug: b.slug,
      image: b.featured_image
        ? mediaUrl(b.featured_image)
        : "/images/blog/blog1.jpg",
    }))

  return (
    <>
      <BlogDetailClient blog={blog} />

      {/* RELATED BLOGS */}
      <section className="bg-[#f4f6f9] py-12 px-12">
        <div className="mx-12 ">
          <h3 className="text-2xl font-semibold mb-8">
            Related Blogs
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <HomeBlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}