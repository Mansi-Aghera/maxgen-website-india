// "use client"

// import { useState } from "react"
// import Modal from "@/components/ui/Modal"
// import InternshipForm from "@/sections/internship/InternshipForm"
// import QuotePage from "@/app/quote/page"

// export default function FloatingCTA() {
//   const [openInternship, setOpenInternship] = useState(false)
//   const [openQuote, setOpenQuote] = useState(false)

//   return (
//     <>
//       {/* FLOAT BAR */}
//       <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col">
//         {/* INTERNSHIP */}
//         <button
//           onClick={() => setOpenInternship(true)}
//           className="writing-vertical px-3 py-4 text-white font-medium shadow-md"
//           style={{
//             background: "var(--color-accent)",
//             borderTopLeftRadius: "var(--radius-md)",
//             borderBottomLeftRadius: "var(--radius-md)",
//           }}
//         >
//           Internship Form
//         </button>

//         {/* QUOTE */}
//         <button
//           onClick={() => setOpenQuote(true)}
//           className="writing-vertical px-3 py-4 text-white font-medium shadow-md mt-2"
//           style={{
//             background: "var(--color-primary)",
//             borderTopLeftRadius: "var(--radius-md)",
//             borderBottomLeftRadius: "var(--radius-md)",
//           }}
//         >
//           Get a Quote
//         </button>
//       </div>

//       {/* MODALS */}
//       <Modal open={openInternship} onClose={() => setOpenInternship(false)}>
//         <InternshipForm onClose={() => setOpenInternship(false)} />
//       </Modal>

//       <Modal open={openQuote} onClose={() => setOpenQuote(false)}>
//         <QuotePage />
//       </Modal>
//     </>
//   )
// }

"use client"

import { useState } from "react"
import Modal from "@/components/ui/Modal"
import InternshipForm from "@/sections/internship/InternshipForm"

export default function FloatingCTA() {
  const [openInternship, setOpenInternship] = useState(false)

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col">
        {/* INTERNSHIP */}
        <button
          onClick={() => setOpenInternship(true)}
          className="writing-vertical px-3 py-4 text-white font-medium shadow-md"
          style={{
            background: "var(--color-accent)",
            borderTopLeftRadius: "var(--radius-md)",
            borderBottomLeftRadius: "var(--radius-md)",
          }}
        >
          Internship Form
        </button>

        {/* QUOTE */}
        <button
          onClick={() => window.open("/quote", "_blank")}
          className="writing-vertical px-3 py-4 text-white font-medium shadow-md mt-2"
          style={{
            background: "var(--color-primary)",
            borderTopLeftRadius: "var(--radius-md)",
            borderBottomLeftRadius: "var(--radius-md)",
          }}
        >
          Get a Quote
        </button>
      </div>

      {/* INTERNSHIP MODAL */}
      <Modal open={openInternship} onClose={() => setOpenInternship(false)}>
        <InternshipForm onClose={() => setOpenInternship(false)} />
      </Modal>
    </>
  )
}