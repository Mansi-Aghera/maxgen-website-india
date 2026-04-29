

import ServicesIntro from "@/sections/services/ServicesIntro"
import ServiceDetail from "@/components/services/ServiceDetail"
import { getServices } from "@/lib/services"

export const metadata = {
  alternates: {
    canonical: "https://www.maxgentechnologies.com/services",
  },
};

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <div className="bg-[#f6f7fb]">
        <ServicesIntro />
      </div>

      <main>
        {services.map((s, i) => (
          <ServiceDetail
            key={s.id}
            title={s.title}
            image={s.image}
            slug={s.slug}
            short_description={s.short_description}
            reverse={i % 2 !== 0}
          />
        ))}
      </main>
    </>
  )
}