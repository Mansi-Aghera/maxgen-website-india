

"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative h-[240px] sm:h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
      
      {/* background */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/banner.jpg')",
        }}
      />

      {/* overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 bg-[#6fb4c7]"
      />

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        About Us
      </motion.h1>
    </section>
  )
}