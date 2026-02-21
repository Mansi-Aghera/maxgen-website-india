// // "use client"

// // import { ReactNode } from "react"
// // import Link from "next/link"
// // import { motion } from "framer-motion"

// // type Size = "md" | "lg"

// // interface ButtonProps {
// //   children: ReactNode
// //   href?: string
// //   size?: Size
// //   icon?: ReactNode
// //   className?: string
// // }

// // export default function Button({
// //   children,
// //   href,
// //   size = "md",
// //   icon,
// //   className = "",
// // }: ButtonProps) {
// //   const Comp: any = href ? Link : "button"

// //   const sizes: Record<Size, string> = {
// //     md: "px-8 py-3 text-[15px]",
// //     lg: "px-10 py-4 text-[16px]",
// //   }

// //   return (
// //     <motion.div
// //       whileHover={{ y: -6 }}
// //       whileTap={{ y: 0, scale: 0.95 }}
// //       transition={{ type: "spring", stiffness: 220, damping: 14 }}
// //       className="inline-block"
// //     >
// //       <Comp
// //         href={href}
// //         className={`group relative inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold tracking-[0.3px] overflow-hidden ${sizes[size]} ${className}`}
// //         style={{
// //           color: "#fff",
// //           background:
// //             "linear-gradient(135deg,#ff4d4d 0%,#ef3b3a 35%,#ff6a6a 60%,#ef3b3a 100%)",
// //           boxShadow:
// //             "0 25px 60px rgba(239,59,58,0.45), 0 8px 18px rgba(0,0,0,0.18)",
// //         }}
// //       >
// //         {/* animated gradient shift */}
// //         <motion.span
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "linear-gradient(120deg,#ff6a6a,transparent 40%,transparent 60%,#ff6a6a)",
// //             mixBlendMode: "overlay",
// //           }}
// //           animate={{ x: ["-120%", "120%"] }}
// //           transition={{
// //             repeat: Infinity,
// //             duration: 4,
// //             ease: "linear",
// //           }}
// //         />

// //         {/* magnetic edge glow */}
// //         <span
// //           className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //           style={{
// //             boxShadow:
// //               "0 0 0 1px rgba(255,255,255,0.6) inset, 0 0 25px rgba(255,80,80,0.6)",
// //           }}
// //         />

// //         {/* sheen sweep */}
// //         <motion.span
// //           className="absolute top-0 left-[-140%] w-[120%] h-full bg-white/30 skew-x-12"
// //           whileHover={{ left: "140%" }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //         />

// //         {/* content */}
// //         <span className="relative flex items-center gap-2">
// //           {children}
// //           {icon && <span className="flex">{icon}</span>}
// //         </span>
// //       </Comp>
// //     </motion.div>
// //   )
// // }


// // "use client"

// // import { ReactNode } from "react"
// // import Link from "next/link"
// // import { motion } from "framer-motion"

// // type Size = "sm" | "md" | "lg"
// // type Variant = "accent" | "primary" | "outline"

// // interface ButtonProps {
// //   children: ReactNode
// //   href?: string
// //   size?: Size
// //   variant?: Variant
// //   icon?: ReactNode
// //   className?: string
// // }

// // export default function Button({
// //   children,
// //   href,
// //   size = "md",
// //   variant = "accent",
// //   icon,
// //   className = "",
// // }: ButtonProps) {
// //   const Comp: any = href ? Link : "button"

// //   /* ================= SIZE ================= */
// //   const sizes: Record<Size, string> = {
// //     sm: "px-5 py-2 text-sm",
// //     md: "px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-[15px]",
// //     lg: "px-8 sm:px-10 py-3 sm:py-4 text-base",
// //   }

// //   /* ================= VARIANT ================= */
// //   const variants: Record<Variant, string> = {
// //     accent: "text-white",
// //     primary: "text-white",
// //     outline: "border border-default text-primary bg-transparent",
// //   }

// //   /* ================= BACKGROUND ================= */
// //   const bgStyle =
// //     variant === "outline"
// //       ? {}
// //       : variant === "primary"
// //       ? {
// //           background: `linear-gradient(135deg,
// //             var(--color-primary) 0%,
// //             color-mix(in srgb, var(--color-primary) 85%, white) 60%,
// //             var(--color-primary) 100%)`,
// //         }
// //       : {
// //           background: `linear-gradient(135deg,
// //             var(--color-accent) 0%,
// //             color-mix(in srgb, var(--color-accent) 85%, white) 60%,
// //             var(--color-accent) 100%)`,
// //         }

// //   return (
// //     <motion.div
// //       whileHover={{ y: -4 }}
// //       whileTap={{ scale: 0.96 }}
// //       transition={{ type: "spring", stiffness: 260, damping: 18 }}
// //       className="inline-block"
// //     >
// //       <Comp
// //         href={href}
// //         className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold tracking-[0.3px] ${sizes[size]} ${variants[variant]} ${className}`}
// //         style={{
// //           borderRadius: "var(--radius-md)",
// //           boxShadow: "var(--shadow-md)",
// //           ...bgStyle,
// //         }}
// //       >
// //         {/* ===== animated sheen sweep ===== */}
// //         {variant !== "outline" && (
// //           <motion.span
// //             className="pointer-events-none absolute top-0 left-[-140%] w-[120%] h-full bg-white/25 skew-x-12"
// //             whileHover={{ left: "140%" }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //           />
// //         )}

// //         {/* ===== glow edge ===== */}
// //         {variant !== "outline" && (
// //           <span
// //             className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
// //             style={{
// //               borderRadius: "inherit",
// //               boxShadow:
// //                 "0 0 0 1px rgba(255,255,255,0.5) inset, 0 0 22px rgba(0,0,0,0.15)",
// //             }}
// //           />
// //         )}

// //         {/* ===== content ===== */}
// //         <span className="relative flex items-center gap-2">
// //           {children}
// //           {icon && <span className="flex">{icon}</span>}
// //         </span>
// //       </Comp>
// //     </motion.div>
// //   )
// // }


// "use client"

// import { ReactNode } from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"

// type Size = "sm" | "md" | "lg"
// type Variant = "accent" | "primary" | "outline"

// interface ButtonProps {
//   children: ReactNode
//   href?: string
//   target?: string
//   size?: Size
//   variant?: Variant
//   icon?: ReactNode
//   className?: string
//     onClick?: () => void   // ✅ added
//   type?: "button" | "submit" | "reset" // ✅ added
// }

// export default function Button({
//   children,
//   href,
//   target,
//   size = "md",
//   variant = "accent",
//   icon,
//   className = "",
// }: ButtonProps) {
//   /* ================= SIZE ================= */
//   const sizes: Record<Size, string> = {
//     sm: "px-5 py-2 text-sm",
//     md: "px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-[15px]",
//     lg: "px-8 sm:px-10 py-3 sm:py-4 text-base",
//   }

//   /* ================= TEXT ================= */
//   const textStyles: Record<Variant, string> = {
//     accent: "text-white",
//     primary: "text-white",
//     outline: "border border-default text-primary bg-transparent",
//   }

//   /* ================= GRADIENTS ================= */
//   const baseGradient =
//     variant === "primary"
//       ? `linear-gradient(135deg,
//           var(--color-primary) 0%,
//           var(--color-primary) 65%,
//           var(--color-accent) 100%)`
//       : variant === "accent"
//       ? `linear-gradient(135deg,
//           var(--color-accent) 0%,
//           var(--color-accent) 65%,
//           var(--color-primary) 100%)`
//       : undefined

//   const hoverGradient =
//     variant === "primary"
//       ? `linear-gradient(135deg,
//           var(--color-accent) 0%,
//           var(--color-primary) 70%,
//           var(--color-primary) 100%)`
//       : variant === "accent"
//       ? `linear-gradient(135deg,
//           var(--color-primary) 0%,
//           var(--color-accent) 70%,
//           var(--color-accent) 100%)`
//       : undefined

//   /* ================= INNER CONTENT ================= */
//   const content = (
//     <>
//       {/* hover gradient swap */}
//       {variant !== "outline" && (
//         <motion.span
//           className="absolute inset-0"
//           style={{ background: hoverGradient, opacity: 0 }}
//           whileHover={{ opacity: 1 }}
//           transition={{ duration: 0.35 }}
//         />
//       )}

//       {/* sheen */}
//       {variant !== "outline" && (
//         <motion.span
//           className="pointer-events-none absolute top-0 left-[-140%] w-[120%] h-full bg-white/25 skew-x-12"
//           whileHover={{ left: "140%" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         />
//       )}

//       {/* glow */}
//       {variant !== "outline" && (
//         <span
//           className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           style={{
//             borderRadius: "inherit",
//             boxShadow:
//               "0 0 0 1px rgba(255,255,255,0.5) inset, 0 0 22px rgba(0,0,0,0.15)",
//           }}
//         />
//       )}

//       {/* label */}
//       <span className="relative flex items-center gap-2">
//         {children}
//         {icon && <span className="flex">{icon}</span>}
//       </span>
//     </>
//   )

//   /* ================= COMMON STYLE ================= */
//   const commonClass = `group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold tracking-[0.3px] ${sizes[size]} ${textStyles[variant]} ${className}`

//   const commonStyle = {
//     borderRadius: "var(--radius-md)",
//     boxShadow: "var(--shadow-md)",
//     background: variant === "outline" ? undefined : baseGradient,
//   } as React.CSSProperties

//   /* ================= RENDER ================= */
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       whileTap={{ scale: 0.96 }}
//       transition={{ type: "spring", stiffness: 260, damping: 18 }}
//       className="inline-block"
//     >
//       {href ? (
//         <Link href={href} target={target} className={commonClass} style={commonStyle}>
//           {content}
//         </Link>
//       ) : (
//         <button className={commonClass} style={commonStyle}>
//           {content}
//         </button>
//       )}
//     </motion.div>
//   )
// }


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
  onClick?: () => void   // ✅ added
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