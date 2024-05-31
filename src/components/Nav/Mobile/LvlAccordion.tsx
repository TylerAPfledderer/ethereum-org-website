import { useRouter } from "next/router"
import { Accordion, Box, Button, chakra, Heading, Text } from "@chakra-ui/react"

import { BaseLink } from "@/components/Link"

import { trackCustomEvent } from "@/lib/utils/matomo"
import { cleanPath } from "@/lib/utils/url"

import type { Level, NavItem, NavSectionKey } from "../types"

import ExpandIcon from "./ExpandIcon"

import { useNavMenuColors } from "@/hooks/useNavMenuColors"

type LvlAccordionProps = {
  lvl: Level
  items: NavItem[]
  activeSection: NavSectionKey
  onToggle: () => void
}

const LvlAccordion = ({
  lvl,
  items,
  activeSection,
  onToggle,
}: LvlAccordionProps) => {
  const { asPath, locale } = useRouter()
  const menuColors = useNavMenuColors()
  return (
    <Accordion.Root collapsible boxShadow="menu.accordion">
      {items.map(({ label, description, ...action }) => {
        const isLink = "href" in action
        const isActivePage = isLink && cleanPath(asPath) === action.href
        if (isLink)
          return (
            <Accordion.Item
              key={label}
              value={label}
              borderTop="1px"
              borderColor="inherit"
              _last={{ borderBottomWidth: "1px" }}
            >
              <Button
                borderColor={menuColors.stroke}
                borderRadius="none"
                gap="2"
                justifyContent="start"
                ps={(lvl + 2) * 4}
                py="4"
                variant="ghost"
                w="full"
                _hover={{
                  color: menuColors.highlight,
                }}
                onClick={() => {
                  trackCustomEvent({
                    eventCategory: "Mobile navigation menu",
                    eventAction: `Menu: ${locale} - ${activeSection}`,
                    eventName: action.href!,
                  })
                  onToggle()
                }}
                asChild
              >
                <BaseLink href={action.href}>
                  <Box flex="1" textAlign="start">
                    <Text
                      fontWeight="bold"
                      fontSize="md"
                      color={isActivePage ? menuColors.active : menuColors.body}
                    >
                      {label}
                    </Text>
                    <Text
                      fontWeight="regular"
                      fontSize="sm"
                      color={
                        isActivePage
                          ? menuColors.active
                          : menuColors.lvl[lvl].subtext
                      }
                    >
                      {description}
                    </Text>
                  </Box>
                </BaseLink>
              </Button>
            </Accordion.Item>
          )
        return (
          <Accordion.Item
            key={label}
            value={label}
            borderTop="1px"
            borderColor="inherit"
            _last={{ borderBottomWidth: "1px" }}
          >
            {/* {({ isExpanded }) => ( */}
            <>
              <Heading
                as={chakra[`h${lvl + 1}`]}
                color={menuColors.body}
                py="0"
                borderColor={menuColors.stroke}
                onClick={() => {
                  // trackCustomEvent({
                  //   eventCategory: "Mobile navigation menu",
                  //   eventAction: `Level ${lvl - 1} section changed`,
                  //   eventName: `${
                  //     isExpanded ? "Close" : "Open"
                  //   } section: ${label} - ${description.slice(0, 16)}...`,
                  // })
                }}
              >
                <Accordion.ItemTrigger
                  justifyContent="start"
                  gap="2"
                  ps={lvl * 4}
                  pe="4"
                  py="4"
                >
                  {/* <ExpandIcon isOpen={isExpanded} /> */}
                  <Box flex="1" textAlign="start">
                    <Text
                      fontWeight="bold"
                      fontSize="md"
                      color={menuColors.body}
                    >
                      {label}
                    </Text>
                    <Text
                      fontWeight="regular"
                      fontSize="sm"
                      color={menuColors.lvl[lvl].subtext}
                    >
                      {description}
                    </Text>
                  </Box>
                </Accordion.ItemTrigger>
              </Heading>

              <Accordion.ItemContent
                p="0"
                mt="0"
                bg={menuColors.lvl[lvl + 1].background}
              >
                <LvlAccordion
                  lvl={(lvl + 1) as Level}
                  items={action.items}
                  activeSection={activeSection}
                  onToggle={onToggle}
                />
              </Accordion.ItemContent>
            </>
            {/* )} */}
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}

export default LvlAccordion
