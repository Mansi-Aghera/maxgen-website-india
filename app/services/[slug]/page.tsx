

// import { notFound } from "next/navigation"
// import ServiceReadMore from "@/components/services/ServiceReadMore"
// import { getServiceBySlug } from "@/lib/services"
// import FAQ from "@/components/services/FAQ"
// import Testimonials from "@/sections/home/Testimonials"
// import WhyChoose from "@/components/services/WhyChoose"
// import QuoteCTA from "@/components/services/QuoteCTA"
// import Contact from "@/sections/home/Contact"
// import PageBanner from "@/components/ui/PageBanner"
// import ClientsSection from "@/components/services/ClientsSection"
// import Faqs from "../../../sections/faqs/Faqs"

// export default async function ServiceSlugPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params

//   const service = await getServiceBySlug(slug)

//   if (!service) return notFound()

//   return <>
//         <PageBanner
//         title={service.title}
//         breadcrumbs={[
//           { label: "Home", href: "/" },
//           { label: "Services", href: "/services" },
//           { label: service.title },
//         ]}
//       />
//       <ClientsSection />
//   <ServiceReadMore service={service} />
//   <QuoteCTA />
//   <WhyChoose />
//   <FAQ />
//   <Testimonials />
//   <Contact />
//   </>
// }

import { notFound } from "next/navigation"
import ServiceReadMore from "@/components/services/ServiceReadMore"
import { getServiceBySlug } from "@/lib/services"
import FAQ from "@/components/services/FAQ"
import Testimonials from "@/sections/home/Testimonials"
import WhyChoose from "@/components/services/WhyChoose"
import QuoteCTA from "@/components/services/QuoteCTA"
import Contact from "@/sections/home/Contact"
import PageBanner from "@/components/ui/PageBanner"
import ClientsSection from "@/components/services/ClientsSection"

export const dynamic = "force-dynamic"

// export default async function ServiceSlugPage({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const { slug } = params
//   console.log(slug,"slug")
//   const service = await getServiceBySlug(slug)
//   console.log(service,"service")

//   if (!service) return notFound()

//   return (
//     <>
//       <PageBanner
//         title={service.title}
//         breadcrumbs={[
//           { label: "Home", href: "/" },
//           { label: "Services", href: "/services" },
//           { label: service.title },
//         ]}
//       />

//       <ClientsSection />
//       <ServiceReadMore service={service} />
//       <QuoteCTA />
//       <WhyChoose />
//       <FAQ />
//       <Testimonials />
//       <Contact />
//     </>
//   )
// }

//   export async function generateMetadata({ slug }: { slug: string }) {
//   return {
//     alternates: {
//       canonical: `https://www.maxgentechnologies.com/services/${params.slug}`,
//     },
//   };
// }
// export default async function ServiceSlugPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params

//   const service = await getServiceBySlug(slug)




//   if (!service) return notFound()

//   return (
//     <>
//       <PageBanner
//         title={service.title}
//         breadcrumbs={[
//           { label: "Home", href: "/" },
//           { label: "Services", href: "/services" },
//           { label: service.title },
//         ]}
//       />

//       <ClientsSection />
//       <ServiceReadMore service={service} />
//       <QuoteCTA />
//       <WhyChoose />
//       <FAQ />
//       <Testimonials />
//       <Contact />
//     </>
//   )
// }


// import { notFound } from "next/navigation";

// import PageBanner from "@/components/PageBanner";
// import ClientsSection from "@/components/ClientsSection";
// import ServiceReadMore from "@/components/ServiceReadMore";
// import QuoteCTA from "@/components/QuoteCTA";
// import WhyChoose from "@/components/WhyChoose";
// import FAQ from "@/components/FAQ";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";

// import { getServiceBySlug } from "@/lib/api"; // adjust path if needed

// ✅ Dynamic SEO + Canonical
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}){
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
    };
  }

  return {
    alternates: {
      canonical: `https://www.maxgentechnologies.com/services/${slug}`,
    },

    // ✅ Open Graph (for social sharing)
  

   
  };
}

// ✅ Page Component
export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  // console.log(service, "service");

  if (!service) return notFound();

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <ClientsSection />
      <ServiceReadMore service={service} />
      <QuoteCTA />
      <WhyChoose />
      <FAQ />
      <Testimonials />
      <Contact />
    </>
  );
}