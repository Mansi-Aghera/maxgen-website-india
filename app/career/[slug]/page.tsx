

// // import InternshipCard from "@/sections/internship/InternshipCard"
// // import { API } from "@/lib/api"   // ✅ import API

// // async function getJob(slug: string) {
// //   const res = await fetch(API.jobs, {   // ✅ replaced URL
// //     cache: "no-store",
// //   })

// //   if (!res.ok) return null

// //   const json = await res.json()
// //   const jobs = json?.data ?? []

// //   const job = jobs.find((j: any) => j.slug === slug)

// //   return job ?? null
// // }

// // export default async function CareerDetail({
// //   params,
// // }: {
// //   params: Promise<{ slug: string }>
// // }) {
// //   const { slug } = await params
// //   const job = await getJob(slug)

// //   if (!job) return <div className="p-10">Not found</div>

// //   return (
// //     <div className="bg-[var(--color-muted)] py-10">
// //       <div className="max-w-5xl mx-auto px-4">

// //         {/* TOP CARD */}
// //         <InternshipCard
// //           title={job.title}
// //           icon="/images/internship/internship1.png"
// //           duration={job.experience_required}
// //           mode={job.job_type}
// //           location={job.location}
// //           slug={job.slug}
// //           clickable={false}
// //           variant="job"
// //           modeIcon="💰"
// //           hrefBase="career"
// //         />

// //         {/* DESCRIPTION */}
// //         <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 mt-6">
// //           <h2
// //             className="text-lg font-semibold mb-4"
// //             style={{ fontFamily: "var(--font-heading)" }}
// //           >
// //             Job Description
// //           </h2>

// //           <p className="text-muted leading-relaxed whitespace-pre-line">
// //             {job.description}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // function Meta({ label, value }: { label: string; value: string }) {
// //   return (
// //     <div>
// //       <div className="text-xs text-muted mb-1">{label}</div>
// //       <div className="font-medium">{value}</div>
// //     </div>
// //   )
// // }


// import InternshipCard from "@/sections/internship/InternshipCard"
// import InternshipSidebar from "@/sections/internship/InternshipSidebar"
// import { API } from "@/lib/api"

// async function getJobs() {
//   const res = await fetch(API.jobs, { cache: "no-store" })

//   if (!res.ok) return []

//   const json = await res.json()
//   return json?.data ?? []
// }

// export default async function CareerDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params

//   const jobs = await getJobs()

//   const job = jobs.find((j: any) => j.slug === slug)

//   if (!job) return <div className="p-10">Not found</div>

//   return (
//     <div className="bg-[var(--color-bg-light)] py-10">

//       <div className="container">

//         {/* JOB CARD */}
        

//         {/* CONTENT + SIDEBAR */}
//         <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-8 items-start">
          

//           {/* DESCRIPTION */}
//           <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
// <div className="mb-8">
//           <InternshipCard
//             title={job.title}
//             icon="/images/internship/internship1.png"
//             duration={job.experience_required}
//             mode={job.job_type}
//             location={job.location}
//             slug={job.slug}
//             clickable={false}
//             variant="job"
//             modeIcon="💰"
//             hrefBase="career"
//           />
//         </div>
//             <h2
//               className="text-lg font-semibold mb-4"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               Job Description
//             </h2>

//             <p className="text-muted leading-relaxed whitespace-pre-line break-words">
//               {job.description}
//             </p>

//           </div>

//           {/* SIDEBAR */}
//           <InternshipSidebar
//             items={jobs}
//             activeSlug={slug}
//             basePath="career"
//             title="Other Jobs"
//           />

//         </div>

//       </div>

//     </div>
//   )
// }


import InternshipCard from "@/sections/internship/InternshipCard"
import InternshipSidebar from "@/sections/internship/InternshipSidebar"
import { API, mediaUrl } from "@/lib/api"

async function getJobs() {
  const res = await fetch(API.jobs, { cache: "no-store" })

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
      <div className="container">
        {/* CONTENT + SIDEBAR */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-8 items-start">
          {/* DESCRIPTION */}
          <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
            <div className="mb-8">
              <InternshipCard
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
              className="prose max-w-none text-[#5c6b73] break-words overflow-hidden leading-relaxed"
              dangerouslySetInnerHTML={{ __html: job.description || "" }}
            />
          </div>

          {/* SIDEBAR */}
          <InternshipSidebar
            items={jobs}
            activeSlug={slug}
            basePath="career"
            title="Other Jobs"
          />
        </div>
      </div>
    </div>
  )
}