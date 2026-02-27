
// "use client"

// import { useEffect, useState } from "react"
// import PortfolioCard from "./PortfolioCard"
// import Section from "@/components/ui/Section"
// import { motion, AnimatePresence } from "framer-motion"

// type Category = "all" | "Website" | "App" | "Dashboard" | "Branding"

// type Item = {
//   title: string
//   image: string | null
//   category: Category
// }

// const filters: { label: string; value: Category }[] = [
//   { label: "ALL", value: "all" },
//   { label: "WEBSITE", value: "Website" },
//   { label: "APP", value: "App" },
//   { label: "DASHBOARD", value: "Dashboard" },
//   { label: "BRANDING", value: "Branding" },
// ]

// export default function PortfolioGrid() {
//   const [active, setActive] = useState<Category>("all")
//   const [items, setItems] = useState<Item[]>([])

//   useEffect(() => {
//     fetch("https://maxproject.pythonanywhere.com/portfolio/")
//       .then((res) => res.json())
//       .then((json) => {
//         const data = json?.data ?? json ?? []

//         const mapped: Item[] = data
//           .filter((p: any) => p.status === "Active")
//           .map((p: any) => ({
//             title: p.name,
//             image:
//               p.image && p.image.trim() !== ""
//                 ? `https://maxproject.pythonanywhere.com${p.image}`
//                 : null,
//             category: p.type as Category,
//           }))

//         setItems(mapped)
//       })
//       .catch((e) => console.error("Portfolio fetch error", e))
//   }, [])

//   const filtered =
//     active === "all" ? items : items.filter((i) => i.category === active)

//   return (
//     <Section>
//       {/* FILTERS */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {filters.map((f) => (
//           <button
//             key={f.value}
//             onClick={() => setActive(f.value)}
//             className={`px-5 py-2 text-sm rounded-md border transition-all
//               ${
//                 active === f.value
//                   ? "bg-primary text-white border-primary"
//                   : "border-[var(--color-border)] text-primary hover:bg-primary"
//               }`}
//           >
//             {f.label}
//           </button>
//         ))}
//       </div>

//       {/* GRID */}
//       <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         <AnimatePresence>
//           {filtered.map((item, i) => (
//             <motion.div
//               key={item.title + i}
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//             >
//               <PortfolioCard title={item.title} image={item.image} />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </Section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import PortfolioCard from "./PortfolioCard"
import Section from "@/components/ui/Section"
import { motion, AnimatePresence } from "framer-motion"
import { API, mediaUrl } from "@/lib/api"   // ✅ import

type Category = "all" | "Website" | "App" | "Dashboard" | "Branding"

type Item = {
  title: string
  image: string | null
  category: Category
}

const filters: { label: string; value: Category }[] = [
  { label: "ALL", value: "all" },
  { label: "WEBSITE", value: "Website" },
  { label: "APP", value: "App" },
  { label: "DASHBOARD", value: "Dashboard" },
  { label: "BRANDING", value: "Branding" },
]

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("all")
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    fetch(API.portfolio)   // ✅ replaced URL
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data ?? json ?? []

        const mapped: Item[] = data
          .filter((p: any) => p.status === "Active")
          .map((p: any) => ({
            title: p.name,
            image:
              p.image && p.image.trim() !== ""
                ? mediaUrl(p.image)   // ✅ media helper
                : null,
            category: p.type as Category,
          }))

        setItems(mapped)
      })
      .catch((e) => console.error("Portfolio fetch error", e))
  }, [])

  const filtered =
    active === "all"
      ? items
      : items.filter((i) => i.category === active)

  return (
    <Section>
      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-5 py-2 text-sm rounded-md border transition-all
              ${
                active === f.value
                  ? "bg-primary text-white border-primary"
                  : "border-[var(--color-border)] text-primary hover:bg-primary"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.title + i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard
                title={item.title}
                image={item.image}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}