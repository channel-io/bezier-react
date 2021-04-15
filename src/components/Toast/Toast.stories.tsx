/* External dependencies */
import React, { useEffect, useState } from 'react'
import { base } from 'paths.macro'

/* Internal depependencies */
import { styled } from '../../foundation'
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
        options: [
          Placement.TopCenter,
          Placement.TopLeft,
          Placement.TopRight,
          Placement.BottomCenter,
          Placement.BottomLeft,
          Placement.BottomRight,
        ],
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
        type: 'range',
        min: 100,
        max: 1000,
        step: 10,
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
        options: [
          Appearance.Succes,
          Appearance.Warning,
          Appearance.Error,
          Appearance.Info,
        ],
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleClick, [])

  return (
    <div>
      <button type="button" onClick={handleClick}>Toast!</button>
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
  <Container id="story-container">
    <ToastProvider
      placement={placement}
      globalAutoDismiss={autoDismiss}
      autoDismissTimeout={autoDismissTimeout}
      transitionDuration={transitionDuration}
      portalTargetSelector="#story-container"
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
  transitionDuration: 200,
  appearance: Appearance.Info,
  content: '안내문구입니다.',
  iconName: 'info-filled',
  actionContent: '액션 함수 테스트',
}
