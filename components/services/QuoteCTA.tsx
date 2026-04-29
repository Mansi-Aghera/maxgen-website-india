

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import ServiceQuoteForm from "@/components/services/ServiceQuoteForm"
import Modal from "@/components/ui/Modal"  // ✅ Same Modal component import karo

export default function QuoteCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CTA */}
      <Section className="relative py-20 md:py-28 overflow-hidden">
        
        {/* PREMIUM BACKGROUND */}
        <div className="absolute inset-0 bg-[#263b6a]" />

        {/* radial glow */}
        <div className="absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(135deg,var(--color-accent) 0%,var(--color-primary) 70%,var(--color-primary) 100%)",
          }}
        />

        {/* content */}
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold leading-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's create a measurable
            <br className="hidden md:block" />
            impact on your business.
          </motion.h2>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Button size="lg" variant="accent" onClick={() => setOpen(true)}>
              Generate A Quote
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* MODAL - Now using same Modal component */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ServiceQuoteForm onClose={() => setOpen(false)} />
      </Modal>
    </>
  )
}