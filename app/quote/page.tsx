


// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"

// export default function QuotePage() {
//   const [form, setForm] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     whatsapp: "",
//     skype: "",
//     services_type: "",
//     project_description: "",
//     company_name: "",
//     website: "",
//     project_title: "",
//     budget_range: "",
//     project_duration: "",
//   })

//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState("")

//   // ✅ Added errors state
//   const [errors, setErrors] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     services_type: "",
//   })

//   const handleChange = (field: string, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     // ✅ Validation
//     const newErrors = {
//       full_name: !form.full_name ? "Name is required" : "",
//       phone: !form.phone ? "Phone is required" : "",
//       email: !form.email ? "Email is required" : "",
//       services_type: !form.services_type ? "Please select a service" : "",
//     }

//     setErrors(newErrors)

//     if (
//       newErrors.full_name ||
//       newErrors.phone ||
//       newErrors.email ||
//       newErrors.services_type
//     ) {
//       return
//     }

//     setLoading(true)
//     setError("")
//     setSuccess(false)

//     try {
//       const res = await fetch("https://maxproject.pythonanywhere.com/quotes/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           full_name: form.full_name,
//           email: form.email,
//           phone: form.phone,
//           company_name: form.company_name || "Individual",
//           website: form.website || "NA",
//           services_type: form.services_type,
//           project_title: form.project_title || "Quote Request",
//           project_description: form.project_description || "Quote request",
//           budget_range: form.budget_range || "Not specified",
//           expected_start_date: null,
//           project_duration: form.project_duration || "Not specified",
//           priority: "low",
//           status: "new",
//         }),
//       })

//       const data = await res.json()
//       if (!res.ok) throw new Error(JSON.stringify(data))

//       setSuccess(true)
//       setForm({
//         full_name: "",
//         phone: "",
//         email: "",
//         whatsapp: "",
//         skype: "",
//         services_type: "",
//         project_description: "",
//         company_name: "",
//         website: "",
//         project_title: "",
//         budget_range: "",
//         project_duration: "",
//       })

//       setErrors({
//         full_name: "",
//         phone: "",
//         email: "",
//         services_type: "",
//       })
//     } catch (err) {
//       console.error("QUOTE ERROR:", err)
//       setError("Something went wrong. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-light flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="w-full max-w-[1100px] bg-white rounded-2xl shadow-lg overflow-hidden"
//       >
//         <div className="grid md:grid-cols-2">
//           {/* IMAGE */}
//           <div className="bg-primary/5 flex items-center justify-center p-10">
//             <motion.img
//               src="/images/home/home-quote.png"
//               alt="quote"
//               className="w-full max-w-[420px]"
//             />
//           </div>

//           {/* FORM */}
//           <div className="p-10 sm:p-12">
//             <h1
//               className="text-3xl sm:text-[34px] leading-tight font-semibold"
//               style={{ fontFamily: "var(--font-heading)" }}
//             >
//               A little more information
//               <br />
//               for the quote.
//             </h1>

//             <p className="mt-3 text-[15px] sm:text-[16px]">
//               Reach us at +1 307 417 6623 | +91 9579972245
//             </p>

//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               {/* Name */}
//               <div>
//                 <input
//                   placeholder="Your Name"
//                   value={form.full_name}
//                   onChange={(e) => handleChange("full_name", e.target.value)}
//                   className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
//                 />
//                 {errors.full_name && (
//                   <p className="text-xs text-red-500 mt-1">{errors.full_name}</p>
//                 )}
//               </div>

//               {/* Phone */}
//               <div>
//                 <input
//                   placeholder="Contact number"
//                   value={form.phone}
//                   onChange={(e) => handleChange("phone", e.target.value)}
//                   className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
//                 />
//                 {errors.phone && (
//                   <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <input
//                   placeholder="Email id"
//                   value={form.email}
//                   onChange={(e) => handleChange("email", e.target.value)}
//                   className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
//                 />
//                 {errors.email && (
//                   <p className="text-xs text-red-500 mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <input
//                 placeholder="Whatsapp (optional)"
//                 value={form.whatsapp}
//                 onChange={(e) => handleChange("whatsapp", e.target.value)}
//                 className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
//               />

//               <input
//                 placeholder="Skype (optional)"
//                 value={form.skype}
//                 onChange={(e) => handleChange("skype", e.target.value)}
//                 className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
//               />

//               {/* Service */}
//               <div>
//                 <select
//                   value={form.services_type}
//                   onChange={(e) => handleChange("services_type", e.target.value)}
//                   className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
//                 >
//                   <option value="">Quote for</option>
//                   <option value="Web Devlopment">Web Development</option>
//                   <option value="Mobile App Devlopment">Mobile App Development</option>
//                   <option value="Software&Enterprise">Software & Enterprise</option>
//                   <option value="Design">Design</option>
//                   <option value="Maintenance">Maintenance</option>
//                 </select>
//                 {errors.services_type && (
//                   <p className="text-xs text-red-500 mt-1">
//                     {errors.services_type}
//                   </p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full mt-4 py-3 rounded-md text-white font-semibold text-[15px]"
//                 style={{
//                   background:
//                     "linear-gradient(135deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 80%,black))",
//                 }}
//               >
//                 {loading ? "Submitting..." : success ? "Submitted" : "Get Free Quote"}
//               </button>

//               {error && <p className="text-xs text-red-500">{error}</p>}
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { API } from "@/lib/api"

export default function QuotePage() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    whatsapp: "",
    skype: "",
    services_type: "",
    project_description: "",
    company_name: "",
    website: "",
    project_title: "",
    budget_range: "",
    project_duration: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const [errors, setErrors] = useState({
    full_name: "",
    phone: "",
    email: "",
    services_type: "",
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      full_name: !form.full_name ? "Name is required" : "",
      phone: !form.phone ? "Phone is required" : "",
      email: !form.email ? "Email is required" : "",
      services_type: !form.services_type ? "Please select a service" : "",
    }

    setErrors(newErrors)

    if (
      newErrors.full_name ||
      newErrors.phone ||
      newErrors.email ||
      newErrors.services_type
    ) {
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch(API.quotes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          company_name: form.company_name || "Individual",
          website: form.website || "NA",
          services_type: form.services_type,
          project_title: form.project_title || "Quote Request",
          project_description: form.project_description || "Quote request",
          budget_range: form.budget_range || "Not specified",
          expected_start_date: null,
          project_duration: form.project_duration || "Not specified",
          priority: "low",
          status: "new",
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(JSON.stringify(data))

      setSuccess(true)
      setForm({
        full_name: "",
        phone: "",
        email: "",
        whatsapp: "",
        skype: "",
        services_type: "",
        project_description: "",
        company_name: "",
        website: "",
        project_title: "",
        budget_range: "",
        project_duration: "",
      })

      setErrors({
        full_name: "",
        phone: "",
        email: "",
        services_type: "",
      })
    } catch (err) {
      console.error("QUOTE ERROR:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[1100px] bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          <div className="bg-primary/5 flex items-center justify-center p-10">
            <motion.img
              src="/images/home/home-quote.png"
              alt="quote"
              className="w-full max-w-[420px]"
            />
          </div>

          <div className="p-10 sm:p-12">
            <h1
              className="text-3xl sm:text-[34px] leading-tight font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A little more information
              <br />
              for the quote.
            </h1>

            <p className="mt-3 text-[15px] sm:text-[16px]">
              Reach us at +1 307 417 6623 | +91 9579972245
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <input
                  placeholder="Your Name"
                  value={form.full_name}
                  onChange={(e) => handleChange("full_name", e.target.value)}
                  className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
                />
                {errors.full_name && (
                  <p className="text-xs text-red-500 mt-1">{errors.full_name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  placeholder="Contact number"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  placeholder="Email id"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <input
                placeholder="Whatsapp (optional)"
                value={form.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
              />

              <input
                placeholder="Skype (optional)"
                value={form.skype}
                onChange={(e) => handleChange("skype", e.target.value)}
                className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
              />

              {/* Service */}
              <div>
                <select
                  value={form.services_type}
                  onChange={(e) => handleChange("services_type", e.target.value)}
                  className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent"
                >
                  <option value="">Quote for</option>
                  <option value="Web Devlopment">Web Development</option>
                  <option value="Mobile App Devlopment">Mobile App Development</option>
                  <option value="Software&Enterprise">Software & Enterprise</option>
                  <option value="Design">Design</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
                {errors.services_type && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.services_type}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 rounded-md text-white font-semibold text-[15px]"
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 80%,black))",
                }}
              >
                {loading ? "Submitting..." : success ? "Submitted" : "Get Free Quote"}
              </button>

              {error && <p className="text-xs text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}