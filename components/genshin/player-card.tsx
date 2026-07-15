import { Sparkles } from "lucide-react"
import { type AccountInfo } from "@/lib/genshin-api"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"

export function PlayerCard({ info }: { info: AccountInfo | null }) {
  const nickname = info?.nickname ?? "dotcchix"
  const ar = info?.level ?? 60
  const uid = info?.uid ?? "—"
  const headIcon = info?.game_head_icon

  return (
    <Card className="border-border/50 bg-card backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Avatar size="lg" className="h-20 w-20 border-2 border-primary">
            {headIcon ? (
              <AvatarImage src={headIcon} alt={nickname} />
            ) : (
              <AvatarFallback className="bg-muted">
                <Sparkles className="h-8 w-8 text-primary" />
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-foreground">{nickname}</h2>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              <Badge variant="secondary" className="font-mono text-xs">
                AR {ar}
              </Badge>
              <Badge variant="outline" className="font-mono text-xs">
                UID {uid}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}