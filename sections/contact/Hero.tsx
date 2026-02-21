"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import { fade } from "@/lib/motion"

export default function Hero() {
  return (
    <Section
      className="relative h-[240px] sm:h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden"
    >
     <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/banner.jpg')",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.45))",
        }}
      />

      {/* Content */}
      <motion.div
        className="text-center max-w-2xl mx-auto text-white"
      >
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Contact Us

        <p className="mt-4 text-sm md:text-base opacity-90 text-white">
          Want to get in touch? We'd love to hear from you.
        </p>
      </motion.h1>

        
      </motion.div>
    </Section>
  )
}