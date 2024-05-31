import React from "react"
import {
  Box,
  Flex,
  type FlexProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"

import { Image } from "@/components/Image"

import type { NFT } from "./interfaces"

type NFTListProps = FlexProps & {
  nfts: Array<NFT>
}
export const NFTList = ({ nfts, ...flexProps }: NFTListProps) => {
  const size = useBreakpointValue({ base: 20, md: 24 })
  return (
    <Flex w="full" gap={4} h="full" flexWrap="wrap" {...flexProps}>
      {nfts.length ? (
        nfts.map(({ title, image }) => (
          <Box key={title} w="fit-content">
            <Box maxW={size} maxH={size} asChild>
              <Image
                src={image}
                alt=""
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
            <Text fontSize="xs" m={0}>
              {title}
            </Text>
          </Box>
        ))
      ) : (
        <Text>No NFTs yet!</Text>
      )}
    </Flex>
  )
}
