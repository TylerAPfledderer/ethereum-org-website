import { cssVar } from "@chakra-ui/react"

// Because the color scheme from the default theme
// Goes through the `Badge` config, used the variables
// created from that config.
export const $badgeBg = cssVar("badge-bg")
export const $badgeColor = cssVar("badge-color")

export const $tagBoxshadowColor = cssVar("tag-boxshadow-color")

export const FOCUS_HOVER = "&:focus-visible, &:hover"

// TODO: Can this get consolidated?
export const STATUS_COLORS = {
  normal: {
    subtle: {
      container: {
        [$badgeBg.variable]: "colors.background.highlight",
        [$badgeColor.variable]: "colors.body.medium",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            [$tagBoxshadowColor.variable]: "colors.background.highlight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primary.light",
            [$badgeColor.variable]: "colors.body.medium",
            outlineColor: "primary.hover",
          },
          _active: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.primary.light",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "body.medium",
          color: "background.base",
        },
      },
    },
    solid: {
      container: {
        [$badgeBg.variable]: "colors.body.medium",
        [$badgeColor.variable]: "colors.background.highlight",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            [$tagBoxshadowColor.variable]: "colors.background.highlight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primary.light",
            [$badgeColor.variable]: "colors.body.medium",
            outlineColor: "primary.hover",
          },
          _active: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.primary.light",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "background.base",
          color: "body.base",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.body.medium",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            bg: $badgeBg.reference,
            [$tagBoxshadowColor.variable]: "colors.background.highlight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
            borderColor: "transparent",
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primary.light",
            [$badgeColor.variable]: "colors.body.medium",
            bg: $badgeBg.reference,
            outlineColor: "primary.hover",
            borderColor: "transparent",
          },
          _active: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.primary.light",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "body.medium",
          color: "body.light",
        },
      },
    },
  },
  tag: {
    subtle: {
      conatiner: {
        [$badgeBg.variable]: "colors.primary.light",

        [$badgeColor.variable]: "colors.primary.dark",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            [$tagBoxshadowColor.variable]: "colors.primary.light",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            outlineColor: "primary.base",
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "primary.visited",
          color: "white",
        },
      },
    },
    solid: {
      conatiner: {
        [$badgeBg.variable]: "colors.primary.dark",
        [$badgeColor.variable]: "colors.primary.light",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            [$tagBoxshadowColor.variable]: "colors.primary.light",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primary.hover",
            [$badgeColor.variable]: "colors.background.base",
            outlineColor: "primary.base",
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "primary.hover",
          color: "primary.lowContrast",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.primary.highContrast",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primary.light",
            [$badgeColor.variable]: "colors.primary.dark",
            bg: $badgeBg.reference,
            [$tagBoxshadowColor.variable]: "colors.primary.light",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primary.light",
            [$badgeColor.variable]: "colors.primary.dark",
            bg: $badgeBg.reference,
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "primary.highContrast",
          color: "background.base",
        },
      },
    },
  },
  success: {
    subtle: {
      conatiner: {
        [$badgeBg.variable]: "colors.success.light",
        [$badgeColor.variable]: "colors.success.base",
        "&:any-link": {
          _hover: {
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
        },
        closeButton: {
          [FOCUS_HOVER]: {
            bg: "success.base",
            color: "success.light",
          },
        },
      },
    },
    solid: {
      conatiner: {
        [$badgeBg.variable]: "colors.success.base",
        [$badgeColor.variable]: "colors.success.light",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.success.light",
            [$badgeColor.variable]: "colors.success.base",
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.success.light",
            [$badgeColor.variable]: "colors.success.base",
            outlineColor: $badgeColor.reference,
          },
          _active: {
            [$badgeBg.variable]: "colors.success.light",
            [$badgeColor.variable]: "colors.success.base",
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "success.light",
          color: "success.base",
        },
      },
    },
    outline: {
      conatiner: {
        [$badgeColor.variable]: "colors.success.outline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.success.light",
            [$badgeColor.variable]: "colors.success.base",
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
            bg: $badgeBg.reference,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.success.light",
            [$badgeColor.variable]: "colors.success.base",
            bg: $badgeBg.reference,
            outlineColor: $badgeColor.reference,
          },
          _active: {
            [$badgeBg.variable]: "colors.success.light",
            [$badgeColor.variable]: "colors.success.base",
            bg: $badgeBg.reference,
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "body.medium",
          color: "background.base",
        },
      },
    },
  },
  error: {
    subtle: {
      conatiner: {
        [$badgeBg.variable]: "colors.error.light",
        [$badgeColor.variable]: "colors.error.base",
        "&:any-link": {
          _hover: {
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "error.base",
          color: "error.light",
        },
      },
    },
    solid: {
      conatiner: {
        [$badgeBg.variable]: "colors.error.base",
        [$badgeColor.variable]: "colors.error.light",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.error.light",
            [$badgeColor.variable]: "colors.error.base",
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.error.light",
            [$badgeColor.variable]: "colors.error.base",
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "error.light",
          color: "error.base",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.error.outline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.error.light",
            [$badgeColor.variable]: "colors.error.base",
            bg: $badgeBg.reference,
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.error.light",
            [$badgeColor.variable]: "colors.error.base",
            bg: $badgeBg.reference,
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "body.medium",
          color: "background.base",
        },
      },
    },
  },
  warning: {
    subtle: {
      conatiner: {
        [$badgeBg.variable]: "colors.attention.light",
        [$badgeColor.variable]: "colors.attention.base",
        "&:any-link": {
          _hover: {
            [$tagBoxshadowColor.variable]: "colors.attention.base",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "attention.base",
          color: "attention.light",
        },
      },
    },
    solid: {
      conatiner: {
        [$badgeBg.variable]: "colors.attention.base",
        [$badgeColor.variable]: "white",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.attention.light",
            [$badgeColor.variable]: "colors.attention.base",
            [$tagBoxshadowColor.variable]: "colors.attention.base",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.attention.light",
            [$badgeColor.variable]: "colors.attention.base",
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "attention.light",
          color: "attention.base",
        },
      },
    },
    outline: {
      conatiner: {
        [$badgeColor.variable]: "colors.attention.outline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.attention.light",
            [$badgeColor.variable]: "colors.attention.base",
            [$tagBoxshadowColor.variable]: "colors.attention.base",
            bg: $badgeBg.reference,
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.attention.light",
            [$badgeColor.variable]: "colors.attention.base",
            bg: $badgeBg.reference,
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "body.medium",
          color: "background.base",
        },
      },
    },
  },
}
