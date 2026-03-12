

"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import InternshipForm from "./InternshipForm"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  title: string
  icon?: string   // ✅ optional
  duration: string
  mode: string
  location: string
  slug: string
  modeIcon?: string
  variant?: "internship" | "job"
  clickable?: boolean
  hrefBase?: string
}

export default function InternshipCard({
  title,
  icon,
  duration,
  mode,
  location,
  slug,
  modeIcon,
  variant = "internship",
  clickable = true,
  hrefBase = "internship",
}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setOpen(true)
  }

  return (
    <>
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={fadeUp.transition}
        onClick={() => clickable && router.push(`/${hrefBase}/${slug}`)}
        className="
          bg-white
          rounded-[var(--radius-lg)]
          border border-[var(--color-border)]
          px-4 sm:px-6
          py-4 sm:py-5
          flex flex-col md:flex-row
          md:items-center
          md:justify-between
          gap-4
          hover:shadow-md
          transition-all
          cursor-pointer
        "
      >
        {/* LEFT */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full">

          {/* ✅ SAFE IMAGE */}
          {icon && (
            <Image
              src={icon}
              alt={`${title} internship`}
              width={80}
              height={80}
              className="object-contain shrink-0"
            />
          )}

          <div className="flex-1">
            <h3
              className="text-base sm:text-lg font-semibold leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-muted mt-2">
              <span>⏱ {duration}</span>
              <span>{modeIcon ?? "🎓"} {mode}</span>
              <span>📍 {location}</span>
            </div>
          </div>

          <div className="w-full md:w-auto">
          <Button size="sm" onClick={handleApplyClick}>
            APPLY NOW
          </Button>
        </div>
        </div>

        {/* APPLY */}
        
      </motion.div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <InternshipForm onClose={() => setOpen(false)} variant={variant} />
      </Modal>
    </>
  )
}