/* External dependencies */
import React, { Fragment, forwardRef, Ref, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Icon, IconSize } from 'Components/Icon'
import { Text } from 'Components/Text'
import { getToastPreset } from './utils'
import ToastProps, { ToastPreset } from './Toast.types'
import { Element, IconWrapper, Close, ActionContent, NormalContent, Content, EllipsisableContent } from './Toast.styled'

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
  const newLineComponent = useMemo(() => (
    content.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={uuid()} typo={Typography.Size14}>
            { str }
          </Text>
        )
      }

      return (
        <Fragment key={uuid()}>
          <br />
          <Text
            typo={Typography.Size14}
          >
            { str }
          </Text>
        </Fragment>
      )
    })
  ), [content])

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
        <Icon
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
            <NormalContent>
              { newLineComponent }
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
      <Close onClick={onDismiss}>
        <Icon
          name="cancel"
          size={IconSize.XS}
        />
      </Close>
    </Element>
  )
}

export default forwardRef(ToastElement)
