import { forwardRef } from "react"
import { Button } from "@chakra-ui/react"
import { DocSearchButton, DocSearchButtonProps } from "@docsearch/react"

import { getSearchButtonStyles } from "./utils"

const SearchButton = forwardRef<
  HTMLButtonElement,
  Omit<DocSearchButtonProps, "ref">
>(function SearchButton(props, ref) {
  return (
    <Button
      ref={ref}
      className="DocSearch-Button"
      {...getSearchButtonStyles()}
      asChild
    >
      <DocSearchButton {...props} />
    </Button>
  )
})

export default SearchButton
