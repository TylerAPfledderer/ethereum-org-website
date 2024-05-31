import { useTheme } from "next-themes"
import { Box } from "@chakra-ui/react"

import { Image } from "@/components/Image"

import pageviewsDark from "@/public/translation-program/pageviews-dark.png"
import pageviewsLight from "@/public/translation-program/pageviews-light.png"

const TranslationChartImage = () => {
  const { theme } = useTheme()
  const ethImage = theme === "light" ? pageviewsLight : pageviewsDark

  return (
    <Box minW="263px" width="auto" asChild>
      <Image
        src={ethImage}
        alt=""
        style={{ objectFit: "contain" }}
        height={500}
      />
    </Box>
  )
}

export default TranslationChartImage
