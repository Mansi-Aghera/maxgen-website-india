

// "use client"

// import Section from "@/components/ui/Section"
// import ServiceQuoteForm from "@/components/services/ServiceQuoteForm"
// import BlogList from "@/components/blog/BlogList"

// export const metadata = {
//   alternates: {
//     canonical: "https://www.maxgentechnologies.com/blogs",
//   },
// };

// export default function BlogsPage() {
//   return (
//     <Section className="bg-[#f4f6f9]">
//       <div className=" grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        
//         {/* LEFT — BLOGS */}
//         <BlogList />

//         {/* RIGHT — QUOTE FORM */}
//         <div className="lg:sticky lg:top-24 h-fit">
//           <ServiceQuoteForm />
//         </div>
//       </div>
//     </Section>
//   )
// }

import BlogsPageClient from "../../components/BlogsPageClient"

export const metadata = {
  alternates: {
    canonical: "https://www.maxgentechnologies.com/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsPageClient />
}