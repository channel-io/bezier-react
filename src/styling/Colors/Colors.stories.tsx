/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { styled } from '../Theme'
import { getTitle } from '../../utils/utils'
import { Light, Dark } from './index'

export default {
  title: getTitle(base),
  parameters: {
    layout: 'fullscreen',
  },
}

interface ColorChipProps {
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

const Color = styled.div<ColorChipProps>`
  margin-bottom: 5px;
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color};
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

export const LightColors = Template.bind({})
LightColors.args = {
  color: Light,
}

export const DarkColors = Template.bind({})
DarkColors.args = {
  color: Dark,
}
