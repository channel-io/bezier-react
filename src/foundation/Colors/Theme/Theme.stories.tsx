/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../../utils/storyUtils'
import { styled } from '../../index'
import { Themes } from '../index'

export default {
  title: getTitle(base),
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

interface ColorProps {
  color: string
}

const ColorChipArtBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ColorChip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  min-height: 80px;
  margin: 10px;
`

const Color = styled.div<ColorProps>`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  background-color: ${({ color }) => color};
  ${({ foundation }) => foundation?.elevation?.ev3()};
  ${({ foundation }) => foundation?.rounding?.round16};
`

const ColorName = styled.span`
  width: 100%;
  color: rgba(131, 131, 131, 0.609);
  text-align: center;
  word-break: break-all;
`

const Template: Story<{ color: ReturnType<typeof Themes['createThemes']> }> = ({ color }) => (
  <ColorChipArtBoard>
    {
      Object.keys(color).map(colorKey => (
        <ColorChip>
          <Color color={color[colorKey]} />
          <ColorName>{ colorKey }</ColorName>
        </ColorChip>
      ))
    }
  </ColorChipArtBoard>
)

export const LightTheme = Template.bind({})
LightTheme.args = {
  color: Themes.LightTheme,
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  color: Themes.DarkTheme,
}
