import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "dotcchix || Zex",
  description:
    'Zexs personal websites, where you can find about me here. "Assisted" with Claude Opus 4.6 with a little touch from me',

  openGraph: {
    title: "dotcchix || Zex.",
    description:
      'Zexs personal websites, where you can find about me here. "Assisted" with Claude Opus 4.6 with a little touch from me',
    images: [
      {
        url: "/profile.png",
        width: 128,
        height: 128,
        alt: "dotcchix || Zex.",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "dotcchix || Zex.",
    description:
      'Zexs personal websites, where you can find about me here. "Assisted" with Claude Opus 4.6 with a little touch from me',
    images: ["/profile.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </body>
    </html>
  )
}
