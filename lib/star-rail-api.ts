import { normalizeElement, type Element } from "@/lib/star-rail-data"

const API_BASE = "https://hoyo.dotcchix.dev/api/sr"
const REVALIDATE = 1200

export interface SrInfo {
  uid: number
  nickname: string
  level: number
  game_head_icon: string
  active_days: number
  achievement_num: number
  total_characters: number
  chest_num: number
  abyss_process: string
}

export interface SrLightCone {
  name: string
  level: number
  icon: string
}

export interface SrCharacter {
  icon: string
  name: string
  /** Lowercase element string from the API (e.g. "lightning"). */
  element: string
  level: number
  /** Active eidolon count (E0–E6). */
  rank: number
  equip: SrLightCone | null
}

export interface SrNodeCharacter {
  icon: string
  level: number
}

export interface SrNode {
  score?: number | null
  characters: SrNodeCharacter[]
}

export interface SrEndgame {
  begin_time: string
  end_time: string
  total_battle: number
  total_star: number
  max_floor: string
  floor: string
  star: number
  round_num: number | null
  nodes: SrNode[]
}

export interface StarRailData {
  info: SrInfo | null
  characters: SrCharacter[]
  moc: SrEndgame | null
  pureFiction: SrEndgame | null
  apocalypticShadow: SrEndgame | null
}

/** A character resolved to a display-ready shape (used by team/row components). */
export interface DisplayCharacter {
  icon: string
  name: string
  element: Element | null
  level: number
  eidolon: number | null
  lightCone: SrLightCone | null
}

export interface DisplayTeam {
  name?: string
  characters: DisplayCharacter[]
  score?: number | null
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: REVALIDATE },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

export function getSrInfo() {
  return fetchJson<SrInfo>("/info")
}
export function getSrCharacters() {
  return fetchJson<SrCharacter[]>("/characters")
}
export function getSrMoc() {
  return fetchJson<SrEndgame>("/moc")
}
export function getSrPureFiction() {
  return fetchJson<SrEndgame>("/pure-fiction")
}
export function getSrApocalypticShadow() {
  return fetchJson<SrEndgame>("/apocalyptic-shadow")
}

export async function getStarRailData(): Promise<StarRailData> {
  const [info, characters, moc, pureFiction, apocalypticShadow] =
    await Promise.all([
      getSrInfo(),
      getSrCharacters(),
      getSrMoc(),
      getSrPureFiction(),
      getSrApocalypticShadow(),
    ])
  return {
    info,
    characters: characters ?? [],
    moc,
    pureFiction,
    apocalypticShadow,
  }
}

/**
 * Build an index of owned characters keyed by icon URL so lean roster
 * references (endgame nodes only carry `{ icon, level }`) can be enriched
 * with name / element / eidolon / light cone.
 */
export function buildCharacterIndex(
  characters: SrCharacter[],
): Map<string, SrCharacter> {
  const map = new Map<string, SrCharacter>()
  for (const c of characters) {
    map.set(c.icon, c)
  }
  return map
}

export type CharacterIndex = Map<string, SrCharacter>

/**
 * Resolve a lean `{ icon, level }` reference into a full display character,
 * falling back to the reference itself when the character isn't owned.
 */
export function resolveNodeChar(
  ref: SrNodeCharacter,
  index: CharacterIndex,
): DisplayCharacter {
  const owned = index.get(ref.icon)
  if (owned) {
    return {
      icon: owned.icon,
      name: owned.name,
      element: normalizeElement(owned.element),
      level: owned.level,
      eidolon: owned.rank,
      lightCone: owned.equip,
    }
  }
  return {
    icon: ref.icon,
    name: "Unknown",
    element: null,
    level: ref.level,
    eidolon: null,
    lightCone: null,
  }
}

/** Convert an owned character into a display character. */
export function toDisplayChar(c: SrCharacter): DisplayCharacter {
  return {
    icon: c.icon,
    name: c.name,
    element: normalizeElement(c.element),
    level: c.level,
    eidolon: c.rank,
    lightCone: c.equip,
  }
}
