


// // "use client"

// // import Link from "next/link"
// // import { motion } from "framer-motion"
// // import { Facebook, Instagram, Linkedin } from "lucide-react"

// // const resources = [
// //   { label: "Services", href: "/services" },
// //   { label: "Internship", href: "/internship" },
// //   { label: "Career", href: "/career" },
// //   { label: "Portfolio", href: "/portfolio" },
// // ]

// // const company = [
// //   { label: "About", href: "/about" },
// //   { label: "Contact", href: "/contact" },
// //   { label: "Blog", href: "/blogs" },
// // ]

// // /* 👉 ONLY ADDED COLUMN */
// // const legal = [
// //   { label: "Privacy Policy", href: "/privacy" },
// // ]

// // export default function Footer() {
// //   return (
// //     <footer
// //       className="border-t"
// //       style={{
// //         background: "var(--color-bg-light)",
// //         borderColor: "var(--color-border)",
// //       }}
// //     >
// //       {/* TOP */}
// //       {/* 👉 grid-cols-5 only on lg to fit 5 cols */}
// //       <div className="container py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        
// //         {/* LOGO */}
// //         <div className="space-y-4">
// //           <img src="/logos/logo.png" alt="Maxgen" className="h-10 w-auto" />
// //           <p className="text-sm max-w-xs">
// //             Delivering innovative digital solutions, software
// //             development, and technology services that help
// //             businesses grow and succeed.
// //           </p>
// //         </div>

// //         <FooterCol title="Resources" links={resources} />
// //         <FooterCol title="Company" links={company} />

// //         {/* 👉 ADDED LEGAL COL (ONLY CHANGE) */}
// //         <FooterCol title="Legal" links={legal} />

// //         {/* NEWSLETTER */}
// //         <div className="space-y-4">
// //           <h4
// //             className="font-semibold"
// //             style={{ fontFamily: "var(--font-heading)" }}
// //           >
// //             Subscribe
// //           </h4>

// //           <p className="text-sm">
// //             Get the latest updates and insights.
// //           </p>

// //           <div className="flex">
// //             <input
// //               type="email"
// //               placeholder="Email address"
// //               className="w-full px-3 py-2 text-sm border rounded-l-[var(--radius-md)] outline-none"
// //               style={{ borderColor: "var(--color-border)" }}
// //             />
// //             <button
// //               className="px-4 rounded-r-[var(--radius-md)] text-white text-sm"
// //               style={{ background: "var(--color-accent)" }}
// //             >
// //               Join
// //             </button>
// //           </div>

// //           {/* SOCIAL (unchanged) */}
// //           <div className="flex gap-3 pt-2 pointer">
// //             <SocialIcon href="https://www.facebook.com/maxgentechnologies" icon={<Facebook size={16} />} />
// //             <SocialIcon href="https://www.instagram.com/maxgen_technologies/" icon={<Instagram size={16} />} />
// //             <SocialIcon href="https://www.linkedin.com/company/maxgen-technologies" icon={<Linkedin size={16} />} />
// //           </div>
// //         </div>
// //       </div>

// //       {/* BOTTOM */}
// //       <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
// //         <div className="container py-4 text-sm text-center">
// //           © 2013 – {new Date().getFullYear()} Maxgen Technologies Pvt. Ltd.
// //           All rights reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// // function FooterCol({
// //   title,
// //   links,
// // }: {
// //   title: string
// //   links: { label: string; href: string }[]
// // }) {
// //   return (
// //     <div className="space-y-4">
// //       <h4
// //         className="font-semibold"
// //         style={{ fontFamily: "var(--font-heading)" }}
// //       >
// //         {title}
// //       </h4>

// //       <ul className="space-y-2">
// //         {links.map((link) => (
// //           <li key={link.label}>
// //             <FooterLink href={link.href}>{link.label}</FooterLink>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   )
// // }

// // /* NAVBAR STYLE LINK (unchanged from yours) */
// // function FooterLink({
// //   href,
// //   children,
// // }: {
// //   href: string
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <motion.div whileHover="hover" className="inline-block">
// //       <Link
// //         href={href}
// //         className="relative block text-sm text-[var(--color-text-muted)]"
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
// //           className="absolute left-1/2 -bottom-0.5 h-[2px] bg-[var(--color-accent)]"
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

// // /* SOCIAL ICON (your version unchanged) */
// // function SocialIcon({
// //   href,
// //   icon,
// // }: {
// //   href: string
// //   icon: React.ReactNode
// // }) {
// //   return (
// //     <a
// //       href={href}
// //       target="_blank"
// //       className="w-12 h-12 flex items-center justify-center rounded-full border transition-colors duration-200"
// //       style={{ borderColor: "var(--color-border)" }}
// //       onMouseEnter={(e) => {
// //         e.currentTarget.style.background = "var(--color-accent)"
// //         e.currentTarget.style.borderColor = "var(--color-accent)"
// //         const svg = e.currentTarget.querySelector("svg")
// //         if (svg) svg.style.color = "#fff"
// //       }}
// //       onMouseLeave={(e) => {
// //         e.currentTarget.style.background = "transparent"
// //         e.currentTarget.style.borderColor = "var(--color-border)"
// //         const svg = e.currentTarget.querySelector("svg")
// //         if (svg) svg.style.color = "var(--color-text-muted)"
// //       }}
// //     >
// //       <span className="text-[var(--color-text-muted)]">
// //         {icon}
// //       </span>
// //     </a>
// //   )
// // }




// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Facebook, Instagram, Linkedin } from "lucide-react"

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Careers", href: "/career" },
//   { label: "Our Team", href: "#" },
//   { label: "Portfolio", href: "/portfolio" },
//   { label: "Blog", href: "/blogs" },
//   { label: "Contact Us", href: "/contact" },
// ]

// const services = [
//   { label: "Web Design And Development", href: "/services" },
//   { label: "Mobile App Development", href: "/services" },
//   { label: "Logo Design and Graphic Design", href: "/services" },
//   { label: "Website Maintenance", href: "/services" },
//   { label: "E-commerce Website Development", href: "/services" },
//   { label: "Digital Marketing Services", href: "/services" },
// ]

// const internships = [
//   { label: "Python Internship", href: "/internship" },
//   { label: "Django Internship", href: "/internship" },
//   { label: "AWS Internship", href: "/internship" },
//   { label: "Flutter Internship", href: "/internship" },
//   { label: "MERN Stack Internship", href: "/internship" },
//   { label: "Data Analytics Internship", href: "/internship" },
// ]

// export default function Footer() {
//   return (
//     <footer className="border-t bg-[var(--color-bg-light)] border-[var(--color-border)] overflow-hidden">
      
//       {/* TOP */}
//       <div className="container py-12">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[40%_20%_20%_20%]">
          
//           {/* INFO */}
//           <div className="space-y-4">
//             <img src="/logos/logo.png" alt="Maxgen" className="h-10" />

//             <p className="text-sm leading-relaxed max-w-md">
//               Transforming Businesses through Smart IT Solutions and
//               Result-Driven Marketing
//             </p>

//             <div className="text-sm space-y-1">
//               <p><b>Email:</b> info@maxgentechnologies.com</p>
//               <p><b>Phone:</b> 9090939845 / 9998491391</p>
//             </div>

//             <div className="flex gap-3 pt-2">
//               <Social href="https://www.linkedin.com/company/maxgen-technologies" icon={<Linkedin size={16} />} />
//               <Social href="https://www.facebook.com/maxgentechnologies" icon={<Facebook size={16} />} />
//               <Social href="https://www.instagram.com/maxgen_technologies/" icon={<Instagram size={16} />} />
//             </div>
//           </div>

//           <FooterCol title="Quick Links" links={quickLinks} />
//           <FooterCol title="Services" links={services} />
//           <FooterCol title="Internships" links={internships} />

//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-[var(--color-border)]">
//         <div className="container py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm">
//           <div>
//             © 2013 – {new Date().getFullYear()} Maxgen Technologies Pvt. Ltd.
//             All Rights Reserved.
//           </div>

//           <div className="flex flex-wrap gap-6">
//             <FooterLink href="/privacy">Privacy Policy</FooterLink>
//             <FooterLink href="/terms">Terms of use</FooterLink>
//             <FooterLink href="/refund">Refund Policy</FooterLink>
//             <FooterLink href="/payment">Payment Policy</FooterLink>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// /* COLUMN */
// function FooterCol({
//   title,
//   links,
// }: {
//   title: string
//   links: { label: string; href: string }[]
// }) {
//   return (
//     <div className="space-y-3">
//       <h4 className="font-semibold">{title}</h4>
//       <ul className="space-y-2">
//         {links.map((l) => (
//           <li key={l.label}>
//             <FooterLink href={l.href}>{l.label}</FooterLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// /* ✅ YOUR ORIGINAL HOVER EFFECT */
// function FooterLink({
//   href,
//   children,
// }: {
//   href: string
//   children: React.ReactNode
// }) {
//   return (
//     <motion.div whileHover="hover" className="inline-block">
//       <Link
//         href={href}
//         className="relative block text-sm text-[var(--color-text-muted)]"
//       >
//         <motion.span
//           variants={{
//             hover: { y: -1, color: "var(--color-accent)" },
//           }}
//           transition={{ duration: 0.2 }}
//         >
//           {children}
//         </motion.span>

//         <motion.span
//           className="absolute left-1/2 -bottom-0.5 h-[2px] bg-[var(--color-accent)]"
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

// /* SOCIAL */
// function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] transition"
//       onMouseEnter={(e) => {
//         e.currentTarget.style.background = "var(--color-accent)"
//         e.currentTarget.style.borderColor = "var(--color-accent)"
//         const svg = e.currentTarget.querySelector("svg")
//         if (svg) svg.style.color = "#fff"
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.background = "transparent"
//         e.currentTarget.style.borderColor = "var(--color-border)"
//         const svg = e.currentTarget.querySelector("svg")
//         if (svg) svg.style.color = "var(--color-text-muted)"
//       }}
//     >
//       <span className="text-[var(--color-text-muted)]">
//         {icon}
//       </span>
//     </a>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/career" },
  { label: "Our Team", href: "#" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
]

const internships = [
  { label: "Python Internship", href: "/internship" },
  { label: "Django Internship", href: "/internship" },
  { label: "AWS Internship", href: "/internship" },
  { label: "Flutter Internship", href: "/internship" },
  { label: "MERN Stack Internship", href: "/internship" },
  { label: "Data Analytics Internship", href: "/internship" },
]

export default function Footer() {
  const [services, setServices] = useState<
    { label: string; href: string }[]
  >([])
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    fetch("https://maxproject.pythonanywhere.com/services/")
      .then((res) => res.json())
      .then((json) => {
        const list = json?.data || []

        const mapped = list.map((s: any) => ({
          label: s.title,
          href: "/services",
        }))

        setServices(mapped)
      })
      .catch(() => {})
  }, [])

  return (
    <footer className="border-t bg-[var(--color-bg-light)] border-[var(--color-border)] overflow-hidden">
      
      {/* TOP */}
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[40%_20%_20%_20%]">
          
          {/* INFO */}
          <div className="space-y-4">
            <div className="flex items-center">
          <Link href="/">
            <img
              src="/logos/logo.png"
              alt="Maxgen"
               width={100}
               height={50}
              className=" transition-transform duration-300"
              style={{ transform: scrolled ? "scale(0.9)" : "scale(1)"}}
            />
          </Link>
        </div>

            <p className="text-sm leading-relaxed max-w-md">
              Transforming Businesses through Smart IT Solutions and
              Result-Driven Marketing
            </p>

            <div className="text-sm space-y-1">
              <p><b>Email:</b> info@maxgentechnologies.com</p>
              <p><b>Phone:</b> 9090939845 / 9998491391</p>
            </div>

            <div className="flex gap-3 pt-2">
              <Social href="https://www.linkedin.com/company/maxgen-technologies" icon={<Linkedin size={16} />} />
              <Social href="https://www.facebook.com/maxgentechnologies" icon={<Facebook size={16} />} />
              <Social href="https://www.instagram.com/maxgen_technologies/" icon={<Instagram size={16} />} />
            </div>
          </div>

          <FooterCol title="Quick Links" links={quickLinks} />
          <FooterCol title="Services" links={services} />
          <FooterCol title="Internships" links={internships} />

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm">
          <div>
            © 2013 – {new Date().getFullYear()} Maxgen Technologies Pvt. Ltd.
            All Rights Reserved.
          </div>

          <div className="flex flex-wrap gap-6">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of use</FooterLink>
            <FooterLink href="/refund">Refund Policy</FooterLink>
            <FooterLink href="/payment">Payment Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* COLUMN */
function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold">{title}</h4>
      <ul className="space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <FooterLink href={l.href}>{l.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* HOVER LINK */
function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <motion.div whileHover="hover" className="inline-block">
      <Link
        href={href}
        className="relative block text-sm text-[var(--color-text-muted)]"
      >
        <motion.span
          variants={{
            hover: { y: -1, color: "var(--color-accent)" },
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>

        <motion.span
          className="absolute left-1/2 -bottom-0.5 h-[2px] bg-[var(--color-accent)]"
          initial={{ width: 0, x: "-50%" }}
          variants={{
            hover: { width: "100%", x: "-50%" },
          }}
          transition={{ duration: 0.25 }}
        />
      </Link>
    </motion.div>
  )
}

/* SOCIAL */
function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] transition"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--color-accent)"
        e.currentTarget.style.borderColor = "var(--color-accent)"
        const svg = e.currentTarget.querySelector("svg")
        if (svg) svg.style.color = "#fff"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent"
        e.currentTarget.style.borderColor = "var(--color-border)"
        const svg = e.currentTarget.querySelector("svg")
        if (svg) svg.style.color = "var(--color-text-muted)"
      }}
    >
      <span className="text-[var(--color-text-muted)]">
        {icon}
      </span>
    </a>
  )
}