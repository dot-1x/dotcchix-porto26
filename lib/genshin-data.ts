export type Element =
  | "Pyro"
  | "Hydro"
  | "Electro"
  | "Cryo"
  | "Anemo"
  | "Geo"
  | "Dendro"

export interface GenshinCharacter {
  name: string
  element: Element
  icon: string // enka.network UI icon URL
  level: number
  constellation: number // 0-6
  weapon: { name: string; refinement: number }
  talents: [number, number, number] // NA, E, Q
  artifacts: string[] // set names
  critRate: number
  critDmg: number
  er: number // energy recharge %
}

export interface GenshinTeam {
  /** Optional label, e.g. "First Half" / "Second Half" for Abyss, or a custom name. */
  name?: string
  characters: GenshinCharacter[]
}

export interface PlayerProfileStats {
  daysActive: number
  charactersOwned: number
}

export const PLAYER_UID = "824677421"
export const PLAYER_SERVER = "Asia"

export const playerStats: PlayerProfileStats = {
  daysActive: 730,
  charactersOwned: 52,
}

/* -------------------------------------------------------------------------- */
/*                              Character presets                             */
/* -------------------------------------------------------------------------- */

const ICON = (id: string) => `https://enka.network/ui/UI_AvatarIcon_${id}.png`

const arlecchino: GenshinCharacter = {
  name: "Arlecchino",
  element: "Pyro",
  icon: ICON("Arlecchino"),
  level: 90,
  constellation: 0,
  weapon: { name: "Crimson Moon's Semblance", refinement: 1 },
  talents: [10, 10, 10],
  artifacts: ["Fragment of Harmonic Whimsy"],
  critRate: 75.6,
  critDmg: 210.4,
  er: 110.0,
}

const xingqiu: GenshinCharacter = {
  name: "Xingqiu",
  element: "Hydro",
  icon: ICON("Xingqiu"),
  level: 90,
  constellation: 6,
  weapon: { name: "Sacrificial Sword", refinement: 5 },
  talents: [1, 9, 13],
  artifacts: ["Nymph's Dream"],
  critRate: 55.0,
  critDmg: 120.0,
  er: 200.0,
}

const bennett: GenshinCharacter = {
  name: "Bennett",
  element: "Pyro",
  icon: ICON("Bennett"),
  level: 90,
  constellation: 5,
  weapon: { name: "Aquila Favonia", refinement: 1 },
  talents: [1, 1, 13],
  artifacts: ["Noblesse Oblige"],
  critRate: 30.0,
  critDmg: 60.0,
  er: 220.0,
}

const kazuha: GenshinCharacter = {
  name: "Kazuha",
  element: "Anemo",
  icon: ICON("Kazuha"),
  level: 90,
  constellation: 0,
  weapon: { name: "Xiphos' Moonlight", refinement: 1 },
  talents: [1, 9, 9],
  artifacts: ["Viridescent Venerer"],
  critRate: 25.0,
  critDmg: 50.0,
  er: 160.0,
}

const clorinde: GenshinCharacter = {
  name: "Clorinde",
  element: "Electro",
  icon: ICON("Clorinde"),
  level: 90,
  constellation: 0,
  weapon: { name: "Absolution", refinement: 1 },
  talents: [1, 10, 10],
  artifacts: ["Fragment of Harmonic Whimsy"],
  critRate: 70.0,
  critDmg: 220.0,
  er: 110.0,
}

const fischl: GenshinCharacter = {
  name: "Fischl",
  element: "Electro",
  icon: ICON("Fischl"),
  level: 90,
  constellation: 6,
  weapon: { name: "Skyward Harp", refinement: 1 },
  talents: [1, 13, 9],
  artifacts: ["Golden Troupe"],
  critRate: 65.0,
  critDmg: 140.0,
  er: 120.0,
}

const nahida: GenshinCharacter = {
  name: "Nahida",
  element: "Dendro",
  icon: ICON("Nahida"),
  level: 90,
  constellation: 0,
  weapon: { name: "A Thousand Floating Dreams", refinement: 1 },
  talents: [1, 10, 10],
  artifacts: ["Deepwood Memories"],
  critRate: 50.0,
  critDmg: 100.0,
  er: 130.0,
}

const wriothesley: GenshinCharacter = {
  name: "Wriothesley",
  element: "Cryo",
  icon: ICON("Wriothesley"),
  level: 90,
  constellation: 0,
  weapon: { name: "Cashflow Supervision", refinement: 1 },
  talents: [10, 10, 10],
  artifacts: ["Marechaussee Hunter"],
  critRate: 80.0,
  critDmg: 200.0,
  er: 110.0,
}

const shenhe: GenshinCharacter = {
  name: "Shenhe",
  element: "Cryo",
  icon: ICON("Shenhe"),
  level: 90,
  constellation: 0,
  weapon: { name: "Calamity Queller", refinement: 1 },
  talents: [1, 10, 10],
  artifacts: ["Gladiator's Finale"],
  critRate: 30.0,
  critDmg: 60.0,
  er: 200.0,
}

const furina: GenshinCharacter = {
  name: "Furina",
  element: "Hydro",
  icon: ICON("Furina"),
  level: 90,
  constellation: 0,
  weapon: { name: "Splendor of Tranquil Waters", refinement: 1 },
  talents: [1, 9, 10],
  artifacts: ["Golden Troupe"],
  critRate: 60.0,
  critDmg: 130.0,
  er: 160.0,
}

/* -------------------------------------------------------------------------- */
/*                              Spiral Abyss teams                            */
/* -------------------------------------------------------------------------- */

export const abyssTeams: GenshinTeam[] = [
  {
    name: "First Half",
    characters: [arlecchino, xingqiu, bennett, kazuha],
  },
  {
    name: "Second Half",
    characters: [clorinde, fischl, nahida, kazuha],
  },
]

/* -------------------------------------------------------------------------- */
/*                            Stygian Onslaught teams                         */
/* -------------------------------------------------------------------------- */

export const stygianTeams: GenshinTeam[] = [
  {
    name: "Team 1",
    characters: [arlecchino, xingqiu, bennett, kazuha],
  },
  {
    name: "Team 2",
    characters: [wriothesley, furina, shenhe, kazuha],
  },
  {
    name: "Team 3",
    characters: [clorinde, fischl, nahida, kazuha],
  },
]

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

export const ELEMENT_COLORS: Record<Element, string> = {
  Pyro: "#ef7938",
  Hydro: "#4cc2f1",
  Electro: "#b08fc2",
  Cryo: "#9fd6e3",
  Anemo: "#74c2a8",
  Geo: "#f2b723",
  Dendro: "#a0c83b",
}

/** Format a duration in seconds into a compact "Xm Ys" string. */
export function formatClearTime(seconds: number | null | undefined): string {
  if (seconds == null || seconds <= 0) return "—"
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  if (m <= 0) return `${s}s`
  return `${m}m ${s}s`
}

/**
 * Map Stygian Onslaught difficulty index to its display label.
 * 5 = Fearless, 6 = Dire. The highest tier is shown as "Lunar".
 */
export function stygianDifficultyLabel(
  index: number | null | undefined,
): string {
  switch (index) {
    case 5:
      return "Fearless"
    case 6:
      return "Dire"
    default:
      return "Dire"
  }
}

/**
 * Imaginarium Theatre mode label. The highest difficulty mode is "Lunar".
 */
export function theatreModeLabel(
  _modeIndex: number | null | undefined,
): string {
  return "Lunar"
}
