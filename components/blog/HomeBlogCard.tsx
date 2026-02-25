"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type Blog = {
  title: string
  description: string
  image: string
  slug: string
}

export default function HomeBlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="group block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-default shadow-sm hover:shadow-lg transition-all duration-300 h-full"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed">
            {blog.description}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
            Read more →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}