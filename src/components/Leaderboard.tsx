import { useTranslation } from "next-i18next"
import { useTheme } from "next-themes"
import {
  Avatar,
  Box,
  Flex,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  VisuallyHidden,
} from "@chakra-ui/react"

import Emoji from "@/components/Emoji"
import { BaseLink } from "@/components/Link"

import { GITHUB_URL } from "@/lib/constants"

import { useRtlFlip } from "@/hooks/useRtlFlip"

type Person = {
  name: string
  username: string
  score: number
}

type LeaderboardProps = {
  content: Person[]
  limit?: number
}

const Leaderboard = ({ content, limit = 100 }: LeaderboardProps) => {
  const { flipForRtl } = useRtlFlip()
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const colorModeStyles = {
    listBoxShadow: !isDark ? "tableBox.light" : "tableBox.dark",
    linkBoxShadow: !isDark ? "tableItemBox.light" : "tableItemBox.dark",
    scoreColor: !isDark ? "blackAlpha.700" : "whiteAlpha.600",
  }

  const { t } = useTranslation("page-bug-bounty")

  return (
    <List.Root
      bgColor="background.base"
      boxShadow={colorModeStyles.listBoxShadow}
      w="100%"
      mb={8}
      ms={0}
      aria-label={t("page-upgrades-bug-bounty-leaderboard-list")}
    >
      {content
        .filter((_, idx) => idx < limit)
        .map(({ name, username, score }, idx) => {
          const hasGitHub = !!username
          const avatarImg = GITHUB_URL + (username || "random") + ".png?size=40"
          const avatarAlt = hasGitHub ? `${username} GitHub avatar` : ""

          let emoji: string | null = null
          if (idx === 0) {
            emoji = ":trophy:"
          } else if (idx === 1) {
            emoji = ":2nd_place_medal:"
          } else if (idx === 2) {
            emoji = ":3rd_place_medal:"
          }

          return (
            <List.Item key={username} mb={0}>
              <LinkBox
                key={idx}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow={colorModeStyles.linkBoxShadow}
                mb={0.25}
                p={4}
                w="100%"
                _hover={{
                  textDecor: "none",
                  borderRadius: 0.5,
                  boxShadow: "0 0 1px var(--eth-colors-primary-base)",
                  background: "tableBackgroundHover",
                }}
              >
                <Box me={4} opacity="0.4">
                  {idx + 1}
                </Box>
                <Avatar.Root
                  me={4}
                  h={10}
                  w={10}
                  display={{ base: "none", sm: "block" }}
                >
                  <Avatar.Image src={avatarImg} />
                  <Avatar.Fallback name={avatarAlt} />
                </Avatar.Root>
                <Flex flex="1 1 75%" direction="column" me={8}>
                  <LinkOverlay textDecor="none" color="text">
                    <BaseLink
                      href={hasGitHub ? `${GITHUB_URL}${username}` : "#"}
                      hideArrow
                    >
                      <VisuallyHidden>{`In place number ${
                        idx + 1
                      } with ${score} points`}</VisuallyHidden>
                      {name}{" "}
                      {hasGitHub && (
                        <VisuallyHidden>(See Github Profile)</VisuallyHidden>
                      )}
                    </BaseLink>
                  </LinkOverlay>

                  <Box fontSize="sm" color={colorModeStyles.scoreColor}>
                    {score} {t("page-upgrades-bug-bounty-leaderboard-points")}
                  </Box>
                </Flex>
                {emoji && <Emoji me={8} fontSize="2xl" text={emoji} />}
                <Box
                  as="span"
                  _after={{
                    content: '"↗"',
                    ms: 0.5,
                    me: 1.5,
                    transform: flipForRtl,
                    display: "inline-block",
                  }}
                />
              </LinkBox>
            </List.Item>
          )
        })}
    </List.Root>
  )
}

export default Leaderboard
