export type Element = "Pyro" | "Hydro" | "Electro" | "Cryo" | "Anemo" | "Geo" | "Dendro"

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
  name: string
  characters: GenshinCharacter[]
}

export interface PlayerStats {
  daysActive: number
  charactersOwned: number
  imaginariumTheatre: string // e.g. "Act 8 Clear"
  stygianOnslaught: string // e.g. "2000+ pts"
}

export const PLAYER_UID = "824677421"
export const PLAYER_SERVER = "Asia"

export const playerStats: PlayerStats = {
  daysActive: 730,
  charactersOwned: 52,
  imaginariumTheatre: "Act 8 Clear",
  stygianOnslaught: "2000+ pts",
}

export const teams: GenshinTeam[] = [
  {
    name: "Vaporize (Arlecchino)",
    characters: [
      {
        name: "Arlecchino",
        element: "Pyro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Arlecchino.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Crimson Moon's Semblance", refinement: 1 },
        talents: [10, 10, 10],
        artifacts: ["Fragment of Harmonic Whimsy"],
        critRate: 75.6,
        critDmg: 210.4,
        er: 110.0,
      },
      {
        name: "Xingqiu",
        element: "Hydro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Xingqiu.png",
        level: 90,
        constellation: 6,
        weapon: { name: "Sacrificial Sword", refinement: 5 },
        talents: [1, 9, 13],
        artifacts: ["Nymph's Dream"],
        critRate: 55.0,
        critDmg: 120.0,
        er: 200.0,
      },
      {
        name: "Bennett",
        element: "Pyro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Bennett.png",
        level: 90,
        constellation: 5,
        weapon: { name: "Aquila Favonia", refinement: 1 },
        talents: [1, 1, 13],
        artifacts: ["Noblesse Oblige"],
        critRate: 30.0,
        critDmg: 60.0,
        er: 220.0,
      },
      {
        name: "Kazuha",
        element: "Anemo",
        icon: "https://enka.network/ui/UI_AvatarIcon_Kazuha.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Xiphos' Moonlight", refinement: 1 },
        talents: [1, 9, 9],
        artifacts: ["Viridescent Venerer"],
        critRate: 25.0,
        critDmg: 50.0,
        er: 160.0,
      },
    ],
  },
  {
    name: "Mono Electro (Clorinde)",
    characters: [
      {
        name: "Clorinde",
        element: "Electro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Clorinde.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Absolution", refinement: 1 },
        talents: [1, 10, 10],
        artifacts: ["Fragment of Harmonic Whimsy"],
        critRate: 70.0,
        critDmg: 220.0,
        er: 110.0,
      },
      {
        name: "Fischl",
        element: "Electro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Fischl.png",
        level: 90,
        constellation: 6,
        weapon: { name: "Skyward Harp", refinement: 1 },
        talents: [1, 13, 9],
        artifacts: ["Golden Troupe"],
        critRate: 65.0,
        critDmg: 140.0,
        er: 120.0,
      },
      {
        name: "Nahida",
        element: "Dendro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Nahida.png",
        level: 90,
        constellation: 0,
        weapon: { name: "A Thousand Floating Dreams", refinement: 1 },
        talents: [1, 10, 10],
        artifacts: ["Deepwood Memories"],
        critRate: 50.0,
        critDmg: 100.0,
        er: 130.0,
      },
      {
        name: "Kazuha",
        element: "Anemo",
        icon: "https://enka.network/ui/UI_AvatarIcon_Kazuha.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Xiphos' Moonlight", refinement: 1 },
        talents: [1, 9, 9],
        artifacts: ["Viridescent Venerer"],
        critRate: 25.0,
        critDmg: 50.0,
        er: 160.0,
      },
    ],
  },
  {
    name: "Freeze (Wriothesley)",
    characters: [
      {
        name: "Wriothesley",
        element: "Cryo",
        icon: "https://enka.network/ui/UI_AvatarIcon_Wriothesley.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Cashflow Supervision", refinement: 1 },
        talents: [10, 10, 10],
        artifacts: ["Marechaussee Hunter"],
        critRate: 80.0,
        critDmg: 200.0,
        er: 110.0,
      },
      {
        name: "Xingqiu",
        element: "Hydro",
        icon: "https://enka.network/ui/UI_AvatarIcon_Xingqiu.png",
        level: 90,
        constellation: 6,
        weapon: { name: "Sacrificial Sword", refinement: 5 },
        talents: [1, 9, 13],
        artifacts: ["Nymph's Dream"],
        critRate: 55.0,
        critDmg: 120.0,
        er: 200.0,
      },
      {
        name: "Shenhe",
        element: "Cryo",
        icon: "https://enka.network/ui/UI_AvatarIcon_Shenhe.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Calamity Queller", refinement: 1 },
        talents: [1, 10, 10],
        artifacts: ["Gladiator's Finale"],
        critRate: 30.0,
        critDmg: 60.0,
        er: 200.0,
      },
      {
        name: "Kazuha",
        element: "Anemo",
        icon: "https://enka.network/ui/UI_AvatarIcon_Kazuha.png",
        level: 90,
        constellation: 0,
        weapon: { name: "Xiphos' Moonlight", refinement: 1 },
        talents: [1, 9, 9],
        artifacts: ["Viridescent Venerer"],
        critRate: 25.0,
        critDmg: 50.0,
        er: 160.0,
      },
    ],
  },
]

export const ELEMENT_COLORS: Record<Element, string> = {
  Pyro: "#ef7938",
  Hydro: "#4cc2f1",
  Electro: "#b08fc2",
  Cryo: "#9fd6e3",
  Anemo: "#74c2a8",
  Geo: "#f2b723",
  Dendro: "#a0c83b",
}
