"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { fadeUp, stagger } from "@/lib/motion"

type Item = {
  title: string
  text: string
  icon: string
}

const items: Item[] = [
  {
    title: "Reliable Service. In House Team",
    text: "We have a dedicated in-house team ensuring consistent quality and seamless communication.",
    icon: "/images/services/why1.svg",
  },
  {
    title: "Trusted by People Like You",
    text: "Hundreds of businesses trust Maxgen for digital solutions and long-term partnerships.",
    icon: "/images/services/why2.svg",
  },
  {
    title: "Complete Technical Competency",
    text: "From design to deployment — we deliver full-stack expertise under one roof.",
    icon: "/images/services/why3.svg",
  },
  {
    title: "Friendly & Cordial in Nature",
    text: "We believe in transparent, approachable and human-first collaboration.",
    icon: "/images/services/why4.svg",
  },
  {
    title: "Excellent Quality Delivered on Time",
    text: "Structured workflows ensure high-quality delivery within committed timelines.",
    icon: "/images/services/why5.svg",
  },
  {
    title: "Effective & Continuous Communication",
    text: "Regular updates and proactive communication keep you always informed.",
    icon: "/images/services/why6.svg",
  },
]

export default function WhyChoose() {
  return (
    <Section
      className="relative overflow-hidden"
      containerClass=""
    >
      {/* soft background like screenshot */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb,var(--color-accent) 10%, white) 0%, white 100%)",
        }}
      />

      {/* heading */}
      <Heading
        align="center"
        className="mb-12"
        title={
          <>
            <span className="block text-xs tracking-[3px] text-accent mb-3">
              WE DELIVER OUR BEST
            </span>
            <span>Why Choose Maxgen</span>
          </>
        }
        subtitle="We combine experience, technology and people-first approach to deliver exceptional digital solutions."
      />

      {/* cards */}
      <motion.div
        {...stagger}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            className="group relative p-7 rounded-xl border transition-all duration-300"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-bg)",
              boxShadow: "var(--shadow-sm)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            {/* hover accent border glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                border: "1px solid var(--color-accent)",
              }}
            />

            <div className="flex gap-4 items-start">
              {/* icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain shrink-0"
              />

              {/* text */}
              <div>
                <h3
                  className="text-lg font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-sm opacity-80">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}