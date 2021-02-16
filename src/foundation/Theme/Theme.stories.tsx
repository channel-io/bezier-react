/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { styled } from '../index'
import { Themes } from './index'

export default {
  title: getTitle(base),
  parameters: {
    layout: 'fullscreen',
  },
}

interface ColorProps {
  color: string
}

const ColorChipArtBoard = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const ColorChip = styled.div`
  margin: 10px;
  width: 80px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Color = styled.div<ColorProps>`
  margin-bottom: 5px;
  width: 50px;
  height: 50px;
  ${({ foundation }) => foundation?.elevation?.ev3};
  background-color: ${({ color }) => color};
  ${({ foundation }) => foundation?.rounding?.round16};
`

const ColorName = styled.span`
  width: 100%;
  word-break: break-all;
  color: rgba(131, 131, 131, 0.609);
  text-align: center;
`

const Template = ({ color }) => (
  <ColorChipArtBoard>
    {
      Object.keys(color).map(colorKey => (
        <ColorChip>
          <Color color={color[colorKey]}/>
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
