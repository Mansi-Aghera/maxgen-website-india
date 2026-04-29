

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { fadeUp } from "@/lib/motion"
import Button from "@/components/ui/Button"
import AddTestimonialForm from "./AddTestimonialForm"
import { API, mediaUrl } from "@/lib/api"   // ✅ added

const htmlToText = (html: string) => {
  if (typeof window === "undefined") return html
  const div = document.createElement("div")
  div.innerHTML = html
  return div.textContent || div.innerText || ""
}

const limitHtmlWords = (html: string, words = 40) => {
  const text = htmlToText(html)
  const arr = text.trim().split(/\s+/)
  if (arr.length <= words) return html
  if (!words) {
    return html
  }
  return arr.slice(0, words).join(" ") + "..."
}

const limitHtml = (html: string) => {
  const text = htmlToText(html)
  const arr = text.trim().split(/\s+/)
  return arr.join(" ") // ✅ string
}


type Testimonial = {
  id: number
  name: string
  image: string
  rating: number
  review: string
  status: string
}

export default function Testimonials() {
  const [data, setData] = useState<Testimonial[]>([])
  const [active, setActive] = useState<Testimonial | null>(null)
  const [openForm, setOpenForm] = useState(false)
  const [refresh, setRefresh] = useState(0)


  /* ⭐ stars unchanged */
  const FullStar = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-yellow-500">
      <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
    </svg>
  )
  const HalfStar = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path fill="url(#half)" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
    </svg>
  )
  const EmptyStar = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-300">
      <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
    </svg>
  )

  const renderStars = (rating: number) => {
    const full = Math.floor(rating)
    const half = rating % 1 >= 0.5
    const empty = 5 - full - (half ? 1 : 0)
    return (
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: full }).map((_, i) => <FullStar key={"f" + i} />)}
        {half && <HalfStar />}
        {Array.from({ length: empty }).map((_, i) => <EmptyStar key={"e" + i} />)}
      </div>
    )
  }

  useEffect(() => {
    fetch(API.testimonials)// ✅ base url
      .then((r) => r.json())
      .then((res) => {
        const list = res.data || res
        const activeList = list.filter(
          (t: Testimonial) => t.status === "Active"
        )
        setData(activeList)
      })
      .catch(() => { })
  }, [refresh])

  const loopData = [...data, ...data, ...data, ...data, ...data, ...data]

  return (
    <Section className="py-16 md:py-24">
      <Heading title="Our Testimonials" align="center" className="mb-12" />

      <div className="flex justify-center mb-8">
        <Button onClick={() => setOpenForm(true)}>
          Add Testimonial
        </Button>
      </div>

      {/* SLIDER — unchanged */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          drag="x"
          dragConstraints={{
            left: -(data.length * 300),
            right: 0,
          }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 300, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}

        >
          {loopData.map((t, i) => {
            const bg =
              i % 2 === 0
                ? "color-mix(in srgb, var(--color-accent) 12%, white)"
                : "color-mix(in srgb, var(--color-primary) 12%, white)"

            return (
              <motion.div
                key={`${t.id}-${i}`}
                {...fadeUp}
                className="p-5 sm:p-6 p-5 sm:p-6 flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]"
                style={{
                  background: bg,
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={mediaUrl(t.image)}   // ✅ base url
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="font-medium text-sm sm:text-[15px]">{t.name}</p>
                    {renderStars(t.rating)}
                  </div>
                </div>

                <p
                  className="text-xs sm:text-sm leading-relaxed opacity-90 break-words"
                  dangerouslySetInnerHTML={{
                    __html: limitHtmlWords(t.review, 50),
                  }}
                />

                {htmlToText(t.review).split(/\s+/).length > 50 && (
                  <button
                    onClick={() => setActive(t)}
                    className="mt-3 text-xs sm:text-sm font-medium text-[var(--color-accent)] hover:underline"
                  >
                    Read More
                  </button>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={mediaUrl(active.image)}   // ✅ base url
                  alt={active.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{active.name}</p>
                  {renderStars(active.rating)}
                </div>
              </div>

              <p
                className="text-xs sm:text-sm leading-relaxed opacity-90 break-words"
                dangerouslySetInnerHTML={{
                  __html: limitHtml(active.review),
                }}
              />

              <button
                onClick={() => setActive(null)}
                className="mt-6 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ADD FORM */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/40 px-3 sm:px-6 pt-20 sm:pt-24 md:pt-32 lg:pt-32 overflow-y-auto"
            onClick={() => setOpenForm(false)}
          >
            <motion.div
              className="bg-white w-full max-w-lg rounded-xl shadow-xl my-6 sm:my-0 mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <AddTestimonialForm onClose={() => setOpenForm(false)} onSuccess={() => setRefresh(r => r + 1)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}