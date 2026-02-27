

// "use client"

// import { motion } from "framer-motion"
// import { Service } from "@/data/services"
// import ServiceQuoteForm from "./ServiceQuoteForm"

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
//     <section className="bg-light py-16">
//       <div className="max-w-[1180px] mx-auto px-6">

//         {/* SECTION HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-10"
//         >
//           <h2
//             className="text-3xl md:text-4xl font-semibold"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             Our <span className="text-accent">Services</span>
//           </h2>

//           <div className="flex justify-center mt-3 gap-2">
//             <div className="w-10 h-[2px] bg-primary" />
//             <div className="w-6 h-[2px] bg-accent" />
//             <div className="w-10 h-[2px] bg-primary" />
//           </div>
//         </motion.div>

//         {/* BOX CONTAINER */}
//         <div className="">

//           {/* SERVICE TITLE */}
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             className="text-[28px] md:text-[32px] font-semibold text-primary mb-8"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             {service.title}
//           </motion.h1>

//           {/* TOP GRID */}
//           <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

//             <motion.img
//               src={service.gif}
//               alt={service.title}
//               variants={slideLeft}
//               initial="hidden"
//               animate="show"
//               className="w-full max-w-[520px]"
//             />

//             <motion.div variants={slideRight} initial="hidden" animate="show">
//             </motion.div>

//           </div>

//           {/* DESCRIPTION */}
//           <motion.div
//             className="mt-10 space-y-4 text-[15px] leading-relaxed"
//             variants={stagger}
//             initial="hidden"
//             animate="show"
//           >
// <motion.div
//   className="mt-10 grid gap-6"
//   variants={stagger}
//   initial="hidden"
//   animate="show"
// >
//   {service.description.map((html, i) => (
//     <motion.div
//       key={i}
//       variants={fadeUp}
//       className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
//     >
//       <div
//         className="
//           prose
//           prose-sm
//           md:prose-base
//           max-w-none
//           text-gray-700
//         "
//         dangerouslySetInnerHTML={{ __html: html }}
//       />
//     </motion.div>
//   ))}
// </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import type { Service } from "@/lib/services"

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

export default function ServiceReadMore({ service }: { service: Service }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1180px] mx-auto px-6">

        

        {/* DESCRIPTION */}
<motion.div
  className="mt-10"
  variants={stagger}
  initial="hidden"
  animate="show"
>
  <div className="grid gap-6 md:gap-8">
    {Array.isArray(service.description) &&
  service.description.map((html, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        className="
           bg-light
          border
          border-gray-200
          rounded-xl
          p-6 md:p-8
          shadow-sm
          hover:shadow-md
          transition-shadow
        "
      >
        <div
          className="
            prose
            prose-sm
            md:prose-base
            max-w-none
            text-gray-700
            prose-headings:text-primary
            prose-headings:font-semibold
            prose-p:leading-relaxed
            prose-ul:list-disc
            prose-ul:pl-5
          "
          dangerouslySetInnerHTML={{ __html: html.replace(/&lt;/g,"<").replace(/&gt;/g,">") }}
        />
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  )
}