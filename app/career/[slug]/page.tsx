import InternshipCard from "@/sections/internship/InternshipCard"

async function getJob(slug: string) {
  const res = await fetch(
    `https://maxproject.pythonanywhere.com/jobs/`,
    { cache: "no-store" }
  )

  if (!res.ok) return null

  const json = await res.json()
  const jobs = json?.data ?? []   // ✅ extract array

  const job = jobs.find((j: any) => j.slug === slug)

  return job ?? null
}

export default async function CareerDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const job = await getJob(slug)

  if (!job) return <div className="p-10">Not found</div>

  return (
    <div className="bg-[var(--color-muted)] py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* TOP CARD */}
        <InternshipCard
          title={job.title}
          icon="/images/internship/internship1.png"
          duration={job.experience_required}
          mode={job.job_type}
          location={job.location}
          slug={job.slug}
          clickable={false}
          variant="job"
          modeIcon="💰"
          hrefBase="career"
        />

        {/* DESCRIPTION */}
        <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 mt-6">
          <h2
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Job Description
          </h2>

          <p className="text-muted leading-relaxed whitespace-pre-line">
            {job.description}
          </p>
        </div>

        {/* EXTRA META */}
        
      </div>
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-muted mb-1">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}