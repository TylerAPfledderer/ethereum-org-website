import type { IconType } from "react-icons"
import { type ButtonProps, Icon } from "@chakra-ui/react"

import Button from "@/components/Buttons/Button"

type FooterButtonProps = ButtonProps & {
  icon: IconType
}

const FooterButton = ({
  icon: IconProp,
  children,
  ...props
}: FooterButtonProps) => (
  <Button
    variant="ghost"
    flexDir="column"
    alignItems="center"
    color="body.base"
    px="1"
    css={{ span: { m: 0 } }}
    {...props}
  >
    <Icon asChild>
      <IconProp />
    </Icon>
    {children}
  </Button>
)

export default FooterButton
