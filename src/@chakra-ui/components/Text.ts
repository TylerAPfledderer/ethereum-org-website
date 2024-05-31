import { defineRecipe } from "@chakra-ui/react"

export const textRecipe = defineRecipe({
  variants: {
    sizes: {
      "6xl": {
        fontSize: "6xl",
        lineHeight: "4xs",
      },
      "5xl": {
        fontSize: "5xl",
        lineHeight: "4xs",
      },
      "4xl": {
        fontSize: "4xl",
        lineHeight: "4xs",
      },
      "3xl": {
        fontSize: "3xl",
        lineHeight: "2xs",
      },
      "2xl": {
        fontSize: "2xl",
        lineHeight: "2xs",
      },
      xl: {
        fontSize: "xl",
        lineHeight: "xs",
      },
      lg: {
        fontSize: "lg",
        lineHeight: "base",
      },
      md: {
        fontSize: "md",
        lineHeight: "base",
      },
      sm: {
        fontSize: "sm",
        lineHeight: "base",
      },
      xs: {
        fontSize: "xs",
        lineHeight: "base",
      },
    },
  },
})
