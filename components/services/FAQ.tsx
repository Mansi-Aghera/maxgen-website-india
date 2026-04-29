

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Heading from "@/components/ui/Heading"
import { fadeUp, stagger } from "@/lib/motion"
import { ChevronDown } from "lucide-react"
import { API } from "@/lib/api"
import Testimonials from "@/sections/home/Testimonials"
import Contact from "@/sections/home/Contact"
import Section from "../ui/Section"

type FAQType = {
  id: number
  question: string
  answer: string
  category: string
}

export default function FAQ({ category }: { category?: string }) {
  const [faqs, setFaqs] = useState<FAQType[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("")
  const [openFaqId, setOpenFaqId] = useState<number | null>(null)

  useEffect(() => {
    fetch(API.faqs)
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data ?? []

        const activeFaqs: FAQType[] = data
          .filter((f: any) => f.status === true)
          .map((f: any) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
            category: f.category,
          }))

        setFaqs(activeFaqs)

        if (category) setActiveCategory(category)
        else if (activeFaqs.length)
          setActiveCategory(activeFaqs[0].category)
      })
  }, [category])

  const categories = Array.from(
    new Set(faqs.map((f) => f.category))
  )

  const filtered = faqs.filter(
    (f) => f.category === activeCategory
  )

  return (
    <div>
      <Section className="py-12 md:py-16">
        {/* heading only faq page */}
        {!category && (
          <Heading title="FAQs" align="center" className="mb-12" />
        )}

        {/* 🔥 KEY CHANGE HERE */}
        <div
          className={`mx-auto px-4 ${
            category
              ? "max-w-3xl"   // service page width
              : "grid lg:grid-cols-[260px_1fr] gap-8"
          }`}
        >
          {/* sidebar only faq page */}
          {!category && (
            <motion.div
              {...fadeUp}
              className="border-r pr-4 hidden lg:block"
            >
              <p className="font-semibold mb-4">Questions</p>

              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat)
                      setOpenFaqId(null)
                    }}
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
          )}

          {/* FAQ LIST */}
          <div>
            {category && (
              <h3 className="text-xl font-semibold mb-6">
                {category}
              </h3>
            )}

            <motion.div {...stagger} className="space-y-4">
              {filtered.map((faq) => (
                <FAQItem 
                  key={faq.id} 
                  faq={faq} 
                  isOpen={openFaqId === faq.id}
                  onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQType; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      {...fadeUp}
      className="rounded-xl overflow-hidden border"
      style={{
        background: "#ebe6f3",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className="font-medium text-sm md:text-base pr-4">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-primary flex-shrink-0"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm md:text-base text-gray-600">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
