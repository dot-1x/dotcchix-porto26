import { playerStats } from "@/lib/genshin-data"
import { type EnkaPlayerInfo } from "@/lib/enka"
import { GlassCard } from "./primitives"

export function StatsRow({ playerInfo }: { playerInfo: EnkaPlayerInfo | null }) {
  const stats = [
    {
      label: "Achievements",
      value: playerInfo?.finishAchievementNum ?? "—",
      icon: "🏆",
    },
    { label: "Days Active", value: playerStats.daysActive, icon: "📅" },
    { label: "Characters", value: playerStats.charactersOwned, icon: "👥" },
    {
      label: "Friendships",
      value: playerInfo?.fetterCount ?? "—",
      icon: "💛",
    },
  ]

  return (
    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <GlassCard key={s.label} className="px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-lg">{s.icon}</span>
            <div className="min-w-0">
              <div className="truncate text-base font-bold text-[#f5e6b8]">
                {s.value}
              </div>
              <div className="truncate text-[0.7rem] text-[#ece5d8]/45">
                {s.label}
              </div>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  )
}
