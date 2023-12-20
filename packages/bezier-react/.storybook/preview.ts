import type { Preview } from "@storybook/react"

import '~/src/styles/index.scss'

import { WithFoundationProvider } from './WithFoundationProvider'

const preview: Preview = {
  decorators: [WithFoundationProvider],
}

export default preview
