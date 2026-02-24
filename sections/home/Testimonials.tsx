// // // "use client"

// // // import { motion } from "framer-motion"
// // // import Section from "@/components/ui/Section"
// // // import Heading from "@/components/ui/Heading"
// // // import { fadeUp, stagger } from "@/lib/motion"

// // // type Testimonial = {
// // //   name: string
// // //   image: string
// // //   rating: number
// // //   text: string
// // //   bg: string
// // // }

// // // const testimonials: Testimonial[] = [
// // //   {
// // //     name: "Ravi Kumar Singh",
// // //     image: "/images/home/t1.jpg",
// // //     rating: 4.5,
// // //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// // //     bg: "#D8F3DC",
// // //   },
// // //   {
// // //     name: "Priya Mehta",
// // //     image: "/images/home/t2.jpg",
// // //     rating: 4.5,
// // //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// // //     bg: "#DDEBFF",
// // //   },
// // //   {
// // //     name: "Sneha Reddy",
// // //     image: "/images/home/t3.webp",
// // //     rating: 4.5,
// // //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// // //     bg: "#F6E7D8",
// // //   },
// // //   {
// // //     name: "Aarav Patel",
// // //     image: "/images/home/t4.jpg",
// // //     rating: 4.5,
// // //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// // //     bg: "#F8D7E6",
// // //   },
// // // ]

// // // export default function Testimonials() {
// // //   return (
// // //     <Section className="">
// // //       <div
// // //         className="rounded-2xl p-8 md:p-12"
// // //         style={{
// // //           background: "var(--color-bg-soft)",
// // //           borderRadius: "var(--radius-xl)",
// // //         }}
// // //       >
// // //         {/* Title */}
// // //         <Heading
// // //           title={
// // //             <>
// // //               <span>Our Testimonials</span>
// // //             </>
// // //           }
// // //           align="center"
// // //           className="mb-12"
// // //         />

// // //         {/* Cards */}
// // //         <motion.div
// // //           {...stagger}
// // //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
// // //         >
// // //           {testimonials.map((t, i) => (
// // //             <motion.div
// // //               key={i}
// // //               {...fadeUp}
// // //               className="p-6 rounded-xl shadow-md"
// // //               style={{
// // //                 background: t.bg,
// // //                 borderRadius: "var(--radius-lg)",
// // //                 boxShadow: "var(--shadow-md)",
// // //               }}
// // //             >
// // //               {/* Header */}
// // //               <div className="flex items-center gap-3 mb-4">
// // //                 <img
// // //                   src={t.image}
// // //                   alt={t.name}
// // //                   className="w-10 h-10 rounded-full object-cover"
// // //                 />

// // //                 <div>
// // //                   <p className="font-medium text-sm">{t.name}</p>

// // //                   <div className="flex items-center gap-1 text-xs">
// // //                     <span>{t.rating}</span>
// // //                     <span>⭐</span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Text */}
// // //               <p className="text-xs leading-relaxed opacity-90">
// // //                 {t.text}
// // //               </p>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>
// // //       </div>
// // //     </Section>
// // //   )
// // // }


// // "use client"

// // import { motion } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import { fadeUp, stagger } from "@/lib/motion"

// // type Testimonial = {
// //   name: string
// //   image: string
// //   rating: number
// //   text: string
// // }

// // const testimonials: Testimonial[] = [
// //   {
// //     name: "Ravi Kumar Singh",
// //     image: "/images/home/t1.jpg",
// //     rating: 4.5,
// //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// //   },
// //   {
// //     name: "Priya Mehta",
// //     image: "/images/home/t2.jpg",
// //     rating: 4.5,
// //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// //   },
// //   {
// //     name: "Sneha Reddy",
// //     image: "/images/home/t3.webp",
// //     rating: 4.5,
// //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// //   },
// //   {
// //     name: "Aarav Patel",
// //     image: "/images/home/t4.jpg",
// //     rating: 4.5,
// //     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
// //   },
// // ]

// // export default function Testimonials() {
// //   return (
// //     <Section className="py-16 md:py-24">

// //          <Heading
// //           title={
// //             <>
// //               <span>Our Testimonials</span>
// //             </>
// //           }
// //           align="center"
// //           className="mb-12"
// //         />
// //       <motion.div
// //         {...stagger}
// //         className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
// //       >
// //         {testimonials.map((t, i) => {
// //           const bg =
// //             i % 2 === 0
// //               ? "color-mix(in srgb, var(--color-accent) 12%, white)"
// //               : "color-mix(in srgb, var(--color-primary) 12%, white)"

// //           return (
// //             <motion.div
// //               key={i}
// //               {...fadeUp}
// //               className="p-6"
// //               style={{
// //                 background: bg,
// //                 borderRadius: "var(--radius-lg)",
// //                 boxShadow: "var(--shadow-md)",
// //               }}
// //             >
// //               {/* Header */}
// //               <div className="flex items-center gap-3 mb-4">
// //                 <img
// //                   src={t.image}
// //                   alt={t.name}
// //                   className="w-10 h-10 rounded-full object-cover"
// //                 />

// //                 <div>
// //                   <p className="font-medium text-sm">{t.name}</p>

// //                   <div className="flex items-center gap-1 text-xs">
// //                     <span>{t.rating}</span>
// //                     <span>⭐</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Text */}
// //               <p className="text-xs leading-relaxed opacity-90">
// //                 {t.text}
// //               </p>
// //             </motion.div>
// //           )
// //         })}
// //       </motion.div>
// //     </Section>
// //   )
// // }

// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import { fadeUp } from "@/lib/motion"

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

//   const perPage = 4

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/testimonial/")
//       .then((r) => r.json())
//       .then((res) => {
//         const list = res.data || res   // <-- FIX
//         const active = list.filter((t: Testimonial) => t.status === "Active")
//         setData(active)
//       })
//       .catch(() => {})
//   }, [])

//   const pages = Math.ceil(data.length / perPage)
//   const visible = data.slice(page * perPage, page * perPage + perPage)

//   return (
//     <Section className="py-16 md:py-24">
//       <Heading title="Our Testimonials" align="center" className="mb-12" />

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
//                     <div className="flex items-center gap-1 text-xs">
//                       <span>{t.rating}</span>
//                       <span>⭐</span>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-xs leading-relaxed opacity-90">
//                   {t.review}
//                 </p>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </AnimatePresence>

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
//     </Section>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { fadeUp } from "@/lib/motion"

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

  const perPage = 4

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
                    <div className="flex items-center gap-1 text-xs">
                      <span>{t.rating}</span>
                      <span>⭐</span>
                    </div>
                  </div>
                </div>

                {/* REVIEW PREVIEW */}
                <p className="text-xs leading-relaxed opacity-90">
                  {limitWords(t.review, 50)}
                </p>

                {/* READ MORE */}
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

      {/* PAGINATION */}
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
            <div className="flex items-center gap-1 text-sm">
              <span>{active.rating}</span>
              <span>⭐</span>
            </div>
          </div>
        </div>

        {/* SCROLLABLE TEXT */}
        <div className="overflow-y-auto">
          <p className="text-sm leading-relaxed text-gray-700">
            {active.review}
          </p>
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
    </Section>
  )
}