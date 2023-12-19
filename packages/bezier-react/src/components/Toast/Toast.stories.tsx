import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { ChannelSmileFilledIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { noop } from '~/src/utils/function'
import { iconList } from '~/src/utils/story'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { ProgressBar } from '~/src/components/ProgressBar'
import {
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'

import type ToastProps from './Toast.types'
import { type ToastOptions } from './Toast.types'
import {
  ToastAppearance,
  ToastPreset,
} from './Toast.types'
import ToastElement from './ToastElement'
import ToastProvider from './ToastProvider'
import useToast from './useToast'

const meta: Meta<ToastProps & {
  autoDismissTimeout: number
}> = {
  component: ToastElement,
  argTypes: {
    preset: {
      control: {
        type: 'select',
      },
      options: ToastPreset,
    },
    appearance: {
      control: {
        type: 'radio',
      },
      options: {
        ...ToastAppearance,
        undefined,
      },
    },
    icon: {
      control: {
        type: 'select',
      },
      options: [...iconList, undefined],
    },
    content: {
      control: {
        type: 'text',
      },
    },
    autoDismissTimeout: {
      control: {
        type: 'range',
        min: 1000,
        max: 6000,
        step: 100,
      },
    },
  },
}
export default meta

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #ddd;
  border: 1px solid grey;
`

export const Primary = {
  args: {
    content: '안내문구입니다.\nnewLine',
    preset: ToastPreset.Default,
    appearance: undefined,
    icon: undefined,
    actionContent: '새로고침',
    onClick: noop,
  },
}

function Div({
  content,
  preset,
  appearance,
  icon,
  actionContent,
}) {
  const toast = useToast()

  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState('액션 함수 테스트')

  const handleAction = (value) => {
    setDisplay(value)
  }

  const handleClick = () => {
    const currentContent = `${count}. ${content}`

    toast.addToast(currentContent, {
      preset,
      appearance,
      icon,
      actionContent,
      onClick: () => handleAction(currentContent),
    })

    setCount(count + 1)
  }

  const handleNeverDismiss = () => toast.addToast('이건 사라지지 않아요!', {
    appearance: ToastAppearance.Success,
    icon: ChannelSmileFilledIcon,
    autoDismiss: false,
  })

  const handleRightToast = () => toast.addToast('오른쪽!', {
    rightSide: true,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleClick, [])

  return (
    <div>
      <button type="button" onClick={handleClick}>Toast!</button>
      <button type="button" onClick={handleRightToast}>Right Side!</button>
      <button type="button" onClick={handleNeverDismiss}>never dismiss</button>
      <button type="button" onClick={() => toast.removeAllToasts()}>RemoveAll!</button>
      <div>{ display }</div>
    </div>
  )
}

interface WithActionProps {
  autoDismissTimeout: number
}

export const WithAction: StoryObj<ToastProps & WithActionProps> = {
  render: ({
    autoDismissTimeout,
    content,
    preset,
    appearance,
    icon,
    actionContent,
  }) => (
    <Container id="story-wrapper">
      <ToastProvider autoDismissTimeout={autoDismissTimeout}>
        <Div
          content={content}
          preset={preset}
          appearance={appearance}
          icon={icon}
          actionContent={actionContent}
        />
      </ToastProvider>
    </Container>
  ),

  args: {
    autoDismissTimeout: 2000,
    content: '안내문구입니다.',
    preset: ToastPreset.Default,
    appearance: undefined,
    icon: undefined,
    actionContent: '액션 함수 테스트',
  },
}

function ZIndexController() {
  const { addToast } = useToast()

  const handleClick = useCallback((zIndex?: number) => {
    addToast(`z-index: ${zIndex}`, {
      preset: ToastPreset.Default,
      zIndex,
    })
  }, [addToast])

  return (
    <div>
      <button type="button" onClick={() => handleClick()}>default</button>
      <button type="button" onClick={() => handleClick(1000)}>z-index: 1000</button>
      <button type="button" onClick={() => handleClick(3000)}>z-index: 3000</button>
    </div>
  )
}

const Box = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme['bgtxt-orange-lighter']};
`

export const WithZIndex: StoryFn<ToastProps> = () => (
  <Container id="story-wrapper">
    <ToastProvider>
      <ZIndexController />
      <Box>
        z-index: 2000
      </Box>
    </ToastProvider>
  </Container>
)

function CustomContentToastController() {
  const toast = useToast()

  const onClickCustomButtonInToast = useCallback(() => {
    toast.removeAllToasts()
  }, [toast])

  const handleClick = useCallback((option?: ToastOptions) => {
    toast.addToast((
      <LegacyVStack spacing={6} align="stretch">
        <LegacyStackItem>
          <Button
            text="Close All Toasts"
            styleVariant={ButtonStyleVariant.Primary}
            colorVariant={ButtonColorVariant.Blue}
            onClick={onClickCustomButtonInToast}
          />
        </LegacyStackItem>
        <LegacyStackItem>
          <ProgressBar
            width="100%"
            value={Math.random()}
          />
        </LegacyStackItem>
      </LegacyVStack>
    ), {
      preset: ToastPreset.Default,
      ...option,
    })
  }, [
    toast,
    onClickCustomButtonInToast,
  ])

  return (
    <div>
      <button type="button" onClick={() => handleClick()}>default</button>
      <button type="button" onClick={() => handleClick({ autoDismiss: false })}>never dismiss</button>
    </div>
  )
}

export const CustomContent: StoryFn<ToastProps> = () => (
  <Container id="story-wrapper">
    <ToastProvider>
      <CustomContentToastController />
    </ToastProvider>
  </Container>
)

function UpdateContentToastController() {
  const toast = useToast()
  const toastId = useRef('')

  const onClickCustomButtonInToast = useCallback(() => {
    toast.removeAllToasts()
  }, [toast])

  const handleOpenToast = useCallback((option?: ToastOptions) => {
    toastId.current = toast.addToast((
      <LegacyVStack spacing={6} align="stretch">
        <LegacyStackItem>
          <Button
            text="Close All Toasts"
            styleVariant={ButtonStyleVariant.Primary}
            colorVariant={ButtonColorVariant.Blue}
            onClick={onClickCustomButtonInToast}
          />
        </LegacyStackItem>
        <LegacyStackItem>
          <ProgressBar
            width="100%"
            value={Math.random()}
          />
        </LegacyStackItem>
      </LegacyVStack>
    ), {
      preset: ToastPreset.Default,
      ...option,
    })
  }, [
    toast,
    onClickCustomButtonInToast,
  ])

  const handleUpdateToast = useCallback((option?: ToastOptions) => {
    if (toastId.current) {
      toast.updateToast(toastId.current, (
        <LegacyVStack spacing={6} align="stretch">
          <LegacyStackItem>
            <Button
              text="Close All Toasts"
              styleVariant={ButtonStyleVariant.Primary}
              colorVariant={ButtonColorVariant.Blue}
              onClick={onClickCustomButtonInToast}
            />
          </LegacyStackItem>
          <LegacyStackItem>
            <ProgressBar
              width="100%"
              value={Math.random()}
            />
          </LegacyStackItem>
        </LegacyVStack>
      ), {
        preset: ToastPreset.Default,
        ...option,
      })
    }
  }, [
    toast,
    onClickCustomButtonInToast,
  ])

  return (
    <div>
      <button type="button" onClick={() => handleOpenToast({ autoDismiss: false })}>Add</button>
      <button type="button" onClick={() => handleUpdateToast({ autoDismiss: true })}>Update</button>
    </div>
  )
}

export const UpdateContentToast: StoryFn<ToastProps> = () => (
  <Container id="story-wrapper">
    <ToastProvider>
      <UpdateContentToastController />
    </ToastProvider>
  </Container>
)
