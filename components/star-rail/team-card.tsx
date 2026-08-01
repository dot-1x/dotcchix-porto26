import Image from "next/image"
import { ChevronDown, Target } from "lucide-react"
import { type DisplayTeam } from "@/lib/star-rail-api"
import { formatScore } from "@/lib/star-rail-data"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CharacterRow } from "./character-row"

export function TeamCard({
  team,
  defaultOpen = true,
}: {
  team: DisplayTeam
  defaultOpen?: boolean
}) {
  return (
    <Card className="gap-0 overflow-hidden border-border/50 bg-card backdrop-blur-sm">
      <details open={defaultOpen} className="group">
        <summary className="flex flex-col gap-2 cursor-pointer list-none px-5 py-3.5 transition-colors hover:bg-accent/30 [&::-webkit-details-marker]:hidden">
          <div className="flex items-center justify-between gap-3">
            <h3 className="line-clamp-1 text-sm font-semibold text-primary">
              {team.name ?? "Team"}
            </h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {team.score != null && (
                <span className="flex items-center gap-1 font-mono">
                  <Target className="h-3 w-3" />
                  {formatScore(team.score)}
                </span>
              )}
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
            </div>
          </div>
          <div className="flex -space-x-2">
            {team.characters.map((char, i) => (
              <span
                key={`${char.name}-${i}`}
                className="relative h-7 w-7 overflow-hidden rounded-full border border-border bg-background ring-2 ring-background"
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
        </summary>

        <Separator className="bg-border/50" />

        <div className="divide-y divide-border/30">
          {team.characters.map((char, i) => (
            <CharacterRow key={`${char.name}-${i}`} character={char} />
          ))}
        </div>
      </details>
    </Card>
  )
}
