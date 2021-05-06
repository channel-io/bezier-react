/* External dependencies */
import React, { useEffect, useState } from 'react'
import { noop } from 'lodash-es'
import { base } from 'paths.macro'

/* Internal depependencies */
import { styled } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import { iconList } from '../../utils/storyUtils'
import useToast from '../../hooks/useToast'
import ToastProvider from './ToastProvider'
import ToastElement from './ToastElement'
import ToastProps, { ToastAppearance, ToastPreset } from './Toast.types'

export default {
  title: getTitle(base),
  component: ToastElement,
  argTypes: {
    preset: {
      control: {
        type: 'select',
        options: ToastPreset,
      },
    },
    appearance: {
      control: {
        type: 'radio',
        options: {
          ...ToastAppearance,
          undefined,
        },
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [
          ...iconList,
          undefined,
        ],
      },
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

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #ddd;
  border: 1px solid grey;
`

const Template = (args) => (
  <ToastElement
    {...args}
  />
)

export const Primary: ToastProps = Template.bind({})

Primary.args = {
  content: '안내문구입니다.\nnewLine',
  preset: ToastPreset.Default,
  appearance: undefined,
  iconName: undefined,
  actionContent: '새로고침',
  onClick: noop,
}

function Div({
  content,
  preset,
  appearance,
  iconName,
  actionContent,
}) {
  const toast = useToast()

  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState('액션 함수 테스트')

  const handleAction = (value) => {
    setDisplay(value)
  }

  const handleClick = () => {
    const curentContent = `${count}. ${content}`

    toast.addToast(curentContent, {
      preset,
      appearance,
      iconName,
      actionContent,
      onClick: () => handleAction(curentContent),
    })

    setCount(count + 1)
  }

  const handleNeverDismiss = () => toast.addToast('이건 사라지지 않아요!', {
    appearance: ToastAppearance.Success,
    iconName: 'channel-smile-filled',
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

export const WithAction = ({
  autoDismissTimeout,
  content,
  preset,
  appearance,
  iconName,
  actionContent,
}) => (
  <Container id="story-wrapper">
    <ToastProvider
      autoDismissTimeout={autoDismissTimeout}
    >
      <Div
        content={content}
        preset={preset}
        appearance={appearance}
        iconName={iconName}
        actionContent={actionContent}
      />
    </ToastProvider>
  </Container>
)

WithAction.args = {
  autoDismissTimeout: 2000,
  content: '안내문구입니다.',
  preset: ToastPreset.Default,
  appearance: undefined,
  iconName: undefined,
  actionContent: '액션 함수 테스트',
}
