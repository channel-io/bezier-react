/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from '../../utils/etcUtils'
import { Text } from '../Text'
import { styled } from '../../foundation'
import icons, { IconName } from './generated'
import Icon from './Icon'
import { IconSize } from './Icon.types'

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
}

const iconList: IconName[] = Object.keys(icons) as IconName[]

const IconInfo = styled.div`
  width: 120px;
  height: 120px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Name = styled.p`
  text-align: center;
`

export const AllIcons = (args) => (
  <>
    { iconList.map((iconName) => (
      <IconInfo key={iconName}>
        <Icon
          name={iconName}
          {...args}
        />
        <Name>{ iconName }</Name>
      </IconInfo>
    )) }
  </>
)
AllIcons.args = {
  size: IconSize.Normal,
  color: 'bgtxt-olive-dark',
}

const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'channel',
  color: 'bgtxt-olive-dark',
  size: IconSize.Normal,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
}

export const WithText = ({
  color,
  text,
  name,
  ...otherIconProps
}) => (
  <Text style={{ color }}>
    <Icon
      name={name}
      {...otherIconProps}
    />
    Hello World!
  </Text>
)
WithText.args = {
  name: 'zoyi',
  color: 'bgtxt-olive-dark',
  size: IconSize.Normal,
}
