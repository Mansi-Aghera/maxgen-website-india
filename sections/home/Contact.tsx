"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { fadeUp, stagger } from "@/lib/motion"

export default function Contact() {
  return (
    <Section className="py-16 md:py-24">
      <motion.div
        {...stagger}
        className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        {/* IMAGE */}
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <img
            src="/images/home/home-contact.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* FORM */}
        <motion.form
          {...fadeUp}
          className="p-8 md:p-10"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "var(--color-bg-soft)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in Touch
          </h3>

          <p className="mt-2 text-sm opacity-80">
            Have questions? Send us a quick message.
          </p>

          <div className="mt-6 space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Textarea placeholder="Your Message" />

            <Button type="submit" size="md">
              Send Message
            </Button>
          </div>
        </motion.form>
      </motion.div>
    </Section>
  )
}

/* INPUT */
function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string
  type?: string
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm border bg-white"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    />
  )
}

/* TEXTAREA */
function Textarea({ placeholder }: { placeholder: string }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={4}
      className="w-full px-4 py-3 text-sm border bg-white resize-none"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    />
  )
}