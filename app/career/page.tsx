"use client"

import { useState } from "react"
import CareerHero from "@/sections/career/Hero"
import JobsList from "@/sections/career/JobsList"

export default function CareerPage() {
  const [active, setActive] = useState<"freshers" | "experienced">("freshers")

  return (
    <>
      <CareerHero active={active} onChange={setActive} />
      <JobsList active={active} />
    </>
  )
}