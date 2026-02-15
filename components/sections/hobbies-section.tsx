import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gamepad2,
  Music,
  BookOpen,
  Coffee,
  Camera,
  Dumbbell,
} from "lucide-react"

const hobbies = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Love playing RPGs and strategy games. Currently into indie titles and competitive shooters.",
    tags: ["RPG", "Strategy", "Indie"],
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Listening to lo-fi beats while coding. Also enjoy exploring different genres from jazz to electronic.",
    tags: ["Lo-fi", "Jazz", "Electronic"],
  },
  {
    icon: BookOpen,
    title: "Reading",
    description:
      "Always reading tech blogs, documentation, and occasionally sci-fi novels for creative inspiration.",
    tags: ["Tech blogs", "Sci-fi", "Documentation"],
  },
  {
    icon: Coffee,
    title: "Coffee",
    description:
      "A true coffee enthusiast. Exploring different brewing methods from pour-over to espresso.",
    tags: ["Pour-over", "Espresso", "Latte art"],
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing urban landscapes and street photography during weekend walks.",
    tags: ["Street", "Urban", "Landscape"],
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description:
      "Staying active with calisthenics and running. Believe in a healthy body for a productive mind.",
    tags: ["Calisthenics", "Running", "Yoga"],
  },
]

export function HobbiesSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Gamepad2 className="h-4 w-4" />
            hobbies.stuff
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            # things I enjoy outside of coding
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Hobbies Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon
          return (
            <Card
              key={hobby.title}
              className="border-border/50 bg-card backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm text-foreground">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {hobby.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {hobby.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/30 font-mono text-[10px] text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
