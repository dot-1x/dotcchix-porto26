import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.discordapp.com/**"),
      new URL("https://media.giphy.com/media/**"),
      new URL(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Balemoon_Rising_Preview.gif/revision/latest?cb=20240424020024",
      ),
      new URL(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Arlecchino_Edict.png/revision/latest?cb=20240424020010",
      ),
      new URL(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7d/Arlecchino_Wish.png/revision/latest/scale-to-width-down/1000?cb=20240424055957",
      ),
      new URL("https://i.pinimg.com/**"),
    ],
  },
}

export default nextConfig
