import { notFound } from "next/navigation"
import { services } from "@/data/services"
import ServiceReadMore from "@/components/services/ServiceReadMore"

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = services.find((s) => s.slug === slug)

  if (!service) return notFound()

  return <ServiceReadMore service={service} />
}