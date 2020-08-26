/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Text } from '../Text'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import icons, { IconName } from './generated'
import Icon from './Icon'
import { IconSize } from './Icon.types'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    size: {
      control: {
        type: 'radio',
        options: [
          IconSize.L,
          IconSize.Normal,
          IconSize.S,
          IconSize.XS,
          IconSize.XXS,
        ],
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
  color: Palette.grey700,
}

const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'zoyi',
  color: Palette.grey700,
  size: IconSize.Normal,
  marginTop: 0,
  marginRight: 0,
  marginBotton: 0,
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
  color: Palette.grey700,
  size: IconSize.Normal,
}
