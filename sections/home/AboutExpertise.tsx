


// "use client"

// import { motion } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import Link from "next/link"
// import { useEffect, useState } from "react"

// interface Service {
//   id: number
//   title: string
//   slug: string
// }

// function makeSlug(text: string) {
//   return text
//     .toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-")
// }

// export default function AboutExpertise() {
//   const [services, setServices] = useState<Service[]>([])

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/services/")
//       .then((res) => res.json())
//       .then((data) => {
//         const mapped = (data.data || [])
//           .slice()
//           .sort((a: any, b: any) => a.id - b.id)
//           .map((s: any) => ({
//             id: s.id,
//             title: s.title,
//             slug: makeSlug(s.title),
//           }))

//         setServices(mapped)
//       })
//   }, [])

//   return (
//     <Section>
//       {/* WHO WE ARE */}
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <motion.img
//           src="/images/home/home-about.webp"
//           alt="who we are"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="w-full max-w-[520px] mx-auto lg:mx-0"
//         />

//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <Heading title="Who We Are ?" />

//           <p className="mt-6 text-lg leading-relaxed">
//             We are a full-service{" "}
//             <Link
//               href="/services"
//               className="text-red-600 font-medium hover:underline"
//             >
//               digital consultant
//             </Link>{" "}
//             with the skills and ability to serve the requirements of even the
//             biggest and most complicated businesses worldwide. To ensure that we
//             focus on their needs and customers and provide real value to the
//             business, we offer an extensive{" "}
//             <Link
//               href="/portfolio"
//               className="text-red-600 font-medium hover:underline"
//             >
//               services portfolio
//             </Link>{" "}
//             . Endless ideas, end-to-end services.
//           </p>
//         </motion.div>
//       </div>

//       {/* EXPERTISE */}
//       <div className="mt-28 grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <Heading
//             title="Our Expertise & Support"
//             subtitle="We have a team of experts who help developers in multiple ways."
//           />

//           <ul className="mt-8 space-y-4">
//             {services.map((item, i) => (
//               <motion.li
//                 key={item.id}
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <Link
//                   href={`/services/${item.slug}`}
//                   className="group inline-flex items-center gap-3 text-lg font-medium"
//                 >
//                   <span className="text-text-muted group-hover:text-accent transition-colors duration-300">
//                     ▸
//                   </span>

//                   <span className="relative text-text-muted group-hover:text-accent transition-colors duration-300">
//                     {item.title}
//                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
//                   </span>
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>

//         <motion.img
//           src="/images/home/home-about2.webp"
//           alt="expertise"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="w-full max-w-[520px] mx-auto lg:mx-0"
//         />
//       </div>

//       {/* INTERNSHIP */}
//       <div className="mt-28 grid lg:grid-cols-2 gap-12 items-center">
//         <motion.img
//           src="/images/home/home-about3.webp"
//           alt="internships"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="w-full max-w-[520px] mx-auto lg:mx-0"
//         />

//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <Heading title="Our Internship Offerings" />

//           <ul className="mt-8 space-y-3">
//             {[
//               "Python Django",
//               "Machine Learning & Data Science",
//               "PHP Web Development",
//               "Java",
//               "React JS",
//               "Android",
//               "Software Testing",
//               "Flutter",
//               "AWS Solution Architect",
//               "Data Analytics",
//             ].map((item, i) => (
//               <motion.li
//                 key={i}
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <Link
//                   href="/internship"
//                   className="group inline-flex items-center gap-3 text-lg font-medium"
//                 >
//                   <span className="text-text-muted group-hover:text-accent transition-colors duration-300">
//                     ▸
//                   </span>

//                   <span className="relative text-text-muted group-hover:text-accent transition-colors duration-300">
//                     {item}
//                     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
//                   </span>
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </Section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Link from "next/link"
import { useEffect, useState } from "react"
import { API } from "@/lib/api"   // ✅ BASE URL SYSTEM
import Button from "@/components/ui/Button"

interface Service {
  id: number
  title: string
  slug: string
}

function makeSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

export default function AboutExpertise() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch(API.services)   // ✅ BASE URL USED
      .then((res) => res.json())
      .then((data) => {
        const mapped = (data.data || [])
          .slice()
          .sort((a: any, b: any) => a.id - b.id)
          .map((s: any) => ({
            id: s.id,
            title: s.title,
            slug: makeSlug(s.title),
          }))

        setServices(mapped)
      })
  }, [])

  return (
    <Section>
      {/* WHO WE ARE */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/home/home-about.webp"
          alt="who we are"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-[520px] mx-auto lg:mx-0"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heading title="Who We Are ?" />

          <p className="mt-6 text-lg leading-relaxed">
            We are a full-service{" "}
            <Link href="/services" className="text-red-600 font-medium hover:underline">
              digital consultant
            </Link>{" "}
            with the skills and ability to serve the requirements of even the
            biggest and most complicated businesses worldwide. To ensure that we
            focus on their needs and customers and provide real value to the
            business, we offer an extensive{" "}
            <Link href="/portfolio" className="text-red-600 font-medium hover:underline">
              services portfolio
            </Link>{" "}
            . Endless ideas, end-to-end services.
          </p>
          <Button href="/about" variant="primary" size="md" className="mt-12">
            ABOUT US
          </Button>
        </motion.div>
        
      </div>

      {/* EXPERTISE */}
      <div className="mt-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heading
            title="Our Expertise & Support"
            subtitle="We have a team of experts who help developers in multiple ways."
          />

          <ul className="mt-8 space-y-4">
            {services.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/services/${item.slug}`}
                  className="group inline-flex items-center gap-3 text-lg font-medium"
                >
                  <span className="text-text-muted group-hover:text-accent transition-colors duration-300">
                    ▸
                  </span>

                  <span className="relative text-text-muted group-hover:text-accent transition-colors duration-300">
                    {item.title}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <Button href="/services" variant="primary" size="lg" className="mt-12">
            OUR SERVICES
          </Button>
        </motion.div>

        <motion.img
          src="/images/home/home-about2.webp"
          alt="expertise"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-[520px] mx-auto lg:mx-0"
        />
      </div>

      {/* INTERNSHIP */}
      <div className="mt-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/home/home-about3.webp"
          alt="internships"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-[520px] mx-auto lg:mx-0"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heading title="Our Internship Offerings" />

          <ul className="mt-8 space-y-3">
            {[
              "Python Django",
              "Machine Learning & Data Science",
              "PHP Web Development",
              "Java",
              "React JS",
              "Android",
              "Software Testing",
              "Flutter",
              "AWS Solution Architect",
              "Data Analytics",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href="/internship" className="group inline-flex items-center gap-3 text-lg font-medium">
                  <span className="text-text-muted group-hover:text-accent transition-colors duration-300">
                    ▸
                  </span>

                  <span className="relative text-text-muted group-hover:text-accent transition-colors duration-300">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <Button href="/internship" variant="primary" size="lg" className="mt-12">
            EXPLORE INTERNSHIPS
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}