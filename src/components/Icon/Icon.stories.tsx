/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getObjectFromEnum, getTitle, iconList } from 'Utils/storyUtils'
import { Text } from 'Components/Text'
import { LegacyIcon, LegacyIconProps } from './legacy'
import { AllIcon } from './generated'
import IconProps, { IconSize } from './Icon.types'

export default {
  title: getTitle(base),
  component: LegacyIcon,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(IconSize),
      },
    },
  },
} as Meta

const IconInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
`

const Name = styled.p`
  text-align: center;
`

export const Primary: Story<IconProps> = (args) => (<AllIcon {...args} />)

Primary.args = {
  size: IconSize.Normal,
  color: 'bgtxt-olive-dark',
}

export const LegacyAllIcons = (args) => (
  <>
    { iconList.map((iconName) => (
      <IconInfo key={iconName}>
        <LegacyIcon
          name={iconName}
          {...args}
        />
        <Name>{ iconName }</Name>
      </IconInfo>
    )) }
  </>
)

LegacyAllIcons.args = {
  size: IconSize.Normal,
  color: 'bgtxt-olive-dark',
}

const Template: Story<LegacyIconProps> = (args) => <LegacyIcon {...args} />

export const LegacyPrimary = Template.bind({})
LegacyPrimary.args = {
  name: 'channel',
  color: 'bgtxt-olive-dark',
  size: IconSize.Normal,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
}

export const LegacyWithText: Story<LegacyIconProps> = ({
  color,
  name,
  ...otherIconProps
}) => (
  <Text style={{ color }}>
    <LegacyIcon
      name={name}
      {...otherIconProps}
    />
    Hello World!
  </Text>
)

LegacyWithText.args = {
  name: 'channel',
  color: 'bgtxt-olive-dark',
  size: IconSize.Normal,
}
