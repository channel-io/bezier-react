import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import {
  DarkFoundation,
  LightFoundation,
  styled,
} from '~/src/foundation'

import { Button } from '~/src/components/Button'
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button/Button.types'

import BezierProvider from './BezierProvider'

interface BezierProviderStorybookProps {
  foundation: 'dark' | 'light'
}

export default {
  component: BezierProvider,
  argTypes: {
    foundation: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
  },
} as Meta

const ButtonWrapper = styled(Button)``

const Template: StoryFn<BezierProviderStorybookProps> = ({ foundation }) => (
  <BezierProvider
    foundation={foundation === 'dark' ? DarkFoundation : LightFoundation}
    themeVarsScope={ButtonWrapper}
  >
    <ButtonWrapper
      text="Try to switch foundation"
      size={ButtonSize.M}
      styleVariant={ButtonStyleVariant.Primary}
      colorVariant={ButtonColorVariant.Blue}
    />
  </BezierProvider>
)

export const Primary: StoryObj<BezierProviderStorybookProps> = {
  render: Template,

  args: {
    foundation: 'light',
  },
}
