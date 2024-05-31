import React, { type ReactNode } from "react"
import { Flex, Popover } from "@chakra-ui/react"

type NotificationPopoverProps = Omit<Popover.ContentProps, "children"> &
  Pick<Popover.RootProps, "positioning"> & {
    children: ReactNode
  }
export const NotificationPopover = ({
  positioning,
  children,
  content,
  title,
  ...restProps
}: NotificationPopoverProps) => {
  return (
    <Popover.Root positioning={positioning}>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content px={4} py={2} maxW="15rem" fontSize="xs" {...restProps}>
        <Flex gap={2}>
          <Popover.Header fontWeight="bold" mb={2} flex={1} mt={0.5} p={0}>
            {title || ""}
          </Popover.Header>
          <Popover.CloseTrigger ms="auto" />
        </Flex>
        <Popover.Body p={0}>{content}</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}
