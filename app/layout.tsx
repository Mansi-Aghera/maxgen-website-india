// // import "./globals.css"
// // import Navbar from "@/components/layout/Navbar"
// // import Footer from "@/components/layout/Footer"

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className="overflow-x-hidden">
// //         <Navbar />
// //         {children}
// //         <Footer />
// //       </body>
// //     </html>
// //   )
// // }


// import "./globals.css"
// import ClientLayout from "./ClientLayout"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="overflow-x-hidden">
//         <ClientLayout>{children}</ClientLayout>
//       </body>
//     </html>
//   )
// }


import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex, nofollow" />
      <body className="overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}