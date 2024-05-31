import { useTranslation } from "next-i18next"
import { Box, Drawer, Flex, Heading, Stack, Text } from "@chakra-ui/react"

import Card from "@/components/Card"

import { TriangleSVG, TriangleSVGProps } from "./Triangle"
import { useTrilemma } from "./useTrilemma"

const Trilemma = () => {
  const { t } = useTranslation("page-roadmap-vision")

  const {
    trilemmaChecks,
    mobileModalOpen,
    handleClick,
    handleModalClose,
    cardDetail,
  } = useTrilemma()

  const triangleSVGProps: TriangleSVGProps = {
    handleClick,
    ...trilemmaChecks,
  }

  return (
    <Flex
      alignItems="center"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="space-between"
      columnGap="12"
      rowGap="8"
    >
      <Stack
        gap="8"
        mt={{ base: "16", md: "20" }}
        mb={{ lg: "20" }}
        ms={{ md: "12" }}
        me={{ md: "12", lg: 0 }}
        flex={{
          lg: "0 1 500px",
        }}
      >
        <Heading fontSize="2rem">
          {t("page-roadmap-vision-trilemma-h2")}
        </Heading>
        <Flex flexDir="column" gap="6">
          <Text>{t("page-roadmap-vision-trilemma-p")}</Text>
          <Text>{t("page-roadmap-vision-trilemma-p-1")}</Text>
          <Text>{t("page-roadmap-vision-trilemma-p-2")}</Text>
          <Text fontWeight={600} hideFrom="lg">
            {t("page-roadmap-vision-trilemma-modal-tip")}:
          </Text>
        </Flex>
        <Card {...cardDetail} minH="300px" hideBelow="lg" mt="6" />
      </Stack>
      <Box hideFrom="lg">
        <Drawer.Root
          open={mobileModalOpen}
          onOpenChange={handleModalClose}
          placement="bottom"
        >
          <Drawer.Backdrop background="rgba(0,0,0,0.3)" />
          <Drawer.Content borderTopRadius="2xl" background="background.base">
            <Card {...cardDetail} background="none" border="none" my="8" />
            <Drawer.CloseTrigger top="6" insetInlineEnd="6" />
          </Drawer.Content>
        </Drawer.Root>
      </Box>
      <TriangleSVG {...triangleSVGProps} />
    </Flex>
  )
}

export default Trilemma
