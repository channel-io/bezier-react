/* External dependencies */
import React from 'react'
import { withKnobs, select, color, number } from '@storybook/addon-knobs'
import styled from 'styled-components'

/* Internal dependencies */
import { Text } from '../Text'
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import icons, { IconName } from './generated'
import Icon from './Icon'

export default {
  title: 'Icon',
  decorators: [withKnobs],
}

const iconList: IconName[] = Object.keys(icons) as IconName[]

const IconSize = {
  L: 34,
  Normal: 24,
  S: 20,
  XS: 16,
  XXS: 12,
}

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

export const AllIcons = () => {
  const size = select('size', IconSize, IconSize.Normal)
  const selectedColor = color('color', Palette.grey700)

  return (
    <ThemeProvider theme={LightTheme}>
      { iconList.map((iconName) => (
        <IconInfo key={iconName}>
          <Icon
            name={iconName}
            color={selectedColor}
            size={size}
          />
          <Name>{ iconName }</Name>
        </IconInfo>
      )) }
    </ThemeProvider>
  )
}

export const Primary = () => (
  <Icon
    name={select('name', iconList, 'zoyi') as IconName}
    color={color('color', Palette.grey700)}
    size={select('size', IconSize, IconSize.Normal)}
    marginTop={number('marginTop', 0)}
    marginRight={number('marginRight', 0)}
    marginBottom={number('marginBottom', 0)}
    marginLeft={number('marginLeft', 0)}
  />
)

export const WithText = () => (
  <Text
    style={{
      color: color('color', Palette.grey700),
    }}
  >
    <Icon
      name={select('name', iconList, 'zoyi') as IconName}
      size={select('size', IconSize, IconSize.Normal)}
      marginTop={number('marginTop', 0)}
      marginRight={number('marginRight', 0)}
      marginBottom={number('marginBottom', 0)}
      marginLeft={number('marginLeft', 0)}
    />
    Hello World!
  </Text>
)
