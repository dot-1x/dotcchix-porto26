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
  Cpu,
  MemoryStick,
  CircuitBoard,
  Zap,
  Gpu,
  FlaskConical,
} from "lucide-react"

const hobbies = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Casual gamer who enjoys casual games. Currently i'm playing Genshin Impact, Honkai: Star Rail, Endfield, CS2 Zombie Escape. \
      Tho I have several AAA games, but I don't really play them no more, only sometimes I play them when I'm bored.",
    tags: ["RPG", "Casual", "FPS"],
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Listening to various of music genres. I had no specific favorite genre, I listens all of em depending on my mood.",
    tags: [
      "Lo-fi",
      "Jazz",
      "Electronic",
      "Reggae",
      "Metal",
      "Classical",
      "Pop",
    ],
  },
  {
    icon: Coffee,
    title: "Coffee",
    description:
      "Yes I love drinking coffee. tho not into trying different coffes, just Americano with less-sugar is all I can drink.",
    tags: ["Americano", "Less-sugar", "No-milk"],
  },
]

const pcSpecs = [
  { icon: Cpu, label: "CPU", value: "AMD Ryzen 7 7800X3D" },
  {
    icon: Gpu,
    label: "GPU",
    value: "Zotac NVIDIA Geforce RTX 5070 Ti Solid SFF OC 16GB GDDR7",
  },
  {
    icon: MemoryStick,
    label: "RAM",
    value: "Adata XPG Blade 32 GB 16x2 5600 MT/s DDR5",
  },
  {
    icon: CircuitBoard,
    label: "Motherboard",
    value: "Gigabyte B850M EAGLE WIFI6E",
  },
  {
    icon: Zap,
    label: "PSU",
    value: "THERMALRIGHT TR-KG850 BLACK 850W 80+ Gold",
  },
]
const homelabs = [
  {
    icon: Cpu,
    label: "CPU",
    value: "Intel(R) Core(TM) i7-3687U (4) @ 3.30 GHz",
  },
  {
    icon: Gpu,
    label: "GPU",
    value: "Integrated GPU",
  },
  {
    icon: MemoryStick,
    label: "RAM",
    value: "8GB DDR3",
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
            # things I enjoy
          </CardDescription>
        </CardHeader>
      </Card>

      {/* PC Specs */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
              <Cpu className="h-4 w-4 text-primary" />
            </div>
            PC Specs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {pcSpecs.map((spec) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.label}
                className="flex items-start gap-2 rounded-md border border-border/30 bg-muted/30 px-3 py-2"
              >
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-secondary">{spec.label}:</span>{" "}
                  {spec.value}
                </p>
              </div>
            )
          })}
        </CardContent>
      </Card>
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
              <FlaskConical className="h-4 w-4 text-primary" />
            </div>
            Home Labs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {homelabs.map((spec) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.label}
                className="flex items-start gap-2 rounded-md border border-border/30 bg-muted/30 px-3 py-2"
              >
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-secondary">{spec.label}:</span>{" "}
                  {spec.value}
                </p>
              </div>
            )
          })}
        </CardContent>
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
