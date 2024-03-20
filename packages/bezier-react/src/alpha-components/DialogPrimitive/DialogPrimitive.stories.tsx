import React from 'react'

import {
  type Meta,
  type StoryObj,
} from '@storybook/react'

import {
  DialogPrimitive,
  DialogPrimitiveClose,
  DialogPrimitiveContent,
  DialogPrimitiveDescription,
  DialogPrimitiveOverlay,
  DialogPrimitivePortal,
  DialogPrimitiveTitle,
  DialogPrimitiveTrigger,
} from './DialogPrimitive'

function DialogComposition() {
  return (
    <DialogPrimitive>
      <DialogPrimitiveTrigger>Trigger</DialogPrimitiveTrigger>
      <DialogPrimitivePortal>
        <DialogPrimitiveOverlay style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        />
        <DialogPrimitiveContent style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
        }}
        >
          <DialogPrimitiveTitle>Title</DialogPrimitiveTitle>
          <DialogPrimitiveDescription>Description</DialogPrimitiveDescription>
          <div>Content</div>
          <DialogPrimitiveClose>Close</DialogPrimitiveClose>
        </DialogPrimitiveContent>
      </DialogPrimitivePortal>
    </DialogPrimitive>
  )
}

const meta: Meta<typeof DialogComposition> = {
  component: DialogComposition,
}

export const Primary: StoryObj = {}

export default meta
