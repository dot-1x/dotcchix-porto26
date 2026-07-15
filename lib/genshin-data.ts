export type Element =
  | "Pyro"
  | "Hydro"
  | "Electro"
  | "Cryo"
  | "Anemo"
  | "Geo"
  | "Dendro"

export const ELEMENT_COLORS: Record<Element, string> = {
  Pyro: "#ef7938",
  Hydro: "#4cc2f1",
  Electro: "#b08fc2",
  Cryo: "#9fd6e3",
  Anemo: "#74c2a8",
  Geo: "#f2b723",
  Dendro: "#a0c83b",
}

/** Format a clear time in seconds as a compact "Xs" string. */
export function formatClearTime(seconds: number | null | undefined): string {
  if (seconds == null || seconds <= 0) return "—"
  return `${seconds}s`
}

/**
 * Returns the path to the Stygian Onslaught clear image based on difficulty.
 */
export function stygianClearImage(
  index: number | null | undefined,
): string | null {
  switch (index) {
    case 5:
      return "/genshin/stygian-clear/fearless.webp"
    case 6:
      return "/genshin/stygian-clear/dire.webp"
    default:
      return "/genshin/stygian-clear/dire.webp"
  }
}

/**
 * Map Stygian Onslaught difficulty index to its display label.
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