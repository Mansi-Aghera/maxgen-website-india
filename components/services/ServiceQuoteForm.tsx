
// "use client"

// import { useState } from "react"
// import Button from "@/components/ui/Button"

// export default function ServiceQuoteForm({
//   service = "Web Devlopment",
// }: {
//   service?: string
// }) {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [selectedService, setSelectedService] = useState(service)
//   const [phone, setPhone] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)

//   // ✅ Added error state
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault()

//     // ✅ Validation
//     const newErrors = {
//       name: !name ? "Full name is required" : "",
//       email: !email ? "Email is required" : "",
//       phone: !phone ? "Phone is required" : "",
//       message: !message ? "Message is required" : "",
//     }

//     setErrors(newErrors)

//     if (newErrors.name || newErrors.email || newErrors.phone || newErrors.message) {
//       return
//     }

//     setLoading(true)

//     try {
//       const formData = new FormData()
//       formData.append("full_name", name)
//       formData.append("email", email)
//       formData.append("phone", phone)
//       formData.append("services_type", selectedService)
//       formData.append("project_description", message)
//       formData.append("status", "new")

//       const res = await fetch(
//         "https://maxproject.pythonanywhere.com/quotes/",
//         {
//           method: "POST",
//           body: formData,
//         }
//       )

//       if (!res.ok) {
//         const text = await res.text()
//         console.error(text)
//         throw new Error("Failed")
//       }

//       setName("")
//       setEmail("")
//       setPhone("")
//       setMessage("")
//       setSelectedService(service)
//       setErrors({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       })

//       alert("Quote submitted successfully ✅")
//     } catch (err) {
//       alert("Something went wrong ❌")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6 w-full max-w-[360px] border border-gray-100">
//       <h3 className="text-[20px] font-semibold text-black mb-5">
//         For Quote
//       </h3>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Name */}
//         <div>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Full name"
//             className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//           )}
//         </div>

//         {/* Service */}
//         <div className="relative">
//           <select
//             value={selectedService}
//             onChange={(e) => setSelectedService(e.target.value)}
//             className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
//           >
//             <option value="Web Devlopment">Web Design & Development</option>
//             <option value="Mobile App Devlopment">Mobile App Development</option>
//             <option value="Design">Logo Design & Graphic Design</option>
//             <option value="Maintenance">Support & Maintenance</option>
//             <option value="Software&Enterprise">E-commerce Development</option>
//             <option value="Software&Enterprise">SEO & Digital Marketing</option>
//           </select>

//           <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
//             ▾
//           </span>
//         </div>

//         {/* Phone */}
//         <div>
//           <div className="flex border border-gray-200 rounded-md overflow-hidden h-[44px]">
//             <span className="flex items-center px-3 text-[14px] text-black bg-gray-50 border-r border-gray-200">
//               +91
//             </span>
//             <input
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Contact no."
//               className="flex-1 px-3 text-[14px] placeholder:text-gray-400 focus:outline-none"
//             />
//           </div>
//           {errors.phone && (
//             <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//           )}
//         </div>

//         {/* Message */}
//         <div>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Message"
//             rows={4}
//             className="w-full border border-gray-200 rounded-md px-3 py-2 text-[14px] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
//           />
//           {errors.message && (
//             <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//           )}
//         </div>

//         <div className="pt-2">
//           <Button
//             type="submit"
//             size="md"
//             variant="primary"
//             className="w-full justify-center"
//           >
//             {loading ? "Submitting..." : "SUBMIT"}
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import { API } from "@/lib/api"   // ✅ added

export default function ServiceQuoteForm({
  service = "Web Devlopment",
}: {
  service?: string
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedService, setSelectedService] = useState(service)
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const newErrors = {
      name: !name ? "Full name is required" : "",
      email: !email ? "Email is required" : "",
      phone: !phone ? "Phone is required" : "",
      message: !message ? "Message is required" : "",
    }

    setErrors(newErrors)

    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.message) {
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append("full_name", name)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("services_type", selectedService)
      formData.append("project_description", message)
      formData.append("status", "new")

      const res = await fetch(API.quotes, {   // ✅ base url used
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        const text = await res.text()
        console.error(text)
        throw new Error("Failed")
      }

      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setSelectedService(service)
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      alert("Quote submitted successfully ✅")
    } catch (err) {
      alert("Something went wrong ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6 w-full max-w-[360px] border border-gray-100">
      <h3 className="text-[20px] font-semibold text-black mb-5">
        For Quote
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="Web Devlopment">Web Design & Development</option>
            <option value="Mobile App Devlopment">Mobile App Development</option>
            <option value="Design">Logo Design & Graphic Design</option>
            <option value="Maintenance">Support & Maintenance</option>
            <option value="Software&Enterprise">E-commerce Development</option>
            <option value="Software&Enterprise">SEO & Digital Marketing</option>
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            ▾
          </span>
        </div>

        <div>
          <div className="flex border border-gray-200 rounded-md overflow-hidden h-[44px]">
            <span className="flex items-center px-3 text-[14px] text-black bg-gray-50 border-r border-gray-200">
              +91
            </span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contact no."
              className="flex-1 px-3 text-[14px] placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-[14px] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            size="md"
            variant="primary"
            className="w-full justify-center"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </Button>
        </div>
      </form>
    </div>
  )
}