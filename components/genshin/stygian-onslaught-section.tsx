import {
  stygianTeams,
  formatClearTime,
  stygianDifficultyLabel,
} from "@/lib/genshin-data"
import { type EnkaPlayerInfo } from "@/lib/enka"
import { SectionHeader } from "./primitives"
import { TeamCard } from "./team-card"

export function StygianOnslaughtSection({
  playerInfo,
}: {
  playerInfo: EnkaPlayerInfo | null
}) {
  const difficulty = stygianDifficultyLabel(playerInfo?.stygianIndex)
  const time = playerInfo?.stygianSeconds || 0

  return (
    <section>
      <SectionHeader title="Stygian Onslaught" />

      {/* Featured callout */}
      <div className="relative mb-5 overflow-hidden rounded-2xl border border-[#d4a853]/30 bg-gradient-to-r from-[#d4a853]/10 via-[#b08fc2]/5 to-transparent p-6 backdrop-blur-xl">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d4a853]/15 blur-3xl" />
        <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-wider text-[#d4a853]/70">
              Difficulty Cleared
            </div>
            <div className="mt-1 text-3xl font-bold text-white">
              {difficulty}
            </div>
          </div>
          <div className="hidden h-12 w-px bg-white/10 sm:block" />
          <div className="text-center sm:text-right">
            <div className="text-xs uppercase tracking-wider text-[#d4a853]/70">
              Clear Time
            </div>
            <div className="mt-1 text-3xl font-bold text-[#f5e6b8]">
              {time} S
            </div>
          </div>
        </div>
      </div>

      {/* Teams used */}
      <div className="space-y-4">
        {stygianTeams.map((team, i) => (
          <TeamCard key={team.name ?? i} team={team} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  )
}
