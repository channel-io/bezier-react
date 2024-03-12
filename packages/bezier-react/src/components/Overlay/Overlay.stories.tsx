import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { isBoolean } from '~/src/utils/type'

import { Button } from '~/src/components/Button'

import { Overlay } from './Overlay'
import type { OverlayProps } from './Overlay.types'

const meta: Meta<OverlayProps> = {
  component: Overlay,
  argTypes: {
    position: {
      control: {
        type: 'radio',
      },
      options: [
        'top-center',
        'top-left',
        'top-right',
        'right-center',
        'right-top',
        'right-bottom',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'left-center',
        'left-top',
        'left-bottom',
        'inner-left-top',
        'inner-left-bottom',
        'inner-right-top',
        'inner-right-bottom',
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

const Template: StoryFn<OverlayProps> = ({
  show: showProp,
  children,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLButtonElement | null>(null)

  useEffect(function syncShow() {
    if (isBoolean(showProp)) {
      setShow(showProp)
    }
  }, [showProp])

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
          width: 200,
          height: 200,
          backgroundColor: 'var(--bg-white-high)',
          borderRadius: 'var(--radius-8)',
          boxShadow: 'var(--ev-3)',
        }}
        target={targetRef.current}
        container={containerRef.current}
        onHide={() => setShow(false)}
        {...rest}
      >
        { children }
      </Overlay>
    </div>
  )
}

export const Primary: StoryObj<OverlayProps> = {
  render: Template,
  args: {
    show: false,
    position: 'bottom-center',
    marginY: 6,
  },
}

export default meta
