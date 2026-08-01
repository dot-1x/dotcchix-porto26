import Image from "next/image"
import { Star, Timer } from "lucide-react"
import {
  type SrCharacter,
  type SrEndgame,
  type DisplayTeam,
  buildCharacterIndex,
  resolveNodeChar,
} from "@/lib/star-rail-api"
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TeamCard } from "./team-card"

export function EndgameSection({
  title,
  icon,
  data,
  characters,
}: {
  title: string
  icon: string
  data: SrEndgame | null
  characters: SrCharacter[]
}) {
  if (!data || data.nodes.length === 0) {
    return (
      <section className="space-y-4">
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
              <Image
                src={icon}
                alt={title}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              {title}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <p className="px-6 py-4 text-center text-sm text-muted-foreground">
            No {title} records available.
          </p>
        </Card>
      </section>
    )
  }

  const index = buildCharacterIndex(characters)

  const teams: DisplayTeam[] = data.nodes.map((node, i) => ({
    name: `Node ${i + 1}`,
    characters: node.characters.map((c) => resolveNodeChar(c, index)),
    score: node.score ?? null,
  }))

  return (
    <section className="space-y-4">
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Image
              src={icon}
              alt={title}
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            {title}
          </CardTitle>
          <CardAction>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs">
                {data.max_floor}
              </Badge>
              {data.round_num != null && (
                <Badge variant="outline" className="font-mono text-xs">
                  <Timer className="h-3 w-3" />
                  {data.round_num}
                </Badge>
              )}
              <Badge variant="secondary" className="font-mono text-xs">
                <Star className="h-3 w-3" />
                {data.total_star}
              </Badge>
            </div>
          </CardAction>
        </CardHeader>
      </Card>

      <div className="space-y-3">
        {teams.map((team, i) => (
          <TeamCard
            key={team.name ?? i}
            team={team}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </section>
  )
}
