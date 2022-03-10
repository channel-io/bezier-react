/* External dependencies */
import React, { useState } from 'react'
import type {
  Meta,
  Story,
} from '@storybook/react'
import base from 'paths.macro'
import {
  keys,
  random,
  range,
  values,
} from 'lodash-es'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import { LightTheme } from 'Foundation/Colors/Theme'
import { getTitle } from 'Utils/storyUtils'
import { Stack } from './Stack'
import { StackItem } from './StackItem'
import type { AxisAlignment } from './types'

export default {
  title: getTitle(base),
  argTypes: {
    containerSize: {
      control: {
        type: 'range',
        min: 400,
        max: 1200,
        step: 10,
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    mainAxis: {
      control: {
        type: 'radio',
        options: ['start', 'center', 'end', 'stretch'],
      },
    },
    crossAxis: {
      control: {
        type: 'radio',
        options: ['start', 'center', 'end', 'stretch'],
      },
    },
    spacing: {
      control: {
        type: 'range',
        min: 0,
        max: 32,
        step: 4,
      },
    },
  },
} as Meta

const randomColor = (): SemanticNames => values(LightTheme)[random(keys(LightTheme).length)] as SemanticNames
const randomSize = (): number => Math.floor((random(true) * 240) + 120)

const Item = ({
  fixedSize,
  direction,
}: {
  fixedSize: boolean
  direction: 'horizontal' | 'vertical'
}) => {
  const [color] = useState(() => randomColor())
  const [crossAxisSize] = useState(() => randomSize())

  return (
    <div
      style={{
        width: (fixedSize && direction === 'vertical') ? crossAxisSize : '100%',
        height: (fixedSize && direction === 'horizontal') ? crossAxisSize : '100%',
        backgroundColor: color,
        borderRadius: '4px',
        boxShadow: 'inset 0 0 1px #c0c0c0',
      }}
    />
  )
}

interface StackPreviewProps {
  containerSize: number

  /* Stack Props */
  direction: 'horizontal' | 'vertical'
  mainAxis: AxisAlignment
  crossAxis: AxisAlignment
  spacing: number

  /* Item Props */
  itemMainAxes: (AxisAlignment | undefined)[]
  itemCrossAxes: (AxisAlignment | undefined)[]
  itemSizes: (number | undefined)[]
  itemWeights: (number | undefined)[]
  itemGrows: (boolean | undefined)[]
  itemShrinks: (boolean | undefined)[]
  itemMarginBefores: (number | undefined)[]
  itemMarginAfters: (number | undefined)[]
}

const Template: Story<StackPreviewProps> = ({
  containerSize,

  direction,
  mainAxis,
  crossAxis,
  spacing,

  itemMainAxes,
  itemCrossAxes,
  itemSizes,
  itemWeights,
  itemGrows,
  itemShrinks,
  itemMarginBefores,
  itemMarginAfters,
}: StackPreviewProps) => (
  <>
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 4,
        ...(
          direction === 'horizontal'
            ? { width: containerSize, height: 480 }
            : { width: 480, height: containerSize }
        ),
      }}
    >
      <Stack
        direction={direction}
        mainAxis={mainAxis}
        crossAxis={crossAxis}
        spacing={spacing}
      >
        { range(4)
          .map(i => (
            <StackItem
              key={`item-${i}`}
              mainAxis={itemMainAxes[i]}
              crossAxis={itemCrossAxes[i]}
              size={itemSizes[i]}
              weight={itemWeights[i]}
              grow={itemGrows[i]}
              shrink={itemShrinks[i]}
              marginBefore={itemMarginBefores[i]}
              marginAfter={itemMarginAfters[i]}
            >
              <Item direction={direction} fixedSize={(crossAxis ?? itemCrossAxes[i]) !== 'stretch'} />
            </StackItem>
          )) }
      </Stack>
    </div>
  </>
)

export const Primary: Story<StackPreviewProps> = Template.bind({})
Primary.args = {
  containerSize: 800,

  direction: 'horizontal',
  mainAxis: 'start',
  crossAxis: 'start',
  spacing: 0,

  itemMainAxes: [],
  itemCrossAxes: [],
  itemSizes: [120, 240, 180, 120],
  itemWeights: [],
  itemGrows: [],
  itemShrinks: [],
  itemMarginBefores: [],
  itemMarginAfters: [],
}
