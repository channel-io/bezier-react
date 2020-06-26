/* External dependencies */
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import Button from './Button'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

export const Primary = () => <Button />
