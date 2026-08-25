"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Sparkles, Star, Loader2 } from "lucide-react"
import {
  type AccountCharacter,
  type GenshinCharacterDetail,
} from "@/lib/genshin-api"
import { ELEMENT_COLORS } from "@/lib/genshin-data"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ElementIcon } from "./element-icon"
import { cn } from "@/lib/utils"

function stripColorTags(input: string): string {
  return input.replace(/<color[^>]*>/g, "").replace(/<\/color>/g, "")
}

function StatGrid({ stats }: { stats: GenshinCharacterDetail["final_stats"] }) {
  if (!stats || stats.length === 0) return null
  // keep order roughly as API returns; show in 2 columns
  const left = stats.slice(0, Math.ceil(stats.length / 2))
  const right = stats.slice(Math.ceil(stats.length / 2))
  return (
    <div className="grid grid-cols-2 gap-3">
      {[left, right].map((col, ci) => (
        <div key={ci} className="flex flex-col gap-1">
          {col.map((s) => (
            <span
              key={s.name}
              className="flex items-baseline justify-between gap-2 text-xs leading-tight"
            >
              <span className="text-muted-foreground">
                {s.name.replace(/\u00a0/g, " ")}
              </span>
              <span className="font-mono font-medium text-foreground">
                {s.value}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export function CharacterDetailDialog({
  character,
  open,
  onOpenChange,
}: {
  character: AccountCharacter | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [detail, setDetail] = useState<GenshinCharacterDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!character || !open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reset on close is intentional
      setDetail(null)
      setError(null)
      return
    }
    // character.id is the detail endpoint key
    if (!character.id) {
      setError("Missing character id")
      return
    }
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`https://hoyo.dotcchix.dev/api/gi/characters/${character.id}`, {
      cache: "no-store",
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to fetch (${res.status})`)
        const json = (await res.json()) as GenshinCharacterDetail
        if (!cancelled) setDetail(json)
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [character, open])

  const fallback = character
  const data = detail ?? null
  const display = data ?? fallback
  const color =
    display?.element ? ELEMENT_COLORS[display.element] : undefined

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] gap-0 overflow-hidden border-border/50 bg-popover p-0 sm:max-w-2xl">
        {/* Accessible title/description (hidden visually but needed for a11y) */}
        <DialogHeader className="sr-only">
          <DialogTitle>{display?.name ?? "Character details"}</DialogTitle>
          <DialogDescription>
            Detailed stats, weapon and constellations for {display?.name}
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-16">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <p className="font-mono text-xs text-muted-foreground">
              Loading {character?.name}...
            </p>
          </div>
        ) : error ? (
          <div className="px-6 py-10 text-center">
            <p className="text-sm font-medium text-destructive">{error}</p>
            {fallback && (
              <p className="mt-2 text-xs text-muted-foreground">
                Showing cached roster data for {fallback.name}
              </p>
            )}
          </div>
        ) : display ? (
          <ScrollArea className="max-h-[85vh]">
            <div className="space-y-5 p-6">
              {/* Header */}
              <div className="flex gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-muted">
                  <Image
                    src={display.icon}
                    alt={display.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {color && (
                    <span
                      className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full ring-2 ring-background"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold leading-none text-foreground">
                      {display.name}
                    </h2>
                    {display.element && (
                      <span
                        className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/40 px-2 py-0.5 text-xs"
                        style={{ color }}
                      >
                        <ElementIcon element={display.element} size={14} />
                        {display.element}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      Lv.{display.level}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-primary/40 text-primary font-mono text-xs"
                    >
                      C{display.actived_constellation_num}
                    </Badge>
                    {data?.rarity && (
                      <span className="inline-flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: data.rarity }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </span>
                    )}
                    {!data?.rarity && fallback?.rarity && (
                      <span className="inline-flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: fallback.rarity }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            />
                          )
                        )}
                      </span>
                    )}
                  </div>

                  {/* Weapon quick line */}
                  {data?.weapon ? (
                    <div className="mt-3 flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2">
                      <Image
                        src={data.weapon.icon}
                        alt={data.weapon.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 shrink-0 object-contain"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {data.weapon.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Lv.{data.weapon.level}
                          {data.weapon.refine != null &&
                            ` · R${data.weapon.refine}`}
                        </p>
                      </div>
                    </div>
                  ) : fallback?.weapon ? (
                    <div className="mt-3 flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2">
                      <Image
                        src={fallback.weapon.icon}
                        alt={fallback.weapon.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 shrink-0 object-contain"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">
                          {fallback.weapon.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Lv.{fallback.weapon.level}
                          {fallback.weapon.refine != null &&
                            ` · R${fallback.weapon.refine}`}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Stats */}
              {data?.final_stats && data.final_stats.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Stats
                  </h3>
                  <div className="rounded-lg border border-border/50 bg-card px-4 py-3">
                    <StatGrid stats={data.final_stats} />
                    {/* Highlight elemental DMG bonus */}
                    {(() => {
                      const bonus = data.final_stats.find(
                        (s) =>
                          s.name.replace(/\u00a0/g, " ").endsWith("DMG Bonus") &&
                          s.value !== "0.0%"
                      )
                      if (!bonus) return null
                      return (
                        <div className="mt-2 flex items-center justify-between border-t border-border/40 pt-2 text-xs">
                          <span className="text-muted-foreground">
                            {bonus.name
                              .replace(/\u00a0/g, " ")
                              .replace(" DMG Bonus", "")}
                          </span>
                          <span className="font-mono font-medium text-foreground">
                            {bonus.value}
                          </span>
                        </div>
                      )
                    })()}
                  </div>
                </div>
              )}

              {/* Artifact sets */}
              {data?.artifact_sets && data.artifact_sets.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Artifact Sets
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {data.artifact_sets.map((set, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="rounded-md border border-secondary/20 bg-secondary px-2.5 py-1 text-xs font-normal text-secondary-foreground"
                      >
                        {set}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Constellations */}
              {data?.constellations && data.constellations.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Constellations
                  </h3>
                  <div className="grid gap-2">
                    {data.constellations
                      .slice()
                      .sort((a, b) => a.pos - b.pos)
                      .map((c) => (
                        <div
                          key={c.id}
                          className={cn(
                            "flex gap-3 rounded-lg border px-3 py-3 transition-colors",
                            c.is_actived
                              ? "border-primary/40 bg-primary/10"
                              : "border-border/40 bg-muted/20 opacity-80"
                          )}
                        >
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border/30 bg-background">
                            <Image
                              src={c.icon}
                              alt={c.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                            <span
                              className={cn(
                                "absolute bottom-0 right-0 rounded-tl-md px-1 py-0.5 font-mono text-[0.6rem] leading-none",
                                c.is_actived
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              )}
                            >
                              C{c.pos}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="truncate text-sm font-medium text-foreground">
                                {c.name}
                              </p>
                              {c.is_actived && (
                                <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              )}
                            </div>
                            <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                              {stripColorTags(c.effect)}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {!data && fallback && (
                <p className="text-center font-mono text-xs text-muted-foreground">
                  Detailed stats unavailable — showing roster data only.
                </p>
              )}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 px-6 py-16">
            <Sparkles className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No data</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
