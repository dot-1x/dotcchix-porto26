import { Star } from "lucide-react"
import Image from "next/image"
import { type AccountTheater } from "@/lib/genshin-api"
import { ELEMENT_COLORS } from "@/lib/genshin-data"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export function ImaginariumTheaterSection({
  theater,
}: {
  theater: AccountTheater | null
}) {
  if (!theater) {
    return (
      <section className="space-y-4">
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
              <Image
                src="/genshin/Imaginarium_Theater.webp"
                alt="Imaginarium Theater"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              Imaginarium Theater
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <p className="px-6 py-4 text-center text-sm text-muted-foreground">
            No Imaginarium Theater records available.
          </p>
        </Card>
      </section>
    )
  }

  const earnedStars = theater.medal.reduce((sum, m) => sum + m, 0)
  const totalActs = theater.medal.length

  return (
    <section className="space-y-4">
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Image
              src="/genshin/Imaginarium_Theater.webp"
              alt="Imaginarium Theater"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            Imaginarium Theater
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardContent className="px-0">
          <div className="grid grid-cols-1 divide-y divide-border/30 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <TheaterStat
              label="Stars Earned"
              value={`${earnedStars} / ${totalActs}`}
              hint="Medals across acts"
              icon
            />
            <TheaterStat
              label="Acts Cleared"
              value={`${totalActs}`}
              hint="Total acts in run"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 px-6 pb-4 pt-2">
            {theater.medal.map((m, i) => (
              <Star
                key={i}
                className={
                  m
                    ? "h-4 w-4 fill-primary text-primary"
                    : "h-4 w-4 text-muted-foreground/40"
                }
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {theater.characters.length > 0 && (
        <Card className="border-border/50 bg-card py-0 backdrop-blur-sm">
          <CardContent className="px-0">
            <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
              {theater.characters.map((char, i) => {
                const color = char.element
                  ? ELEMENT_COLORS[char.element]
                  : undefined
                return (
                  <div
                    key={`${char.name}-${i}`}
                    className="flex items-center gap-3"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted">
                      <Image
                        src={char.avatar}
                        alt={char.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                      {color && (
                        <span
                          className="absolute left-1 top-1 h-2 w-2 rounded-full ring-2 ring-background"
                          style={{ backgroundColor: color }}
                          title={char.element ?? undefined}
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-foreground">
                        {char.name}
                      </p>
                      <div className="flex items-center gap-2 text-[0.65rem] text-muted-foreground">
                        {char.element && (
                          <span style={{ color }}>{char.element}</span>
                        )}
                        <span>Lv.{char.level}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  )
}

function TheaterStat({
  label,
  value,
  hint,
  icon = false,
}: {
  label: string
  value: string
  hint: string
  icon?: boolean
}) {
  return (
    <div className="px-6 py-6 text-center">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 flex items-center justify-center gap-1 text-2xl font-bold text-foreground">
        {icon && <Star className="h-5 w-5 text-primary" />}
        {value}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
    </div>
  )
}