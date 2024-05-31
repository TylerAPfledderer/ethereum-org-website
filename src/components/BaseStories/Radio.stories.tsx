import * as React from "react"
import { Flex, RadioGroup } from "@chakra-ui/react"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Atoms / Form / Radio",
  component: RadioGroup.Item,
  argTypes: {
    flexDirection: {
      options: ["column", "row"],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      expanded: false,
    },
  },
} satisfies Meta<typeof RadioGroup.Item>

export default meta

type Story = StoryObj<typeof meta>

export const Radio: Story = {
  args: {
    flexDirection: "column",
  },
  argTypes: {
    value: {
      options: ["checked", "disabled", "focusable", "read-only", "required"],
      control: {
        type: "radio",
      },
    },
  },
  render: ({ flexDirection, value }) => (
    <RadioGroup.Root value={value}>
      <Flex flexDirection={flexDirection} gap={4} align="flex-start">
        <RadioGroup.Item value="checked">defaultValue</RadioGroup.Item>
        <RadioGroup.Item value="disabled" disabled>
          isDisabled
        </RadioGroup.Item>
        <RadioGroup.Item value="focusable" focusable disabled>
          isFocusable and disabled
        </RadioGroup.Item>
        <RadioGroup.Item value="read-only" readOnly>
          isReadOnly
        </RadioGroup.Item>
        <RadioGroup.Item value="required" required>
          isRequired
        </RadioGroup.Item>
        <RadioGroup.Item value="invalid" invalid>
          isInvalid
        </RadioGroup.Item>
      </Flex>
    </RadioGroup.Root>
  ),
}
