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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.836217453801!2d72.55908691188911!3d23.029785079081893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac54a18239%3A0x558f4eb0ff0df853!2sMaxgen%20Technologies%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1773990727884!5m2!1sen!2sin%22"
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