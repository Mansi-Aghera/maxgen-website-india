// type Item = {
//   title: string
//   desc: string
// }

// type Props = {
//   title: string
//   intro?: string
//   items: Item[]
// }

// export default function AboutBlock({ title, intro, items }: Props) {
//   return (
//     <section className="py-12">
//       <div className="max-w-5xl mx-auto">
//         <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
//           <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

//           <div className="h-[3px] w-full bg-red-600 mt-4 mb-6" />

//           {intro && (
//             <p className="text-gray-700 mb-6 leading-7">{intro}</p>
//           )}

//           <div className="space-y-6">
//             {items.map((it, i) => (
//               <div key={i}>
//                 <h4 className="font-semibold text-gray-900">{it.title}</h4>
//                 <p className="text-gray-700">{it.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"

type Item = {
  title: string
  desc: string
}

type Props = {
  title: string
  intro?: string
  items: Item[]
}

export default function AboutBlock({ title, intro, items }: Props) {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-1 sm:px-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8"
        >
          {/* title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl sm:text-2xl font-semibold text-gray-900"
          >
            {title}
          </motion.h2>

          {/* red divider */}
          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              show: { width: "100%", opacity: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-[3px] bg-red-600 mt-4 mb-6"
          />

          {/* intro */}
          {intro && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-gray-700 mb-6 leading-7"
            >
              {intro}
            </motion.p>
          )}

          {/* items */}
          <div className="space-y-5 sm:space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h4 className="font-semibold text-gray-900">
                  {it.title}
                </h4>
                <p className="text-gray-700">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}