import { useTranslation } from "next-i18next"
import { Box, Flex, Image, Table, Text, useToken } from "@chakra-ui/react"

import { ButtonLink } from "./Buttons"

import { useRtlFlip } from "@/hooks/useRtlFlip"

export interface TableRow {
  name: string
  marketCap: string
  image?: string
  type: string
  url?: string
}

export type StablecoinsTableProps = {
  columns: Array<string>
  content: Array<TableRow>
  hasError: boolean
}

const StablecoinsTable = ({
  columns,
  content,
  hasError,
}: StablecoinsTableProps) => {
  const [textColor] = useToken("colors", ["text"])
  const { flipForRtl } = useRtlFlip()
  const { t } = useTranslation("page-stablecoins")

  const stablecoinsType = {
    FIAT: t("page-stablecoins-stablecoins-table-type-fiat-backed"),
    CRYPTO: t("page-stablecoins-stablecoins-table-type-crypto-backed"),
    ASSET: t("page-stablecoins-stablecoins-table-type-precious-metals-backed"),
    ALGORITHMIC: t("page-stablecoins-algorithmic"),
  }

  return (
    <Table.Root
      variant="unstyled"
      my={8}
      bg="background.base"
      mb={8}
      minW="720px"
    >
      <Table.Header bg="background.highlight" color="body.medium">
        <Table.Row>
          {columns.map((column, idx) => (
            <Table.ColumnHeader
              key={idx}
              fontWeight="bold"
              fontSize="md"
              verticalAlign="inherit"
              letterSpacing="normal"
            >
              {column}
            </Table.ColumnHeader>
          ))}

          {content && content[0]?.url && (
            <Table.ColumnHeader
              p={5}
              fontSize="md"
              fontWeight="normal"
              textAlign="end"
            >
              <Text as="span" display="inline-block" transform={flipForRtl}>
                ↗
              </Text>
            </Table.ColumnHeader>
          )}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {hasError && (
          <Table.Row p={4}>
            <Table.Cell colSpan={4}>
              {t("page-stablecoins-table-error")}
            </Table.Cell>
          </Table.Row>
        )}

        {content.map(({ name, marketCap, image, type, url }, idx) => (
          <Table.Row
            key={idx}
            color="text"
            _hover={{
              textDecoration: "none",
              bg: "background.highlight",
            }}
            _focus={{
              bg: "background.base",
              color: "body.base",
            }}
          >
            <Table.Cell verticalAlign="middle">
              <Flex>
                {image && (
                  <Box me="4" boxSize="6" asChild>
                    <Image src={image} alt="" />
                  </Box>
                )}
                <>{name}</>
              </Flex>
            </Table.Cell>
            <Table.Cell verticalAlign="middle">{marketCap}</Table.Cell>
            <Table.Cell verticalAlign="middle">
              {stablecoinsType[type]}
            </Table.Cell>
            {url && (
              <Table.Cell textAlign="end">
                <ButtonLink to={url} size="sm">
                  Go to {name}
                </ButtonLink>
              </Table.Cell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
export default StablecoinsTable
