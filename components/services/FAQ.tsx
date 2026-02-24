// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import { fadeUp, stagger } from "@/lib/motion"
// import { ChevronDown } from "lucide-react"

// type FAQ = {
//   question: string
//   title: string
//   content: string
// }

// const faqs: FAQ[] = [
//   {
//     question: "Incomprehensibility or readability? That is the question.",
//     title: "Content List",
//     content:
//       "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     question: "Origin and meaning of the Lorem Ipsum text",
//     title: "Content List",
//     content:
//       "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     question: "Incomprehensibility or readability? That is the question.",
//     title: "Content List",
//     content:
//       "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     question: "Origin and meaning of the Lorem Ipsum text",
//     title: "Content List",
//     content:
//       "5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
// ]

// export default function FAQ() {
//   return (
//     <Section>
//       <Heading
//         title="FAQs"
//         align="center"
//         className="mb-12"
//       />

//       <motion.div
//         {...stagger}
//         className="grid md:grid-cols-2 gap-6 lg:gap-8"
//       >
//         {faqs.map((faq, i) => (
//           <FAQItem key={i} faq={faq} />
//         ))}
//       </motion.div>
//     </Section>
//   )
// }

// /* ================= ITEM ================= */

// function FAQItem({ faq }: { faq: FAQ }) {
//   const [open, setOpen] = useState(true)

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
//         className="w-full flex items-center justify-between text-left px-5 py-4"
//       >
//         <span className="font-medium text-[var(--color-text)]">
//           {faq.question}
//         </span>

//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.25 }}
//           className="text-[var(--color-accent)]"
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
//             className="px-5 pb-5"
//           >
//             <h4 className="font-semibold mb-2 text-[var(--color-text)]">
//               {faq.title}
//             </h4>

//             <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
//               {faq.content}
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

type FAQ = {
  id: number
  question: string
  answer: string
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    fetch("https://newmaxgenproject.pythonanywhere.com/faqs/")
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

      <motion.div {...stagger} className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </motion.div>
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
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-5 py-4"
      >
        <span className="font-medium text-[var(--color-text)]">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[var(--color-accent)]"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="px-5 pb-5"
          >
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}