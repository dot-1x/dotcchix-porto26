import Image from "next/image"
import { ELEMENT_COLORS } from "@/lib/genshin-data"
import { type DisplayCharacter } from "@/lib/genshin-api"
import { Badge } from "@/components/ui/badge"

function DetailChip({
  label,
  children,
  className = "",
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-lg border border-border/50 bg-muted/30 px-3 py-1.5 ${className}`}
    >
      <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 text-xs text-foreground">{children}</div>
    </div>
  )
}

function normName(n: string) {
  return n.replace(/\u00a0/g, " ")
}

export function CharacterRow({ character }: { character: DisplayCharacter }) {
  const color = character.element
    ? ELEMENT_COLORS[character.element]
    : undefined

  const statMap = new Map(
    (character.finalStats ?? []).map((s) => [normName(s.name), s.value]),
  )
  const col1: { label: string; key: string }[] = [
    { label: "MAX HP", key: "Max HP" },
    { label: "ATK", key: "ATK" },
    { label: "EM", key: "Elemental Mastery" },
  ]
  const col2: { label: string; key: string }[] = [
    { label: "CR", key: "CRIT Rate" },
    { label: "CD", key: "CRIT DMG" },
    { label: "ER", key: "Energy Recharge" },
  ]
  const hasStats =
    character.finalStats && character.finalStats.length > 0
  const elemBonus = character.finalStats?.find(
    (s) => normName(s.name).endsWith("DMG Bonus") && s.value !== "0.0%",
  )

  const sets = character.artifactSets ?? []

  return (
    <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
      {/* Portrait + identity */}
      <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted">
          <Image
            src={character.icon}
            alt={character.name}
            fill
            className="object-cover"
            sizes="56px"
          />
          {color && (
            <span
              className="absolute left-1 top-1 h-2.5 w-2.5 rounded-full ring-2 ring-background"
              style={{ backgroundColor: color }}
              title={character.element ?? undefined}
            />
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {character.name}
          </p>
          <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
            {character.element && (
              <span style={{ color }}>{character.element}</span>
            )}
            <span>Lv.{character.level}</span>
            {character.constellation != null && (
              <span className="text-primary">C{character.constellation}</span>
            )}
          </div>
        </div>
      </div>

      {/* Detail chips */}
      <div className="flex flex-1 flex-wrap items-stretch gap-2">
        <DetailChip label="Weapon" className="min-w-[16rem] flex-1">
          {character.weapon ? (
            <span className="flex items-center gap-2">
              <Image
                src={character.weapon.icon}
                alt={character.weapon.name}
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 object-contain"
              />
              <span className="min-w-0 flex-1 truncate text-sm">
                {character.weapon.name}
              </span>
              <Badge variant="secondary" className="font-mono text-[0.6rem]">
                Lv.{character.weapon.level}
              </Badge>
            </span>
          ) : (
            "—"
          )}
        </DetailChip>

        {sets.length > 0 && (
          <DetailChip label="Artifacts" className="min-w-[12rem] flex-1">
            <div className="flex flex-col gap-0.5">
              {sets.map((set, i) => (
                <span
                  key={i}
                  className="truncate text-[0.7rem] leading-tight text-foreground"
                >
                  {set}
                </span>
              ))}
            </div>
          </DetailChip>
        )}

        {hasStats && (
          <DetailChip label="Character Stats" className="min-w-[15rem] flex-1">
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
              {[col1, col2].map((col, ci) => (
                <div key={ci} className="flex flex-col gap-0.5">
                  {col.map((s) => (
                    <span
                      key={s.key}
                      className="flex items-baseline justify-between gap-2 text-[0.7rem] leading-tight"
                    >
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-mono text-foreground">
                        {statMap.get(s.key) ?? "—"}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {elemBonus && (
              <div className="mt-1 flex items-baseline justify-between gap-2 border-t border-border/40 pt-1 text-[0.7rem]">
                <span className="text-muted-foreground">
                  {normName(elemBonus.name).replace(" DMG Bonus", "")}
                </span>
                <span className="font-mono text-foreground">
                  {elemBonus.value}
                </span>
              </div>
            )}
          </DetailChip>
        )}
      </div>
    </div>
  )
}