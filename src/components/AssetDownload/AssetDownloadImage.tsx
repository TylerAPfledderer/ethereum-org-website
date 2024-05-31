import { Box, Center } from "@chakra-ui/react"

import { Image, type ImageProps } from "@/components/Image"

interface AssetDownloadImageProps {
  image: ImageProps["src"]
  alt: string
}

const AssetDownloadImage = ({ image, alt }: AssetDownloadImageProps) => (
  <Center border="1px" borderColor="white700" p="8" w="full">
    <Box w="full" alignSelf="center" asChild>
      <Image src={image} alt={alt} />
    </Box>
  </Center>
)

export default AssetDownloadImage
