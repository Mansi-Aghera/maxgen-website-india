


import InternshipCard from "@/sections/internship/InternshipCard"
import InternshipSidebar from "@/sections/internship/InternshipSidebar"
import { API, mediaUrl } from "@/lib/api"

async function getJobs() {
  const res = await fetch(API.jobList, { cache: "no-store" })

  if (!res.ok) return []

  const json = await res.json()
  return json?.data ?? []
}

export default async function CareerDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const jobs = await getJobs()

  const job = jobs.find((j: any) => j.slug === slug)

  if (!job) return <div className="p-10">Not found</div>

  return (
    <div className="bg-[var(--color-bg-light)] py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* CONTENT + SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-4 sm:p-6  lg:gap-8 items-start">
          {/* DESCRIPTION */}
          <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-4 sm:p-6">
            <div className="mb-8">
              <InternshipCard
              id={job.id} 
                title={job.title}
                 icon={mediaUrl(job.image)}
                duration={job.experience_required}
                mode={job.job_type} 
                location={job.location}
                slug={job.slug}
                clickable={false}
                variant="job"
                modeIcon="💰"
                hrefBase="career"
              />
            </div>
            
            <h2
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Job Description
            </h2>

            {/* Fixed: Using dangerouslySetInnerHTML to render TinyMCE content */}
            <div 
              className="prose max-w-none text-[#5c6b73] break-words overflow-hidden leading-relaxed prose-img:max-w-full"
              dangerouslySetInnerHTML={{ __html: job.description || "" }}
            />
          </div>

          {/* SIDEBAR */}
          <div className="w-full">
          <InternshipSidebar
            items={jobs}
            activeSlug={slug}
            basePath="career"
            title="Other Jobs"
          />
          </div>
        </div>
      </div>
    </div>
  )
}