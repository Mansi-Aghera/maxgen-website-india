import AboutExpertise from "@/sections/home/AboutExpertise"
import Blog from "@/sections/home/Blog"
import Contact from "@/sections/home/Contact"
import Hero from "@/sections/home/Hero"
import Process from "@/sections/home/Process"
import Testimonials from "@/sections/home/Testimonials"

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
  )
}
