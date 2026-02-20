import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Cpu, FlaskConical } from "lucide-react"
import { hobbies, pcSpecs, homelabs } from "./hobbies"

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
