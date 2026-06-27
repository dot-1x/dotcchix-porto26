import { PLAYER_UID, PLAYER_SERVER } from "@/lib/genshin-data"
import { type EnkaPlayerInfo } from "@/lib/enka"
import { GlassCard, Pill } from "./primitives"

export function PlayerCard({
  playerInfo,
}: {
  playerInfo: EnkaPlayerInfo | null
}) {
  const nickname = playerInfo?.nickname ?? "dotcchix"
  const signature = playerInfo?.signature ?? "Wandering through Teyvat."
  const ar = playerInfo?.level ?? 60
  const wl = playerInfo?.worldLevel ?? 8

  return (
    <GlassCard className="overflow-hidden">
      <div className="flex flex-col items-center gap-5 p-6 sm:flex-row sm:gap-6 sm:p-7">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4a853] to-[#4cc2f1] opacity-60 blur-md" />
          <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-[#0b0d16] text-3xl">
            ✦
          </div>
        </div>

        {/* Identity */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white">{nickname}</h2>
          <p className="mt-1 text-sm italic text-[#ece5d8]/50">
            &quot;{signature}&quot;
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
            <Pill label="AR" value={ar} accent />
            <Pill label="WL" value={wl} accent />
            <Pill label="UID" value={PLAYER_UID} />
            <Pill label="Server" value={PLAYER_SERVER} />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
