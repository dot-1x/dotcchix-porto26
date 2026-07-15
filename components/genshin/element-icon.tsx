import Image from "next/image"
import { type Element } from "@/lib/genshin-data"

const ICON_PATH: Record<Element, string> = {
  Pyro: "/genshin/elements/Element_Pyro.webp",
  Hydro: "/genshin/elements/Element_Hydro.webp",
  Electro: "/genshin/elements/Element_Electro.webp",
  Cryo: "/genshin/elements/Element_Cryo.webp",
  Anemo: "/genshin/elements/Element_Anemo.webp",
  Geo: "/genshin/elements/Element_Geo.webp",
  Dendro: "/genshin/elements/Element_Dendro.webp",
}

export function ElementIcon({
  element,
  className,
  size = 16,
}: {
  element: Element
  className?: string
  size?: number
}) {
  return (
    <Image
      src={ICON_PATH[element]}
      alt={element}
      width={size}
      height={size}
      className={className}
    />
  )
}