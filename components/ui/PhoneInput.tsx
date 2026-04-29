"use client"

import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { forwardRef } from "react"

interface CustomPhoneInputProps {
  value: string
  onChange: (value: string | undefined) => void
  placeholder?: string
  error?: string
  className?: string
  variant?: "outline" | "underline"
}

/**
 * A premium international phone number input with a country flag dropdown.
 * Uses react-phone-number-input under the hood with custom styling.
 */
const CustomPhoneInput = forwardRef<any, CustomPhoneInputProps>(
  ({ value, onChange, placeholder = "Phone Number", error, className, variant = "outline" }, ref) => {
    const isUnderline = variant === "underline"

    // If underline variant (for Quote page), we use custom inline styles
    // Otherwise, we use the provided className (from the form) or default outline styles
    const containerStyle = isUnderline ? {
      border: "none",
      borderBottom: "1px solid var(--color-border)",
      borderRadius: "0",
      background: "transparent",
      padding: "0",
    } : {}

    return (
      <div className="w-full">
        <div 
          className={`phone-input-container ${isUnderline ? "" : className} ${error ? "!border-red-500" : ""}`}
          style={containerStyle}
        >
          <PhoneInput
            international
            defaultCountry="IN"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="custom-phone-input"
            ref={ref}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    )
  }
)

CustomPhoneInput.displayName = "CustomPhoneInput"

export default CustomPhoneInput
