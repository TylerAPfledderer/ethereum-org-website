import {
  createMultiStyleConfigHelpers,
  theme,
  defineStyle,
} from "@chakra-ui/react"
import { tagAnatomy } from "@chakra-ui/anatomy"
import { $badgeColor, FOCUS_HOVER, STATUS_COLORS } from "./utils"
import { defineMergeStyles } from "../components.utils"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

const { Tag: tagTheme } = theme.components

const baseStyleContainer = defineMergeStyles(tagTheme.baseStyle?.container, {
  border: "1px",
  borderColor: "transparent",
  boxSizing: "border-box",
  gap: 1,
  borderRadius: "full",
  px: 2,
  py: 0.5,
  minH: 8,
  fontWeight: 300,
  "&:any-link": {
    textDecor: "none",
    _focusWithin: {
      outline: "4px solid",
      outlineColor: "transparent",
      outlineOffset: 0,
    },
  },
})

const baseStyleLabel = defineStyle({
  ...tagTheme.baseStyle?.label,
  fontSize: "xs",
  textTransform: "uppercase",
  textAlign: "center",
  lineHeight: 1.6,
})

const baseStyleCloseButton = defineStyle({
  ...tagTheme.baseStyle?.closeButton,
  opacity: 1,
  m: 0,
  // Clear default
  _focusVisible: null,
  [FOCUS_HOVER]: {
    opacity: "initial",
  },
})

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton,
})

const getStatusStyles = (status: string, variant: string) => {
  return STATUS_COLORS[status][variant]
}

const variantSubtle = definePartsStyle((props) => {
  const { status = "normal" } = props
  const defaultStyles = tagTheme.variants?.subtle(props)
  const statusStyles = getStatusStyles(status, "subtle")
  console.log(
    "🚀 ~ file: index.ts:69 ~ variantSubtle ~ statusStyles:",
    statusStyles
  )
  return {
    container: {
      ...defaultStyles?.container,
      // Remove default dark mode styles
      _dark: {},
      ...statusStyles.container,
    },
    closeButton: {
      ...statusStyles.closeButton,
    },
  }
})

const variantSolid = definePartsStyle((props) => {
  const { status = "normal" } = props
  const defaultStyles = tagTheme.variants?.solid(props)
  const statusStyles = getStatusStyles(status, "solid")
  return {
    container: {
      ...defaultStyles?.container,
      // Remove default dark mode styles
      _dark: {},
      ...statusStyles.container,
    },
    closeButton: {
      ...statusStyles.closeButton,
    },
  }
})

const variantOutline = definePartsStyle((props) => {
  const { status = "normal" } = props
  const defaultStyles = tagTheme.variants?.outline(props)
  const statusStyles = getStatusStyles(status, "outline")
  return {
    container: {
      ...defaultStyles?.container,
      boxShadow: "none",
      borderColor: $badgeColor.reference,
      // Remove default dark mode styles
      _dark: {},
      ...statusStyles.container,
    },
    closeButton: {
      ...statusStyles.closeButton,
    },
  }
})

const variants = {
  subtle: variantSubtle,
  solid: variantSolid,
  outline: variantOutline,
}

export const Tag = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "subtle",
  },
})
