import type { RefObject } from "react"
import {
  type ButtonProps,
  Drawer,
  Portal,
  useBreakpointValue,
} from "@chakra-ui/react"

import type { NavSections } from "../types"

import HamburgerButton from "./HamburgerButton"
import MenuBody from "./MenuBody"
import MenuFooter from "./MenuFooter"
import MenuHeader from "./MenuHeader"

type MobileNavMenuProps = ButtonProps & {
  open: boolean
  onToggle: () => void
  toggleColorMode: () => void
  toggleSearch: () => void
  linkSections: NavSections
  fromPageParameter: string
  drawerContainerRef: RefObject<HTMLElement | null>
}

const MobileNavMenu = ({
  open,
  onToggle,
  toggleColorMode,
  toggleSearch,
  linkSections,
  fromPageParameter,
  drawerContainerRef,
  ...props
}: MobileNavMenuProps) => {
  const isMenuOpen = useBreakpointValue({ base: open, md: false }) as boolean

  return (
    <>
      <HamburgerButton isMenuOpen={isMenuOpen} onToggle={onToggle} {...props} />

      {/* DRAWER MENU */}
      <Drawer.Root
        open={isMenuOpen}
        onOpenChange={onToggle}
        placement="start"
        size="md"
      >
        <Drawer.Backdrop onClick={onToggle} bg="modalBackground" />
        <Portal containerRef={drawerContainerRef}>
          <Drawer.Positioner>
            <Drawer.Content bg="background.base">
              {/* HEADER ELEMENTS: SITE NAME, CLOSE BUTTON */}
              <MenuHeader />

              {/* MAIN NAV ACCORDION CONTENTS OF MOBILE MENU */}
              <MenuBody linkSections={linkSections} onToggle={onToggle} />

              {/* FOOTER ELEMENTS: SEARCH, LIGHT/DARK, LANGUAGES */}
              <MenuFooter
                onToggle={onToggle}
                toggleSearch={toggleSearch}
                toggleColorMode={toggleColorMode}
              />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  )
}

export default MobileNavMenu
