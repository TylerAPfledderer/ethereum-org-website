// Libraries
import React, { useEffect, useState } from "react"
import { Center, CloseTrigger } from "@chakra-ui/react"

// Components
import BannerNotification from "../BannerNotification"

// Interface
export type DismissableBannerProps = {
  children: JSX.Element
  storageKey: string
}

const DismissableBanner = ({
  children,
  storageKey,
}: DismissableBannerProps) => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem(storageKey) === "true"
    setShow(!isDismissed)
  }, [storageKey])

  const onClose = () => {
    localStorage.setItem(storageKey, "true")
    setShow(false)
  }

  return (
    <BannerNotification shouldShow={show}>
      <Center paddingEnd={8}>{children}</Center>
      <CloseTrigger onClick={onClose} aria-label="Close Banner" />
    </BannerNotification>
  )
}

export default DismissableBanner
