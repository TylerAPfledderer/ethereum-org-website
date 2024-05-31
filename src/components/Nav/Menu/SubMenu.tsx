import { AnimatePresence, motion } from "framer-motion"
import NextLink from "next/link"
import { Box, Button, Grid, Icon, List } from "@chakra-ui/react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { ButtonProps } from "@/components/Buttons/Button"
import Link from "@/components/Link"

import { trackCustomEvent } from "@/lib/utils/matomo"
import { cleanPath } from "@/lib/utils/url"

import type { Level, NavItem, NavSectionKey } from "../types"

import ItemContent from "./ItemContent"
import NextChevron from "./NextChevron"
import { useSubMenu } from "./useSubMenu"

type LvlContentProps = {
  lvl: Level
  items: NavItem[]
  activeSection: NavSectionKey | null
  onClose: () => void
}

/**
 * Content for each sub-menu below top-level navigation
 * Content renders inside sibling Viewport
 * @param lvl - The level of the menu
 * @param items - The items to be displayed in the menu
 * @param activeSection - English label of the active section for event tracking
 * @param onClose - Function to close the menu
 * @returns The JSX element representing the menu content.
 */
const SubMenu = ({ lvl, items, activeSection, onClose }: LvlContentProps) => {
  const { asPath, locale, menuColors, menuVariants, PADDING } = useSubMenu()

  if (lvl > 3) return null

  const templateColumns = `repeat(${4 - lvl}, 1fr)`

  return (
    <NavigationMenu.Sub orientation="vertical" asChild>
      <AnimatePresence>
        <Grid gridTemplateColumns={templateColumns} h="full" w="full" asChild>
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavigationMenu.List asChild>
              <List.Root listStyleType="none" p={PADDING / 2} m="0">
                {items.map((item) => {
                  const { label, description, icon: ItemIcon, ...action } = item
                  const subItems = action.items || []
                  const isLink = "href" in action
                  const isActivePage =
                    isLink && cleanPath(asPath) === action.href

                  const activeStyles = {
                    outline: "none",
                    rounded: "md",
                    "p, svg": { color: menuColors.highlight },
                    bg: menuColors.lvl[lvl].activeBackground,
                    boxShadow: "none",
                  }

                  const buttonProps: ButtonProps = {
                    color: menuColors.body,
                    position: "relative",
                    w: "full",
                    me: -PADDING,
                    css: {
                      "span:first-of-type": { m: 0, me: 4 }, // Spacing for icon
                    },
                    py: PADDING,
                    bg: isActivePage
                      ? menuColors.lvl[lvl].activeBackground
                      : "none",
                    _hover: activeStyles,
                    _focus: activeStyles,
                    variant: "ghost",
                  }

                  const LeftButtonIcon = () =>
                    lvl === 1 && ItemIcon ? (
                      <Icon asChild>
                        <ItemIcon />
                      </Icon>
                    ) : null
                  const RightButtonIcon = () =>
                    isLink ? null : <NextChevron />

                  return (
                    <NavigationMenu.Item key={label} asChild>
                      <List.Item
                        mb={PADDING / 2}
                        _last={{ mb: 0 }}
                        css={{
                          '&:has(button[data-state="open"])': {
                            roundedStart: "md",
                            roundedEnd: "none",
                            bg: menuColors.lvl[lvl].activeBackground,
                            me: -PADDING,
                            pe: PADDING,
                          },
                        }}
                      >
                        {isLink ? (
                          <NextLink href={action.href!} passHref legacyBehavior>
                            <NavigationMenu.Link asChild>
                              <Button
                                as={Link}
                                onClick={() => {
                                  onClose()
                                  trackCustomEvent({
                                    eventCategory: "Desktop navigation menu",
                                    eventAction: `Menu - ${activeSection} - ${locale}`,
                                    eventName: action.href!,
                                  })
                                }}
                                {...buttonProps}
                              >
                                <LeftButtonIcon />
                                <ItemContent item={item} lvl={lvl} />
                                <RightButtonIcon />
                              </Button>
                            </NavigationMenu.Link>
                          </NextLink>
                        ) : (
                          <>
                            <NavigationMenu.Trigger asChild>
                              <Button {...buttonProps}>
                                <LeftButtonIcon />
                                <ItemContent item={item} lvl={lvl} />
                                <RightButtonIcon />
                              </Button>
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content asChild>
                              <Box
                                bg={menuColors.lvl[lvl + 1].background}
                                h="full"
                              >
                                <SubMenu
                                  lvl={(lvl + 1) as Level}
                                  items={subItems}
                                  activeSection={activeSection}
                                  onClose={onClose}
                                />
                              </Box>
                            </NavigationMenu.Content>
                          </>
                        )}
                      </List.Item>
                    </NavigationMenu.Item>
                  )
                })}
              </List.Root>
            </NavigationMenu.List>
            <NavigationMenu.Viewport style={{ gridColumn: "2/4" }} />
          </motion.div>
        </Grid>
      </AnimatePresence>
    </NavigationMenu.Sub>
  )
}

export default SubMenu
