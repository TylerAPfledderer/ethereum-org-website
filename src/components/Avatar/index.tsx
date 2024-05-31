import { forwardRef } from "react"
import { RxExternalLink } from "react-icons/rx"
import {
  Avatar as ChakraAvatar,
  Center,
  LinkBox,
  LinkOverlay,
  LinkProps,
  ThemingProps,
} from "@chakra-ui/react"

import { useRtlFlip } from "../../hooks/useRtlFlip"
import { BaseLink } from "../Link"

type AssignAvatarProps = Required<Pick<ChakraAvatar.ImageProps, "src">> &
  Required<Pick<ChakraAvatar.FallbackProps, "name">> &
  ChakraAvatar.ImageProps &
  ChakraAvatar.FallbackProps

type AvatarLinkProps = AssignAvatarProps &
  Pick<LinkProps, "href"> &
  ThemingProps<"Avatar"> & {
    label?: string
    direction?: "column" | "row"
  }

const Avatar = forwardRef<HTMLDivElement, AvatarLinkProps>(function Avatar(
  props,
  ref
) {
  const { href, src, name, size = "md", label, direction = "row" } = props
  const { flipForRtl } = useRtlFlip()

  const avatarProps = {
    src,
    name,
    size,
  }

  const linkProps = {
    href,
    isExternal: true,
    color: "primary.base",
  }

  if (label) {
    const _direction: "column-reverse" | "row-reverse" = `${direction}-reverse`
    return (
      <LinkBox ref={ref} asChild>
        <Center flexDirection={_direction} columnGap="1">
          <LinkOverlay
            as={BaseLink}
            data-peer
            display="inline-flex"
            textDecoration="none"
            alignItems="center"
            gap="1"
            p="1"
            fontSize={size !== "md" ? "xs" : "sm"}
            zIndex="overlay"
            {...linkProps}
          >
            {label}
            <RxExternalLink transform={flipForRtl} />
          </LinkOverlay>
          <ChakraAvatar.Root {...avatarProps} />
        </Center>
      </LinkBox>
    )
  }

  return (
    <ChakraAvatar.Root ref={ref} {...avatarProps} {...linkProps}>
      <BaseLink {...linkProps} />
    </ChakraAvatar.Root>
  )
})

export default Avatar
