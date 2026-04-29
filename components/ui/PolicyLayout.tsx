"use client"

import Section from "@/components/ui/Section"
import { motion } from "framer-motion"

interface SectionItem {
  title: string
  content: string
}

export default function PolicyLayout({
  title,
  subtitle,
  sections,
}: {
  title: string
  subtitle: string
  sections: SectionItem[]
}) {
  return (
    <Section className="bg-light py-16 md:py-20">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1
          className="text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title.split(" ")[0]}{" "}
          <span className="text-accent">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <div className="flex justify-center mt-3 gap-2">
          <div className="w-10 h-[2px] bg-primary" />
          <div className="w-6 h-[2px] bg-accent" />
          <div className="w-10 h-[2px] bg-primary" />
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-[#4a5568] max-w-[720px] mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="space-y-8 md:space-y-10">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <h3
              className="text-[20px] md:text-[22px] font-semibold text-primary mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h3>

            <p className="text-[15.5px] leading-[28px] text-[#4a5568]">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}