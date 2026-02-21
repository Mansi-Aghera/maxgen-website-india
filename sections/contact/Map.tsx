"use client"

import Section from "@/components/ui/Section"

export default function Map() {
  return (
    <Section className="pb-16 md:pb-24">
      <div
        className="w-full overflow-hidden"
        style={{
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <iframe
          src="https://www.google.com/maps?q=Abhijeet%203,%20603,%20Netaji%20Rd,%20near%20Pantaloons,%20Mithakhali,%20Ellisbridge,%20Ahmedabad,%20Gujarat%20380006&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  )
}