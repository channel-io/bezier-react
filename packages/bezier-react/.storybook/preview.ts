import type { Preview } from "@storybook/react"

import { WithFoundationProvider } from './WithFoundationProvider'

const preview: Preview = {
  decorators: [WithFoundationProvider],
}

export default preview
