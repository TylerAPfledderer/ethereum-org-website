import * as React from "react"
import { SimpleGrid, Switch as SwitchComponent } from "@chakra-ui/react"
import { Meta } from "@storybook/react"

const meta = {
  title: "Atoms / Form / Switch",
  component: SwitchComponent.Root,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      expanded: false,
    },
  },
} satisfies Meta<typeof SwitchComponent.Root>

export default meta

export const Switch = {
  render: () => (
    <SimpleGrid columns={{ base: 2, lg: 4 }} columnGap={1} alignItems="center">
      <span>isChecked:</span>
      <SwitchComponent.Root id="isChecked" checked />

      <span>isDisabled and checked:</span>
      <SwitchComponent.Root id="isDisabled" disabled defaultChecked />

      <span>isFocusable & isDisabled:</span>
      <SwitchComponent.Root id="isFocusable" focusable disabled />

      <span>isReadOnly:</span>
      <SwitchComponent.Root id="isReadOnly" readOnly />

      <span>isRequired:</span>
      <SwitchComponent.Root id="isRequired" required />
    </SimpleGrid>
  ),
}
