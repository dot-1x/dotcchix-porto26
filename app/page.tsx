"use client"

import { useState } from "react"
import { Sidebar, type SectionId } from "@/components/sidebar"
import { AboutSection } from "@/components/sections/about/about-section"
import { HobbiesSection } from "@/components/sections/hobbies/hobbies-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ScrollArea } from "@/components/ui/scroll-area"

const sectionComponents: Record<SectionId, React.ComponentType> = {
  about: AboutSection,
  hobbies: HobbiesSection,
  projects: ProjectsSection,
  contact: ContactSection,
}

const sectionTitles: Record<SectionId, string> = {
  about: "about.me",
  hobbies: "hobbies.stuff",
  projects: "projects.py",
  contact: "contact.md",
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about")

  const ActiveComponent = sectionComponents[activeSection]

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <main className="relative flex-1 overflow-hidden">
        {/* Gradient background: transparent black to blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0b1120]/90 to-[#306998]/20" />

        <ScrollArea className="relative h-full">
          <div className="mx-auto max-w-3xl px-6 py-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">~</span>
              <span>/</span>
              <span className="text-secondary">
                {sectionTitles[activeSection]}
              </span>
            </div>

            {/* Section Content */}
            <ActiveComponent />

            {/* Footer */}
            <div className="mt-12 border-t border-border/30 pt-4">
              <p className="text-center font-mono text-[10px] text-muted-foreground">
                &copy; 2026 dotcchix &mdash; Vibe Coded with Claude Opus 4.6 |{" "}
                <span className="text-primary">Py</span>
                <span className="text-secondary">thon</span> themed
              </p>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  )
}
