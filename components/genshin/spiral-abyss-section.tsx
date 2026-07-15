import Image from "next/image"
import { Star } from "lucide-react"
import {
  type AccountAbyss,
  type AccountCharacter,
  type DisplayTeam,
  buildCharacterIndex,
  resolveAbyssChar,
} from "@/lib/genshin-api"
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TeamCard } from "./team-card"

export function SpiralAbyssSection({
  abyss,
  characters,
}: {
  abyss: AccountAbyss | null
  characters: AccountCharacter[]
}) {
  if (!abyss || abyss.floors.length === 0) {
    return (
      <section className="space-y-4">
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
              <Image
                src="/genshin/spiral.webp"
                alt="Spiral Abyss"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              Spiral Abyss
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <p className="px-6 py-4 text-center text-sm text-muted-foreground">
            No Spiral Abyss records available.
          </p>
        </Card>
      </section>
    )
  }

  const index = buildCharacterIndex(characters)
  const floor = abyss.floors[abyss.floors.length - 1]

  return (
    <section className="space-y-4">
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Image
              src="/genshin/spiral.webp"
              alt="Spiral Abyss"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            Spiral Abyss
          </CardTitle>
          <CardAction>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs">
                Floor {abyss.max_floor}
              </Badge>
              <Badge variant="secondary" className="font-mono text-xs">
                <Star className="h-3 w-3" />
                {abyss.total_star}
              </Badge>
            </div>
          </CardAction>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        {floor.levels.map((level) => {
          const teams: DisplayTeam[] = level.battles.map(
            (battle, half) => ({
              name: half === 0 ? "First Half" : "Second Half",
              characters: battle.map((c) => resolveAbyssChar(c, index)),
            }),
          )
          return (
            <div key={level.chamber} className="space-y-3">
              <div className="flex items-center gap-3 px-1">
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  Chamber {level.chamber}
                </h3>
                <Separator className="flex-1 bg-border/30" />
                <Badge variant="outline" className="font-mono text-xs">
                  <Star className="h-3 w-3" />
                  {level.star}
                </Badge>
              </div>
              <div className="space-y-3">
                {teams.map((team, i) => (
                  <TeamCard
                    key={team.name ?? i}
                    team={team}
                    defaultOpen={i === 0}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}