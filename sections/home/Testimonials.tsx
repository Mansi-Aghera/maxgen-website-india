

// // // "use client"

// // // import { useEffect, useState } from "react"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import Section from "@/components/ui/Section"
// // // import Heading from "@/components/ui/Heading"
// // // import { fadeUp } from "@/lib/motion"

// // // type Testimonial = {
// // //   id: number
// // //   name: string
// // //   image: string
// // //   rating: number
// // //   review: string
// // //   status: string
// // // }

// // // export default function Testimonials() {
// // //   const [data, setData] = useState<Testimonial[]>([])
// // //   const [page, setPage] = useState(0)
// // //   const [active, setActive] = useState<Testimonial | null>(null)

// // //   const perPage = 4

// // //   const limitWords = (text: string, words = 50) => {
// // //     const arr = text.split(" ")
// // //     if (arr.length <= words) return text
// // //     return arr.slice(0, words).join(" ") + "..."
// // //   }

// // //   useEffect(() => {
// // //     fetch("https://maxproject.pythonanywhere.com/testimonial/")
// // //       .then((r) => r.json())
// // //       .then((res) => {
// // //         const list = res.data || res
// // //         const activeList = list.filter(
// // //           (t: Testimonial) => t.status === "Active"
// // //         )
// // //         setData(activeList)
// // //       })
// // //       .catch(() => {})
// // //   }, [])

// // //   const pages = Math.ceil(data.length / perPage)
// // //   const visible = data.slice(page * perPage, page * perPage + perPage)

// // //   return (
// // //     <Section className="py-16 md:py-24">
// // //       <Heading title="Our Testimonials" align="center" className="mb-12" />

// // //       <AnimatePresence mode="wait">
// // //         <motion.div
// // //           key={page}
// // //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
// // //           initial={{ opacity: 0, y: 40 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -40 }}
// // //           transition={{ duration: 0.4 }}
// // //         >
// // //           {visible.map((t, i) => {
// // //             const bg =
// // //               i % 2 === 0
// // //                 ? "color-mix(in srgb, var(--color-accent) 12%, white)"
// // //                 : "color-mix(in srgb, var(--color-primary) 12%, white)"

// // //             return (
// // //               <motion.div
// // //                 key={t.id}
// // //                 {...fadeUp}
// // //                 className="p-6"
// // //                 style={{
// // //                   background: bg,
// // //                   borderRadius: "var(--radius-lg)",
// // //                   boxShadow: "var(--shadow-md)",
// // //                 }}
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <img
// // //                     src={`https://maxproject.pythonanywhere.com${t.image}`}
// // //                     alt={t.name}
// // //                     className="w-10 h-10 rounded-full object-cover"
// // //                   />

// // //                   <div>
// // //                     <p className="font-medium text-sm">{t.name}</p>
// // //                     <div className="flex items-center gap-1 text-xs">
// // //                       <span>{t.rating}</span>
// // //                       <span>⭐</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* REVIEW PREVIEW */}
// // //                 <p className="text-xs leading-relaxed opacity-90">
// // //                   {limitWords(t.review, 50)}
// // //                 </p>

// // //                 {/* READ MORE */}
// // //                 {t.review.split(" ").length > 50 && (
// // //                   <button
// // //                     onClick={() => setActive(t)}
// // //                     className="mt-3 text-xs font-medium text-[var(--color-accent)] hover:underline"
// // //                   >
// // //                     Read More
// // //                   </button>
// // //                 )}
// // //               </motion.div>
// // //             )
// // //           })}
// // //         </motion.div>
// // //       </AnimatePresence>

// // //       {/* PAGINATION */}
// // //       {pages > 1 && (
// // //         <div className="flex justify-center gap-3 mt-10">
// // //           {Array.from({ length: pages }).map((_, i) => (
// // //             <button
// // //               key={i}
// // //               onClick={() => setPage(i)}
// // //               className="w-3 h-3 rounded-full transition-all"
// // //               style={{
// // //                 background:
// // //                   i === page
// // //                     ? "var(--color-accent)"
// // //                     : "var(--color-border)",
// // //                 transform: i === page ? "scale(1.2)" : "scale(1)",
// // //               }}
// // //             />
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* MODAL */}
// // //       <AnimatePresence>
// // //   {active && (
// // //     <motion.div
// // //       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       exit={{ opacity: 0 }}
// // //       onClick={() => setActive(null)}
// // //     >
// // //       <motion.div
// // //         initial={{ scale: 0.9, opacity: 0 }}
// // //         animate={{ scale: 1, opacity: 1 }}
// // //         exit={{ scale: 0.9, opacity: 0 }}
// // //         transition={{ duration: 0.2 }}
// // //         className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl max-h-[80vh] flex flex-col"
// // //         onClick={(e) => e.stopPropagation()}
// // //       >
// // //         <div className="flex items-center gap-3 mb-4">
// // //           <img
// // //             src={`https://maxproject.pythonanywhere.com${active.image}`}
// // //             alt={active.name}
// // //             className="w-12 h-12 rounded-full object-cover"
// // //           />
// // //           <div>
// // //             <p className="font-semibold">{active.name}</p>
// // //             <div className="flex items-center gap-1 text-sm">
// // //               <span>{active.rating}</span>
// // //               <span>⭐</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* SCROLLABLE TEXT */}
// // //         <div className="overflow-y-auto">
// // //           <p className="text-sm leading-relaxed text-gray-700">
// // //             {active.review}
// // //           </p>
// // //         </div>

// // //         <button
// // //           onClick={() => setActive(null)}
// // //           className="mt-6 text-sm font-medium text-[var(--color-accent)] hover:underline"
// // //         >
// // //           Close
// // //         </button>
// // //       </motion.div>
// // //     </motion.div>
// // //   )}
// // // </AnimatePresence>
// // //     </Section>
// // //   )
// // // }


// // "use client"

// // import { useEffect, useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import { fadeUp } from "@/lib/motion"

// // type Testimonial = {
// //   id: number
// //   name: string
// //   image: string
// //   rating: number
// //   review: string
// //   status: string
// // }

// // export default function Testimonials() {
// //   const [data, setData] = useState<Testimonial[]>([])
// //   const [page, setPage] = useState(0)
// //   const [active, setActive] = useState<Testimonial | null>(null)

// //   const perPage = 4

// //   const limitWords = (text: string, words = 50) => {
// //     const arr = text.split(" ")
// //     if (arr.length <= words) return text
// //     return arr.slice(0, words).join(" ") + "..."
// //   }

// //   useEffect(() => {
// //     fetch("https://maxproject.pythonanywhere.com/testimonial/")
// //       .then((r) => r.json())
// //       .then((res) => {
// //         const list = res.data || res
// //         const activeList = list.filter(
// //           (t: Testimonial) => t.status === "Active"
// //         )
// //         setData(activeList)
// //       })
// //       .catch(() => {})
// //   }, [])

// //   const pages = Math.ceil(data.length / perPage)
// //   const visible = data.slice(page * perPage, page * perPage + perPage)

// //   return (
// //     <Section className="py-16 md:py-24">
// //       <Heading title="Our Testimonials" align="center" className="mb-12" />

// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={page}
// //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -40 }}
// //           transition={{ duration: 0.4 }}
// //         >
// //           {visible.map((t, i) => {
// //             const bg =
// //               i % 2 === 0
// //                 ? "color-mix(in srgb, var(--color-accent) 12%, white)"
// //                 : "color-mix(in srgb, var(--color-primary) 12%, white)"

// //             return (
// //               <motion.div
// //                 key={t.id}
// //                 {...fadeUp}
// //                 className="p-6"
// //                 style={{
// //                   background: bg,
// //                   borderRadius: "var(--radius-lg)",
// //                   boxShadow: "var(--shadow-md)",
// //                 }}
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <img
// //                     src={`https://maxproject.pythonanywhere.com${t.image}`}
// //                     alt={t.name}
// //                     className="w-10 h-10 rounded-full object-cover"
// //                   />

// //                   <div>
// //                     <p className="font-medium text-sm">{t.name}</p>
// //                     <div className="flex items-center gap-1 text-xs">
// //                       <span>{t.rating}</span>
// //                       <span>⭐</span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* REVIEW PREVIEW */}
// //                 <p className="text-xs leading-relaxed opacity-90">
// //                   {limitWords(t.review, 50)}
// //                 </p>

// //                 {/* READ MORE */}
// //                 {t.review.split(" ").length > 50 && (
// //                   <button
// //                     onClick={() => setActive(t)}
// //                     className="mt-3 text-xs font-medium text-[var(--color-accent)] hover:underline"
// //                   >
// //                     Read More
// //                   </button>
// //                 )}
// //               </motion.div>
// //             )
// //           })}
// //         </motion.div>
// //       </AnimatePresence>

// //       {/* PAGINATION — PRESERVED */}
// //       {pages > 1 && (
// //         <div className="flex justify-center gap-3 mt-10">
// //           {Array.from({ length: pages }).map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setPage(i)}
// //               className="w-3 h-3 rounded-full transition-all"
// //               style={{
// //                 background:
// //                   i === page
// //                     ? "var(--color-accent)"
// //                     : "var(--color-border)",
// //                 transform: i === page ? "scale(1.2)" : "scale(1)",
// //               }}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       {/* MODAL — SCROLL FIXED */}
// //       <AnimatePresence>
// //         {active && (
// //           <motion.div
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setActive(null)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               transition={{ duration: 0.2 }}
// //               className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl max-h-[80vh] flex flex-col"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="flex items-center gap-3 mb-4">
// //                 <img
// //                   src={`https://maxproject.pythonanywhere.com${active.image}`}
// //                   alt={active.name}
// //                   className="w-12 h-12 rounded-full object-cover"
// //                 />
// //                 <div>
// //                   <p className="font-semibold">{active.name}</p>
// //                   <div className="flex items-center gap-1 text-sm">
// //                     <span>{active.rating}</span>
// //                     <span>⭐</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="overflow-y-auto">
// //                 <p className="text-sm leading-relaxed text-gray-700">
// //                   {active.review}
// //                 </p>
// //               </div>

// //               <button
// //                 onClick={() => setActive(null)}
// //                 className="mt-6 text-sm font-medium text-[var(--color-accent)] hover:underline"
// //               >
// //                 Close
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </Section>
// //   )
// // }


// // "use client"

// // import { useEffect, useState } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import { fadeUp } from "@/lib/motion"
// // import Button from "@/components/ui/Button"
// // import AddTestimonialForm from "./AddTestimonialForm"

// // type Testimonial = {
// //   id: number
// //   name: string
// //   image: string
// //   rating: number
// //   review: string
// //   status: string
// // }

// // export default function Testimonials() {
// //   const [data, setData] = useState<Testimonial[]>([])
// //   const [page, setPage] = useState(0)
// //   const [active, setActive] = useState<Testimonial | null>(null)
// // const [openForm, setOpenForm] = useState(false)
// //   const perPage = 4

// //   /* ⭐ STAR COMPONENTS */
// //   const FullStar = () => (
// //     <svg viewBox="0 0 24 24" className="w-4 h-4 fill-yellow-500">
// //       <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
// //     </svg>
// //   )

// //   const HalfStar = () => (
// //     <svg viewBox="0 0 24 24" className="w-4 h-4">
// //       <defs>
// //         <linearGradient id="half">
// //           <stop offset="50%" stopColor="#facc15" />
// //           <stop offset="50%" stopColor="#e5e7eb" />
// //         </linearGradient>
// //       </defs>
// //       <path
// //         fill="url(#half)"
// //         d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"
// //       />
// //     </svg>
// //   )

// //   const EmptyStar = () => (
// //     <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-300">
// //       <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
// //     </svg>
// //   )

// //   const renderStars = (rating: number) => {
// //     const full = Math.floor(rating)
// //     const half = rating % 1 >= 0.5
// //     const empty = 5 - full - (half ? 1 : 0)

// //     return (
// //       <div className="flex items-center gap-[2px]">
// //         {Array.from({ length: full }).map((_, i) => (
// //           <FullStar key={"f" + i} />
// //         ))}
// //         {half && <HalfStar />}
// //         {Array.from({ length: empty }).map((_, i) => (
// //           <EmptyStar key={"e" + i} />
// //         ))}
// //       </div>
// //     )
// //   }

// //   /* 50 WORD LIMIT */
// //   const limitWords = (text: string, words = 50) => {
// //     const arr = text.split(" ")
// //     if (arr.length <= words) return text
// //     return arr.slice(0, words).join(" ") + "..."
// //   }

// //   useEffect(() => {
// //     fetch("https://maxproject.pythonanywhere.com/testimonial/")
// //       .then((r) => r.json())
// //       .then((res) => {
// //         const list = res.data || res
// //         const activeList = list.filter(
// //           (t: Testimonial) => t.status === "Active"
// //         )
// //         setData(activeList)
// //       })
// //       .catch(() => {})
// //   }, [])

// //   const pages = Math.ceil(data.length / perPage)
// //   const visible = data.slice(page * perPage, page * perPage + perPage)

// //   return (
// //     <Section className="py-16 md:py-24">
// //       <Heading title="Our Testimonials" align="center" className="mb-12" />
// // <div className="flex justify-center mb-8">
// //   <Button onClick={() => setOpenForm(true)}>
// //     Add Testimonial
// //   </Button>
// // </div>
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={page}
// //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -40 }}
// //           transition={{ duration: 0.4 }}
// //         >
// //           {visible.map((t, i) => {
// //             const bg =
// //               i % 2 === 0
// //                 ? "color-mix(in srgb, var(--color-accent) 12%, white)"
// //                 : "color-mix(in srgb, var(--color-primary) 12%, white)"

// //             return (
// //               <motion.div
// //                 key={t.id}
// //                 {...fadeUp}
// //                 className="p-6"
// //                 style={{
// //                   background: bg,
// //                   borderRadius: "var(--radius-lg)",
// //                   boxShadow: "var(--shadow-md)",
// //                 }}
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <img
// //                     src={`https://maxproject.pythonanywhere.com${t.image}`}
// //                     alt={t.name}
// //                     className="w-10 h-10 rounded-full object-cover"
// //                   />

// //                   <div>
// //                     <p className="font-medium text-sm">{t.name}</p>
// //                     {renderStars(t.rating)}
// //                   </div>
// //                 </div>

// //                 <p className="text-xs leading-relaxed opacity-90">
// //                   {limitWords(t.review, 50)}
// //                 </p>

// //                 {t.review.split(" ").length > 50 && (
// //                   <button
// //                     onClick={() => setActive(t)}
// //                     className="mt-3 text-xs font-medium text-[var(--color-accent)] hover:underline"
// //                   >
// //                     Read More
// //                   </button>
// //                 )}
// //               </motion.div>
// //             )
// //           })}
// //         </motion.div>
// //       </AnimatePresence>

// //       {/* PAGINATION */}
// //       {pages > 1 && (
// //         <div className="flex justify-center gap-3 mt-10">
// //           {Array.from({ length: pages }).map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setPage(i)}
// //               className="w-3 h-3 rounded-full transition-all"
// //               style={{
// //                 background:
// //                   i === page
// //                     ? "var(--color-accent)"
// //                     : "var(--color-border)",
// //                 transform: i === page ? "scale(1.2)" : "scale(1)",
// //               }}
// //             />
// //           ))}
// //         </div>
// //       )}

// //       {/* MODAL */}
// //       <AnimatePresence>
// //         {active && (
// //           <motion.div
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setActive(null)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               transition={{ duration: 0.2 }}
// //               className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl max-h-[80vh] flex flex-col"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="flex items-center gap-3 mb-4">
// //                 <img
// //                   src={`https://maxproject.pythonanywhere.com${active.image}`}
// //                   alt={active.name}
// //                   className="w-12 h-12 rounded-full object-cover"
// //                 />
// //                 <div>
// //                   <p className="font-semibold">{active.name}</p>
// //                   {renderStars(active.rating)}
// //                 </div>
// //               </div>

// //               <div className="overflow-y-auto">
// //                 <p className="text-sm leading-relaxed text-gray-700">
// //                   {active.review}
// //                 </p>
// //               </div>

// //               <button
// //                 onClick={() => setActive(null)}
// //                 className="mt-6 text-sm font-medium text-[var(--color-accent)] hover:underline"
// //               >
// //                 Close
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       <AnimatePresence>
// //   {openForm && (
// //     <motion.div
// //       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       onClick={() => setOpenForm(false)}
// //     >
// //       <motion.div
// //         initial={{ scale: 0.9, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         exit={{ scale: 0.9, opacity: 0 }}
// //         className="bg-white max-w-lg w-full rounded-xl shadow-xl"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <AddTestimonialForm onClose={() => setOpenForm(false)} />
// //       </motion.div>
// //     </motion.div>
// //   )}
// // </AnimatePresence>
// //     </Section>
// //   )
// // }

// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import { fadeUp } from "@/lib/motion"
// import Button from "@/components/ui/Button"
// import AddTestimonialForm from "./AddTestimonialForm"

// type Testimonial = {
//   id: number
//   name: string
//   image: string
//   rating: number
//   review: string
//   status: string
// }

// export default function Testimonials() {
//   const [data, setData] = useState<Testimonial[]>([])
//   const [page, setPage] = useState(0)
//   const [active, setActive] = useState<Testimonial | null>(null)
//   const [openForm, setOpenForm] = useState(false)

//   const perPage = 4

//   /* ⭐ STAR COMPONENTS */
//   const FullStar = () => (
//     <svg viewBox="0 0 24 24" className="w-4 h-4 fill-yellow-500">
//       <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
//     </svg>
//   )

//   const HalfStar = () => (
//     <svg viewBox="0 0 24 24" className="w-4 h-4">
//       <defs>
//         <linearGradient id="half">
//           <stop offset="50%" stopColor="#facc15" />
//           <stop offset="50%" stopColor="#e5e7eb" />
//         </linearGradient>
//       </defs>
//       <path
//         fill="url(#half)"
//         d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"
//       />
//     </svg>
//   )

//   const EmptyStar = () => (
//     <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-300">
//       <path d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z" />
//     </svg>
//   )

//   const renderStars = (rating: number) => {
//     const full = Math.floor(rating)
//     const half = rating % 1 >= 0.5
//     const empty = 5 - full - (half ? 1 : 0)

//     return (
//       <div className="flex items-center gap-[2px]">
//         {Array.from({ length: full }).map((_, i) => (
//           <FullStar key={"f" + i} />
//         ))}
//         {half && <HalfStar />}
//         {Array.from({ length: empty }).map((_, i) => (
//           <EmptyStar key={"e" + i} />
//         ))}
//       </div>
//     )
//   }

//   /* ✅ SAFE HTML WORD LIMIT */
//   const limitWords = (html: string, words = 50) => {
//     const text = html.replace(/<[^>]*>/g, "")
//     const arr = text.split(" ")
//     if (arr.length <= words) return html
//     return arr.slice(0, words).join(" ") + "..."
//   }

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/testimonial/")
//       .then((r) => r.json())
//       .then((res) => {
//         const list = res.data || res
//         const activeList = list.filter(
//           (t: Testimonial) => t.status === "Active"
//         )
//         setData(activeList)
//       })
//       .catch(() => {})
//   }, [])

//   const pages = Math.ceil(data.length / perPage)
//   const visible = data.slice(page * perPage, page * perPage + perPage)

//   return (
//     <Section className="py-16 md:py-24">
//       <Heading title="Our Testimonials" align="center" className="mb-12" />

//       <div className="flex justify-center mb-8">
//         <Button onClick={() => setOpenForm(true)}>
//           Add Testimonial
//         </Button>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={page}
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -40 }}
//           transition={{ duration: 0.4 }}
//         >
//           {visible.map((t, i) => {
//             const bg =
//               i % 2 === 0
//                 ? "color-mix(in srgb, var(--color-accent) 12%, white)"
//                 : "color-mix(in srgb, var(--color-primary) 12%, white)"

//             return (
//               <motion.div
//                 key={t.id}
//                 {...fadeUp}
//                 className="p-6"
//                 style={{
//                   background: bg,
//                   borderRadius: "var(--radius-lg)",
//                   boxShadow: "var(--shadow-md)",
//                 }}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <img
//                     src={`https://maxproject.pythonanywhere.com${t.image}`}
//                     alt={t.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />

//                   <div>
//                     <p className="font-medium text-sm">{t.name}</p>
//                     {renderStars(t.rating)}
//                   </div>
//                 </div>

//                 {/* ✅ HTML RENDER FIX */}
//                 <p
//                   className="text-xs leading-relaxed opacity-90"
//                   dangerouslySetInnerHTML={{
//                     __html: limitWords(t.review, 50),
//                   }}
//                 />

//                 {t.review.replace(/<[^>]*>/g, "").split(" ").length > 50 && (
//                   <button
//                     onClick={() => setActive(t)}
//                     className="mt-3 text-xs font-medium text-[var(--color-accent)] hover:underline"
//                   >
//                     Read More
//                   </button>
//                 )}
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </AnimatePresence>

//       {/* PAGINATION */}
//       {pages > 1 && (
//         <div className="flex justify-center gap-3 mt-10">
//           {Array.from({ length: pages }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setPage(i)}
//               className="w-3 h-3 rounded-full transition-all"
//               style={{
//                 background:
//                   i === page
//                     ? "var(--color-accent)"
//                     : "var(--color-border)",
//                 transform: i === page ? "scale(1.2)" : "scale(1)",
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* REVIEW MODAL */}
//       <AnimatePresence>
//         {active && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActive(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl max-h-[80vh] flex flex-col"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <img
//                   src={`https://maxproject.pythonanywhere.com${active.image}`}
//                   alt={active.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold">{active.name}</p>
//                   {renderStars(active.rating)}
//                 </div>
//               </div>

//               <div className="overflow-y-auto">
//                 {/* ✅ HTML RENDER FIX */}
//                 <p
//                   className="text-sm leading-relaxed text-gray-700"
//                   dangerouslySetInnerHTML={{ __html: active.review }}
//                 />
//               </div>

//               <button
//                 onClick={() => setActive(null)}
//                 className="mt-6 text-sm font-medium text-[var(--color-accent)] hover:underline"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ADD FORM MODAL */}
//       <AnimatePresence>
//         {openForm && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setOpenForm(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white max-w-lg w-full rounded-xl shadow-xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <AddTestimonialForm onClose={() => setOpenForm(false)} />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { fadeUp } from "@/lib/motion"
import Button from "@/components/ui/Button"
import AddTestimonialForm from "./AddTestimonialForm"

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
  const [page, setPage] = useState(0)
  const [active, setActive] = useState<Testimonial | null>(null)
  const [openForm, setOpenForm] = useState(false)

  const perPage = 4

  /* ⭐ STAR COMPONENTS */
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
      <path
        fill="url(#half)"
        d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"
      />
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
        {Array.from({ length: full }).map((_, i) => (
          <FullStar key={"f" + i} />
        ))}
        {half && <HalfStar />}
        {Array.from({ length: empty }).map((_, i) => (
          <EmptyStar key={"e" + i} />
        ))}
      </div>
    )
  }

  /* 50 WORD LIMIT — UNCHANGED */
  const limitWords = (text: string, words = 50) => {
    const arr = text.split(" ")
    if (arr.length <= words) return text
    return arr.slice(0, words).join(" ") + "..."
  }

  useEffect(() => {
    fetch("https://maxproject.pythonanywhere.com/testimonial/")
      .then((r) => r.json())
      .then((res) => {
        const list = res.data || res
        const activeList = list.filter(
          (t: Testimonial) => t.status === "Active"
        )
        setData(activeList)
      })
      .catch(() => {})
  }, [])

  const pages = Math.ceil(data.length / perPage)
  const visible = data.slice(page * perPage, page * perPage + perPage)

  return (
    <Section className="py-16 md:py-24">
      <Heading title="Our Testimonials" align="center" className="mb-12" />

      <div className="flex justify-center mb-8">
        <Button onClick={() => setOpenForm(true)}>
          Add Testimonial
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
        >
          {visible.map((t, i) => {
            const bg =
              i % 2 === 0
                ? "color-mix(in srgb, var(--color-accent) 12%, white)"
                : "color-mix(in srgb, var(--color-primary) 12%, white)"

            return (
              <motion.div
                key={t.id}
                {...fadeUp}
                className="p-6"
                style={{
                  background: bg,
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={`https://maxproject.pythonanywhere.com${t.image}`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    {renderStars(t.rating)}
                  </div>
                </div>

                {/* ✅ HTML FIX ONLY */}
                <p
                  className="text-xs leading-relaxed opacity-90 break-words"
                  dangerouslySetInnerHTML={{
                    __html: limitWords(t.review, 50),
                  }}
                />

                {t.review.split(" ").length > 50 && (
                  <button
                    onClick={() => setActive(t)}
                    className="mt-3 text-xs font-medium text-[var(--color-accent)] hover:underline"
                  >
                    Read More
                  </button>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* PAGINATION — UNCHANGED */}
      {pages > 1 && (
  <div className="flex justify-center gap-3 mt-10">
    {Array.from({ length: pages }).map((_, i) => (
      <button
        key={i}
        onClick={() => setPage(i)}
        className="w-3 h-3 rounded-full transition-all"
        style={{
          background:
            i === page
              ? "var(--color-accent)"
              : "var(--color-border)",
          transform: i === page ? "scale(1.2)" : "scale(1)",
        }}
      />
    ))}
  </div>
)}

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
              transition={{ duration: 0.2 }}
              className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`https://maxproject.pythonanywhere.com${active.image}`}
                  alt={active.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{active.name}</p>
                  {renderStars(active.rating)}
                </div>
              </div>

              <div className="overflow-y-auto">
                {/* ✅ HTML FIX ONLY */}
                <p
                  className="text-sm leading-relaxed text-gray-700 break-words"
                  dangerouslySetInnerHTML={{ __html: active.review }}
                />
              </div>

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

      {/* ADD FORM MODAL — UNCHANGED */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-lg w-full rounded-xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AddTestimonialForm onClose={() => setOpenForm(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}