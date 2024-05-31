import { useTranslation } from "next-i18next"
import { List, Tabs } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"
import OldHeading from "@/components/OldHeading"
import Text from "@/components/OldText"
import WithdrawalCredentials from "@/components/Staking/WithdrawalCredentials"
import Translation from "@/components/Translation"

import { trackCustomEvent } from "@/lib/utils/matomo"

const WithdrawalsTabComparison = () => {
  const { t } = useTranslation("page-staking")
  const handleMatomoEvent = (name: string): void => {
    trackCustomEvent({
      eventCategory: `Staker tabs`,
      eventAction: name,
      eventName: `click`,
    })
  }

  const CURRENT_STAKERS_TAB = "current-stakers"
  const NEW_STAKERS_TAB = "new-stakers"

  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger
          value={CURRENT_STAKERS_TAB}
          onClick={() => handleMatomoEvent("Current stakers")}
        >
          {t("comp-withdrawal-comparison-current-title")}
        </Tabs.Trigger>
        <Tabs.Trigger
          value={NEW_STAKERS_TAB}
          onClick={() => handleMatomoEvent("New stakers")}
        >
          {t("comp-withdrawal-comparison-new-title")}
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.ContentGroup>
        <Tabs.Content value={CURRENT_STAKERS_TAB}>
          <OldHeading as="h3">
            {t("comp-withdrawal-comparison-current-title")}
          </OldHeading>
          <List.Root>
            <List.Item>
              <Translation id="page-staking:comp-withdrawal-comparison-current-li-1" />{" "}
            </List.Item>
            <List.Item>
              <Translation id="page-staking:comp-withdrawal-comparison-current-li-2" />
            </List.Item>
          </List.Root>
          <Text fontWeight="bold">
            <Translation id="page-staking:comp-withdrawal-comparison-current-p" />
          </Text>

          <WithdrawalCredentials />
        </Tabs.Content>

        <Tabs.Content value={NEW_STAKERS_TAB}>
          <OldHeading as="h3">
            {t("comp-withdrawal-comparison-new-title")}
          </OldHeading>
          <List.Root>
            <List.Item>{t("comp-withdrawal-comparison-new-li-1")}</List.Item>
            <List.Item>{t("comp-withdrawal-comparison-new-li-2")}</List.Item>
          </List.Root>
          <Text fontWeight="bold">{t("comp-withdrawal-comparison-new-p")}</Text>
          <ButtonLink to="https://launchpad.ethereum.org/" hideArrow>
            {t("comp-withdrawal-comparison-new-link")}
          </ButtonLink>
        </Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs.Root>
  )
}

export default WithdrawalsTabComparison
