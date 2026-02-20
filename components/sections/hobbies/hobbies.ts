import {
  Gamepad2,
  Music,
  Coffee,
  Cpu,
  MemoryStick,
  CircuitBoard,
  Zap,
  Gpu,
  FlaskConical,
} from "lucide-react"

export type Hobby = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tags: string[]
}

export type HardwareSpec = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}

export const pcSpecs: HardwareSpec[] = [
  { icon: Cpu, label: "CPU", value: "AMD Ryzen 7 7800X3D" },
  {
    icon: Gpu,
    label: "GPU",
    value: "Zotac NVIDIA Geforce RTX 5070 Ti Solid SFF OC 16GB GDDR7",
  },
  {
    icon: MemoryStick,
    label: "RAM",
    value: "Adata XPG Blade 32 GB 16x2 5600 MT/s DDR5",
  },
  {
    icon: CircuitBoard,
    label: "Motherboard",
    value: "Gigabyte B850M EAGLE WIFI6E",
  },
  {
    icon: Zap,
    label: "PSU",
    value: "THERMALRIGHT TR-KG850 BLACK 850W 80+ Gold",
  },
]

export const homelabs: HardwareSpec[] = [
  {
    icon: Cpu,
    label: "CPU",
    value: "Intel(R) Core(TM) i7-3687U (4) @ 3.30 GHz",
  },
  {
    icon: Gpu,
    label: "GPU",
    value: "Integrated GPU",
  },
  {
    icon: MemoryStick,
    label: "RAM",
    value: "8GB DDR3",
  },
]

export const hobbies: Hobby[] = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Casual gamer who enjoys casual games. Currently i'm playing Genshin Impact, Honkai: Star Rail, Endfield, CS2 Zombie Escape. \
      Tho I have several AAA games, but I don't really play them no more, only sometimes I play them when I'm bored.",
    tags: ["RPG", "Casual", "FPS"],
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Listening to various of music genres. I had no specific favorite genre, I listens all of em depending on my mood.",
    tags: [
      "Lo-fi",
      "Jazz",
      "Electronic",
      "Reggae",
      "Metal",
      "Classical",
      "Pop",
    ],
  },
  {
    icon: Coffee,
    title: "Coffee",
    description:
      "Yes I love drinking coffee. tho not into trying different coffes, just Americano with less-sugar is all I can drink.",
    tags: ["Americano", "Less-sugar", "No-milk"],
  },
]
