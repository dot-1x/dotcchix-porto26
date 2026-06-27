import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Genshin Impact Profile — dotcchix",
  description: "My Genshin Impact player profile, team showcases, and character builds.",
  openGraph: {
    title: "Genshin Impact Profile — dotcchix",
    description: "My Genshin Impact player profile, team showcases, and character builds.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
