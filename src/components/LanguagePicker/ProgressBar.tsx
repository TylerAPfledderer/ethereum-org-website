import { Progress } from "@chakra-ui/react"

type ProgressBarProps = Pick<Progress.RootProps, "value">

const ProgressBar = ({ value }: ProgressBarProps) => (
  <Progress.Root
    value={value}
    h="0.5"
    w="full"
    bg="body.light"
    css={{
      "[role=progressbar]": {
        backgroundColor: "disabled",
      },
    }}
  >
    <Progress.Track>
      <Progress.FilledTrack />
    </Progress.Track>
  </Progress.Root>
)

export default ProgressBar
