import { forwardRef } from "react"
import { useTranslation } from "next-i18next"
import { Field, Text } from "@chakra-ui/react"

import { BaseLink } from "@/components/Link"

import MenuItem from "./MenuItem"

type NoResultsCalloutProps = { onClose: () => void }

const NoResultsCallout = forwardRef<HTMLAnchorElement, NoResultsCalloutProps>(
  function NoResultsCallout({ onClose }, ref) {
    const { t } = useTranslation("common")
    return (
      <Field.HelpText color="body.medium" lineHeight="base" fontSize="md">
        <Text fontWeight="bold" mb="2" color="body.base">
          {t("page-languages-want-more-header")}
        </Text>
        {t("page-languages-want-more-paragraph")}{" "}
        <BaseLink
          ref={ref}
          as={MenuItem}
          key="item-no-results"
          href="contributing/translation-program"
          onClick={onClose}
        >
          {t("page-languages-want-more-link")}
        </BaseLink>
      </Field.HelpText>
    )
  }
)

export default NoResultsCallout
