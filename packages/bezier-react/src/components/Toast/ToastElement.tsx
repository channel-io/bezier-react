/* External dependencies */
import React, {
  forwardRef,
  type Ref,
  useMemo,
} from 'react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import { isString } from '~/src/utils/typeUtils'
import {
  Icon,
  LegacyIcon,
  CancelIcon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'
import { getToastPreset } from './utils'
import type ToastProps from './Toast.types'
import { ToastPreset } from './Toast.types'
import {
  Element,
  IconWrapper,
  Close,
  ActionContent,
  NormalContent,
  Content,
  EllipsisableContent,
} from './Toast.styled'

export const TOAST_TEST_ID = 'bezier-react-toast'

const ToastElement = (
  {
    as,
    testId = TOAST_TEST_ID,
    preset = ToastPreset.Default,
    content = '',
    appearance,
    iconName,
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
    iconName: presetIconName,
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
        <LegacyIcon
          name={iconName ?? presetIconName}
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
