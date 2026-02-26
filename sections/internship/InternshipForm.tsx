


// "use client"

// import { useState } from "react"
// import { X } from "lucide-react"
// import Button from "@/components/ui/Button"

// interface Props {
//   onClose: () => void
//   variant?: "internship" | "job"
// }

// export default function InternshipForm({ onClose, variant = "internship" }: Props) {
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
//   const [success, setSuccess] = useState(false)
//   const [errors, setErrors] = useState<Record<string, string[]>>({})

//   const handleChange = (field: string, value: any) => {
//     setForm((prev) => ({ ...prev, [field]: value }))
//     setErrors((prev) => ({ ...prev, [field]: [] })) // clear field error
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setErrors({})
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

//       if (!res.ok) {
//   setErrors(data.errors || {})
//   setLoading(false)
//   return
// }

// setSuccess(true)

// setTimeout(() => {
//   setSuccess(false)
// }, 3000)

// setForm({
//   full_name: "",
//   email: "",
//   contact: "",
//   address: "",
//   city: "",
//   techonology: "",
//   resume: null,
// })
//     } catch (err) {
//       console.error("FORM ERROR:", err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const fieldError = (name: string) =>
//     errors[name]?.[0] && (
//       <p className="text-xs text-red-500 mt-1">
//         {errors[name][0]}
//       </p>
//     )

//   return (
//     <div className="p-6 sm:p-8 relative">
//       <button
//         onClick={onClose}
//         className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//       >
//         <X size={20} />
//       </button>

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

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={form.full_name}
//             onChange={(e) => handleChange("full_name", e.target.value)}
//             className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//           />
//           {fieldError("full_name")}
//         </div>

//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//           />
//           {fieldError("email")}
//         </div>

//         <div>
//           <input
//             type="tel"
//             placeholder="Contact Number"
//             value={form.contact}
//             onChange={(e) => handleChange("contact", e.target.value)}
//             className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//           />
//           {fieldError("contact")}
//         </div>

//         <div>
//           <textarea
//             placeholder="Address"
//             value={form.address}
//             onChange={(e) => handleChange("address", e.target.value)}
//             className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//           />
//           {fieldError("address")}
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <div>
//             <select
//               value={form.city}
//               onChange={(e) => handleChange("city", e.target.value)}
//               className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//             >
//               <option value="">City</option>
//               <option value="Ahmedabad">Ahmedabad</option>
//               <option value="Pune">Pune</option>
//               <option value="Navi Mumbai">Navi Mumbai</option>
//             </select>
//             {fieldError("city")}
//           </div>

//           <div>
//             <select
//               value={form.techonology}
//               onChange={(e) => handleChange("techonology", e.target.value)}
//               className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//             >
//               <option value="">Select Technology</option>
//               <option value="Python">Python</option>
//               <option value="React">React</option>
//               <option value="Java">Java</option>
//             </select>
//             {fieldError("techonology")}
//           </div>
//         </div>

//         <div>
//           <div className="text-sm font-medium mb-1">
//             Upload your Resume
//           </div>
//           <input
//             type="file"
//             onChange={(e) => handleChange("resume", e.target.files?.[0] || null)}
//           />
//           {fieldError("resume")}
//         </div>

//         <Button className="w-full mt-2" type="submit" disabled={loading}>
//           {loading ? "Submitting..." : success ? "Submitted" : "SUBMIT"}
//         </Button>
//       </form>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Button from "@/components/ui/Button"
import { API } from "@/lib/api"   // ✅ added

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
    setErrors((prev) => ({ ...prev, [field]: [] }))
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
          ? API.career ?? `${API}/career/`
          : API.internship ?? `${API}/internship/`   // ✅ base url

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