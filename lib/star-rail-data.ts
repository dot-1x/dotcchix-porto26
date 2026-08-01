export type Element =
  | "Physical"
  | "Fire"
  | "Ice"
  | "Lightning"
  | "Wind"
  | "Quantum"
  | "Imaginary"

export const ELEMENT_COLORS: Record<Element, string> = {
  Physical: "#9ea7b0",
  Fire: "#f84f36",
  Ice: "#47c7fd",
  Lightning: "#d376e8",
  Wind: "#4ad0a3",
  Quantum: "#6271e4",
  Imaginary: "#f5dd62",
}

const ELEMENT_LOOKUP: Record<string, Element> = {
  physical: "Physical",
  fire: "Fire",
  ice: "Ice",
  lightning: "Lightning",
  wind: "Wind",
  quantum: "Quantum",
  imaginary: "Imaginary",
}

/** Normalize the lowercase element string from the API to a display Element. */
export function normalizeElement(raw: string | null | undefined): Element | null {
  if (!raw) return null
  return ELEMENT_LOOKUP[raw.toLowerCase()] ?? null
}

/** Format a node score as a compact string. */
export function formatScore(score: number | null | undefined): string {
  if (score == null) return "—"
  return score.toLocaleString()
}
