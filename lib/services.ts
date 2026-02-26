
// // const BASE = "https://maxproject.pythonanywhere.com"

// // export interface Service {
// //   id: number
// //   slug: string
// //   title: string
// //   image: string
// //   gif: string
// //   short_description: string
// //   description: string[]
// // }

// // /* SAME SLUG AS NAVBAR */
// // function makeSlug(text: string) {
// //   return text
// //     .toLowerCase()
// //     .replace(/&/g, "and")
// //     .replace(/[^a-z0-9\s-]/g, "")
// //     .replace(/\s+/g, "-")
// // }

// // export async function getServices(): Promise<Service[]> {
// //   const res = await fetch(`${BASE}/services/`, {
// //     cache: "no-store",
// //   })

// //   const json = await res.json()
// //   const data = json.data || []

// //   return data
// //   .slice()
// //   .sort((a: any, b: any) => a.id - b.id)
// //   .map((s: any) => ({
// //     id: s.id,
// //     slug: makeSlug(s.title),   // ✅ IMPORTANT
// //     title: s.title,
// //     image: BASE + s.image,
// //     gif: BASE + s.image2,
// //     short_description: s.short_description,
// //     description: [s.description],
// //   }))
// // }

// // export async function getServiceBySlug(slug: string) {
// //   const services = await getServices()
// //   return services.find((s) => s.slug === slug)
// // }


// import { API, mediaUrl } from "@/lib/api"

// export interface Service {
//   id: number
//   slug: string
//   title: string
//   image: string
//   gif: string
//   short_description: string
//   description: string[]
//     image2?: string  
//   subject?: string  // ✅

// }

// /* SAME SLUG AS NAVBAR */
// function makeSlug(text: string) {
//   return text
//     .toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-")
// }

// export async function getServices(): Promise<Service[]> {
//   const res = await fetch(API.services, {
//     cache: "no-store",
//   })

//   const json = await res.json()
//   const data = json.data || []

//   return data
//     .filter((s: any) => s.status === "Active")   // ✅ status filter
//     .sort((a: any, b: any) => a.id - b.id)
//     .map((s: any) => ({
//       id: s.id,
//       slug: makeSlug(s.title),
//       title: s.title,
//       image: mediaUrl(s.image),
//       gif: mediaUrl(s.image2),
//       short_description: s.short_description,
//       description: s.descriptions_data || [],   // ✅ NEW FIELD
//     }))
// }
// export async function getServiceBySlug(slug: string) {
//   const services = await getServices()
//   return services.find((s) => s.slug === slug)
// }

import { API, mediaUrl } from "@/lib/api"

export interface Service {
  id: number
  slug: string
  title: string
  image: string
  gif: string
  short_description: string
  description: string[]
  image2?: string
  subject?: string
}

/* SAME SLUG AS NAVBAR */
function makeSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

export async function getServices(): Promise<Service[]> {
  const res = await fetch(API.services, {
    cache: "no-store",
  })

  const json = await res.json()
  const data = json.data || []

  return data
    .filter((s: any) => s.status === "Active")
    .sort((a: any, b: any) => a.id - b.id)
    .map((s: any) => ({
      id: s.id,
      slug: makeSlug(s.title),
      title: s.title,
      image: mediaUrl(s.image),
      gif: mediaUrl(s.image),        // fallback
      image2: mediaUrl(s.image2),    // ✅ ADD
      subject: s.subject,            // ✅ ADD
      short_description: s.short_description,
      description: s.descriptions_data || [],
    }))
}

export async function getServiceBySlug(slug: string) {
  const services = await getServices()
  return services.find((s) => s.slug === slug)
}