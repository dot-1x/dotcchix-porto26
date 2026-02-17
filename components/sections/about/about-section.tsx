import { Avatar } from "@/components/ui/avatar"
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
import Image from "next/image"
import type { ExperienceType } from "./about"
import { experiences, educations } from "./about"

const skills = [
  "Python",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Docker",
  "Git",
  "REST API",
  "FastAPI",
  "TensorFlow",
  "Linux",
]

function ExperienceItem({
  title,
  company,
  duration,
  description,
  key,
}: ExperienceType) {
  return (
    <div key={key}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {duration}
        </span>
      </div>
      <p className="text-xs text-primary">{company}</p>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      <Separator className="bg-border/50 mt-2" />
    </div>
  )
}

export function AboutSection() {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <Image
                src="https://cdn.discordapp.com/avatars/732842920889286687/7a3da245a49f565d5d252935f0eec388.webp"
                alt="dotcchix-avatar"
                width={128}
                height={128}
              />
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-foreground">
                dotcchix | Zex
              </h1>
              <p className="font-mono text-sm text-secondary">
                &gt; ML_Enthusiast
              </p>
              <p className="font-mono text-sm text-secondary">
                &gt; Back_End_Developer
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Indonesia
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
          <p>Hello, I&apos;m Nizar. my IRL friends often call me Zar.</p>
          <p>
            If you know me from the internet, you probably know me as{" "}
            <span className="text-primary">Zex.</span> ||{" "}
            <span className="text-secondary">dotcchix</span>.
          </p>
          <p>
            I&apos;m a final-year Informatics student with interest in backend
            development, especially using Python and TypeScript. I&apos;ve
            worked on several projects including Python-based Discord bots and
            small backend services.
          </p>
          <p>
            Right now, I&apos;m focused on improving my skills in machine
            learning specially building my own chatbot using open source models
          </p>
          <p>
            A little note here, i'm not into frontend development, so this
            portfolio was vibe coded with Claude Opus 4.6 with a little code I
            wrote.
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
          {experiences.map((v, idx) => ExperienceItem({ ...v, key: idx }))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <GraduationCap className="h-4 w-4" />
            education.edu
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {educations.map((v, idx) => ExperienceItem({ ...v, key: idx }))}
        </CardContent>
      </Card>
    </div>
  )
}
