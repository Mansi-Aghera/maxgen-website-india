// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Button from "@/components/ui/Button";
// // import { ArrowRight } from "lucide-react";

// // const navItems = [
// //   { label: "Home", href: "/" },
// //   { label: "Services", href: "/services" },
// //   { label: "Internship", href: "/internship" },
// //   { label: "Portfolio", href: "/portfolio" },
// //   { label: "Career", href: "/career" },
// //   { label: "About", href: "/about" },
// //   { label: "Blogs", href: "/blogs" },
// // ];

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <header
// //       className="w-full sticky top-0 z-50 border-b"
// //       style={{
// //         background: "var(--color-bg)",
// //         borderColor: "var(--color-border)",
// //       }}
// //     >
// //       <div className="container relative h-[80px] grid grid-cols-3 items-center">
// //         {/* LEFT */}
// //         <div className="flex items-center">
// //           <Link href="/">
// //             <img src="/logos/logo.png" alt="Maxgen" className="h-10 w-auto" />
// //           </Link>
// //         </div>

// //         {/* CENTER */}
// //         <nav className="hidden lg:flex items-center justify-center gap-8">
// //           {navItems.map((item) => (
// //             <NavLink key={item.label} href={item.href}>
// //               {item.label}
// //             </NavLink>
// //           ))}
// //         </nav>

// //         {/* RIGHT */}
// //         <div className="hidden lg:flex items-center justify-end">
// //           <Button href="/contact">Contact Us</Button>
// //         </div>

// //         {/* MOBILE BTN */}
// //         <button
// //           onClick={() => setOpen(!open)}
// //           aria-label="Menu"
// //           aria-expanded={open}
// //           className="lg:hidden absolute right-6"
// //         >
// //           <div className="space-y-1.5">
// //             <span className="block w-6 h-0.5 bg-[var(--color-text)]" />
// //             <span className="block w-6 h-0.5 bg-[var(--color-text)]" />
// //             <span className="block w-6 h-0.5 bg-[var(--color-text)]" />
// //           </div>
// //         </button>
// //       </div>

// //       {/* MOBILE MENU */}
// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.25 }}
// //             className="lg:hidden border-t"
// //             style={{ borderColor: "var(--color-border)" }}
// //           >
// //             <div className="container py-4 flex flex-col gap-4">
// //               {navItems.map((item) => (
// //                 <Link
// //                   key={item.label}
// //                   href={item.href}
// //                   className="py-2 font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
// //                   onClick={() => setOpen(false)}
// //                 >
// //                   {item.label}
// //                 </Link>
// //               ))}

// //               <Button href="/contact" icon={<ArrowRight size={18} />}>
// //                 Contact Us
// //               </Button>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // }

// // function NavLink({
// //   href,
// //   children,
// // }: {
// //   href: string;
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <motion.div whileHover="hover" className="relative">
// //       <Link
// //         href={href}
// //         className="relative block font-medium text-[var(--color-text)] transition-colors duration-300"
// //       >
// //         <motion.span
// //           variants={{
// //             hover: { y: -1, color: "var(--color-accent)" },
// //           }}
// //           transition={{ duration: 0.2 }}
// //         >
// //           {children}
// //         </motion.span>

// //         <motion.span
// //           className="absolute left-1/2 bottom-0 h-[2px] bg-[var(--color-accent)]"
// //           initial={{ width: 0, x: "-50%" }}
// //           variants={{
// //             hover: { width: "100%", x: "-50%" },
// //           }}
// //           transition={{ duration: 0.25 }}
// //         />
// //       </Link>
// //     </motion.div>
// //   );
// // }


// "use client"

// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Button from "@/components/ui/Button"
// import { ArrowRight } from "lucide-react"

// /* ================= DATA ================= */

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "/services" },
//   { label: "Internship", href: "/internship" },
//   { label: "Portfolio", href: "/portfolio" },
//   { label: "Career", href: "/career" },
//   { label: "About", href: "/about" },
//   { label: "Blogs", href: "/blogs" },
// ]

// /* ================= MOTION ================= */

// const menuContainer = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.08 },
//   },
// }

// const menuItem = {
//   hidden: { opacity: 0, y: 12 },
//   show: { opacity: 1, y: 0 },
// }

// /* ================= NAVBAR ================= */

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   return (
//     <header
//       className="w-full sticky top-0 z-50 border-b transition-all duration-300"
//       style={{
//         background: scrolled ? "rgba(255,255,255,0.85)" : "var(--color-bg)",
//         borderColor: "var(--color-border)",
//         backdropFilter: scrolled ? "blur(10px)" : "none",
//         boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
//       }}
//     >
//       <div
//         className="container relative grid grid-cols-3 items-center transition-all duration-300"
//         style={{
//           height: scrolled ? "64px" : "80px",
//         }}
//       >
//         {/* LOGO */}
//         <div className="flex items-center">
//           <Link href="/">
//             <img
//               src="/logos/logo.png"
//               alt="Maxgen"
//               className="h-10 w-auto transition-transform duration-300"
//               style={{
//                 transform: scrolled ? "scale(0.9)" : "scale(1)",
//               }}
//             />
//           </Link>
//         </div>

//         {/* DESKTOP NAV */}
//         <nav className="hidden lg:flex items-center justify-center gap-8">
//           {navItems.map((item) => (
//             <NavLink key={item.label} href={item.href}>
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* CTA */}
//         <div className="hidden lg:flex items-center justify-end">
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Button variant="accent" href="/contact">Contact Us</Button>
//           </motion.div>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           aria-label="Menu"
//           aria-expanded={open}
//           className="lg:hidden absolute right-6 flex items-center justify-center w-10 h-10"
//         >
//           <Hamburger open={open} />
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="lg:hidden border-t"
//             style={{
//               borderColor: "var(--color-border)",
//               background: "var(--color-bg)",
//             }}
//           >
//             <motion.div
//               variants={menuContainer}
//               initial="hidden"
//               animate="show"
//               className="container py-6 flex flex-col gap-5"
//             >
//               {navItems.map((item) => (
//                 <motion.div key={item.label} variants={menuItem}>
//                   <Link
//                     href={item.href}
//                     className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
//                     onClick={() => setOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.div>
//               ))}

//               <motion.div variants={menuItem} className="pt-2">
//                 <Button href="/contact" icon={<ArrowRight size={18} />}>
//                   Contact Us
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

// /* ================= NAV LINK ================= */

// function NavLink({
//   href,
//   children,
// }: {
//   href: string
//   children: React.ReactNode
// }) {
//   return (
//     <motion.div whileHover="hover" className="relative">
//       <Link
//         href={href}
//         className="relative block font-medium text-[var(--color-text)]"
//       >
//         <motion.span
//           variants={{
//             hover: { y: -2, color: "var(--color-accent)" },
//           }}
//           transition={{ duration: 0.2 }}
//         >
//           {children}
//         </motion.span>

//         <motion.span
//           className="absolute left-1/2 -bottom-1 h-[2px]"
//           style={{ background: "var(--color-accent)" }}
//           initial={{ width: 0, x: "-50%" }}
//           variants={{
//             hover: { width: "100%", x: "-50%" },
//           }}
//           transition={{ duration: 0.25 }}
//         />
//       </Link>
//     </motion.div>
//   )
// }

// /* ================= HAMBURGER ================= */

// function Hamburger({ open }: { open: boolean }) {
//   return (
//     <div className="relative w-6 h-5">
//       <motion.span
//         animate={{
//           rotate: open ? 45 : 0,
//           y: open ? 8 : 0,
//         }}
//         className="absolute left-0 top-0 w-6 h-0.5 bg-[var(--color-text)]"
//       />

//       <motion.span
//         animate={{
//           opacity: open ? 0 : 1,
//         }}
//         className="absolute left-0 top-2 w-6 h-0.5 bg-[var(--color-text)]"
//       />

//       <motion.span
//         animate={{
//           rotate: open ? -45 : 0,
//           y: open ? -8 : 0,
//         }}
//         className="absolute left-0 bottom-0 w-6 h-0.5 bg-[var(--color-text)]"
//       />
//     </div>
//   )
// }


"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"   // ✅ ADDED
import { motion, AnimatePresence } from "framer-motion"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

/* ================= DATA ================= */

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Internship", href: "/internship" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
]

/* ================= MOTION ================= */

const menuContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const menuItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

/* ================= NAVBAR ================= */

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() // ✅ ADDED

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="w-full sticky top-0 z-50 border-b transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "var(--color-bg)",
        borderColor: "var(--color-border)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        className="container relative grid grid-cols-3 items-center transition-all duration-300"
        style={{
          height: scrolled ? "64px" : "80px",
        }}
      >
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logos/logo.png"
              alt="Maxgen"
              className="h-10 w-auto transition-transform duration-300"
              style={{
                transform: scrolled ? "scale(0.9)" : "scale(1)",
              }}
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              active={
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              } // ✅ ADDED
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="accent" href="/contact">Contact Us</Button>
          </motion.div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="lg:hidden absolute right-6 flex items-center justify-center w-10 h-10"
        >
          <Hamburger open={open} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-bg)",
            }}
          >
            <motion.div
              variants={menuContainer}
              initial="hidden"
              animate="show"
              className="container py-6 flex flex-col gap-5"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={menuItem}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={menuItem} className="pt-2">
                <Button href="/contact" icon={<ArrowRight size={18} />}>
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ================= NAV LINK ================= */

function NavLink({
  href,
  children,
  active,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <motion.div whileHover="hover" className="relative">
      <Link
        href={href}
        className="relative block font-medium text-[var(--color-text)]"
        style={{
          color: active ? "var(--color-accent)" : "var(--color-text)", // ✅ ADDED
        }}
      >
        <motion.span
          variants={{
            hover: { y: -2, color: "var(--color-accent)" },
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>

        <motion.span
          className="absolute left-1/2 -bottom-1 h-[2px]"
          style={{
            background: "var(--color-accent)",
            width: active ? "100%" : 0, // ✅ ADDED
            x: "-50%",
          }}
          variants={{
            hover: { width: "100%", x: "-50%" },
          }}
          transition={{ duration: 0.25 }}
        />
      </Link>
    </motion.div>
  )
}

/* ================= HAMBURGER ================= */

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5">
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 8 : 0,
        }}
        className="absolute left-0 top-0 w-6 h-0.5 bg-[var(--color-text)]"
      />

      <motion.span
        animate={{
          opacity: open ? 0 : 1,
        }}
        className="absolute left-0 top-2 w-6 h-0.5 bg-[var(--color-text)]"
      />

      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -8 : 0,
        }}
        className="absolute left-0 bottom-0 w-6 h-0.5 bg-[var(--color-text)]"
      />
    </div>
  )
}