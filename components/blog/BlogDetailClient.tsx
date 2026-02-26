


"use client"

import { motion } from "framer-motion"
import { BlogDetail } from "@/data/blogs"

type Props = {
  blog: BlogDetail
}

export default function BlogDetailClient({ blog }: Props) {
  return (
    <section className="bg-[#eef1f7] py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our <span className="text-accent">Blogs</span>
            </h2>

            <div className="flex justify-center mt-3 gap-2">
              <div className="w-10 h-[2px] bg-primary" />
              <div className="w-6 h-[2px] bg-accent" />
              <div className="w-10 h-[2px] bg-primary" />
            </div>
          </motion.div>
        </motion.div>

        {/* BLOG CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[240px] md:h-[340px] object-cover rounded-lg mb-6"
          />

          <h2 className="text-xl md:text-2xl font-semibold text-[#1a2a3a] mb-2 break-words">
            {blog.title}
          </h2>

          <p className="text-sm text-gray-700 mb-6">
            <span className="font-semibold">Category:</span> {blog.category}
          </p>

          {/* HTML CONTENT */}
          {/* <div
            className="space-y-4 text-[#5c6b73] break-words leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: blog.content?.join("") || "",
            }}
          /> */}

          <div
  className="prose max-w-none text-[#5c6b73] break-words overflow-wrap-anywhere"
  dangerouslySetInnerHTML={{
    __html: blog.content?.join("") || "",
  }}
/>
        </motion.div>

      </div>
    </section>
  )
}