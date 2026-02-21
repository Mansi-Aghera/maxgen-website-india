// "use client"

// import { motion } from "framer-motion"

// export default function QuotePage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden flex items-stretch">
//       {/* LEFT STRIP */}

//       {/* MAIN CONTENT */}
//       <div className="flex-1 bg-white flex items-center">
//         <div className="w-full max-w-[1180px] mx-auto px-6 py-16">
//           <div className="grid lg:grid-cols-[520px_1fr] gap-16 items-center">
//             {/* LEFT IMAGE */}
//             <motion.img
//               src="/images/home/home-quote.png"
//               alt="quote"
//               initial={{ opacity: 0, x: -60 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-full"
//             />

//             {/* RIGHT FORM */}
//             <motion.div
//               initial={{ opacity: 0, x: 60 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-[520px]"
//             >
//               <h1
//                 className="text-[36px] leading-[44px] font-semibold"
//                 style={{ fontFamily: "var(--font-heading)" }}
//               >
//                 A little more information
//                 <br />
//                 for the quote.
//               </h1>

//               <p className="mt-4 text-[17px]">
//                 Reach us at +1 307 417 6623 | +91 9579972245
//               </p>

//               {/* FORM */}
//               <form className="mt-10 space-y-6">
//                 {[
//                   "Your Name",
//                   "Contact number",
//                   "Email id",
//                   "Whatsapp (for easier communications)",
//                   "Skype (if available)",
//                 ].map((placeholder, i) => (
//                   <input
//                     key={i}
//                     placeholder={placeholder}
//                     className="w-full border-0 border-b border-default bg-transparent py-3 text-[15px] outline-none focus:border-accent transition-colors"
//                   />
//                 ))}

//                 <select className="w-full border-0 border-b border-default bg-transparent py-3 text-[15px] outline-none focus:border-accent transition-colors">
//                   <option>Quote for</option>
//                   <option>Web Designing</option>
//                   <option>Web Development</option>
//                   <option>Mobile App Development</option>
//                   <option>SEO & Digital Marketing</option>
//                   <option>Social Media Marketing</option>
//                 </select>

//                 {/* BUTTON */}
//                 <button
//                   type="submit"
//                   className="w-full mt-4 py-3 rounded-md text-white font-semibold text-[16px]"
//                   style={{
//                     background:
//                       "linear-gradient(135deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 80%,black))",
//                     boxShadow: "var(--shadow-md)",
//                   }}
//                 >
//                   Get Free Quote
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT STRIP */}
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[1100px] bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          {/* IMAGE SIDE */}
          <div className="bg-primary/5 flex items-center justify-center p-10">
            <motion.img
              src="/images/home/home-quote.png"
              alt="quote"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[420px]"
            />
          </div>

          {/* FORM SIDE */}
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

            <form className="mt-8 space-y-6">
              {[
                "Your Name",
                "Contact number",
                "Email id",
                "Whatsapp (for easier communications)",
                "Skype (if available)",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  placeholder={placeholder}
                  className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent transition-colors"
                />
              ))}

              <select className="w-full border-0 border-b border-default bg-transparent py-2.5 text-[14px] outline-none focus:border-accent transition-colors">
                <option>Quote for</option>
                <option>Web Designing</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>SEO & Digital Marketing</option>
                <option>Social Media Marketing</option>
              </select>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-md text-white font-semibold text-[15px]"
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-accent),color-mix(in srgb,var(--color-accent) 80%,black))",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
