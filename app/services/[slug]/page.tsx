

import { notFound } from "next/navigation"
import ServiceReadMore from "@/components/services/ServiceReadMore"
import { getServiceBySlug } from "@/lib/services"
import FAQ from "@/components/services/FAQ"
import Testimonials from "@/sections/home/Testimonials"
import WhyChoose from "@/components/services/WhyChoose"
import QuoteCTA from "@/components/services/QuoteCTA"
import Contact from "@/sections/home/Contact"
import PageBanner from "@/components/ui/PageBanner"

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = await getServiceBySlug(slug)

  if (!service) return notFound()

  return <>
        <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
  <ServiceReadMore service={service} />
  <QuoteCTA />
  <WhyChoose />
  <FAQ category={service.title} />
  <Testimonials />
  <Contact />
  </>
}