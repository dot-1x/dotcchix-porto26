"use client"

import { useState } from "react"
import Image from "next/image"
import { type GenshinData } from "@/lib/genshin-api"
import { cn } from "@/lib/utils"
import { PlayerCard } from "./player-card"
import { StatsRow } from "./stats-row"
import { CharacterShowcase } from "./character-showcase"
import { SpiralAbyssSection } from "./spiral-abyss-section"
import { ImaginariumTheaterSection } from "./imaginarium-theater-section"
import { StygianOnslaughtSection } from "./stygian-onslaught-section"

type Tab = "home" | "characters" | "spiral" | "stygian"

const TABS: {
  id: Tab
  label: string
  icon: string
}[] = [
  { id: "home", label: "Detail", icon: "/genshin/sumeru.png" },
  { id: "characters", label: "Characters", icon: "/genshin/Icon_Character.webp" },
  { id: "spiral", label: "Spiral", icon: "/genshin/spiral.webp" },
  { id: "stygian", label: "Stygian", icon: "/genshin/stygian.png" },
]

export function GenshinNav({ data }: { data: GenshinData }) {
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
          <div className="pt-4">
            <ImaginariumTheaterSection theater={data.theater} />
          </div>
        </div>
      )}

      {activeTab === "characters" && (
        <div className="space-y-6">
          <CharacterShowcase characters={data.characters} />
        </div>
      )}

      {activeTab === "spiral" && (
        <div className="space-y-6">
          <SpiralAbyssSection
            abyss={data.abyss}
            characters={data.characters}
          />
        </div>
      )}

      {activeTab === "stygian" && (
        <div className="space-y-6">
          <StygianOnslaughtSection stygian={data.stygian} />
        </div>
      )}
    </>
  )
}