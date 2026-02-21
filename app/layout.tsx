// import "./globals.css"
// import Navbar from "@/components/layout/Navbar"
// import Footer from "@/components/layout/Footer"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="overflow-x-hidden">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }


import "./globals.css"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
