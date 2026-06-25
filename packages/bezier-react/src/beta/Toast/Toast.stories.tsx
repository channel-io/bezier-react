import { CheckIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Button } from '~/src/beta/Button'
import { HStack } from '~/src/beta/HStack'

import { ToastProvider, useToast } from './Toast'
import {
  type ToastOptions,
  type ToastProps,
  type ToastProviderProps,
} from './Toast.types'



const meta: Meta<ToastProps> = {
  title: 'Beta components/Toast',
  component: ToastProvider,
  argTypes: {
    autoDismiss: {
      control: 'boolean',
    },
    autoDismissTimeout: {
      control: 'number',
    },
    preset: {
      control: 'select',
      options: ['info', 'success', 'error'],
    },
  },
}

function ToastContent(options: ToastOptions) {
  const toast = useToast()

  return (
    <Button
      label="Show toast"
      onClick={() =>
        toast.addToast(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNulla tempor id ipsum at imperdiet.',
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
    preset: 'info',
    rightSide: false,
    autoDismiss: true,
    autoDismissTimeout: 3000,
  },
}

export const Presets: StoryObj = {
  render: () => {
    function PresetToastContent() {
      const toast = useToast()

      return (
        <HStack spacing={8}>
          <Button
            label="Info"
            onClick={() => toast.addToast('Info toast', { preset: 'info' })}
          />
          <Button
            label="Success"
            onClick={() =>
              toast.addToast('Success toast', { preset: 'success' })
            }
          />
          <Button
            label="Error"
            semantic="destructive"
            onClick={() => toast.addToast('Error toast', { preset: 'error' })}
          />
        </HStack>
      )
    }

    return (
      <ToastProvider>
        <PresetToastContent />
      </ToastProvider>
    )
  },
}

export const CustomIcon: StoryObj = {
  render: () => {
    function CustomIconToastContent() {
      const toast = useToast()

      return (
        <Button
          label="Show toast"
          onClick={() =>
            toast.addToast('Custom icon keeps the preset color.', {
              preset: 'success',
              icon: CheckIcon,
            })
          }
        />
      )
    }

    return (
      <ToastProvider>
        <CustomIconToastContent />
      </ToastProvider>
    )
  },
}

const widthVariantContents = {
  min: 'OK',
  fit: 'Content fit toast',
  max: 'This toast content is intentionally long enough to exceed the maximum width, so the toast should stop growing at 460px and wrap within that width.',
  lineClamp:
    'Line 1: Toasts can contain multiline text.\nLine 2: The content area keeps wrapping.\nLine 3: This is still visible.\nLine 4: This is still visible.\nLine 5: This is still visible.\nLine 6: This line should be truncated.\nLine 7: This line should also be hidden.',
} as const

function WidthVariantsToastContent(options: ToastOptions) {
  const toast = useToast()
  const showToast = (content: string) => toast.addToast(content, options)

  return (
    <HStack
      spacing={8}
      wrap
    >
      <Button
        label="Minimum"
        onClick={() => showToast(widthVariantContents.min)}
      />
      <Button
        label="Fit content"
        onClick={() => showToast(widthVariantContents.fit)}
      />
      <Button
        label="Maximum"
        onClick={() => showToast(widthVariantContents.max)}
      />
      <Button
        label="Line clamp"
        onClick={() => showToast(widthVariantContents.lineClamp)}
      />
      <Button
        label="Show all"
        onClick={() => {
          Object.values(widthVariantContents).forEach(showToast)
        }}
      />
    </HStack>
  )
}

export const WidthVariants: StoryObj<ToastOptions & ToastProviderProps> = {
  render: ({ autoDismissTimeout, ...props }) => (
    <ToastProvider autoDismissTimeout={autoDismissTimeout}>
      <WidthVariantsToastContent {...props} />
    </ToastProvider>
  ),
  args: {
    preset: 'info',
    rightSide: false,
    autoDismiss: false,
    autoDismissTimeout: 3000,
  },
}

export default meta
