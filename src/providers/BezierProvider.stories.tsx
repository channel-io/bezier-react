/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled, DarkFoundation, LightFoundation } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { ButtonSize, ButtonStyleVariant, ButtonColorVariant } from 'Components/Button/Button.types'
import { Button } from 'Components/Button'
import BezierProvider from './BezierProvider'

interface BezierProviderStorybookProps {
  foundation: 'dark' | 'light'
}

export default {
  title: getTitle(base),
  component: BezierProvider,
  argTypes: {
    foundation: {
      control: {
        type: 'select',
        options: [
          'light',
          'dark',
        ],
      },
    },
  },
} as Meta

const ButtonWrapper = styled(Button)``

const Template: Story<BezierProviderStorybookProps> = ({ foundation }) => (
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

export const Primary: Story<BezierProviderStorybookProps> = Template.bind({})
Primary.args = {
  foundation: 'light',
}
