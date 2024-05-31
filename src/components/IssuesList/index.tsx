import Emoji from "react-emoji-render"
import {
  Avatar,
  Flex,
  HStack,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  Text,
} from "@chakra-ui/react"

import type { GHIssue } from "@/lib/types"

import InlineLink from "../Link"
import Tag from "../Tag"

type IssuesListProps = SimpleGridProps & {
  issues: GHIssue[]
}

const IssuesList = ({ issues, ...props }: IssuesListProps) => {
  return (
    <SimpleGrid columns={[1, null, 2]} gap={4} {...props}>
      {issues.map((issue) => (
        <Stack
          key={issue.title}
          p={4}
          gap={4}
          border="1px solid"
          borderColor="body.light"
          borderRadius="md"
        >
          <Stack gap={2}>
            <HStack gap={2}>
              <Avatar.Root w="32px" h="32px">
                <Avatar.Image src={issue.user.avatar_url} />
                <Avatar.Fallback name={issue.user.login} />
              </Avatar.Root>
              <Text size="sm">by {issue.user.login}</Text>
            </HStack>

            <InlineLink href={issue.html_url} textDecor="none">
              {issue.title}
            </InlineLink>
          </Stack>
          <Flex flexWrap="wrap" gap="1">
            {issue.labels.map((label) => {
              return (
                <Tag
                  key={label.id}
                  label={<Emoji text={label.name} />}
                  variant="outline"
                />
              )
            })}
          </Flex>
        </Stack>
      ))}
    </SimpleGrid>
  )
}

export default IssuesList
