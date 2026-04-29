


// import type { Metadata } from "next"
// import "./globals.css"
// import ClientLayout from "./ClientLayout"
// import Script from "next/script"

// export const metadata: Metadata = {
//   robots: {
//     index: true,
//     follow: true,
//   },
//   verification: {
//     google: "SZuan7vTDWHYYlfrqDGpVBiYQoiueCJs2dftmLAf6T0",
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">

//       <head>
//         <Script
//           id="gtm-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id=GTM-P7G5XM6B'+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-P7G5XM6B');`,
//           }}
//         />

//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-FJL2FG233L"></script>
// <script
//   dangerouslySetInnerHTML={{
//     __html: `
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){window.dataLayer.push(arguments)}
//   gtag('js', new Date());
//   gtag('config', 'G-FJL2FG233L');
// `,
//   }}
// />

// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: `{
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "Maxgen Technologies Pvt Ltd",
//   "url": "https://www.maxgentechnologies.com/",
//   "logo": "https://www.maxgentechnologies.com/images/logo.png",
//   "contactPoint": {
//     "@type": "ContactPoint",
//     "telephone": "+91-9099039845",
//     "contactType": "customer support",
//     "areaServed": "IN",
//     "availableLanguage": ["English", "Hindi"]
//   },
//   "address": {
//     "@type": "PostalAddress",
//     "addressLocality": "Pune",
//     "addressRegion": "Maharashtra",
//     "postalCode": "411030",
//     "addressCountry": "IN"
//   },
//   "subOrganization": [
//     {
//       "@type": "Organization",
//       "name": "Maxgen Technologies - Pune Office",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Pune",
//         "addressRegion": "Maharashtra",
//         "postalCode": "411030",
//         "addressCountry": "IN"
//       }
//     },
//     {
//       "@type": "Organization",
//       "name": "Maxgen Technologies - Ahmedabad Office",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Ahmedabad",
//         "addressRegion": "Gujarat",
//         "postalCode": "380015",
//         "addressCountry": "IN"
//       }
//     },
//     {
//       "@type": "Organization",
//       "name": "Maxgen Technologies - Navi Mumbai Office",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Navi Mumbai",
//         "addressRegion": "Maharashtra",
//         "postalCode": "400703",
//         "addressCountry": "IN"
//       }
//     }
//   ]
// }`,
//   }}
// />

// <script
//   dangerouslySetInnerHTML={{
//     __html: `!function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '26495906516744908');
// fbq('track', 'PageView');`,
//   }}
// />
// <noscript><img height="1" width="1" style={{display:"none"}}
// src="https://www.facebook.com/tr?id=26495906516744908&ev=PageView&noscript=1"
// /></noscript>

// <script
//   dangerouslySetInnerHTML={{
//     __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-P7G5XM6B');`,
//   }}
// />
//       </head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta name="google-site-verification" content="SZuan7vTDWHYYlfrqDGpVBiYQoiueCJs2dftmLAf6T0" />
//  <noscript>
// <img height="1" width="1" style={{display:"none"}}
//   src="https://www.facebook.com/tr?id=26495906516744908&ev=PageView&noscript=1"/>
// </noscript>

//       <body cz-shortcut-listen="true">
//         <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7G5XM6B"
// height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
//         <ClientLayout>{children}</ClientLayout>
//       </body>
//     </html>
//   )
// }




import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import Script from "next/script"

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "SZuan7vTDWHYYlfrqDGpVBiYQoiueCJs2dftmLAf6T0",
  },
  metadataBase: new URL("https://www.maxgentechnologies.com"),
  title: {
    default: "Maxgen Technologies Pvt Ltd",
    template: "%s | Maxgen Technologies",
  },
  description:
    "Maxgen Technologies provides IT training, internships, and software development services across India.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PXRV4VXB');
            `,
          }}
        />



        {/* ✅ Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Google verification */}
        <meta
          name="google-site-verification"
          content="SZuan7vTDWHYYlfrqDGpVBiYQoiueCJs2dftmLAf6T0"
        />

        {/* ✅ Structured Data (Full Organization Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maxgen Technologies Pvt Ltd",
              url: "https://www.maxgentechnologies.com/",
              logo: "https://www.maxgentechnologies.com/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9099039845",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411030",
                addressCountry: "IN",
              },
              subOrganization: [
                {
                  "@type": "Organization",
                  name: "Maxgen Technologies - Pune Office",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pune",
                    addressRegion: "Maharashtra",
                    postalCode: "411030",
                    addressCountry: "IN",
                  },
                },
                {
                  "@type": "Organization",
                  name: "Maxgen Technologies - Ahmedabad Office",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ahmedabad",
                    addressRegion: "Gujarat",
                    postalCode: "380015",
                    addressCountry: "IN",
                  },
                },
                {
                  "@type": "Organization",
                  name: "Maxgen Technologies - Navi Mumbai Office",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Navi Mumbai",
                    addressRegion: "Maharashtra",
                    postalCode: "400703",
                    addressCountry: "IN",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body>
        {/* ✅ GTM NoScript (important) */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7G5XM6B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXRV4VXB"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

        {/* ✅ Main Layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}