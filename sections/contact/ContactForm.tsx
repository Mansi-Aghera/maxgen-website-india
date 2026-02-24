// // "use client"

// // import { motion } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import Button from "@/components/ui/Button"
// // import { fadeUp, stagger } from "@/lib/motion"
// // import { Facebook, Instagram, Linkedin } from "lucide-react"

// // export default function ContactForm() {
// //   return (
// //     <Section className="py-16 md:py-24">
// //       {/* Section Title */}
// //       <Heading
// //         title="Have Some Questions?"
// //         align="center"
// //         className="mb-14"
// //       />

// //       <motion.div
// //         {...stagger}
// //         className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
// //       >
// //         {/* LEFT INFO */}
// //         <motion.div {...fadeUp} className="space-y-6">
// //           <h3
// //             className="text-2xl font-semibold"
// //             style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)" }}
// //           >
// //             How Can We Help You?
// //           </h3>

// //           <p className="text-sm md:text-base opacity-80">
// //             Submit the details we will contact you
// //           </p>

// //           <p className="italic text-sm opacity-70">
// //             Other ways to connect us
// //           </p>

// //           <div className="space-y-4 pt-2">
// //             <Social
// //               icon={<Facebook size={18} />}
// //               title="Follow us on Facebook"
// //               subtitle="Follow on Facebook to get latest details of Maxgen"
// //             />
// //             <Social
// //               icon={<Instagram size={18} />}
// //               title="Follow us on Instagram"
// //               subtitle="Follow on Instagram to get latest details of Maxgen"
// //             />
// //             <Social
// //               icon={<Linkedin size={18} />}
// //               title="Follow us on LinkedIn"
// //               subtitle="Follow on LinkedIn to get latest details of Maxgen"
// //             />
// //           </div>
// //         </motion.div>

// //         {/* FORM */}
// //         <motion.form
// //           {...fadeUp}
// //           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
// //         >
// //           <Input placeholder="Full Name" />
// //           <Input placeholder="Email" type="email" />
// //           <Input placeholder="Mobile Number" />
// //           <Select />
// //           <Textarea />
          
// //           <div className="sm:col-span-2 pt-2">
// //             <Button type="submit" size="md">
// //               Submit
// //             </Button>
// //           </div>
// //         </motion.form>
// //       </motion.div>
// //     </Section>
// //   )
// // }

// // /* ================= INPUTS ================= */

// // function Input({
// //   placeholder,
// //   type = "text",
// // }: {
// //   placeholder: string
// //   type?: string
// // }) {
// //   return (
// //     <input
// //       type={type}
// //       placeholder={placeholder}
// //       className="w-full px-4 py-3 text-sm border bg-white"
// //       style={{
// //         borderColor: "var(--color-border)",
// //         borderRadius: "var(--radius-md)",
// //       }}
// //     />
// //   )
// // }

// // function Select() {
// //   return (
// //     <select
// //       className="w-full px-4 py-3 text-sm border bg-white"
// //       style={{
// //         borderColor: "var(--color-border)",
// //         borderRadius: "var(--radius-md)",
// //       }}
// //     >
// //       <option>What are you looking for?</option>
// //       <option>Web Development</option>
// //       <option>Mobile App</option>
// //       <option>Internship</option>
// //       <option>Other</option>
// //     </select>
// //   )
// // }

// // function Textarea() {
// //   return (
// //     <textarea
// //       placeholder="Describe your requirement briefly"
// //       rows={4}
// //       className="sm:col-span-2 w-full px-4 py-3 text-sm border bg-white resize-none"
// //       style={{
// //         borderColor: "var(--color-border)",
// //         borderRadius: "var(--radius-md)",
// //       }}
// //     />
// //   )
// // }

// // /* ================= SOCIAL ================= */

// // function Social({
// //   icon,
// //   title,
// //   subtitle,
// // }: {
// //   icon: React.ReactNode
// //   title: string
// //   subtitle: string
// // }) {
// //   return (
// //     <div className="flex gap-3 items-start">
// //       <div
// //         className="w-9 h-9 flex items-center justify-center rounded-full"
// //         style={{
// //           background: "var(--color-accent)",
// //           color: "white",
// //         }}
// //       >
// //         {icon}
// //       </div>

// //       <div>
// //         <p className="font-medium text-sm">{title}</p>
// //         <p className="text-xs opacity-70">{subtitle}</p>
// //       </div>
// //     </div>
// //   )
// // }

// // "use client"

// // import { useState } from "react"
// // import { motion } from "framer-motion"
// // import Section from "@/components/ui/Section"
// // import Heading from "@/components/ui/Heading"
// // import Button from "@/components/ui/Button"
// // import { fadeUp, stagger } from "@/lib/motion"
// // import { Facebook, Instagram, Linkedin } from "lucide-react"

// // export default function ContactForm() {
// //   const [form, setForm] = useState({
// //     full_name: "",
// //     email: "",
// //     phone: "",
// //     subject: "",
// //     message: "",
// //   })

// //   const [loading, setLoading] = useState(false)
// //   const [success, setSuccess] = useState(false)
// //   const [error, setError] = useState("")

// //   const handleChange = (field: string, value: string) => {
// //     setForm((prev) => ({ ...prev, [field]: value }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     setError("")
// //     setSuccess(false)

// //     try {
// //       const res = await fetch("https://maxproject.pythonanywhere.com/contact/", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           full_name: form.full_name,
// //           email: form.email,
// //           phone: form.phone,
// //           company_name: "Individual",
// //           subject: form.subject || "Website Inquiry",
// //           message: form.message,
// //           inquiry_type: "General",
// //           status: "New",
// //         }),
// //       })

// //       const data = await res.json()
// //       if (!res.ok) throw new Error(JSON.stringify(data))

// //       setSuccess(true)
// //       setForm({ full_name: "", email: "", phone: "", subject: "", message: "" })
// //     } catch (err) {
// //       console.error("CONTACT ERROR:", err)
// //       setError("Something went wrong. Please try again.")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <Section className="py-16 md:py-24">
// //       <Heading title="Have Some Questions?" align="center" className="mb-14" />

// //       <motion.div {...stagger} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
// //         {/* LEFT INFO */}
// //         <motion.div {...fadeUp} className="space-y-6">
// //           <h3 className="text-2xl font-semibold" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)" }}>
// //             How Can We Help You?
// //           </h3>

// //           <p className="text-sm md:text-base opacity-80">Submit the details we will contact you</p>
// //           <p className="italic text-sm opacity-70">Other ways to connect us</p>

// //           <div className="space-y-4 pt-2">
// //             <Social icon={<Facebook size={18} />} title="Follow us on Facebook" subtitle="Follow on Facebook to get latest details of Maxgen" />
// //             <Social icon={<Instagram size={18} />} title="Follow us on Instagram" subtitle="Follow on Instagram to get latest details of Maxgen" />
// //             <Social icon={<Linkedin size={18} />} title="Follow us on LinkedIn" subtitle="Follow on LinkedIn to get latest details of Maxgen" />
// //           </div>
// //         </motion.div>

// //         {/* FORM */}
// //         <motion.form {...fadeUp} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           <Input placeholder="Full Name" value={form.full_name} onChange={(v) => handleChange("full_name", v)} />
// //           <Input placeholder="Email" type="email" value={form.email} onChange={(v) => handleChange("email", v)} />
// //           <Input placeholder="Mobile Number" value={form.phone} onChange={(v) => handleChange("phone", v)} />
// //           <Input placeholder="Subject" value={form.subject} onChange={(v) => handleChange("subject", v)} />
// //           <Textarea value={form.message} onChange={(v) => handleChange("message", v)} />

// //           <div className="sm:col-span-2 pt-2">
// //             <Button type="submit" size="md" disabled={loading}>
// //               {loading ? "Submitting..." : success ? "Submitted" : "Submit"}
// //             </Button>
// //             {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
// //           </div>
// //         </motion.form>
// //       </motion.div>
// //     </Section>
// //   )
// // }

// // /* INPUT */
// // function Input({ placeholder, type = "text", value, onChange }: { placeholder: string; type?: string; value: string; onChange: (v: string) => void }) {
// //   return (
// //     <input
// //       type={type}
// //       placeholder={placeholder}
// //       value={value}
// //       onChange={(e) => onChange(e.target.value)}
// //       className="w-full px-4 py-3 text-sm border bg-white"
// //       style={{ borderColor: "var(--color-border)", borderRadius: "var(--radius-md)" }}
// //     />
// //   )
// // }

// // /* TEXTAREA */
// // function Textarea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
// //   return (
// //     <textarea
// //       placeholder="Describe your requirement briefly"
// //       rows={4}
// //       value={value}
// //       onChange={(e) => onChange(e.target.value)}
// //       className="sm:col-span-2 w-full px-4 py-3 text-sm border bg-white resize-none"
// //       style={{ borderColor: "var(--color-border)", borderRadius: "var(--radius-md)" }}
// //     />
// //   )
// // }

// // /* SOCIAL */
// // function Social({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
// //   return (
// //     <div className="flex gap-3 items-start">
// //       <div className="w-9 h-9 flex items-center justify-center rounded-full" style={{ background: "var(--color-accent)", color: "white" }}>
// //         {icon}
// //       </div>
// //       <div>
// //         <p className="font-medium text-sm">{title}</p>
// //         <p className="text-xs opacity-70">{subtitle}</p>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import Section from "@/components/ui/Section"
// import Heading from "@/components/ui/Heading"
// import Button from "@/components/ui/Button"
// import { fadeUp, stagger } from "@/lib/motion"
// import { Facebook, Instagram, Linkedin } from "lucide-react"

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })

//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState("")

//   const handleChange = (field: string, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")
//     setSuccess(false)

//     try {
//       const res = await fetch("https://maxproject.pythonanywhere.com/contact/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           full_name: form.full_name,
//           email: form.email,
//           phone: form.phone,
//           company_name: "Individual",
//           subject: form.subject || "Website Inquiry",
//           message: form.message,
//           inquiry_type: "General",
//           status: "New",
//         }),
//       })

//       const data = await res.json()
//       if (!res.ok) throw new Error(JSON.stringify(data))

//       setSuccess(true)
//       setForm({ full_name: "", email: "", phone: "", subject: "", message: "" })
//     } catch (err) {
//       console.error("CONTACT ERROR:", err)
//       setError("Something went wrong. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <Section className="py-16 md:py-24">
//       <Heading title="Have Some Questions?" align="center" className="mb-14" />

//       <motion.div {...stagger} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
//         {/* LEFT INFO */}
//         <motion.div {...fadeUp} className="space-y-6">
//           <h3 className="text-2xl font-semibold" style={{ color: "var(--color-accent)", fontFamily: "var(--font-heading)" }}>
//             How Can We Help You?
//           </h3>

//           <p className="text-sm md:text-base opacity-80">Submit the details we will contact you</p>
//           <p className="italic text-sm opacity-70">Other ways to connect us</p>

//           <div className="space-y-4 pt-2">
//             <Social
//               icon={<Facebook size={18} />}
//               title="Follow us on Facebook"
//               subtitle="Follow on Facebook to get latest details of Maxgen"
//               href="https://www.facebook.com/maxgentechnologies"
//             />

//             <Social
//               icon={<Instagram size={18} />}
//               title="Follow us on Instagram"
//               subtitle="Follow on Instagram to get latest details of Maxgen"
//               href="https://www.instagram.com/maxgen_technologies/"
//             />

//             <Social
//               icon={<Linkedin size={18} />}
//               title="Follow us on LinkedIn"
//               subtitle="Follow on LinkedIn to get latest details of Maxgen"
//               href="https://www.linkedin.com/company/maxgen-technologies"
//             />
//           </div>
//         </motion.div>

//         {/* FORM */}
//         <motion.form {...fadeUp} onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <Input placeholder="Full Name" value={form.full_name} onChange={(v) => handleChange("full_name", v)} />
//           <Input placeholder="Email" type="email" value={form.email} onChange={(v) => handleChange("email", v)} />
//           <Input placeholder="Mobile Number" value={form.phone} onChange={(v) => handleChange("phone", v)} />
//           <Input placeholder="Subject" value={form.subject} onChange={(v) => handleChange("subject", v)} />
//           <Textarea value={form.message} onChange={(v) => handleChange("message", v)} />

//           <div className="sm:col-span-2 pt-2">
//             <Button type="submit" size="md" disabled={loading}>
//               {loading ? "Submitting..." : success ? "Submitted" : "Submit"}
//             </Button>
//             {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
//           </div>
//         </motion.form>
//       </motion.div>
//     </Section>
//   )
// }

// /* INPUT */
// function Input({ placeholder, type = "text", value, onChange }: { placeholder: string; type?: string; value: string; onChange: (v: string) => void }) {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full px-4 py-3 text-sm border bg-white"
//       style={{ borderColor: "var(--color-border)", borderRadius: "var(--radius-md)" }}
//     />
//   )
// }

// /* TEXTAREA */
// function Textarea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
//   return (
//     <textarea
//       placeholder="Describe your requirement briefly"
//       rows={4}
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="sm:col-span-2 w-full px-4 py-3 text-sm border bg-white resize-none"
//       style={{ borderColor: "var(--color-border)", borderRadius: "var(--radius-md)" }}
//     />
//   )
// }

// /* SOCIAL (UPDATED WITH LINK) */
// function Social({
//   icon,
//   title,
//   subtitle,
//   href,
// }: {
//   icon: React.ReactNode
//   title: string
//   subtitle: string
//   href: string
// }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex gap-3 items-start group"
//     >
//       <div
//         className="w-9 h-9 flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
//         style={{ background: "var(--color-accent)", color: "white" }}
//       >
//         {icon}
//       </div>
//       <div>
//         <p className="font-medium text-sm group-hover:text-accent transition-colors">
//           {title}
//         </p>
//         <p className="text-xs opacity-70">{subtitle}</p>
//       </div>
//     </a>
//   )
// }

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Button from "@/components/ui/Button"
import { fadeUp, stagger } from "@/lib/motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"

//////////////////////////////////////////////////////
// SOCIAL
//////////////////////////////////////////////////////
function Social({
  icon,
  title,
  subtitle,
  href,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 items-start group"
    >
      <div
        className="w-9 h-9 flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
        style={{ background: "var(--color-accent)", color: "white" }}
      >
        {icon}
      </div>
      <div>
        <p className="font-medium text-sm group-hover:text-accent transition-colors">
          {title}
        </p>
        <p className="text-xs opacity-70">{subtitle}</p>
      </div>
    </a>
  )
}

//////////////////////////////////////////////////////
// INPUT
//////////////////////////////////////////////////////
function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  placeholder: string
  type?: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 text-sm border bg-white"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    />
  )
}

//////////////////////////////////////////////////////
// TEXTAREA
//////////////////////////////////////////////////////
function Textarea({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <textarea
      placeholder="Describe your requirement briefly"
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="sm:col-span-2 w-full px-4 py-3 text-sm border bg-white resize-none"
      style={{
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    />
  )
}

//////////////////////////////////////////////////////
// MAIN CONTACT FORM
//////////////////////////////////////////////////////
export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  // validation errors
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // required validation
    const newErrors = {
      full_name: !form.full_name ? "Full name is required" : "",
      email: !form.email ? "Email is required" : "",
      phone: !form.phone ? "Phone is required" : "",
      message: !form.message ? "Message is required" : "",
    }

    setErrors(newErrors)

    if (
      newErrors.full_name ||
      newErrors.email ||
      newErrors.phone ||
      newErrors.message
    ) {
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("https://maxproject.pythonanywhere.com/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          company_name: "Individual",
          subject: form.subject || "Website Inquiry",
          message: form.message,
          inquiry_type: "General",
          status: "New",
        }),
      })

      if (!res.ok) {
        const text = await res.text()
        console.error(text)

        // duplicate email handling
        if (text.includes("UNIQUE") || text.includes("email")) {
          setErrors((prev) => ({
            ...prev,
            email: "This email already contacted us",
          }))
        } else {
          setError("Something went wrong. Please try again.")
        }

        setLoading(false)
        return
      }

      setSuccess(true)
      setForm({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setErrors({
        full_name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (err) {
      console.error("CONTACT ERROR:", err)
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section className="py-16 md:py-24">
      <Heading title="Have Some Questions?" align="center" className="mb-14" />

      <motion.div
        {...stagger}
        className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* LEFT INFO */}
        <motion.div {...fadeUp} className="space-y-6">
          <h3
            className="text-2xl font-semibold"
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-heading)",
            }}
          >
            How Can We Help You?
          </h3>

          <p className="text-sm md:text-base opacity-80">
            Submit the details we will contact you
          </p>
          <p className="italic text-sm opacity-70">
            Other ways to connect us
          </p>

          <div className="space-y-4 pt-2">
            <Social
              icon={<Facebook size={18} />}
              title="Follow us on Facebook"
              subtitle="Follow on Facebook to get latest details of Maxgen"
              href="https://www.facebook.com/maxgentechnologies"
            />

            <Social
              icon={<Instagram size={18} />}
              title="Follow us on Instagram"
              subtitle="Follow on Instagram to get latest details of Maxgen"
              href="https://www.instagram.com/maxgen_technologies/"
            />

            <Social
              icon={<Linkedin size={18} />}
              title="Follow us on LinkedIn"
              subtitle="Follow on LinkedIn to get latest details of Maxgen"
              href="https://www.linkedin.com/company/maxgen-technologies"
            />
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <Input
              placeholder="Full Name"
              value={form.full_name}
              onChange={(v) => handleChange("full_name", v)}
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(v) => handleChange("email", v)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Mobile Number"
              value={form.phone}
              onChange={(v) => handleChange("phone", v)}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <Input
            placeholder="Subject"
            value={form.subject}
            onChange={(v) => handleChange("subject", v)}
          />

          <div className="sm:col-span-2">
            <Textarea
              value={form.message}
              onChange={(v) => handleChange("message", v)}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="sm:col-span-2 pt-2">
            <Button type="submit" size="md" disabled={loading}>
              {loading ? "Submitting..." : success ? "Submitted" : "Submit"}
            </Button>
            {error && (
              <p className="text-xs text-red-500 mt-2">{error}</p>
            )}
          </div>
        </motion.form>
      </motion.div>
    </Section>
  )
}