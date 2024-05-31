import Button, { type ButtonProps } from "@/components/Buttons/Button"
import { BaseLink, type LinkProps } from "@/components/Link"

import { type MatomoEventOptions, trackCustomEvent } from "@/lib/utils/matomo"

export type ButtonLinkProps = LinkProps &
  Omit<ButtonProps, "toId" | "onClick"> & {
    customEventOptions?: MatomoEventOptions
  }

const ButtonLink = (props: ButtonLinkProps) => {
  const { customEventOptions, ...rest } = props
  const handleClick = () => {
    customEventOptions && trackCustomEvent(customEventOptions)
  }

  return (
    <Button onClick={handleClick} asChild>
      <BaseLink activeStyle={{}} {...rest} />
    </Button>
  )
}

export default ButtonLink
