"use client"

import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

type Props = {
  active: "freshers" | "experienced"
  onChange: (v: "freshers" | "experienced") => void
}

export default function CareerHero({ active, onChange }: Props) {
  return (
    <Section className="">
      <motion.div {...fadeUp}>
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
          Open Job Positions at <span className="text-accent">Maxgen</span>
        </h2>

        <div className="flex justify-center mt-3 gap-2">
          <div className="w-10 h-[2px] bg-primary" />
          <div className="w-6 h-[2px] bg-accent" />
          <div className="w-10 h-[2px] bg-primary" />
        </div>
      </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mt-6">
          {["freshers", "experienced"].map((t) => (
            <button
              key={t}
              onClick={() => onChange(t as any)}
              className={`text-sm font-semibold tracking-wide pb-2 border-b-2 transition-all
                ${
                  active === t
                    ? "text-accent border-accent"
                    : "text-[var(--color-text-muted)] border-transparent hover:text-accent"
                }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}