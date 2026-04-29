

"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type Blog = {
  title: string
  desc: string
  image?: string | null
  slug: string
}

type Props = {
  blog: Blog
}

export default function BlogCard({ blog }: Props) {
  const imgSrc =
    blog.image && blog.image.trim() !== ""
      ? blog.image
      : "/images/blog/blog1.jpg"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={imgSrc}
          alt={blog.title}
          fill
          unoptimized   // ✅ FIX
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={100}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 text-[15px] leading-7 mb-4">
          {blog.desc}
        </p>

        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-2 text-[#1d3557] font-medium hover:gap-3 transition-all"
        >
          Read More →
        </Link>

        <div className="h-[2px] bg-gray-200 mt-6" />
      </div>
    </motion.div>
  )
}