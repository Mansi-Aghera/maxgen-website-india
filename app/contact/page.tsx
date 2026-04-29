import ContactForm from "@/sections/contact/ContactForm"
import Hero from "@/sections/contact/Hero"
import Map from "@/sections/contact/Map"
import Offices from "@/sections/contact/Offices"

export const metadata = {
  alternates: {
    canonical: "https://www.maxgentechnologies.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <Offices />
      <ContactForm />
      <Map />
    </>
  )
}