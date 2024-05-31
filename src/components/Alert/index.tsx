import { forwardRef } from "react"
import {
  Alert as ChakraAlert,
  type AlertStatus,
  CloseTrigger,
} from "@chakra-ui/react"

export type AlertStatusType = Exclude<AlertStatus, "loading">

interface AlertProps extends Omit<ChakraAlert.RootProps, "status"> {
  /**
   * Should the alert icon show?
   *
   * @default true
   */
  hasIcon?: boolean
  /**
   * The description of the alert
   */
  description: string
  status?: AlertStatusType
  /**
   * Function to handle closing of the Alert
   *
   * If this prop is present, a `CloseButton` component is rendered
   */
  onClose?: () => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  const {
    hasIcon = true,
    description,
    onClose,
    status = "info",
    ...rest
  } = props

  const isCloseable = !!onClose

  const closeButtonStateStyles = {
    borderRadius: "base",
    _active: {
      boxShadow: "none",
      transform: "translate(0)",
      transitionDuration: "20ms",
    },
  }

  return (
    <ChakraAlert.Root ref={ref} position="relative" status={status} {...rest}>
      <>
        {hasIcon ? (
          <ChakraAlert.Icon ms={isCloseable ? "auto" : undefined} />
        ) : null}
        <ChakraAlert.Description>{description}</ChakraAlert.Description>
        {isCloseable ? (
          <CloseTrigger
            onClick={onClose}
            ms="auto"
            {...closeButtonStateStyles}
          />
        ) : null}
      </>
    </ChakraAlert.Root>
  )
})

export default Alert
