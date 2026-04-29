import { ReactNode } from "react"
import Container from "./Container"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClass?: string
  id?: string
}

export default function Section({
  children,
  className = "",
  containerClass = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <Container className={containerClass}>{children}</Container>
    </section>
  )
}
