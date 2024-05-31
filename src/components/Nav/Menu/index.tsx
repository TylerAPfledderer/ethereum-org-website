import { motion } from "framer-motion"
import { Box, type BoxProps, List, Text } from "@chakra-ui/react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import Button from "@/components/Buttons/Button"

import { MAIN_NAV_ID, NAV_PY, SECTION_LABELS } from "@/lib/constants"

import type { NavSections } from "../types"

import SubMenu from "./SubMenu"
import { useNavMenu } from "./useNavMenu"

type NavMenuProps = BoxProps & {
  sections: NavSections
}

const Menu = ({ sections, ...props }: NavMenuProps) => {
  const {
    activeSection,
    containerVariants,
    direction,
    handleSectionChange,
    isOpen,
    menuColors,
    onClose,
  } = useNavMenu(sections)

  return (
    <Box {...props}>
      <NavigationMenu.Root
        dir={direction}
        orientation="horizontal"
        onValueChange={handleSectionChange}
        delayDuration={0}
      >
        <NavigationMenu.List asChild>
          <List.Root id={MAIN_NAV_ID} display="flex" listStyleType="none" m="0">
            {SECTION_LABELS.map((sectionKey) => {
              const { label, items } = sections[sectionKey]
              const isActive = activeSection === sectionKey
              return (
                <NavigationMenu.Item key={sectionKey} value={label}>
                  <NavigationMenu.Trigger asChild>
                    <Button
                      py="2"
                      px={{ base: "3", lg: "4" }}
                      variant="ghost"
                      whiteSpace="nowrap"
                      color={isActive ? "primary.base" : "body.base"}
                      _after={{
                        content: '""',
                        position: "absolute",
                        insetInline: 0,
                        top: "100%",
                        height: NAV_PY,
                      }}
                    >
                      {/* Animated highlight for active section */}
                      {isActive && (
                        <Box
                          bg="primary.lowContrast"
                          inset="0"
                          position="absolute"
                          rounded="base"
                          zIndex={0}
                          asChild
                        >
                          <motion.div layoutId="active-section-highlight" />
                        </Box>
                      )}
                      <Text as="span" position="relative" zIndex={1}>
                        {label}
                      </Text>
                    </Button>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content asChild>
                    {/**
                     * This is the CONTAINER for all three menu levels
                     * This renders inside the NavigationMenu.Viewport component
                     */}
                    <Box
                      bg={menuColors.lvl[1].background}
                      border="1px"
                      borderColor={menuColors.stroke}
                      insetInline="0"
                      position="absolute"
                      shadow="md"
                      top="19"
                      asChild
                    >
                      <motion.div
                        variants={containerVariants}
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                      >
                        <SubMenu
                          lvl={1}
                          items={items}
                          activeSection={activeSection}
                          onClose={onClose}
                        />
                      </motion.div>
                    </Box>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              )
            })}
          </List.Root>
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </Box>
  )
}

export default Menu
