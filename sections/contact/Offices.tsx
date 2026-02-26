

"use client"

import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import { fadeUp, stagger } from "@/lib/motion"
import { MapPin } from "lucide-react"

type Office = {
  title: string
  address: string
  email?: string
  inquiry?: string
  contact?: string
  whatsapp?: string
  extra?: string
}

const offices: Office[] = [
  {
    title: "Head Office",
    address:
      "601, 6th Floor, Konark Icon, Kirtane Baug, Magarpatta Kharadi bypass Road, Above Maruti Suzuki Showroom, Pune, 411014",
    email: "pune@maxgentechnologies.com",
    inquiry: "info@maxgentechnologies.com",
    contact: "9090939845 / 9998491391",
    whatsapp: "9090939845 / 9998491391",
  },
  {
    title: "Corporate Office",
    address:
      "Abhijeet 3, 603, Netaji Rd, near Pantaloons, Mithakhali, Ellisbridge, Ahmedabad, Gujarat 380006",
    email: "ahmedabad@maxgentechnologies.com",
    inquiry: "info@maxgentechnologies.com",
    contact: "9090939845",
    whatsapp: "9090939845",
  },
  {
    title: "Branch Office",
    address:
      "Ambiance 1505, Sector 19 D, Opposite R.T.O., Nr. Turbhe Station, Navi Mumbai, 400703",
    email: "mumbai@maxgentechnology.com",
    inquiry: "info@maxgentechnologies.com",
    contact: "9090939845 / 7304386635",
    whatsapp: "9090939845 / 7304386635",
  },
  {
    title: "Virtual Office USA",
    address:
      "Maxgen Techno LLC, 30 N Gould St, Ste 4000 Sheridan, Wyoming 82801 USA",
    email: "wyoming@maxgentechnologies.com",
    inquiry: "info@maxgentechnologies.com",
    extra: "Registration: 2023-001248787",
  },
]

export default function Offices() {
  return (
    <Section className="py-12 sm:py-14 md:py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center px-4"
      >
        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-semibold
          "
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our <span className="text-accent">Offices</span>
        </h2>

        <div className="flex justify-center mt-3 gap-2 mb-8 md:mb-12">
          <div className="w-8 sm:w-10 h-[2px] bg-primary" />
          <div className="w-5 sm:w-6 h-[2px] bg-accent" />
          <div className="w-8 sm:w-10 h-[2px] bg-primary" />
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        {...stagger}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-4
          gap-6
          md:gap-8
        "
      >
        {offices.map((office, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            className="
              relative
              bg-white
              border
              px-5
              sm:px-6
              pt-10
              pb-6
              text-center
            "
            style={{
              borderColor: "var(--color-border)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {/* Pin */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div
                className="
                  w-10 h-10
                  sm:w-12 sm:h-12
                  flex items-center justify-center
                  rounded-full
                "
                style={{
                  background: "var(--color-accent)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <MapPin size={20} color="white" />
              </div>
            </div>

            {/* Content */}
            <h3
              className="
                text-base
                sm:text-lg
                font-semibold
              "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {office.title}
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                break-words
              "
            >
              {office.address}
            </p>

            <div className="mt-4 space-y-1 text-sm break-words">
              {office.email && (
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    {office.email}
                  </span>
                </p>
              )}

              {office.inquiry && (
                <p>
                  <span className="font-medium">General Inquiry:</span>{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    {office.inquiry}
                  </span>
                </p>
              )}

              {office.contact && (
                <p>
                  <span className="font-medium">Contact:</span>{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    {office.contact}
                  </span>
                </p>
              )}

              {office.whatsapp && (
                <p>
                  <span className="font-medium">WhatsApp:</span>{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    {office.whatsapp}
                  </span>
                </p>
              )}

              {office.extra && (
                <p className="mt-1 text-xs opacity-80">
                  {office.extra}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}