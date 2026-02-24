// // "use client"

// // import { motion } from "framer-motion"
// // import { Service } from "@/data/services"
// // import ServiceQuoteForm from "./ServiceQuoteForm"

// // export default function ServiceReadMore({ service }: { service: Service }) {
// //   return (
// //     <section className="bg-light py-16">
// //       <div className="max-w-[1180px] mx-auto px-6">

// //         {/* TITLE */}
// //         <h1
// //           className="text-[32px] font-semibold text-primary mb-10"
// //           style={{ fontFamily: "var(--font-heading)" }}
// //         >
// //           {service.title}
// //         </h1>

// //         {/* TOP ROW */}
// //         <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">

// //           {/* GIF IMAGE */}
// //           <motion.img
// //             src={service.gif}
// //             alt={service.title}
// //             initial={{ opacity: 0, x: -40 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             className="w-full max-w-[520px]"
// //           />

// //           {/* QUOTE FORM (reuse same component later) */}
// //           <ServiceQuoteForm />

// //         </div>

// //         {/* DESCRIPTION */}
// //         <div className="mt-10 space-y-4 text-[15px] leading-relaxed">
// //           {service.description.map((p, i) => (
// //             <p key={i}>{p}</p>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }


// "use client"

// import { motion } from "framer-motion"
// import { Service } from "@/data/services"
// import ServiceQuoteForm from "./ServiceQuoteForm"

// /* ANIMATIONS */
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// }

// const slideLeft = {
//   hidden: { opacity: 0, x: -50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
// }

// const slideRight = {
//   hidden: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
// }

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
// }

// export default function ServiceReadMore({ service }: { service: Service }) {
//   return (
//     <section className="bg-light py-16 overflow-hidden">
//       <div className="max-w-[1180px] mx-auto px-6">
        
//         {/* TITLE */}
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className="text-[32px] font-semibold text-primary mb-10"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           {service.title}
//         </motion.h1>

//         {/* TOP ROW */}
//         <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          
//           {/* IMAGE */}
//           <motion.img
//             src={service.gif}
//             alt={service.title}
//             variants={slideLeft}
//             initial="hidden"
//             animate="show"
//             className="w-full max-w-[520px]"
//           />

//           {/* FORM */}
//           <motion.div
//             variants={slideRight}
//             initial="hidden"
//             animate="show"
//           >
//             <ServiceQuoteForm service={service.title} />
//           </motion.div>

//         </div>

//         {/* DESCRIPTION */}
//         <motion.div
//           className="mt-10 space-y-4 text-[15px] leading-relaxed"
//           variants={stagger}
//           initial="hidden"
//           animate="show"
//         >
//           {service.description.map((p, i) => (
//             <motion.p key={i} variants={fadeUp} className="break-words">
//               {p}
//             </motion.p>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Service } from "@/data/services"
import ServiceQuoteForm from "./ServiceQuoteForm"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

/* ✅ HTML FIX */
const stripOuterP = (html: string) =>
  html.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "")

const decodeHtml = (html: string) => {
  if (!html) return ""
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}

export default function ServiceReadMore({ service }: { service: Service }) {
  return (
    <section className="bg-light py-16 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6">
        
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[32px] font-semibold text-primary mb-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.title}
        </motion.h1>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          
          <motion.img
            src={service.gif}
            alt={service.title}
            variants={slideLeft}
            initial="hidden"
            animate="show"
            className="w-full max-w-[520px]"
          />

          <motion.div variants={slideRight} initial="hidden" animate="show">
            <ServiceQuoteForm service={service.title} />
          </motion.div>

        </div>

        {/* DESCRIPTION */}
        <motion.div
          className="mt-10 space-y-4 text-[15px] leading-relaxed"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {service.description.map((p, i) => (
 <motion.div
  className="mt-10 space-y-4 text-[15px] leading-relaxed break-words"
  variants={stagger}
  initial="hidden"
  animate="show"
  dangerouslySetInnerHTML={{
    __html: service.description?.join("") || "",
  }}
/>
))}
        </motion.div>

      </div>
    </section>
  )
}