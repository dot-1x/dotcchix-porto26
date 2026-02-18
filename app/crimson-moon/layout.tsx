import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arlecchino - Crimson Moon",

  description:
    '"The Knave" — Fourth of the Fatui Harbingers. The mysterious "Father" of the House of the Hearth who wields the power of the Crimson Moon and commands flames born from a dark, ancient bloodline.',

  openGraph: {
    title: "Arlecchino - Crimson Moon",
    description:
      '"The Knave" — Fourth of the Fatui Harbingers. The mysterious "Father" of the House of the Hearth who wields the power of the Crimson Moon and commands flames born from a dark, ancient bloodline.',
    images: [
      {
        url: "https://cdn.discordapp.com/avatars/732842920889286687/a_61e7751985fcfb3c2dd5b0846d1b2f9f.png",
        width: 128,
        height: 128,
        alt: "Arlecchino - Crimson Moon",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Arlecchino - Crimson Moon",
    description:
      '"The Knave" — Fourth of the Fatui Harbingers. The mysterious "Father" of the House of the Hearth who wields the power of the Crimson Moon and commands flames born from a dark, ancient bloodline.',
    images: [
      "https://cdn.discordapp.com/avatars/732842920889286687/a_61e7751985fcfb3c2dd5b0846d1b2f9f.png",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
