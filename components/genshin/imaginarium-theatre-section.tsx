import { theatreModeLabel } from "@/lib/genshin-data"
import { type EnkaPlayerInfo } from "@/lib/enka"
import { SectionHeader, GlassCard } from "./primitives"

export function ImaginariumTheatreSection({
  playerInfo,
}: {
  playerInfo: EnkaPlayerInfo | null
}) {
  const act = playerInfo?.theaterActIndex ?? null
  const stars = playerInfo?.theaterStarIndex ?? null
  const mode = theatreModeLabel(playerInfo?.theaterModeIndex)

  return (
    <section>
      <SectionHeader title="Imaginarium Theatre" />
      <GlassCard className="overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <TheatreStat
            label="Difficulty"
            value={mode}
            hint="Highest mode cleared"
          />
          <TheatreStat
            label="Act Progress"
            value={act != null ? `Act ${act}` : "—"}
            hint="Furthest act reached"
          />
          <TheatreStat
            label="Stars Earned"
            value={stars != null ? `${stars}★` : "—"}
            hint="Total performance stars"
          />
        </div>
      </GlassCard>
    </section>
  )
}

function TheatreStat({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint: string
}) {
  return (
    <div className="px-6 py-6 text-center">
      <div className="text-xs uppercase tracking-wider text-[#d4a853]/70">
        {label}
      </div>
      <div className="mt-2 text-2xl font-bold text-[#f5e6b8]">{value}</div>
      <div className="mt-1 text-[0.7rem] text-[#ece5d8]/40">{hint}</div>
    </div>
  )
}
