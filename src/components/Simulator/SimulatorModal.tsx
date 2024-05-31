import React from "react"
import type { UseDisclosureReturn } from "@chakra-ui/hooks"
import { Dialog } from "@chakra-ui/react"

type SimulatorModalProps = Dialog.ContentProps &
  Pick<Dialog.RootProps, "size"> & {
    open: UseDisclosureReturn["open"]
    onClose: UseDisclosureReturn["onClose"]
    children?: React.ReactNode
  }

export const SimulatorModal = ({
  open,
  onClose,
  children,
  size,
  ...restProps
}: SimulatorModalProps) => {
  return (
    <Dialog.Root
      open={open}
      centered
      size="full"
      scrollBehavior="inside"
      onOpenChange={onClose}
    >
      <Dialog.Backdrop bgColor="blackAlpha.700" />

      <Dialog.Content
        py={8}
        px={{ base: 4, sm: 8 }}
        shadow="md"
        border="1px"
        borderColor="border"
        borderRadius="md"
        overflowY="auto"
        overflowX="hidden"
        minH="unset"
        h="100%"
        maxH={{
          base: "calc(100vh - 1rem)",
          md: "min(calc(100vh - 2rem), 792px)",
        }}
        maxW={{
          base: "calc(100vw - 1rem)",
          md: "min(calc(100vw - 2rem), 1000px)",
        }}
        {...restProps}
      >
        <Dialog.CloseTrigger />
        {children}
      </Dialog.Content>
    </Dialog.Root>
  )
}
