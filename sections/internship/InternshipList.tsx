"use client"

import Section from "@/components/ui/Section"
import InternshipCard from "./InternshipCard"
import { motion } from "framer-motion"
import { stagger } from "@/lib/motion"

const internships = [
  {
    id: "python",
    title: "Python Internship",
    icon: "/images/internship/internship1.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "django",
    title: "Django Internship",
    icon: "/images/internship/internship2.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "ml",
    title: "Machine Learning & Data Science Internship",
    icon: "/images/internship/internship3.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "php",
    title: "PHP Web Development Internship",
    icon: "/images/internship/internship4.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "java",
    title: "Java Internship",
    icon: "/images/internship/internship5.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "react",
    title: "React JS Internship",
    icon: "/images/internship/internship6.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "android",
    title: "Android Internship",
    icon: "/images/internship/internship7.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "testing",
    title: "Software Testing Internship",
    icon: "/images/internship/internship8.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "flutter",
    title: "Flutter Internship",
    icon: "/images/internship/internship9.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "aws",
    title: "AWS Internship",
    icon: "/images/internship/internship10.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "data",
    title: "Data Analytics Internship",
    icon: "/images/internship/internship11.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "mern",
    title: "MERN Stack Internship",
    icon: "/images/internship/internship12.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
  {
    id: "uiux",
    title: "UI/UX Internship",
    icon: "/images/internship/internship13.png",
    duration: "0 - 6 Months",
    mode: "With/Without Project",
    location: "Ahmedabad, Pune, Mumbai",
    link: "/contact",
  },
]

export default function InternshipList() {
  return (
    <Section>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-5"
      >
        {internships.map((item) => (
          <InternshipCard key={item.id} {...item} />
        ))}
      </motion.div>
    </Section>
  )
}