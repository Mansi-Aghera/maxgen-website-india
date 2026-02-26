


"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

type Size = "sm" | "md" | "lg"
type Variant = "accent" | "primary" | "outline"

interface ButtonProps {
  children: ReactNode
  href?: string
  target?: string
  size?: Size
  variant?: Variant
  icon?: ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>   // ✅ added
  type?: "button" | "submit" | "reset" // ✅ added
    disabled?: boolean 
}

export default function Button({
  children,
  href,
  target,
  size = "md",
  variant = "accent",
  icon,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const sizes: Record<Size, string> = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-[15px]",
    lg: "px-8 sm:px-10 py-3 sm:py-4 text-base",
  }

  const textStyles: Record<Variant, string> = {
    accent: "text-white",
    primary: "text-white",
    outline: "border border-default text-primary bg-transparent",
  }

  const baseGradient =
    variant === "primary"
      ? `linear-gradient(135deg,var(--color-primary) 0%,var(--color-primary) 65%,var(--color-accent) 100%)`
      : variant === "accent"
      ? `linear-gradient(135deg,var(--color-accent) 0%,var(--color-accent) 65%,var(--color-primary) 100%)`
      : undefined

  const hoverGradient =
    variant === "primary"
      ? `linear-gradient(135deg,var(--color-accent) 0%,var(--color-primary) 70%,var(--color-primary) 100%)`
      : variant === "accent"
      ? `linear-gradient(135deg,var(--color-primary) 0%,var(--color-accent) 70%,var(--color-accent) 100%)`
      : undefined

  const content = (
    <>
      {variant !== "outline" && (
        <motion.span
          className="absolute inset-0"
          style={{ background: hoverGradient, opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        />
      )}

      <span className="relative flex items-center gap-2">
        {children}
        {icon && <span className="flex">{icon}</span>}
      </span>
    </>
  )

  const commonClass = `group relative inline-flex items-center justify-center overflow-hidden font-semibold tracking-[0.3px] ${sizes[size]} ${textStyles[variant]} ${className}`

  const commonStyle = {
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-md)",
    background: variant === "outline" ? undefined : baseGradient,
  } as React.CSSProperties

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} target={target} className={commonClass} style={commonStyle}>
          {content}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={commonClass}
          style={commonStyle}
        >
          {content}
        </button>
      )}
    </motion.div>
  )
}