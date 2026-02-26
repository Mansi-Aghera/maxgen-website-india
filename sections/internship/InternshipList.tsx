// // "use client"

// // import Section from "@/components/ui/Section"
// // import InternshipCard from "./InternshipCard"
// // import { motion } from "framer-motion"
// // import { stagger } from "@/lib/motion"

// // const internships = [
// //   {
// //     id: "python",
// //     title: "Python Internship",
// //     icon: "/images/internship/internship1.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "django",
// //     title: "Django Internship",
// //     icon: "/images/internship/internship2.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "ml",
// //     title: "Machine Learning & Data Science Internship",
// //     icon: "/images/internship/internship3.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "php",
// //     title: "PHP Web Development Internship",
// //     icon: "/images/internship/internship4.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "java",
// //     title: "Java Internship",
// //     icon: "/images/internship/internship5.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "react",
// //     title: "React JS Internship",
// //     icon: "/images/internship/internship6.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "android",
// //     title: "Android Internship",
// //     icon: "/images/internship/internship7.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "testing",
// //     title: "Software Testing Internship",
// //     icon: "/images/internship/internship8.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "flutter",
// //     title: "Flutter Internship",
// //     icon: "/images/internship/internship9.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "aws",
// //     title: "AWS Internship",
// //     icon: "/images/internship/internship10.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "data",
// //     title: "Data Analytics Internship",
// //     icon: "/images/internship/internship11.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "mern",
// //     title: "MERN Stack Internship",
// //     icon: "/images/internship/internship12.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// //   {
// //     id: "uiux",
// //     title: "UI/UX Internship",
// //     icon: "/images/internship/internship13.png",
// //     duration: "0 - 6 Months",
// //     mode: "With/Without Project",
// //     location: "Ahmedabad, Pune, Mumbai",
// //     link: "/contact",
// //   },
// // ]

// // export default function InternshipList() {
// //   return (
// //     <Section>
// //       <motion.div
// //         variants={stagger}
// //         initial="initial"
// //         whileInView="whileInView"
// //         viewport={{ once: true }}
// //         className="space-y-5"
// //       >
// //         {internships.map((item) => (
// //           <InternshipCard key={item.id} {...item} />
// //         ))}
// //       </motion.div>
// //     </Section>
// //   )
// // }


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
    fetch("https://maxproject.pythonanywhere.com/career_internship/")
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
            icon={`https://maxproject.pythonanywhere.com${item.image}`}
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