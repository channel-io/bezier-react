import React from 'react'

import base from 'paths.macro'

import { styled } from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

import { Palette } from './index'

export default {
  title: getTitle(base),
  parameters: {
    layout: 'fullscreen',
  },
}

interface PaletteProps {
  color: string
}

const PaletteChipArtBoard = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const PaletteChip = styled.div`
  margin: 10px;
  width: 80px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PaletteTile = styled.div<PaletteProps>`
  margin-bottom: 5px;
  width: 50px;
  height: 50px;
  ${({ foundation }) => foundation?.elevation?.ev4()};
  ${({ foundation }) => foundation?.rounding?.round16};
  background-color: ${({ color }) => color};
`

const PaletteName = styled.span`
  width: 100%;
  word-break: break-all;
  color: rgba(131, 131, 131, 0.609);
  text-align: center;
`

const Template = () => (
  <PaletteChipArtBoard>
    {
      Object.keys(Palette).map(paletteKey => (
        <PaletteChip key={paletteKey}>
          <PaletteTile color={Palette[paletteKey]} />
          <PaletteName>
            { paletteKey }
          </PaletteName>
        </PaletteChip>
      ))
    }
  </PaletteChipArtBoard>
)

export const Primary = Template.bind({})
