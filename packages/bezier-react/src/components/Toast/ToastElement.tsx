import React, {
  type Ref,
  forwardRef,
  useMemo,
} from 'react'

import { CancelIcon } from '@channel.io/bezier-icons'
import { v4 as uuid } from 'uuid'

import { Typography } from '~/src/foundation'

import { isString } from '~/src/utils/typeUtils'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type ToastProps from './Toast.types'
import { ToastPreset } from './Toast.types'
import { getToastPreset } from './utils'

import {
  ActionContent,
  Close,
  Content,
  Element,
  EllipsisableContent,
  IconWrapper,
  NormalContent,
} from './Toast.styled'

export const TOAST_TEST_ID = 'bezier-react-toast'

const ToastElement = (
  {
    as,
    testId = TOAST_TEST_ID,
    preset = ToastPreset.Default,
    content = '',
    appearance,
    icon,
    actionContent,
    onClick,
    onDismiss,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) => {
  const ToastContentComponent = useMemo(() => {
    if (isString(content)) {
      return content.split('\n').map((str) => (
        <div key={uuid()}>
          <Text
            typo={Typography.Size14}
          >
            { str }
          </Text>
        </div>
      ))
    }
    return content
  }, [content])

  const {
    appearance: presetAppearance,
    icon: presetIcon,
  } = useMemo(() => getToastPreset(preset), [preset])

  return (
    <Element
      ref={forwardedRef}
      data-testid={testId}
      {...props}
    >
      <IconWrapper
        appearance={appearance ?? presetAppearance}
      >
        <Icon
          source={icon ?? presetIcon}
          size={IconSize.S}
        />
      </IconWrapper>
      <Content
        actionContent={actionContent}
        onClick={onClick}
      >
        <EllipsisableContent>
          <Text
            typo={Typography.Size14}
            style={{
              height: '18px',
            }}
          >
            <NormalContent
              data-testid={`${TOAST_TEST_ID}-content`}
            >
              { ToastContentComponent }
            </NormalContent>
            { ' ' }
            { actionContent && onClick && (
              <ActionContent onClick={onClick}>
                { actionContent }
              </ActionContent>
            ) }
          </Text>
        </EllipsisableContent>
      </Content>
      <Close
        onClick={onDismiss}
        data-testid={`${TOAST_TEST_ID}-close`}
      >
        <Icon
          source={CancelIcon}
          size={IconSize.XS}
        />
      </Close>
    </Element>
  )
}

export default forwardRef(ToastElement)
