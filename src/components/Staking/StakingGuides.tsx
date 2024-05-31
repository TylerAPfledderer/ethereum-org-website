import { useTranslation } from "next-i18next"
import { Stack } from "@chakra-ui/react"

import CardList, { type CardListItem } from "@/components/CardList"

const StakingGuides = () => {
  const { t } = useTranslation("page-staking")

  const guides: CardListItem[] = [
    {
      title: t("page-staking-guide-title-coincashew-ethereum"),
      link: "https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet",
      description: t("page-staking-guide-description-linux"),
    },
    {
      title: t("page-staking-guide-title-somer-esat"),
      link: "https://github.com/SomerEsat/ethereum-staking-guide",
      description: t("page-staking-guide-description-linux"),
    },
    {
      title: t("page-staking-guide-title-rocket-pool"),
      link: "https://rocketpool.net/node-operators",
      description: t("page-staking-guide-description-mac-linux"),
    },
  ]

  return (
    <Stack direction="column" gap="4" asChild>
      <CardList items={guides} />
    </Stack>
  )
}

export default StakingGuides
