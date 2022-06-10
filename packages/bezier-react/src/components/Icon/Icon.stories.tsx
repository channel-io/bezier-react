/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'
import { camelCase } from 'lodash-es'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getObjectFromEnum, getTitle, iconList } from 'Utils/storyUtils'
import icons, { ChannelIcon } from './generated'
import Icon from './Icon'
import IconProps, { IconSize } from './Icon.types'

export default {
  title: getTitle(base),
  component: Icon,
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

export const Primary: Story<IconProps> = (args) => (<Icon {...args} />)

Primary.args = {
  source: ChannelIcon,
  size: IconSize.Normal,
  color: 'bg-black-darkest',
}

const pascalCase = (str: string) => camelCase(str).replace(/^./, (char) => char.toUpperCase())

export const AllIcons: Story<Omit<IconProps, 'source'>> = (args) => (
  <>
    { iconList.map((iconName) => (
      <IconInfo key={iconName}>
        <Icon
          source={icons[iconName]}
          {...args}
        />
        <Name>{ pascalCase(iconName) }</Name>
      </IconInfo>
    )) }
  </>
)

AllIcons.args = {
  size: IconSize.Normal,
  color: 'bg-black-darkest',
}
