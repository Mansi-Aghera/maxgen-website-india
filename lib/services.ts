export interface Service {
  id: number
  slug: string
  title: string
  image: string
  gif: string
  short_description: string
  description: string[]
}

const BASE = "https://maxproject.pythonanywhere.com"

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export async function getServices(): Promise<Service[]> {
  const res = await fetch(`${BASE}/services/`, {
    cache: "no-store",
  })

  const json = await res.json()

  return json.data.map((s: any) => ({
    id: s.id,
    slug: slugify(s.title),
    title: s.title,
    image: BASE + s.image,
    gif: BASE + s.image,
    short_description: s.short_description,
    description: [s.description],
  }))
}

export async function getServiceBySlug(slug: string) {
  const services = await getServices()
  return services.find((s) => s.slug === slug)
}