// // "use client"

// // import Image from "next/image"
// // import Button from "@/components/ui/Button"
// // import { motion } from "framer-motion"
// // import { fadeUp } from "@/lib/motion"

// // type Props = {
// //   title: string
// //   icon: string
// //   duration: string
// //   mode: string
// //   location: string
// //   link: string
// // }

// // export default function InternshipCard({
// //   title,
// //   icon,
// //   duration,
// //   mode,
// //   location,
// //   link,
// // }: Props) {
// //   return (
// //     <motion.div
// //       initial={fadeUp.initial}
// //       whileInView={fadeUp.whileInView}
// //       viewport={fadeUp.viewport}
// //       transition={fadeUp.transition}
// //       whileHover={{ y: -6 }}
// //       className="bg-white border-default rounded-[var(--radius-lg)] shadow-sm hover:shadow-md transition-all p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 h-55"
// //     >
// //       {/* Icon */}
// //       <div className="w-14 h-14 flex-shrink-0">
// //         <Image src={icon} alt={title} width={56} height={56} />
// //       </div>

// //       {/* Content */}
// //       <div className="flex-1">
// //         <h3
// //           className="font-semibold text-base sm:text-lg"
// //           style={{ fontFamily: "var(--font-heading)" }}
// //         >
// //           {title}
// //         </h3>

// //         <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2 text-sm text-muted">
// //           <span>⏱ {duration}</span>
// //           <span>🎓 {mode}</span>
// //           <span>📍 {location}</span>
// //         </div>
// //       </div>

// //       {/* Button */}
// //       <div className="w-full sm:w-auto">
// //         <Button href={link} size="sm" className="w-full sm:w-auto">
// //           APPLY NOW
// //         </Button>
// //       </div>
// //     </motion.div>
// //   )
// // }


// "use client"

// import Image from "next/image"
// import Button from "@/components/ui/Button"
// import Modal from "@/components/ui/Modal"
// import InternshipForm from "./InternshipForm"
// import { motion } from "framer-motion"
// import { fadeUp } from "@/lib/motion"
// import { useState } from "react"

// type Props = {
//   title: string
//   icon: string
//   duration: string
//   mode: string
//   location: string
// }

// export default function InternshipCard({
//   title,
//   icon,
//   duration,
//   mode,
//   location,
// }: Props) {
//   const [open, setOpen] = useState(false)

//   return (
//     <>
//       <motion.div
//         initial={fadeUp.initial}
//         whileInView={fadeUp.whileInView}
//         viewport={fadeUp.viewport}
//         transition={fadeUp.transition}
//         className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] px-6 py-5 flex items-center justify-between hover:shadow-md transition-all"
//       >
//         {/* LEFT */}
//         <div className="flex items-center gap-6">
//           <Image src={icon} alt={title} width={100} height={100} />
//           <div>
//             <h3
//               className="text-lg font-semibold"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               {title}
//             </h3>
//             <div className="flex gap-6 text-sm text-muted mt-2">
//               <span>⏱ {duration}</span>
//               <span>🎓 {mode}</span>
//               <span>📍 {location}</span>
//             </div>
//           </div>
//         </div>

//         {/* APPLY */}
//         <Button size="sm" onClick={() => setOpen(true)}>
//           APPLY NOW
//         </Button>
//       </motion.div>

//       {/* MODAL */}
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <InternshipForm onClose={() => setOpen(false)} />
//       </Modal>
//     </>
//   )
// }

"use client"

import Image from "next/image"
import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import InternshipForm from "./InternshipForm"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"
import { useState } from "react"

type Props = {
  title: string
  icon: string
  duration: string
  mode: string
  location: string
  modeIcon?: string   // ✅ ADDED
    variant?: "internship" | "job" 
}

export default function InternshipCard({
  title,
  icon,
  duration,
  mode,
  location,
  modeIcon,          // ✅ ADDED
   variant = "internship",  
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={fadeUp.transition}
        className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] px-6 py-5 flex items-center justify-between hover:shadow-md transition-all"
      >
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <Image src={icon} alt={title} width={100} height={100} />
          <div>
            <h3
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>
            <div className="flex gap-6 text-sm text-muted mt-2">
              <span>⏱ {duration}</span>
              <span>{modeIcon ?? "🎓"} {mode}</span> {/* ✅ CHANGED */}
              <span>📍 {location}</span>
            </div>
          </div>
        </div>

        {/* APPLY */}
        <Button size="sm" onClick={() => setOpen(true)}>
          APPLY NOW
        </Button>
      </motion.div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <InternshipForm
  onClose={() => setOpen(false)}
  variant={variant}
/>
      </Modal>
    </>
  )
}