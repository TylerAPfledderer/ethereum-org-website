import * as React from "react"
import { MdChevronRight, MdExpandMore, MdNightlight } from "react-icons/md"
import { HStack, Text, ThemingProps, VStack } from "@chakra-ui/react"
import { Meta, StoryObj } from "@storybook/react"

import { getThemingArgTypes } from "../../../.storybook/types"
import theme from "../../@chakra-ui/theme"
import Translation from "../Translation"

import Button from "./Button"
import ButtonLink from "./ButtonLink"
import IconButton from "./IconButton"

const meta = {
  title: "Atoms / Form / Buttons",
  component: Button,
  args: {
    children: "What is Ethereum?",
  },
  argTypes: {
    isSecondary: {
      defaultValue: false,
      type: "boolean",
      name: "Is a secondary color?",
      if: { arg: "variant", neq: "solid" },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const variants: ThemingProps<"Button">["variant"][] = [
  "solid",
  "outline",
  "ghost",
  "link",
]

export const StyleVariants: Story = {
  argTypes: {
    size: {
      ...getThemingArgTypes(theme, "Button")?.size,
      defaultValue: "md",
    },
  },
  render: (args) => (
    <VStack gap="4">
      {variants.map((variant, idx) => (
        <HStack gap="4" key={idx}>
          <Button variant={variant} {...args} />
          <Button variant={variant} disabled {...args} />
        </HStack>
      ))}
    </VStack>
  ),
}

export const IconVariants: Story = {
  argTypes: {
    variant: {
      control: "radio",
      options: ["solid", "outline", "ghost", "link"],
    },
  },
  render: ({ children, ...args }) => (
    <HStack>
      <VStack>
        <Button {...args}>{children}</Button>
        <Button size="sm" {...args}>
          {children}
        </Button>
      </VStack>
      <VStack>
        <Button {...args}>
          <MdExpandMore />
          {children}
        </Button>
        <Button size="sm" {...args}>
          <MdExpandMore />
          {children}
        </Button>
      </VStack>
      <VStack>
        <Button {...args}>
          {children}
          <MdChevronRight />
        </Button>
        <Button size="sm" {...args}>
          {children}
          <MdChevronRight />
        </Button>
      </VStack>
      <VStack>
        <IconButton aria-label="next" {...args}>
          <MdChevronRight />
        </IconButton>
        <IconButton aria-label="next" size="sm" {...args}>
          <MdChevronRight />
        </IconButton>
      </VStack>
    </HStack>
  ),
}

export const MultiLineText: Story = {
  args: {
    children: "Button label can have two lines",
  },
  render: ({ children, ...args }) => (
    <HStack>
      <VStack maxW="171px">
        <Button variant="outline" isSecondary {...args}>
          {children}
        </Button>
        <Button variant="outline" size="sm" isSecondary {...args}>
          {children}
        </Button>
      </VStack>
      <VStack maxW="171px">
        <Button {...args}>{children}</Button>
        <Button size="sm" isSecondary {...args}>
          {children}
        </Button>
      </VStack>
      <VStack maxW="209px">
        <Button {...args}>
          {children}
          <MdChevronRight />
        </Button>
        <Button size="sm" isSecondary {...args}>
          {children}
          <MdChevronRight />
        </Button>
      </VStack>
    </HStack>
  ),
}

export const OverrideStyles: Story = {
  render: () => (
    <>
      <Text>
        Show custom styling examples here for visual testing of overrides from
        the theme config
      </Text>
      <VStack>
        <IconButton aria-label="toggle" px="1.5">
          <MdNightlight />
        </IconButton>
        <ButtonLink href="#" borderRadius="full" px="0" py="0">
          <Translation id="get-involved" />
        </ButtonLink>
      </VStack>
    </>
  ),
}
