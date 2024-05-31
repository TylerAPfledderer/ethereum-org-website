import * as React from "react"
import {
  Group,
  Input as ChakraInput,
  InputElement,
  type InputProps as ChakraInputProps,
} from "@chakra-ui/react"

type CommonProps = ChakraInputProps

type NoIconProps = CommonProps & { rightIcon?: never }

type WithIconProps = CommonProps & {
  /**
   * The Icon used to render `InputRightElement` on the right side of the input
   */
  rightIcon: (props: any) => JSX.Element
  /**
   * Primarily for style props to be applied to the wrapper
   */
  inputGroupProps?: ChakraInputProps
}

type InputProps = NoIconProps | WithIconProps

function Input(props: NoIconProps): JSX.Element
function Input(props: WithIconProps): JSX.Element
function Input(props: InputProps) {
  if (props.rightIcon) {
    const { size, inputGroupProps, rightIcon: Icon, ...rest } = props
    return (
      <Group size={size} {...inputGroupProps}>
        <ChakraInput data-peer {...rest} />
        <InputElement placement="end">
          <Icon />
        </InputElement>
      </Group>
    )
  }

  const { size, ...rest } = props

  return <ChakraInput size={size} {...rest} />
}

export default Input
