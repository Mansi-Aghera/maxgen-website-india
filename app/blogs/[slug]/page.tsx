// // // "use client"

// // // import { useParams } from "next/navigation"

// // // export default function BlogDetail() {
// // //   const params = useParams()
// // //   const slug = params?.slug as string

// // //   return (
// // //     <div className="py-20 max-w-4xl mx-auto px-6">
// // //       <h1 className="text-3xl font-semibold mb-6 capitalize">
// // //         {slug?.replaceAll("-", " ")}
// // //       </h1>

// // //       <p className="text-gray-600">
// // //         Blog detail page coming soon…
// // //       </p>
// // //     </div>
// // //   )
// // // }



// // import { notFound } from "next/navigation"
// // import { blogData } from "@/data/blogs"

// // type Props = {
// //   params: Promise<{ slug: string }>
// // }

// // export default async function BlogDetail({ params }: Props) {
// //   const { slug } = await params

// //   const blog = blogData.find((b) => b.slug === slug)

// //   if (!blog) return notFound()

// //   return (
// //     <section className="bg-[#eef1f7] py-12 md:py-16">
// //       <div className="max-w-5xl mx-auto px-4">

// //         {/* TITLE */}
// //         <div className="text-center mb-10">
// //           <h1 className="text-2xl md:text-3xl font-semibold text-[#1a2a3a]">
// //             Blog
// //           </h1>

// //           <div className="flex items-center justify-center gap-2 mt-3">
// //             <span className="w-16 h-[2px] bg-gray-400" />
// //             <span className="w-10 h-[3px] bg-red-600" />
// //             <span className="w-16 h-[2px] bg-gray-400" />
// //           </div>
// //         </div>

// //         {/* CARD */}
// //         <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
// //           <img
// //             src={blog.image}
// //             alt={blog.title}
// //             className="w-full h-[240px] md:h-[340px] object-cover rounded-lg mb-6"
// //           />

// //           <h2 className="text-xl md:text-2xl font-semibold text-[#1a2a3a] mb-2">
// //             {blog.title}
// //           </h2>

// //           <p className="text-[14px] text-gray-700 mb-6">
// //             <span className="font-semibold">Category:</span> {blog.category}
// //           </p>

// //           <div className="text-[15px] leading-7 text-[#5c6b73] space-y-4">
// //             {blog.content.map((p, i) => (
// //               <p key={i}>{p}</p>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { notFound } from "next/navigation"
// import { blogData } from "@/data/blogs"
// import { motion } from "framer-motion"

// type Props = {
//   params: Promise<{ slug: string }>
// }

// export default async function BlogDetail({ params }: Props) {
//   const { slug } = await params

//   const blog = blogData.find((b) => b.slug === slug)

//   if (!blog) return notFound()

//   return (
//     <section className="bg-[#eef1f7] py-12 md:py-16">
//       <div className="max-w-5xl mx-auto px-4">

//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-10"
//         >
//           <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="text-center"
//       >
//         <h2
//           className="text-3xl md:text-4xl font-semibold"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           Our <span className="text-accent">Blogs</span>
//         </h2>

        
//       </motion.div>

//           <div className="flex items-center justify-center gap-2 mt-3">
//             <span className="w-16 h-[2px] bg-gray-400" />
//             <span className="w-10 h-[3px] bg-red-600" />
//             <span className="w-16 h-[2px] bg-gray-400" />
//           </div>
//         </motion.div>

//         {/* CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8"
//         >
//           {/* IMAGE */}
//           <motion.img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-[240px] md:h-[340px] object-cover rounded-lg mb-6"
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//           />

//           {/* BLOG TITLE */}
//           <motion.h2
//             className="text-xl md:text-2xl font-semibold text-[#1a2a3a] mb-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             {blog.title}
//           </motion.h2>

//           {/* CATEGORY */}
//           <motion.p
//             className="text-[14px] text-gray-700 mb-6"
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <span className="font-semibold">Category:</span> {blog.category}
//           </motion.p>

//           {/* CONTENT */}
//           <div className="text-[15px] leading-7 text-[#5c6b73] space-y-4">
//             {blog.content.map((p, i) => (
//               <motion.p
//                 key={i}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.25 + i * 0.05 }}
//               >
//                 {p}
//               </motion.p>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }

import { notFound } from "next/navigation"
import { blogs, blogData, BlogDetail } from "@/data/blogs"
import BlogDetailClient from "@/components/blog/BlogDetailClient"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params

  let blog: BlogDetail | undefined = blogData.find(
    (b) => b.slug === slug
  )

  if (!blog) {
    const card = blogs.find((b) => b.slug === slug)
    if (!card) return notFound()

    blog = {
      slug: card.slug,
      title: card.title,
      category: "Blog",
      image: card.image,
      content: [card.desc],
    }
  }

  return <BlogDetailClient blog={blog} />
}