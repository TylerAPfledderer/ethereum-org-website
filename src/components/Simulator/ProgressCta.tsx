import React from "react"
import { motion } from "framer-motion"
import { Button, ButtonProps, Flex, type FlexProps } from "@chakra-ui/react"

import { ClickAnimation } from "./ClickAnimation"
import { PulseAnimation } from "./PulseAnimation"

type ProgressCtaProps = FlexProps &
  Pick<ButtonProps, "disabled"> & {
    isAnimated?: boolean
    progressStepper: () => void
  }
export const ProgressCta = ({
  isAnimated = false,
  progressStepper,
  disabled,
  children,
  ...flexProps
}: ProgressCtaProps) => (
  <Flex
    bottom="0"
    position="absolute"
    px={6}
    py={10}
    w="full"
    {...flexProps}
    asChild
  >
    <motion.div initial={{ opacity: 1 }}>
      <Button
        w="full"
        onClick={progressStepper}
        disabled={disabled}
        position="relative"
      >
        <>
          {children}
          {isAnimated && <PulseAnimation type="full-button" />}
          {isAnimated && <ClickAnimation>click!</ClickAnimation>}
        </>
      </Button>
    </motion.div>
  </Flex>
)
