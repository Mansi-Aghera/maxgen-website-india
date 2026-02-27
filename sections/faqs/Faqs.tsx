
"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Heading from "@/components/ui/Heading"
import { fadeUp, stagger } from "@/lib/motion"
import { ChevronDown } from "lucide-react"
import { API } from "@/lib/api"
import Testimonials from "@/sections/home/Testimonials"
import Contact from "@/sections/home/Contact"
import Section from "@/components/ui/Section"
import Link from "next/link"

/* ================= TYPES ================= */

type FAQ = {
  id: number
  question: string
  answer: string
  category: string
}

/* ================= PAGE ================= */

export default function Faqs() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("")

  /* FETCH */
  useEffect(() => {
    fetch(API.faqs)
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data ?? []

        const activeFaqs: FAQ[] = data
          .filter((f: any) => f.status === true)
          .map((f: any) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
            category: f.category,
          }))

        setFaqs(activeFaqs)

        if (activeFaqs.length) {
          setActiveCategory(activeFaqs[0].category)
        }
      })
  }, [])

  /* UNIQUE CATEGORIES */
  const categories = Array.from(
    new Set(faqs.map((f) => f.category))
  )

  /* FILTERED FAQ */
  const filtered = faqs.filter(
    (f) => f.category === activeCategory
  )

  return (
    <div>
        {/* HERO BANNER */}
<div className="relative w-full overflow-hidden">
  {/* BG IMAGE */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url(/images/about/banner.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 backdrop-blur-[1px]" />

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-32">
    
    {/* TITLE */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-white"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Frequently Asked Questions - FAQs
    </motion.h1>

    {/* BREADCRUMB */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base"
    >
      <Link
        href="/"
        className="hover:text-accent transition-colors"
      >
        Home
      </Link>

      <span className="opacity-70">›</span>

      <span className="text-accent font-medium">
        {activeCategory || "FAQs"}
      </span>
    </motion.div>
  </div>

  {/* HEIGHT CONTROL */}
 
</div>
    <Section className="py-12 md:py-16">
      <Heading title="FAQs" align="center" className="mb-12" />

      <div className=" mx-auto px-4 grid lg:grid-cols-[260px_1fr] gap-8">
        
        {/* LEFT CATEGORY */}
        <motion.div
          {...fadeUp}
          className="border-r pr-4 hidden lg:block"
        >
          <p className="font-semibold mb-4">Questions</p>

          <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`block text-left w-full text-md transition ${
                  activeCategory === cat
                    ? "text-primary font-semibold"
                    : "text-gray-500 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* MOBILE CATEGORY */}
        <div className="lg:hidden mb-6">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full border px-4 py-3 rounded-md text-sm"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            {activeCategory}
          </h3>

          <motion.div {...stagger} className="space-y-4">
            {filtered.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </motion.div>
        </div>
      </div>
      
    </Section>
    <Testimonials />
    <Contact />
    </div>
  )
}

/* ================= ITEM ================= */

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      {...fadeUp}
      className="rounded-xl overflow-hidden border"
      style={{
        borderColor: "var(--color-border)",
        background: "#ebe6f3",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className="font-medium text-sm md:text-base">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-primary"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-5 pb-5 text-sm md:text-base text-gray-600"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}