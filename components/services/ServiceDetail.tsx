

// // "use client"

// // import Link from "next/link"
// // import { motion } from "framer-motion"
// // import Section from "../ui/Section"

// // interface Props {
// //   title: string
// //   description: string[]
// //   image: string
// //   reverse?: boolean
// //   slug: string
// // }
// // const decodeHtml = (html: string) => {
// //   if (!html) return ""
// //   return html
// //     .replace(/&nbsp;/g, " ")
// //     .replace(/&amp;/g, "&")
// //     .replace(/&lt;/g, "<")
// //     .replace(/&gt;/g, ">")
// // }
// // /* ✅ HTML FIX */
// // const stripOuterP = (html: string) =>
// //   html.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "")

// // export default function ServiceDetail({
// //   title,
// //   description,
// //   image,
// //   reverse = false,
// //   slug,
// // }: Props) {
// //   return (
// //     <Section className="bg-white mt-8">
// //       <div className="mx-auto px-6">
// //         <div
// //           className={`flex items-center ${
// //             reverse ? "flex-row-reverse" : "flex-row"
// //           }`}
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, x: reverse ? 80 : -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="w-[30%] flex justify-center"
// //           >
// //             <img
// //               src={image}
// //               alt={title}
// //               className="w-[260px] md:w-[300px] object-contain"
// //             />
// //           </motion.div>

// //           <div className="w-[3px] self-stretch bg-[#c81e2a] mx-8" />

// //           <motion.div
// //             initial={{ opacity: 0, x: reverse ? -80 : 80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="w-[70%]"
// //           >
// //             <h3
// //               className="text-[26px] md:text-[28px] font-semibold text-[#1f2a44] mb-5"
// //               style={{ fontFamily: "var(--font-heading)" }}
// //             >
// //               {title}
// //             </h3>

// // <div className="space-y-4 max-w-[720px]">
// //   {description.map((html, i) => (
// //     <div
// //       key={i}
// //       className="text-[15.5px] leading-[28px] text-[#4a5568] [&>p]:mb-4"
// //       dangerouslySetInnerHTML={{ __html: html }}
// //     />
// //   ))}
// // </div>

// //             <Link
// //               href={`/services/${slug}`}
// //               className="inline-block mt-5 text-[#c81e2a] text-[15px] font-medium underline underline-offset-4 hover:text-[#1f2a44] transition-colors"
// //             >
// //               Read More
// //             </Link>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </Section>
// //   )
// // }


// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"
// import Section from "../ui/Section"

// interface Props {
//   title: string
//   short_description: string   // ✅ change
//   image: string
//   reverse?: boolean
//   slug: string
// }

// /* =============================
//    HTML NORMALIZER
//    - keeps UI same
//    - ensures line breaks render
//    - tolerates editor HTML
//    ============================= */
// const cleanHtml = (html: string) =>
//   html?.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "")

// const normalizeHtml = (html: string) => {
//   if (!html) return ""

//   let out = html
//     .replace(/&nbsp;/g, " ")
//     .replace(/&amp;/g, "&")
//     .replace(/&lt;/g, "<")
//     .replace(/&gt;/g, ">")

//   // remove empty <p></p>
//   out = out.replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")

//   // convert backend line breaks to <br>
//   out = out
//     .replace(/\r\n/g, "<br>")
//     .replace(/\n/g, "<br>")
//     .replace(/\r/g, "<br>")

//   // collapse multiple <br>
//   out = out.replace(/(<br\s*\/?>(\s*)?){2,}/gi, "<br>")

//   return out.trim()
// }

// export default function ServiceDetail({
//   title,
//   short_description,
//   image,
//   reverse = false,
//   slug,
// }: Props) {
//   return (
//     <Section className="bg-white mt-8">
//       <div className="mx-auto px-6">
//         <div
//           className={`flex items-center ${
//             reverse ? "flex-row-reverse" : "flex-row"
//           }`}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: reverse ? 80 : -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="w-[30%] flex justify-center"
//           >
//             <img
//               src={image}
//               alt={title}
//               className="w-[380px] md:w-[420px] object-contain"
//             />
//           </motion.div>

//           <div className="w-[3px] self-stretch bg-[#c81e2a] mx-8" />

//           <motion.div
//             initial={{ opacity: 0, x: reverse ? -80 : 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="w-[70%]"
//           >
//             <h3
//               className="text-[26px] md:text-[28px] font-semibold text-[#1f2a44] mb-5"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               {title}
//             </h3>

// <div
//   className="text-[15.5px] leading-[28px] text-[#4a5568] max-w-[720px]"
//   dangerouslySetInnerHTML={{ __html: cleanHtml(short_description) }}
// />

//             <Link
//               href={`/services/${slug}`}
//               className="inline-block mt-5 text-[#c81e2a] text-[15px] font-medium underline underline-offset-4 hover:text-[#1f2a44] transition-colors"
//             >
//               Read More
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </Section>
//   )
// }


"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Section from "../ui/Section"

interface Props {
  title: string
  short_description: string
  image: string
  reverse?: boolean
  slug: string
}

/* HTML CLEANER */
const cleanHtml = (html: string) =>
  html?.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "")



export default function ServiceDetail({
  title,
  short_description,
  image,
  reverse = false,
  slug,
}: Props) {

  
  return (
    <Section className="bg-white mt-10 md:mt-14">
      <div className="mx-auto px-4 sm:px-6">
        <div
          className={`
            flex flex-col lg:flex-row items-center gap-8 lg:gap-0
            ${reverse ? "lg:flex-row-reverse" : ""}
          `}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[30%] flex justify-center"
          >
            <img
              src={image}
              alt={title}
              className="
                w-[240px]
                sm:w-[300px]
                md:w-[360px]
                lg:w-[380px]
                xl:w-[420px]
                object-contain
              "
            />
          </motion.div>

          {/* DIVIDER */}
          <div
            className="
              hidden lg:block
              w-[3px] self-stretch bg-[#c81e2a] mx-8
            "
          />
          <div
            className="
              lg:hidden
              w-16 h-[3px] bg-[#c81e2a]
            "
          />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[70%] text-center lg:text-left"
          >
            <h3
              className="
                text-[22px]
                sm:text-[24px]
                md:text-[26px]
                lg:text-[28px]
                font-semibold
                text-[#1f2a44]
                mb-4
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h3>

            <div
              className="
                text-[14.5px]
                sm:text-[15px]
                md:text-[15.5px]
                leading-[26px]
                md:leading-[28px]
                text-[#4a5568]
                max-w-[720px]
                mx-auto lg:mx-0
              "
              dangerouslySetInnerHTML={{
                __html: cleanHtml(short_description),
              }}
            />

            <Link
              href={`/services/${slug}`}
              className="
                inline-block
                mt-5
                text-[#c81e2a]
                text-[14px]
                sm:text-[15px]
                font-medium
                underline
                underline-offset-4
                hover:text-[#1f2a44]
                transition-colors
              "
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}