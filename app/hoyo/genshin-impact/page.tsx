import { PLAYER_UID } from "@/lib/genshin-data"
import { getEnkaPlayerInfo } from "@/lib/enka"
import { BackgroundDecor } from "@/components/genshin/background-decor"
import { PlayerCard } from "@/components/genshin/player-card"
import { StatsRow } from "@/components/genshin/stats-row"
import { SpiralAbyssSection } from "@/components/genshin/spiral-abyss-section"
import { ImaginariumTheatreSection } from "@/components/genshin/imaginarium-theatre-section"
import { StygianOnslaughtSection } from "@/components/genshin/stygian-onslaught-section"

export default async function GenshinImpactPage() {
  const playerInfo = await getEnkaPlayerInfo(PLAYER_UID)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0d16] text-[#ece5d8]">
      <BackgroundDecor />

      <div className="relative mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14">
        {/* Eyebrow + title */}
        <header className="mb-10 text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[#d4a853]/80">
            Teyvat Traveler
          </p>
          <h1 className="mt-3 bg-gradient-to-b from-white to-[#d4a853] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Genshin Impact
          </h1>
        </header>

        {/* Profile + stats */}
        <PlayerCard playerInfo={playerInfo} />
        <StatsRow playerInfo={playerInfo} />

        {/* End-game showcases */}
        <div className="mt-14 space-y-14">
          <SpiralAbyssSection playerInfo={playerInfo} />
          <ImaginariumTheatreSection playerInfo={playerInfo} />
          <StygianOnslaughtSection playerInfo={playerInfo} />
        </div>

        <footer className="mt-16 border-t border-white/5 pt-6 text-center text-xs text-[#ece5d8]/30">
          Data sourced from Enka.Network • Not affiliated with HoYoverse
        </footer>
      </div>
    </main>
  )
}
