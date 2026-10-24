import DisableInspect from "../app/components/DisableInspect";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata= {
  metadataBase: new URL("https://harshilandvritti.vercel.app/"),

  openGraph: {
    title: "Harshil & Vritti",
    description: "Join as they begin their forever. 11 & 12 December, 2026",
    url: "https://harshilandvritti.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Harshil & Vritti",
      }, 
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Harshil & Vritti",
    description: "Join as they begin their forever. 11 & 12  November, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://harshilandvritti.vercel.app/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* <DisableInspect />  */}
        {children}
      </body>
    </html>
  );
}