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
        [$badgeBg.variable]: "colors.backgroundHighlight",
        [$badgeColor.variable]: "colors.bodyMedium",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            [$tagBoxshadowColor.variable]: "colors.backgroundHighlight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primaryLight",
            [$badgeColor.variable]: "colors.bodyMedium",
            outlineColor: "primaryHover",
          },
          _active: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.primaryLight",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "bodyMedium",
          color: "background",
        },
      },
    },
    solid: {
      container: {
        [$badgeBg.variable]: "colors.bodyMedium",
        [$badgeColor.variable]: "colors.backgroundHighlight",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            [$tagBoxshadowColor.variable]: "colors.backgroundHighlight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primaryLight",
            [$badgeColor.variable]: "colors.bodyMedium",
            outlineColor: "primaryHover",
          },
          _active: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.primaryLight",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "background",
          color: "body",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.bodyMedium",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            bg: $badgeBg.reference,
            [$tagBoxshadowColor.variable]: "colors.backgroundHighlight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
            borderColor: "transparent",
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primaryLight",
            [$badgeColor.variable]: "colors.bodyMedium",
            bg: $badgeBg.reference,
            outlineColor: "primaryHover",
            borderColor: "transparent",
          },
          _active: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.primaryLight",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "bodyMedium",
          color: "bodyLight",
        },
      },
    },
  },
  tag: {
    subtle: {
      container: {
        [$badgeBg.variable]: "colors.primaryLight",
        [$badgeColor.variable]: "colors.primaryDark",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            [$tagBoxshadowColor.variable]: "colors.primaryLight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            outlineColor: "primary",
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "primaryVisited",
          color: "white",
        },
      },
    },
    solid: {
      container: {
        [$badgeBg.variable]: "colors.primaryDark",
        [$badgeColor.variable]: "colors.primaryLight",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            [$tagBoxshadowColor.variable]: "colors.primaryLight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primaryHover",
            [$badgeColor.variable]: "colors.background",
            outlineColor: "primary",
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "primaryHover",
          color: "primaryLowContrast",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.tagOutline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.primaryLight",
            [$badgeColor.variable]: "colors.primaryDark",
            bg: $badgeBg.reference,
            [$tagBoxshadowColor.variable]: "colors.primaryLight",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.primaryLight",
            [$badgeColor.variable]: "colors.primaryDark",
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
          bg: "primaryHighContrast",
          color: "background",
        },
      },
    },
  },
  success: {
    subtle: {
      container: {
        [$badgeBg.variable]: "colors.successLight",
        [$badgeColor.variable]: "colors.success",
        "&:any-link": {
          _hover: {
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "success",
          color: "successLight",
        },
      },
    },
    solid: {
      container: {
        [$badgeBg.variable]: "colors.success",
        [$badgeColor.variable]: "colors.successLight",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.successLight",
            [$badgeColor.variable]: "colors.success",
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.successLight",
            [$badgeColor.variable]: "colors.success",
            outlineColor: $badgeColor.reference,
          },
          _active: {
            [$badgeBg.variable]: "colors.successLight",
            [$badgeColor.variable]: "colors.success",
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "successLight",
          color: "success",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.successOutline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.successLight",
            [$badgeColor.variable]: "colors.success",
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
            bg: $badgeBg.reference,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.successLight",
            [$badgeColor.variable]: "colors.success",
            bg: $badgeBg.reference,
            outlineColor: $badgeColor.reference,
          },
          _active: {
            [$badgeBg.variable]: "colors.successLight",
            [$badgeColor.variable]: "colors.success",
            bg: $badgeBg.reference,
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "bodyMedium",
          color: "background",
        },
      },
    },
  },
  error: {
    subtle: {
      container: {
        [$badgeBg.variable]: "colors.errorLight",
        [$badgeColor.variable]: "colors.error",
        "&:any-link": {
          _hover: {
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "error",
          color: "errorLight",
        },
      },
    },
    solid: {
      container: {
        [$badgeBg.variable]: "colors.error",
        [$badgeColor.variable]: "colors.errorLight",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.errorLight",
            [$badgeColor.variable]: "colors.error",
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.errorLight",
            [$badgeColor.variable]: "colors.error",
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "errorLight",
          color: "error",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.errorOutline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.errorLight",
            [$badgeColor.variable]: "colors.error",
            bg: $badgeBg.reference,
            boxShadow: `2px 2px 0 ${$badgeColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.errorLight",
            [$badgeColor.variable]: "colors.error",
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
          bg: "bodyMedium",
          color: "background",
        },
      },
    },
  },
  warning: {
    subtle: {
      container: {
        [$badgeBg.variable]: "colors.attentionLight",
        [$badgeColor.variable]: "colors.attention",
        "&:any-link": {
          _hover: {
            [$tagBoxshadowColor.variable]: "colors.attention",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "attention",
          color: "attentionLight",
        },
      },
    },
    solid: {
      container: {
        [$badgeBg.variable]: "colors.attention",
        [$badgeColor.variable]: "white",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.attentionLight",
            [$badgeColor.variable]: "colors.attention",
            [$tagBoxshadowColor.variable]: "colors.attention",
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.attentionLight",
            [$badgeColor.variable]: "colors.attention",
            outlineColor: $badgeColor.reference,
          },
          _active: {
            boxShadow: "none",
          },
        },
      },
      closeButton: {
        [FOCUS_HOVER]: {
          bg: "attentionLight",
          color: "attention",
        },
      },
    },
    outline: {
      container: {
        [$badgeColor.variable]: "colors.attentionOutline",
        "&:any-link": {
          _hover: {
            [$badgeBg.variable]: "colors.attentionLight",
            [$badgeColor.variable]: "colors.attention",
            [$tagBoxshadowColor.variable]: "colors.attention",
            bg: $badgeBg.reference,
            boxShadow: `2px 2px 0 ${$tagBoxshadowColor.reference}`,
          },
          _focusWithin: {
            [$badgeBg.variable]: "colors.attentionLight",
            [$badgeColor.variable]: "colors.attention",
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
          bg: "bodyMedium",
          color: "background",
        },
      },
    },
  },
}
