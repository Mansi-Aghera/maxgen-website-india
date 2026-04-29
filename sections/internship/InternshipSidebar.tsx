// "use client"

// import { motion } from "framer-motion"
// import { fadeUp, stagger } from "@/lib/motion"
// import { useRouter } from "next/navigation"

// type Internship = {
//   id: number
//   title: string
//   slug: string
// }

// type Props = {
//   items: Internship[]
//   activeSlug: string
// }

// export default function InternshipSidebar({ items, activeSlug }: Props) {
//   const router = useRouter()

//   return (
//     <motion.div
//       variants={stagger}
//       initial="initial"
//       whileInView="whileInView"
//       viewport={{ once: true }}
//       className="
//         bg-white
//         border border-[var(--color-border)]
//         rounded-[var(--radius-lg)]
//         p-5
//       "
//     >
//       {/* Title */}
//       <motion.h3
//         initial={fadeUp.initial}
//         whileInView={fadeUp.whileInView}
//         viewport={fadeUp.viewport}
//         transition={fadeUp.transition}
//         className="text-lg font-semibold mb-4 text-primary"
//         style={{ fontFamily: "var(--font-heading)" }}
//       >
//         Other Internships
//       </motion.h3>

//       {/* List */}
//       <div className="flex flex-col gap-3">

//         {items.map((item) => {
//           const active = item.slug === activeSlug

//           return (
//             <motion.button
//              key={item.id}
//   initial={fadeUp.initial}
//   whileInView={fadeUp.whileInView}
//   viewport={fadeUp.viewport}
//   transition={fadeUp.transition}
//   onClick={() => router.push(`/internship/${item.slug}`)}
//               className={`
//                 text-left
//                 px-4 py-3
//                 rounded-md
//                 border
//                 text-sm
//                 transition-all
//                 duration-200
//                 ${
//                   active
//                     ? "bg-primary text-white border-primary"
//                     : "border-[var(--color-border)] text-primary hover:bg-[var(--color-bg-light)]"
//                 }
//               `}
//             >
//               {item.title}
//             </motion.button>
//           )
//         })}

//       </div>
//     </motion.div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"
import { useRouter } from "next/navigation"

type Item = {
  id: number
  title: string
  slug: string
}

type Props = {
  items: Item[]
  activeSlug: string
  basePath: string
  title?: string
}

export default function InternshipSidebar({
  items,
  activeSlug,
  basePath,
  title = "Other Items",
}: Props) {
  const router = useRouter()

  return (
    <div
      className="
        bg-white
        border border-[var(--color-border)]
        rounded-[var(--radius-lg)]
        p-5
      "
    >
      <h3
        className="text-lg font-semibold mb-4 text-primary"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const active = item.slug === activeSlug

          return (
            <motion.button
              key={item.id}
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={fadeUp.viewport}
              transition={fadeUp.transition}
              onClick={() => router.push(`/${basePath}/${item.slug}`)}
              className={`
                text-left
                px-4 py-3
                rounded-md
                border
                text-sm
                transition-all
                ${
                  active
                    ? "bg-primary text-white border-primary"
                    : "border-[var(--color-border)] text-primary hover:bg-[var(--color-bg-light)]"
                }
              `}
            >
              {item.title}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}