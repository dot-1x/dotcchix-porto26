import Image from "next/image"
import { ELEMENT_COLORS } from "@/lib/star-rail-data"
import { type DisplayCharacter } from "@/lib/star-rail-api"
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

export function CharacterRow({ character }: { character: DisplayCharacter }) {
  const color = character.element
    ? ELEMENT_COLORS[character.element]
    : undefined

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
            {character.eidolon != null && (
              <span className="text-primary">E{character.eidolon}</span>
            )}
          </div>
        </div>
      </div>

      {/* Detail chips */}
      <div className="flex flex-1 flex-wrap items-stretch gap-2">
        <DetailChip label="Light Cone" className="min-w-[16rem] flex-1">
          {character.lightCone ? (
            <span className="flex items-center gap-2">
              <Image
                src={character.lightCone.icon}
                alt={character.lightCone.name}
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 object-contain"
              />
              <span className="min-w-0 flex-1 truncate text-sm">
                {character.lightCone.name}
              </span>
              <Badge variant="secondary" className="font-mono text-[0.6rem]">
                Lv.{character.lightCone.level}
              </Badge>
            </span>
          ) : (
            "—"
          )}
        </DetailChip>
      </div>
    </div>
  )
}
