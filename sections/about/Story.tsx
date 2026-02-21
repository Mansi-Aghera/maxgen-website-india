// import Section from "@/components/ui/Section"
// import Link from "next/link"

// export default function Story() {
//   return (
//     <Section className="bg-white">
//       <div className="max-w-5xl mx-auto space-y-6 text-[15.5px] leading-8 text-[#5c6b73]">
//         <p>
//           Maxgen Technologies Pvt. Ltd. (MNC), with locations in Pune, Navi Mumbai,
//           Ahmedabad is your top choice for professional WordPress development,
//           website design, SEO, and digital marketing services. With years of
//           experience in the IT industry, we have gained deep insights into the
//           Indian market, setting us apart from the competition. We also offer
//           specialized Android application development services in Ahmedabad,
//           Navi Mumbai, and Pune, catering to diverse business needs.
//         </p>

//         <p>
//           WordPress, web design and development, mobile app development,
//           E-Commerce development, logo and graphic design, web support and
//           maintenance, etc., are all{" "}
//           <Link
//             href="/services"
//             className="text-red-600 font-medium hover:underline"
//           >
//             services
//           </Link>{" "}
//           we provide. Every company needs a website that will serve as a
//           salesperson. A well-designed website pulls in new customers and
//           specialty visitors. Your website should draw visitors if you want to
//           help your business grow. Use our specialized web development services
//           to create a stunning website that attracts potential customers.
//         </p>

//         <p>
//           Additionally, we provide internship programs and services.{" "}
//           <Link
//             href="/internship"
//             className="text-red-600 font-medium hover:underline"
//           >
//             Internship programs
//           </Link>{" "}
//           help you develop your skills while working with us. You'll get the
//           chance to work on various projects and gain invaluable experience that
//           will undoubtedly benefit your future career.
//         </p>

//         <p>
//           We are a full-service web design and development company that provides
//           services for creating websites, logos, graphics, and software.
//           Designing E-Commerce websites and boosting conversion rates for online
//           merchants are areas in which we specialize. We also offer hosting,
//           domain administration, and support services in India.
//         </p>

//         <p>
//           Our ability to combine a quality-driven delivery process with our
//           in-depth knowledge of current market trends, cutting-edge technology,
//           and extensive business domain expertise gives us an edge. When we say
//           that we will build your website and brand for success, we mean it. We
//           are a group of web development and design professionals who value
//           business growth and strive to increase visitor numbers through various
//           digital marketing channels while providing a user-friendly experience.
//         </p>
//       </div>
//     </Section>
//   )
// }


"use client"

import Section from "@/components/ui/Section"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Story() {
  return (
    <Section className="bg-white">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-5xl mx-auto space-y-6 text-[15px] sm:text-[15.5px] leading-7 sm:leading-8 text-[#5c6b73] px-1 sm:px-0"
      >
        <MotionP>
          Maxgen Technologies Pvt. Ltd. (MNC), with locations in Pune, Navi
          Mumbai, Ahmedabad is your top choice for professional WordPress
          development, website design, SEO, and digital marketing services.
          With years of experience in the IT industry, we have gained deep
          insights into the Indian market, setting us apart from the
          competition. We also offer specialized Android application
          development services in Ahmedabad, Navi Mumbai, and Pune, catering
          to diverse business needs.
        </MotionP>

        <MotionP>
          WordPress, web design and development, mobile app development,
          E-Commerce development, logo and graphic design, web support and
          maintenance, etc., are all{" "}
          <Link
            href="/services"
            className="text-red-600 font-medium hover:underline"
          >
            services
          </Link>{" "}
          we provide. Every company needs a website that will serve as a
          salesperson. A well-designed website pulls in new customers and
          specialty visitors. Your website should draw visitors if you want
          to help your business grow. Use our specialized web development
          services to create a stunning website that attracts potential
          customers.
        </MotionP>

        <MotionP>
          Additionally, we provide internship programs and services.{" "}
          <Link
            href="/internship"
            className="text-red-600 font-medium hover:underline"
          >
            Internship programs
          </Link>{" "}
          help you develop your skills while working with us. You'll get the
          chance to work on various projects and gain invaluable experience
          that will undoubtedly benefit your future career.
        </MotionP>

        <MotionP>
          We are a full-service web design and development company that
          provides services for creating websites, logos, graphics, and
          software. Designing E-Commerce websites and boosting conversion
          rates for online merchants are areas in which we specialize. We
          also offer hosting, domain administration, and support services in
          India.
        </MotionP>

        <MotionP>
          Our ability to combine a quality-driven delivery process with our
          in-depth knowledge of current market trends, cutting-edge
          technology, and extensive business domain expertise gives us an
          edge. When we say that we will build your website and brand for
          success, we mean it. We are a group of web development and design
          professionals who value business growth and strive to increase
          visitor numbers through various digital marketing channels while
          providing a user-friendly experience.
        </MotionP>
      </motion.div>
    </Section>
  )
}

function MotionP({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  )
}