

// import InternshipCard from "@/sections/internship/InternshipCard"
// import { API, mediaUrl } from "@/lib/api"

// /* same slug logic */
// function makeSlug(text: string) {
//   return text
//     ?.toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-")
// }

// async function getInternshipBySlug(slug: string) {
//   const res = await fetch(API.internships, {
//     cache: "no-store",
//   })

//   if (!res.ok) return null

//   const json = await res.json()
//   const list = json?.data || []

//   return list.find((i: any) => i.slug === slug) || null
// }

// export default async function InternshipDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params
//   const data = await getInternshipBySlug(slug)

//   if (!data) return <div className="p-10">Not found</div>

//   const html =
//     data.descriptions ||
//     data.description ||
//     data.descriptions_data ||
//     ""

//   return (
//     <div className="bg-[var(--color-muted)] py-10">
//       <div className="max-w-5xl mx-auto px-4">

//         <InternshipCard
//           title={data.title}
//           icon={mediaUrl(data.image)}
//           duration={data.experience}
//           mode={data.project}
//           location={data.location}
//           slug={makeSlug(data.title)}
//           clickable={false}
//         />

//         <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 mt-6">
//           <h2 className="text-lg font-semibold mb-4">
//             Internship Description
//           </h2>

//           <div
//             className="prose max-w-none text-[#5c6b73] break-words overflow-wrap-anywhere"
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </div>

//       </div>
//     </div>
//   )
// }

import InternshipCard from "@/sections/internship/InternshipCard"
import InternshipSidebar from "@/sections/internship/InternshipSidebar"
import Section from "@/components/ui/Section"
import { API, mediaUrl } from "@/lib/api"

/* slug helper */
function makeSlug(text: string) {
  return text
    ?.toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

/* fetch internships */
async function getInternships() {
  const res = await fetch(API.internships, { cache: "no-store" })

  if (!res.ok) return []

  const json = await res.json()
  return json?.data || []
}

export default async function InternshipDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const internships = await getInternships()

  const data = internships.find((i: any) => i.slug === slug)

  if (!data) return <div className="p-10">Not found</div>

  const html =
    data.descriptions ||
    data.description ||
    data.descriptions_data ||
    ""

  return (
    <Section className="bg-[var(--color-bg-light)]">

      {/* Internship Card Full Width */}
      {/* <div className="mb-8">
        <InternshipCard
          title={data.title}
          icon={mediaUrl(data.image)}
          duration={data.experience}
          mode={data.project}
          location={data.location}
          slug={makeSlug(data.title)}
          clickable={false}
        />
      </div> */}

      {/* Content + Sidebar Layout */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-8 items-start">

        {/* LEFT CONTENT */}
        <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6">
<div className="mb-8">
        <InternshipCard
          title={data.title}
          icon={mediaUrl(data.image)}
          duration={data.experience}
          mode={data.project}
          location={data.location}
          slug={makeSlug(data.title)}
          clickable={false}
        />
      </div>
          <h2 className="text-lg font-semibold mb-4">
            Internship Description
          </h2>

          <div
  className="prose max-w-none text-[#5c6b73] break-words overflow-hidden"
  dangerouslySetInnerHTML={{ __html: html }}
/>

        </div>

        {/* RIGHT SIDEBAR */}
        

        <InternshipSidebar
                     items={internships}
                    activeSlug={slug}
                    basePath="internship"
                    title="Other Internships"
                  />

      </div>

    </Section>
  )
}