import * as React from "react"
import { Table as ChakraTable } from "@chakra-ui/react"

/*
 * TODO: Currently, there are cell spacing issues with some table content.
 * Prefer `layout="fixed"` in the future when content has been addressed
 * to provide equal cell widths.
 */

interface TableProps extends ThemingProps<"Table"> {
  children: React.ReactNode
}

const Table = (props: TableProps) => {
  const { variant, ...rest } = props
  return (
    <ChakraTable.Overflow whiteSpace="normal" position="relative">
      <ChakraTable.Root variant={variant} {...rest} />
    </ChakraTable.Overflow>
  )
}

export const mdxTableComponents = {
  table: Table,
  th: ({ align, ...rest }) => (
    <ChakraTable.ColumnHeader textAlign={align} {...rest} />
  ),
  td: ({ align, ...rest }) => <ChakraTable.Cell textAlign={align} {...rest} />,
  tr: (props) => <ChakraTable.Row {...props} />,
  tbody: (props) => <ChakraTable.Body {...props} />,
  thead: (props) => <ChakraTable.Header {...props} />,
}

export default Table
