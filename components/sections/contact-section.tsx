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
import { FaDiscord, FaSteam } from "react-icons/fa"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@dot-1x",
    url: "https://github.com/dot-1x",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/nizar-dhiaudin",
    url: "https://www.linkedin.com/in/nizar-dhiaudin-b0aa792ab/",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    handle: "@dotcchix",
    url: "https://discord.com/users/732842920889286687", // Replace with actual Discord profile URL
  },
  {
    icon: FaSteam,
    label: "Steam",
    handle: "notcchix",
    url: "https://steamcommunity.com/profiles/76561199078162163", // Replace with actual Discord profile URL
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@zexdii",
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
            {">"} Contact me via Discord if you need anything
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Separator className="bg-border/30" />
          <a
            href="https://discord.com/users/732842920889286687"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              className="w-full gap-2 bg-primary font-mono text-primary-foreground hover:bg-primary/90"
            >
              <FaDiscord className="h-4 w-4" />
              send_message
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
