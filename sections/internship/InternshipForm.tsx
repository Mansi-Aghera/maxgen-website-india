// "use client"

// import { X } from "lucide-react"
// import Button from "@/components/ui/Button"

// interface Props {
//   onClose: () => void
// }

// export default function InternshipForm({ onClose }: Props) {
//   return (
//     <div className="p-6 sm:p-8">
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
//           🎒
//         </div>
//         <h2
//           className="text-xl font-semibold"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           Internship Application
//         </h2>
//       </div>

//       <p className="text-sm text-muted mb-6">
//         Please fill the form to apply for the internship.
//       </p>

//       {/* Form */}
//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />
//         <input
//           type="tel"
//           placeholder="Contact Number"
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />
//         <textarea
//           placeholder="Address"
//           className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
//         />

//         <div className="grid grid-cols-2 gap-3">
//           <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
//             <option>City</option>
//             <option>Ahmedabad</option>
//             <option>Pune</option>
//             <option>Mumbai</option>
//           </select>

//           <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
//             <option>Select Technology</option>
//             <option>Python</option>
//             <option>React</option>
//             <option>Java</option>
//           </select>
//         </div>

//         <input type="file" />

//         <Button className="w-full mt-2">SUBMIT</Button>
//       </form>
//     </div>
//   )
// }

"use client"

import { X } from "lucide-react"
import Button from "@/components/ui/Button"

interface Props {
  onClose: () => void
  variant?: "internship" | "job"   // ✅ ADDED
}

export default function InternshipForm({ onClose, variant = "internship" }: Props) {
  const isJob = variant === "job"  // ✅ ADDED

  return (
    <div className="p-6 sm:p-8">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
      >
        <X size={20} />
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center">
          {isJob ? "💼" : "🎒"} {/* ✅ CHANGED */}
        </div>
        <h2
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {isJob ? "Job Application" : "Internship Application"} {/* ✅ CHANGED */}
        </h2>
      </div>

      <p className="text-sm text-muted mb-6">
        {isJob
          ? "Please fill the form to apply for the job."
          : "Please fill the form to apply for the internship."} {/* ✅ OPTIONAL TEXT */}
      </p>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
        />
        <textarea
          placeholder="Address"
          className="w-full border border-[var(--color-border)] rounded-md px-3 py-2"
        />

        <div className="grid grid-cols-2 gap-3">
          <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
            <option>City</option>
            <option>Ahmedabad</option>
            <option>Pune</option>
            <option>Mumbai</option>
          </select>

          <select className="border border-[var(--color-border)] rounded-md px-3 py-2">
            <option>Select Technology</option>
            <option>Python</option>
            <option>React</option>
            <option>Java</option>
          </select>
        </div>

        <input type="file" />

        <Button className="w-full mt-2">SUBMIT</Button>
      </form>
    </div>
  )
}