import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import {
  styled,
  Themes,
} from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

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
  ${({ foundation }) => foundation?.elevation?.ev3()};
  ${({ foundation }) => foundation?.rounding?.round16};
  background-color: ${({ color }) => color};
`

const ColorName = styled.span`
  width: 100%;
  color: rgba(131, 131, 131, 0.609);
  text-align: center;
  word-break: break-all;
`

const Template: Story<{ theme: ReturnType<typeof Themes['createThemes']> }> = ({ theme }) => (
  <ColorChipArtBoard>
    { Object.keys(theme).map(semanticName => (
      <ColorChip key={semanticName}>
        <Color color={theme[semanticName]} />
        <ColorName>{ semanticName }</ColorName>
      </ColorChip>
    )) }
  </ColorChipArtBoard>
)

export const LightTheme = Template.bind({})
LightTheme.args = {
  theme: Themes.LightTheme,
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  theme: Themes.DarkTheme,
}
