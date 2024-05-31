import { useTranslation } from "next-i18next"
import { useTheme } from "next-themes"
import { Box } from "@chakra-ui/react"

import { Image } from "@/components/Image"

import darkImage from "@/public/ef-logo.png"
import lightImage from "@/public/ef-logo-white.png"

const Logo = () => {
  const { t } = useTranslation("common")
  const { theme } = useTheme()
  const image = theme === "light" ? darkImage : lightImage

  return (
    <Box h="full" w="auto" asChild>
      <Image src={image} alt={t("ethereum-foundation-logo")} />
    </Box>
  )
}

export default Logo
