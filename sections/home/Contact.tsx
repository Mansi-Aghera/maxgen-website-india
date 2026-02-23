// "use client"

// import { motion } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Button from "@/components/ui/Button"
// import { fadeUp, stagger } from "@/lib/motion"

// export default function Contact() {
//   return (
//     <Section className="py-16 md:py-24">
//       <motion.div
//         {...stagger}
//         className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
//       >
//         {/* IMAGE */}
//         <motion.div
//           {...fadeUp}
//           className="relative overflow-hidden"
//           style={{
//             borderRadius: "var(--radius-xl)",
//             boxShadow: "var(--shadow-md)",
//           }}
//         >
//           <img
//             src="/images/home/home-contact.png"
//             alt="Contact"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* FORM */}
//         <motion.form
//           {...fadeUp}
//           className="p-8 md:p-10"
//           style={{
//             borderRadius: "var(--radius-xl)",
//             background: "var(--color-bg-soft)",
//             boxShadow: "var(--shadow-md)",
//           }}
//         >
//           <h3
//             className="text-2xl md:text-3xl font-semibold"
//             style={{ fontFamily: "var(--font-heading)" }}
//           >
//             Get in Touch
//           </h3>

//           <p className="mt-2 text-sm opacity-80">
//             Have questions? Send us a quick message.
//           </p>

//           <div className="mt-6 space-y-4">
//             <Input placeholder="Your Name" />
//             <Input placeholder="Email Address" type="email" />
//             <Textarea placeholder="Your Message" />

//             <Button type="submit" size="md">
//               Send Message
//             </Button>
//           </div>
//         </motion.form>
//       </motion.div>
//     </Section>
//   )
// }

// /* INPUT */
// function Input({
//   placeholder,
//   type = "text",
// }: {
//   placeholder: string
//   type?: string
// }) {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className="w-full px-4 py-3 text-sm border bg-white"
//       style={{
//         borderColor: "var(--color-border)",
//         borderRadius: "var(--radius-md)",
//       }}
//     />
//   )
// }

// /* TEXTAREA */
// function Textarea({ placeholder }: { placeholder: string }) {
//   return (
//     <textarea
//       placeholder={placeholder}
//       rows={4}
//       className="w-full px-4 py-3 text-sm border bg-white resize-none"
//       style={{
//         borderColor: "var(--color-border)",
//         borderRadius: "var(--radius-md)",
//       }}
//     />
//   )
// }

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { fadeUp, stagger } from "@/lib/motion"
import { API } from "@/lib/api"

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(API.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,

          // required backend fields (hidden)
          company_name: "N/A",
          subject: "Website Inquiry",
          inquiry_type: "General",
          status: "New",
        }),
      })

      if (!res.ok) {
        const t = await res.text()
        console.error(t)
        alert("Something went wrong ❌")
        setLoading(false)
        return
      }

      alert("Message sent successfully ✅")

      setForm({
        full_name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (err) {
      console.error(err)
      alert("Network error ❌")
    }

    setLoading(false)
  }

  return (
    <Section className="py-16 md:py-24">
      <motion.div
        {...stagger}
        className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        {/* IMAGE */}
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <img
            src="/images/home/home-contact.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* FORM */}
        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          className="p-8 md:p-10"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "var(--color-bg-soft)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in Touch
          </h3>

          <p className="mt-2 text-sm opacity-80">
            Have questions? Send us a quick message.
          </p>

          <div className="mt-6 space-y-4">
            <Input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Your Name"
            />

            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
            />

            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />

            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
            />

            <Button type="submit" size="md" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </motion.form>
      </motion.div>
    </Section>
  )
}

/* INPUT */
function Input({
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: {
  placeholder: string
  type?: string
  name: string
  value: string
  onChange: (e: any) => void
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm border bg-white"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
      required
    />
  )
}

/* TEXTAREA */
function Textarea({
  placeholder,
  name,
  value,
  onChange,
}: {
  placeholder: string
  name: string
  value: string
  onChange: (e: any) => void
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className="w-full px-4 py-3 text-sm border bg-white resize-none"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
      required
    />
  )
}