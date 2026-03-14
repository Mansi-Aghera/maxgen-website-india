
// non static ids 
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { API } from "@/lib/api"
import { getServices } from "@/lib/services"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/career" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
]

export default function Footer() {
  const [services, setServices] = useState<
    { label: string; href: string }[]
  >([])

  const [internships, setInternships] = useState<
    { label: string; href: string }[]
  >([])
  
  /* SERVICES */
  useEffect(() => {
    getServices()
      .then((list) => {
        const mapped = list.map((s) => ({
          label: s.title,
          href: `/services/${s.slug}`,
        }))
        setServices(mapped)
      })
      .catch(() => {})
  }, [])

  /* INTERNSHIPS */
  // useEffect(() => {
  //   fetch(API.internships)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const list = json?.data || []

  //       const active = list.filter(
  //         (i: any) => i.status === true || i.status === "active"
  //       )

  //       const mapped = active.map((i: any) => ({
  //         label: i.title,
  //         href: `/internship/${i.slug}`,
  //       }))

  //       setInternships(mapped)
  //     })
  //     .catch(() => {})
  // }, [])

  useEffect(() => {
  fetch(API.internships)
    .then((res) => res.json())
    .then((json) => {
      const list = json?.data || []

      const allowedIds = [5, 7, 9, 14, 17]

      const active = list.filter(
        (i: any) =>
          (i.status === true || i.status === "active") &&
          allowedIds.includes(i.id)
      )

      const mapped = active.map((i: any) => ({
        label: i.title,
        href: `/internship/${i.slug}`,
      }))

      setInternships(mapped)
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

/* LINK */
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
    >
      <span className="text-[var(--color-text-muted)]">
        {icon}
      </span>
    </a>
  )
}