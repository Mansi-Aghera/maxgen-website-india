"use client"

import PolicyLayout from "@/components/ui/PolicyLayout"
import Section from "@/components/ui/Section"
import { motion } from "framer-motion"

const refunds = [
  {
    title: "1. Training & Internship Fees",
    content:
      "All training and internship fees paid to Maxgen Technologies are non-refundable once the program has started.",
  },
  {
    title: "2. Service Payments",
    content:
      "Payments made for software development, design, or IT services are non-refundable once work has commenced or resources have been allocated.",
  },
  {
    title: "3. Cancellation",
    content:
      "If a project or service is cancelled before work begins, refund eligibility will be reviewed on a case-by-case basis.",
  },
  {
    title: "4. Exceptions",
    content:
      "Refunds may be issued only if Maxgen Technologies is unable to deliver the agreed service due to internal limitations.",
  },
  {
    title: "5. Processing",
    content:
      "Approved refunds, if any, will be processed within 7–10 business days via the original payment method.",
  },
  {
    title: "6. Contact",
    content:
      "For refund-related inquiries, please contact our support team.",
  },
]

export default function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund Policy"
      subtitle="This Refund Policy explains the conditions under which payments made to Maxgen Technologies may be refunded."
      sections={refunds}
    />
  )
}