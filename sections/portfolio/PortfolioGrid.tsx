"use client";

import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "web" | "mobile" | "branding";

const items = [
  {
    title: "Rising Omega Advisors",
    image: "/images/portfolio/portfolio1.png",
    category: "web",
  },
  {
    title: "Screws & Fasteners",
    image: "/images/portfolio/portfolio2.png",
    category: "web",
  },
  {
    title: "GreenInsu",
    image: "/images/portfolio/portfolio3.png",
    category: "web",
  },
  {
    title: "Finance App",
    image: "/images/portfolio/portfolio4.png",
    category: "web",
  },
  {
    title: "Health App",
    image: "/images/portfolio/portfolio5.png",
    category: "mobile",
  },
  {
    title: "Brand Identity",
    image: "/images/portfolio/portfolio6.png",
    category: "mobile",
  },
  {
    title: "Menta App",
    image: "/images/portfolio/portfolio7.png",
    category: "mobile",
  },
  {
    title: "Brand Identity",
    image: "/images/portfolio/portfolio8.png",
    category: "branding",
  },
  {
    title: "Logo",
    image: "/images/portfolio/portfolio1.png",
    category: "branding",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "ALL", value: "all" },
  { label: "WEB", value: "web" },
  { label: "MOBILE APPS", value: "mobile" },
  { label: "BRANDING", value: "branding" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <Section>
      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-5 py-2 text-sm rounded-md border transition-all
              ${
                active === f.value
                  ? "bg-primary text-white border-primary"
                  : "border-[var(--color-border)] text-primary hover:bg-primary"
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.title + i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
