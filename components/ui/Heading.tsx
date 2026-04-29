import { ReactNode } from "react"

interface HeadingProps {
  title: ReactNode
  subtitle?: ReactNode
  align?: "left" | "center" | "right"
  className?: string
}

export default function Heading({
  title,
  subtitle,
  align = "left",
  className = "",
}: HeadingProps) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left"

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      <h2
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
