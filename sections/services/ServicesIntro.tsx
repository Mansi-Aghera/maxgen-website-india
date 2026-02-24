// "use client"

// import Section from "@/components/ui/Section"
// import Button from "@/components/ui/Button"
// import ServiceCard from "@/components/services/ServiceCard"
// import { motion } from "framer-motion"

// const services = [
//   {
//     title: "Web Design & Development",
//     description:
//       "Design and development services for websites are the focus of Maxgen Technologies.",
//     icon: "/images/services/service-banner1.gif",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "No matter the OS platform, we at Maxgen Technologies can create anything tailored to meet your needs.",
//     icon: "/images/services/service-banner2.gif",
//   },
//   {
//     title: "Logo Design & Graphic Design",
//     description:
//       "At every online touchpoint with your brand, we blend innovation and aesthetics.",
//     icon: "/images/services/service-banner3.gif",
//   },
//   {
//     title: "Support & Maintenance",
//     description:
//       "Our first objective is problem prevention, so we take proactive steps.",
//     icon: "/images/services/service-banner4.gif",
//   },
// ]

// export default function ServicesIntro() {
//   return (
//     <Section className="bg-light">
//       {/* Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="text-center"
//       >
//         <h2
//           className="text-3xl md:text-4xl font-semibold"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           Our <span className="text-accent">Services</span>
//         </h2>

//         <div className="flex justify-center mt-3 gap-2">
//           <div className="w-10 h-[2px] bg-primary" />
//           <div className="w-6 h-[2px] bg-accent" />
//           <div className="w-10 h-[2px] bg-primary" />
//         </div>
//       </motion.div>

//       {/* Content */}
//       <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-[16px] shadow-md p-8"
//         >
//           <h3
//             className="text-2xl md:text-[28px] font-semibold"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             Why you should choose Maxgen Technologies
//           </h3>

//           <div className="w-16 h-[3px] bg-accent mt-3" />

//           <div className="mt-6 space-y-6">
//             <div>
//               <h4 className="text-accent font-semibold">| Design Thinking</h4>
//               <p className="mt-1 text-[15px]">
//                 Solution architects may analyze company issues and provide the best solutions.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-accent font-semibold">| Domain expertise</h4>
//               <p className="mt-1 text-[15px]">
//                 We understand the problems unique to the sector and use design thinking.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-accent font-semibold">| Client experience</h4>
//               <p className="mt-1 text-[15px]">
//                 Several business engagements with proven returns on the solutions used.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8">
//             <Button
//   href="/quote"
//   target="_blank"
//   variant="primary"
//   size="md"
// >
//   LET’S MEET
// </Button>
//           </div>
//         </motion.div>

//         {/* Right cards */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//             >
//               <ServiceCard {...s} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   )
// }


"use client"

import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import ServiceCard from "@/components/services/ServiceCard"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Service {
  id: number
  title: string
  subject: string
  image: string
}

export default function ServicesIntro() {
  const [services, setServices] = useState<Service[]>([])

useEffect(() => {
  fetch("https://maxproject.pythonanywhere.com/services/")
    .then((res) => res.json())
    .then((data) => {
      const allowedIds = [11, 5, 4 ,1 ]

      const mapped = allowedIds
        .map((id) => data.data.find((s: any) => s.id === id))
        .filter(Boolean)
        .map((s: any) => ({
          id: s.id,
          title: s.title,
          subject: s.subject,
          image: "https://maxproject.pythonanywhere.com" + s.image,
        }))

      setServices(mapped)
    })
}, [])

  return (
    <Section className="bg-light">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our <span className="text-accent">Services</span>
        </h2>

        <div className="flex justify-center mt-3 gap-2">
          <div className="w-10 h-[2px] bg-primary" />
          <div className="w-6 h-[2px] bg-accent" />
          <div className="w-10 h-[2px] bg-primary" />
        </div>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
        {/* <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[16px] shadow-md p-8"
        >
          <h3
            className="text-2xl md:text-[28px] font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why you should choose Maxgen Technologies
          </h3>

          <div className="w-16 h-[3px] bg-accent mt-3" />

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-accent font-semibold">| Design Thinking</h4>
              <p className="mt-1 text-[15px]">
                Solution architects may analyze company issues and provide the best solutions.
              </p>
            </div>

            <div>
              <h4 className="text-accent font-semibold">| Domain expertise</h4>
              <p className="mt-1 text-[15px]">
                We understand the problems unique to the sector and use design thinking.
              </p>
            </div>

            <div>
              <h4 className="text-accent font-semibold">| Client experience</h4>
              <p className="mt-1 text-[15px]">
                Several business engagements with proven returns on the solutions used.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="/quote" target="_blank" variant="primary" size="md">
              LET’S MEET
            </Button>
          </div>
        </motion.div> */}

        <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="bg-[#f3f3f3] rounded-[16px] shadow-md p-10"
>
  {/* TITLE */}
  <h3
    className="text-center text-2xl md:text-[30px] font-semibold"
    style={{ fontFamily: "var(--font-heading)" }}
  >
    Why you should choose Maxgen Technologies
  </h3>

  {/* CENTER LINE */}
  <div className="w-24 h-[3px] bg-accent mx-auto mt-4" />

  {/* FEATURES GRID */}
  <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8">
    <div>
      <h4 className="text-accent font-semibold">
        | Design Thinking
      </h4>
      <p className="mt-2 text-[15px] leading-relaxed">
        Solution architects may analyze company issues and provide the best
        solutions.
      </p>
    </div>

    <div>
      <h4 className="text-accent font-semibold">
        | Domain expertise
      </h4>
      <p className="mt-2 text-[15px] leading-relaxed">
        We understand the problems unique to the sector and use design thinking.
      </p>
    </div>

    <div>
      <h4 className="text-accent font-semibold">
        | Client experience
      </h4>
      <p className="mt-2 text-[15px] leading-relaxed">
        Several business engagements with proven returns on the solutions used.
      </p>
    </div>
  </div>

  {/* BUTTON RIGHT */}
  <div className="flex justify-end mt-10">
    <Button href="/quote" target="_blank" variant="primary" size="md">
      LET’S MEET
    </Button>
  </div>
</motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ServiceCard
                title={s.title}
                subject={s.subject}
                icon={s.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}