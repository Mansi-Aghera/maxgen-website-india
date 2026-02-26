

import { notFound } from "next/navigation"
import ServiceReadMore from "@/components/services/ServiceReadMore"
import { getServiceBySlug } from "@/lib/services"
import FAQ from "@/components/services/FAQ"
import Testimonials from "@/sections/home/Testimonials"
import WhyChoose from "@/components/services/WhyChoose"

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = await getServiceBySlug(slug)

  if (!service) return notFound()

  return <><ServiceReadMore service={service} />
  <WhyChoose />
  <FAQ />
  </>
}