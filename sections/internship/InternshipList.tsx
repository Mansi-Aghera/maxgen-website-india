

// "use client"

// import Section from "@/components/ui/Section"
// import InternshipCard from "./InternshipCard"
// import { motion } from "framer-motion"
// import { stagger } from "@/lib/motion"
// import { useEffect, useState } from "react"

// type Internship = {
//   id: number
//   title: string
//   slug: string
//   descriptions: string
//   experience: string
//   project: string
//   location: string
//   image: string
// }

// export default function InternshipList() {
//   const [internships, setInternships] = useState<Internship[]>([])

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/career_internship/")
//       .then((res) => res.json())
//       .then((data) => setInternships(data))
//   }, [])

//   return (
//     <Section>
//       <motion.div
//         variants={stagger}
//         initial="initial"
//         whileInView="whileInView"
//         viewport={{ once: true }}
//         className="space-y-5"
//       >
//         {internships.map((item) => (
//           <InternshipCard
//             key={item.id}
//             title={item.title}
//             icon={`https://maxproject.pythonanywhere.com${item.image}`}
//             duration={item.experience}
//             mode={item.project}
//             location={item.location}
//             slug={item.slug}
//           />
//         ))}
//       </motion.div>
//     </Section>
//   )
// }

"use client"

import Section from "@/components/ui/Section"
import InternshipCard from "./InternshipCard"
import { motion } from "framer-motion"
import { stagger } from "@/lib/motion"
import { useEffect, useState } from "react"
import { API, mediaUrl } from "@/lib/api"   // ✅ base url import

type Internship = {
  id: number
  title: string
  slug: string
  descriptions: string
  experience: string
  project: string
  location: string
  image: string
}

export default function InternshipList() {
  const [internships, setInternships] = useState<Internship[]>([])

  useEffect(() => {
    fetch(API.internships)   // ✅ base url used
      .then((res) => res.json())
      .then((data) => setInternships(data))
  }, [])

  return (
    <Section>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-5"
      >
        {internships.map((item) => (
          <InternshipCard
            key={item.id}
            title={item.title}
            icon={mediaUrl(item.image)}   // ✅ base url media
            duration={item.experience}
            mode={item.project}
            location={item.location}
            slug={item.slug}
          />
        ))}
      </motion.div>
    </Section>
  )
}