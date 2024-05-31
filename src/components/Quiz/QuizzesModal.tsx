import { Center, Dialog } from "@chakra-ui/react"

import { QuizStatus } from "@/lib/types"

type QuizzesModalProps = Omit<
  Dialog.RootProps,
  "isCentered" | "scrollBehavior"
> & {
  children: React.ReactNode
  quizStatus: QuizStatus
}

const QuizzesModal = ({
  children,
  quizStatus,
  ...props
}: QuizzesModalProps) => {
  const getStatusColor = (): Dialog.ContentProps["bg"] => {
    if (quizStatus === "neutral") {
      return "neutral"
    }
    if (quizStatus === "success") {
      return "success.neutral"
    }
    return "error.neutral"
  }

  return (
    <Dialog.Root
      isCentered
      size={{ base: "full", md: "xl" }}
      scrollBehavior="inside"
      {...props}
    >
      <Dialog.Backdrop bg="blackAlpha.700" />

      <Center m={0} bg={getStatusColor()} py="16" asChild>
        <Dialog.Content>
          <Dialog.CloseTrigger size="lg" p="6" zIndex="1" />
          {children}
        </Dialog.Content>
      </Center>
    </Dialog.Root>
  )
}

export default QuizzesModal
