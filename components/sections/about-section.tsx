import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code2, MapPin, Briefcase, GraduationCap } from "lucide-react"

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
  "REST API",
  "GraphQL",
  "Linux",
]

export function AboutSection() {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarFallback className="bg-primary text-2xl font-bold text-primary-foreground">
                DC
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-foreground">dotcchix</h1>
              <p className="font-mono text-sm text-secondary">
                &gt; full_stack_developer
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Indonesia
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" /> Open to work
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bio Card */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Code2 className="h-4 w-4" />
            README.md
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            Hello! I&apos;m a passionate developer who loves building modern web
            applications. I specialize in full-stack development with a focus on
            creating clean, efficient, and scalable solutions.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, and continuously
            learning to stay up-to-date with the ever-evolving tech landscape.
          </p>
        </CardContent>
      </Card>

      {/* Skills Card */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <GraduationCap className="h-4 w-4" />
            skills.json
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            # technologies I work with
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="font-mono text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Briefcase className="h-4 w-4" />
            experience.log
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Full Stack Developer
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                2024 — present
              </span>
            </div>
            <p className="text-xs text-primary">Freelance</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Building web applications for clients using modern technologies
              like React, Next.js, and Python.
            </p>
          </div>
          <Separator className="bg-border/50" />
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                Junior Developer
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                2023 — 2024
              </span>
            </div>
            <p className="text-xs text-primary">Tech Startup</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Developed and maintained frontend features, collaborated with
              design teams, and improved codebase quality.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
