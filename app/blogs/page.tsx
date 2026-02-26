

// "use client"

// import { useEffect, useState } from "react"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import HomeBlogCard from "@/components/blog/HomeBlogCard"
// import ServiceQuoteForm from "@/components/services/ServiceQuoteForm"
// import BlogList from "@/components/blog/BlogList"

// type Blog = {
//   title: string
//   description: string
//   image: string
//   slug: string
// }

// export default function BlogsPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([])

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/blogs/")
//       .then((res) => res.json())
//       .then((json) => {
//         const apiBlogs = json?.data || []

//         const mapped: Blog[] = apiBlogs.map((b: any) => ({
//           title: b.title,
//           description: b.short_description || "",
//           slug: b.slug,
//           image: b.featured_image
//             ? `https://maxproject.pythonanywhere.com${b.featured_image}`
//             : "/images/blog/blog1.jpg",
//         }))

//         setBlogs(mapped.slice(0, 3)) // ✅ only 3
//       })
//   }, [])

//   return (
//     <Section className="bg-[#f4f6f9]">
//        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        
//          {/* LEFT — BLOGS */}
//          <BlogList />

//          {/* RIGHT — QUOTE FORM */}
//          <div className="lg:sticky lg:top-24 h-fit">
//            <ServiceQuoteForm />
//          </div>
//        </div>

//       <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.map((blog) => (
//           <HomeBlogCard key={blog.slug} blog={blog} />
//         ))}
//       </div>
//     </Section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Section from "@/components/ui/Section"
import HomeBlogCard from "@/components/blog/HomeBlogCard"
import ServiceQuoteForm from "@/components/services/ServiceQuoteForm"
import BlogList from "@/components/blog/BlogList"
import { API, mediaUrl } from "@/lib/api"

type Blog = {
  title: string
  description: string
  image: string
  slug: string
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    fetch(API.blogs)
      .then((res) => res.json())
      .then((json) => {
        const apiBlogs = json?.data || []

        const mapped: Blog[] = apiBlogs.map((b: any) => ({
          title: b.title,
          description: b.short_description || "",
          slug: b.slug,
          image: b.featured_image
            ? mediaUrl(b.featured_image)
            : "/images/blog/blog1.jpg",
        }))

        setBlogs(mapped.slice(0, 3))
      })
  }, [])

  return (
    <Section className="bg-[#f4f6f9]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        
        {/* LEFT — BLOGS */}
        <BlogList />

        {/* RIGHT — QUOTE FORM */}
        <div className="lg:sticky lg:top-24 h-fit">
          <ServiceQuoteForm />
        </div>
      </div>

      {/* BOTTOM 3 BLOGS */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <HomeBlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </Section>
  )
}