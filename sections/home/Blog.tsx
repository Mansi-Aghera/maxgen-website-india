


// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import Link from "next/link"

// interface Post {
//   title: string
//   description: string
//   image: string
//   slug: string
// }

// export default function Blog() {
//   const perPage = 3
//   const [posts, setPosts] = useState<Post[]>([])
//   const [page, setPage] = useState(0)

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/blogs/")
//       .then((res) => res.json())
//       .then((json) => {
//         const apiBlogs = json?.data || []

//         const mapped: Post[] = apiBlogs.map((b: any) => ({
//           title: b.title,
//           description: b.short_description || "",
//           slug: b.slug,
//           image: b.featured_image
//             ? `https://maxproject.pythonanywhere.com${b.featured_image}`
//             : "/images/blog/blog1.jpg",
//         }))

//         setPosts(mapped)
//       })
//       .catch((err) => console.error("Blog fetch error:", err))
//   }, [])

//   const pages = Math.ceil(posts.length / perPage)

//   const visiblePosts = posts.slice(
//     page * perPage,
//     page * perPage + perPage
//   )

//   return (
//     <Section className="py-16 md:py-24">
//       <Heading
//         align="center"
//         title="Latest Insights & Opportunities"
//         subtitle="Explore our latest blogs, updates, and internship opportunities."
//       />

//       {/* Cards */}
//       {/* CAROUSEL */}
// <div className="mt-12 overflow-hidden">
//   <motion.div
//     className="flex gap-8"
//     animate={{ x: ["0%", "-50%"] }}
//     transition={{
//       duration: 28,
//       ease: "linear",
//       repeat: Infinity,
//     }}
//   >
//     {[...posts, ...posts].map((post, i) => (
//       <motion.div
//         key={post.slug + i}
//         className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%]"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: i * 0.05 }}
//       >
//         <Link
//           href={`/blogs/${post.slug}`}
//           className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300 h-full"
//         >
//           {/* image */}
//           <div className="relative overflow-hidden">
//             <motion.img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-56 object-cover"
//               whileHover={{ scale: 1.08 }}
//               transition={{ duration: 0.6 }}
//             />
//           </div>

//           {/* content */}
//           <div className="p-6">
//             <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
//               {post.title}
//             </h3>

//             <p className="mt-3 text-sm leading-relaxed">
//               {post.description}
//             </p>

//             <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
//               Read more →
//             </span>
//           </div>
//         </Link>
//       </motion.div>
//     ))}
//   </motion.div>
// </div>

//     </Section>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Link from "next/link"
import { API, mediaUrl } from "@/lib/api"   // ✅ base url

interface Post {
  title: string
  description: string
  image: string
  slug: string
}

export default function Blog() {
  const perPage = 3
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(API.blogs)   // ✅ replaced
      .then((res) => res.json())
      .then((json) => {
        const apiBlogs = json?.data || []

        const mapped: Post[] = apiBlogs.map((b: any) => ({
          title: b.title,
          description: b.short_description || "",
          slug: b.slug,
          image: b.featured_image
            ? mediaUrl(b.featured_image)   // ✅ replaced
            : "/images/blog/blog1.jpg",
        }))

        setPosts(mapped)
      })
      .catch((err) => console.error("Blog fetch error:", err))
  }, [])

  const pages = Math.ceil(posts.length / perPage)

  const visiblePosts = posts.slice(
    page * perPage,
    page * perPage + perPage
  )

  return (
    <Section className="py-16 md:py-24">
      <Heading
        align="center"
        title="Latest Insights & Opportunities"
        subtitle="Explore our latest blogs, updates, and internship opportunities."
      />

      {/* CAROUSEL — UNCHANGED */}
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...posts, ...posts].map((post, i) => (
            <motion.div
              key={post.slug + i}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed">
                    {post.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}