/* External dependencies */
import React from 'react'
import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from 'Utils/storyUtils'
import mdx from './TagBadge.mdx'

export default {
  title: getTitle(base),
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

export const Overview: Story<{}> = () => (
  <div />
)
