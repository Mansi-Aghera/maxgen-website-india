// import ServicesIntro from "@/sections/services/ServicesIntro"
// import ServiceDetail from "@/components/services/ServiceDetail"

// export default function ServicesPage() {
//   return (
//     <>
//       {/* TOP INTRO SECTION */}
//       <div  className="bg-[#f6f7fb]">
//         <ServicesIntro />
//       </div>
      

//       {/* SERVICES DETAILS */}
//       <main>
//         <ServiceDetail
//           title="Web Design & Development"
//           image="/images/services/service-banner1.gif"
//           slug="web-design-development"
//           description={[
//             "Web development & Website Development is the process of designing and creating websites for the Internet. This can include everything from the layout and user interface design to the coding and programming required to make the site functional. Web development can range from simple static websites with basic HTML, CSS, Java script & React JS to dynamic sites that use server-side scripting languages like PHP, Python or Node JS to generate dynamic content.",
//              "Web Designing & Web development typically involves a team of professionals, including web designers who create the site's visual appearance and user experience, front end developers who write the code that creates the site's interface, and back end developers who handle the server-side programming and database integration. Additionally, web developers must consider aspects such as web accessibility, search engine optimization (SEO), and website security when building a website."
//           ]}
//         />

//         <ServiceDetail
//           reverse
//           title="Mobile App Development"
//           image="/images/services/service-banner2.gif"
//           slug="mobile-app-development"
//           description={[
//             "Mobile app development Company refers to the process of creating software applications that run on mobile devices such as smartphones and tablets. Mobile app development involves several stages, including concept, design, development, testing, deployment, and maintenance.",
// "Mobile app development can be categorized into two main types: native app development and cross-platform app development. Native app development involves building apps specifically for a particular operating system, such as iOS ,Flutter app development or Android Studio . This approach allows for more optimization and integration with the specific device, resulting in faster and more efficient performance. Cross-platform app development, on the other hand, involves creating apps that can run on multiple operating systems, reducing the time and resources required for development and maintenance."
//           ]}
//         />

//         <ServiceDetail
//           title="Logo Design & Graphic Design"
//           image="/images/services/service-banner3.gif"
//           slug="logo-design-graphic-design"
//           description={[
//             "At every online touchpoint with your brand, we blend innovation, aesthetics, and outstanding user experiences to inspire loyalty in your customers. Our collaboration will begin with Graphic design and UX workshops to determine how creative and experience design can assist your company's goals and KPIs.",
//             "We always push for much more than simple look and feel enhancements since we think something as subjective as design should still translate into quantifiable business gains. We use contextual, human-centric, findable concepts with a well thought out design approach to build the experiences your consumers want and need. We think that innovative visual design and clever information architecture are equally crucial.",
//           ]}
//         />

//         <ServiceDetail
//           reverse
//           title="Support & Maintenance"
//           image="/images/services/service-banner4.gif"
//           slug="support-maintenance"
//           description={[
//             "Our first objective is problem prevention, so we take proactive steps to avert situations before they arise. Our triage, prioritising, and escalation methods ensure quick and coordinated resolution of any issues. You can comfortably cut in-house headcount and expertise with access to our knowledgeable resources after any Software development project. We aim to establish a long-term collaboration in which we comprehend your company's operations, support system, and roadmap just as well as a staff member from within.",
//             "We aim to establish a long-term collaboration with your company.",
//           ]}
//         />

//         <ServiceDetail
//           title="E-commerce Development"
//           image="/images/services/service-banner2.gif"
//           slug="ecommerce-development"
//           description={[
//             "Our purchasing habits are still changing as the internet does. These days, customers demand a smooth, simple purchasing process. Our E-commerce solutions can be what you need to enhance your online buying experience.",
//             "o maintain and improve online E-commerce services marketing tools with the appropriate branding, Maxgen Technologies Pvt. Ltd. offers specialised services in Ahmedabad, Pune & Mumbai. This aids in creating website architecture and guides the characteristics that must be considered before beginning any project. You will have complete authority to change any plans and express your viewpoint. By doing this, we are better equipped to understand your company's needs and apply our plans to meet them.",
//           ]}
//         />

//         <ServiceDetail
//           reverse
//           title="SEO & Digital Marketing Services"
//           image="/images/services/service-banner1.gif"
//           slug="seo-digital-marketing"
//           description={[
//             "SEO (Search Engine Optimization) digital marketing services refer to the strategies and tactics used to improve the visibility and ranking of a website on search engine results pages (SERPs). SEO Internet marketing services involve a range of techniques designed to help businesses increase their online visibility, attract more organic traffic, and improve their search engine rankings.",
//             "SEO services digital marketing services can include on-page optimization, which involves optimizing the content and structure of a website to make it more search engine friendly. This includes optimizing meta tags, headers, content, images, and internal links. Off-page optimization involves building high-quality backlinks to a website from other authoritative sites, which can improve its search engine rankings.",
//           ]}
//         />
//       </main>
//     </>
//   )
// }


import ServicesIntro from "@/sections/services/ServicesIntro"
import ServiceDetail from "@/components/services/ServiceDetail"
import { getServices } from "@/lib/services"

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