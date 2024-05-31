import { forwardRef } from "react"
import { Icon, Tag as ChakraTag, type TagRootProps } from "@chakra-ui/react"

export interface EthTagProps extends TagRootProps {
  label: React.ReactNode
  isCloseable?: boolean
  leftIcon?: any
  rightIcon?: any
  status?: "normal" | "tag" | "success" | "error" | "warning"
}

const Tag = forwardRef<HTMLSpanElement, EthTagProps>(function Tag(props, ref) {
  const {
    label,
    isCloseable = false,
    status = "normal",
    leftIcon,
    rightIcon,
    ...rest
  } = props

  const commonIconProps = {
    m: 0,
  }
  return (
    <ChakraTag.Root ref={ref} status={status} {...rest}>
      {leftIcon ? (
        <Icon as={leftIcon} boxSize="6" {...commonIconProps} />
      ) : null}
      <ChakraTag.Label noOfLines={2}>{label}</ChakraTag.Label>
      {rightIcon ? (
        <Icon as={rightIcon} boxSize="22px" {...commonIconProps} />
      ) : null}
      {isCloseable ? <ChakraTag.CloseTrigger /> : null}
    </ChakraTag.Root>
  )
})

export default Tag
