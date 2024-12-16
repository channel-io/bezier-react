import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Button } from '~/src/components/Button'

import { ToastProvider, useToast } from './Toast'
import {
  type ToastOptions,
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
      onClick={() =>
        toast.addToast(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla tempor id ipsum at imperdiet. Vivamus eget euismod tortor, nec lobortis massa. Donec viverra varius felis eu sagittis.',
          options
        )
      }
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
    preset: 'default',
    rightSide: false,
    autoDismiss: true,
    autoDismissTimeout: 3000,
  },
}

export default meta
