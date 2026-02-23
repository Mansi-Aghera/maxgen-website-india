// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"

// interface Props {
//   title: string
//   description: string[]
//   image: string
//   reverse?: boolean
//   slug: string
// }

// export default function ServiceDetail({
//   title,
//   description,
//   image,
//   reverse,
//   slug,
// }: Props) {
//   return (
//     <section className="py-20">
//       <div className="max-w-[1180px] mx-auto px-6">
//         <div
//           className={`grid lg:grid-cols-[320px_1fr] gap-14 items-center ${
//             reverse ? "lg:grid-flow-col-dense" : ""
//           }`}
//         >
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: reverse ? 60 : -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className={`flex justify-center ${
//               reverse ? "lg:col-start-2" : ""
//             }`}
//           >
//             <img
//               src={image}
//               alt={title}
//               className="w-[260px] md:w-[300px]"
//             />
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: reverse ? -60 : 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className={`relative ${
//               reverse ? "lg:col-start-1" : ""
//             }`}
//           >
//             {/* vertical divider */}
//             <span className="hidden lg:block absolute -left-7 top-0 h-full w-[3px] bg-accent" />

//             <h3
//               className="text-[26px] font-semibold text-primary mb-5"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               {title}
//             </h3>

//             {description.map((p, i) => (
//               <p key={i} className="mb-4 text-[16px] leading-[28px]">
//                 {p}
//               </p>
//             ))}

//             <Link
//               href={`/services/${slug}`}
//               className="text-accent font-medium underline underline-offset-4 hover:text-primary transition-colors"
//             >
//               Read More
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"

// interface Props {
//   title: string
//   description: string[]
//   image: string
//   reverse?: boolean
//   slug: string
// }

// export default function ServiceDetail({
//   title,
//   description,
//   image,
//   reverse = false,
//   slug,
// }: Props) {
//   return (
//     <section className="w-full py-16 md:py-20">
//       <div className="max-w-[1180px] mx-auto px-6">
//         {/* 2 equal columns with gap */}
//         <div
//           className={`relative grid lg:grid-cols-2 gap-x-20 items-center ${
//             reverse ? "lg:grid-flow-col-dense" : ""
//           }`}
//         >
//           {/* DIVIDER in the gap */}
//           <span className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-red-500" />

//           {/* ICON */}
//           <motion.div
//             initial={{ opacity: 0, x: reverse ? 60 : -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className={`flex justify-center ${
//               reverse ? "lg:col-start-2" : "lg:col-start-1"
//             }`}
//           >
//             <img
//               src={image}
//               alt={title}
//               className="w-[220px] md:w-[260px] lg:w-[300px]"
//             />
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: reverse ? -60 : 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className={`${
//               reverse ? "lg:col-start-1" : "lg:col-start-2"
//             }`}
//           >
//             <h3
//               className="text-[22px] md:text-[24px] font-semibold text-[#1f2a44] mb-4"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               {title}
//             </h3>

//             <div className="space-y-3">
//               {description.map((p, i) => (
//                 <p key={i} className="text-[15px] leading-[26px] text-gray-600">
//                   {p}
//                 </p>
//               ))}
//             </div>

//             <Link
//               href={`/services/${slug}`}
//               className="inline-block mt-4 text-red-500 text-[15px] font-medium underline underline-offset-4 hover:text-[#1f2a44] transition-colors"
//             >
//               Read More
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface Props {
  title: string
  description: string[]
  image: string
  reverse?: boolean
  slug: string
}

export default function ServiceDetail({
  title,
  description,
  image,
  reverse = false,
  slug,
}: Props) {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          className={`relative grid lg:grid-cols-2 gap-x-20 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          <span className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-red-500" />

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex justify-center ${
              reverse ? "lg:col-start-2" : "lg:col-start-1"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-[220px] md:w-[260px] lg:w-[300px]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`min-w-0 ${
              reverse ? "lg:col-start-1" : "lg:col-start-2"
            }`}
          >
            <h3
              className="text-[22px] md:text-[24px] font-semibold text-[#1f2a44] mb-4 break-words"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>

            <div className="space-y-3">
              {description.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[26px] text-gray-600 break-words"
                >
                  {p}
                </p>
              ))}
            </div>

            <Link
              href={`/services/${slug}`}
              className="inline-block mt-4 text-red-500 text-[15px] font-medium underline underline-offset-4 hover:text-[#1f2a44] transition-colors break-words"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}