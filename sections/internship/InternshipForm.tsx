// // // // "use client"

// // // // import { X } from "lucide-react"
// // // // import Button from "@/components/ui/Button"

// // // // interface Props {
// // // //   onClose: () => void
// // // // }

// // // // export default function InternshipForm({ onClose }: Props) {
// // // //   return (
// // // //     <div className="p-6 sm:p-8">
// // // //       {/* Close */}
// // // //       <button
// // // //         onClick={onClose}
// // // //         className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
// // // //       >
// // // //         <X size={20} />
// // // //       </button>

// // // //       {/* Header */}
// // // //       <div className="flex items-center gap-3 mb-4">
// // // //         <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
// // // //           🎒
// // // //         </div>
// // // //         <h2
// // // //           className="text-xl font-semibold"
// // // //           style={{ fontFamily: "var(--font-heading)" }}
// // // //         >
// // // //           Internship Application
// // // //         </h2>
// // // //       </div>

// // // //       <p className="text-sm text-muted mb-6">
// // // //         Please fill the form to apply for the internship.
// // // //       </p>

// // // //       {/* Form */}
// // // //       <form className="space-y-4">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Full Name"
// // // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // // //         />
// // // //         <input
// // // //           type="tel"
// // // //           placeholder="Contact Number"
// // // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // // //         />
// // // //         <textarea
// // // //           placeholder="Address"
// // // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // // //         />

// // // //         <div className="grid grid-cols-2 gap-3">
// // // //           <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
// // // //             <option>City</option>
// // // //             <option>Ahmedabad</option>
// // // //             <option>Pune</option>
// // // //             <option>Mumbai</option>
// // // //           </select>

// // // //           <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
// // // //             <option>Select Technology</option>
// // // //             <option>Python</option>
// // // //             <option>React</option>
// // // //             <option>Java</option>
// // // //           </select>
// // // //         </div>

// // // //         <input type="file" />

// // // //         <Button className="w-full mt-2">SUBMIT</Button>
// // // //       </form>
// // // //     </div>
// // // //   )
// // // // }


// // // "use client"

// // // import { X } from "lucide-react"
// // // import Button from "@/components/ui/Button"

// // // interface Props {
// // //   onClose: () => void
// // //   variant?: "internship" | "job"   // ✅ ADDED
// // // }

// // // export default function InternshipForm({ onClose, variant = "internship" }: Props) {
// // //   const isJob = variant === "job"  // ✅ ADDED

// // //   return (
// // //     <div className="p-6 sm:p-8">
// // //       {/* Close */}
// // //       <button
// // //         onClick={onClose}
// // //         className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
// // //       >
// // //         <X size={20} />
// // //       </button>

// // //       {/* Header */}
// // //       <div className="flex items-center gap-3 mb-4">
// // //         <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
// // //           {isJob ? "💼" : "🎒"} {/* ✅ CHANGED */}
// // //         </div>
// // //         <h2
// // //           className="text-xl font-semibold"
// // //           style={{ fontFamily: "var(--font-heading)" }}
// // //         >
// // //           {isJob ? "Job Application" : "Internship Application"} {/* ✅ CHANGED */}
// // //         </h2>
// // //       </div>

// // //       <p className="text-sm text-muted mb-6">
// // //         {isJob
// // //           ? "Please fill the form to apply for the job."
// // //           : "Please fill the form to apply for the internship."} {/* ✅ OPTIONAL TEXT */}
// // //       </p>

// // //       {/* Form */}
// // //       <form className="space-y-4">
// // //         <input
// // //           type="text"
// // //           placeholder="Full Name"
// // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // //         />
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // //         />
// // //         <input
// // //           type="tel"
// // //           placeholder="Contact Number"
// // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // //         />
// // //         <textarea
// // //           placeholder="Address"
// // //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// // //         />

// // //         <div className="grid grid-cols-2 gap-3">
// // //           <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
// // //             <option>City</option>
// // //             <option>Ahmedabad</option>
// // //             <option>Pune</option>
// // //             <option>Mumbai</option>
// // //           </select>

// // //           <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
// // //             <option>Select Technology</option>
// // //             <option>Python</option>
// // //             <option>React</option>
// // //             <option>Java</option>
// // //           </select>
// // //         </div>

// // //         <input type="file" />

// // //         <Button className="w-full mt-2">SUBMIT</Button>
// // //       </form>
// // //     </div>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { X } from "lucide-react"
// // import Button from "@/components/ui/Button"

// // interface Props {
// //   onClose: () => void
// //   variant?: "internship" | "job"
// // }

// // export default function InternshipForm({ onClose, variant = "internship" }: Props) {
// //   const isJob = variant === "job"

// //   const [form, setForm] = useState({
// //     full_name: "",
// //     email: "",
// //     contact: "",
// //     address: "",
// //     city: "",
// //     techonology: "",
// //     resume: null as File | null,
// //   })

// //   const [loading, setLoading] = useState(false)
// //   const [error, setError] = useState("")
// //   const [success, setSuccess] = useState(false)

// //   const handleChange = (field: string, value: any) => {
// //     setForm((prev) => ({ ...prev, [field]: value }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     setError("")
// //     setSuccess(false)

// //     try {
// //       const formData = new FormData()
// //       formData.append("full_name", form.full_name)
// //       formData.append("email", form.email)
// //       formData.append("contact", form.contact)
// //       formData.append("address", form.address)
// //       formData.append("city", form.city)
// //       formData.append("techonology", form.techonology)
// //       if (form.resume) formData.append("resume", form.resume)

// //       const res = await fetch("https://maxproject.pythonanywhere.com/internship/", {
// //         method: "POST",
// //         body: formData,
// //       })

// //       const data = await res.json()
// //       if (!res.ok) throw new Error(JSON.stringify(data))

// //       setSuccess(true)
// //       setForm({
// //         full_name: "",
// //         email: "",
// //         contact: "",
// //         address: "",
// //         city: "",
// //         techonology: "",
// //         resume: null,
// //       })
// //     } catch (err) {
// //       console.error("INTERNSHIP ERROR:", err)
// //       setError("Something went wrong. Please try again.")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="p-6 sm:p-8 relative">
// //       {/* Close */}
// //       <button
// //         onClick={onClose}
// //         className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
// //       >
// //         <X size={20} />
// //       </button>

// //       {/* Header */}
// //       <div className="flex items-center gap-3 mb-4">
// //         <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
// //           {isJob ? "💼" : "🎒"}
// //         </div>
// //         <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
// //           {isJob ? "Job Application" : "Internship Application"}
// //         </h2>
// //       </div>

// //       <p className="text-sm text-muted mb-6">
// //         {isJob
// //           ? "Please fill the form to apply for the job."
// //           : "Please fill the form to apply for the internship."}
// //       </p>

// //       {/* Form */}
// //       <form className="space-y-4" onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           value={form.full_name}
// //           onChange={(e) => handleChange("full_name", e.target.value)}
// //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={form.email}
// //           onChange={(e) => handleChange("email", e.target.value)}
// //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// //         />
// //         <input
// //           type="tel"
// //           placeholder="Contact Number"
// //           value={form.contact}
// //           onChange={(e) => handleChange("contact", e.target.value)}
// //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// //         />
// //         <textarea
// //           placeholder="Address"
// //           value={form.address}
// //           onChange={(e) => handleChange("address", e.target.value)}
// //           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
// //         />

// //         <div className="grid grid-cols-2 gap-3">
// //           <select
// //             value={form.city}
// //             onChange={(e) => handleChange("city", e.target.value)}
// //             className="border border-[var(--color-border)] rounded-md px-3 py-2"
// //           >
// //             <option value="">City</option>
// //             <option value="Ahmedabad">Ahmedabad</option>
// //             <option value="Pune">Pune</option>
// //             <option value="Navi Mumbai">Navi Mumbai</option>
// //           </select>

// //           <select
// //             value={form.techonology}
// //             onChange={(e) => handleChange("techonology", e.target.value)}
// //             className="border border-[var(--color-border)] rounded-md px-3 py-2"
// //           >
// //             <option value="">Select Technology</option>
// //             <option value="Python">Python</option>
// //             <option value="React">React</option>
// //             <option value="Java">Java</option>
// //           </select>
// //         </div>

// //         <input
// //           type="file"
// //           onChange={(e) => handleChange("resume", e.target.files?.[0] || null)}
// //         />

// //         <Button className="w-full mt-2" type="submit" disabled={loading}>
// //           {loading ? "Submitting..." : success ? "Submitted" : "SUBMIT"}
// //         </Button>

// //         {error && <p className="text-xs text-red-500">{error}</p>}
// //       </form>
// //     </div>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import { X } from "lucide-react"
// import Button from "@/components/ui/Button"

// interface Props {
//   onClose: () => void
//   variant?: "internship" | "job"
// }

// export default function InternshipForm({ onClose, variant = "internship" }: Props) {
//   const isJob = variant === "job"

//   const [form, setForm] = useState({
//     full_name: "",
//     email: "",
//     contact: "",
//     address: "",
//     city: "",
//     techonology: "",
//     resume: null as File | null,
//   })

//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState(false)

//   const handleChange = (field: string, value: any) => {
//     setForm((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")
//     setSuccess(false)

//     try {
//       const formData = new FormData()
//       formData.append("full_name", form.full_name)
//       formData.append("email", form.email)
//       formData.append("contact", form.contact)
//       formData.append("address", form.address)
//       formData.append("city", form.city)
//       formData.append("techonology", form.techonology)
//       if (form.resume) formData.append("resume", form.resume)

//       const endpoint =
//         variant === "job"
//           ? "https://maxproject.pythonanywhere.com/career/"
//           : "https://maxproject.pythonanywhere.com/internship/"

//       const res = await fetch(endpoint, {
//         method: "POST",
//         body: formData,
//       })

//       const data = await res.json()
//       if (!res.ok) throw new Error(JSON.stringify(data))

//       setSuccess(true)

//       setForm({
//         full_name: "",
//         email: "",
//         contact: "",
//         address: "",
//         city: "",
//         techonology: "",
//         resume: null,
//       })
//     } catch (err) {
//       console.error(variant === "job" ? "CAREER ERROR:" : "INTERNSHIP ERROR:", err)
//       setError("Something went wrong. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-6 sm:p-8 relative">
//       {/* Close */}
//       <button
//         onClick={onClose}
//         className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//       >
//         <X size={20} />
//       </button>

//       {/* Header */}
//       <div className="flex items-center gap-3 mb-4">
//         <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
//           {variant === "job" ? "💼" : "🎒"}
//         </div>
//         <h2
//           className="text-xl font-semibold"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           {variant === "job" ? "Job Application" : "Internship Application"}
//         </h2>
//       </div>

//       <p className="text-sm text-muted mb-6">
//         {variant === "job"
//           ? "Please fill the form to apply for the job."
//           : "Please fill the form to apply for the internship."}
//       </p>

//       {/* Form */}
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={form.full_name}
//           onChange={(e) => handleChange("full_name", e.target.value)}
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => handleChange("email", e.target.value)}
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />

//         <input
//           type="tel"
//           placeholder="Contact Number"
//           value={form.contact}
//           onChange={(e) => handleChange("contact", e.target.value)}
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />

//         <textarea
//           placeholder="Address"
//           value={form.address}
//           onChange={(e) => handleChange("address", e.target.value)}
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />

//         <div className="grid grid-cols-2 gap-3">
//           <select
//             value={form.city}
//             onChange={(e) => handleChange("city", e.target.value)}
//             className="border border-[var(--color-border)] rounded-md px-3 py-2"
//           >
//             <option value="">City</option>
//             <option value="Ahmedabad">Ahmedabad</option>
//             <option value="Pune">Pune</option>
//             <option value="Navi Mumbai">Navi Mumbai</option>
//           </select>

//           <select
//             value={form.techonology}
//             onChange={(e) => handleChange("techonology", e.target.value)}
//             className="border border-[var(--color-border)] rounded-md px-3 py-2"
//           >
//             <option value="">Select Technology</option>
//             <option value="Python">Python</option>
//             <option value="React">React</option>
//             <option value="Java">Java</option>
//           </select>
//         </div>

//          <div className="space-y-1">
//   <label className="text-sm font-medium">
//     Upload your Resume
//   </label> </div>
//         <input
//           type="file"
//           placeholder="Resume"
//           onChange={(e) => handleChange("resume", e.target.files?.[0] || null)}
//         />

//         <Button className="w-full mt-2" type="submit" disabled={loading}>
//           {loading ? "Submitting..." : success ? "Submitted" : "SUBMIT"}
//         </Button>

//         {error && <p className="text-xs text-red-500">{error}</p>}
//       </form>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Button from "@/components/ui/Button"

interface Props {
  onClose: () => void
  variant?: "internship" | "job"
}

export default function InternshipForm({ onClose, variant = "internship" }: Props) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    techonology: "",
    resume: null as File | null,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: [] })) // clear field error
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})
    setSuccess(false)

    try {
      const formData = new FormData()
      formData.append("full_name", form.full_name)
      formData.append("email", form.email)
      formData.append("contact", form.contact)
      formData.append("address", form.address)
      formData.append("city", form.city)
      formData.append("techonology", form.techonology)
      if (form.resume) formData.append("resume", form.resume)

      const endpoint =
        variant === "job"
          ? "https://maxproject.pythonanywhere.com/career/"
          : "https://maxproject.pythonanywhere.com/internship/"

      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
  setErrors(data.errors || {})
  setLoading(false)
  return
}

setSuccess(true)

setTimeout(() => {
  setSuccess(false)
}, 3000)

setForm({
  full_name: "",
  email: "",
  contact: "",
  address: "",
  city: "",
  techonology: "",
  resume: null,
})
    } catch (err) {
      console.error("FORM ERROR:", err)
    } finally {
      setLoading(false)
    }
  }

  const fieldError = (name: string) =>
    errors[name]?.[0] && (
      <p className="text-xs text-red-500 mt-1">
        {errors[name][0]}
      </p>
    )

  return (
    <div className="p-6 sm:p-8 relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
      >
        <X size={20} />
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
          {variant === "job" ? "💼" : "🎒"}
        </div>
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {variant === "job" ? "Job Application" : "Internship Application"}
        </h2>
      </div>

      <p className="text-sm text-muted mb-6">
        {variant === "job"
          ? "Please fill the form to apply for the job."
          : "Please fill the form to apply for the internship."}
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={form.full_name}
            onChange={(e) => handleChange("full_name", e.target.value)}
            className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
          />
          {fieldError("full_name")}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
          />
          {fieldError("email")}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Contact Number"
            value={form.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
          />
          {fieldError("contact")}
        </div>

        <div>
          <textarea
            placeholder="Address"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
          />
          {fieldError("address")}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <select
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
            >
              <option value="">City</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Pune">Pune</option>
              <option value="Navi Mumbai">Navi Mumbai</option>
            </select>
            {fieldError("city")}
          </div>

          <div>
            <select
              value={form.techonology}
              onChange={(e) => handleChange("techonology", e.target.value)}
              className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
            >
              <option value="">Select Technology</option>
              <option value="Python">Python</option>
              <option value="React">React</option>
              <option value="Java">Java</option>
            </select>
            {fieldError("techonology")}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium mb-1">
            Upload your Resume
          </div>
          <input
            type="file"
            onChange={(e) => handleChange("resume", e.target.files?.[0] || null)}
          />
          {fieldError("resume")}
        </div>

        <Button className="w-full mt-2" type="submit" disabled={loading}>
          {loading ? "Submitting..." : success ? "Submitted" : "SUBMIT"}
        </Button>
      </form>
    </div>
  )
}