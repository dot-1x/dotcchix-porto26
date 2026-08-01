import { Trophy, CalendarDays, Users } from "lucide-react"
import { type SrInfo } from "@/lib/star-rail-api"
import { Card, CardContent } from "@/components/ui/card"

export function StatsRow({ info }: { info: SrInfo | null }) {
  const stats = [
    {
      label: "Achievements",
      value: info?.achievement_num ?? "—",
      icon: Trophy,
    },
    {
      label: "Days Active",
      value: info?.active_days ?? "—",
      icon: CalendarDays,
    },
    {
      label: "Characters",
      value: info?.total_characters ?? "—",
      icon: Users,
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => {
        const Icon = s.icon
        return (
          <Card key={s.label} className="border-border/50 bg-card py-0 backdrop-blur-sm">
            <CardContent className="px-4 py-3">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <div className="truncate text-base font-bold text-foreground">
                    {s.value}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
