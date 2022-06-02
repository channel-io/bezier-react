/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Meta, Story } from '@storybook/react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { getTitle, getObjectFromEnum } from 'Utils/storyUtils'
import Banner from './Banner'
import {
  BannerVariant,
  BannerProps,
} from './Banner.types'

export default {
  title: getTitle(base),
  component: Banner,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(BannerVariant),
      },
    },
    dismissible: {
      control: {
        type: 'boolean',
      },
    },
    hasLink: {
      control: {
        type: 'boolean',
      },
    },
    linkText: {
      control: {
        type: 'text',
      },
    },
    linkTo: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<BannerProps>

const Template: Story<BannerProps> = props => <Banner {...props} />

export const Primary: Story<BannerProps> = Template.bind({})
Primary.args = {
  variant: BannerVariant.Default,
  icon: 'lightbulb',
  content: 'Information here.',
  dismissible: true,
  onDismiss: noop,
}
