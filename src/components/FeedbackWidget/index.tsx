import { useTranslation } from "next-i18next"
import { Box, Button, Dialog } from "@chakra-ui/react"

import FixedDot from "./FixedDot"
import { useFeedbackWidget } from "./useFeedbackWidget"

const FeedbackWidget = () => {
  const { t } = useTranslation("common")
  const {
    bottomOffset,
    feedbackSubmitted,
    getButtonProps,
    handleClose,
    handleOpen,
    handleSubmit,
    handleSurveyOpen,
    isExpanded,
    open,
  } = useFeedbackWidget()
  return (
    <>
      <FixedDot
        {...getButtonProps()}
        onClick={handleOpen}
        bottomOffset={bottomOffset}
        isExpanded={isExpanded}
      />

      <Dialog.Root
        role="alertdialog"
        open={open}
        onOpenChange={handleClose}
        centered
      >
        <Dialog.Backdrop />
        <Dialog.Content
          position="fixed"
          maxW={1504}
          m="auto"
          alignItems="flex-end"
          backgroundColor="transparent"
          boxShadow="tableItemBox"
          me={24}
          bottom={{ base: `${bottomOffset + 5}rem`, lg: 20 }}
        >
          <Box
            w="min(300px, calc(100% - 1rem))"
            mx="2"
            bgColor="ednBackground"
            border="1px"
            borderColor="background.base"
            borderRadius="base"
            py="4"
            px="2"
          >
            <Dialog.CloseTrigger />

            <Dialog.Header
              fontSize="xl"
              fontWeight="bold"
              lineHeight="6"
              textAlign="center"
            >
              {feedbackSubmitted
                ? t("feedback-widget-thank-you-title")
                : t("feedback-widget-prompt")}
            </Dialog.Header>

            {/* Body: */}
            {feedbackSubmitted && (
              <>
                <Dialog.Body
                  fontWeight="normal"
                  fontSize="md"
                  lineHeight="5"
                  textAlign="center"
                >
                  {t("feedback-widget-thank-you-subtitle")}
                </Dialog.Body>
                <Dialog.Body
                  fontWeight="bold"
                  fontSize="xs"
                  lineHeight="4"
                  letterSpacing="wide"
                  color="searchBorder"
                  textAlign="center"
                >
                  {t("feedback-widget-thank-you-timing")}
                </Dialog.Body>
              </>
            )}

            <Dialog.Footer display="flex" gap="6">
              {feedbackSubmitted ? (
                <Button onClick={handleSurveyOpen} flex={1}>
                  {t("feedback-widget-thank-you-cta")}
                </Button>
              ) : (
                <>
                  <Button
                    variant="solid"
                    onClick={() => handleSubmit(true)}
                    flex={1}
                  >
                    {t("yes")}
                  </Button>
                  <Button
                    variant="solid"
                    onClick={() => handleSubmit(false)}
                    flex={1}
                  >
                    {t("no")}
                  </Button>
                </>
              )}
            </Dialog.Footer>
          </Box>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

export default FeedbackWidget
