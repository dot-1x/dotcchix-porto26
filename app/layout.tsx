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
        url: "https://cdn.discordapp.com/avatars/732842920889286687/7a3da245a49f565d5d252935f0eec388.webp",
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
    images: [
      "https://cdn.discordapp.com/avatars/732842920889286687/7a3da245a49f565d5d252935f0eec388.webp",
    ],
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
