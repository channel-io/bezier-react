import React from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { Button } from '~/src/components/Button'

import {
  ToastProvider,
  useToast,
} from './Toast'
import {
  type ToastOptions,
  ToastPreset,
  type ToastProps,
  type ToastProviderProps,
} from './Toast.types'

const meta: Meta<ToastProps> = {
  component: ToastProvider,
}

function ToastContent(options: ToastOptions) {
  const toast = useToast()
  return (
    <Button
      text="Click me"
      onClick={() => toast.addToast('Toast', options)}
    />
  )
}

const Template: StoryFn<ToastOptions & ToastProviderProps> = ({
  autoDismissTimeout,
  ...props
}) => (
  <ToastProvider autoDismissTimeout={autoDismissTimeout}>
    <ToastContent {...props} />
  </ToastProvider>
)

export const Primary: StoryObj<ToastOptions & ToastProviderProps> = {
  render: Template,
  args: {
    preset: ToastPreset.Default,
    rightSide: false,
    autoDismiss: true,
    autoDismissTimeout: 3000,
  },
}

export default meta

