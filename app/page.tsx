import AboutExpertise from "@/sections/home/AboutExpertise"
import Blog from "@/sections/home/Blog"
import Contact from "@/sections/home/Contact"
import Hero from "@/sections/home/Hero"
import Process from "@/sections/home/Process"
import Testimonials from "@/sections/home/Testimonials"

export const metadata = {
  alternates: {
    canonical: "https://www.maxgentechnologies.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Process />
      <AboutExpertise />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}


{/* <meta name="google-site-verification" content="SZuan7vTDWHYYlfrqDGpVBiYQoiueCJs2dftmLAf6T0" />
  */}