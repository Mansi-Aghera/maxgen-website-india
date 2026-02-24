// "use client"

// import { motion } from "framer-motion"

// interface ServiceCardProps {
//   title: string
//   description: string
//   icon: string
// }

// export default function ServiceCard({
//   title,
//   description,
//   icon,
// }: ServiceCardProps) {
//   return (
//     <div className="bg-white rounded-[14px] shadow-md p-6 flex gap-4 items-start hover:shadow-lg transition-shadow duration-300">
//       {/* animated icon */}
//       <motion.img
//         src={icon}
//         alt={title}
//         className="w-14 h-14 shrink-0"
//         animate={{
//           y: [0, -6, 0],
//           rotate: [0, 3, -3, 0],
//           scale: [1, 1.04, 1],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <div>
//         <h3
//           className="text-[18px] font-semibold text-accent"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           {title}
//         </h3>

//         <p className="mt-2 text-[15px] leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  subject: string
  icon: string
}

export default function ServiceCard({
  title,
  subject,
  icon,
}: ServiceCardProps) {
return (
  <motion.div
  whileHover={{ y: -6 }}
  transition={{ type: "spring", stiffness: 260, damping: 18 }}
  className="bg-white rounded-[14px] shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-full min-h-[170px] sm:min-h-[180px] md:min-h-[200px]"
>
    {/* TOP: icon + title */}
    <div className="flex items-center gap-4">
      <motion.img
        src={icon}
        alt={title}
        className="w-14 h-14 shrink-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.25 }}
      />

      <h3
        className="text-[18px] font-semibold text-accent leading-snug"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
    </div>

    {/* BOTTOM: description */}
    <p className="mt-4 text-[15px] leading-relaxed">
      {subject}
    </p>
  </motion.div>
)
}
