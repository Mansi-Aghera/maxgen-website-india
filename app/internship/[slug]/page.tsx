
// import InternshipCard from "@/sections/internship/InternshipCard"

// async function getInternship(slug: string) {
//   const res = await fetch(
//     `https://maxproject.pythonanywhere.com/career_internship/${slug}/`,
//     { cache: "no-store" }
//   )

//   if (!res.ok) return null
//   return res.json()
// }

// export default async function InternshipDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params
//   const data = await getInternship(slug)

//   if (!data) return <div className="p-10">Not found</div>

//   return (
//     <div className="bg-[var(--color-muted)] py-10">
//       <div className="max-w-5xl mx-auto px-4">

//         {/* TOP CARD (reused) */}
//         <InternshipCard
//           title={data.title}
//           icon={`https://maxproject.pythonanywhere.com${data.image}`}
//           duration={data.experience}
//           mode={data.project}
//           location={data.location}
//           slug={data.slug}
//           clickable={false}
//         />

//         {/* DESCRIPTION */}
//         <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 mt-6">
//           <h2
//             className="text-lg font-semibold mb-4"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             Internship Description
//           </h2>

//           <p className="text-muted leading-relaxed whitespace-pre-line">
//             {data.descriptions}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

import InternshipCard from "@/sections/internship/InternshipCard"
import { API, mediaUrl } from "@/lib/api"

async function getInternship(slug: string) {
  const res = await fetch(
    `${API.internships}${slug}/`,
    { cache: "no-store" }
  )

  if (!res.ok) return null
  return res.json()
}

export default async function InternshipDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getInternship(slug)

  if (!data) return <div className="p-10">Not found</div>

  return (
    <div className="bg-[var(--color-muted)] py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* TOP CARD */}
        <InternshipCard
          title={data.title}
          icon={mediaUrl(data.image)}
          duration={data.experience}
          mode={data.project}
          location={data.location}
          slug={data.slug}
          clickable={false}
        />

        {/* DESCRIPTION */}
        <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 mt-6">
          <h2
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Internship Description
          </h2>

          <p className="text-muted leading-relaxed whitespace-pre-line">
            {data.descriptions}
          </p>
        </div>
      </div>
    </div>
  )
}