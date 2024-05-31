import { useRouter } from "next/router"
import { Accordion, Box, Drawer, Heading } from "@chakra-ui/react"

import { trackCustomEvent } from "@/lib/utils/matomo"

import { SECTION_LABELS } from "@/lib/constants"

import type { Level, NavSections } from "../types"

import ExpandIcon from "./ExpandIcon"
import LvlAccordion from "./LvlAccordion"

import { useNavMenuColors } from "@/hooks/useNavMenuColors"

type MenuBodyProps = {
  onToggle: () => void
  linkSections: NavSections
}

const MenuBody = ({ linkSections, onToggle }: MenuBodyProps) => {
  const { locale } = useRouter()
  const menuColors = useNavMenuColors()

  return (
    <Drawer.Body as="nav" p="0">
      <Accordion.Root collapsible>
        {SECTION_LABELS.map((key) => {
          const { label, items } = linkSections[key]
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
                  as="h2"
                  color={menuColors.body}
                  py="0"
                  // bg={
                  //   isExpanded
                  //     ? menuColors.lvl[1].background
                  //     : "background.base"
                  // }
                  // borderBottom={isExpanded ? "1px" : "none"}
                  borderColor="disabled"
                  onClick={() => {
                    // trackCustomEvent({
                    //   eventCategory: "Mobile navigation menu",
                    //   eventAction: "Section changed",
                    //   eventName: `${
                    //     isExpanded ? "Close" : "Open"
                    //   } section: ${locale} - ${key}`,
                    // })
                  }}
                >
                  <Accordion.ItemTrigger
                    justifyContent="start"
                    gap="2"
                    _hover={{ bg: "none" }}
                    px="4"
                    py="4"
                  >
                    {/* <ExpandIcon isOpen={isExpanded} /> */}
                    <Box
                      as="span"
                      flex="1"
                      textAlign="start"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {label}
                    </Box>
                  </Accordion.ItemTrigger>
                </Heading>

                <Accordion.ItemContent
                  p="0"
                  mt="0"
                  bg={menuColors.lvl[2].background}
                >
                  <LvlAccordion
                    lvl={2 as Level}
                    items={items}
                    activeSection={key}
                    onToggle={onToggle}
                  />
                </Accordion.ItemContent>
              </>
              {/* )} */}
            </Accordion.Item>
          )
        })}
      </Accordion.Root>
    </Drawer.Body>
  )
}

export default MenuBody
