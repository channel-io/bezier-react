import React from 'react'

import {
  type Meta,
  type StoryObj,
} from '@storybook/react'

import {
  TooltipPrimitive,
  TooltipPrimitiveArrow,
  TooltipPrimitiveContent,
  TooltipPrimitivePortal,
  TooltipPrimitiveProvider,
  TooltipPrimitiveTrigger,
} from './TooltipPrimitive'

function TooltipComposition() {
  return (
    <TooltipPrimitiveProvider>
      <TooltipPrimitive>
        <TooltipPrimitiveTrigger>Trigger</TooltipPrimitiveTrigger>
        <TooltipPrimitivePortal>
          <TooltipPrimitiveContent>
            Content
            <TooltipPrimitiveArrow />
          </TooltipPrimitiveContent>
        </TooltipPrimitivePortal>
      </TooltipPrimitive>
    </TooltipPrimitiveProvider>
  )
}

const meta: Meta<typeof TooltipComposition> = {
  component: TooltipComposition,
}

export const Primary: StoryObj = {}

export default meta
