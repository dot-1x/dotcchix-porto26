"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  User,
  Gamepad2,
  FolderGit2,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

export type SectionId = "about" | "hobbies" | "projects" | "contact"

interface SidebarProps {
  activeSection: SectionId
  onSectionChange: (section: SectionId) => void
}

const sections: {
  id: SectionId
  label: string
  icon: React.ComponentType<{ className?: string }>
}[] = [
  { id: "about", label: "about.me", icon: User },
  { id: "hobbies", label: "hobbies.stuff", icon: Gamepad2 },
  { id: "projects", label: "projects.py", icon: FolderGit2 },
  { id: "contact", label: "contact.md", icon: Mail },
]

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r border-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-60",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-5">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                {"</>"}
              </span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-sidebar-foreground">
                portfolio
              </h2>
              <p className="text-[10px] text-muted-foreground font-mono">
                ~/dotcchix
              </p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">
              {"</>"}
            </span>
          </div>
        )}
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-3">
        {sections.map((section) => {
          const Icon = section.icon
          const isActive = activeSection === section.id

          const button = (
            <Button
              key={section.id}
              variant="ghost"
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "w-full justify-start gap-3 font-mono text-sm transition-all",
                collapsed && "justify-center px-2",
                isActive
                  ? "bg-sidebar-accent text-secondary font-semibold border-l-2 border-secondary rounded-l-none"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0",
                  isActive ? "text-secondary" : "text-muted-foreground",
                )}
              />
              {!collapsed && <span>{section.label}</span>}
            </Button>
          )

          if (collapsed) {
            return (
              <Tooltip key={section.id} delayDuration={0}>
                <TooltipTrigger asChild>{button}</TooltipTrigger>
                <TooltipContent side="right" className="font-mono text-xs">
                  {section.label}
                </TooltipContent>
              </Tooltip>
            )
          }

          return button
        })}
      </nav>

      <Separator className="bg-sidebar-border" />

      {/* Footer */}
      <div className="px-2 py-3">
        {!collapsed && (
          <p className="mb-2 px-3 text-[10px] text-muted-foreground font-mono">
            # built with Claude Opus 4.6
          </p>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full justify-center text-muted-foreground hover:text-sidebar-foreground"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </aside>
  )
}
