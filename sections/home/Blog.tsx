// // // "use client"

// // // import { motion } from "framer-motion"
// // // import Section from "@/components/ui/Section"
// // // import Heading from "@/components/ui/Heading"
// // // import Link from "next/link"

// // // interface Post {
// // //   title: string
// // //   description: string
// // //   image: string
// // //   href: string
// // // }

// // // const posts: Post[] = [
// // //   {
// // //     title: "Summer Internship 2025",
// // //     description:
// // //       "Maxgen Technologies Pvt Ltd is seeking a highly motivated and enthusiastic individual to join Internship Programme for the summer.",
// // //     image: "/images/home/home-blog1.jpeg",
// // //     href: "/internships",
// // //   },
// // //   {
// // //     title: "Why Digital Marketing is Important to Generate Revenue",
// // //     description:
// // //       "Digital marketing has become an essential aspect of generating revenue for businesses in today's digital landscape.",
// // //     image: "/images/home/home-blog2.jpg",
// // //     href: "/blogs/digital-marketing",
// // //   },
// // //   {
// // //     title: "Importance of Website in your Business Growth",
// // //     description:
// // //       "Websites are an essential tool for businesses looking to grow and succeed in today’s digital age.",
// // //     image: "/images/home/home-blog3.jpg",
// // //     href: "/blogs/website-importance",
// // //   },
// // // ]

// // // export default function Blog() {
// // //   return (
// // //     <>
// // //       <Heading
// // //         align="center"
// // //         title="Latest Insights & Opportunities"
// // //         subtitle="Explore our latest blogs, updates, and internship opportunities."
// // //       />

// // //       <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //         {posts.map((post, i) => (
// // //           <motion.div
// // //             key={i}
// // //             initial={{ opacity: 0, y: 60 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: i * 0.15 }}
// // //           >
// // //             <Link
// // //               href={post.href}
// // //               className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300"
// // //             >
// // //               {/* image */}
// // //               <div className="relative overflow-hidden">
// // //                 <motion.img
// // //                   src={post.image}
// // //                   alt={post.title}
// // //                   className="w-full h-56 object-cover"
// // //                   whileHover={{ scale: 1.08 }}
// // //                   transition={{ duration: 0.6 }}
// // //                 />
// // //               </div>

// // //               {/* content */}
// // //               <div className="p-6">
// // //                 <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
// // //                   {post.title}
// // //                 </h3>

// // //                 <p className="mt-3 text-sm leading-relaxed">
// // //                   {post.description}
// // //                 </p>

// // //                 <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
// // //                   Read more →
// // //                 </span>
// // //               </div>
// // //             </Link>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </>
// // //   )
// // // }


// // "use client"

// // import { motion } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import Link from "next/link"

// // interface Post {
// //   title: string
// //   description: string
// //   image: string
// //   href: string
// // }

// // const posts: Post[] = [
// //   {
// //     title: "Summer Internship 2025",
// //     description:
// //       "Maxgen Technologies Pvt Ltd is seeking a highly motivated and enthusiastic individual to join Internship Programme for the summer.",
// //     image: "/images/home/home-blog1.jpeg",
// //     href: "/internships",
// //   },
// //   {
// //     title: "Why Digital Marketing is Important to Generate Revenue",
// //     description:
// //       "Digital marketing has become an essential aspect of generating revenue for businesses in today's digital landscape.",
// //     image: "/images/home/home-blog2.jpg",
// //     href: "/blogs/digital-marketing",
// //   },
// //   {
// //     title: "Importance of Website in your Business Growth",
// //     description:
// //       "Websites are an essential tool for businesses looking to grow and succeed in today’s digital age.",
// //     image: "/images/home/home-blog3.jpg",
// //     href: "/blogs/website-importance",
// //   },
// //    {
// //     title: "Summer Internship 2025",
// //     description:
// //       "Maxgen Technologies Pvt Ltd is seeking a highly motivated and enthusiastic individual to join Internship Programme for the summer.",
// //     image: "/images/blog/blog3.png",
// //     href: "/internships",
// //   },
// //   {
// //     title: "Why Digital Marketing is Important to Generate Revenue",
// //     description:
// //       "Digital marketing has become an essential aspect of generating revenue for businesses in today's digital landscape.",
// //     image: "/images/blog/blog1.jpg",
// //     href: "/blogs/digital-marketing",
// //   },
// //   {
// //     title: "Importance of Website in your Business Growth",
// //     description:
// //       "Websites are an essential tool for businesses looking to grow and succeed in today’s digital age.",
// //     image: "/images/blog/blog3.png",
// //     href: "/blogs/website-importance",
// //   },
// // ]

// // export default function Blog() {
// //   return (
// //     <Section className="py-16 md:py-24">
// //       <Heading
// //         align="center"
// //         title="Latest Insights & Opportunities"
// //         subtitle="Explore our latest blogs, updates, and internship opportunities."
// //       />

// //       {/* SCROLLER */}
// //       <div className="mt-12 overflow-x-auto pb-4 no-scrollbar">
// //         <div className="flex gap-8 snap-x snap-mandatory">
// //           {posts.map((post, i) => (
// //             <motion.div
// //               key={i}
// //               className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%]"
// //               initial={{ opacity: 0, y: 60 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: i * 0.15 }}
// //             >
// //               <Link
// //                 href={post.href}
// //                 className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300"
// //               >
// //                 {/* image */}
// //                 <div className="relative overflow-hidden">
// //                   <motion.img
// //                     src={post.image}
// //                     alt={post.title}
// //                     className="w-full h-56 object-cover"
// //                     whileHover={{ scale: 1.08 }}
// //                     transition={{ duration: 0.6 }}
// //                   />
// //                 </div>

// //                 {/* content */}
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
// //                     {post.title}
// //                   </h3>

// //                   <p className="mt-3 text-sm leading-relaxed">
// //                     {post.description}
// //                   </p>

// //                   <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
// //                     Read more →
// //                   </span>
// //                 </div>
// //               </Link>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </Section>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import Link from "next/link"

// interface Post {
//   title: string
//   description: string
//   image: string
//   href: string
// }

// const posts: Post[] = [
//   {
//     title: "Summer Internship 2025",
//     description:
//       "Maxgen Technologies Pvt Ltd is seeking a highly motivated and enthusiastic individual to join Internship Programme for the summer.",
//     image: "/images/home/home-blog1.jpeg",
//     href: "/internships",
//   },
//   {
//     title: "Why Digital Marketing is Important to Generate Revenue",
//     description:
//       "Digital marketing has become an essential aspect of generating revenue for businesses in today's digital landscape.",
//     image: "/images/home/home-blog2.jpg",
//     href: "/blogs/digital-marketing",
//   },
//   {
//     title: "Importance of Website in your Business Growth",
//     description:
//       "Websites are an essential tool for businesses looking to grow and succeed in today’s digital age.",
//     image: "/images/home/home-blog3.jpg",
//     href: "/blogs/website-importance",
//   },
//   {
//     title: "Top Mobile App Trends 2025",
//     description:
//       "Explore upcoming mobile app development trends that will shape the future of digital products.",
//     image: "/images/home/home-blog2.jpg",
//     href: "/blogs/mobile-trends",
//   },
//   {
//     title: "Why Businesses Need SEO",
//     description:
//       "SEO helps businesses grow visibility, traffic, and conversions in competitive markets.",
//     image: "/images/home/home-blog3.jpg",
//     href: "/blogs/seo",
//   },
//   {
//     title: "Importance of Website in your Business Growth",
//     description:
//       "Websites are an essential tool for businesses looking to grow and succeed in today’s digital age.",
//     image: "/images/blog/blog3.png",
//     href: "/blogs/website-importance",
//   },
// ]

// export default function Blog() {
//   const perPage = 3
//   const pages = Math.ceil(posts.length / perPage)
//   const [page, setPage] = useState(0)

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
//       <div className="mt-12">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={page}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.4 }}
//           >
//             {visiblePosts.map((post, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <Link
//                   href={post.href}
//                   className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300"
//                 >
//                   {/* image */}
//                   <div className="relative overflow-hidden">
//                     <motion.img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-56 object-cover"
//                       whileHover={{ scale: 1.08 }}
//                       transition={{ duration: 0.6 }}
//                     />
//                   </div>

//                   {/* content */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
//                       {post.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-relaxed">
//                       {post.description}
//                     </p>

//                     <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
//                       Read more →
//                     </span>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* DOTS */}
//       <div className="flex justify-center gap-3 mt-10">
//         {Array.from({ length: pages }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setPage(i)}
//             className="w-3 h-3 rounded-full transition-all"
//             style={{
//               background:
//                 i === page
//                   ? "var(--color-accent)"
//                   : "var(--color-border)",
//               transform: i === page ? "scale(1.2)" : "scale(1)",
//             }}
//           />
//         ))}
//       </div>
//     </Section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Link from "next/link"

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
    fetch("https://maxproject.pythonanywhere.com/blogs/")
      .then((res) => res.json())
      .then((json) => {
        const apiBlogs = json?.data || []

        const mapped: Post[] = apiBlogs.map((b: any) => ({
          title: b.title,
          description: b.short_description || "",
          slug: b.slug,
          image: b.featured_image
            ? `https://maxproject.pythonanywhere.com${b.featured_image}`
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

      {/* Cards */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            {visiblePosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* content */}
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
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              background:
                i === page
                  ? "var(--color-accent)"
                  : "var(--color-border)",
              transform: i === page ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </Section>
  )
}