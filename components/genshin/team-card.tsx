import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { type GenshinTeam } from "@/lib/genshin-data"
import { GlassCard } from "./primitives"
import { CharacterRow } from "./character-row"

export function TeamCard({
  team,
  defaultOpen = true,
}: {
  team: GenshinTeam
  defaultOpen?: boolean
}) {
  return (
    <GlassCard className="overflow-hidden">
      <details open={defaultOpen} className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold text-[#d4a853]">
              {team.name ?? "Team"}
            </h3>
            {/* Character preview avatars */}
            <div className="flex -space-x-2">
              {team.characters.map((char, i) => (
                <span
                  key={`${char.name}-${i}`}
                  className="relative h-7 w-7 overflow-hidden rounded-full border border-white/20 bg-[#0b0d16]"
                  style={{ zIndex: team.characters.length - i }}
                  title={char.name}
                >
                  <Image
                    src={char.icon}
                    alt={char.name}
                    fill
                    className="object-cover"
                    sizes="28px"
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#ece5d8]/40">
            <span className="hidden sm:inline">
              {team.characters.length} unit
              {team.characters.length > 1 ? "s" : ""}
            </span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
          </div>
        </summary>

        <div className="divide-y divide-white/5 border-t border-white/5">
          {team.characters.map((char, i) => (
            <CharacterRow key={`${char.name}-${i}`} character={char} />
          ))}
        </div>
      </details>
    </GlassCard>
  )
}
