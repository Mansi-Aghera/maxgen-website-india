

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
const normalizeHtml = (html: string) => {
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}
/* fetch internships */
async function getInternships() {
  const res = await fetch(API.internshipList, { cache: "no-store" })

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

    
      

      {/* Content + Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-4 sm:p-6 lg:gap-8 items-start">

        {/* LEFT CONTENT */}
        <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-4 sm:p-6">
<div className="mb-8">
        <InternshipCard
        id={data.id} 
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

          {/* <div
  className="prose max-w-none text-[#5c6b73] break-words overflow-hidden prose-img:max-w-full"
  dangerouslySetInnerHTML={{ __html: html }}
/> */}
<div
  className="prose max-w-none text-[#5c6b73] leading-relaxed break-words [&_*]:break-words [&_*]:overflow-wrap:anywhere prose-img:max-w-full"
  dangerouslySetInnerHTML={{
    __html: normalizeHtml(html),
  }}
/>

        </div>

        {/* RIGHT SIDEBAR */}
        

   <div className="w-full">
  <InternshipSidebar
    items={internships}
    activeSlug={slug}
    basePath="internship"
    title="Other Internships"
  />
</div>

      </div>

    </Section>
  )
}