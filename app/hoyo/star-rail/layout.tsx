import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Honkai: Star Rail Profile — dotcchix",
  description: "My Honkai: Star Rail player profile, character roster, and endgame clears.",
  openGraph: {
    title: "Honkai: Star Rail Profile — dotcchix",
    description: "My Honkai: Star Rail player profile, character roster, and endgame clears.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
