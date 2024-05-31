import React, { ReactNode, useEffect } from "react"
import { useDisclosure } from "@chakra-ui/hooks"
import {
  type PopoverRootProps,
  Tooltip as ChakraTooltip,
} from "@chakra-ui/react"

export interface TooltipProps extends PopoverRootProps {
  content: ReactNode
  children?: ReactNode
  onBeforeOpen?: () => void
}

const Tooltip = ({
  content,
  children,
  onBeforeOpen,
  ...rest
}: TooltipProps) => {
  const { open, onOpen, onClose } = useDisclosure()

  // Close the tooltip when the user scrolls.
  // This is useful for mobile devices where the tooltip is open by clicking the
  // trigger, not hovering.
  // TODO: Is this still needed or is this breaking?
  useEffect(() => {
    let originalPosition = 0

    const handleScroll = () => {
      const delta = window.scrollY - originalPosition

      // Close the popover if the user scrolls more than 80px
      if (open && Math.abs(delta) > 80) {
        onClose()
      }
    }

    // Add event listener when the popover is open
    if (open) {
      window.addEventListener("scroll", handleScroll)
      originalPosition = window.scrollY
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [open, onClose])

  const handleOpen = () => {
    onBeforeOpen?.()
    onOpen()
  }

  return (
    <ChakraTooltip.Root
      open={open}
      onOpenChange={({ open }) => {
        open ? onClose() : handleOpen()
      }}
      positioning={{
        placement: "top",
        gutter: 8,
      }}
      interactive
      {...rest}
    >
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <ChakraTooltip.Positioner>
        <ChakraTooltip.Content>
          <ChakraTooltip.Arrow />
          <ChakraTooltip.Content>{content}</ChakraTooltip.Content>
        </ChakraTooltip.Content>
      </ChakraTooltip.Positioner>
    </ChakraTooltip.Root>
  )
}

export default Tooltip
