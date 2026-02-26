// // // // "use client"

// // // // import Section from "@/components/ui/Section"
// // // // import InternshipCard from "./InternshipCard"
// // // // import { motion } from "framer-motion"
// // // // import { stagger } from "@/lib/motion"

// // // // const internships = [
// // // //   {
// // // //     id: "python",
// // // //     title: "Python Internship",
// // // //     icon: "/images/internship/internship1.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "django",
// // // //     title: "Django Internship",
// // // //     icon: "/images/internship/internship2.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "ml",
// // // //     title: "Machine Learning & Data Science Internship",
// // // //     icon: "/images/internship/internship3.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "php",
// // // //     title: "PHP Web Development Internship",
// // // //     icon: "/images/internship/internship4.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "java",
// // // //     title: "Java Internship",
// // // //     icon: "/images/internship/internship5.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "react",
// // // //     title: "React JS Internship",
// // // //     icon: "/images/internship/internship6.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "android",
// // // //     title: "Android Internship",
// // // //     icon: "/images/internship/internship7.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "testing",
// // // //     title: "Software Testing Internship",
// // // //     icon: "/images/internship/internship8.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "flutter",
// // // //     title: "Flutter Internship",
// // // //     icon: "/images/internship/internship9.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "aws",
// // // //     title: "AWS Internship",
// // // //     icon: "/images/internship/internship10.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "data",
// // // //     title: "Data Analytics Internship",
// // // //     icon: "/images/internship/internship11.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "mern",
// // // //     title: "MERN Stack Internship",
// // // //     icon: "/images/internship/internship12.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // //   {
// // // //     id: "uiux",
// // // //     title: "UI/UX Internship",
// // // //     icon: "/images/internship/internship13.png",
// // // //     duration: "0 - 6 Months",
// // // //     mode: "With/Without Project",
// // // //     location: "Ahmedabad, Pune, Mumbai",
// // // //     link: "/contact",
// // // //   },
// // // // ]

// // // // export default function InternshipList() {
// // // //   return (
// // // //     <Section>
// // // //       <motion.div
// // // //         variants={stagger}
// // // //         initial="initial"
// // // //         whileInView="whileInView"
// // // //         viewport={{ once: true }}
// // // //         className="space-y-5"
// // // //       >
// // // //         {internships.map((item) => (
// // // //           <InternshipCard key={item.id} {...item} />
// // // //         ))}
// // // //       </motion.div>
// // // //     </Section>
// // // //   )
// // // // }


// // // "use client"

// // // import Section from "@/components/ui/Section"
// // // import InternshipCard from "./InternshipCard"
// // // import { motion } from "framer-motion"
// // // import { stagger } from "@/lib/motion"
// // // import { useEffect, useState } from "react"

// // // type Internship = {
// // //   id: number
// // //   title: string
// // //   slug: string
// // //   descriptions: string
// // //   experience: string
// // //   project: string
// // //   location: string
// // //   image: string
// // // }

// // // export default function InternshipList() {
// // //   const [internships, setInternships] = useState<Internship[]>([])

// // //   useEffect(() => {
// // //     fetch("https://maxproject.pythonanywhere.com/career_internship/")
// // //       .then((res) => res.json())
// // //       .then((data) => setInternships(data))
// // //   }, [])

// // //   return (
// // //     <Section>
// // //       <motion.div
// // //         variants={stagger}
// // //         initial="initial"
// // //         whileInView="whileInView"
// // //         viewport={{ once: true }}
// // //         className="space-y-5"
// // //       >
// // //         {internships.map((item) => (
// // //           <InternshipCard
// // //             key={item.id}
// // //             title={item.title}
// // //             icon={`https://maxproject.pythonanywhere.com${item.image}`}
// // //             duration={item.experience}
// // //             mode={item.project}
// // //             location={item.location}
// // //             slug={item.slug}
// // //           />
// // //         ))}
// // //       </motion.div>
// // //     </Section>
// // //   )
// // // }

// // "use client"

// // import Section from "@/components/ui/Section"
// // import InternshipCard from "./InternshipCard"
// // import { motion } from "framer-motion"
// // import { stagger } from "@/lib/motion"
// // import { useEffect, useState } from "react"

// // type Internship = {
// //   id: number
// //   title: string
// //   slug: string
// //   descriptions: string
// //   experience: string
// //   project: string
// //   location: string
// //   image: string
// // }

// // export default function InternshipList() {
// //   const [internships, setInternships] = useState<Internship[]>([])

// //   useEffect(() => {
// //     fetch("https://maxproject.pythonanywhere.com/career_internship/")
// //       .then((res) => res.json())
// //       .then((data) => setInternships(data))
// //   }, [])

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
// //           <InternshipCard
// //             key={item.id}
// //             title={item.title}
// //             icon={`https://maxproject.pythonanywhere.com${item.image}`}
// //             duration={item.experience}
// //             mode={item.project}
// //             location={item.location}
// //             slug={item.slug}
// //           />
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
//     status: string   // ✅ ADD THIS

// }

// // 👉 location filter options (dynamic or static)
// type LocationFilter = "all" | string

// export default function InternshipList() {
//   const [internships, setInternships] = useState<Internship[]>([])
//   const [activeLocation, setActiveLocation] = useState<LocationFilter>("all")
//   const [locations, setLocations] = useState<string[]>([])

// useEffect(() => {
//   fetch("https://maxproject.pythonanywhere.com/career_internship/")
//     .then((res) => res.json())
//     .then((data) => {
//       const activeData: Internship[] = data.filter(
//         (i: Internship) => i.status === "active"
//       )

//       setInternships(activeData)

//       const uniqueLocations = Array.from(
//         new Set(activeData.map((i) => i.location))
//       )

//       setLocations(uniqueLocations)
//     })
// }, [])

//   // 👉 filtered internships
//   const filtered =
//     activeLocation === "all"
//       ? internships
//       : internships.filter((i) => i.location === activeLocation)

//   return (
//     <Section>
//       {/* LOCATION FILTER */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         <button
//           onClick={() => setActiveLocation("all")}
//           className={`px-5 py-2 text-sm rounded-md border transition-all
//             ${
//               activeLocation === "all"
//                 ? "bg-primary text-white border-primary"
//                 : "border-[var(--color-border)] text-primary hover:bg-primary"
//             }`}
//         >
//           ALL
//         </button>

//         {locations.map((loc) => (
//           <button
//             key={loc}
//             onClick={() => setActiveLocation(loc)}
//             className={`px-5 py-2 text-sm rounded-md border transition-all
//               ${
//                 activeLocation === loc
//                   ? "bg-primary text-white border-primary"
//                   : "border-[var(--color-border)] text-primary hover:bg-primary"
//               }`}
//           >
//             {loc}
//           </button>
//         ))}
//       </div>

//       {/* INTERNSHIP LIST */}
//       <motion.div
//         variants={stagger}
//         initial="initial"
//         whileInView="whileInView"
//         viewport={{ once: true }}
//         className="space-y-5"
//       >
//         {filtered.map((item) => (
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
import { API } from "@/lib/api"

type Internship = {
  id: number
  title: string
  slug: string
  descriptions: string
  experience: string
  project: string
  location: string
  image: string
  status: string
}

// ✅ Hardcoded locations
type LocationFilter = "all" | "Pune" | "Ahemdabad" | "Mumbai"

const filters: { label: string; value: LocationFilter }[] = [
  { label: "ALL", value: "all" },
  { label: "PUNE", value: "Pune" },
  { label: "AHEMDABAD", value: "Ahemdabad" },
  { label: "MUMBAI", value: "Mumbai" },
]

export default function InternshipList() {
  const [internships, setInternships] = useState<Internship[]>([])
  const [activeLocation, setActiveLocation] =
    useState<LocationFilter>("all")

  // useEffect(() => {
  //   fetch("https://maxproject.pythonanywhere.com/career_internship/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const activeData: Internship[] = data.filter(
  //         (i: Internship) => i.status === "active"
  //       )
  //       setInternships(activeData)
  //     })
  // }, [])

  useEffect(() => {
  fetch(API.internships, { cache: "no-store" })
    .then((res) => res.json())
    .then((json) => {
      const list = json?.data || []

      const active = list.filter(
        (i: any) => i.status === true || i.status === "active"
      )

      setInternships(active)
    })
    .catch((e) => console.error("Internship fetch error", e))
}, [])

  // ✅ location filter
  const filtered =
    activeLocation === "all"
      ? internships
      : internships.filter((i) => i.location === activeLocation)

  return (
    <Section>
      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveLocation(f.value)}
            className={`px-5 py-2 text-sm rounded-md border transition-all
              ${
                activeLocation === f.value
                  ? "bg-primary text-white border-primary"
                  : "border-[var(--color-border)] text-primary hover:bg-primary"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* INTERNSHIP LIST */}
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-5"
      >
        {filtered.map((item) => (
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