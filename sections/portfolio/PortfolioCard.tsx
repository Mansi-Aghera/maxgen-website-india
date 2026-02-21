// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"

// type Props = {
//   title: string
//   image: string
//   link?: string
// }

// export default function PortfolioCard({ title, image, link }: Props) {
//   return (
//     <motion.a
//       href={link || "#"}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ y: -6 }}
//       className="group relative block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all"
//     >
//       {/* IMAGE */}
//       <div className="relative aspect-[4/3] overflow-hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-110"
//         />

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 backdrop-blur-[2px] transition-all duration-300" />

//         {/* CONTENT */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//           <h3
//             className="text-white text-lg font-semibold mb-3"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             {title}
//           </h3>

//           <span className="px-5 py-2 rounded-md border border-white text-white text-sm">
//             Visit
//           </span>
//         </div>
//       </div>
//     </motion.a>
//   )
// }

"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
  title: string
  image: string
  link?: string
}

export default function PortfolioCard({ title, image, link }: Props) {
  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      className="group relative block rounded-[var(--radius-lg)] overflow-hidden bg-white border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />

        {/* DARK OVERLAY (NO BLUR) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3
            className="text-white text-lg font-semibold mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h3>

          <span className="px-5 py-2 rounded-md border border-white text-white text-sm">
            Visit
          </span>
        </div>
      </div>
    </motion.a>
  )
}