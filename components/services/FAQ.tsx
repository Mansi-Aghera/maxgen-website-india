

// // "use client"

// // import { useEffect, useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import { fadeUp, stagger } from "@/lib/motion"
// // import { ChevronDown } from "lucide-react"

// // type FAQ = {
// //   id: number
// //   question: string
// //   answer: string
// // }

// // export default function FAQ() {
// //   const [faqs, setFaqs] = useState<FAQ[]>([])

// //   useEffect(() => {
// //     fetch("https://newmaxgenproject.pythonanywhere.com/faqs/")
// //       .then((res) => res.json())
// //       .then((json) => {
// //         const data = json?.data ?? json ?? []
// //         const activeFaqs = data.filter((f: any) => f.status === true)

// //         const mapped: FAQ[] = activeFaqs.map((f: any) => ({
// //           id: f.id,
// //           question: f.question,
// //           answer: f.answer,
// //         }))

// //         setFaqs(mapped)
// //       })
// //       .catch((e) => console.error("FAQ fetch error", e))
// //   }, [])

// //   return (
// //     <Section>
// //       <Heading title="FAQs" align="center" className="mb-12" />

// //       {/* ✅ Wider responsive container */}
// //       <div className="w-full max-w-4xl mx-auto">
// //         <motion.div {...stagger} className="grid gap-6 lg:gap-8">
// //           {faqs.map((faq) => (
// //             <FAQItem key={faq.id} faq={faq} />
// //           ))}
// //         </motion.div>
// //       </div>
// //     </Section>
// //   )
// // }

// // /* ================= ITEM ================= */

// // function FAQItem({ faq }: { faq: FAQ }) {
// //   const [open, setOpen] = useState(false)

// //   return (
// //     <motion.div
// //       {...fadeUp}
// //       className="border rounded-[var(--radius-lg)] overflow-hidden"
// //       style={{
// //         borderColor: "var(--color-border)",
// //         background: "var(--color-bg-soft)",
// //       }}
// //     >
// //       {/* Header */}
// //       <button
// //         onClick={() => setOpen(!open)}
// //         className="
// //           w-full
// //           flex
// //           items-start
// //           justify-between
// //           text-left
// //           px-4 sm:px-5 md:px-6
// //           py-4 sm:py-5
// //           gap-4
// //         "
// //       >
// //         <span
// //           className="
// //             font-medium
// //             text-[var(--color-text)]
// //             text-sm sm:text-[15px] md:text-base
// //             leading-snug
// //           "
// //         >
// //           {faq.question}
// //         </span>

// //         <motion.span
// //           animate={{ rotate: open ? 180 : 0 }}
// //           transition={{ duration: 0.25 }}
// //           className="text-[var(--color-accent)] shrink-0"
// //         >
// //           <ChevronDown size={18} />
// //         </motion.span>
// //       </button>

// //       {/* Body */}
// //       <AnimatePresence initial={false}>
// //         {open && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.35 }}
// //             className="px-4 sm:px-5 md:px-6 pb-5"
// //           >
// //             <p
// //               className="
// //                 text-sm
// //                 sm:text-[15px]
// //                 md:text-base
// //                 leading-relaxed
// //                 text-[var(--color-text-muted)]
// //               "
// //             >
// //               {faq.answer}
// //             </p>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   )
// // }


// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import { fadeUp, stagger } from "@/lib/motion"
// import { ChevronDown } from "lucide-react"
// import { API } from "@/lib/api"   // ✅ added
// import Testimonials from "@/sections/home/Testimonials"
// import Contact from "@/sections/home/Contact"

// type FAQ = {
//   id: number
//   question: string
//   answer: string
// }

// export default function FAQ() {
//   const [faqs, setFaqs] = useState<FAQ[]>([])

//   useEffect(() => {
//     fetch(API.faqs)   // ✅ using base url
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
//     <div>
//       <Heading title="FAQs" align="center" className="mb-12 mt-12" />

//       <div className="w-full max-w-4xl mx-auto">
//         <motion.div {...stagger} className="grid gap-6 lg:gap-8">
//           {faqs.map((faq) => (
//             <FAQItem key={faq.id} faq={faq} />
//           ))}
//         </motion.div>
//       </div>
//       <Testimonials />
//       <Contact />
//     </div>
    
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
//         borderColor: "var(--color-accent)",
//         background: "var(--color-bg-soft)",
//       }}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex items-start justify-between text-left px-4 sm:px-5 md:px-6 py-4 sm:py-5 gap-4 hover:bg-light"
//       >
//         <span className="font-medium text-[var(--color-text)] text-sm sm:text-[15px] md:text-base leading-snug">
//          <h3> {faq.question} </h3>
//         </span>

//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.25 }}
//           className="text-[var(--color-accent)] shrink-0"
//         >
//           <ChevronDown size={18} />
//         </motion.span>
//       </button>

//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.15 }}
//             className="px-4 sm:px-5 md:px-6 pb-5"
//           >
//             <p className="text-sm sm:text-[15px] md:text-base leading-relaxed text-[var(--color-text-muted)]">
//               {faq.answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }


// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Heading from "@/components/ui/Heading"
// import { fadeUp, stagger } from "@/lib/motion"
// import { ChevronDown } from "lucide-react"
// import { API } from "@/lib/api"
// import Testimonials from "@/sections/home/Testimonials"
// import Contact from "@/sections/home/Contact"
// import Section from "../ui/Section"

// /* ================= TYPES ================= */

// type FAQ = {
//   id: number
//   question: string
//   answer: string
//   category: string
// }

// /* ================= PAGE ================= */

// export default function FAQ() {
//   const [faqs, setFaqs] = useState<FAQ[]>([])
//   const [activeCategory, setActiveCategory] = useState<string>("")

//   /* FETCH */
//   useEffect(() => {
//     fetch(API.faqs)
//       .then((res) => res.json())
//       .then((json) => {
//         const data = json?.data ?? []

//         const activeFaqs: FAQ[] = data
//           .filter((f: any) => f.status === true)
//           .map((f: any) => ({
//             id: f.id,
//             question: f.question,
//             answer: f.answer,
//             category: f.category,
//           }))

//         setFaqs(activeFaqs)

//         if (activeFaqs.length) {
//           setActiveCategory(activeFaqs[0].category)
//         }
//       })
//   }, [])

//   /* UNIQUE CATEGORIES */
//   const categories = Array.from(
//     new Set(faqs.map((f) => f.category))
//   )

//   /* FILTERED FAQ */
//   const filtered = faqs.filter(
//     (f) => f.category === activeCategory
//   )

//   return (
//     <div>
//     <Section className="py-12 md:py-16">
//       <Heading title="FAQs" align="center" className="mb-12" />

//       <div className=" mx-auto px-4 grid lg:grid-cols-[260px_1fr] gap-8">
        
//         {/* LEFT CATEGORY */}
//         <motion.div
//           {...fadeUp}
//           className="border-r pr-4 hidden lg:block"
//         >
//           <p className="font-semibold mb-4">Questions</p>

//           <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`block text-left w-full text-md transition ${
//                   activeCategory === cat
//                     ? "text-primary font-semibold"
//                     : "text-gray-500 hover:text-primary"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* MOBILE CATEGORY */}
//         <div className="lg:hidden mb-6">
//           <select
//             value={activeCategory}
//             onChange={(e) => setActiveCategory(e.target.value)}
//             className="w-full border px-4 py-3 rounded-md text-sm"
//           >
//             {categories.map((cat) => (
//               <option key={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         {/* RIGHT FAQ */}
//         <div>
//           <h3 className="text-xl font-semibold mb-6">
//             {activeCategory}
//           </h3>

//           <motion.div {...stagger} className="space-y-4">
//             {filtered.map((faq) => (
//               <FAQItem key={faq.id} faq={faq} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
      
//     </Section>
//     <Testimonials />
//     <Contact />
//     </div>
//   )
// }

// /* ================= ITEM ================= */

// function FAQItem({ faq }: { faq: FAQ }) {
//   const [open, setOpen] = useState(false)

//   return (
//     <motion.div
//       {...fadeUp}
//       className="rounded-xl overflow-hidden border"
//       style={{
//         borderColor: "var(--color-border)",
//         background: "#ebe6f3",
//       }}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center px-5 py-4 text-left"
//       >
//         <span className="font-medium text-sm md:text-base">
//           {faq.question}
//         </span>

//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           transition={{ duration: 0.25 }}
//           className="text-primary"
//         >
//           <ChevronDown size={18} />
//         </motion.span>
//       </button>

//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="px-5 pb-5 text-sm md:text-base text-gray-600"
//           >
//             {faq.answer}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

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
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}

function FAQItem({ faq }: { faq: FAQType }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      {...fadeUp}
      className="rounded-xl overflow-hidden border"
      style={{
        borderColor: "var(--color-accent)",
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