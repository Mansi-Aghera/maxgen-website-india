

"use client"

import { useEffect, useState } from "react"
import Section from "@/components/ui/Section"
import InternshipCard from "../internship/InternshipCard"
import { motion } from "framer-motion"
import { stagger } from "@/lib/motion"

type Job = {
  id: number
  title: string
  slug: string
  description: string
  department: string
  job_type: string
  experience_required: string
  salary_range: string
  location: string
  status: string
}

type Props = {
  active: "freshers" | "experienced"
}

export default function JobsList({ active }: Props) {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetch("https://maxproject.pythonanywhere.com/jobs/")
      .then((res) => res.json())
      .then((data) => {
        const activeJobs = data.filter((j: Job) => j.status === "active")
        setJobs(activeJobs)
      })
  }, [])

  return (
    <Section>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-5"
      >
        {jobs.map((job) => (
          <InternshipCard
            key={job.id}
            title={`Urgently Hiring for the Position of ${job.title}`}
            icon="/images/internship/internship1.png"
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
    </Section>
  )
}