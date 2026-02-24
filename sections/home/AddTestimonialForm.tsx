"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Button from "@/components/ui/Button"

interface Props {
  onClose: () => void
}

export default function AddTestimonialForm({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    review: "",
    status: "Active",
    image: null as File | null,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const fd = new FormData()
      fd.append("name", form.name)
      fd.append("rating", form.rating)
      fd.append("review", form.review)
      fd.append("status", form.status)
      if (form.image) fd.append("image", form.image)

      const res = await fetch(
        "https://maxproject.pythonanywhere.com/testimonial/",
        { method: "POST", body: fd }
      )

      const data = await res.json()
      if (!res.ok) throw new Error(JSON.stringify(data))

      setSuccess(true)
      setForm({
        name: "",
        rating: "",
        review: "",
        status: "Active",
        image: null,
      })
    } catch (e) {
      console.error("TESTIMONIAL POST ERROR:", e)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 sm:p-8 relative">
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
      >
        <X size={20} />
      </button>

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
          ⭐
        </div>
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Add Testimonial
        </h2>
      </div>

      <p className="text-sm text-muted mb-6">
        Share your experience with us.
      </p>

      {/* FORM */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
        />

        <input
          type="number"
          step="0.5"
          max="5"
          min="0"
          placeholder="Rating (0-5)"
          value={form.rating}
          onChange={(e) => handleChange("rating", e.target.value)}
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
        />

        <textarea
          placeholder="Review"
          value={form.review}
          onChange={(e) => handleChange("review", e.target.value)}
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-5"
        />

        

        <div className="space-y-1">
          <label className="text-sm font-medium">
            Upload Image
          </label>
          <input
            type="file"
            onChange={(e) =>
              handleChange("image", e.target.files?.[0] || null)
            }
          />
        </div>

        <Button className="w-full mt-2" type="submit">
          {loading ? "Submitting..." : success ? "Submitted" : "SUBMIT"}
        </Button>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </form>
    </div>
  )
}