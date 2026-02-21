"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Button from "@/components/ui/Button"
import { fadeUp, stagger } from "@/lib/motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function ContactForm() {
  return (
    <Section className="py-16 md:py-24">
      {/* Section Title */}
      <Heading
        title="Have Some Questions?"
        align="center"
        className="mb-14"
      />

      <motion.div
        {...stagger}
        className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* LEFT INFO */}
        <motion.div {...fadeUp} className="space-y-6">
          <h3
            className="text-2xl font-semibold"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)" }}
          >
            How Can We Help You?
          </h3>

          <p className="text-sm md:text-base opacity-80">
            Submit the details we will contact you
          </p>

          <p className="italic text-sm opacity-70">
            Other ways to connect us
          </p>

          <div className="space-y-4 pt-2">
            <Social
              icon={<Facebook size={18} />}
              title="Follow us on Facebook"
              subtitle="Follow on Facebook to get latest details of Maxgen"
            />
            <Social
              icon={<Instagram size={18} />}
              title="Follow us on Instagram"
              subtitle="Follow on Instagram to get latest details of Maxgen"
            />
            <Social
              icon={<Linkedin size={18} />}
              title="Follow us on LinkedIn"
              subtitle="Follow on LinkedIn to get latest details of Maxgen"
            />
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          {...fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Mobile Number" />
          <Select />
          <Textarea />
          
          <div className="sm:col-span-2 pt-2">
            <Button type="submit" size="md">
              Submit
            </Button>
          </div>
        </motion.form>
      </motion.div>
    </Section>
  )
}

/* ================= INPUTS ================= */

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

function Select() {
  return (
    <select
      className="w-full px-4 py-3 text-sm border bg-white"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <option>What are you looking for?</option>
      <option>Web Development</option>
      <option>Mobile App</option>
      <option>Internship</option>
      <option>Other</option>
    </select>
  )
}

function Textarea() {
  return (
    <textarea
      placeholder="Describe your requirement briefly"
      rows={4}
      className="sm:col-span-2 w-full px-4 py-3 text-sm border bg-white resize-none"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    />
  )
}

/* ================= SOCIAL ================= */

function Social({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className="flex gap-3 items-start">
      <div
        className="w-9 h-9 flex items-center justify-center rounded-full"
        style={{
          background: "var(--color-accent)",
          color: "white",
        }}
      >
        {icon}
      </div>

      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs opacity-70">{subtitle}</p>
      </div>
    </div>
  )
}