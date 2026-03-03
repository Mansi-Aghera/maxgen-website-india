// "use client"

// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { API, mediaUrl } from "@/lib/api"

// interface Client {
//   id: number
//   name: string
//   logo: string
//   status?: string
// }

// export default function ClientsSection() {
//   const [clients, setClients] = useState<Client[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const res = await fetch(API.clients)
//         const data = await res.json()

//         const list = data.data || data.results || data

//         const activeClients = Array.isArray(list)
//           ? list.filter(
//               (item: Client) =>
//                 item.status?.toLowerCase() === "active"
//             )
//           : []

//         setClients(activeClients)
//       } catch (error) {
//         console.error("Clients API error:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchClients()
//   }, [])

//   if (loading) return null

//   return (
//     <section className="bg-[#f5f5f5] py-16 overflow-hidden">
//       <div className="container text-center mb-10">
//         <p className="text-sm tracking-[2px] text-gray-500 uppercase">
//           Trusted by Business and Enterprises
//         </p>
//       </div>

//       {/* Scrolling Logo Row */}
//       <div className="relative w-full overflow-hidden">
//         <motion.div
//           className="flex gap-16 items-center"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 20,
//             ease: "linear",
//           }}
//         >
//           {[...clients, ...clients].map((client, index) => (
//             <div
//               key={`${client.id}-${index}`}
//               className="flex items-center justify-center min-w-[150px] md:min-w-[200px]"
//             >
//               <img
//                 src={mediaUrl(client.logo)}
//                 alt={client.name}
//                 className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { API, mediaUrl } from "@/lib/api"

interface Client {
  id: number
  name: string
  logo: string
  status?: string
}

export default function ClientsSection() {
  const [clients, setClients] = useState<Client[]>([])

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(API.clients)
        const json = await res.json()
        const data = json.data || json.results || json

        const active = Array.isArray(data)
          ? data.filter(
              (item: Client) =>
                item.status?.toLowerCase() === "active"
            )
          : []

        setClients(active)
      } catch (err) {
        console.error("Clients fetch error:", err)
      }
    }

    fetchClients()
  }, [])

  return (
    <section className="bg-[#f3f3f3] py-16 overflow-hidden">
      <div className="container text-center mb-12">
        <p className="text-xs md:text-sm tracking-[2px] uppercase text-gray-500">
          Trusted by Business and Enterprises
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="marquee gap-20">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[150px] md:min-w-[200px] flex items-center justify-center"
            >
              <img
                src={mediaUrl(client.logo)}
                alt={client.name}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}