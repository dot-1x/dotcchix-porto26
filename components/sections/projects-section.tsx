import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FolderGit2, ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "SIAKAD PPMAC",
    description:
      "CMS Dashboard for managing a school core needs. such as managing students, teachers, courses, and schedules. \
      Fully built with Next.js.",
    tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    stars: 0,
    link: "#",
    github: "#",
    status: "wip",
  },
  {
    title: "Sedayu Vibes",
    description:
      "Website projects for my Campus Community Service Program. this website provides information about village news, population, and their public services.",
    tech: ["TypeScript", "Next.js", "Prisma"],
    stars: 0,
    link: "#",
    github: "#",
    status: "completed",
  },
  {
    title: "NHTools",
    description:
      "Web based tools to help players of Ninja Heroes: New Era, a mobile game by Kagehero Studio. \
      The tools include deploy attribute calculator, ninja database, and other small tools to help players in the game.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    stars: 0,
    link: "#",
    github: "#",
    status: "archived",
  },
  {
    title: "NH Socket Bot",
    description:
      "Python CLI tool that connects to Ninja Heroes game server using WebSocket to provide various features \
      such as auto farming, auto daily, and other automation to help myself keep up with the game without opening it.",
    tech: ["Python", "WebSocket", "httpx"],
    stars: 0,
    link: null,
    github: "#",
    status: "completed",
  },
  {
    title: "NH Cord",
    description:
      "Discord bot for Ninja Heroes community server, providing various features such as server management, minigames for in-game rewards, \
      and other fun features to engage the community.",
    tech: ["Python", "Py-Cord"],
    stars: 0,
    link: null,
    github: "#",
    status: "archived",
  },
]

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-400 border-green-500/30",
  completed: "bg-primary/10 text-primary border-primary/30",
  wip: "bg-secondary/10 text-secondary border-secondary/30",
  archived: "bg-muted/10 text-muted-foreground border-muted/30",
}

const statusLabels: Record<string, string> = {
  active: "Active",
  completed: "Completed",
  wip: "WIP",
  archived: "Archived",
}

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <FolderGit2 className="h-4 w-4" />
            projects.py
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            # a collection of things I&apos;ve built
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="border-border/50 bg-card backdrop-blur-sm transition-all duration-200 hover:border-primary/50"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index).padStart(2, "0")}
                  </span>
                  <CardTitle className="font-mono text-sm text-foreground">
                    {project.title}
                  </CardTitle>
                </div>
                <Badge
                  variant="outline"
                  className={`text-[10px] ${statusColors[project.status]}`}
                >
                  {statusLabels[project.status]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="font-mono text-[10px]"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <Separator className="bg-border/30" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 text-secondary" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1 text-xs text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1 text-xs text-primary hover:text-primary"
                      asChild
                    >
                      <a href={project.link}>
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
