
"use client"

import { useEffect, useState } from "react"
import Section from "@/components/ui/Section"
import InternshipCard from "../internship/InternshipCard"
import { motion } from "framer-motion"
import { stagger } from "@/lib/motion"
import { API, mediaUrl } from "@/lib/api"   // ✅ import API

type Job = {
  id: number
  title: string
  slug: string
  description: string
  department: string
  job_type: string
  experience: string
  experience_required: string
  salary_range: string
  location: string
  status: string
  image: string
}

type Props = {
  active: "freshers" | "experienced"
}

export default function JobsList({ active }: Props) {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetch(API.jobList)   // ✅ replaced URL
      .then((res) => res.json())
      .then((json) => {
        const data = json?.data ?? []

        // status filter
        const activeJobs = data.filter(
          (j: Job) => j.status === "active"
        )

        setJobs(activeJobs)
      })
      .catch((e) => console.error("Jobs fetch error", e))
  }, [])

  // experience filter
  const filtered =
    active === "freshers"
      ? jobs.filter(
          (j) => j.experience?.toLowerCase() === "fresher"
        )
      : jobs.filter(
          (j) => j.experience?.toLowerCase() !== "fresher"
        )

  return (
    <Section className="px-4 sm:px-6">
      <div className="w-full">
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-4 sm:space-y-5"
      >
         {filtered.length === 0 && (
        <div className="text-center text-sm text-muted py-10">
          No jobs available.
        </div>
      )}
      
        {filtered.map((job) => (
          <InternshipCard
           id={job.id} 
            key={job.id}
            title={job.title}
            icon={mediaUrl(job.image)}
            duration={job.experience_required}
             mode={job.job_type} 
            location={job.location}
            slug={job.slug}
            modeIcon="💰"
            variant="job"
            hrefBase="career"
          />
        ))}
      </motion.div>
      </div>
    </Section>
  )
}