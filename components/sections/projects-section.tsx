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
    title: "portfolio-v2",
    description:
      "A modern developer portfolio built with Next.js and Tailwind CSS. Features a file-explorer inspired sidebar navigation with Python-themed colors.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    stars: 12,
    link: "#",
    github: "#",
    status: "active",
  },
  {
    title: "task-manager-api",
    description:
      "RESTful API built with Python Flask for managing tasks and projects. Includes authentication, CRUD operations, and real-time notifications.",
    tech: ["Python", "Flask", "PostgreSQL", "Redis"],
    stars: 28,
    link: "#",
    github: "#",
    status: "active",
  },
  {
    title: "weather-cli",
    description:
      "A command-line weather application written in Python that fetches real-time weather data and displays it in a beautiful terminal UI.",
    tech: ["Python", "Rich", "OpenWeather API"],
    stars: 45,
    link: null,
    github: "#",
    status: "completed",
  },
  {
    title: "chat-app",
    description:
      "Real-time chat application with rooms, direct messaging, and file sharing. Built as a full-stack project with WebSocket support.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    stars: 8,
    link: "#",
    github: "#",
    status: "wip",
  },
  {
    title: "blog-engine",
    description:
      "A markdown-based blog engine with syntax highlighting, SEO optimization, and RSS feed support.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    stars: 19,
    link: "#",
    github: "#",
    status: "completed",
  },
]

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-400 border-green-500/30",
  completed: "bg-primary/10 text-primary border-primary/30",
  wip: "bg-secondary/10 text-secondary border-secondary/30",
}

const statusLabels: Record<string, string> = {
  active: "Active",
  completed: "Completed",
  wip: "WIP",
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
