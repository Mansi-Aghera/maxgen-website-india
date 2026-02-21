// "use client"

// import { motion } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import { fadeUp, stagger } from "@/lib/motion"

// type Testimonial = {
//   name: string
//   image: string
//   rating: number
//   text: string
//   bg: string
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Ravi Kumar Singh",
//     image: "/images/home/t1.jpg",
//     rating: 4.5,
//     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
//     bg: "#D8F3DC",
//   },
//   {
//     name: "Priya Mehta",
//     image: "/images/home/t2.jpg",
//     rating: 4.5,
//     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
//     bg: "#DDEBFF",
//   },
//   {
//     name: "Sneha Reddy",
//     image: "/images/home/t3.webp",
//     rating: 4.5,
//     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
//     bg: "#F6E7D8",
//   },
//   {
//     name: "Aarav Patel",
//     image: "/images/home/t4.jpg",
//     rating: 4.5,
//     text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
//     bg: "#F8D7E6",
//   },
// ]

// export default function Testimonials() {
//   return (
//     <Section className="">
//       <div
//         className="rounded-2xl p-8 md:p-12"
//         style={{
//           background: "var(--color-bg-soft)",
//           borderRadius: "var(--radius-xl)",
//         }}
//       >
//         {/* Title */}
//         <Heading
//           title={
//             <>
//               <span>Our Testimonials</span>
//             </>
//           }
//           align="center"
//           className="mb-12"
//         />

//         {/* Cards */}
//         <motion.div
//           {...stagger}
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               {...fadeUp}
//               className="p-6 rounded-xl shadow-md"
//               style={{
//                 background: t.bg,
//                 borderRadius: "var(--radius-lg)",
//                 boxShadow: "var(--shadow-md)",
//               }}
//             >
//               {/* Header */}
//               <div className="flex items-center gap-3 mb-4">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />

//                 <div>
//                   <p className="font-medium text-sm">{t.name}</p>

//                   <div className="flex items-center gap-1 text-xs">
//                     <span>{t.rating}</span>
//                     <span>⭐</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-xs leading-relaxed opacity-90">
//                 {t.text}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </Section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { fadeUp, stagger } from "@/lib/motion"

type Testimonial = {
  name: string
  image: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ravi Kumar Singh",
    image: "/images/home/t1.jpg",
    rating: 4.5,
    text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
  },
  {
    name: "Priya Mehta",
    image: "/images/home/t2.jpg",
    rating: 4.5,
    text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
  },
  {
    name: "Sneha Reddy",
    image: "/images/home/t3.webp",
    rating: 4.5,
    text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
  },
  {
    name: "Aarav Patel",
    image: "/images/home/t4.jpg",
    rating: 4.5,
    text: "Maxgen's internship will allow you to work alongside and pick the brains of a group of web developers with the ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web development, Front-end development, UI design, Software development, etc.",
  },
]

export default function Testimonials() {
  return (
    <Section className="py-16 md:py-24">

         <Heading
          title={
            <>
              <span>Our Testimonials</span>
            </>
          }
          align="center"
          className="mb-12"
        />
      <motion.div
        {...stagger}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {testimonials.map((t, i) => {
          const bg =
            i % 2 === 0
              ? "color-mix(in srgb, var(--color-accent) 12%, white)"
              : "color-mix(in srgb, var(--color-primary) 12%, white)"

          return (
            <motion.div
              key={i}
              {...fadeUp}
              className="p-6"
              style={{
                background: bg,
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
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

              {/* Text */}
              <p className="text-xs leading-relaxed opacity-90">
                {t.text}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}