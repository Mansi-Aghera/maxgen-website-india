


"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

interface Step {
  title: string;
  icon: string;
}

const steps: Step[] = [
  { title: "Identify", icon: "/images/home/process1.webp" },
  { title: "Implement", icon: "/images/home/process2.webp" },
  { title: "Manage", icon: "/images/home/process3.webp" },
];

export default function Process() {
  return (
    <Section>
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          align="center"
          title="Let Us Help with Your Business IT Needs"
          subtitle="We are a unique product development company offering competitive software solutions to unlock your business potential. We help brands navigate their digital transformation journey."
          className="mx-auto"
        />
      </motion.div>

      {/* steps */}
      {/* steps */}
      <div className="mt-20 grid md:grid-cols-3 items-start relative">
        {/* center connector line */}
        
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center w-full">
            {/* connector to next circle */}
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-[80px] left-1/2 w-full h-[2px] bg-gray-300" />
            )}

            {/* circle */}
            <motion.div
              initial={{ opacity: 0, y: 80, rotate: -180 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.2,
              }}
              whileHover={{ rotate: 360, scale: 1.06 }}
              className="w-40 h-40 rounded-full flex items-center justify-center bg-light border border-default shadow-md relative z-10"
            >
              <motion.img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16"
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.9 }}
              />
            </motion.div>

            {/* title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.2,
              }}
              className="mt-8 text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {step.title}
            </motion.p>
          </div>
        ))}
      </div>
    </Section>
  );
}
