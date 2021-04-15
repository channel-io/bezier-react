/* External dependencies */
import React, { useEffect, useState } from 'react'
import { base } from 'paths.macro'

/* Internal depependencies */
import { styled, TransitionDuration } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import { iconList } from '../Icon/Icon.stories'
import ToastProvider from '../../contexts/ToastProvider'
import { useToast } from '../../hooks/useToast'
import ToastElement from './ToastElement'
import ToastProps, { Appearance, Placement } from './Toast.types'

export default {
  title: getTitle(base),
  component: ToastElement,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: Placement,
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
    transitionDuration: {
      control: {
        type: 'radio',
        options: TransitionDuration,
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    appearance: {
      control: {
        type: 'radio',
        options: Appearance,
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: iconList,
      },
    },
  },
}

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  background-color: #ddd;
  border: 1px solid grey;
`

function Div({
  appearance,
  content,
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
      appearance,
      iconName,
      actionContent,
      actionOnClick: () => handleAction(curentContent),
    })

    setCount(count + 1)
  }

  const handleNeverDismiss = () => toast.addToast('이건 사라지지 않아요!', {
    appearance: Appearance.Success,
    iconName: 'channel-smile-filled',
    autoDismiss: false,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleClick, [])

  return (
    <div>
      <button type="button" onClick={handleClick}>Toast!</button>
      <button type="button" onClick={handleNeverDismiss}>never dismiss</button>
      <button type="button" onClick={() => toast.removeAllToasts()}>RemoveAll!</button>
      <div>{ display }</div>
    </div>
  )
}

const Template = ({
  placement,
  autoDismiss,
  autoDismissTimeout,
  transitionDuration,
  appearance,
  content,
  iconName,
  actionContent,
}) => (
  <Container id="story-wrapper">
    <ToastProvider
      placement={placement}
      globalAutoDismiss={autoDismiss}
      autoDismissTimeout={autoDismissTimeout}
      transitionDuration={transitionDuration}
      /*
      * portalTargetSelector를 통해 wrapper를 지정할 수 있습니다.
      * querySelector 문법을 따릅니다.
      */
      portalTargetSelector="#story-wrapper"
    >
      <Div
        appearance={appearance}
        content={content}
        iconName={iconName}
        actionContent={actionContent}
      />
    </ToastProvider>
  </Container>
)

export const Primary: ToastProps = Template.bind({})

Primary.args = {
  placement: Placement.BottomLeft,
  autoDismiss: true,
  autoDismissTimeout: 2000,
  transitionDuration: TransitionDuration.S,
  appearance: Appearance.Info,
  content: '안내문구입니다.',
  iconName: 'info-filled',
  actionContent: '액션 함수 테스트',
}
