

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { API } from "@/lib/api"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"

export default function QuotePage() {
    const router = useRouter()
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const servicesList = [
    { value: "Web Devlopment", label: "Web Development" },
    { value: "Mobile App Devlopment", label: "Mobile App Development" },
    { value: "Software&Enterprise", label: "Software & Enterprise" },
    { value: "Design", label: "Design" },
    { value: "Maintenance", label: "Maintenance" },
  ]

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

await Swal.fire({
  icon: "success",
  title: "Quote Submitted!",
  text: "We will contact you soon.",
  confirmButtonColor: "#ef3b3a",
})

window.opener ? window.close() : router.push("/")
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
              Reach us at +49 15511 495637 | +91 9579972245
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
              <div className="relative z-20">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent text-left"
                >
                  <span className={form.services_type ? "text-gray-900" : "text-gray-500"}>
                    {servicesList.find((s) => s.value === form.services_type)?.label || "Quote for"}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="max-h-52 overflow-y-auto p-1.5 space-y-0.5">
                        {servicesList.map((srv) => (
                          <button
                            type="button"
                            key={srv.value}
                            onClick={() => {
                              handleChange("services_type", srv.value)
                              setIsDropdownOpen(false)
                            }}
                            className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 ${
                              form.services_type === srv.value
                                ? "bg-primary text-white font-medium"
                                : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                            }`}
                          >
                            {srv.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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