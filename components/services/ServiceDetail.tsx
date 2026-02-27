


// // "use client"

// // import Link from "next/link"
// // import { motion } from "framer-motion"
// // import Section from "../ui/Section"

// // interface Props {
// //   title: string
// //   short_description: string
// //   image: string
// //   reverse?: boolean
// //   slug: string
// //   image2?: string
// //   subject?: string
// // }

// // /* HTML CLEANER */
// // const cleanHtml = (html: string) =>
// //   html?.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "")



// // export default function ServiceDetail({
// //   title,
// //   short_description,
// //   image,
// //   reverse = false,
// //   slug,
// // }: Props) {

  
// //   return (
// //     <div className="bg-light" style={{padding: "25px 0px"}}>
// //       <div className="bg-white p-10">
// //       <div className="p-10">
// //         <div
// //           className={`
// //             flex flex-col lg:flex-row items-center gap-8 lg:gap-0
// //             ${reverse ? "lg:flex-row-reverse" : ""}
// //           `}
// //         >
// //           {/* IMAGE */}
// //           <motion.div
// //             initial={{ opacity: 0, x: reverse ? 80 : -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="w-full lg:w-[30%] flex justify-center"
// //           >
// //             <img
// //               src={image}
// //               alt={title}
// //               className="
// //                 w-[240px]
// //                 sm:w-[300px]
// //                 md:w-[360px]
// //                 lg:w-[380px]
// //                 xl:w-[420px]
// //                 object-contain
// //               "
// //             />
// //           </motion.div>

// //           {/* DIVIDER */}
// //           <div
// //             className="
// //               hidden lg:block
// //               w-[3px] self-stretch bg-[#c81e2a] mx-8
// //             "
// //           />
// //           <div
// //             className="
// //               lg:hidden
// //               w-16 h-[3px] bg-[#c81e2a]
// //             "
// //           />

// //           {/* CONTENT */}
// //           <motion.div
// //             initial={{ opacity: 0, x: reverse ? -80 : 80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="w-full lg:w-[70%] lg:text-left"
// //           >
// //             <h3
// //               className="
// //                 text-[22px]
// //                 sm:text-[24px]
// //                 md:text-[26px]
// //                 lg:text-[28px]
// //                 font-semibold
// //                 text-[#1f2a44]
// //                 mb-4
// //               "
// //               style={{ fontFamily: "var(--font-heading)" }}
// //             >
// //               {title}
// //             </h3>

// //             <div
// //               className="
// //                 text-[14.5px]
// //                 sm:text-[15px]
// //                 md:text-[15.5px]
// //                 leading-[26px]
// //                 md:leading-[28px]
// //                 text-[#4a5568]
// //                 max-w-[930px]
// //                 mx-auto lg:mx-0
// //                 text-justify
// //               "
// //               dangerouslySetInnerHTML={{
// //                 __html: cleanHtml(short_description),
// //               }}
// //             />

// //             <Link
// //               href={`/services/${slug}`}
// //               className="
// //                 inline-block
// //                 mt-5
// //                 text-[#c81e2a]
// //                 text-[14px]
// //                 sm:text-[15px]
// //                 font-medium
// //                 underline
// //                 underline-offset-4
// //                 hover:text-[#1f2a44]
// //                 transition-colors
// //               "
// //             >
// //               Read More
// //             </Link>
// //           </motion.div>
// //         </div>
// //       </div>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"

// interface Props {
//   title: string
//   short_description: string
//   image: string
//   reverse?: boolean
//   slug: string
// }

// /* HTML CLEANER */
// const cleanHtml = (html: string) =>
//   html?.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, "")

// export default function ServiceDetail({
//   title,
//   short_description,
//   image,
//   reverse = false,
//   slug,
// }: Props) {
//   return (
//     <div
//       className="bg-light"
//       style={{ padding: "25px 0px" }}   
//     >
//       <div className="bg-white p-5 sm:p-7 md:p-8 lg:p-10">  {/* responsive padding */}
//         <div className="p-5 sm:p-7 md:p-8 lg:p-10">          {/* responsive padding */}

//           <div
//             className={`
//               flex flex-col lg:flex-row items-center
//               gap-6 sm:gap-8 lg:gap-0
//               ${reverse ? "lg:flex-row-reverse" : ""}
//             `}
//           >
//             {/* IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, x: reverse ? 80 : -80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="w-full lg:w-[30%] flex justify-center"
//             >
//               <img
//                 src={image}
//                 alt={title}
//                 className="
//                   w-[220px]
//                   sm:w-[260px]
//                   md:w-[320px]
//                   lg:w-[340px]
//                   xl:w-[380px]
//                   object-contain
//                 "
//               />
//             </motion.div>

//             {/* DIVIDER */}
//             <div
//               className="
//                 hidden lg:block
//                 w-[3px] self-stretch bg-[#c81e2a]
//                 mx-4 xl:mx-8
//               "
//             />
//             <div
//               className="
//                 lg:hidden
//                 w-16 h-[3px] bg-[#c81e2a]
//               "
//             />

//             {/* CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, x: reverse ? -80 : 80 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="
//                 w-full lg:w-[70%]
//                 text-center lg:text-left
//               "
//             >
//               <h3
//                 className="
//                   text-[20px]
//                   sm:text-[22px]
//                   md:text-[24px]
//                   lg:text-[26px]
//                   font-semibold
//                   text-[#1f2a44]
//                   mb-4
//                 "
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 {title}
//               </h3>

//               <div
//                 className="
//                   text-[14px]
//                   sm:text-[14.5px]
//                   md:text-[15px]
//                   lg:text-[15.5px]
//                   leading-[24px]
//                   md:leading-[26px]
//                   lg:leading-[28px]
//                   text-[#4a5568]
//                   max-w-[930px]
//                   mx-auto lg:mx-0
//                   text-justify
//                 "
//                 dangerouslySetInnerHTML={{
//                   __html: cleanHtml(short_description),
//                 }}
//               />

//               <Link
//                 href={`/services/${slug}`}
//                 className="
//                   inline-block
//                   mt-5
//                   text-[#c81e2a]
//                   text-[14px]
//                   sm:text-[15px]
//                   font-medium
//                   underline
//                   underline-offset-4
//                   hover:text-[#1f2a44]
//                   transition-colors
//                 "
//               >
//                 Read More
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface Props {
  title: string
  short_description: string
  image: string
  reverse?: boolean
  slug: string
}

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
    <div className="bg-light py-10">
      
      {/* ✅ MAX WIDTH FIX */}
      <div className="bg-white px-6 sm:px-8 lg:px-12 py-10 mx-auto">

        <div
          className={`
            flex flex-col lg:flex-row items-center
            gap-8 lg:gap-12 xl:gap-16
            ${reverse ? "lg:flex-row-reverse" : ""}
          `}
        >

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[35%] flex justify-center"
          >
            <img
              src={image}
              alt={title}
              className="
                w-[70%]
                sm:w-[60%]
                md:w-[55%]
                lg:w-full
                max-w-[380px]
                object-contain
              "
            />
          </motion.div>

          {/* DIVIDER */}
          <div
            className="
              hidden lg:block
              w-[3px] self-stretch bg-[#c81e2a]
            "
          />
          <div className="lg:hidden w-16 h-[3px] bg-[#c81e2a]" />

          {/* CONTENT */}
          <motion.div
  initial={{ opacity: 0, x: reverse ? -80 : 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className={`
    w-full lg:w-[65%]
    text-center lg:text-left
    ${!reverse ? "" : "lg:ml-24 xl:ml-28 2xl:ml-32"}
  `}
>
            <h3
              className="
                text-[20px]
                sm:text-[22px]
                md:text-[24px]
                lg:text-[26px]
                xl:text-[28px]
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
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                leading-relaxed
                text-[#4a5568]
                max-w-[100%]
                mx-auto lg:mx-0
                text-justify
              "
              dangerouslySetInnerHTML={{
                __html: cleanHtml(short_description),
              }}
            />

            <Link
              href={`/services/${slug}`}
              className="
                inline-block
                mt-6
                text-[#c81e2a]
                text-[15px]
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
    </div>
  )
}