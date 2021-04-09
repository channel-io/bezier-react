/* External dependencies */
import React, { useEffect } from 'react'
import { base } from 'paths.macro'
import { noop } from 'lodash'

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
        type: 'radio',
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
  actionOnClick,
}) {
  const toast = useToast()

  const handleClick = () => {
    toast.addToast(content, { appearance, iconName, actionContent, actionOnClick })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleClick, [])

  return (
    <div>
      <button type="button" onClick={handleClick}>Toast!</button>
      <button type="button" onClick={() => toast.removeAllToasts()}>RemoveAll!</button>
    </div>
  )
}

const Template = ({
  placement,
  transitionDuration,
  appearance,
  content,
  iconName,
  actionContent,
  actionOnClick,
}) => (
  <Container id="story-container">
    <ToastProvider
      placement={placement}
      transitionDuration={transitionDuration}
      portalTargetSelector="#story-container"
    >
      <Div
        appearance={appearance}
        content={content}
        iconName={iconName}
        actionContent={actionContent}
        actionOnClick={actionOnClick}
      />
    </ToastProvider>
  </Container>
)

export const Primary: ToastProps = Template.bind({})

Primary.args = {
  placement: Placement.BottomLeft,
  transitionDuration: 200,
  appearance: Appearance.Info,
  content: '안내문구입니다.',
  iconName: 'info-filled',
  actionContent: '새로고침',
  actionOnClick: noop,
}
