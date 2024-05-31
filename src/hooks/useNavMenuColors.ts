import { useTheme } from "next-themes"

import { Level } from "@/components/Nav/types"

type LevelColors = {
  subtext: string
  background: string
  activeBackground: string
}

type NavMenuColors = {
  body: string
  stroke: string
  highlight: string
  active: string
  lvl: Record<Level, LevelColors>
}

export const useNavMenuColors = (): NavMenuColors => {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  return {
    body: "body.base",
    stroke: "body.light",
    highlight: "primary.base",
    active: "primary.highContrast",
    lvl: {
      1: {
        subtext: !isDark ? "gray.400" : "gray.400",
        background: !isDark ? "white" : "black",
        activeBackground: !isDark ? "gray.150" : "gray.700",
      },
      2: {
        subtext: !isDark ? "gray.400" : "gray.300",
        background: !isDark ? "gray.150" : "gray.700",
        activeBackground: !isDark ? "gray.200" : "gray.600",
      },
      3: {
        subtext: !isDark ? "gray.500" : "gray.300",
        background: !isDark ? "gray.200" : "gray.600",
        activeBackground: !isDark ? "gray.100" : "gray.700",
      },
      4: {
        subtext: !isDark ? "gray.700" : "gray.300",
        background: !isDark ? "gray.300" : "gray.700",
        activeBackground: !isDark ? "gray.200" : "gray.800",
      },
    },
  }
}
