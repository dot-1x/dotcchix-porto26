"use client"

import { useState } from "react"
import Image from "next/image"
import { type StarRailData } from "@/lib/star-rail-api"
import { cn } from "@/lib/utils"
import { PlayerCard } from "./player-card"
import { StatsRow } from "./stats-row"
import { CharacterShowcase } from "./character-showcase"
import { EndgameSection } from "./endgame-section"

type Tab = "home" | "characters" | "moc" | "pure-fiction" | "apocalyptic-shadow"

const TABS: {
  id: Tab
  label: string
  icon: string
}[] = [
  { id: "home", label: "Detail", icon: "/star-rail/profile.webp" },
  { id: "characters", label: "Characters", icon: "/star-rail/characters.webp" },
  { id: "moc", label: "Memory of Chaos", icon: "/star-rail/moc.webp" },
  { id: "pure-fiction", label: "Pure Fiction", icon: "/star-rail/pure-fiction.webp" },
  { id: "apocalyptic-shadow", label: "Apocalyptic Shadow", icon: "/star-rail/apocalyptic-shadow.webp" },
]

export function StarRailNav({ data }: { data: StarRailData }) {
  const [activeTab, setActiveTab] = useState<Tab>("home")

  return (
    <>
      <nav className="mb-6 flex gap-1 overflow-x-auto border-b border-border/30 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 px-4 py-2 font-mono text-sm whitespace-nowrap transition-colors",
                isActive
                  ? "border-b-2 border-primary text-primary"
                  : "border-b-2 border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              {tab.label}
            </button>
          )
        })}
      </nav>

      {activeTab === "home" && (
        <div className="space-y-6">
          <PlayerCard info={data.info} />
          <StatsRow info={data.info} />
        </div>
      )}

      {activeTab === "characters" && (
        <div className="space-y-6">
          <CharacterShowcase characters={data.characters} />
        </div>
      )}

      {activeTab === "moc" && (
        <div className="space-y-6">
          <EndgameSection
            title="Memory of Chaos"
            icon="/star-rail/moc.webp"
            data={data.moc}
            characters={data.characters}
          />
        </div>
      )}

      {activeTab === "pure-fiction" && (
        <div className="space-y-6">
          <EndgameSection
            title="Pure Fiction"
            icon="/star-rail/pure-fiction.webp"
            data={data.pureFiction}
            characters={data.characters}
          />
        </div>
      )}

      {activeTab === "apocalyptic-shadow" && (
        <div className="space-y-6">
          <EndgameSection
            title="Apocalyptic Shadow"
            icon="/star-rail/apocalyptic-shadow.webp"
            data={data.apocalypticShadow}
            characters={data.characters}
          />
        </div>
      )}
    </>
  )
}
