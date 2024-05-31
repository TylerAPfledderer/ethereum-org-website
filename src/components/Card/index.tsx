import { ReactNode } from "react"
import {
  Card as ChakraCard,
  Heading,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react"

import Emoji from "@/components/Emoji"

export type CardProps = Omit<StackProps, "children" | "title"> & {
  children?: ReactNode
  emoji?: string
  title?: ReactNode
  description?: ReactNode
}

const Card = ({ emoji, title, description, children, ...props }: CardProps) => (
  <ChakraCard.Root
    gap="4"
    justifyContent="space-between"
    bg="ednBackground"
    borderRadius="sm"
    border="1px"
    borderStyle="solid"
    borderColor="lightBorder"
    p="6"
    {...props}
  >
    <Stack gap="4">
      {emoji && <Emoji fontSize="5xl" lineHeight={0} text={emoji} />}
      <Stack gap="8">
        {title && (
          <Heading as="h3" fontSize="2xl">
            {title}
          </Heading>
        )}
        {description && <Text>{description}</Text>}
      </Stack>
    </Stack>
    {children}
  </ChakraCard.Root>
)

export default Card
