import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { MdExpandMore } from "react-icons/md"
import { useDisclosure } from "@chakra-ui/hooks"
import {
  Box,
  Center,
  Collapse,
  Heading,
  HStack,
  Icon,
  Stack,
  type StackProps,
  VStack,
} from "@chakra-ui/react"

import { Image, type ImageProps } from "@/components/Image"
import Text from "@/components/OldText"

export type ExpandableInfoProps = StackProps & {
  children?: ReactNode
  image?: ImageProps["src"]
  title: ReactNode
  contentPreview: ReactNode
  forceOpen?: boolean
  className?: string
}

const ExpandableInfo = ({
  image,
  title,
  contentPreview,
  children,
  background,
  forceOpen,
  className,
  ...props
}: ExpandableInfoProps) => {
  const { open, getButtonProps, getDisclosureProps } = useDisclosure({
    defaultOpen: forceOpen,
  })

  const chevronFlip = {
    collapsed: {
      rotate: 0,
      transition: {
        duration: 0.1,
      },
    },
    expanded: {
      rotate: 180,
      transition: {
        duration: 0.4,
      },
    },
  }

  const animateToggle = open ? "expanded" : "collapsed"

  return (
    <VStack
      border="1px"
      borderColor="border"
      borderRadius="2px"
      p="6"
      mb="4"
      gap="0"
      background={background ?? "background.base"}
      position="relative"
      _hover={{
        "& img": {
          transform: "scale(1.08)",
          transition: "transform 0.1s",
        },
      }}
      {...props}
    >
      <Stack
        justify="space-between"
        align="center"
        gap={{ base: 8, md: 12 }}
        flexDirection={{ base: "column", md: "row" }}
        width="full"
      >
        {image && (
          <Image
            src={image}
            alt=""
            sizes="300px"
            style={{ width: "300px", height: "auto" }}
          />
        )}
        <HStack gap="12" width="full">
          <Box me="4">
            <HStack width="full" my="4" css={{ img: { me: 6 } }}>
              <Heading
                mt="0"
                mb="1"
                fontSize={{ base: "2xl", md: "2rem" }}
                fontWeight="semibold"
                lineHeight="1.4"
              >
                {title}
              </Heading>
            </HStack>
            <Text color="text200" mb="0">
              {contentPreview}
            </Text>
          </Box>
        </HStack>
        {!forceOpen && (
          <Center
            {...getButtonProps()}
            width={{ base: "full", md: "5rem" }}
            minHeight={{ base: "full", md: "10rem" }}
            cursor="pointer"
            _hover={{
              "& svg": {
                transform: "scale(1.25)",
                transition: "transform 0.1s",
              },
            }}
            asChild
          >
            <motion.div
              variants={chevronFlip}
              animate={animateToggle}
              initial={false}
            >
              <Icon boxSize="initial" asChild>
                <MdExpandMore size="36" />
              </Icon>
            </motion.div>
          </Center>
        )}
      </Stack>
      <Collapse
        {...getDisclosureProps()}
        in={open}
        startingHeight="0"
        endingHeight="100%"
        initial={false}
      >
        <Box color="text" mt="8" borderTop="1px" borderColor="border" pt="6">
          {children}
        </Box>
      </Collapse>
    </VStack>
  )
}

export default ExpandableInfo
