"use client"

import Section from "@/components/ui/Section"
import { motion } from "framer-motion"

const policies = [
  {
    title: "1. Personal Information",
    content:
      "We do not collect personal information from children through our applications or website. We do not require you to provide any information to download or use our mobile applications, except non-personal usage data for improving our applications.",
  },
  {
    title: "2. Support Requests",
    content:
      "You may contact us via email for support inquiries. Any provided information, including your email address, will only be used for support purposes and deleted once the request is resolved.",
  },
  {
    title: "3. Information Sharing Disclosure",
    content:
      "We do not share your email or support request details except (i) with our email service provider for newsletters and (ii) when legally required.",
  },
  {
    title: "4. Children's Information",
    content:
      "We do not knowingly collect personally identifiable information from children under 13. If such information is found, we will remove it immediately upon notification.",
  },
  {
    title: "5. Cookie Usage",
    content:
      "Our service does not explicitly use cookies, but third-party services may. You can accept or refuse cookies through your browser settings.",
  },
  {
    title: "6. Third-Party Site Links",
    content:
      "Our website and applications may contain links to third-party websites. We are not responsible for their privacy practices.",
  },
  {
    title: "7. Changes to this Privacy Policy",
    content:
      "We will use your information per the policy in effect at the time. If changes occur, you will be notified before they take effect.",
  },
  {
    title: "8. Contact",
    content:
      "If you have any concerns regarding this Privacy Policy, please contact us via email.",
  },
]

export default function PrivacyPolicy() {
  return (
    <Section className="bg-light py-16 md:py-20">
      
      {/* HEADING (same as Services) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1
          className="text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Privacy <span className="text-accent">Policy</span>
        </h1>

        <div className="flex justify-center mt-3 gap-2 text-center">
          <div className="w-10 h-[2px] bg-primary" />
          <div className="w-6 h-[2px] bg-accent" />
          <div className="w-10 h-[2px] bg-primary" />
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-[#4a5568] max-w-[720px] mx-auto">
          Overview of This Privacy Policy details of the information collected by us,
          via our website, and usage of this information in our Company for Internship,
          Training & Recruitment.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="space-y-8 md:space-y-10 ">
        {policies.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <h3
              className="text-[20px] md:text-[22px] font-semibold text-primary mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {item.title}
            </h3>

            <p className="text-[15.5px] leading-[28px] text-[#4a5568]">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

    </Section>
  )
}