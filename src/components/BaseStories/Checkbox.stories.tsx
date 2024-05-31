import * as React from "react"
import {
  Checkbox as CheckboxComponent,
  CheckboxGroup,
  VStack,
} from "@chakra-ui/react"
import { Meta } from "@storybook/react"

const meta = {
  title: "Atoms / Form / Checkbox",
  component: CheckboxComponent.Root,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      expanded: false,
    },
  },
} satisfies Meta<typeof CheckboxComponent.Root>

export default meta

const DEFAULT_VAL = "checked"

export const Checkbox = {
  render: () => (
    <CheckboxComponent.Group defaultValue={[DEFAULT_VAL]}>
      <VStack gap={4} align="flex-start">
        <CheckboxComponent.Root value={DEFAULT_VAL}>
          defaultValue
        </CheckboxComponent.Root>
        <CheckboxComponent.Root value="disabled" disabled>
          isDisabled
        </CheckboxComponent.Root>
        <CheckboxComponent.Root value="focusable" focusable disabled>
          isFocusable
        </CheckboxComponent.Root>
        <CheckboxComponent.Root value="read-only" readOnly>
          isReadOnly
        </CheckboxComponent.Root>
        <CheckboxComponent.Root value="required" required>
          isRequired
        </CheckboxComponent.Root>
        <CheckboxComponent.Root value="invalid" invalid>
          isInvalid
        </CheckboxComponent.Root>
      </VStack>
    </CheckboxComponent.Group>
  ),
}
