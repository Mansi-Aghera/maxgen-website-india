// // // import Section from "@/components/ui/Section"
// // // import InternshipCard from "../internship/InternshipCard"

// // // type Props = {
// // //   active: "freshers" | "experienced"
// // // }

// // // const roles = [
// // //   { title: "Python Developer", icon: "/images/internship/internship1.png" },
// // //   { title: "Data Scientist", icon: "/images/internship/internship3.png" },
// // //   { title: "PHP Developer", icon: "/images/internship/internship4.png" },
// // //   { title: "JAVA Developer", icon: "/images/internship/internship5.png" },
// // //   { title: "React Js Developer", icon: "/images/internship/internship6.png" },
// // //   { title: "Android Developer", icon: "/images/internship/internship7.png" },
// // //   { title: "Software Testing", icon: "/images/internship/internship8.png" },
// // //   { title: "Flutter Developer", icon: "/images/internship/internship9.png" },
// // //   { title: "AWS Developer", icon: "/images/internship/internship10.png" },
// // //   { title: "Data Analyst", icon: "/images/internship/internship11.png" },
// // //   { title: "MERNSTACK Developer", icon: "/images/internship/internship12.png" },
// // //   { title: "UI UX Developer", icon: "/images/internship/internship13.png" },
// // // ]

// // // export default function JobsList({ active }: Props) {
// // //   return (
// // //     <Section>
// // //       <div className="space-y-5">
// // //         {roles.map((role) => (
// // //           <InternshipCard
// // //             key={role.title}
// // //             title={`Urgently Hiring for the Position of ${role.title}`}
// // //             icon={role.icon}
// // //             duration={active === "freshers" ? "0 - 1 Year" : "2 - 4 Years"}
// // //             mode="Depends Upon Interview"
// // //             location="Ahmedabad, Pune, Mumbai"
// // //           />
// // //         ))}
// // //       </div>
// // //     </Section>
// // //   )
// // // }



// // import Section from "@/components/ui/Section"
// // import InternshipCard from "../internship/InternshipCard"

// // type Props = {
// //   active: "freshers" | "experienced"
// // }

// // const roles = [
// //   { title: "Python Developer", icon: "/images/internship/internship1.png" },
// //   { title: "Data Scientist", icon: "/images/internship/internship3.png" },
// //   { title: "PHP Developer", icon: "/images/internship/internship4.png" },
// //   { title: "JAVA Developer", icon: "/images/internship/internship5.png" },
// //   { title: "React Js Developer", icon: "/images/internship/internship6.png" },
// //   { title: "Android Developer", icon: "/images/internship/internship7.png" },
// //   { title: "Software Testing", icon: "/images/internship/internship8.png" },
// //   { title: "Flutter Developer", icon: "/images/internship/internship9.png" },
// //   { title: "AWS Developer", icon: "/images/internship/internship10.png" },
// //   { title: "Data Analyst", icon: "/images/internship/internship11.png" },
// //   { title: "MERNSTACK Developer", icon: "/images/internship/internship12.png" },
// //   { title: "UI UX Developer", icon: "/images/internship/internship13.png" },
// // ]

// // export default function JobsList({ active }: Props) {
// //   return (
// //     <Section>
// //       <div className="space-y-5">
// //         {roles.map((role) => (
// //           <InternshipCard
// //             key={role.title}
// //             title={`Urgently Hiring for the Position of ${role.title}`}
// //             icon={role.icon}
// //             duration={active === "freshers" ? "0 - 1 Year" : "2 - 4 Years"}
// //             mode="Depends Upon Interview"
// //             location="Ahmedabad, Pune, Mumbai"
// //             modeIcon="💰"   // ✅ CAREER ONLY
// //             variant="job"
// //           />
// //         ))}
// //       </div>
// //     </Section>
// //   )
// // }

// "use client"

// import { useEffect, useState } from "react"
// import Section from "@/components/ui/Section"
// import InternshipCard from "../internship/InternshipCard"
// import { motion } from "framer-motion"
// import { stagger } from "@/lib/motion"

// type Job = {
//   id: number
//   title: string
//   slug: string
//   description: string
//   department: string
//   job_type: string
//   experience_required: string
//   salary_range: string
//   location: string
//   status: string
// }

// type Props = {
//   active: "freshers" | "experienced"
// }

// export default function JobsList({ active }: Props) {
//   const [jobs, setJobs] = useState<Job[]>([])

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/jobs/")
//       .then((res) => res.json())
//       .then((data) => {
//         const activeJobs = data.filter((j: Job) => j.status === "active")
//         setJobs(activeJobs)
//       })
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
//         {jobs.map((job) => (
//           <InternshipCard
//             key={job.id}
//             title={` ${job.title}`}
//             icon="/images/internship/internship1.png"
//             duration={job.experience_required}
//             mode={job.job_type}
//             location={job.location}
//             slug={job.slug}
//             modeIcon="💰"
//             variant="job"
//               hrefBase="career"

//           />
//         ))}
//       </motion.div>
//     </Section>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Section from "@/components/ui/Section"
import InternshipCard from "../internship/InternshipCard"
import { motion } from "framer-motion"
import { stagger } from "@/lib/motion"

type Job = {
  id: number
  title: string
  slug: string
  description: string
  department: string
  job_type: string
  experience: string
  experience_required: string
  salary_range: string
  location: string
  status: string
}

type Props = {
  active: "freshers" | "experienced"
}

export default function JobsList({ active }: Props) {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetch("https://maxproject.pythonanywhere.com/jobs/")
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data ?? []

        // ✅ status filter
        const activeJobs = data.filter((j: Job) => j.status === "active")

        setJobs(activeJobs)
      })
  }, [])

  // ✅ experience filter
  const filtered =
    active === "freshers"
      ? jobs.filter((j) => j.experience?.toLowerCase() === "fresher")
      : jobs.filter((j) => j.experience?.toLowerCase() !== "fresher")

  return (
    <Section>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-5"
      >
        {filtered.map((job) => (
          <InternshipCard
            key={job.id}
            title={job.title}
            icon="/images/internship/internship1.png"
            duration={job.experience_required}
            mode={job.job_type}
            location={job.location}
            slug={job.slug}
            modeIcon="💰"
            variant="job"
            hrefBase="career"
          />
        ))}
      </motion.div>
    </Section>
  )
}