import { abyssTeams } from "@/lib/genshin-data"
import { type EnkaPlayerInfo } from "@/lib/enka"
import { SectionHeader, Metric } from "./primitives"
import { TeamCard } from "./team-card"

export function SpiralAbyssSection({
  playerInfo,
}: {
  playerInfo: EnkaPlayerInfo | null
}) {
  const floor = playerInfo
    ? `${playerInfo.towerFloorIndex}-${playerInfo.towerLevelIndex}`
    : "—"
  const stars = playerInfo?.towerStarIndex ?? null

  return (
    <section>
      <SectionHeader
        title="Spiral Abyss"
        meta={
          <div className="flex items-center gap-3">
            <Metric label="Floor" value={floor} />
            <Metric label="Stars" value={stars != null ? `${stars}★` : "—"} />
          </div>
        }
      />
      <div className="space-y-4">
        {abyssTeams.map((team, i) => (
          <TeamCard key={team.name ?? i} team={team} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  )
}
