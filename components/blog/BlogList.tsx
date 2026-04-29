


// "use client"

// import { useEffect, useState } from "react"
// import BlogCard from "./BlogCard"

// type Blog = {
//   title: string
//   desc: string
//   image: string
//   slug: string
// }

// export default function BlogList() {
//   const perPage = 2
//   const [page, setPage] = useState(1)
//   const [blogs, setBlogs] = useState<Blog[]>([])

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/blogs/")
//       .then((res) => res.json())
//       .then((json) => {
//         const apiBlogs = json?.data || []

//         const mapped: Blog[] = apiBlogs.map((b: any) => ({
//           title: b.title,
//           desc: b.short_description || "",
//           slug: b.slug,
//           image: b.featured_image
//             ? `https://maxproject.pythonanywhere.com${b.featured_image}`
//             : "/images/blog/blog1.jpg",
//         }))

//         setBlogs(mapped)
//       })
//       .catch((err) => console.error("Blog fetch error:", err))
//   }, [])

//   const totalPages = Math.ceil(blogs.length / perPage)
//   const start = (page - 1) * perPage
//   const current = blogs.slice(start, start + perPage)

//   return (
//     <div className="space-y-8">
//       {current.map((blog) => (
//         <BlogCard key={blog.slug} blog={blog} />
//       ))}

//       <div className="flex items-center justify-center gap-4 pt-6">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           className="px-3 py-1 rounded bg-gray-200 disabled:opacity-40"
//         >
//           «
//         </button>

//         <span className="text-gray-700">
//           Page {page} of {totalPages || 1}
//         </span>

//         <button
//           disabled={page === totalPages || totalPages === 0}
//           onClick={() => setPage((p) => p + 1)}
//           className="px-3 py-1 rounded bg-[#1d3557] text-white disabled:opacity-40"
//         >
//           »
//         </button>
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import { API, mediaUrl } from "@/lib/api"

type Blog = {
  title: string
  desc: string
  image: string
  slug: string
}

export default function BlogList() {
  const perPage = 2
  const [page, setPage] = useState(1)
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    fetch(API.blogs)
      .then((res) => res.json())
      .then((json) => {
        const apiBlogs = json?.data || []

        const mapped: Blog[] = apiBlogs.map((b: any) => ({
          title: b.title,
          desc: b.short_description || "",
          slug: b.slug,
          image: b.featured_image
            ? mediaUrl(b.featured_image)
            : "/images/blog/blog1.jpg",
        }))

        setBlogs(mapped)
      })
      .catch((err) => console.error("Blog fetch error:", err))
  }, [])

  const totalPages = Math.ceil(blogs.length / perPage)
  const start = (page - 1) * perPage
  const current = blogs.slice(start, start + perPage)

  return (
    <div className="space-y-8">
      {current.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}

      <div className="flex items-center justify-center gap-4 pt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-40"
        >
          «
        </button>

        <span className="text-gray-700">
          Page {page} of {totalPages || 1}
        </span>

        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 rounded bg-[#1d3557] text-white disabled:opacity-40"
        >
          »
        </button>
      </div>
    </div>
  )
}