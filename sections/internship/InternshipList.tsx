

"use client"

import Section from "@/components/ui/Section"
import InternshipCard from "./InternshipCard"
import { motion } from "framer-motion"
import { stagger } from "@/lib/motion"
import { useEffect, useState } from "react"
import { API, mediaUrl } from "@/lib/api"

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
            icon={mediaUrl(item.image)}
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