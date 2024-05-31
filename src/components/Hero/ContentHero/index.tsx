import { Box, Heading, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react"

import { CommonHeroProps } from "@/lib/types"

import Breadcrumbs, { BreadcrumbsProps } from "@/components/Breadcrumbs"
import { Image } from "@/components/Image"

import { CallToAction } from "../CallToAction"

export interface ContentHeroProps extends Omit<CommonHeroProps, "header"> {
  breadcrumbs: BreadcrumbsProps
}

const ContentHero = (props: ContentHeroProps) => {
  const { breadcrumbs, heroImg, buttons, title, description } = props
  return (
    <Box bgImg="bgMainGradient">
      <SimpleGrid columns={{ base: 1, lg: 2 }} maxW="1536px" mx="auto" gap="4">
        <Box
          height={{ base: "300px", md: "400px", lg: "full" }}
          order={{ lg: 1 }}
        >
          <Box boxSize="full" asChild>
            <Image
              src={heroImg}
              alt=""
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Stack p={{ base: "8", lg: "16" }} gap="9" justify="center">
          <Breadcrumbs {...breadcrumbs} />
          <Stack gap="6">
            <Heading as="h1" size="2xl">
              {title}
            </Heading>
            <Text fontSize="lg">{description}</Text>
            <HStack gap="4">
              {buttons!.map((button, idx) => {
                if (!button) return
                return <CallToAction key={idx} index={idx} {...button} />
              })}
            </HStack>
          </Stack>
          {/* TODO:
           * Add conditional Big Stat box here
           */}
        </Stack>
      </SimpleGrid>
    </Box>
  )
}

export default ContentHero
