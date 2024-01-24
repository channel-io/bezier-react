import React, {
  useRef,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { Button } from '~/src/components/Button'

import { Overlay } from './Overlay'
import type { OverlayProps } from './Overlay.types'
import { OverlayPosition } from './Overlay.types'

const meta: Meta<OverlayProps> = {
  component: Overlay,
  argTypes: {
    position: {
      control: {
        type: 'radio',
      },
      options: [
        OverlayPosition.TopCenter,
        OverlayPosition.TopLeft,
        OverlayPosition.TopRight,
        OverlayPosition.RightCenter,
        OverlayPosition.RightTop,
        OverlayPosition.RightBottom,
        OverlayPosition.BottomCenter,
        OverlayPosition.BottomLeft,
        OverlayPosition.BottomRight,
        OverlayPosition.LeftCenter,
        OverlayPosition.LeftTop,
        OverlayPosition.LeftBottom,
        OverlayPosition.InnerLeftTop,
        OverlayPosition.InnerLeftBottom,
        OverlayPosition.InnerRightTop,
        OverlayPosition.InnerRightBottom,
      ],
    },
    marginX: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
    marginY: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
  },
}

const Template: StoryFn<OverlayProps> = (props) => {
  const [show, setShow] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        ref={targetRef}
        text="Click me!"
        onClick={() => setShow(true)}
      />

      <Overlay
        show={show}
        style={{
          backgroundColor: 'var(--bg-white-high)',
          borderRadius: 'var(--radius-8)',
          boxShadow: 'var(--ev-3)',
        }}
        target={targetRef.current}
        container={containerRef.current}
        onHide={() => setShow(false)}
        {...props}
      >
        <div
          style={{
            width: 200,
            height: 200,
          }}
        />
      </Overlay>
    </div>
  )
}

export const Primary: StoryObj<OverlayProps> = {
  render: Template,
  args: {
    position: OverlayPosition.BottomCenter,
    marginY: 6,
  },
}

export default meta

