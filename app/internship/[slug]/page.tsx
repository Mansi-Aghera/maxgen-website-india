

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
//   console.log("data:::::>>>>>",data)

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


import { notFound } from "next/navigation"
import type { Metadata } from "next"
import InternshipCard from "@/sections/internship/InternshipCard"
import { API, mediaUrl } from "@/lib/api"

console.log("✅ INTERNSHIP SLUG PAGE FILE LOADED")

/* slug helper */
function makeSlug(text: string) {
  return text
    ?.toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

// ==========================
// FETCH INTERNSHIP
// ==========================
async function getInternshipBySlug(slug: string) {
  const res = await fetch(API.internships, { cache: "no-store" })
  console.log(" internship fetch:", res.status)

  if (!res.ok) return null

  const json = await res.json()
  const list = json?.data || []

  const item =
    list.find((i: any) => i.slug === slug) ||
    list.find((i: any) => makeSlug(i.title) === slug)

  console.log(" internship found:", item)

  return item || null
}

// ==========================
// METADATA
// ==========================
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await props.params
  console.log("🟢 metadata slug:", slug)

  if (!slug) return {}

  const data = await getInternshipBySlug(slug)
  if (!data) return {}

  const title = data.title
  const description =
    data.short_description ||
    data.description ||
    "Internship opportunity"

  const image = data.image
    ? mediaUrl(data.image)
    : "/images/internship/default.jpg"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

// ==========================
// PAGE
// ==========================
export default async function InternshipDetail(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params
  console.log("🟡 PAGE slug:", slug)

  if (!slug) return notFound()

  const data = await getInternshipBySlug(slug)
  console.log("🟡 PAGE data:", data)

  if (!data) return notFound()

  const html =
    data.descriptions ||
    data.description ||
    data.descriptions_data ||
    ""

  return (
    <div className="bg-[var(--color-muted)] py-10">
      <div className="max-w-5xl mx-auto px-4">

        <InternshipCard
          title={data.title}
          icon={mediaUrl(data.image)}
          duration={data.experience}
          mode={data.project}
          location={data.location}
          slug={makeSlug(data.title)}
          clickable={false}
        />

        <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] p-6 mt-6">
          <h2 className="text-lg font-semibold mb-4">
            Internship Description
          </h2>

          <div
            className="prose max-w-none text-[#5c6b73]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

      </div>
    </div>
  )
}