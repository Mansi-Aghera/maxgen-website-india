"use client"

import Button from "@/components/ui/Button"

export default function ServiceQuoteForm({
  service = "Web Design & Development",
}: {
  service?: string
}) {
  return (
    <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-6 w-full max-w-[360px] border border-gray-100">
      {/* Title */}
      <h3 className="text-[20px] font-semibold text-black mb-5">For Quote</h3>

      <form className="space-y-4">
        {/* Full name */}
        <input
          placeholder="Full name"
          className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />

        {/* Email */}
        <input
          placeholder="Email"
          className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />

        {/* Service select */}
        <div className="relative">
          <select
            defaultValue={service}
            className="w-full h-[44px] border border-gray-200 rounded-md px-3 text-[14px] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option>Web Design & Development</option>
            <option>Mobile App Development</option>
            <option>Logo Design & Graphic Design</option>
            <option>Support & Maintenance</option>
            <option>E-commerce Development</option>
            <option>SEO & Digital Marketing Services</option>
          </select>

          {/* arrow */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            ▾
          </span>
        </div>

        {/* Phone */}
        <div className="flex border border-gray-200 rounded-md overflow-hidden h-[44px]">
          <span className="flex items-center px-3 text-[14px] text-black bg-gray-50 border-r border-gray-200">
            +91
          </span>
          <input
            placeholder="Contact no."
            className="flex-1 px-3 text-[14px] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-[14px] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
        />

        {/* Submit button using your Button */}
        <div className="pt-2">
          <Button size="md" variant="primary" className="w-full justify-center">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  )
}