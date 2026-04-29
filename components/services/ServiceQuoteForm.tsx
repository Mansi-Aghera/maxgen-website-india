
"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Button from "@/components/ui/Button"
import { API } from "@/lib/api"
import Swal from "sweetalert2"

export default function ServiceQuoteForm({
  service = "Web Devlopment",
  onClose,
}: {
  service?: string
  onClose?: () => void
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

      const res = await fetch(API.quotes, {
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
      setErrors({ name: "", email: "", phone: "", message: "" })

      await Swal.fire({
        icon: "success",
        title: "Quote Submitted!",
        text: "We will contact you soon.",
        confirmButtonColor: "#ef3b3a",
        customClass: { container: "swal-on-top" },
      })

      onClose?.()

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again.",
        confirmButtonColor: "#ef3b3a",
        customClass: { container: "swal-on-top" },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 relative">
      {/* CROSS BUTTON */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          💼
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-black">
          For Quote
        </h3>
      </div>

      <p className="text-xs sm:text-sm text-gray-600 mb-6">
        Fill in your details and we'll get back to you shortly.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name *"
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
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
            placeholder="Email *"
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-sm sm:text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-sm sm:text-base bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="Web Devlopment">Web Design & Development</option>
            <option value="Mobile App Devlopment">Mobile App Development</option>
            <option value="Design">Logo Design & Graphic Design</option>
            <option value="Maintenance">Support & Maintenance</option>
            <option value="E-commerce Development">E-commerce Development</option>
            <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            ▾
          </span>
        </div>

        <div>
          <div className="flex border border-gray-200 rounded-md overflow-hidden h-[44px]">
            <span className="flex items-center px-3 text-sm sm:text-base text-black bg-gray-50 border-r border-gray-200">
              +91
            </span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contact Number *"
              className="flex-1 px-3 text-sm sm:text-base placeholder:text-gray-400 focus:outline-none"
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
            placeholder="Message *"
            rows={4}
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm sm:text-base placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
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
            className="w-full justify-center py-2.5 sm:py-3"
            disabled={loading}
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </Button>
        </div>
      </form>
    </div>
  )
}