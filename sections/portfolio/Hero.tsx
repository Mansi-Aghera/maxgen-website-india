"use client"

import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

export default function PortfolioHero() {
  return (
    <Section className="">
      <motion.div {...fadeUp}>
        <Heading
          align="center"
          title={
            <>
               <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="text-center"
                    >
                      <h2
                        className="text-3xl md:text-4xl font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Our <span className="text-accent">Portfolio</span>
                      </h2>
              
                      <div className="flex justify-center mt-3 gap-2">
                        <div className="w-10 h-[2px] bg-primary" />
                        <div className="w-6 h-[2px] bg-accent" />
                        <div className="w-10 h-[2px] bg-primary" />
                      </div>
                    </motion.div>
            </>
          }
          subtitle="Our work is distinguished amongst wide variety. Below are few of our websites which may help you to trust us better."
        />

      </motion.div>
    </Section>
  )
}