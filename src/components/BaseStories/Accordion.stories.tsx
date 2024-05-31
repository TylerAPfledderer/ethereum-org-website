import { Accordion, Box } from "@chakra-ui/react"
import { Meta, StoryObj } from "@storybook/react"

type AccordionType = typeof Accordion.Root

const meta: Meta<AccordionType> = {
  title: "Molecules / Disclosure Content / Accordions",
  component: Accordion.Root,
  decorators: [
    (Story) => (
      <Box width="300px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<AccordionType>

export default meta

type Story = StoryObj<AccordionType>

export const Basic: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={["accordion-1"]}>
      <Accordion.Item value="accordion-1">
        <h2>
          <Accordion.ItemTrigger>
            <Box as="span" flex="1" textAlign="left">
              Label text of the accordion
            </Box>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </h2>
        <Accordion.ItemContent>
          Ethereum is open access to digital money and data-friendly services
          for everyone – no matter your background or location. It&apos;s a
          community-built technology behind the cryptocurrency ether (ETH) and
          thousands of applications you can use today.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="accordion-2">
        <h2>
          <Accordion.ItemTrigger>
            <Box as="span" flex="1" textAlign="left">
              Label text of the accordion
            </Box>
            <Accordion.ItemTrigger />
          </Accordion.ItemTrigger>
        </h2>
        <Accordion.ItemContent>
          Ethereum is open access to digital money and data-friendly services
          for everyone – no matter your background or location. It&apos;s a
          community-built technology behind the cryptocurrency ether (ETH) and
          thousands of applications you can use today.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  ),
}
