import React from "react"
import { useTranslation } from "next-i18next"
import { useTheme } from "next-themes"
import { Heading, VStack } from "@chakra-ui/react"

import type { TranslationKey } from "@/lib/types"

import Text from "./OldText"

export interface IStyledContainer {
  isShipped: boolean
}

export type UpgradeStatusProps = {
  children?: React.ReactNode
  dateKey: TranslationKey
  isShipped?: boolean
}

const UpgradeStatus = ({
  dateKey,
  children,
  isShipped = false,
}: UpgradeStatusProps) => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const border = !isDark ? "none" : "2px solid"
  const darkBorderColor = isShipped ? "#3fb181" : "#a4a4ff"
  const borderColor = !isDark ? undefined : darkBorderColor
  const { t } = useTranslation("page-staking")

  return (
    <VStack
      as="aside"
      alignItems="start"
      bg={
        isShipped ? "upgradeStatusShippedBackground" : "upgradeStatusBackground"
      }
      border={border}
      borderColor={borderColor}
      borderRadius="base"
      boxShadow={`0px 4px 7px rgba(0, 0, 0, 0.05), 0px 10px 17px rgba(0, 0, 0, 0.03),
       0px 14px 66px rgba(0, 0, 0, 0.07)`}
      mb={8}
      mt={{ base: 8, lg: 0 }}
      p={6}
      gap={6}
      width="100%"
    >
      <Heading fontSize="sm" fontWeight="normal" textTransform="uppercase">
        {t("common:consensus-when-shipping")}
      </Heading>
      <Text fontSize="2.5rem" fontWeight="bold" lineHeight="100%">
        {t(dateKey)}
      </Text>
      <Text fontSize="xl">{children}</Text>
    </VStack>
  )
}

export default UpgradeStatus
