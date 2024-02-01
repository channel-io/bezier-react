import type { Preview } from '@storybook/react'

import { WithProvider } from './WithProvider'

import '~/src/styles/index.scss'

const preview: Preview = {
  decorators: [WithProvider],
}

export default preview
