

"use client"

import { ReactNode, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ open, onClose, children }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay - full screen with blur */}
          <motion.div
            className="fixed bg-black/40 backdrop-blur-sm z-[9998]"
            style={{ top: '0', left: 0, right: 0, bottom: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}  // 👈 Overlay click = close
          />

          {/* Modal Container */}
          <motion.div
            className="fixed z-[9999] flex items-center justify-center"
            style={{ top: '70px', left: 0, right: 0, bottom: 0, padding: '1rem' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}  // 👈 ADD THIS - Modal container click = close
          >
            <div
              className="bg-white w-full max-w-2xl rounded-[var(--radius-lg)] shadow-lg flex flex-col"
              style={{ maxHeight: 'calc(100vh - 80px - 2rem)' }}
              onClick={(e) => e.stopPropagation()}  // 👈 Form ke andar click = NOT close
            >
              {/* Scrollable content - hidden scrollbar */}
              <div className="overflow-y-auto scrollbar-hidden">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}