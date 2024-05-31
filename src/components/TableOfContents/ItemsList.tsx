import { type HTMLChakraProps, List } from "@chakra-ui/react"

import type { ToCItem } from "@/lib/types"

import ToCLink from "@/components/TableOfContents/TableOfContentsLink"

export type ItemsListProps = HTMLChakraProps<typeof List.Item> & {
  items: Array<ToCItem>
  depth: number
  maxDepth: number
  activeHash?: string
}

const ItemsList = ({
  items,
  depth,
  maxDepth,
  activeHash,
  ...rest
}: ItemsListProps) => {
  if (depth > maxDepth) return null

  return (
    <>
      {items.map((item, index) => {
        const { title, items } = item
        return (
          <List.Item key={index} m={0} {...rest}>
            <ToCLink depth={depth} item={item} activeHash={activeHash} />
            {items && (
              <List.Root
                key={title}
                fontSize="sm"
                lineHeight={1.6}
                fontWeight={400}
                ps={4}
                pe={1}
                m={0}
              >
                <ItemsList
                  items={items}
                  depth={depth + 1}
                  maxDepth={maxDepth}
                  activeHash={activeHash}
                />
              </List.Root>
            )}
          </List.Item>
        )
      })}
    </>
  )
}

ItemsList.displayName = "TocItemsList"

export default ItemsList
