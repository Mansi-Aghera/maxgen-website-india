// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Button from "@/components/ui/Button"

// interface Slide {
//   title: string
//   highlight: string
//   description: string
//   image: string
// }

// const slides: Slide[] = [
//   {
//     title: "Create your Mobile App with Us at",
//     highlight: "Maxgen",
//     description:
//       "Experienced developers provide special services for developing Android, iOS, and hybrid applications.",
//     image: "/images/home/home1.webp",
//   },
//   {
//     title: "Create your Business Logo & Graphics with Us at",
//     highlight: "Maxgen",
//     description:
//       "Our designers craft logos and visuals using color theory and brand strategy.",
//     image: "/images/home/home2.webp",
//   },
//   {
//     title: "Create your E-Commerce Website with Us at",
//     highlight: "Maxgen",
//     description:
//       "We build high-performance e-commerce platforms optimized for conversion.",
//     image: "/images/home/home3.webp",
//   },
//   {
//     title: "Get your SEO Services with Us at",
//     highlight: "Maxgen",
//     description:
//       "SEO strategies that attract quality traffic and grow visibility.",
//     image: "/images/home/home4.webp",
//   },
//   {
//     title: "Create your Business Website with Us at",
//     highlight: "Maxgen",
//     description:
//       "Custom websites tailored to your brand and business goals.",
//     image: "/images/home/home5.webp",
//   },
//   {
//     title: "Maintain your Business Website/App with Us at",
//     highlight: "Maxgen",
//     description:
//       "Reliable maintenance and support to keep your digital products running.",
//     image: "/images/home/home3.webp",
//   },
// ]

// export default function Hero() {
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length)
//     }, 10000)
//     return () => clearInterval(id)
//   }, [])

//   const slide = slides[index]

//   return (
//     <Section className="relative overflow-hidden">
//       {/* background glow */}
//       <motion.div
//         className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(239,59,58,0.12), transparent 60%)",
//         }}
//         animate={{ scale: [1, 1.05, 1] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />

//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.image}
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -80 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative"
//           >
//             <motion.img
//               src={slide.image}
//               alt=""
//               className="w-full max-w-[520px] mx-auto lg:mx-0"
//               animate={{ y: [0, -12, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.title}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.12 } },
//             }}
//           >
//             <motion.h1
//               variants={{
//                 hidden: { opacity: 0, y: 40 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               {slide.title}{" "}
//               <span className="text-accent relative inline-block">
//                 {slide.highlight}
//                 <motion.span
//                   className="absolute left-0 -bottom-2 h-[3px] bg-accent"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 0.6 }}
//                 />
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="mt-6 text-lg max-w-xl"
//             >
//               {slide.description}
//             </motion.p>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="mt-8"
//             >
//               <Button size="lg">Get Quote Now</Button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </Section>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

interface Slide {
  title: string
  highlight: string
  description: string
  image: string
}

const slides: Slide[] = [
  {
    title: "Create your Mobile App with Us at",
    highlight: "Maxgen",
    description:
      "Experienced developers provide special services for developing Android, iOS, and hybrid applications.",
    image: "/images/home/home6.webp",
  },
  {
    title: "Create your Business Logo & Graphics with Us at",
    highlight: "Maxgen",
    description:
      "Our designers craft logos and visuals using color theory and brand strategy.",
    image: "/images/home/home2.webp",
  },
  {
    title: "Create your E-Commerce Website with Us at",
    highlight: "Maxgen",
    description:
      "We build high-performance e-commerce platforms optimized for conversion.",
    image: "/images/home/home3.webp",
  },
  {
    title: "Get your SEO Services with Us at",
    highlight: "Maxgen",
    description:
      "SEO strategies that attract quality traffic and grow visibility.",
    image: "/images/home/home4.webp",
  },
  {
    title: "Create your Business Website with Us at",
    highlight: "Maxgen",
    description:
      "Custom websites tailored to your brand and business goals.",
    image: "/images/home/home5.webp",
  },
  {
    title: "Maintain your Business Website/App with Us at",
    highlight: "Maxgen",
    description:
      "Reliable maintenance and support to keep your digital products running.",
    image: "/images/home/home1.webp",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000) // 10s per slide
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <Section className="relative overflow-hidden">
      {/* ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(239,59,58,0.12), transparent 60%)",
        }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1], // premium easing
            }}
            className="relative"
          >
            <motion.img
              src={slide.image}
              alt=""
              className="w-full max-w-[520px] mx-auto lg:mx-0"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* TEXT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {slide.title}{" "}
              <span className="text-accent relative inline-block">
                {slide.highlight}
                <motion.span
                  className="absolute left-0 -bottom-2 h-[3px] bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
              className="mt-6 text-lg max-w-xl"
            >
              {slide.description}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
              className="mt-8"
            >
              <Button href="/quote" target="_blank" variant="primary" size="md">
  GET QUOTE NOW
</Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
