import React from "react"
import { Dialog } from "@chakra-ui/react"

export type ModalProps = Dialog.ContentProps &
  Pick<Dialog.RootProps, "size"> & {
    children?: React.ReactNode
    open: boolean
    setIsOpen: (isOpen: boolean) => void
  }

const Modal = ({
  children,
  open,
  setIsOpen,
  size,
  ...restProps
}: ModalProps) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => setIsOpen(false)}
      centered
      size={size ?? "xl"}
      scrollBehavior="inside"
    >
      <Dialog.Backdrop bgColor="blackAlpha.700" />

      <Dialog.Content
        p={8}
        shadow="md"
        border="1px"
        borderColor="border"
        borderRadius="md"
        {...restProps}
      >
        <Dialog.CloseTrigger />
        {children}
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default Modal
