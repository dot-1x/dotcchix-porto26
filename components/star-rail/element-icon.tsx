import Image from "next/image"
import { type Element } from "@/lib/star-rail-data"

const ICON_PATH: Record<Element, string> = {
  Physical: "/star-rail/elements/Element_Physical.webp",
  Fire: "/star-rail/elements/Element_Fire.webp",
  Ice: "/star-rail/elements/Element_Ice.webp",
  Lightning: "/star-rail/elements/Element_Lightning.webp",
  Wind: "/star-rail/elements/Element_Wind.webp",
  Quantum: "/star-rail/elements/Element_Quantum.webp",
  Imaginary: "/star-rail/elements/Element_Imaginary.webp",
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
