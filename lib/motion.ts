import { Transition } from "framer-motion"

type Viewport = { once: boolean }

type FadePreset = {
  initial: { opacity: number; y?: number }
  whileInView: { opacity: number; y?: number }
  viewport: Viewport
  transition: Transition
}

/* ===== Fade Up ===== */
export const fadeUp: FadePreset = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
}

/* ===== Fade ===== */
export const fade: FadePreset = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

/* ===== Stagger ===== */
export const stagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true },
}

