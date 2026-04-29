// // // "use client"

// // // import { motion } from "framer-motion"
// // // import { Service } from "@/data/services"
// // // import ServiceQuoteForm from "./ServiceQuoteForm"

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // // }

// // // const slideLeft = {
// // //   hidden: { opacity: 0, x: -50 },
// // //   show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
// // // }

// // // const slideRight = {
// // //   hidden: { opacity: 0, x: 50 },
// // //   show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
// // // }

// // // const stagger = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
// // // }

// // // export default function ServiceReadMore({ service }: { service: Service }) {
// // //   return (
// // //     <section className="bg-light py-16">
// // //       <div className="max-w-[1180px] mx-auto px-6">

// // //         {/* SECTION HEADING */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center mb-10"
// // //         >
// // //           <h2
// // //             className="text-3xl md:text-4xl font-semibold"
// // //             style={{ fontFamily: "var(--font-heading)" }}
// // //           >
// // //             Our <span className="text-accent">Services</span>
// // //           </h2>

// // //           <div className="flex justify-center mt-3 gap-2">
// // //             <div className="w-10 h-[2px] bg-primary" />
// // //             <div className="w-6 h-[2px] bg-accent" />
// // //             <div className="w-10 h-[2px] bg-primary" />
// // //           </div>
// // //         </motion.div>

// // //         {/* BOX CONTAINER */}
// // //         <div className="">

// // //           {/* SERVICE TITLE */}
// // //           <motion.h1
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="show"
// // //             className="text-[28px] md:text-[32px] font-semibold text-primary mb-8"
// // //             style={{ fontFamily: "var(--font-heading)" }}
// // //           >
// // //             {service.title}
// // //           </motion.h1>

// // //           {/* TOP GRID */}
// // //           <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

// // //             <motion.img
// // //               src={service.gif}
// // //               alt={service.title}
// // //               variants={slideLeft}
// // //               initial="hidden"
// // //               animate="show"
// // //               className="w-full max-w-[520px]"
// // //             />

// // //             <motion.div variants={slideRight} initial="hidden" animate="show">
// // //             </motion.div>

// // //           </div>

// // //           {/* DESCRIPTION */}
// // //           <motion.div
// // //             className="mt-10 space-y-4 text-[15px] leading-relaxed"
// // //             variants={stagger}
// // //             initial="hidden"
// // //             animate="show"
// // //           >
// // // <motion.div
// // //   className="mt-10 grid gap-6"
// // //   variants={stagger}
// // //   initial="hidden"
// // //   animate="show"
// // // >
// // //   {service.description.map((html, i) => (
// // //     <motion.div
// // //       key={i}
// // //       variants={fadeUp}
// // //       className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
// // //     >
// // //       <div
// // //         className="
// // //           prose
// // //           prose-sm
// // //           md:prose-base
// // //           max-w-none
// // //           text-gray-700
// // //         "
// // //         dangerouslySetInnerHTML={{ __html: html }}
// // //       />
// // //     </motion.div>
// // //   ))}
// // // </motion.div>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"

// // import { motion } from "framer-motion"
// // import type { Service } from "@/lib/services"

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // }

// // const slideLeft = {
// //   hidden: { opacity: 0, x: -50 },
// //   show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
// // }

// // const slideRight = {
// //   hidden: { opacity: 0, x: 50 },
// //   show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
// // }

// // const stagger = {
// //   hidden: {},
// //   show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
// // }

// // export default function ServiceReadMore({ service }: { service: Service }) {
// //   return (
// //     <section className="bg-white py-16">
// //       <div className="max-w-[1180px] mx-auto px-6">

// //         {/* DESCRIPTION */}
// // <motion.div
// //   className="mt-10"
// //   variants={stagger}
// //   initial="hidden"
// //   animate="show"
// // >
// //   <div className="grid gap-6 md:gap-8">
// //     {Array.isArray(service.description) &&
// //   service.description.map((html, i) => (
// //       <motion.div
// //         key={i}
// //         variants={fadeUp}
// //         className="
// //            bg-light
// //           border
// //           border-gray-200
// //           rounded-xl
// //           p-6 md:p-8
// //           shadow-sm
// //           hover:shadow-md
// //           transition-shadow
// //         "
// //       >
// //         <div
// //           className="
// //             prose
// //             prose-sm
// //             md:prose-base
// //             max-w-none
// //             text-gray-700
// //             prose-headings:text-primary
// //             prose-headings:font-semibold
// //             prose-p:leading-relaxed
// //             prose-ul:list-disc
// //             prose-ul:pl-5
// //           "
// //           dangerouslySetInnerHTML={{ __html: html.replace(/&lt;/g,"<").replace(/&gt;/g,">") }}
// //         />
// //       </motion.div>
// //     ))}
// //   </div>
// // </motion.div>

// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState, useMemo } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import type { Service } from "@/lib/services"

// interface Industry {
//   name: string
//   image: string
//   desc: string
// }

// function parseIndustries(htmlArray: string[]): Industry[] {
//   if (typeof window === "undefined") return []

//   const combined = htmlArray.join("")
//   const cleaned = combined.replace(/&lt;/g, "<").replace(/&gt;/g, ">")

//   const parser = new DOMParser()
//   const doc = parser.parseFromString(cleaned, "text/html")
//   const items = doc.querySelectorAll("[data-industry-item]")

//   const result: Industry[] = []
//   items.forEach((el) => {
//     const name = el.textContent?.trim() || ""
//     const image = el.getAttribute("data-image") || ""
//     const desc = el.getAttribute("data-desc") || ""
//     if (name) result.push({ name, image, desc })
//   })

//   return result
// }

// export default function ServiceReadMore({ service }: { service: Service }) {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const htmlArray = Array.isArray(service.description) ? service.description : []

//   const industries = useMemo(() => parseIndustries(htmlArray), [htmlArray])

//   // Fallback: if no data-industry-item found, render raw HTML as before
//   if (!industries.length) {
//     return (
//       <section className="bg-white py-16">
//         <div className="max-w-[1180px] mx-auto px-6">
//           <div className="grid gap-6 md:gap-8">
//             {htmlArray.map((html, i) => (
//               <div
//                 key={i}
//                 className="prose prose-sm md:prose-base max-w-none text-gray-700"
//                 dangerouslySetInnerHTML={{
//                   __html: html.replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   const active = industries[activeIndex]

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-[1180px] mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* LEFT: Industry List */}
//           <div className="flex flex-col divide-y divide-gray-100">
//             {industries.map((industry, index) => (
//               <motion.div
//                 key={index}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 animate={{
//                   color: activeIndex === index ? "#111111" : "#9ca3af",
//                 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex items-center justify-between py-5 cursor-pointer"
//               >
//                 <span
//                   className={`text-lg transition-all duration-200 ${
//                     activeIndex === index ? "font-semibold" : "font-normal"
//                   }`}
//                 >
//                   {industry.name}
//                 </span>
//                 <motion.span
//                   animate={{
//                     opacity: activeIndex === index ? 1 : 0,
//                     x: activeIndex === index ? 0 : -8,
//                   }}
//                   transition={{ duration: 0.2 }}
//                   className="text-gray-800 text-xl"
//                 >
//                   →
//                 </motion.span>
//               </motion.div>
//             ))}
//           </div>

//           {/* RIGHT: Image Card */}
//           <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] bg-gray-200">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ opacity: 0, scale: 1.04 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.97 }}
//                 transition={{ duration: 0.45, ease: "easeInOut" }}
//                 className="absolute inset-0"
//               >
//                 {/* Image */}
//                 {active.image && (
//                   <img
//                     src={active.image}
//                     alt={active.name}
//                     className="w-full h-full object-cover"
//                   />
//                 )}

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                 {/* Bottom Text */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <motion.h3
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.35, delay: 0.1 }}
//                     className="text-white text-xl font-bold mb-2"
//                   >
//                     {active.name}
//                   </motion.h3>
//                   <motion.p
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.18 }}
//                     className="text-gray-200 text-sm leading-relaxed"
//                   >
//                     {active.desc}
//                   </motion.p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import type { Service } from "@/lib/services";
import { h1 } from "framer-motion/client";

interface Industry {
  name: string;

  image: string;

  desc: string;
}

interface NonIndustry {
  head: string;
  para: string;
}

function parseIndustries(htmlArray: string[]): Industry[] {
  // console.log(htmlArray,"abc")
  // const secondArray =
  const combined = htmlArray.join("");

  const cleaned = combined

    .replace(/&lt;/g, "<")

    .replace(/&gt;/g, ">")

    .replace(/&amp;/g, "&");

  const parser = new DOMParser();

  const doc = parser.parseFromString(cleaned, "text/html");

  // console.log(doc,"doc")
  // ── FORMAT 1: data-industry-item ─────────────────────────────

  const dataItems = doc.querySelectorAll("[data-industry-item]");

  if (dataItems.length > 0) {
    // console.log("✅ FORMAT 1 detected, count:", dataItems.length);

    const result: Industry[] = [];
    // console.log(dataItems)

    dataItems.forEach((el) => {
      const name = el.textContent?.trim() || "";

      const image = el.getAttribute("data-image") || "";

      const desc = el.getAttribute("data-desc") || "";

      if (name) result.push({ name, image, desc });
    });
    // console.log(result)
    return result;
  }

  // ── FORMAT 2: font-size:22px sidebar divs ────────────────────

  // console.log("✅ FORMAT 2 detected");

  const img = doc.querySelector("img");

  const singleImage = img?.getAttribute("src") ?? "";

  let singleDesc = "";

  doc.querySelectorAll("p").forEach((p) => {
    const style = p.getAttribute("style") ?? "";

    if (
      style.includes("#ddd") ||
      style.includes("color:#ddd") ||
      style.includes("color: #ddd")
    ) {
      singleDesc = p.textContent?.trim() ?? "";
    }
  });

  const names: string[] = [];

  doc.querySelectorAll("div").forEach((div) => {
    const style = div.getAttribute("style") ?? "";

    const isSidebarItem =
      (style.includes("font-size:22px") || style.includes("font-size: 22px")) &&
      !style.includes("flex-direction");

    if (isSidebarItem) {
      const text = div.textContent?.replace("→", "").trim() ?? "";

      if (text.length > 2) names.push(text);
    }
  });

  if (!names.length) return [];

  return names.map((name) => ({ name, image: singleImage, desc: singleDesc }));
}

function parseNonIndustries(arr: string[]): NonIndustry[] {
  const combined = arr.join("");

  const doc = new DOMParser().parseFromString(combined, "text/html");

  const heading = doc.querySelector("h1,h2,h3,h4,h5,h6");
  const paragraph = doc.querySelector("p");

  if (!heading) return [];

  return [
    {
      head: heading.textContent?.trim() || "",
      para: paragraph?.textContent?.trim() || "",
    },
  ];
}

export default function ServiceReadMore({ service }: { service: Service }) {
  console.log(service, "service in read more");
  const [activeIndex, setActiveIndex] = useState(0);

  const [industries, setIndustries] = useState<Industry[]>([]);
  const [nonIndustries, setNonIndustries] = useState<NonIndustry[]>([]);

  const [mounted, setMounted] = useState(false);

  const htmlArray = Array.isArray(service.description)
    ? service.description
    : [];
  // console.log(htmlArray,"pop")
  // ✅ KEY FIX: parse only on CLIENT after mount (window is available)

  useEffect(() => {
    const parsed = parseIndustries(htmlArray);

    // console.log("✅ Client parsed industries:", parsed);

    setIndustries(parsed);

    setMounted(true);
  }, [htmlArray.join("")]);

  // ── Fallback: raw HTML render for ALL other blocks ────────────

  // Filter out the industry block from raw render

  const nonIndustryBlocks = htmlArray.filter(
    (html) => !html.includes("data-industry-item"),
  );
  // console.log(nonIndustryBlocks,"pop123")
  const IndustryBlocks = htmlArray.filter((html) =>
    html.includes("data-industry-item"),
  );
  // console.log(IndustryBlocks,"pop12345")

  useEffect(() => {
    const parsed = parseNonIndustries(IndustryBlocks);

    // console.log("✅ Client parsed non industries:", parsed);

    setNonIndustries(parsed);

    setMounted(true);
  }, [IndustryBlocks.join("")]);
  // ── Not yet mounted (SSR) — show nothing or skeleton ─────────

  if (!mounted) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-[1180px] mx-auto px-6">
          {nonIndustryBlocks.map((html, i) => (
            <div
              key={i}
              className="mb-8"
              dangerouslySetInnerHTML={{
                __html: html.replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  // ── No industries found — render everything as raw HTML ───────

  if (!industries.length) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-[1180px] mx-auto px-6">
          {htmlArray.map((html, i) => (
            <div
              key={i}
              className="mb-8 tinymce-content"
              dangerouslySetInnerHTML={{
                __html: html.replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  const active = industries[activeIndex];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* ── Render all NON-industry HTML blocks above ── */}

        {nonIndustryBlocks.map((html, i) => (
          <div
            key={i}
            className="mb-8"
            dangerouslySetInnerHTML={{
              __html: html.replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
            }}
          />
        ))}

        <div className="mt-8 bg-[#f5f6f8] p-8 rounded-2xl">
          {nonIndustries.map((html, i) => (
            <div key={i} >
              <h1 className="font-bold text-center text-2xl">{html.head}</h1>
              <p className="font-semibold text-center text-md">{html.para}</p>
            </div>
          ))}

          {/* ── Industries hover section ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[480px] mt-4">
            {/* LEFT */}
            <div className="flex flex-col divide-y divide-gray-100">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  animate={{
                    color: activeIndex === index ? "#111111" : "#9ca3af",
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between py-5 cursor-pointer"
                >
                  <span
                    className={`text-lg transition-all duration-200 ${activeIndex === index ? "font-semibold" : "font-normal"}`}
                  >
                    {industry.name}
                  </span>
                  <motion.span
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : -8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-800 text-xl"
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] bg-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="text-white text-xl font-bold mb-2"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.18 }}
                      className="text-gray-200 text-sm leading-relaxed"
                    >
                      {active.desc}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
