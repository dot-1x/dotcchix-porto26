import type { Element } from "@/lib/genshin-data"

const API_BASE = "https://genshin.dotcchix.dev/api"
const REVALIDATE = 3600

export interface AccountInfo {
  uid: number
  nickname: string
  level: number
  game_head_icon: string
  active_day_number: number
  achievement_number: number
  total_characters: number
  total_friendship: number
}

export interface AccountCharacterWeapon {
  name: string
  level: number
  icon: string
}

export interface AccountCharacter {
  icon: string
  name: string
  element: Element
  level: number
  actived_constellation_num: number
  weapon: AccountCharacterWeapon
}

export interface AbyssBattleCharacter {
  icon: string
  level: number
}

export interface AbyssLevel {
  chamber: number
  star: number
  battles: AbyssBattleCharacter[][]
}

export interface AbyssFloor {
  max_star: number
  levels: AbyssLevel[]
}

export interface AccountAbyss {
  start_time: string
  end_time: string
  total_battle: number
  total_win: number
  max_floor: string
  total_star: number
  floors: AbyssFloor[]
}

export interface TheaterCharacter {
  avatar: string
  name: string
  level: number
  element: Element
}

export interface AccountTheater {
  medal: number[]
  characters: TheaterCharacter[]
}

export interface StygianFinalStat {
  name: string
  value: string
}

export interface StygianCharacter {
  icon: string
  name: string
  element: Element
  level: number
  actived_constellation_num: number
  weapon: AccountCharacterWeapon
  final_stats: StygianFinalStat[]
  artifact_sets: string[]
}

export interface StygianChallenge {
  name: string
  second: number
  characters: StygianCharacter[]
}

export interface StygianCycle {
  schedule_id: string
  name: string
  start_time: string
  end_time: string
  difficulty: number
  total_clear_time: number
  challenges: StygianChallenge[]
}

export interface AccountStygian {
  uid: number
  cycles: StygianCycle[]
}

export interface GenshinData {
  info: AccountInfo | null
  characters: AccountCharacter[]
  abyss: AccountAbyss | null
  theater: AccountTheater | null
  stygian: AccountStygian | null
}

/** A character resolved to a display-ready shape (used by team/row components). */
export interface DisplayCharacter {
  icon: string
  name: string
  element: Element | null
  level: number
  constellation: number | null
  weapon: AccountCharacterWeapon | null
  finalStats?: StygianFinalStat[]
  artifactSets?: string[]
}

export interface DisplayTeam {
  name?: string
  characters: DisplayCharacter[]
  clearTime?: number | null
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

export function getAccountInfo() {
  return fetchJson<AccountInfo>("/account/info")
}
export function getAccountCharacters() {
  return fetchJson<AccountCharacter[]>("/account/characters")
}
export function getAccountAbyss() {
  return fetchJson<AccountAbyss>("/account/abyss")
}
export function getAccountTheater() {
  return fetchJson<AccountTheater[]>("/account/theater")
}
export function getAccountStygian() {
  return fetchJson<AccountStygian>("/stygian")
}

export async function getGenshinData(): Promise<GenshinData> {
  const [info, characters, abyss, theater, stygian] = await Promise.all([
    getAccountInfo(),
    getAccountCharacters(),
    getAccountAbyss(),
    getAccountTheater(),
    getAccountStygian(),
  ])
  return {
    info,
    characters: characters ?? [],
    abyss,
    theater: theater && theater.length > 0 ? theater[0] : null,
    stygian,
  }
}

/**
 * Build an index of owned characters keyed by icon URL so lean roster
 * references (abyss battles only carry `{ icon, level }`) can be enriched
 * with name / element / constellation / weapon.
 */
export function buildCharacterIndex(
  characters: AccountCharacter[],
): Map<string, AccountCharacter> {
  const map = new Map<string, AccountCharacter>()
  for (const c of characters) {
    map.set(c.icon, c)
  }
  return map
}

export type CharacterIndex = Map<string, AccountCharacter>

/**
 * Resolve a lean `{ icon, level }` reference into a full display character,
 * falling back to the reference itself when the character isn't owned.
 */
export function resolveAbyssChar(
  ref: AbyssBattleCharacter,
  index: CharacterIndex,
): DisplayCharacter {
  const owned = index.get(ref.icon)
  if (owned) {
    return {
      icon: owned.icon,
      name: owned.name,
      element: owned.element,
      level: owned.level,
      constellation: owned.actived_constellation_num,
      weapon: owned.weapon,
    }
  }
  return {
    icon: ref.icon,
    name: "Unknown",
    element: null,
    level: ref.level,
    constellation: null,
    weapon: null,
  }
}

/** Convert a theater character into a display character. */
export function toDisplayChar(c: TheaterCharacter): DisplayCharacter {
  return {
    icon: c.avatar,
    name: c.name,
    element: c.element,
    level: c.level,
    constellation: null,
    weapon: null,
  }
}

/** Convert a rich stygian character into a display character. */
export function toStygianDisplayChar(c: StygianCharacter): DisplayCharacter {
  return {
    icon: c.icon,
    name: c.name,
    element: c.element,
    level: c.level,
    constellation: c.actived_constellation_num,
    weapon: c.weapon,
    finalStats: c.final_stats,
    artifactSets: c.artifact_sets,
  }
}