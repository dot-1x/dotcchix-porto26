"use client"

import { useState } from "react"
import Image from "next/image"
import {
  type AccountStygian,
  type DisplayTeam,
  toStygianDisplayChar,
} from "@/lib/genshin-api"
import {
  formatClearTime,
  stygianClearImage,
  stygianDifficultyLabel,
} from "@/lib/genshin-data"
import { cn } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TeamCard } from "./team-card"

export function StygianOnslaughtSection({
  stygian,
}: {
  stygian: AccountStygian | null
}) {
  const [cycleIdx, setCycleIdx] = useState(0)

  if (!stygian || stygian.cycles.length === 0) {
    return (
      <section className="space-y-4">
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
              <Image
                src="/genshin/stygian.png"
                alt="Stygian Onslaught"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              Stygian Onslaught
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <p className="px-6 py-4 text-center text-sm text-muted-foreground">
            No Stygian Onslaught records available.
          </p>
        </Card>
      </section>
    )
  }

  const cycle = stygian.cycles[cycleIdx]
  const difficulty = stygianDifficultyLabel(cycle.difficulty)
  const totalTime = cycle.total_clear_time
  const clearImage = stygianClearImage(cycle.difficulty)

  const teams: DisplayTeam[] = cycle.challenges.map((c) => ({
    name: c.name,
    characters: c.characters.map(toStygianDisplayChar),
    clearTime: c.second,
  }))

  return (
    <section className="space-y-4">
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Image
              src="/genshin/stygian.png"
              alt="Stygian Onslaught"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            Stygian Onslaught
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Cycle selector */}
      {stygian.cycles.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {stygian.cycles.map((c, i) => (
            <button
              key={c.schedule_id}
              type="button"
              onClick={() => setCycleIdx(i)}
              className={cn(
                "rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
                i === cycleIdx
                  ? "border-primary/60 bg-primary/10 text-foreground"
                  : "border-border/50 bg-card/50 text-muted-foreground hover:text-foreground",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      <Card className="overflow-hidden border-border/50 bg-card backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {clearImage && (
              <div className="relative h-32 w-full sm:h-24 sm:w-24">
                <Image
                  src={clearImage}
                  alt={difficulty}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, 96px"
                />
              </div>
            )}

            <Separator orientation="horizontal" className="bg-border/50 sm:hidden" />

            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {cycle.name}
                  </div>
                  <div className="mt-1 text-2xl font-bold text-foreground">
                    {difficulty}
                  </div>
                </div>
              </div>

              <Separator
                orientation="vertical"
                className="hidden h-12 bg-border/50 sm:block"
              />

              <div className="text-center sm:text-right">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Total Clear Time
                  </div>
                  <div className="mt-1 text-2xl font-bold text-foreground">
                    {formatClearTime(totalTime)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {teams.map((team, i) => (
          <TeamCard key={team.name ?? i} team={team} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  )
}