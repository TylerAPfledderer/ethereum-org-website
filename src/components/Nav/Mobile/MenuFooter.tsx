import { useTranslation } from "next-i18next"
import { useTheme } from "next-themes"
import { BsTranslate } from "react-icons/bs"
import { MdBrightness2, MdSearch, MdWbSunny } from "react-icons/md"
import { DrawerFooter, Grid, Menu } from "@chakra-ui/react"

import LanguagePicker from "@/components/LanguagePicker"

import { MOBILE_LANGUAGE_BUTTON_NAME } from "@/lib/constants"

import FooterButton from "./FooterButton"
import FooterItemText from "./FooterItemText"

type MenuFooterProps = {
  onToggle: () => void
  toggleColorMode: () => void
  toggleSearch: () => void
}

const MenuFooter = ({
  onToggle,
  toggleColorMode,
  toggleSearch,
}: MenuFooterProps) => {
  const { t } = useTranslation("common")
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const ThemeIcon = !isDark ? MdBrightness2 : MdWbSunny
  const themeLabelKey = !isDark ? "dark-mode" : "light-mode"

  return (
    <DrawerFooter
      bg="background.base"
      borderTop="1px"
      borderColor="primary.lowContrast"
      justifyContent="space-between"
      height="108px"
      px={4}
      py={0}
      mt="auto"
    >
      <Grid templateColumns="repeat(3, 1fr)" w="full">
        <FooterButton
          icon={MdSearch}
          onClick={() => {
            // Workaround to ensure the input for the search modal can have focus
            onToggle()
            toggleSearch()
          }}
        >
          <FooterItemText>{t("search")}</FooterItemText>
        </FooterButton>

        <FooterButton icon={ThemeIcon} onClick={toggleColorMode}>
          <FooterItemText>{t(themeLabelKey)}</FooterItemText>
        </FooterButton>
        <LanguagePicker
          hideFrom="md"
          position="fixed"
          w="calc(100vw - var(--eth-sizes-8))"
          inset="4"
          handleClose={onToggle}
          _before={{
            content: '""',
            position: "fixed",
            inset: 0,
            bg: "black",
            opacity: 0.4,
          }} // TODO: Replace with overlay component
        >
          <Menu.Trigger name={MOBILE_LANGUAGE_BUTTON_NAME} asChild>
            <FooterButton icon={BsTranslate}>
              <FooterItemText>{t("languages")}</FooterItemText>
            </FooterButton>
          </Menu.Trigger>
        </LanguagePicker>
      </Grid>
    </DrawerFooter>
  )
}

export default MenuFooter
