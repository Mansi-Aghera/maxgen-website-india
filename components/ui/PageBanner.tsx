"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  title: string
  breadcrumbs: {
    label: string
    href?: string
  }[]
  image?: string
}

export default function PageBanner({
  title,
  breadcrumbs,
  image = "/images/about/banner.jpg", // same FAQ banner
}: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-32">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </motion.h1>

        {/* BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-sm md:text-base flex flex-wrap items-center gap-2"
        >
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.href ? (
                <Link
                  href={b.href}
                  className="hover:text-accent transition-colors"
                >
                  {b.label}
                </Link>
              ) : (
                <span className="text-accent">{b.label}</span>
              )}

              {i !== breadcrumbs.length - 1 && <span>›</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}