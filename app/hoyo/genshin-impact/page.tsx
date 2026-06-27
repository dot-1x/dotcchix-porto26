import Image from "next/image"
import {
  teams,
  playerStats,
  PLAYER_UID,
  PLAYER_SERVER,
  ELEMENT_COLORS,
  type GenshinCharacter,
  type GenshinTeam,
  type Element,
} from "@/lib/genshin-data"
import { getEnkaPlayerInfo, EnkaPlayerInfo } from "@/lib/enka"

export default async function GenshinImpactPage() {
  const playerInfo = await getEnkaPlayerInfo(PLAYER_UID)

  return (
    <main className="min-h-screen bg-[#1a1e2e] text-[#ece5d8]">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-[#d4a853]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1e2e] via-[#2a2f42] to-[#1a1e2e]" />
        <div className="relative max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] mb-2">
            Teyvat Traveler
          </p>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d4a853] via-[#f5e6b8] to-[#d4a853] bg-clip-text text-transparent">
            Genshin Impact
          </h1>
          <p className="mt-3 text-sm text-[#ece5d8]/60">
            UID: {PLAYER_UID} • {PLAYER_SERVER} Server
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* Player Profile Card */}
        <PlayerCard playerInfo={playerInfo} />

        {/* Stats Grid */}
        <StatsGrid playerInfo={playerInfo} />

        {/* Team Showcase */}
        <section>
          <SectionTitle>Team Showcase</SectionTitle>
          <div className="space-y-10">
            {teams.map((team) => (
              <TeamCard key={team.name} team={team} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#d4a853]/20 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs text-[#ece5d8]/40">
          Data sourced from Enka.Network • Not affiliated with HoYoverse
        </div>
      </footer>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-[#d4a853]">{children}</h2>
      <div className="mt-1 h-px w-20 bg-gradient-to-r from-[#d4a853] to-transparent" />
    </div>
  )
}

function PlayerCard({ playerInfo }: { playerInfo: EnkaPlayerInfo | null }) {
  const nickname = playerInfo?.nickname ?? "dotcchix"
  const signature = playerInfo?.signature ?? "..."
  const ar = playerInfo?.level ?? 60
  const wl = playerInfo?.worldLevel ?? 8

  return (
    <section className="relative rounded-xl border border-[#d4a853]/30 bg-[#2a2f42]/80 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
        {/* Avatar placeholder */}
        <div className="w-20 h-20 rounded-full border-2 border-[#d4a853]/50 bg-[#1a1e2e] flex items-center justify-center text-2xl">
          ✦
        </div>
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold text-[#f5e6b8]">{nickname}</h2>
          <p className="text-sm text-[#ece5d8]/60 italic mt-1">
            &quot;{signature}&quot;
          </p>
          <div className="mt-3 flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            <Stat label="AR" value={ar} />
            <Stat label="WL" value={wl} />
            <Stat label="UID" value={PLAYER_UID} />
            <Stat label="Server" value={PLAYER_SERVER} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[#d4a853] font-semibold">{label}</span>
      <span className="text-[#ece5d8]/80">{value}</span>
    </div>
  )
}

function StatsGrid({ playerInfo }: { playerInfo: EnkaPlayerInfo | null }) {
  const achievements = playerInfo?.finishAchievementNum ?? "—"
  const abyssFloor = playerInfo
    ? `${playerInfo.towerFloorIndex}-${playerInfo.towerLevelIndex}`
    : "—"

  const stats = [
    { label: "Achievements", value: achievements, icon: "🏆" },
    { label: "Spiral Abyss", value: abyssFloor, icon: "🌀" },
    { label: "Days Active", value: playerStats.daysActive, icon: "📅" },
    { label: "Characters", value: playerStats.charactersOwned, icon: "👥" },
    {
      label: "Imaginarium Theatre",
      value: playerStats.imaginariumTheatre,
      icon: "🎭",
    },
    {
      label: "Stygian Onslaught",
      value: playerStats.stygianOnslaught,
      icon: "⚔️",
    },
  ]

  return (
    <section>
      <SectionTitle>Player Stats</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[#d4a853]/20 bg-[#2a2f42]/60 p-4 text-center"
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-lg font-bold text-[#f5e6b8]">{s.value}</div>
            <div className="text-xs text-[#ece5d8]/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TeamCard({ team }: { team: GenshinTeam }) {
  return (
    <div className="rounded-xl border border-[#d4a853]/20 bg-[#2a2f42]/60 overflow-hidden">
      <div className="px-5 py-3 border-b border-[#d4a853]/20 bg-[#1a1e2e]/50">
        <h3 className="text-lg font-semibold text-[#d4a853]">{team.name}</h3>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {team.characters.map((char, i) => (
          <CharacterCard key={`${char.name}-${i}`} character={char} />
        ))}
      </div>
    </div>
  )
}

function CharacterCard({ character }: { character: GenshinCharacter }) {
  const elementColor = ELEMENT_COLORS[character.element]

  return (
    <div className="rounded-lg border border-[#d4a853]/15 bg-[#1a1e2e] overflow-hidden">
      {/* Character header */}
      <div
        className="relative p-3 flex items-center gap-3"
        style={{ borderBottom: `2px solid ${elementColor}40` }}
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4a853]/30 bg-[#2a2f42] shrink-0">
          <Image
            src={character.icon}
            alt={character.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-[#f5e6b8] truncate">
            {character.name}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#ece5d8]/60">
            <span style={{ color: elementColor }}>{character.element}</span>
            <span>Lv.{character.level}</span>
            <span className="text-[#d4a853]">C{character.constellation}</span>
          </div>
        </div>
      </div>

      {/* Build details */}
      <div className="p-3 space-y-2 text-xs">
        {/* Weapon */}
        <div>
          <span className="text-[#d4a853]/70">Weapon: </span>
          <span className="text-[#ece5d8]/80">
            {character.weapon.name} R{character.weapon.refinement}
          </span>
        </div>

        {/* Talents */}
        <div>
          <span className="text-[#d4a853]/70">Talents: </span>
          <span className="text-[#ece5d8]/80">
            {character.talents.join(" / ")}
          </span>
        </div>

        {/* Artifacts */}
        <div>
          <span className="text-[#d4a853]/70">Artifacts: </span>
          <span className="text-[#ece5d8]/80">
            {character.artifacts.join(", ")}
          </span>
        </div>

        {/* Crit & ER */}
        <div className="flex gap-3 pt-1 border-t border-[#d4a853]/10">
          <span className="text-[#ece5d8]/70">
            <span className="text-[#d4a853]/70">CR: </span>
            {character.critRate}%
          </span>
          <span className="text-[#ece5d8]/70">
            <span className="text-[#d4a853]/70">CD: </span>
            {character.critDmg}%
          </span>
          <span className="text-[#ece5d8]/70">
            <span className="text-[#d4a853]/70">ER: </span>
            {character.er}%
          </span>
        </div>
      </div>
    </div>
  )
}
