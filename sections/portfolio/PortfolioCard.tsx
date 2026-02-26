
"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  title: string
  image?: string | null
  link?: string
}

export default function PortfolioCard({ title, image, link }: Props) {
  const imgSrc =
    image && image.trim() !== ""
      ? image
      : "/images/portfolio/portfolio1.png"

  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      className="group relative block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          unoptimized   // ✅ VERY IMPORTANT
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />

        {/* title */}
        <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3
            className="text-white text-lg font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>
        </div>
      </div>
    </motion.a>
  )
}