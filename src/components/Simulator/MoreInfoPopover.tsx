import React, { useState } from "react"
import { motion } from "framer-motion"
import { MdInfoOutline } from "react-icons/md"
import { Button, Icon, Popover } from "@chakra-ui/react"

import { PulseAnimation } from "./PulseAnimation"

const MotionButton = motion(Button)

type MoreInfoPopover = Pick<Popover.BodyProps, "children"> & {
  isFirstStep: boolean
}
export const MoreInfoPopover = ({ isFirstStep, children }: MoreInfoPopover) => {
  const [clicked, setClicked] = useState(false)
  return (
    <Popover.Root>
      <Popover.Trigger>
        <MotionButton
          variant="ghost"
          css={{ paddingInlineStart: 0 }}
          color="body.medium"
          fontSize="sm"
          p={0}
          onClick={() => setClicked(true)}
          position="relative"
        >
          <Icon asChild>
            <MdInfoOutline size="24" />
          </Icon>
          More info
          {isFirstStep && !clicked && <PulseAnimation type="narrow-button" />}
        </MotionButton>
      </Popover.Trigger>
      <Popover.Content
        px={4}
        py={6}
        insetStart={{ base: 4, sm: 8 }}
        w={{ base: "calc(100vw - 3rem)", sm: "calc(100vw - 5rem)" }}
      >
        <Popover.Arrow />
        <Popover.CloseTrigger ms="auto" />
        <Popover.Body css={{ "p:last-of-type": { mb: "2" } }}>
          {children}
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}
