// // // "use client";

// // // import Link from "next/link";
// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import Button from "@/components/ui/Button";
// // // import { ArrowRight } from "lucide-react";

// // // const navItems = [
// // //   { label: "Home", href: "/" },
// // //   { label: "Services", href: "/services" },
// // //   { label: "Internship", href: "/internship" },
// // //   { label: "Portfolio", href: "/portfolio" },
// // //   { label: "Career", href: "/career" },
// // //   { label: "About", href: "/about" },
// // //   { label: "Blogs", href: "/blogs" },
// // // ];

// // // export default function Navbar() {
// // //   const [open, setOpen] = useState(false);

// // //   return (
// // //     <header
// // //       className="w-full sticky top-0 z-50 border-b"
// // //       style={{
// // //         background: "var(--color-bg)",
// // //         borderColor: "var(--color-border)",
// // //       }}
// // //     >
// // //       <div className="container relative h-[80px] grid grid-cols-3 items-center">
// // //         {/* LEFT */}
// // //         <div className="flex items-center">
// // //           <Link href="/">
// // //             <img src="/logos/logo.png" alt="Maxgen" className="h-10 w-auto" />
// // //           </Link>
// // //         </div>

// // //         {/* CENTER */}
// // //         <nav className="hidden lg:flex items-center justify-center gap-8">
// // //           {navItems.map((item) => (
// // //             <NavLink key={item.label} href={item.href}>
// // //               {item.label}
// // //             </NavLink>
// // //           ))}
// // //         </nav>

// // //         {/* RIGHT */}
// // //         <div className="hidden lg:flex items-center justify-end">
// // //           <Button href="/contact">Contact Us</Button>
// // //         </div>

// // //         {/* MOBILE BTN */}
// // //         <button
// // //           onClick={() => setOpen(!open)}
// // //           aria-label="Menu"
// // //           aria-expanded={open}
// // //           className="lg:hidden absolute right-6"
// // //         >
// // //           <div className="space-y-1.5">
// // //             <span className="block w-6 h-0.5 bg-[var(--color-text)]" />
// // //             <span className="block w-6 h-0.5 bg-[var(--color-text)]" />
// // //             <span className="block w-6 h-0.5 bg-[var(--color-text)]" />
// // //           </div>
// // //         </button>
// // //       </div>

// // //       {/* MOBILE MENU */}
// // //       <AnimatePresence>
// // //         {open && (
// // //           <motion.div
// // //             initial={{ height: 0, opacity: 0 }}
// // //             animate={{ height: "auto", opacity: 1 }}
// // //             exit={{ height: 0, opacity: 0 }}
// // //             transition={{ duration: 0.25 }}
// // //             className="lg:hidden border-t"
// // //             style={{ borderColor: "var(--color-border)" }}
// // //           >
// // //             <div className="container py-4 flex flex-col gap-4">
// // //               {navItems.map((item) => (
// // //                 <Link
// // //                   key={item.label}
// // //                   href={item.href}
// // //                   className="py-2 font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
// // //                   onClick={() => setOpen(false)}
// // //                 >
// // //                   {item.label}
// // //                 </Link>
// // //               ))}

// // //               <Button href="/contact" icon={<ArrowRight size={18} />}>
// // //                 Contact Us
// // //               </Button>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // }

// // // function NavLink({
// // //   href,
// // //   children,
// // // }: {
// // //   href: string;
// // //   children: React.ReactNode;
// // // }) {
// // //   return (
// // //     <motion.div whileHover="hover" className="relative">
// // //       <Link
// // //         href={href}
// // //         className="relative block font-medium text-[var(--color-text)] transition-colors duration-300"
// // //       >
// // //         <motion.span
// // //           variants={{
// // //             hover: { y: -1, color: "var(--color-accent)" },
// // //           }}
// // //           transition={{ duration: 0.2 }}
// // //         >
// // //           {children}
// // //         </motion.span>

// // //         <motion.span
// // //           className="absolute left-1/2 bottom-0 h-[2px] bg-[var(--color-accent)]"
// // //           initial={{ width: 0, x: "-50%" }}
// // //           variants={{
// // //             hover: { width: "100%", x: "-50%" },
// // //           }}
// // //           transition={{ duration: 0.25 }}
// // //         />
// // //       </Link>
// // //     </motion.div>
// // //   );
// // // }

// // "use client"

// // import Link from "next/link"
// // import { useState, useEffect } from "react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import Button from "@/components/ui/Button"
// // import { ArrowRight } from "lucide-react"

// // /* ================= DATA ================= */

// // const navItems = [
// //   { label: "Home", href: "/" },
// //   { label: "Services", href: "/services" },
// //   { label: "Internship", href: "/internship" },
// //   { label: "Portfolio", href: "/portfolio" },
// //   { label: "Career", href: "/career" },
// //   { label: "About", href: "/about" },
// //   { label: "Blogs", href: "/blogs" },
// // ]

// // /* ================= MOTION ================= */

// // const menuContainer = {
// //   hidden: {},
// //   show: {
// //     transition: { staggerChildren: 0.08 },
// //   },
// // }

// // const menuItem = {
// //   hidden: { opacity: 0, y: 12 },
// //   show: { opacity: 1, y: 0 },
// // }

// // /* ================= NAVBAR ================= */

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false)
// //   const [scrolled, setScrolled] = useState(false)

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 20)
// //     window.addEventListener("scroll", onScroll)
// //     return () => window.removeEventListener("scroll", onScroll)
// //   }, [])

// //   return (
// //     <header
// //       className="w-full sticky top-0 z-50 border-b transition-all duration-300"
// //       style={{
// //         background: scrolled ? "rgba(255,255,255,0.85)" : "var(--color-bg)",
// //         borderColor: "var(--color-border)",
// //         backdropFilter: scrolled ? "blur(10px)" : "none",
// //         boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
// //       }}
// //     >
// //       <div
// //         className="container relative grid grid-cols-3 items-center transition-all duration-300"
// //         style={{
// //           height: scrolled ? "64px" : "80px",
// //         }}
// //       >
// //         {/* LOGO */}
// //         <div className="flex items-center">
// //           <Link href="/">
// //             <img
// //               src="/logos/logo.png"
// //               alt="Maxgen"
// //               className="h-10 w-auto transition-transform duration-300"
// //               style={{
// //                 transform: scrolled ? "scale(0.9)" : "scale(1)",
// //               }}
// //             />
// //           </Link>
// //         </div>

// //         {/* DESKTOP NAV */}
// //         <nav className="hidden lg:flex items-center justify-center gap-8">
// //           {navItems.map((item) => (
// //             <NavLink key={item.label} href={item.href}>
// //               {item.label}
// //             </NavLink>
// //           ))}
// //         </nav>

// //         {/* CTA */}
// //         <div className="hidden lg:flex items-center justify-end">
// //           <motion.div
// //             initial={{ opacity: 0, y: -8 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.4 }}
// //           >
// //             <Button variant="accent" href="/contact">Contact Us</Button>
// //           </motion.div>
// //         </div>

// //         {/* MOBILE BUTTON */}
// //         <button
// //           onClick={() => setOpen(!open)}
// //           aria-label="Menu"
// //           aria-expanded={open}
// //           className="lg:hidden absolute right-6 flex items-center justify-center w-10 h-10"
// //         >
// //           <Hamburger open={open} />
// //         </button>
// //       </div>

// //       {/* MOBILE MENU */}
// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -10 }}
// //             transition={{ duration: 0.25 }}
// //             className="lg:hidden border-t"
// //             style={{
// //               borderColor: "var(--color-border)",
// //               background: "var(--color-bg)",
// //             }}
// //           >
// //             <motion.div
// //               variants={menuContainer}
// //               initial="hidden"
// //               animate="show"
// //               className="container py-6 flex flex-col gap-5"
// //             >
// //               {navItems.map((item) => (
// //                 <motion.div key={item.label} variants={menuItem}>
// //                   <Link
// //                     href={item.href}
// //                     className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 </motion.div>
// //               ))}

// //               <motion.div variants={menuItem} className="pt-2">
// //                 <Button href="/contact" icon={<ArrowRight size={18} />}>
// //                   Contact Us
// //                 </Button>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   )
// // }

// // /* ================= NAV LINK ================= */

// // function NavLink({
// //   href,
// //   children,
// // }: {
// //   href: string
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <motion.div whileHover="hover" className="relative">
// //       <Link
// //         href={href}
// //         className="relative block font-medium text-[var(--color-text)]"
// //       >
// //         <motion.span
// //           variants={{
// //             hover: { y: -2, color: "var(--color-accent)" },
// //           }}
// //           transition={{ duration: 0.2 }}
// //         >
// //           {children}
// //         </motion.span>

// //         <motion.span
// //           className="absolute left-1/2 -bottom-1 h-[2px]"
// //           style={{ background: "var(--color-accent)" }}
// //           initial={{ width: 0, x: "-50%" }}
// //           variants={{
// //             hover: { width: "100%", x: "-50%" },
// //           }}
// //           transition={{ duration: 0.25 }}
// //         />
// //       </Link>
// //     </motion.div>
// //   )
// // }

// // /* ================= HAMBURGER ================= */

// // function Hamburger({ open }: { open: boolean }) {
// //   return (
// //     <div className="relative w-6 h-5">
// //       <motion.span
// //         animate={{
// //           rotate: open ? 45 : 0,
// //           y: open ? 8 : 0,
// //         }}
// //         className="absolute left-0 top-0 w-6 h-0.5 bg-[var(--color-text)]"
// //       />

// //       <motion.span
// //         animate={{
// //           opacity: open ? 0 : 1,
// //         }}
// //         className="absolute left-0 top-2 w-6 h-0.5 bg-[var(--color-text)]"
// //       />

// //       <motion.span
// //         animate={{
// //           rotate: open ? -45 : 0,
// //           y: open ? -8 : 0,
// //         }}
// //         className="absolute left-0 bottom-0 w-6 h-0.5 bg-[var(--color-text)]"
// //       />
// //     </div>
// //   )
// // }

// "use client"

// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { usePathname } from "next/navigation"   // ✅ ADDED
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
//   const pathname = usePathname() // ✅ ADDED

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
//             <NavLink
//               key={item.label}
//               href={item.href}
//               active={
//                 item.href === "/"
//                   ? pathname === "/"
//                   : pathname.startsWith(item.href)
//               } // ✅ ADDED
//             >
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
//   active,
// }: {
//   href: string
//   children: React.ReactNode
//   active?: boolean
// }) {
//   return (
//     <motion.div whileHover="hover" className="relative">
//       <Link
//         href={href}
//         className="relative block font-medium text-[var(--color-text)]"
//         style={{
//           color: active ? "var(--color-accent)" : "var(--color-text)", // ✅ ADDED
//         }}
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
//           style={{
//             background: "var(--color-accent)",
//             width: active ? "100%" : 0, // ✅ ADDED
//             x: "-50%",
//           }}
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

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { ChevronUp } from "lucide-react";

/* ================= NAV ITEMS ================= */

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Internship", href: "/internship" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/blogs", dropdown: "resources" },
];

/* ================= NAVBAR ================= */

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const makeSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  /* ========= FETCH SERVICES ========= */
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(
          "https://maxproject.pythonanywhere.com/services/",
          { cache: "no-store" },
        );
        const json = await res.json();
        const data = json.data || json.results || json;
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log("Services API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  /* ========= SCROLL ========= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ========= CLOSE ON PATH CHANGE ========= */
 useEffect(() => {
  setIsDropdownOpen(false)
  setIsResourcesOpen(false)
  setOpen(false)
}, [pathname])

  const handleServiceClick = (slug: string) => {
    if (!slug) return;
    setIsDropdownOpen(false);
    router.push(`/services/${slug}`);
  };
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
        style={{ height: scrolled ? "64px" : "80px" }}
      >
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logos/logo.png"
              alt="Maxgen"
              className="h-10 w-auto transition-transform duration-300"
              style={{ transform: scrolled ? "scale(0.9)" : "scale(1)" }}
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center justify-center gap-8">
  {navItems.map((item) =>
    item.dropdown === "resources" ? (
      /* ================= RESOURCES DROPDOWN ================= */
      <div
        key="resources"
        className="relative flex items-center"
        onMouseEnter={() => setIsResourcesOpen(true)}
        onMouseLeave={() => setIsResourcesOpen(false)}
      >
        <Link
          href="/blogs"
          className="flex items-center gap-1 font-medium"
          style={{
            color:
              pathname.startsWith("/blogs") || pathname.startsWith("/faq")
                ? "var(--color-accent)"
                : "var(--color-text)",
          }}
        >
          <motion.span whileHover={{ y: -2 }} className="flex items-center gap-1">
            Resources
            <ChevronUp
              size={14}
              className={`transition-transform ${
                isResourcesOpen ? "rotate-180" : ""
              }`}
            />
          </motion.span>
        </Link>

        {/* DROPDOWN */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 ${
            isResourcesOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-[220px] bg-white shadow-2xl border rounded-xl p-4 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsResourcesOpen(false)
                router.push("/blogs")
              }}
              className="text-left px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Blogs
            </button>

            <button
              onClick={() => {
                setIsResourcesOpen(false)
                router.push("/faq")
              }}
              className="text-left px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    ) : item.dropdown === "services" ? (
      /* ================= SERVICES DROPDOWN ================= */
      <div
        key="services"
        className="relative flex items-center"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        {/* SERVICES LINK */}
        <Link
          href="/services"
          className="flex items-center gap-1 font-medium"
          style={{
            color: pathname.startsWith("/services")
              ? "var(--color-accent)"
              : "var(--color-text)",
          }}
        >
          <motion.span whileHover={{ y: -2 }} className="flex items-center gap-1">
            Services
            <ChevronUp
              size={14}
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </motion.span>
        </Link>

        {/* SERVICES DROPDOWN */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-[300px] bg-white shadow-2xl border rounded-xl p-6">
            {loading ? (
              <div className="text-center text-gray-400 py-8">
                Loading services...
              </div>
            ) : (
              <div className="flex flex-col divide-y">
                {services.map((service: any) => (
                  <button
                    key={service.id}
                    onClick={() =>
                      handleServiceClick(
                        service.slug || makeSlug(service.title || service.name)
                      )
                    }
                    className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-50 flex-shrink-0">
                      <img
                        src={`https://maxproject.pythonanywhere.com${service.image}`}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="text-sm font-medium line-clamp-2">
                      {service.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <NavLink
        key={item.label}
        href={item.href}
        active={
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href)
        }
      >
        {item.label}
      </NavLink>
    )
  )}
</nav>
        

        {/* CTA */}
        <div className="hidden lg:flex items-center justify-end">
          <Button variant="accent" href="/contact">
            Contact Us
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden absolute right-6 w-10 h-10"
        >
          <Hamburger open={open} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden border-t"
          >
            <div className="container py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ================= NAV LINK ================= */

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <motion.div whileHover="hover" className="relative">
      <Link
        href={href}
        className="relative block font-medium"
        style={{
          color: active ? "var(--color-accent)" : "var(--color-text)",
        }}
      >
        <motion.span variants={{ hover: { y: -2 } }}>{children}</motion.span>

        <motion.span
          className="absolute left-1/2 -bottom-1 h-[2px]"
          style={{
            background: "var(--color-accent)",
            width: active ? "100%" : 0,
            x: "-50%",
          }}
          variants={{ hover: { width: "100%" } }}
        />
      </Link>
    </motion.div>
  );
}

/* ================= HAMBURGER ================= */

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5">
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
        className="absolute left-0 top-0 w-6 h-0.5 bg-[var(--color-text)]"
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1 }}
        className="absolute left-0 top-2 w-6 h-0.5 bg-[var(--color-text)]"
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
        className="absolute left-0 bottom-0 w-6 h-0.5 bg-[var(--color-text)]"
      />
    </div>
  );
}
