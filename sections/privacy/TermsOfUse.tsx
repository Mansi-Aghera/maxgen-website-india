"use client"

import PolicyLayout from "@/components/ui/PolicyLayout"
import Section from "@/components/ui/Section"
import { motion } from "framer-motion"

const terms = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using our website and services, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use our services.",
  },
  {
    title: "2. Services",
    content:
      "Maxgen Technologies provides IT services, training, internships, and software solutions. We reserve the right to modify or discontinue any service without prior notice.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "You agree to provide accurate information, use our services lawfully, and not engage in activities that may harm our systems, reputation, or other users.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content, logos, materials, and software on this website are the property of Maxgen Technologies and may not be copied, distributed, or reused without permission.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.",
  },
  {
    title: "6. Changes to Terms",
    content:
      "We may update these Terms of Use at any time. Continued use of our services after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "7. Contact",
    content:
      "For any questions regarding these Terms of Use, please contact us via email.",
  },
]

export default function TermsOfUse() {
  return (
    <PolicyLayout
      title="Terms of Use"
      subtitle="These Terms of Use govern your access to and use of Maxgen Technologies services, website, and offerings."
      sections={terms}
    />
  )
}