

"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  subject: string
  icon: string
}

export default function ServiceCard({
  title,
  subject,
  icon,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        bg-white rounded-[14px] shadow-md
        p-4 sm:p-5 md:p-6
        hover:shadow-lg transition-shadow duration-300
        h-full
        min-h-[150px] sm:min-h-[170px] md:min-h-[200px]
      "
    >
      {/* TOP */}
      <div className="flex items-start gap-3 sm:gap-4">
        <motion.img
          src={icon}
          alt={title}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.25 }}
        />

        <h3
          className="
            text-[15px] sm:text-[16px] md:text-[18px]
            font-semibold text-accent leading-snug
          "
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
      </div>

      {/* DESC */}
      <p
        className="
          mt-3 sm:mt-4
          text-[13.5px] sm:text-[14px] md:text-[15px]
          leading-relaxed
        "
      >
        {subject}
      </p>
    </motion.div>
  )
}