

// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import { fadeUp, stagger } from "@/lib/motion"
// import { ChevronDown } from "lucide-react"

// type FAQ = {
//   id: number
//   question: string
//   answer: string
// }

// export default function FAQ() {
//   const [faqs, setFaqs] = useState<FAQ[]>([])

//   useEffect(() => {
//     fetch("https://newmaxgenproject.pythonanywhere.com/faqs/")
//       .then((res) => res.json())
//       .then((json) => {
//         const data = json?.data ?? json ?? []
//         const activeFaqs = data.filter((f: any) => f.status === true)

//         const mapped: FAQ[] = activeFaqs.map((f: any) => ({
//           id: f.id,
//           question: f.question,
//           answer: f.answer,
//         }))

//         setFaqs(mapped)
//       })
//       .catch((e) => console.error("FAQ fetch error", e))
//   }, [])

//   return (
//     <Section>
//       <Heading title="FAQs" align="center" className="mb-12" />

//       {/* ✅ Wider responsive container */}
//       <div className="w-full max-w-4xl mx-auto">
//         <motion.div {...stagger} className="grid gap-6 lg:gap-8">
//           {faqs.map((faq) => (
//             <FAQItem key={faq.id} faq={faq} />
//           ))}
//         </motion.div>
//       </div>
//     </Section>
//   )
// }

// /* ================= ITEM ================= */

// function FAQItem({ faq }: { faq: FAQ }) {
//   const [open, setOpen] = useState(false)

//   return (
//     <motion.div
//       {...fadeUp}
//       className="border rounded-[var(--radius-lg)] overflow-hidden"
//       style={{
//         borderColor: "var(--color-border)",
//         background: "var(--color-bg-soft)",
//       }}
//     >
//       {/* Header */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="
//           w-full
//           flex
//           items-start
//           justify-between
//           text-left
//           px-4 sm:px-5 md:px-6
//           py-4 sm:py-5
//           gap-4
//         "
//       >
//         <span
//           className="
//             font-medium
//             text-[var(--color-text)]
//             text-sm sm:text-[15px] md:text-base
//             leading-snug
//           "
//         >
//           {faq.question}
//         </span>

//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.25 }}
//           className="text-[var(--color-accent)] shrink-0"
//         >
//           <ChevronDown size={18} />
//         </motion.span>
//       </button>

//       {/* Body */}
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.35 }}
//             className="px-4 sm:px-5 md:px-6 pb-5"
//           >
//             <p
//               className="
//                 text-sm
//                 sm:text-[15px]
//                 md:text-base
//                 leading-relaxed
//                 text-[var(--color-text-muted)]
//               "
//             >
//               {faq.answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { fadeUp, stagger } from "@/lib/motion"
import { ChevronDown } from "lucide-react"
import { API } from "@/lib/api"   // ✅ added

type FAQ = {
  id: number
  question: string
  answer: string
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    fetch(API.faqs)   // ✅ using base url
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data ?? json ?? []
        const activeFaqs = data.filter((f: any) => f.status === true)

        const mapped: FAQ[] = activeFaqs.map((f: any) => ({
          id: f.id,
          question: f.question,
          answer: f.answer,
        }))

        setFaqs(mapped)
      })
      .catch((e) => console.error("FAQ fetch error", e))
  }, [])

  return (
    <Section>
      <Heading title="FAQs" align="center" className="mb-12" />

      <div className="w-full max-w-4xl mx-auto">
        <motion.div {...stagger} className="grid gap-6 lg:gap-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

/* ================= ITEM ================= */

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      {...fadeUp}
      className="border rounded-[var(--radius-lg)] overflow-hidden"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-bg-soft)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between text-left px-4 sm:px-5 md:px-6 py-4 sm:py-5 gap-4"
      >
        <span className="font-medium text-[var(--color-text)] text-sm sm:text-[15px] md:text-base leading-snug">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[var(--color-accent)] shrink-0"
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
            transition={{ duration: 0.35 }}
            className="px-4 sm:px-5 md:px-6 pb-5"
          >
            <p className="text-sm sm:text-[15px] md:text-base leading-relaxed text-[var(--color-text-muted)]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}