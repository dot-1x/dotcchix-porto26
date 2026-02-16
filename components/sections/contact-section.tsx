"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
} from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@dotcchix",
    url: "https://github.com/dot-1x",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/dotcchix",
    url: "https://www.linkedin.com/in/nizar-dhiaudin-b0aa792ab/",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@dotcchix",
    url: "https://twitter.com/zexdii",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "zex@dotcchix.dev",
    url: "mailto:zex@dotcchix.dev",
  },
]

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    alert(`Thanks ${name}! Message received.`)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <MessageSquare className="h-4 w-4" />
            contact.md
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            # let&apos;s connect and build something together
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Social Links */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="font-mono text-sm text-foreground">
            ## Social Links
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {social.label}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {social.handle}
                  </p>
                </div>
              </a>
            )
          })}
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="font-mono text-sm text-foreground">
            ## Send a Message
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            {">"} Fill in the fields below and I&apos;ll get back to you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your_name"
                required
                className="w-full rounded-md border border-border bg-muted/30 px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-md border border-border bg-muted/30 px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-muted-foreground">
                message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello! I'd like to..."
                rows={4}
                required
                className="w-full resize-none rounded-md border border-border bg-muted/30 px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Separator className="bg-border/30" />
            <Button
              type="submit"
              className="w-full gap-2 bg-primary font-mono text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              send_message()
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
