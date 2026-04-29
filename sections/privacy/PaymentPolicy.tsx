"use client"

import PolicyLayout from "@/components/ui/PolicyLayout"
import Section from "@/components/ui/Section"
import { motion } from "framer-motion"

const payments = [
  {
    title: "1. Payment Terms",
    content:
      "All services, training programs, and internships require payment as per the agreed quotation or published fees.",
  },
  {
    title: "2. Accepted Methods",
    content:
      "We accept payments via bank transfer, UPI, online payment gateways, or other approved digital methods.",
  },
  {
    title: "3. Invoice & Billing",
    content:
      "Invoices will be issued for all payments. Clients are responsible for ensuring billing information is accurate.",
  },
  {
    title: "4. Late Payments",
    content:
      "Delayed payments may result in service suspension or project delays until dues are cleared.",
  },
  {
    title: "5. Security",
    content:
      "All online transactions are processed through secure payment gateways. We do not store card or payment credentials.",
  },
  {
    title: "6. Contact",
    content:
      "For payment-related questions, please contact our accounts team.",
  },
]

export default function PaymentPolicy() {
  return (
    <PolicyLayout
      title="Payment Policy"
      subtitle="This Payment Policy outlines how payments for Maxgen Technologies services and programs are handled."
      sections={payments}
    />
  )
}