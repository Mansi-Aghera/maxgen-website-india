import InternshipHero from "@/sections/internship/Hero"
import InternshipList from "@/sections/internship/InternshipList"


export const metadata = {
  alternates: {
    canonical: "https://www.maxgentechnologies.com/internship",
  },
};
export default function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <InternshipList />
    </>
  )
}