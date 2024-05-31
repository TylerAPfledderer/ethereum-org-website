import React from "react"
import { useMediaQuery } from "@chakra-ui/hooks"
import { Center, type CenterProps } from "@chakra-ui/react"

import { lightTheme as oldTheme } from "../../theme"

export type BannerNotificationProps = CenterProps & {
  shouldShow?: boolean
}

const BannerNotification = ({
  children,
  shouldShow = false,
  ...props
}: BannerNotificationProps) => {
  const [isLGScreen] = useMediaQuery(
    [`min-width: ${oldTheme.breakpoints.l}`],
    {}
  )
  return (
    <>
      {shouldShow && (
        <Center
          as="aside"
          maxW={isLGScreen ? oldTheme.variables.maxPageWidth : "100%"}
          w="100%"
          py="4"
          px="8"
          bg="primary.base"
          color="background.base"
          css={{
            a: {
              color: "background.base",
            },
          }}
          {...props}
        >
          {children}
        </Center>
      )}
    </>
  )
}

export default BannerNotification
