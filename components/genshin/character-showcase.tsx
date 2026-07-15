"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Sparkles } from "lucide-react"
import { type AccountCharacter } from "@/lib/genshin-api"
import { ELEMENT_COLORS, type Element } from "@/lib/genshin-data"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ElementIcon } from "./element-icon"
import { cn } from "@/lib/utils"

export function CharacterShowcase({
  characters,
}: {
  characters: AccountCharacter[]
}) {
  const [active, setActive] = useState<Element | "All">("All")

  const { counts, elements } = useMemo(() => {
    const map = new Map<Element, number>()
    for (const c of characters) {
      if (c.element) map.set(c.element, (map.get(c.element) ?? 0) + 1)
    }
    const els = [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([el]) => el)
    return { counts: map, elements: els }
  }, [characters])

  const filtered =
    active === "All"
      ? characters
      : characters.filter((c) => c.element === active)

  return (
    <section className="space-y-4">
      <Card className="border-border/50 bg-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-mono text-base text-secondary">
            <Sparkles className="h-4 w-4" />
            Character Showcase
          </CardTitle>
        </CardHeader>
      </Card>

      {characters.length === 0 ? (
        <Card className="border-border/50 bg-card backdrop-blur-sm">
          <CardContent>
            <p className="text-center text-sm text-muted-foreground">
              No characters available.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Element filter */}
          <div className="flex flex-wrap items-center gap-2">
            <FilterButton
              label="All"
              count={characters.length}
              active={active === "All"}
              onClick={() => setActive("All")}
            >
              <Sparkles className="h-4 w-4" />
            </FilterButton>
            {elements.map((el) => (
              <FilterButton
                key={el}
                label={el}
                count={counts.get(el) ?? 0}
                active={active === el}
                onClick={() => setActive((p) => (p === el ? "All" : el))}
              >
                <ElementIcon element={el} />
              </FilterButton>
            ))}
          </div>

          <TooltipProvider delayDuration={150}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((char, i) => {
              const color = char.element
                ? ELEMENT_COLORS[char.element]
                : undefined
              return (
                <Tooltip key={`${char.name}-${i}`}>
                  <TooltipTrigger asChild>
                    <Card
                      className="group cursor-pointer overflow-hidden border-border/50 bg-card py-0 backdrop-blur-sm transition-colors hover:border-primary/50"
                    >
                      <CardContent className="px-0">
                        <div className="relative aspect-square w-full overflow-hidden bg-muted">
                          {char.icon ? (
                            <Image
                              src={char.icon}
                              alt={char.name}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                              sizes="(max-width: 640px) 50vw, 20vw"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Sparkles className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                          {color && (
                            <span
                              className="absolute left-2 top-2 h-3 w-3 rounded-full ring-2 ring-background"
                              style={{ backgroundColor: color }}
                              title={char.element ?? undefined}
                            />
                          )}
                        </div>
                        <div className="px-3 py-2">
                          <p className="truncate text-xs font-semibold text-foreground">
                            {char.name}
                          </p>
                          <div className="mt-0.5 flex items-center gap-1.5 text-[0.65rem] text-muted-foreground">
                            <span>Lv.{char.level}</span>
                            <span className="text-primary">
                              C{char.actived_constellation_num}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={4}
                    className="w-64 gap-2 rounded-lg border border-border/50 bg-popover p-3 text-popover-foreground shadow-md"
                  >
                    <DetailPanel char={char} color={color} />
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
        </TooltipProvider>
          </>
        )}
    </section>
  )
}

function DetailPanel({
  char,
  color,
}: {
  char: AccountCharacter
  color: string | undefined
}) {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-semibold text-foreground">
          {char.name}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="secondary" className="text-[0.65rem]">
          {char.element}
        </Badge>
        <Badge variant="secondary" className="text-[0.65rem]">
          Lv.{char.level}
        </Badge>
        <Badge variant="outline" className="text-[0.65rem]">
          C{char.actived_constellation_num}
        </Badge>
      </div>
      {char.weapon && (
        <div className="flex items-center gap-2 border-t border-border/40 pt-2">
          <Image
            src={char.weapon.icon}
            alt={char.weapon.name}
            width={22}
            height={22}
            className="h-[22px] w-[22px] shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="truncate text-[0.7rem] font-medium text-foreground">
              {char.weapon.name}
            </p>
            <p className="text-[0.6rem] text-muted-foreground">
              Lv.{char.weapon.level}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterButton({
  label,
  count,
  active,
  onClick,
  children,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`${label} (${count})`}
      className={cn(
        "group flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
        active
          ? "border-primary/60 bg-primary/10 text-foreground"
          : "border-border/50 bg-card/50 text-muted-foreground hover:text-foreground",
      )}
    >
      <span className="flex h-4 w-4 items-center justify-center">
        {children}
      </span>
      <span>{label}</span>
      <span className="text-[0.6rem] opacity-60">{count}</span>
    </button>
  )
}