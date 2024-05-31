import React, { ReactNode } from "react"
import { Tabs as ChakraTabs } from "@chakra-ui/react"

interface Tab {
  title: string
  content: ReactNode
}

export type TabsProps = {
  tabs: Array<Tab>
  onTabClick?: (tabIndex: number) => void
}

const Tabs = ({ tabs, onTabClick }: TabsProps) => {
  const handleTabClick = (index: number) => {
    if (onTabClick) {
      onTabClick(index)
    }
  }

  return (
    <ChakraTabs.Root as="nav">
      <ChakraTabs.List>
        {tabs.map((tab, index) => (
          <ChakraTabs.Trigger
            key={index}
            value={tab.title}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </ChakraTabs.Trigger>
        ))}
      </ChakraTabs.List>
      <ChakraTabs.ContentGroup as="main">
        {tabs.map((tab, index) => (
          <ChakraTabs.Content key={index} value={tab.title}>
            {tab.content}
          </ChakraTabs.Content>
        ))}
      </ChakraTabs.ContentGroup>
    </ChakraTabs.Root>
  )
}

export default Tabs
