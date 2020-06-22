/* External dependencies */
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import GNB from './GNB'

export default {
  title: 'GNB',
  decorators: [withKnobs],
}

export const Primary = () => (<GNB />)
