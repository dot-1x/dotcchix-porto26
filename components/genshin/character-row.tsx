import Image from "next/image"
import { ELEMENT_COLORS, type GenshinCharacter } from "@/lib/genshin-data"
import { DetailChip } from "./primitives"

export function CharacterRow({ character }: { character: GenshinCharacter }) {
  const color = ELEMENT_COLORS[character.element]

  return (
    <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
      {/* Portrait + identity */}
      <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${color}66, transparent 70%)`,
            }}
          />
          <Image
            src={character.icon}
            alt={character.name}
            fill
            className="object-cover"
            sizes="56px"
          />
          <span
            className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full ring-2 ring-black/40"
            style={{ backgroundColor: color }}
            title={character.element}
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#f5e6b8]">
            {character.name}
          </p>
          <div className="mt-0.5 flex items-center gap-2 text-[0.7rem] text-[#ece5d8]/55">
            <span style={{ color }}>{character.element}</span>
            <span>Lv.{character.level}</span>
            <span className="text-[#d4a853]">C{character.constellation}</span>
          </div>
        </div>
      </div>

      {/* Detail chips */}
      <div className="flex flex-1 flex-wrap items-stretch gap-2">
        {/* Weapon */}
        <DetailChip label="Weapon" className="min-w-[11rem] flex-1">
          <span className="flex items-center gap-1.5 text-[#ece5d8]/85">
            <span className="truncate">{character.weapon.name}</span>
            <span className="rounded bg-[#d4a853]/15 px-1.5 py-0.5 text-[0.65rem] font-semibold text-[#d4a853]">
              R{character.weapon.refinement}
            </span>
          </span>
        </DetailChip>

        {/* Artifacts */}
        <DetailChip label="Artifacts" className="min-w-[10rem] flex-1">
          <span className="truncate text-[#ece5d8]/85">
            {character.artifacts.join(", ")}
          </span>
        </DetailChip>

        {/* Talents */}
        <DetailChip label="Talents">
          <span className="text-[#ece5d8]/85">
            {character.talents.join(" / ")}
          </span>
        </DetailChip>

        {/* Crit / ER */}
        <DetailChip label="CR / CD / ER">
          <span className="text-[#ece5d8]/85">
            {character.critRate} / {character.critDmg} / {character.er}
          </span>
        </DetailChip>
      </div>
    </div>
  )
}
