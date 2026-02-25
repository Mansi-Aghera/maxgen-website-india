

"use client"

import { motion } from "framer-motion"
import { Service } from "@/data/services"
import ServiceQuoteForm from "./ServiceQuoteForm"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

export default function ServiceReadMore({ service }: { service: Service }) {
  return (
    <section className="bg-light py-16">
      <div className="max-w-[1180px] mx-auto px-6">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our <span className="text-accent">Services</span>
          </h2>

          <div className="flex justify-center mt-3 gap-2">
            <div className="w-10 h-[2px] bg-primary" />
            <div className="w-6 h-[2px] bg-accent" />
            <div className="w-10 h-[2px] bg-primary" />
          </div>
        </motion.div>

        {/* BOX CONTAINER */}
        <div className="bg-white rounded-[14px] shadow-md p-8 md:p-10">

          {/* SERVICE TITLE */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[28px] md:text-[32px] font-semibold text-primary mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {service.title}
          </motion.h1>

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

            <motion.img
              src={service.gif}
              alt={service.title}
              variants={slideLeft}
              initial="hidden"
              animate="show"
              className="w-full max-w-[520px]"
            />

            <motion.div variants={slideRight} initial="hidden" animate="show">
              <ServiceQuoteForm service={service.title} />
            </motion.div>

          </div>

          {/* DESCRIPTION */}
          <motion.div
            className="mt-10 space-y-4 text-[15px] leading-relaxed"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {service.description.map((html, i) => (
              <motion.div
  key={i}
  variants={fadeUp}
  className="
    prose
    prose-sm
    md:prose-base
    max-w-none
    text-gray-700
    break-words
  "
  dangerouslySetInnerHTML={{ __html: html }}
/>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}